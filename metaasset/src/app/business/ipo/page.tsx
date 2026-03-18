import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './ipo.module.css';

export const metadata: Metadata = {
  title: 'IPO 펀드 | 메타자산운용(주)',
  description: '메타자산운용의 IPO(기업공개) 펀드 전략과 투자 프로세스를 안내합니다.',
};

const BIZ_NAV = [
  { label: '부동산 펀드', href: '/business/intro' },
  { label: 'PFV', href: '/business/pfv' },
  { label: 'IPO 펀드', href: '/business/ipo' },
  { label: '주식형 펀드', href: '/business/equity' },
];

const IPO_PROCESS = [
  { step: '01', title: '기업 발굴', desc: '성장 잠재력이 높은 상장 예정 기업을 선별합니다.' },
  { step: '02', title: '기업 분석', desc: '재무분석, 사업분석, 경영진 평가를 통해 가치를 산정합니다.' },
  { step: '03', title: '투자 실행', desc: '적정 공모가 대비 상승여력 분석 후 최적 시점에 투자합니다.' },
  { step: '04', title: '상장 후 관리', desc: '상장 후 수급 분석 및 매도 타이밍을 결정합니다.' },
  { step: '05', title: '수익 실현', desc: '체계적인 Exit 전략으로 안정적 수익을 실현합니다.' },
];

const IPO_STATS = [
  { value: '92', unit: '%', label: '평균 공모 수익률' },
  { value: '150', unit: '+', label: '분석 기업 수' },
  { value: '45', unit: '건', label: '투자 실행 건수' },
  { value: '100', unit: '%', label: '원금 회수율' },
];

export default function IpoPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="IPO FUND"
        titleKo="IPO 펀드"
        description="체계적인 기업 분석과 검증된 투자 프로세스를 통해 IPO 시장에서의 안정적 수익을 추구합니다."
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400&q=90"
      />
      <SubNavigation items={BIZ_NAV} variant="cards" />

      {/* Section 1: Dark - IPO Overview */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>IPO INVESTMENT</span>
                <h2 className={styles.heading}>
                  검증된 기업에 대한<br />
                  체계적 공모주 투자
                </h2>
                <p className={styles.desc}>
                  메타자산운용의 IPO 펀드는 상장 예정 기업에 대해 깊이 있는 분석을 바탕으로
                  안정적인 공모 수익을 추구합니다. 독자적인 기업가치 평가 모델과
                  풍부한 시장 경험을 활용하여 투자자에게 차별화된 투자 기회를 제공합니다.
                </p>
              </div>
              <div className={styles.introImageCol}>
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400&q=90"
                  alt="IPO 금융 차트"
                  width={600}
                  height={400}
                  className={styles.fillImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Light - Investment Process */}
      <section className={styles.processSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.labelDark}>INVESTMENT PROCESS</span>
            <h2 className={styles.headingDark}>투자 프로세스</h2>
            <div className={styles.processGrid}>
              {IPO_PROCESS.map((item) => (
                <div key={item.step} className={styles.processCard}>
                  <span className={styles.processStep}>{item.step}</span>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Dark - Stats */}
      <section className={styles.statsSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.statsGrid}>
              {IPO_STATS.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>
                    {stat.value}<span className={styles.statUnit}>{stat.unit}</span>
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
