// Company information constants

export const COMPANY = {
  name: '메타자산운용(주)',
  nameEn: 'META ASSET MANAGEMENT',
  nameShort: 'META ASSET MANAGEMENT',
  description: '메타자산운용(주)는 전문적인 자산운용과 투자자의 안정적인 수익실현을 목표로 합니다.',
  address: '서울특별시 영등포구 국제금융로 8길 11, (여의도동) 대영빌딩 6층 631호',
  tel: '02-780-9901',
  fax: '02-780-9902',
  email: 'info@metaasset.co.kr',
  copyright: `© ${new Date().getFullYear()} Meta Asset Management Co., Ltd. All rights reserved.`,
} as const;

export interface MenuItem {
  label: string;
  labelEn: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: '회사소개',
    labelEn: 'ABOUT US',
    href: '/about',
    children: [
      { label: '회사소개', labelEn: 'Overview', href: '/about/overview' },
      { label: '리더십', labelEn: 'Leadership', href: '/about/ceo' },
      { label: '조직도', labelEn: 'Organization', href: '/about/organization' },
      { label: '연혁', labelEn: 'History', href: '/about/history' },
      { label: '오시는 길', labelEn: 'Location', href: '/about/location' },
    ],
  },
  {
    label: '자산운용',
    labelEn: 'ASSET MANAGEMENT',
    href: '/assets',
    children: [
      { label: '운용자산현황', labelEn: 'AUM Status', href: '/assets/performance' },
      { label: '운용전략', labelEn: 'Strategy', href: '/business/strategy' },
      { label: '운용시스템', labelEn: 'System', href: '/assets/system' },
      { label: '리스크관리', labelEn: 'Risk Management', href: '/assets/risk' },
    ],
  },
  {
    label: '사업소개',
    labelEn: 'BUSINESS',
    href: '/business',
    children: [
      { label: '부동산 펀드', labelEn: 'Real Estate Fund', href: '/business/intro' },
      { label: 'PFV', labelEn: 'PFV', href: '/business/pfv' },
      { label: 'IPO 펀드', labelEn: 'IPO Fund', href: '/business/ipo' },
      { label: '주식형 펀드', labelEn: 'Equity Fund', href: '/business/equity' },
    ],
  },
  {
    label: '운용현황',
    labelEn: 'FUND STATUS',
    href: '/fund-status',
    children: [
      { label: '펀드 현황', labelEn: 'Funds', href: '/assets/funds' },
    ],
  },
  {
    label: '정보센터',
    labelEn: 'INFORMATION',
    href: '/notice',
    children: [
      { label: '공지사항', labelEn: 'Notice', href: '/notice/announce' },
      { label: '보도자료', labelEn: 'Press', href: '/notice/news' },
      { label: '공시정보', labelEn: 'Disclosure', href: '/notice/disclosure' },
    ],
  },
  {
    label: '인재채용',
    labelEn: 'RECRUIT',
    href: '/recruit',
    children: [
      { label: '채용공고', labelEn: 'Job Openings', href: '/recruit/jobs' },
    ],
  },
];

export const CORE_COMPETENCIES = [
  {
    id: 'real-estate',
    title: '부동산 투자',
    titleEn: 'Real Estate',
    description: '안정적인 부동산 투자를 통해 장기적인 수익을 실현합니다. 오피스, 물류센터, 리테일 등 다양한 부동산 자산에 투자합니다.',
    icon: 'building',
  },
  {
    id: 'ipo',
    title: 'IPO 투자',
    titleEn: 'IPO Investment',
    description: '기업공개(IPO) 시장에서의 전문적인 분석과 투자를 통해 높은 수익률을 추구합니다. 철저한 기업 분석과 시장 타이밍 전략을 활용합니다.',
    icon: 'trending-up',
  },
  {
    id: 'alternative',
    title: '대체 투자',
    titleEn: 'Alternative',
    description: '전통적인 투자 자산을 넘어 다양한 대체 투자 기회를 발굴하여 포트폴리오를 다각화합니다.',
    icon: 'diamond',
  },
  {
    id: 'fund',
    title: '펀드 운용',
    titleEn: 'Fund Management',
    description: '전문적인 운용 역량을 바탕으로 투자자 맞춤형 펀드를 설계하고 안정적으로 운용합니다.',
    icon: 'bar-chart',
  },
];

export const AUM_STATS = [
  { label: '운용자산규모', labelEn: 'AUM', value: 5000, unit: '억원', prefix: '약 ' },
  { label: '운용펀드수', labelEn: 'Funds', value: 15, unit: '개', prefix: '' },
  { label: '설립년도', labelEn: 'Since', value: 2024, unit: '년', prefix: '' },
  { label: '투자 수익률', labelEn: 'Returns', value: 12, unit: '%', prefix: '' },
];

export const NOTICES = [
  { id: 1, category: '공지', title: '메타자산운용 홈페이지 오픈 안내', date: '2026.03.15' },
  { id: 2, category: '뉴스', title: 'IPO 투자 전략 세미나 개최', date: '2026.03.10' },
  { id: 3, category: '공시', title: '2025년 4분기 운용 보고서 공시', date: '2026.02.28' },
  { id: 4, category: '공지', title: '신규 부동산 펀드 출시 안내', date: '2026.02.15' },
  { id: 5, category: '뉴스', title: '메타자산운용, 올해의 자산운용사 선정', date: '2026.01.30' },
  { id: 6, category: '공시', title: '2025년 3분기 운용 보고서 공시', date: '2025.11.30' },
  { id: 7, category: '공지', title: '메타 대체투자 멀티스트래터지 펀드 모집 안내', date: '2025.11.15' },
  { id: 8, category: '뉴스', title: '여의도 본사 이전 완료', date: '2025.10.20' },
  { id: 9, category: '공시', title: '2025년 2분기 운용 보고서 공시', date: '2025.08.30' },
  { id: 10, category: '뉴스', title: '메타자산운용 운용자산 3,000억원 돌파', date: '2025.07.15' },
  { id: 11, category: '공지', title: '메타 물류센터 개발 펀드 출시', date: '2025.06.01' },
  { id: 12, category: '뉴스', title: 'IPO 시장 전망 리포트 발간', date: '2025.05.10' },
  { id: 13, category: '공시', title: '2025년 1분기 운용 보고서 공시', date: '2025.05.30' },
  { id: 14, category: '공지', title: '메타 IPO 전략 펀드 설정 완료', date: '2025.03.01' },
  { id: 15, category: '뉴스', title: '부동산 펀드 수익률 연 9.2% 달성', date: '2025.01.15' },
];
