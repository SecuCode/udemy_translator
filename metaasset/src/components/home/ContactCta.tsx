'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { COMPANY } from '@/lib/constants';
import styles from './ContactCta.module.css';

export default function ContactCta() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section className={`${styles.section} homepageSection`} aria-label="문의하기">
      <div className={styles.bgGlow} />
      <div className={styles.inner} ref={ref}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>CONTACT US</span>
          <h2 className={styles.title}>
            투자에 대해
            <br />
            궁금하신 점이 있으신가요?
          </h2>
          <p className={styles.desc}>
            메타자산운용의 전문가가 상담해 드립니다.
          </p>

          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span className={styles.contactLabel}>ADDRESS</span>
              <span className={styles.contactValue}>{COMPANY.address}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span className={styles.contactLabel}>TEL</span>
              <span className={styles.contactValue}>{COMPANY.tel}</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <span className={styles.contactLabel}>EMAIL</span>
              <span className={styles.contactValue}>{COMPANY.email}</span>
            </div>
          </div>

          <div className={styles.ctaWrap}>
            <Link href="/about/location" className={styles.ctaButton}>
              오시는 길
              <span className={styles.ctaArrow}>→</span>
            </Link>
            <Link href="/notice/announce" className={styles.ctaButtonOutline}>
              공지사항 보기
              <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
