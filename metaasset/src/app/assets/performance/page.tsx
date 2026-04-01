import type { Metadata } from 'next';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './assets.module.css';
import { AUM_STATS } from '@/lib/constants';

export const metadata: Metadata = {
  title: '운용 실적 | 메타자산운용(주)',
  description: '메타자산운용의 운용 실적과 자산 현황을 안내합니다.',
};

const ASSETS_NAV = [
  { label: '운용 실적', href: '/assets/performance' },
  { label: '펀드 현황', href: '/assets/funds' },
];

const PORTFOLIO = [
  { name: 'IPO / 공모주', ratio: 35, amount: '266억원', color: '#1A2D4A' },
  { name: '메자닌 / 채권', ratio: 30, amount: '228억원', color: '#2A3A2A' },
  { name: '코스닥벤처', ratio: 20, amount: '152억원', color: '#3C3228' },
  { name: '기타 운용', ratio: 15, amount: '113억원', color: '#3A2A3A' },
];

const INVESTMENT_AREAS = [
  { title: '오피스', desc: '서울 주요 권역의 프라임급 오피스 빌딩 투자', status: '투자중' },
  { title: '물류센터', desc: '수도권 거점 물류 시설 개발·운용', status: '투자중' },
  { title: 'IPO / Pre-IPO', desc: '유망 기업의 성장 과정 전략적 참여', status: '투자중' },
  { title: '인프라', desc: '사회간접자본 및 신재생에너지 프로젝트', status: '검토중' },
  { title: '메자닌', desc: '구조화 금융 및 전환사채 투자', status: '투자중' },
  { title: '해외 부동산', desc: '아시아태평양 주요 도시 부동산 투자', status: '준비중' },
];

export default function PerformancePage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="ASSET MANAGEMENT"
        titleKo="운용현황"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=90"
      />
      <SubNavigation items={ASSETS_NAV} variant="cards" />

      {/* Section 1: Dark AUM overview */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.aumGrid}>
              <div className={styles.aumLabel}>
                <span className={styles.verticalText}>Assets Under Management</span>
              </div>
              <div className={styles.aumStats}>
                {AUM_STATS.map((stat) => (
                  <div key={stat.labelEn} className={styles.aumStatItem}>
                    <span className={styles.aumStatLabel}>{stat.label}</span>
                    <div className={styles.aumStatValue}>
                      <span className={styles.aumStatNumber}>
                        {stat.prefix}{stat.value.toLocaleString()}
                      </span>
                      <span className={styles.aumStatUnit}>{stat.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Portfolio Breakdown */}
      <section className={styles.portfolioSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.label}>PORTFOLIO ALLOCATION</span>
            <h2 className={styles.title}>자산 배분 현황</h2>
          </ScrollReveal>
          <div className={styles.portfolioGrid}>
            {PORTFOLIO.map((item, idx) => (
              <ScrollReveal key={item.name} delay={idx * 100}>
                <div className={styles.portfolioCard} style={{ borderLeftColor: item.color }}>
                  <div className={styles.portfolioHeader}>
                    <span className={styles.portfolioName}>{item.name}</span>
                    <span className={styles.portfolioRatio}>{item.ratio}%</span>
                  </div>
                  <span className={styles.portfolioAmount}>{item.amount}</span>
                  <div className={styles.portfolioBar}>
                    <div className={styles.portfolioFill} style={{ width: `${item.ratio}%`, backgroundColor: item.color }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Performance Table */}
      <section className={styles.tableSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.label}>PERFORMANCE</span>
            <h2 className={styles.title}>운용 실적 요약</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>2025년</th>
                  <th>2026년</th>
                  <th>2027년(목표)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>운용자산(억원)</td><td>520</td><td>759</td><td>1,000</td></tr>
                <tr><td>운용펀드(개)</td><td>4</td><td>6</td><td>10</td></tr>
                <tr><td>평균수익률(%)</td><td>8.5</td><td>11.2</td><td>12.0</td></tr>
                <tr><td>신규설정(건)</td><td>2</td><td>3</td><td>5</td></tr>
                <tr><td>임직원(명)</td><td>5</td><td>8</td><td>10</td></tr>
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Investment Areas */}
      <section className={styles.areasSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.areasLabel}>INVESTMENT AREAS</span>
            <h2 className={styles.areasTitle}>투자 영역</h2>
          </ScrollReveal>
          <div className={styles.areasGrid}>
            {INVESTMENT_AREAS.map((area, idx) => (
              <ScrollReveal key={area.title} delay={idx * 60}>
                <div className={styles.areaCard}>
                  <div className={styles.areaHeader}>
                    <h3 className={styles.areaName}>{area.title}</h3>
                    <span className={styles.areaStatus}>{area.status}</span>
                  </div>
                  <p className={styles.areaDesc}>{area.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
