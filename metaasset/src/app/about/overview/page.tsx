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
        description="투자자의 신뢰에 성과로 보답하는 것, 메타자산운용의 존재 이유입니다."
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
                  기업 문화를 꿈꾸는 메타자산운용
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
                  전문성과 신뢰를 바탕으로<br />
                  새로운 투자 가치를 창출합니다
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
                투자자의 신뢰에 성과로 보답하는 것,<br />
                메타자산운용의 존재 이유입니다.
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
                      <td>2019년 전문사모집합투자업 등록</td>
                    </tr>
                    <tr>
                      <th>대표이사</th>
                      <td>김기용</td>
                    </tr>
                    <tr>
                      <th>연락처</th>
                      <td>T. 02-780-9901 / F. 02-780-9902</td>
                    </tr>
                    <tr>
                      <th>주소</th>
                      <td>서울특별시 영등포구 국제금융로 8길 11, 대영빌딩 631호</td>
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
