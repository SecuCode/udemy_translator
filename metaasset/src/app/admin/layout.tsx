import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '관리자 | 메타자산운용(주)',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh' }}>
      {children}
    </div>
  );
}
