import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './equity.module.css';
import { IconTrendingUp, IconSearch, IconTarget } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: '주식형 펀드 | 메타자산운용(주)',
  description: '메타자산운용의 주식형 펀드를 안내합니다.',
};

const BIZ_NAV = [
  { label: '부동산 펀드', href: '/business/intro' },
  { label: 'PFV', href: '/business/pfv' },
  { label: 'IPO 펀드', href: '/business/ipo' },
  { label: '주식형 펀드', href: '/business/equity' },
];

const STRATEGIES = [
  { title: 'IPO 투자 전략', desc: '기업공개(IPO) 시장에서 공모가 대비 상승여력이 큰 종목을 선별하여 투자합니다. 적정 가치에 도달 시 매도하여 안정적 수익을 추구합니다.', icon: 'trending-up' },
  { title: '가치투자 전략', desc: '기업의 내재가치 대비 시장에서 저평가된 종목을 발굴하여 중장기 투자합니다. 재무분석과 사업분석을 통해 투자 의사결정을 수립합니다.', icon: 'search' },
  { title: '이벤트 드리븐 전략', desc: 'M&A, 분할, 구조조정 등 기업 이벤트로 인한 가치변동 기회를 포착하여 투자합니다.', icon: 'target' },
];

export default function EquityPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="EQUITY FUND"
        titleKo="주식형 펀드"
        description="전문적인 리서치와 체계적인 투자 프로세스를 통해 초과수익을 추구합니다."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2400&q=90"
      />
      <SubNavigation items={BIZ_NAV} variant="cards" />

      {/* Light: intro with image right */}
      <section className={styles.lightSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>EQUITY FUND</span>
                <h2 className={styles.heading}>
                  메타자산운용의 주식형 펀드는<br />
                  전문 리서치와 다층 분석을 기반으로<br />
                  차별화된 초과수익을 추구합니다.
                </h2>
                <p className={styles.desc}>
                  IPO 투자, 가치투자, 이벤트 드리븐 등 다양한 투자 전략을 운용하여
                  시장 상황에 따라 탄력적으로 포트폴리오를 운용합니다.
                </p>
              </div>
              <div className={styles.introImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2400&q=90"
                  alt="주식형 펀드"
                  width={600}
                  height={400}
                  className={styles.introImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dark: strategy cards */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.darkLabel}>INVESTMENT STRATEGY</span>
            <h2 className={styles.darkHeading}>투자 전략</h2>
          </ScrollReveal>
          <div className={styles.strategyGrid}>
            {STRATEGIES.map((strat, idx) => (
              <ScrollReveal key={strat.title} delay={idx * 100}>
                <div className={styles.strategyCard}>
                  <span className={styles.strategyIcon}>
                    {strat.icon === 'trending-up' && <IconTrendingUp size={28} />}
                    {strat.icon === 'search' && <IconSearch size={28} />}
                    {strat.icon === 'target' && <IconTarget size={28} />}
                  </span>
                  <h3 className={styles.strategyTitle}>{strat.title}</h3>
                  <p className={styles.strategyDesc}>{strat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Light: performance */}
      <section className={styles.perfSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.perfGrid}>
              <div className={styles.perfItem}>
                <span className={styles.perfValue}>5</span>
                <span className={styles.perfLabel}>운용 펀드</span>
              </div>
              <div className={styles.perfItem}>
                <span className={styles.perfValue}>1,200<span className={styles.perfUnit}>억</span></span>
                <span className={styles.perfLabel}>운용자산</span>
              </div>
              <div className={styles.perfItem}>
                <span className={styles.perfValue}>18.3<span className={styles.perfUnit}>%</span></span>
                <span className={styles.perfLabel}>최고 수익률</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
