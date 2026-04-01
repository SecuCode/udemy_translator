import type { Metadata } from 'next';
import Image from 'next/image';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './business.module.css';

export const metadata: Metadata = {
  title: '사업 소개 | 메타자산운용(주)',
  description: '메타자산운용의 주요 사업 분야를 안내합니다. 부동산 펀드, IPO 투자, PFV, 주식형 펀드 등.',
};

const BIZ_NAV = [
  { label: '부동산 펀드', href: '/business/intro' },
  { label: 'PFV', href: '/business/pfv' },
  { label: 'IPO 펀드', href: '/business/ipo' },
  { label: '주식형 펀드', href: '/business/equity' },
];

const FUND_TYPES = [
  {
    num: '01',
    title: '부동산 개발 펀드',
    desc: '땅을 매입하고, 건물을 짓고, 완성된 자산을 분양·매각하여 수익을 실현합니다',
    detail: '쉽게 말해 "부동산을 직접 만들어서 파는" 펀드입니다. 서울·수도권 핵심 입지에 오피스빌딩, 물류센터, 주상복합 등을 새로 건설하고, 완공 후 분양 또는 통매각하여 개발차익을 투자자에게 돌려드립니다. 일반 부동산 투자보다 수익률이 높은 대신, 시공·인허가 리스크가 있으므로 메타자산운용이 기획→인허가→시공감리→분양까지 전 과정을 직접 관리합니다.',
    advantages: ['높은 수익률 — 개발 이익이 그대로 투자자 수익으로', '시공사 연대보증·에스크로 계좌 등 다중 안전장치', '전담 PM팀이 공정·원가·품질 실시간 관리'],
    metrics: { aum: '420억', returns: '연 9.2%', count: '3건' },
    color: '#5C524A',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=90',
  },
  {
    num: '02',
    title: '부동산 임대 펀드',
    desc: '이미 완공된 우량 건물을 매입하여 매달 임대료 수익을 배당합니다',
    detail: '쉽게 말해 "건물주가 되어 월세를 받는" 펀드입니다. 서울 강남·여의도·광화문 등의 프라임급 오피스빌딩이나 대기업·공기업이 장기 임차 중인 물류센터를 매입하고, 매달 걷히는 임대료를 투자자에게 분기마다 배당합니다. 개발 펀드 대비 수익률은 낮지만, 임차인이 이미 확보되어 있어 안정적이고 예측 가능한 현금흐름이 장점입니다.',
    advantages: ['안정적 배당 — 3~6개월마다 임대수익 배당', '대기업·공기업 장기 임차 계약으로 공실 리스크 최소화', '부동산 가격 상승 시 매각 차익까지 추가 수익'],
    metrics: { aum: '339억', returns: '연 7.5%', count: '3건' },
    color: '#3D342D',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2400&q=90',
  },
];

export default function BusinessIntroPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImage}>
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=90"
            alt="부동산 펀드"
            fill
            sizes="100vw"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>REAL ESTATE FUND</h1>
          </div>
          <div className={styles.heroRight}>
            <h2 className={styles.heroKo}>부동산 펀드란?</h2>
            <p className={styles.heroDesc}>
              전통적인 투자자산인 주식과 채권에서 벗어나 펀드 자산의 50%를 초과하여
              부동산 개발, 관련 임대 및 운용 등 부동산 관련 자산을
              다양한 형태로 투자하여 운용수익을 배당 받는 펀드입니다.
            </p>
          </div>
        </div>
      </section>

      <SubNavigation items={BIZ_NAV} variant="cards" />

      {/* Fund Overview stats */}
      <section className={styles.catSection}>
        <div className={styles.catInner}>
          <ScrollReveal>
            <span className={styles.catLabel}>펀드 구분</span>
            <h2 className={styles.catHeading}>
              메타자산운용 펀드는<br />
              <span className={styles.catLight}>펀드의 성격에 따라 다양한 유형으로 구분할 수 있습니다.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.catGrid}>
              <div className={styles.catImageLarge}>
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2400&q=90"
                  alt="부동산 펀드 개요"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={styles.catFillImage}
                />
              </div>
              <div className={styles.catStats}>
                <div className={styles.catStatsImage}>
                  <Image
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=90"
                    alt="부동산 투자 사진"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className={styles.catFillImage}
                  />
                </div>
                <div className={styles.catStatsInfo}>
                  <h3 className={styles.catStatsTitle}>FUND OVERVIEW</h3>
                  <span className={styles.catStatsDate}>2026.03 기준</span>
                  <div className={styles.catStatsItems}>
                    <div className={styles.catStatRow}>
                      <span>▎ 누적운용 펀드</span>
                      <span className={styles.catStatValue}>6개</span>
                    </div>
                    <div className={styles.catStatRow}>
                      <span>▎ 누적 펀드설정 자산</span>
                      <span className={styles.catStatValue}>759억</span>
                    </div>
                    <div className={styles.catStatRow}>
                      <span>▎ 평균 투자 수익률</span>
                      <span className={styles.catStatValue}>연 9.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Detailed Fund Blocks */}
      {FUND_TYPES.map((fund) => (
        <section
          key={fund.num}
          className={styles.fundBlock}
          style={{ backgroundColor: fund.color }}
        >
          <div className={styles.fundInner}>
            <ScrollReveal>
              <div className={styles.fundContent}>
                <span className={styles.fundNum}>{fund.num}</span>
                <h3 className={styles.fundTitle}>{fund.title}</h3>
                <p className={styles.fundSubtitle}>{fund.desc}</p>
                <p className={styles.fundDesc}>{fund.detail}</p>

                {/* Key advantages */}
                <div className={styles.fundAdvantages}>
                  <h4 className={styles.fundAdvTitle}>주요 강점</h4>
                  <ul className={styles.fundAdvList}>
                    {fund.advantages.map((adv) => (
                      <li key={adv} className={styles.fundAdvItem}>
                        <span className={styles.fundAdvCheck}>✓</span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key metrics */}
                <div className={styles.fundMetrics}>
                  <div className={styles.fundMetric}>
                    <span className={styles.metricValue}>{fund.metrics.aum}</span>
                    <span className={styles.metricLabel}>운용규모</span>
                  </div>
                  <div className={styles.fundMetric}>
                    <span className={styles.metricValue}>{fund.metrics.returns}</span>
                    <span className={styles.metricLabel}>평균 수익률</span>
                  </div>
                  <div className={styles.fundMetric}>
                    <span className={styles.metricValue}>{fund.metrics.count}</span>
                    <span className={styles.metricLabel}>운용 펀드</span>
                  </div>
                </div>
              </div>
              <div className={styles.fundImage}>
                <Image
                  src={fund.image}
                  alt={fund.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.fundFillImage}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  );
}
