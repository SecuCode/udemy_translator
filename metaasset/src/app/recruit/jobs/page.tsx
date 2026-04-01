import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IconSearch } from '@/components/ui/Icons';
import styles from '../../notice/notice.module.css';
import { JOB_POSTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: '채용공고 | 메타자산운용',
  description: '메타자산운용의 채용 정보를 안내합니다.',
};

export default function JobsPage() {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.goHome}>GO HOME</Link>
        <h1 className={styles.sidebarTitle}>RECRUITMENT</h1>
        <div className={styles.sidebarMeta}>
          <p className={styles.sidebarCategory}>채용공고</p>
          <p className={styles.sidebarDesc}>
            지속 가능한 미래를 위한 가치창조 기업,<br />
            메타자산운용과 함께 할 인재를 찾습니다.
          </p>
        </div>
      </aside>

      <main className={styles.content}>
        <div className={styles.heroImage}>
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=2400&q=90"
            alt="비즈니스 미팅"
            fill
            sizes="60vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="검색어를 입력해주세요" />
          <button className={styles.searchBtn} aria-label="검색"><IconSearch size={18} /></button>
        </div>

        <ul className={styles.list}>
          {JOB_POSTS.map((job) => (
            <li key={job.id}>
              <Link href={`/recruit/jobs/${job.id}`} className={styles.listItem}>
                <span className={`${styles.badge} ${job.status === '모집중' ? styles.badgeActive : ''}`}>
                  {job.status}
                </span>
                <span className={styles.itemTitle}>{job.title}</span>
                <span className={styles.itemDate}>{job.deadline}</span>
                <span className={styles.itemLink}>→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.pagination}>
          <Link href="#" className={`${styles.pageNum} ${styles.pageNumActive}`}>1</Link>
        </div>
      </main>
    </div>
  );
}
