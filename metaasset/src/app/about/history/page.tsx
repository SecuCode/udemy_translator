import type { Metadata } from 'next';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './history.module.css';

export const metadata: Metadata = {
  title: '연혁 | 메타자산운용(주)',
  description: '메타자산운용의 주요 연혁을 안내합니다.',
};

const ABOUT_NAV = [
  { label: '회사소개', href: '/about/overview' },
  { label: '리더십', href: '/about/ceo' },
  { label: '조직도', href: '/about/organization' },
  { label: '연혁', href: '/about/history' },
  { label: '오시는 길', href: '/about/location' },
];

const HISTORY = [
  {
    year: '2026',
    events: [
      '대주주 변경 (최대주주 교체)',
      '대표이사 변경 — 김기용 대표이사 취임',
      '사명 변경: 케이핀자산운용(주) → 메타자산운용(주)',
      '브랜드 리뉴얼 및 기업 아이덴티티(CI) 전면 개편',
      '홈페이지 리뉴얼 오픈',
      '부동산·대체투자 부문 신설 및 전문인력 영입 개시',
    ],
  },
  {
    year: '2025',
    events: [
      'IPO 공모주 펀드 수익률 15%+ 달성',
      '코스닥벤처 펀드 운용 성과 개선',
      '자산운용 보고서 공시 시스템 고도화',
    ],
  },
  {
    year: '2024',
    events: [
      '메자닌(CB·BW) 투자 전략 본격 가동',
      '채권 운용 포트폴리오 다변화',
      '리서치 역량 강화 — 기업분석 데이터베이스 구축',
    ],
  },
  {
    year: '2023',
    events: [
      'IPO 공모주 전담 펀드 설정',
      '코스닥벤처 펀드 설정 및 운용 개시',
      '운용자산(AUM) 성장 기반 구축',
    ],
  },
  {
    year: '2022',
    events: [
      '투자운용인력 충원 및 조직 확대',
      '채권형 펀드 신규 설정',
      '리스크관리 시스템 도입',
    ],
  },
  {
    year: '2021',
    events: [
      '첫 번째 운용 펀드 설정',
      '여의도 본사 이전 (대영빌딩)',
      '금융투자협회 가입',
    ],
  },
  {
    year: '2020',
    events: [
      '투자운용인력 영입 및 운용 체계 구축',
      '내부 컴플라이언스 시스템 정비',
    ],
  },
  {
    year: '2019',
    events: [
      '케이핀자산운용 주식회사 설립',
      '전문사모집합투자업 등록 (금융위원회)',
    ],
  },
];

export default function HistoryPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="ABOUT US"
        titleKo="회사소개"
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
      />
      <SubNavigation items={ABOUT_NAV} variant="cards" />

      <section className={styles.section}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.label}>HISTORY</span>
            <h2 className={styles.title}>연혁</h2>
          </ScrollReveal>

          <div className={styles.timeline}>
            {HISTORY.map((item, idx) => (
              <ScrollReveal key={item.year} delay={idx * 100}>
                <div className={styles.timelineItem}>
                  <div className={styles.yearCol}>
                    <span className={styles.year}>{item.year}</span>
                  </div>
                  <div className={styles.line}>
                    <div className={styles.dot} />
                  </div>
                  <div className={styles.eventsCol}>
                    {item.events.map((event) => (
                      <p key={event} className={styles.event}>{event}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
