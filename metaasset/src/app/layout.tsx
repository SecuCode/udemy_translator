import type { Metadata } from 'next';
import './globals.css';
import ConditionalLayout from '@/components/layout/ConditionalLayout';

export const metadata: Metadata = {
  title: '메타자산운용(주) | Meta Asset Management',
  description: '메타자산운용(주)는 전문적인 자산운용과 투자자의 안정적인 수익실현을 목표로 합니다.',
  keywords: '메타자산운용, 자산운용, 투자, 펀드, 금융, IPO',
  openGraph: {
    title: '메타자산운용(주)',
    description: '전문적인 자산운용, 안정적인 수익실현',
    images: ['/images/common/og.png'],
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
