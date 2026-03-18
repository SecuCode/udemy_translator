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
  { year: '2026', events: ['홈페이지 리뉴얼', '신규 부동산 펀드 출시', 'IPO 투자 전략 강화'] },
  { year: '2025', events: ['운용자산 5,000억원 달성', '대체투자 부문 확장', '자산운용 보고서 공시 시스템 구축'] },
  { year: '2024', events: ['메타자산운용(주) 설립', '금융투자업 인가 취득', '여의도 본사 설립'] },
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
