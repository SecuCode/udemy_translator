import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './pfv.module.css';

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

export default function PfvPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="PFV"
        titleKo="PFV 사업"
        description="프로젝트 파이낸싱을 통한 부동산 개발 사업에 투자하여 안정적 수익을 추구합니다."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2400&q=90"
      />
      <SubNavigation items={BIZ_NAV} variant="cards" />

      {/* Dark: intro */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>PROJECT FINANCING VEHICLE</span>
                <h2 className={styles.heading}>
                  프로젝트 파이낸싱 비히클(PFV)이란<br />
                  부동산 개발 사업을 목적으로 설립하는<br />
                  특수목적회사(SPC)입니다.
                </h2>
                <p className={styles.desc}>
                  메타자산운용은 우량 부동산 개발 사업에 대한 PFV 투자를 통해
                  개발수익과 금융수익을 동시에 추구합니다. 사업성 분석부터
                  자금 조달, 시공 관리, EXIT 전략까지 전 과정을 체계적으로 관리합니다.
                </p>
              </div>
              <div className={styles.introImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
                  alt="PFV 사업"
                  width={600}
                  height={400}
                  className={styles.introImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Light: process */}
      <section className={styles.processSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.processLabel}>INVESTMENT PROCESS</span>
            <h2 className={styles.processHeading}>PFV 투자 프로세스</h2>
          </ScrollReveal>
          <div className={styles.processGrid}>
            {['사업성 검토', '투자 구조 설계', '자금 조달', '사업 관리', 'EXIT 실행'].map((step, idx) => (
              <ScrollReveal key={step} delay={idx * 80}>
                <div className={styles.processStep}>
                  <span className={styles.stepNum}>{String(idx + 1).padStart(2, '0')}</span>
                  <span className={styles.stepTitle}>{step}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark: performance stats */}
      <section className={styles.statsSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>8</span>
                <span className={styles.statLabel}>누적 PFV 프로젝트</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2,500<span className={styles.statUnit}>억</span></span>
                <span className={styles.statLabel}>누적 투자 규모</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>14.5<span className={styles.statUnit}>%</span></span>
                <span className={styles.statLabel}>평균 IRR</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
