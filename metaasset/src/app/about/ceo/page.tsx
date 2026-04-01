import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './ceo.module.css';

export const metadata: Metadata = {
  title: 'CEO 인사말 | 메타자산운용(주)',
  description: '메타자산운용의 리더십을 소개합니다.',
};

const ABOUT_NAV = [
  { label: '회사소개', href: '/about/overview' },
  { label: '리더십', href: '/about/ceo' },
  { label: '조직도', href: '/about/organization' },
  { label: '연혁', href: '/about/history' },
  { label: '오시는 길', href: '/about/location' },
];

export default function CeoPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="LEADERSHIP"
        titleKo="리더십"
        description="메타자산운용은 명확한 비전을 가지고서 경험하고 실행하여 자산운용사의 기둥이 되겠습니다."
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
      />
      <SubNavigation items={ABOUT_NAV} variant="cards" />

      {/* Section 1: Dark - CEO Info Card */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.ceoGrid}>
              <div className={styles.ceoImageCol}>
                <div className={styles.ceoImageWrapper}>
                  <Image
                    src="/images/ceo-portrait.png"
                    alt="메타자산운용 대표이사 김기용"
                    width={400}
                    height={500}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className={styles.ceoTextCol}>
                <span className={styles.label}>CEO MESSAGE</span>
                <h2 className={styles.heading}>대표이사 인사말</h2>
                <div className={styles.divider} />
                <blockquote className={styles.quote}>
                  &ldquo;메타자산운용은 투자자 여러분의 소중한 자산을 안정적으로 운용하고,
                  지속 가능한 수익을 창출하는 것을 최우선 가치로 두고 있습니다.&rdquo;
                </blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: White - CEO Message body */}
      <section className={styles.messageSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.messageBody}>
              <p className={styles.paragraph}>
                안녕하십니까, 메타자산운용 대표이사입니다.
              </p>
              <p className={styles.paragraph}>
                저희 메타자산운용은 부동산 투자, IPO 투자, 대체투자 등 다양한 투자 영역에서
                전문성과 경험을 바탕으로 투자자 여러분께 최적의 투자 솔루션을 제공하고 있습니다.
                2019년 설립 이래, 꾸준히 성장하며 약 759억원의 운용자산을 달성하며
                급속한 성장을 이루어 왔습니다.
              </p>
              <p className={styles.paragraph}>
                급변하는 금융 시장 속에서도 원칙에 충실하고, 철저한 리스크 관리를 통해
                안정적인 운용 성과를 만들어 가겠습니다. 부동산 시장에서의 깊은 네트워크와
                IPO 시장에서의 체계적인 분석 역량을 바탕으로, 차별화된 투자 기회를 발굴하여
                고객 여러분께 새로운 가치를 제공하겠습니다.
              </p>
              <p className={styles.paragraph}>
                메타자산운용은 금융투자업의 사회적 책임을 인식하고, ESG 경영을 통해
                기업의 지속가능성과 사회적 가치창출에도 기여하고자 합니다.
                투명한 경영과 정보 공개를 통해 투자자 여러분의 신뢰에 보답하겠습니다.
              </p>
              <p className={styles.paragraph}>
                앞으로도 메타자산운용은 &ldquo;투자의 새로운 가치를 창조한다&rdquo;는 비전 아래,
                끊임없는 혁신과 도전으로 대한민국 자산운용 시장을 선도하는 기업이 되겠습니다.
                변함없는 관심과 신뢰를 부탁드립니다.
              </p>
              <div className={styles.signature}>
                <span className={styles.sigRole}>메타자산운용(주) 대표이사</span>
                <span className={styles.sigName}>김 기 용</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Dark - Key Numbers */}
      <section className={styles.numbersSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.numbersGrid}>
              <div className={styles.numberItem}>
                <span className={styles.numberValue}>759<span className={styles.numberUnit}>억원</span></span>
                <span className={styles.numberLabel}>운용자산규모</span>
              </div>
              <div className={styles.numberItem}>
                <span className={styles.numberValue}>15<span className={styles.numberUnit}>개</span></span>
                <span className={styles.numberLabel}>운용 펀드</span>
              </div>
              <div className={styles.numberItem}>
                <span className={styles.numberValue}>12<span className={styles.numberUnit}>%</span></span>
                <span className={styles.numberLabel}>평균 수익률</span>
              </div>
              <div className={styles.numberItem}>
                <span className={styles.numberValue}>15<span className={styles.numberUnit}>+</span></span>
                <span className={styles.numberLabel}>전문 인력</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
