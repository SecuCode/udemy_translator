import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './ipo.module.css';
import { IconTarget, IconShield, IconTrendingUp, IconSearch } from '@/components/ui/Icons';

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
  { step: '01', title: '기업 발굴', desc: '상장 예정 기업 중 성장성과 수익성이 검증된 기업을 선별합니다.' },
  { step: '02', title: '가치 분석', desc: '재무분석, 사업 모델 평가, 경영진 검증을 통해 적정 기업가치를 산정합니다.' },
  { step: '03', title: '공모가 검증', desc: '산정된 적정가치 대비 공모가의 할인율을 분석하여 투자 여부를 결정합니다.' },
  { step: '04', title: '공모 참여', desc: '기관투자자 자격으로 수요예측에 참여하고 최적 물량을 배정받습니다.' },
  { step: '05', title: '매도 전략', desc: '상장 후 시장 수급과 주가 흐름을 분석하여 최적 시점에 매도합니다.' },
];

const SELECTION_CRITERIA = [
  {
    num: '01',
    title: '성장성',
    items: ['매출 성장률 및 이익 성장 추세', '목표 시장 규모 및 점유율 전망', '핵심 기술·제품의 시장 경쟁력', '경영진의 업력 및 실행 역량'],
  },
  {
    num: '02',
    title: '수익성',
    items: ['영업이익률·순이익률 추이', '동종업계 대비 수익성 비교', '적정 밸류에이션 산정', '공모가 대비 상승여력 분석'],
  },
  {
    num: '03',
    title: '안정성',
    items: ['재무건전성 (부채비율, 유동비율)', '최대주주 보호예수 기간', '상장 후 유통 물량 분석', '법률·규제 리스크 점검'],
  },
];

const DIFFERENTIATORS = [
  {
    icon: 'search',
    title: '독자적 분석 체계',
    desc: '외부 리서치에 의존하지 않는 자체 밸류에이션 모델을 운영합니다. 업종별 특화된 평가 기준으로 정밀한 투자 판단을 수행합니다.',
  },
  {
    icon: 'trending-up',
    title: '풍부한 시장 경험',
    desc: '다년간 축적된 IPO 투자 이력과 시장 데이터를 바탕으로 공모 성과를 견인합니다.',
  },
  {
    icon: 'target',
    title: '최적 매도 전략',
    desc: '상장 후 시장 수급, 유통 물량, 기관 매매 동향을 종합 분석하여 수익을 극대화하는 매도 시점을 결정합니다.',
  },
  {
    icon: 'shield',
    title: '체계적 리스크 관리',
    desc: '종목별 편입 한도, 분산투자 원칙, 손절 기준 등 사전에 설정된 투자 규범을 철저히 준수합니다.',
  },
];

const RISK_ITEMS = [
  {
    title: '분산투자 원칙',
    desc: '단일 종목 최대 편입 비율을 제한하여 개별 종목의 변동이 전체 펀드에 미치는 영향을 최소화합니다.',
  },
  {
    title: '손절 기준 운영',
    desc: '사전 설정된 손절 기준에 따라 기계적으로 대응하여 감정적 의사결정을 배제합니다.',
  },
  {
    title: '유동성 관리',
    desc: '일정 비율의 현금성 자산을 유지하여 시장 변동 및 환매 요청에 유연하게 대응합니다.',
  },
  {
    title: '정기 포트폴리오 점검',
    desc: '월간 투자심의위원회를 통해 보유 종목을 재평가하고 시장 환경 변화에 맞춰 전략을 조정합니다.',
  },
];

const IPO_STATS = [
  { value: '92', unit: '%', label: '수익 실현률' },
  { value: '150', unit: '+', label: '분석 기업 수' },
  { value: '45', unit: '건', label: '투자 실행 건수' },
  { value: '0', unit: '건', label: '원금 손실' },
];

export default function IpoPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="IPO FUND"
        titleKo="IPO 펀드"
        description="기업공개(IPO) 시장에서 검증된 분석 역량을 바탕으로 안정적 수익을 추구합니다."
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400&q=90"
      />
      <SubNavigation items={BIZ_NAV} variant="cards" />

      {/* Section 1: Dark — IPO Overview */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>IPO INVESTMENT</span>
                <h2 className={styles.heading}>
                  기업가치 분석에 기반한<br />
                  체계적 공모주 투자
                </h2>
                <p className={styles.desc}>
                  메타자산운용의 IPO 펀드는 상장 예정 기업에 대한
                  독자적 가치 분석을 바탕으로 공모 시장에서의 안정적
                  수익을 추구합니다. 전문 분석팀이 기업 펀더멘털,
                  산업 동향, 밸류에이션을 종합적으로 검토하여
                  투자 의사결정을 수행합니다.
                </p>
              </div>
              <div className={styles.introImageCol}>
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400&q=90"
                  alt="금융 시장 차트"
                  width={600}
                  height={400}
                  className={styles.fillImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Light — Investment Process */}
      <section className={styles.processSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.labelDark}>INVESTMENT PROCESS</span>
            <h2 className={styles.headingDark}>투자 프로세스</h2>
          </ScrollReveal>
          <div className={styles.processGrid}>
            {IPO_PROCESS.map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 80}>
                <div className={styles.processCard}>
                  <span className={styles.processStep}>{item.step}</span>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Dark — Selection Criteria */}
      <section className={styles.criteriaSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabelLight}>SELECTION CRITERIA</span>
              <h2 className={styles.sectionTitleLight}>투자 대상 선별 기준</h2>
              <p className={styles.sectionDescLight}>
                성장성·수익성·안정성의 3대 기준을 충족하는<br />
                기업만을 투자 대상으로 선정합니다.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.criteriaGrid}>
            {SELECTION_CRITERIA.map((criteria, idx) => (
              <ScrollReveal key={criteria.num} delay={idx * 120}>
                <div className={styles.criteriaCard}>
                  <span className={styles.criteriaNum}>{criteria.num}</span>
                  <h3 className={styles.criteriaTitle}>{criteria.title}</h3>
                  <ul className={styles.criteriaList}>
                    {criteria.items.map((item) => (
                      <li key={item} className={styles.criteriaItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Light — Differentiators */}
      <section className={styles.diffSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>COMPETITIVE EDGE</span>
              <h2 className={styles.sectionTitle}>차별화 역량</h2>
            </div>
          </ScrollReveal>
          <div className={styles.diffGrid}>
            {DIFFERENTIATORS.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 100}>
                <div className={styles.diffCard}>
                  <span className={styles.diffIcon}>
                    {item.icon === 'search' && <IconSearch size={28} />}
                    {item.icon === 'trending-up' && <IconTrendingUp size={28} />}
                    {item.icon === 'target' && <IconTarget size={28} />}
                    {item.icon === 'shield' && <IconShield size={28} />}
                  </span>
                  <h3 className={styles.diffTitle}>{item.title}</h3>
                  <p className={styles.diffDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Dark — Risk Management */}
      <section className={styles.riskSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabelLight}>RISK MANAGEMENT</span>
              <h2 className={styles.sectionTitleLight}>리스크 관리</h2>
            </div>
          </ScrollReveal>
          <div className={styles.riskGrid}>
            {RISK_ITEMS.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 100}>
                <div className={styles.riskCard}>
                  <span className={styles.riskNum}>{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className={styles.riskTitle}>{item.title}</h3>
                    <p className={styles.riskDesc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Dark — Stats */}
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
