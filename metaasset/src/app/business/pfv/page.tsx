import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './pfv.module.css';
import { IconBuilding, IconShield, IconTarget, IconTrendingUp } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'PFV | 메타자산운용(주)',
  description: '메타자산운용의 PFV(프로젝트 파이낸싱 비히클) 사업을 안내합니다.',
};

const BIZ_NAV = [
  { label: '부동산 펀드', href: '/business/intro' },
  { label: 'PFV', href: '/business/pfv' },
  { label: 'IPO 펀드', href: '/business/ipo' },
  { label: '주식형 펀드', href: '/business/equity' },
];

const PROCESS_STEPS = [
  { step: '01', title: '사업 발굴', desc: '입지 분석·시장 조사를 통해 개발 가치가 높은 사업 부지를 발굴합니다.' },
  { step: '02', title: '사업성 검토', desc: '예상 수익률, 공사비, 인허가 리스크 등을 다각도로 분석하여 투자 적격 여부를 판단합니다.' },
  { step: '03', title: '자금 구조화', desc: '자기자본과 타인자본의 최적 비율을 설계하고, 참여자별 수익 배분 구조를 확정합니다.' },
  { step: '04', title: '시공·분양 관리', desc: '전담 PM팀이 공정·품질·원가를 일괄 관리하며, 분양·임대 활동을 병행합니다.' },
  { step: '05', title: '정산·배분', desc: '사업 완료 후 투자원금 상환 및 수익을 선후순위에 따라 배분합니다.' },
];

const ADVANTAGES = [
  {
    icon: 'target',
    title: '엄격한 사업 선별',
    desc: '100건 이상의 투자 검토를 거쳐 엄선된 프로젝트만 실행합니다. 입지·인허가·분양 수요·시공사 역량을 종합적으로 평가합니다.',
  },
  {
    icon: 'shield',
    title: '다층적 안전 구조',
    desc: '시공사 책임준공 확약, 자금관리 에스크로 계좌, 사업부지 담보 설정 등 다단계 리스크 관리 체계를 구축합니다.',
  },
  {
    icon: 'trending-up',
    title: '레버리지 수익 구조',
    desc: '자기자본 30~40%에 금융기관 선순위 대출을 결합하여 투자수익률을 극대화하는 자본 구조를 설계합니다.',
  },
  {
    icon: 'building',
    title: '독립적 SPC 운영',
    desc: '프로젝트별 독립 SPC를 설립하여 타 사업의 리스크가 전이되지 않도록 자산을 완전히 격리합니다.',
  },
];

const PROJECT_CASES = [
  {
    title: '수도권 주상복합 개발',
    type: '지하 3층 · 지상 35층 복합개발',
    scale: '총 사업비 1,200억 원',
    returnRate: 'IRR 16.2%',
    status: '준공 완료',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=90',
  },
  {
    title: '수도권 물류센터 개발',
    type: '연면적 33,000평 대형 물류시설',
    scale: '총 사업비 800억 원',
    returnRate: 'IRR 13.8%',
    status: '임대 운영 중',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2400&q=90',
  },
  {
    title: '도심 오피스빌딩 개발',
    type: '지상 20층 프라임급 오피스',
    scale: '총 사업비 500억 원',
    returnRate: 'IRR 14.1%',
    status: '분양 완료',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2400&q=90',
  },
];

export default function PfvPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="PFV"
        titleKo="PFV 사업"
        description="프로젝트 파이낸싱을 통한 부동산 개발 사업에 투자하여 안정적 수익을 추구합니다."
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
      />
      <SubNavigation items={BIZ_NAV} variant="cards" />

      {/* Section 1: Dark — PFV 소개 */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>PROJECT FINANCING VEHICLE</span>
                <h2 className={styles.heading}>
                  부동산 개발 사업의<br />
                  기획부터 EXIT까지<br />
                  전 과정을 관리합니다.
                </h2>
                <p className={styles.desc}>
                  PFV(프로젝트 파이낸싱 비히클)는 부동산 개발을 목적으로 설립하는
                  특수목적회사(SPC) 기반의 투자구조입니다. 메타자산운용은 사업 발굴,
                  자금 구조화, 시공 관리, EXIT 전략까지 사업 전 과정에 걸친
                  종합적인 자산관리(AM) 서비스를 제공합니다.
                </p>
              </div>
              <div className={styles.introImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
                  alt="도심 개발 현장"
                  width={600}
                  height={400}
                  className={styles.introImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Light — 투자 프로세스 */}
      <section className={styles.processSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.processLabel}>INVESTMENT PROCESS</span>
            <h2 className={styles.processHeading}>투자 프로세스</h2>
          </ScrollReveal>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 80}>
                <div className={styles.processStep}>
                  <span className={styles.stepNum}>{step.step}</span>
                  <span className={styles.stepTitle}>{step.title}</span>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Light — 핵심 경쟁력 */}
      <section className={styles.advantageSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>CORE COMPETENCY</span>
              <h2 className={styles.sectionTitle}>핵심 경쟁력</h2>
            </div>
          </ScrollReveal>
          <div className={styles.advantageGrid}>
            {ADVANTAGES.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 100}>
                <div className={styles.advantageCard}>
                  <span className={styles.advantageIcon}>
                    {item.icon === 'target' && <IconTarget size={28} />}
                    {item.icon === 'shield' && <IconShield size={28} />}
                    {item.icon === 'trending-up' && <IconTrendingUp size={28} />}
                    {item.icon === 'building' && <IconBuilding size={28} />}
                  </span>
                  <h3 className={styles.advantageTitle}>{item.title}</h3>
                  <p className={styles.advantageDesc}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Dark — 주요 투자 사례 */}
      <section className={styles.caseSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabelLight}>TRACK RECORD</span>
              <h2 className={styles.sectionTitleLight}>주요 투자 실적</h2>
            </div>
          </ScrollReveal>
          <div className={styles.caseGrid}>
            {PROJECT_CASES.map((project, idx) => (
              <ScrollReveal key={project.title} delay={idx * 120}>
                <div className={styles.caseCard}>
                  <div className={styles.caseImageWrap}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.caseImage}
                    />
                    <span className={styles.caseStatus}>{project.status}</span>
                  </div>
                  <div className={styles.caseInfo}>
                    <h3 className={styles.caseTitle}>{project.title}</h3>
                    <span className={styles.caseType}>{project.type}</span>
                    <div className={styles.caseMetrics}>
                      <div className={styles.caseMetric}>
                        <span className={styles.caseMetricLabel}>사업 규모</span>
                        <span className={styles.caseMetricValue}>{project.scale}</span>
                      </div>
                      <div className={styles.caseMetric}>
                        <span className={styles.caseMetricLabel}>수익률</span>
                        <span className={styles.caseMetricValue}>{project.returnRate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Dark — 실적 통계 */}
      <section className={styles.statsSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>8</span>
                <span className={styles.statLabel}>누적 프로젝트</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2,500<span className={styles.statUnit}>억</span></span>
                <span className={styles.statLabel}>누적 투자 규모</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>14.5<span className={styles.statUnit}>%</span></span>
                <span className={styles.statLabel}>평균 IRR</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100<span className={styles.statUnit}>%</span></span>
                <span className={styles.statLabel}>원금 회수율</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
