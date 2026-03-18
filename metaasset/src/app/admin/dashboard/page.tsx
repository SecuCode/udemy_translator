'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';
import Logo from '@/components/ui/Logo';

interface NoticeItem {
  id: number;
  category: string;
  title: string;
  date: string;
  status: string;
}

interface FundItem {
  id: number;
  name: string;
  category: string;
  aum: string;
  status: string;
}

interface JobItem {
  id: number;
  title: string;
  status: string;
  date: string;
}

const INITIAL_NOTICES: NoticeItem[] = [
  { id: 1, category: '공지', title: '메타자산운용 홈페이지 오픈 안내', date: '2026.03.15', status: '게시중' },
  { id: 2, category: '뉴스', title: 'IPO 투자 전략 세미나 개최', date: '2026.03.10', status: '게시중' },
  { id: 3, category: '공시', title: '2025년 4분기 운용 보고서 공시', date: '2026.02.28', status: '게시중' },
  { id: 4, category: '공지', title: '신규 부동산 펀드 출시 안내', date: '2026.02.15', status: '게시중' },
  { id: 5, category: '뉴스', title: '메타자산운용, 올해의 자산운용사 선정', date: '2026.01.30', status: '게시중' },
];

const INITIAL_FUNDS: FundItem[] = [
  { id: 1, name: '메타 프라임 오피스 1호', category: '부동산', aum: '500억', status: '운용중' },
  { id: 2, name: '메타 물류센터 개발 펀드', category: '부동산', aum: '350억', status: '운용중' },
  { id: 3, name: '메타 IPO 전략 2호', category: 'IPO', aum: '200억', status: '운용중' },
  { id: 4, name: '메타 멀티스트래터지', category: '대체', aum: '150억', status: '모집중' },
  { id: 5, name: '메타 밸류업 주식형', category: '주식', aum: '100억', status: '모집중' },
];

const INITIAL_JOBS: JobItem[] = [
  { id: 1, title: '[투자운용부문] 경력사원 채용공고', status: '진행중', date: '2026.03.01' },
  { id: 2, title: '[대체투자팀] 경력사원 채용공고', status: '마감', date: '2025.10.15' },
  { id: 3, title: '[컴플라이언스팀] 경력사원 채용공고', status: '마감', date: '2025.07.01' },
];

type MenuKey = 'dashboard' | 'notices' | 'funds' | 'jobs' | 'settings';

