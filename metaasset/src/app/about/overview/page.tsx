import type { Metadata } from 'next';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './overview.module.css';

export const metadata: Metadata = {
  title: '회사소개 | 메타자산운용(주)',
  description: '메타자산운용의 회사 개요와 비전을 안내합니다.',
};

const ABOUT_NAV = [
  { label: '회사소개', href: '/about/overview' },
  { label: '리더십', href: '/about/ceo' },
  { label: '조직도', href: '/about/organization' },
  { label: '연혁', href: '/about/history' },
  { label: '오시는 길', href: '/about/location' },
];

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="ABOUT US"
        titleKo="회사소개"
        description="풍부한 경험을 통하여 미래 고객에게 최고의 성과를 보답하는 것, 메타자산운용의 존재 이유이자 이념입니다."
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
      />
      <SubNavigation items={ABOUT_NAV} variant="cards" />

      {/* Section 1: Dark - WHO WE ARE */}
      <section className={styles.whoSection}>
        <div className={styles.whoInner}>
          <ScrollReveal>
            <div className={styles.whoTop}>
              <div className={styles.whoTextCol}>
                <span className={styles.whoLabel}>WHO WE ARE</span>
                <h2 className={styles.whoHeading}>
                  함께 성장하고 서로 신뢰하는<br />
                  행복한 기업 문화를 꿈꾸는 메타자산운용(주)
                </h2>
              </div>
              <div className={styles.whoImageCol}>
                <div className={styles.whoImage1}>
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=2400&q=90"
                    alt="메타자산운용 팀 미팅"
                    width={600}
                    height={375}
                    className={styles.fillImage}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.whoBottom}>
              <div className={styles.whoVertical}>
                <span className={styles.verticalText}>m e t a</span>
              </div>
              <div className={styles.whoImage2}>
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2400&q=90"
                  alt="도시 스카이라인"
                  width={600}
                  height={375}
                  className={styles.fillImage}
                />
              </div>
              <div className={styles.whoBottomText}>
                <h3 className={styles.whoSubHeading}>
                  모든 것이 연결되고<br />
                  무엇으로도 규정할 수 없는<br />
                  새로운 가능성의 시작
                </h3>
                <p className={styles.whoDesc}>
                  풍부한 부동산, 주식, 채권의 운용경험과<br />
                  다각화된 네트워크로 안정적인 운용수익과<br />
                  초과수익을 창출하여 고객과의 신뢰를 쌓아갑니다.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Light - COMPANY INTRODUCTION */}
      <section className={styles.companySection}>
        <div className={styles.companyInner}>
          <ScrollReveal>
            <div className={styles.companyHeader}>
              <span className={styles.companyLabel}>COMPANY INTRODUCTION</span>
              <h2 className={styles.companySlogan}>
                풍부한 경험을 통하여 미래 고객에게 최고의 성과를<br />
                보답하는 것, 메타자산운용(주)의 존재 이유이자 이념입니다.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.companyGrid}>
              <div className={styles.companyImageCol}>
                <div className={styles.companyImage}>
                  <Image
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2400&q=90"
                    alt="메타자산운용 오피스"
                    width={600}
                    height={450}
                    className={styles.fillImage}
                  />
                </div>
              </div>
              <div className={styles.companyTableCol}>
                <h3 className={styles.tableTitle}>▎ 회사 개요</h3>
                <table className={styles.infoTable}>
                  <tbody>
                    <tr>
                      <th>회사명</th>
                      <td>메타자산운용 주식회사</td>
                    </tr>
                    <tr>
                      <th>설립일</th>
                      <td>2024년 전문사모집합투자업 등록</td>
                    </tr>
                    <tr>
                      <th>대표이사</th>
                      <td>홍길동</td>
                    </tr>
                    <tr>
                      <th>자본금</th>
                      <td>20억원</td>
                    </tr>
                    <tr>
                      <th>연락처</th>
                      <td>T. 02-1234-5678 / F. 02-1234-5679</td>
                    </tr>
                    <tr>
                      <th>주소</th>
                      <td>서울특별시 영등포구 여의대로 108</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
