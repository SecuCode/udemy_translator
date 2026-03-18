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
    desc: '부동산 개발사업에 투자하여 개발수익을 추구하는 펀드',
    detail: '프라임급 오피스, 대형 물류센터, 복합상업시설 등의 개발사업에 투자하여 개발이익을 실현합니다. 사업의 기획 단계부터 인허가, 시공, 분양/임대까지 전 과정에 걸쳐 전문적인 관리를 수행하며, 엄격한 리스크 관리 체계를 통해 투자자의 자산을 보호합니다.',
    advantages: ['분양수익 및 개발이익 극대화', '체계적 사업관리(PM) 역량', '시공사 신용보강 구조'],
    metrics: { aum: '2,100억', returns: '연 9.2%', count: '8건' },
    color: '#5C524A',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=90',
  },
  {
    num: '02',
    title: '부동산 임대 펀드',
    desc: '오피스·상업시설 등 우량 부동산에 투자하여 안정적 임대수익을 추구하는 펀드',
    detail: '서울 주요 권역의 프라임급 오피스빌딩, 물류센터, 리테일 자산 등에 투자하여 장기적이고 안정적인 임대수익을 추구합니다. 우량 임차인 기반의 장기 임대계약을 통해 현금흐름의 예측 가능성을 확보하고, 자산 가치 상승에 따른 자본이득을 동시에 추구합니다.',
    advantages: ['우량 임차인 장기 계약 기반', '안정적 배당수익 실현', '자산 가치 상승 자본이득'],
    metrics: { aum: '1,500억', returns: '연 7.5%', count: '4건' },
    color: '#3D342D',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2400&q=90',
  },
  {
    num: '03',
    title: 'IPO / 공모주 펀드',
    desc: '기업공개(IPO) 및 공모주에 전략적으로 투자하여 상위 수익률을 추구하는 펀드',
    detail: '철저한 기업 분석과 IPO 시장 전문 역량을 바탕으로, 성장 가능성이 높은 기업의 공모주에 전략적으로 투자합니다. 상장 전 기업가치 분석, 적정 공모가 산정, 상장 후 매도 타이밍 전략까지 체계적인 프로세스를 통해 최고 수익률을 추구합니다.',
    advantages: ['심층 기업가치 분석 역량', '최적 매도 타이밍 전략', '분산 투자를 통한 리스크 관리'],
    metrics: { aum: '800억', returns: '연 18.3%', count: '3건' },
    color: '#1A2D4A',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400&q=90',
  },
  {
    num: '04',
    title: '대체투자 펀드',
    desc: '인프라, 메자닌, 구조화 금융 등 다양한 대체투자 자산에 분산 투자하는 펀드',
    detail: '전통적인 주식·채권 투자를 넘어, 인프라, 메자닌 대출, 구조화 금융, 특별자산(항공기, 선박) 등 다양한 대체투자 자산에 분산 투자하여 포트폴리오의 안정성과 수익성을 동시에 추구합니다. 시장 변동성에 대한 헤지 효과와 일정한 현금흐름을 기대할 수 있습니다.',
    advantages: ['포트폴리오 다각화 효과', '전통자산 대비 낮은 변동성', '정기적 이자수익 확보'],
    metrics: { aum: '600억', returns: '연 8.1%', count: '5건' },
    color: '#2A3A2A',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90',
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
                  <span className={styles.catStatsDate}>2025.12 기준</span>
                  <div className={styles.catStatsItems}>
                    <div className={styles.catStatRow}>
                      <span>▎ 누적운용 펀드</span>
                      <span className={styles.catStatValue}>15개</span>
                    </div>
                    <div className={styles.catStatRow}>
                      <span>▎ 누적 펀드설정 자산</span>
                      <span className={styles.catStatValue}>5,000억</span>
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
