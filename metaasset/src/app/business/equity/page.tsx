import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './equity.module.css';
import { IconTrendingUp, IconSearch, IconTarget, IconShield, IconBarChart } from '@/components/ui/Icons';

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
  {
    title: 'IPO 공모주 전략',
    desc: '상장 예정 기업의 공모주에 선별 투자하여 상장 프리미엄에 따른 수익을 추구합니다. 독자적 기업가치 분석을 통해 투자 대상을 엄선합니다.',
    icon: 'trending-up',
  },
  {
    title: '가치투자 전략',
    desc: '내재가치 대비 저평가된 기업을 발굴하여 중장기 보유합니다. 재무분석과 사업분석을 통해 시장이 인식하지 못한 가치를 선제적으로 포착합니다.',
    icon: 'search',
  },
  {
    title: '이벤트 드리븐 전략',
    desc: 'M&A, 분할, 지배구조 변경 등 기업 이벤트에 따른 가치 변동 기회를 포착하여 투자합니다.',
    icon: 'target',
  },
];

const PROCESS_STEPS = [
  { step: '01', title: '종목 스크리닝', desc: '정량·정성 필터링을 통해 투자 유니버스에서 후보 종목을 선별합니다.' },
  { step: '02', title: '기업 심층 분석', desc: '재무제표·사업 모델·경쟁 환경·경영진 역량을 종합적으로 분석합니다.' },
  { step: '03', title: '투자 의사결정', desc: '투자심의위원회 심의를 거쳐 편입 종목, 비중, 목표가를 확정합니다.' },
  { step: '04', title: '포트폴리오 구성', desc: '업종·시가총액·스타일 분산을 고려한 최적 포트폴리오를 구축합니다.' },
  { step: '05', title: 'EXIT 실행', desc: '목표가 도달, 펀더멘털 변화 등을 고려하여 매도를 실행합니다.' },
];

const RESEARCH_ITEMS = [
  {
    icon: 'search',
    title: '자체 리서치 역량',
    desc: '섹터별 전문 애널리스트가 기업 탐방, 산업 분석, 실적 추정을 수행합니다. 1차 자료 기반의 독립적 분석 체계를 운영합니다.',
  },
  {
    icon: 'bar-chart',
    title: '다층 밸류에이션',
    desc: 'DCF, EV/EBITDA, PER/PBR 등 복수의 밸류에이션 방법론을 적용하여 기업의 적정가치를 다각도로 검증합니다.',
  },
  {
    icon: 'target',
    title: '실시간 시장 모니터링',
    desc: '기관·외국인 매매 동향, 수급 데이터, 공매도 현황을 실시간 추적하여 투자 의사결정에 반영합니다.',
  },
];

const RISK_ITEMS = [
  {
    title: '종목별 편입 한도',
    desc: '단일 종목 최대 편입 비율을 제한하여 개별 종목 리스크를 통제합니다.',
    limit: '최대 15%',
  },
  {
    title: '섹터 분산 원칙',
    desc: '특정 업종에 대한 과도한 집중을 방지하여 산업별 리스크를 분산합니다.',
    limit: '최대 30%',
  },
  {
    title: '손절 기준 운영',
    desc: '사전 설정된 손절 기준에 따라 대응하여 하방 리스크를 제한합니다.',
    limit: '-10% 기준',
  },
  {
    title: '유동성 확보',
    desc: '일정 비율의 현금성 자산을 유지하여 시장 변동에 유연하게 대응합니다.',
    limit: '10~20%',
  },
];

export default function EquityPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="EQUITY FUND"
        titleKo="주식형 펀드"
        description="주식시장에서 전문적인 리서치와 체계적 운용을 통해 초과수익을 추구합니다."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2400&q=90"
      />
      <SubNavigation items={BIZ_NAV} variant="cards" />

      {/* Section 1: Light — Intro */}
      <section className={styles.lightSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>EQUITY FUND</span>
                <h2 className={styles.heading}>
                  독자적 리서치 역량에 기반한<br />
                  능동적 주식 운용
                </h2>
                <p className={styles.desc}>
                  메타자산운용의 주식형 펀드는 자체 분석 역량을 바탕으로
                  IPO 공모주, 가치투자, 이벤트 드리븐 등 다양한 전략을
                  유기적으로 결합하여 운용합니다. 시장 환경에 따른
                  유연한 자산배분과 철저한 리스크 관리를 통해
                  안정적인 초과수익을 추구합니다.
                </p>
              </div>
              <div className={styles.introImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2400&q=90"
                  alt="금융 도시 전경"
                  width={600}
                  height={400}
                  className={styles.introImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Dark — Strategy Cards */}
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

      {/* Section 3: Light — Investment Process */}
      <section className={styles.processSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>INVESTMENT PROCESS</span>
              <h2 className={styles.sectionTitle}>운용 프로세스</h2>
            </div>
          </ScrollReveal>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 80}>
                <div className={styles.processCard}>
                  <span className={styles.processStep}>{step.step}</span>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Dark — Research Capabilities */}
      <section className={styles.researchSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabelLight}>RESEARCH</span>
              <h2 className={styles.sectionTitleLight}>리서치 역량</h2>
              <p className={styles.sectionDescLight}>
                독자적 분석 체계와 전문 애널리스트 팀을 통해<br />
                시장을 선도하는 투자 인사이트를 확보합니다.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.researchGrid}>
            {RESEARCH_ITEMS.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 120}>
                <div className={styles.researchCard}>
                  <span className={styles.researchIcon}>
                    {item.icon === 'search' && <IconSearch size={28} />}
                    {item.icon === 'bar-chart' && <IconBarChart size={28} />}
                    {item.icon === 'target' && <IconTarget size={28} />}
                  </span>
                  <h3 className={styles.researchTitle}>{item.title}</h3>
                  <p className={styles.researchDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Light — Risk Management */}
      <section className={styles.riskSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>RISK MANAGEMENT</span>
              <h2 className={styles.sectionTitle}>리스크 관리</h2>
            </div>
          </ScrollReveal>
          <div className={styles.riskGrid}>
            {RISK_ITEMS.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 100}>
                <div className={styles.riskCard}>
                  <div className={styles.riskHeader}>
                    <h3 className={styles.riskTitle}>{item.title}</h3>
                    <span className={styles.riskLimit}>{item.limit}</span>
                  </div>
                  <p className={styles.riskDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Dark — Performance Stats */}
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
              <div className={styles.perfItem}>
                <span className={styles.perfValue}>92<span className={styles.perfUnit}>%</span></span>
                <span className={styles.perfLabel}>목표 달성률</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
