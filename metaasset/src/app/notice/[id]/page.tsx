import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { NOTICES } from '@/lib/constants';
import styles from '../notice.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return NOTICES.map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = NOTICES.find(n => n.id === Number(id));
  if (!item) return { title: '게시글을 찾을 수 없습니다' };
  return {
    title: `${item.title} | 메타자산운용`,
    description: item.title,
  };
}

export default async function NoticeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = NOTICES.find(n => n.id === Number(id));

  if (!item) {
    notFound();
  }

  const categoryMap: Record<string, { path: string; label: string }> = {
    '공지': { path: '/notice/announce', label: '공지사항' },
    '뉴스': { path: '/notice/news', label: '보도자료' },
    '공시': { path: '/notice/disclosure', label: '공시정보' },
  };

  const cat = categoryMap[item.category];

  const allInCategory = NOTICES.filter(n => n.category === item.category);
  const currentIdx = allInCategory.findIndex(n => n.id === item.id);
  const prevItem = currentIdx < allInCategory.length - 1 ? allInCategory[currentIdx + 1] : null;
  const nextItem = currentIdx > 0 ? allInCategory[currentIdx - 1] : null;

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.goHome}>GO HOME</Link>
        <h1 className={styles.sidebarTitle}>NOTICE</h1>
        <div className={styles.sidebarMeta}>
          <p className={styles.sidebarCategory}>{cat.label}</p>
          <p className={styles.sidebarDesc}>
            메타자산운용의 {cat.label}입니다.
          </p>
          <div className={styles.tabs}>
            <Link href="/notice/announce" className={styles.tab}>공지사항</Link>
            <Link href="/notice/news" className={styles.tab}>보도자료</Link>
            <Link href="/notice/disclosure" className={styles.tab}>공시정보</Link>
          </div>
        </div>
      </aside>

      <main className={styles.content}>
        <div className={styles.detailHeader}>
          <span className={styles.detailCategory}>{item.category}</span>
          <h2 className={styles.detailTitle}>{item.title}</h2>
          <div className={styles.detailMeta}>
            <span className={styles.detailDate}>{item.date}</span>
            <span className={styles.detailAuthor}>메타자산운용</span>
          </div>
        </div>

        <div className={styles.detailDivider} />

        <div className={styles.detailBody}>
          {item.content.split('\n').map((line, i) => (
            <p key={i} className={line === '' ? styles.detailSpacer : undefined}>{line}</p>
          ))}
        </div>

        <div className={styles.detailDivider} />

        <div className={styles.detailNav}>
          {nextItem ? (
            <Link href={`/notice/${nextItem.id}`} className={styles.detailNavItem}>
              <span className={styles.detailNavLabel}>다음 글</span>
              <span className={styles.detailNavTitle}>{nextItem.title}</span>
            </Link>
          ) : (
            <div className={styles.detailNavItem}>
              <span className={styles.detailNavLabel}>다음 글</span>
              <span className={styles.detailNavTitle}>다음 글이 없습니다.</span>
            </div>
          )}
          {prevItem ? (
            <Link href={`/notice/${prevItem.id}`} className={styles.detailNavItem}>
              <span className={styles.detailNavLabel}>이전 글</span>
              <span className={styles.detailNavTitle}>{prevItem.title}</span>
            </Link>
          ) : (
            <div className={styles.detailNavItem}>
              <span className={styles.detailNavLabel}>이전 글</span>
              <span className={styles.detailNavTitle}>이전 글이 없습니다.</span>
            </div>
          )}
        </div>

        <div className={styles.detailActions}>
          <Link href={cat.path} className={styles.detailBackBtn}>목록으로</Link>
        </div>
      </main>
    </div>
  );
}
