import type { Metadata } from 'next';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './location.module.css';
import { IconBuilding, IconMail } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: '오시는 길 | 메타자산운용(주)',
  description: '메타자산운용의 오시는 길을 안내합니다. 서울특별시 영등포구 국제금융로 8길 11, 대영빌딩 631호',
};

const ABOUT_NAV = [
  { label: '회사소개', href: '/about/overview' },
  { label: '리더십', href: '/about/ceo' },
  { label: '조직도', href: '/about/organization' },
  { label: '연혁', href: '/about/history' },
  { label: '오시는 길', href: '/about/location' },
];

export default function LocationPage() {
  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="LOCATION"
        titleKo="오시는 길"
        description="메타자산운용을 방문해주셔서 감사합니다."
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
      />
      <SubNavigation items={ABOUT_NAV} variant="cards" />

      {/* Google Maps Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.5!2d126.9243!3d37.5218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f1a4b6c3e8d%3A0x1234567890abcdef!2z64yA7JiB67mM65Sp!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr"
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="메타자산운용 위치 - 여의도 대영빌딩"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📍</span>
                <h3 className={styles.infoTitle}>주소</h3>
                <p className={styles.infoDesc}>
                  서울특별시 영등포구 국제금융로 8길 11,<br />
                  대영빌딩 631호
                </p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📞</span>
                <h3 className={styles.infoTitle}>연락처</h3>
                <p className={styles.infoDesc}>
                  T. 02-780-9901<br />
                  F. 02-780-9902
                </p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                <h3 className={styles.infoTitle}>교통편</h3>
                <p className={styles.infoDesc}>
                  지하철 5호선 여의도역 3번 출구<br />
                  지하철 9호선 국회의사당역 1번 출구
                </p>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}><IconMail size={20} /></span>
                <h3 className={styles.infoTitle}>이메일</h3>
                <p className={styles.infoDesc}>
                  info@metaasset.co.kr
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
