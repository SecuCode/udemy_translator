import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../notice.module.css';
import { IconSearch } from '@/components/ui/Icons';
import { NOTICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: '보도자료 | 메타자산운용(주)',
  description: '메타자산운용의 보도자료 및 뉴스를 안내합니다.',
};

const newsItems = NOTICES.filter(n => n.category === '뉴스');

export default function NewsPage() {
  return (
    <div className={styles.page}>
      {/* Left sidebar */}
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.goHome}>GO HOME</Link>
        <h1 className={styles.sidebarTitle}>NEWS</h1>
        <div className={styles.sidebarMeta}>
          <p className={styles.sidebarCategory}>보도자료</p>
          <p className={styles.sidebarDesc}>
            메타자산운용의 최신 보도자료와<br />
            미디어 관련 소식을 안내드립니다.
          </p>
          <div className={styles.tabs}>
            <Link href="/notice/announce" className={styles.tab}>공지사항</Link>
            <Link href="/notice/news" className={`${styles.tab} ${styles.tabActive}`}>보도자료</Link>
            <Link href="/notice/disclosure" className={styles.tab}>공시정보</Link>
          </div>
        </div>
      </aside>

      {/* Right content */}
      <main className={styles.content}>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="검색어를 입력해주세요" />
          <button className={styles.searchBtn} aria-label="검색"><IconSearch size={18} /></button>
        </div>

        <ul className={styles.list}>
          {newsItems.map((item) => (
            <li key={item.id}>
              <Link href={`/notice/${item.id}`} className={styles.listItem}>
                <div className={styles.thumbnail}>
                  <span className={styles.thumbnailPlaceholder}>META ASSET</span>
                </div>
                <div>
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
                <span className={styles.itemDate}>{item.date}</span>
                <span className={styles.itemLink}>→</span>
              </Link>
            </li>
          ))}
        </ul>

        {newsItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#999' }}>
            등록된 보도자료가 없습니다.
          </div>
        )}

        <div className={styles.pagination}>
          <Link href="#" className={`${styles.pageNum} ${styles.pageNumActive}`}>1</Link>
        </div>
      </main>
    </div>
  );
}
