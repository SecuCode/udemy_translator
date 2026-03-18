import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../notice.module.css';
import { IconSearch } from '@/components/ui/Icons';
import { NOTICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: '공시정보 | 메타자산운용(주)',
  description: '메타자산운용의 공시정보를 안내합니다.',
};

const disclosureItems = NOTICES.filter(n => n.category === '공시');

export default function DisclosurePage() {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.goHome}>GO HOME</Link>
        <h1 className={styles.sidebarTitle}>NEWS</h1>
        <div className={styles.sidebarMeta}>
          <p className={styles.sidebarCategory}>공시정보</p>
          <p className={styles.sidebarDesc}>
            메타자산운용의 경영공시 정보를 안내드립니다.
          </p>
          <div className={styles.tabs}>
            <Link href="/notice/announce" className={styles.tab}>공지사항</Link>
            <Link href="/notice/news" className={styles.tab}>보도자료</Link>
            <Link href="/notice/disclosure" className={`${styles.tab} ${styles.tabActive}`}>공시정보</Link>
          </div>
        </div>
      </aside>

      <main className={styles.content}>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="검색어를 입력해주세요" />
          <button className={styles.searchBtn} aria-label="검색"><IconSearch size={18} /></button>
        </div>

        <ul className={styles.list}>
          {disclosureItems.map((item) => (
            <li key={item.id}>
              <div className={styles.listItem}>
                <div className={styles.thumbnail}>
                  <span className={styles.thumbnailPlaceholder}>META ASSET</span>
                </div>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.itemDate}>📅 {item.date}</span>
                <span className={styles.itemLink}>→</span>
              </div>
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
