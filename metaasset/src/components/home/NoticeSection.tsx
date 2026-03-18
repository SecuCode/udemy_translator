'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { NOTICES } from '@/lib/constants';
import styles from './NoticeSection.module.css';

export default function NoticeSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={`${styles.section} homepageSection`} aria-label="최신 소식">
      <div className={styles.inner} ref={ref}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>News &amp; Notice</h2>
            <Link href="/notice/announce" className={styles.viewAll}>
              전체보기 →
            </Link>
          </div>
          <ul className={styles.list}>
            {NOTICES.slice(0, 5).map((notice) => (
              <li key={notice.id} className={styles.item}>
                <span className={styles.dot}>●</span>
                <span className={styles.date}>{notice.date}</span>
                <Link href="/notice/announce" className={styles.itemTitle}>
                  {notice.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
