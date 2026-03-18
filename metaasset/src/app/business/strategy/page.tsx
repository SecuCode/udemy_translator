import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './strategy.module.css';
import { IconBuilding, IconTrendingUp, IconDiamond } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: '운용전략 | 메타자산운용(주)',
  description: '메타자산운용의 투자 철학, 운용전략, 의사결정 프로세스를 안내합니다.',
};

const ASSET_NAV = [
  { label: '운용자산현황', href: '/assets/performance' },
  { label: '운용전략', href: '/business/strategy' },
  { label: '펀드 현황', href: '/assets/funds' },
];

const INVESTMENT_PRINCIPLES = [
  {
    number: '01',
    title: '가치 중심 투자',
    titleEn: 'Value-Oriented',
    description: '시장의 본질적 가치를 분석하여 저평가된 자산을 발굴하고, 중장기적 관점에서 안정적인 수익을 추구합니다. 단기적 시장 변동에 흔들리지 않는 확고한 투자 철학을 바탕으로 운용합니다.',
  },
  {
    number: '02',
    title: '리스크 관리 우선',
    titleEn: 'Risk-First Approach',
    description: '수익 극대화보다 리스크 관리를 우선시합니다. 자산군별 분산투자, 시나리오 분석, 스트레스 테스트를 통해 예상치 못한 시장 충격에도 투자자의 자산을 보호합니다.',
  },
  {
    number: '03',
    title: '체계적 의사결정',
    titleEn: 'Systematic Decision',
    description: '투자심의위원회, 리스크관리위원회 등 다단계 의사결정 체계를 통해 객관적이고 합리적인 투자 판단을 내립니다. 개인의 주관이 아닌 조직의 집단지성을 활용합니다.',
  },
  {
    number: '04',
    title: '투명한 운용 보고',
    titleEn: 'Transparent Reporting',
    description: '투자자에게 정기적이고 투명한 운용 보고를 제공합니다. 운용 성과, 포트폴리오 변동, 시장 전망 등을 상세히 공유하여 신뢰를 구축합니다.',
  },
];

const PROCESS_STEPS = [
  {
    step: 'STEP 01',
    title: '시장 분석 및 리서치',
    items: ['거시경제 지표 분석', '섹터별 시장 동향 파악', '투자 유니버스 설정', '정량·정성 분석'],
  },
  {
    step: 'STEP 02',
    title: '투자 대상 선정',
    items: ['기업/자산 실사 (Due Diligence)', '재무제표 및 사업성 분석', '법률·세무 검토', '밸류에이션 산정'],
  },
  {
    step: 'STEP 03',
    title: '투자 의사결정',
    items: ['투자심의위원회 심의', '리스크관리위원회 검토', '준법감시인 승인', '투자 조건 확정'],
  },
  {
    step: 'STEP 04',
    title: '포트폴리오 운용',
    items: ['자산배분 최적화', '정기 리밸런싱', '실시간 모니터링', '성과 분석 및 보고'],
  },
];

const STRATEGY_AREAS = [
  {
    title: '부동산 투자 전략',
    titleEn: 'REAL ESTATE',
    icon: 'building',
    description: '수도권 핵심 상업용 부동산을 중심으로 안정적인 임대 수익과 자산 가치 상승을 동시에 추구합니다.',
    details: ['오피스·물류센터·리테일 등 다양한 자산군 투자', '임차인 신용도 및 임대차 계약 안정성 분석', '개발 사업 관리 및 밸류애드(Value-Add) 전략', '출구 전략(Exit Strategy) 사전 수립'],
  },
  {
    title: 'IPO 투자 전략',
    titleEn: 'IPO INVESTMENT',
    icon: 'trending-up',
    description: '기업공개 시장에서의 전문적 분석 역량을 바탕으로 고수익을 추구하며, 철저한 기업 가치 평가를 통해 투자 리스크를 관리합니다.',
    details: ['공모주 시장 트렌드 분석', '기업 펀더멘털 및 성장성 평가', '적정 공모가 대비 할인율 분석', '상장 후 단기/중기 수익 전략'],
  },
  {
    title: '대체투자 전략',
    titleEn: 'ALTERNATIVE',
    icon: 'diamond',
    description: '전통적 주식·채권을 넘어 다양한 대체투자 기회를 발굴하여 포트폴리오의 위험 분산과 초과 수익을 추구합니다.',
    details: ['메자닌(Mezzanine) 투자', 'PEF/벤처캐피탈 공동투자', '인프라 투자 및 프로젝트 파이낸싱', '구조화 금융상품 설계 및 운용'],
  },
];