const MENU: { key: MenuKey; label: string; icon: string }[] = [
  { key: 'dashboard', label: '대시보드', icon: '📊' },
  { key: 'notices', label: '공지·보도관리', icon: '📋' },
  { key: 'funds', label: '펀드 관리', icon: '💰' },
  { key: 'jobs', label: '채용 관리', icon: '👥' },
  { key: 'settings', label: '설정', icon: '⚙️' },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<MenuKey>('dashboard');
  const [notices, setNotices] = useState(INITIAL_NOTICES);
  const [funds] = useState(INITIAL_FUNDS);
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('admin_auth');
      if (!auth) {
        router.push('/admin');
      }
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    router.push('/admin');
  };

  const handleDeleteNotice = (id: number) => {
    setNotices(prev => prev.filter(n => n.id !== id));
  };

  const handleToggleJob = (id: number) => {
    setJobs(prev => prev.map(j =>
      j.id === id ? { ...j, status: j.status === '진행중' ? '마감' : '진행중' } : j
    ));
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? '' : styles.sidebarCollapsed}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogoWrap}>
            <Logo width={30} height={25} />
            <h1 className={styles.sidebarLogo}>
              META <span className={styles.sidebarLogoAccent}>ADMIN</span>
            </h1>
          </div>
          <button
            className={styles.collapseBtn}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            type="button"
            aria-label="메뉴 토글"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {MENU.map((item) => (
            <button
              key={item.key}
              className={`${styles.navItem} ${activeMenu === item.key ? styles.navItemActive : ''}`}
              onClick={() => setActiveMenu(item.key)}
              type="button"
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {sidebarOpen && <span className={styles.navLabel}>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <button className={styles.logoutBtn} onClick={handleLogout} type="button">
            {sidebarOpen ? '🚪 로그아웃' : '🚪'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Top bar */}
        <header className={styles.topBar}>
          <h2 className={styles.pageTitle}>
            {MENU.find(m => m.key === activeMenu)?.icon}{' '}
            {MENU.find(m => m.key === activeMenu)?.label}
          </h2>
          <div className={styles.topBarRight}>
            <span className={styles.adminName}>관리자</span>
          </div>
        </header>

        {/* Content Area */}
        <div className={styles.content}>
          {/* Dashboard */}
          {activeMenu === 'dashboard' && (
            <div className={styles.dashboardGrid}>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>📋</span>
                <div>
                  <span className={styles.statValue}>{notices.length}</span>
                  <span className={styles.statLabel}>게시글</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>💰</span>
                <div>
                  <span className={styles.statValue}>{funds.length}</span>
                  <span className={styles.statLabel}>운용 펀드</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>👥</span>
                <div>
                  <span className={styles.statValue}>{jobs.filter(j => j.status === '진행중').length}</span>
                  <span className={styles.statLabel}>채용 진행중</span>
                </div>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>📈</span>
                <div>
                  <span className={styles.statValue}>5,000억</span>
                  <span className={styles.statLabel}>총 AUM</span>
                </div>
              </div>

              {/* Recent activity */}
              <div className={styles.recentCard}>
                <h3 className={styles.recentTitle}>최근 활동</h3>
                <ul className={styles.recentList}>
                  <li className={styles.recentItem}>
                    <span className={styles.recentDot} />
                    <span>홈페이지 오픈 공지 등록</span>
                    <span className={styles.recentDate}>2026.03.15</span>
                  </li>
                  <li className={styles.recentItem}>
                    <span className={styles.recentDot} />
                    <span>IPO 전략 세미나 보도자료 등록</span>
                    <span className={styles.recentDate}>2026.03.10</span>
                  </li>
                  <li className={styles.recentItem}>
                    <span className={styles.recentDot} />
                    <span>투자운용부문 채용공고 등록</span>
                    <span className={styles.recentDate}>2026.03.01</span>
                  </li>
                  <li className={styles.recentItem}>
                    <span className={styles.recentDot} />
                    <span>4분기 운용보고서 공시</span>
                    <span className={styles.recentDate}>2026.02.28</span>
                  </li>
                </ul>
              </div>

              <div className={styles.recentCard}>
                <h3 className={styles.recentTitle}>사이트 현황</h3>
                <div className={styles.siteStats}>
                  <div className={styles.siteStat}>
                    <span className={styles.siteStatLabel}>오늘 방문자</span>
                    <span className={styles.siteStatValue}>128</span>
                  </div>
                  <div className={styles.siteStat}>
                    <span className={styles.siteStatLabel}>이번 달 방문자</span>
                    <span className={styles.siteStatValue}>3,247</span>
                  </div>
                  <div className={styles.siteStat}>
                    <span className={styles.siteStatLabel}>페이지 뷰</span>
                    <span className={styles.siteStatValue}>12,891</span>
                  </div>
                  <div className={styles.siteStat}>
                    <span className={styles.siteStatLabel}>서버 상태</span>
                    <span className={styles.siteStatValue} style={{ color: '#22c55e' }}>● 정상</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notices Management */}
          {activeMenu === 'notices' && (
            <div>
              <div className={styles.tableHeader}>
                <h3 className={styles.tableTitle}>공지·보도·공시 관리</h3>
                <button className={styles.addBtn} type="button">+ 새 글 작성</button>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>카테고리</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((n) => (
                    <tr key={n.id}>
                      <td>{n.id}</td>
                      <td><span className={styles.categoryBadge}>{n.category}</span></td>
                      <td className={styles.titleCell}>{n.title}</td>
                      <td>{n.date}</td>
                      <td><span className={styles.statusActive}>{n.status}</span></td>
                      <td>
                        <div className={styles.actionBtns}>
                          <button className={styles.editBtn} type="button">수정</button>
                          <button
                            className={styles.deleteBtn}
                            type="button"
                            onClick={() => handleDeleteNotice(n.id)}
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Funds Management */}
          {activeMenu === 'funds' && (
            <div>
              <div className={styles.tableHeader}>
                <h3 className={styles.tableTitle}>펀드 관리</h3>
                <button className={styles.addBtn} type="button">+ 펀드 추가</button>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>펀드명</th>
                    <th>유형</th>
                    <th>운용규모</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {funds.map((f) => (
                    <tr key={f.id}>
                      <td>{f.id}</td>
                      <td className={styles.titleCell}>{f.name}</td>
                      <td><span className={styles.categoryBadge}>{f.category}</span></td>
                      <td>{f.aum}</td>
                      <td>
                        <span className={f.status === '모집중' ? styles.statusRecruiting : styles.statusActive}>
                          {f.status}
                        </span>
                      </td>
                      <td>
                        <div className={styles.actionBtns}>
                          <button className={styles.editBtn} type="button">수정</button>
                          <button className={styles.editBtn} type="button">상세</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Jobs Management */}
          {activeMenu === 'jobs' && (
            <div>
              <div className={styles.tableHeader}>
                <h3 className={styles.tableTitle}>채용공고 관리</h3>
                <button className={styles.addBtn} type="button">+ 공고 등록</button>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>공고명</th>
                    <th>등록일</th>
                    <th>상태</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((j) => (
                    <tr key={j.id}>
                      <td>{j.id}</td>
                      <td className={styles.titleCell}>{j.title}</td>
                      <td>{j.date}</td>
                      <td>
                        <span className={j.status === '진행중' ? styles.statusRecruiting : styles.statusClosed}>
                          {j.status}
                        </span>
                      </td>
                      <td>
                        <div className={styles.actionBtns}>
                          <button className={styles.editBtn} type="button">수정</button>
                          <button
                            className={styles.editBtn}
                            type="button"
                            onClick={() => handleToggleJob(j.id)}
                          >
                            {j.status === '진행중' ? '마감처리' : '재개'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Settings */}
          {activeMenu === 'settings' && (
            <div className={styles.settingsGrid}>
              <div className={styles.settingsCard}>
                <h3 className={styles.settingsTitle}>사이트 설정</h3>
                <div className={styles.settingsField}>
                  <label className={styles.settingsLabel}>회사명</label>
                  <input className={styles.settingsInput} defaultValue="메타자산운용(주)" />
                </div>
                <div className={styles.settingsField}>
                  <label className={styles.settingsLabel}>대표 연락처</label>
                  <input className={styles.settingsInput} defaultValue="02-780-9901" />
                </div>
                <div className={styles.settingsField}>
                  <label className={styles.settingsLabel}>대표 이메일</label>
                  <input className={styles.settingsInput} defaultValue="info@metaasset.co.kr" />
                </div>
                <div className={styles.settingsField}>
                  <label className={styles.settingsLabel}>주소</label>
                  <input className={styles.settingsInput} defaultValue="서울특별시 영등포구 국제금융로 8길 11, 대영빌딩 6층 631호" />
                </div>
                <button className={styles.addBtn} type="button" style={{ marginTop: '1rem' }}>저장</button>
              </div>

              <div className={styles.settingsCard}>
                <h3 className={styles.settingsTitle}>관리자 계정</h3>
                <div className={styles.settingsField}>
                  <label className={styles.settingsLabel}>이메일</label>
                  <input className={styles.settingsInput} defaultValue="admin@metaasset.co.kr" readOnly />
                </div>
                <div className={styles.settingsField}>
                  <label className={styles.settingsLabel}>비밀번호 변경</label>
                  <input className={styles.settingsInput} type="password" placeholder="새 비밀번호" />
                </div>
                <button className={styles.addBtn} type="button" style={{ marginTop: '1rem' }}>비밀번호 변경</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
