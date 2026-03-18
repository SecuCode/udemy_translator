import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './org.module.css';

export const metadata: Metadata = {
  title: '조직도 | 메타자산운용(주)',
  description: '메타자산운용의 조직 구성을 안내합니다.',
};

const ABOUT_NAV = [
  { label: '회사소개', href: '/about/overview' },
  { label: '리더십', href: '/about/ceo' },
  { label: '조직도', href: '/about/organization' },
  { label: '연혁', href: '/about/history' },
  { label: '오시는 길', href: '/about/location' },
];

const DEPARTMENTS = [
  { name: '투자운용본부', desc: '부동산, IPO, 대체투자 등 전반적인 자산 운용 업무를 총괄합니다.' },
  { name: '리스크관리팀', desc: '시장·신용·유동성·운영 리스크의 측정 및 관리 업무를 수행합니다.' },
  { name: '경영지원본부', desc: '인사, 재무, 총무 등 경영 전반의 기획 및 지원 업무를 담당합니다.' },
  { name: '컴플라이언스팀', desc: '법규 준수, 내부통제 및 윤리경영 관련 업무를 수행합니다.' },
];

export default function OrganizationPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="ORGANIZATION"
        titleKo="조직도"
        description="새로운 가치를 창조하고 함께 발전하고 혁신을 추구하며 투명하고 효율적인 경영을 이어갑니다."
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
      />
      <SubNavigation items={ABOUT_NAV} variant="cards" />

      {/* Section 1: Dark - OUR ORGANIZATION */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.orgIntro}>
              <div className={styles.orgImageCol}>
                <div className={styles.orgImage}>
                  <Image
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2400&q=90"
                    alt="오피스 인테리어"
                    width={600}
                    height={450}
                    className={styles.fillImage}
                  />
                </div>
              </div>
              <div className={styles.orgTextCol}>
                <span className={styles.label}>OUR ORGANIZATION</span>
                <h2 className={styles.heading}>
                  사람으로부터 자산운용은 시작되며<br />
                  자산운용의 미래는 사람이라고 생각합니다.
                </h2>
                <p className={styles.desc}>
                  고객의 니즈를 정확한 관점으로 이해하고 만족시키며<br />
                  구성원의 역량과 전문성을 위한 교육 및 양성을 실천하고 있습니다.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Light - Org Chart */}
      <section className={styles.chartSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.chart}>
              <div className={styles.ceoBox}>
                <span className={styles.ceoTitle}>대표이사</span>
              </div>
              <div className={styles.line} />
              <div className={styles.deptsGrid}>
                {DEPARTMENTS.map((dept) => (
                  <div key={dept.name} className={styles.deptCard}>
                    <h3 className={styles.deptName}>{dept.name}</h3>
                    <p className={styles.deptDesc}>{dept.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
