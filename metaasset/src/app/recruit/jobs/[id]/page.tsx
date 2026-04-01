import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JOB_POSTS } from '@/lib/constants';
import styles from '../../../notice/notice.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return JOB_POSTS.map((job) => ({ id: String(job.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = JOB_POSTS.find(j => j.id === Number(id));
  if (!job) return { title: '채용공고를 찾을 수 없습니다' };
  return {
    title: `${job.title} | 메타자산운용 채용`,
    description: job.title,
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const job = JOB_POSTS.find(j => j.id === Number(id));

  if (!job) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.goHome}>GO HOME</Link>
        <h1 className={styles.sidebarTitle}>RECRUITMENT</h1>
        <div className={styles.sidebarMeta}>
          <p className={styles.sidebarCategory}>채용공고</p>
          <p className={styles.sidebarDesc}>
            메타자산운용의 채용 정보입니다.
          </p>
        </div>
      </aside>

      <main className={styles.content}>
        <div className={styles.detailHeader}>
          <span className={styles.detailCategory}>{job.status}</span>
          <h2 className={styles.detailTitle}>{job.title}</h2>
          <div className={styles.detailMeta}>
            <span className={styles.detailDate}>부서: {job.department}</span>
            <span className={styles.detailDate}>채용 형태: {job.type}</span>
            <span className={styles.detailAuthor}>마감: {job.deadline}</span>
          </div>
        </div>

        <div className={styles.detailDivider} />

        <div className={styles.detailBody}>
          {job.content.split('\n').map((line, i) => (
            <p key={i} className={line === '' ? styles.detailSpacer : undefined}>{line}</p>
          ))}
        </div>

        <div className={styles.detailDivider} />

        <div className={styles.detailActions}>
          <Link href="/recruit/jobs" className={styles.detailBackBtn}>목록으로</Link>
        </div>
      </main>
    </div>
  );
}
