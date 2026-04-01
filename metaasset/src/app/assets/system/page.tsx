import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './system.module.css';

export const metadata: Metadata = {
  title: '운용시스템 | 메타자산운용(주)',
  description: '메타자산운용의 체계적인 운용 시스템과 투자 의사결정 프로세스를 안내합니다.',
};

const ASSET_NAV = [
  { label: '운용자산현황', href: '/assets/performance' },
  { label: '운용전략', href: '/business/strategy' },
  { label: '운용시스템', href: '/assets/system' },
  { label: '리스크관리', href: '/assets/risk' },
];

const SYSTEM_CORE = [
  {
    num: '01',
    title: '투자의사결정 시스템',
    titleEn: 'INVESTMENT DECISION',
    desc: '투자심의위원회를 통한 체계적이고 투명한 의사결정 프로세스를 운영합니다.',
    details: [
      '투자 검토 → 심사 → 승인 → 사후관리의 4단계 의사결정',
      '투자심의위원회 정기/수시 개최',
      '독립적인 준법감시인의 사전 심사',
      '투자 건별 리스크 평가 및 등급 산정',
    ],
  },
  {
    num: '02',
    title: '포트폴리오 관리 시스템',
    titleEn: 'PORTFOLIO MANAGEMENT',
    desc: '실시간 포트폴리오 모니터링과 성과 분석을 통해 최적의 자산 배분을 유지합니다.',
    details: [
      '실시간 시장 데이터 기반 포지션 모니터링',
      '자산군별 편입 비중 및 한도 관리',
      '벤치마크 대비 초과 수익률 분석',
      '정기 리밸런싱 및 전술적 자산배분',
    ],
  },
  {
    num: '03',
    title: '내부통제 시스템',
    titleEn: 'INTERNAL CONTROL',
    desc: '컴플라이언스팀을 중심으로 법규 준수와 이해상충을 방지하는 내부통제 체계를 갖추고 있습니다.',
    details: [
      '주요 법규 및 규정 준수 여부 상시 점검',
      '이해상충 방지 및 정보교류 차단장치(Chinese Wall)',
      '임직원 자기매매 사전 승인 및 모니터링',
      '내부감사 정기 실시 및 시정 조치',
    ],
  },
  {
    num: '04',
    title: '보고 및 공시 시스템',
    titleEn: 'REPORTING & DISCLOSURE',
    desc: '투자자에게 정기적인 운용 보고서를 제공하고, 관련 법규에 따른 적시 공시를 합니다.',
    details: [
      '월간/분기별 운용 보고서 발행',
      '투자자 대상 운용 현황 정기 설명회',
      '금융위원회 및 금융투자협회 법정 공시',
      '펀드 기준가격 및 수익률 일일 산출',
    ],
  },
];

const INFRA_ITEMS = [
  {
    title: '데이터 분석 플랫폼',
    desc: '국내외 금융 데이터를 실시간으로 수집·분석하여 투자 의사결정에 활용합니다. 정량적 분석 모델과 시장 시뮬레이션을 통해 투자 리스크를 사전에 평가합니다.',
  },
  {
    title: '전산 운용 인프라',
    desc: '기준가 산출, 자산 평가, 거래 체결 등 펀드 운용 전반을 지원하는 통합 전산 시스템을 운영합니다. 데이터 백업 및 재해복구(DR) 체계를 갖추어 업무 연속성을 보장합니다.',
  },
  {
    title: '정보보안 체계',
    desc: '고객 정보 및 투자 정보의 보안을 최우선으로 합니다. 접근 권한 관리, 암호화 통신, 보안 감사 등 금융기관 수준의 정보보안 체계를 운영합니다.',
  },
];