export default function StrategyPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="OPERATIONAL STRATEGY"
        titleKo="운용전략"
        description="체계적인 분석과 검증된 투자 프로세스로 투자자의 자산 가치를 극대화합니다."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2400&q=90"
      />
      <SubNavigation items={ASSET_NAV} variant="cards" />

      {/* Section 1: Investment Philosophy */}
      <section className={styles.lightSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>INVESTMENT PHILOSOPHY</span>
              <h2 className={styles.sectionTitle}>투자 철학</h2>
              <p className={styles.sectionDesc}>
                메타자산운용은 &ldquo;안정적 수익 실현&rdquo;이라는 명확한 목표 아래,<br />
                가치 중심의 투자 철학과 체계적 리스크 관리를 통해 투자자와 함께 성장합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.principlesGrid}>
            {INVESTMENT_PRINCIPLES.map((item, idx) => (
              <ScrollReveal key={item.number} delay={idx * 100}>
                <div className={styles.principleCard}>
                  <span className={styles.principleNumber}>{item.number}</span>
                  <div>
                    <h3 className={styles.principleTitle}>{item.title}</h3>
                    <span className={styles.principleTitleEn}>{item.titleEn}</span>
                    <p className={styles.principleDesc}>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Investment Process */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabelLight}>INVESTMENT PROCESS</span>
              <h2 className={styles.sectionTitleLight}>투자 의사결정 프로세스</h2>
              <p className={styles.sectionDescLight}>
                철저한 분석 → 다단계 검증 → 합리적 의사결정의 과정을 거쳐<br />
                모든 투자가 이루어집니다.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 120}>
                <div className={styles.processCard}>
                  <span className={styles.processStep}>{step.step}</span>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <ul className={styles.processList}>
                    {step.items.map((item) => (
                      <li key={item} className={styles.processItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className={styles.processImageWrap}>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2400&q=90"
                alt="운용전략 데이터 분석"
                width={1200}
                height={500}
                className={styles.processImage}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Strategy Areas */}
      <section className={styles.lightSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>STRATEGY AREAS</span>
              <h2 className={styles.sectionTitle}>자산군별 운용전략</h2>
              <p className={styles.sectionDesc}>
                각 자산군의 특성에 맞는 전문화된 투자 전략을 수립하고,<br />
                전담 운용팀이 체계적으로 관리합니다.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.strategyGrid}>
            {STRATEGY_AREAS.map((area, idx) => (
              <ScrollReveal key={area.titleEn} delay={idx * 100}>
                <div className={styles.strategyCard}>
                  <div className={styles.strategyCardHeader}>
                    <span className={styles.strategyIcon}>
                      {area.icon === 'building' && <IconBuilding size={32} />}
                      {area.icon === 'trending-up' && <IconTrendingUp size={32} />}
                      {area.icon === 'diamond' && <IconDiamond size={32} />}
                    </span>
                    <div>
                      <span className={styles.strategyTitleEn}>{area.titleEn}</span>
                      <h3 className={styles.strategyTitle}>{area.title}</h3>
                    </div>
                  </div>
                  <p className={styles.strategyDesc}>{area.description}</p>
                  <ul className={styles.strategyDetails}>
                    {area.details.map((detail) => (
                      <li key={detail} className={styles.strategyDetail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Commitment */}
      <section className={styles.commitSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.commitContent}>
              <span className={styles.commitLabel}>OUR COMMITMENT</span>
              <h2 className={styles.commitTitle}>
                투자자의 신뢰에 보답하는<br />
                <span className={styles.goldText}>최고의 운용 성과</span>를 약속합니다.
              </h2>
              <p className={styles.commitDesc}>
                메타자산운용은 투자자 여러분의 소중한 자산을 가장 안전하고 효율적으로 운용하기 위해<br />
                끊임없이 연구하고 노력하겠습니다. 검증된 투자 프로세스와 전문 인력을 바탕으로<br />
                시장 어떤 환경에서도 안정적인 수익을 실현하겠습니다.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