const FLOW_STEPS = [
  { step: '1', label: '투자 기회 발굴', detail: '시장 리서치, 딜 소싱' },
  { step: '2', label: '실사 및 분석', detail: 'Due Diligence, 가치 평가' },
  { step: '3', label: '투자심의위원회', detail: '투자 안건 심의 및 의결' },
  { step: '4', label: '준법 심사', detail: '준법감시인 검토 및 승인' },
  { step: '5', label: '투자 집행', detail: '계약 체결, 자금 집행' },
  { step: '6', label: '사후 관리', detail: '모니터링, 성과 보고' },
];

export default function SystemPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="OPERATING SYSTEM"
        titleKo="운용시스템"
        description="체계적이고 효율적인 운용 시스템을 통해 안정적인 자산관리 서비스를 제공합니다."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=90"
      />
      <SubNavigation items={ASSET_NAV} variant="cards" />

      {/* Section 1: Light - Intro with image */}
      <section className={styles.introSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>OPERATING SYSTEM</span>
                <h2 className={styles.heading}>
                  메타자산운용은 체계적인<br />
                  운용 시스템을 바탕으로<br />
                  안정적인 자산운용을 실현합니다.
                </h2>
                <p className={styles.introDesc}>
                  투자 의사결정부터 사후관리까지 모든 운용 과정에서
                  투명성과 전문성을 최우선으로 합니다. 독립적인 리스크 관리와
                  컴플라이언스 체계를 통해 투자자의 이익을 보호합니다.
                </p>
              </div>
              <div className={styles.introImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2400&q=90"
                  alt="운용시스템 - 오피스"
                  width={600}
                  height={400}
                  className={styles.introImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Dark - Core Systems (4 numbered items with details) */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>CORE SYSTEMS</span>
              <h2 className={styles.sectionTitle}>핵심 운용 시스템</h2>
              <p className={styles.sectionDesc}>
                4대 핵심 시스템을 중심으로 투자 전 과정을 체계적으로 관리합니다.
              </p>
            </div>
          </ScrollReveal>
          {SYSTEM_CORE.map((item, idx) => (
            <ScrollReveal key={item.num} delay={idx * 100}>
              <div className={styles.systemItem}>
                <div className={styles.systemNumArea}>
                  <span className={styles.systemNum}>{item.num}</span>
                  <span className={styles.systemTitleEn}>{item.titleEn}</span>
                </div>
                <div className={styles.systemContent}>
                  <h3 className={styles.systemTitle}>{item.title}</h3>
                  <p className={styles.systemDesc}>{item.desc}</p>
                  <ul className={styles.systemDetails}>
                    {item.details.map((detail) => (
                      <li key={detail} className={styles.systemDetail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Section 3: Light - Investment Process Flow */}
      <section className={styles.flowSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeaderDark}>
              <span className={styles.labelGold}>INVESTMENT PROCESS</span>
              <h2 className={styles.headingDark}>투자 프로세스 흐름도</h2>
              <p className={styles.descDark}>
                투자 기회 발굴부터 사후 관리까지, 6단계의 체계적 프로세스를 거칩니다.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.flowGrid}>
            {FLOW_STEPS.map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 80}>
                <div className={styles.flowCard}>
                  <span className={styles.flowStep}>{item.step}</span>
                  <h3 className={styles.flowLabel}>{item.label}</h3>
                  <p className={styles.flowDetail}>{item.detail}</p>
                  {idx < FLOW_STEPS.length - 1 && (
                    <span className={styles.flowArrow}>→</span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Dark - IT Infrastructure */}
      <section className={styles.infraSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>IT INFRASTRUCTURE</span>
              <h2 className={styles.sectionTitle}>운용 인프라</h2>
              <p className={styles.sectionDesc}>
                안정적인 IT 인프라와 데이터 분석 시스템을 기반으로 운용 효율성을 극대화합니다.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.infraGrid}>
            {INFRA_ITEMS.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 100}>
                <div className={styles.infraCard}>
                  <h3 className={styles.infraTitle}>{item.title}</h3>
                  <p className={styles.infraDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
