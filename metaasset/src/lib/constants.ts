// Company information constants

export const COMPANY = {
  name: '메타자산운용(주)',
  nameEn: 'META ASSET MANAGEMENT',
  nameShort: 'META ASSET MANAGEMENT',
  description: '메타자산운용(주)는 전문적인 자산운용과 투자자의 안정적인 수익실현을 목표로 합니다.',
  address: '서울특별시 영등포구 국제금융로 8길 11, 대영빌딩 631호',
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
  { label: 'AUM 목표', labelEn: 'Target AUM', value: 3000, unit: '억원', prefix: '' },
  { label: '목표 펀드', labelEn: 'Funds', value: 15, unit: '개+', prefix: '' },
  { label: '설립년도', labelEn: 'Since', value: 2019, unit: '년', prefix: '' },
  { label: '목표 수익률', labelEn: 'Returns', value: 15, unit: '%+', prefix: '' },
];

export interface NoticeItem {
  id: number;
  category: '공지' | '뉴스' | '공시';
  title: string;
  date: string;
  content: string;
}

export const NOTICES: NoticeItem[] = [
  {
    id: 1, category: '공지', title: '메타자산운용 홈페이지 리뉴얼 오픈 안내', date: '2026.03.15',
    content: '안녕하십니까, 메타자산운용입니다.\n\n메타자산운용 공식 홈페이지가 리뉴얼 오픈되었습니다.\n\n이번 리뉴얼을 통해 당사의 투자 철학, 운용 현황, 펀드 정보 등을 보다 직관적이고 체계적으로 확인하실 수 있도록 개편하였습니다.\n\n주요 개편 사항은 다음과 같습니다.\n\n1. 사업 소개 및 투자 전략 페이지 신설\n2. 운용 현황 실시간 정보 제공\n3. 모바일 환경 최적화\n4. 공시 정보 및 보도자료 통합 관리\n\n향후에도 투자자 여러분께 유용한 정보를 제공하기 위해 지속적으로 개선해 나가겠습니다.\n\n감사합니다.',
  },
  {
    id: 2, category: '뉴스', title: 'IPO 투자 전략 세미나 개최', date: '2026.03.10',
    content: '메타자산운용은 2026년 3월 10일, 여의도 본사에서 기관투자자 대상 IPO 투자 전략 세미나를 개최하였습니다.\n\n이번 세미나에서는 2026년 상반기 IPO 시장 전망과 공모주 투자 전략, 그리고 당사의 IPO 스코어링 모델에 대한 상세한 분석이 공유되었습니다.\n\n주요 발표 내용:\n\n1. 2026년 상반기 IPO 파이프라인 분석\n2. 업종별 공모주 수익률 비교 분석\n3. 메타 IPO 스코어링 모델 소개\n4. Q&A 세션\n\n약 40여 명의 기관투자자 및 증권사 관계자가 참석하였으며, 당사의 체계적인 IPO 분석 역량에 대해 높은 관심을 보였습니다.',
  },
  {
    id: 3, category: '공시', title: '2025년 4분기 운용 보고서 공시', date: '2026.02.28',
    content: '금융투자업규정 제4-73조에 의거하여 2025년 4분기 자산운용 보고서를 공시합니다.\n\n■ 공시 대상 기간: 2025년 10월 1일 ~ 2025년 12월 31일\n■ 공시 펀드: 전 운용 펀드\n\n주요 내용:\n\n1. 펀드별 운용 성과 및 벤치마크 비교\n2. 자산 배분 현황 및 변동 사항\n3. 투자 위험 관리 현황\n4. 수수료 및 보수 내역\n\n상세 내용은 금융투자협회 전자공시시스템(dis.kofia.or.kr)에서 확인하실 수 있습니다.\n\n투자자 여러분의 관심에 감사드립니다.',
  },
  {
    id: 4, category: '공지', title: '신규 부동산 펀드 출시 안내', date: '2026.02.15',
    content: '메타자산운용에서 신규 부동산 펀드를 출시하게 되어 안내드립니다.\n\n■ 펀드명: 메타 프라임 부동산 투자신탁 제1호\n■ 투자 대상: 서울 핵심권역 프라임급 오피스 빌딩\n■ 목표 수익률: 연 6~8% (배당 포함)\n■ 펀드 규모: 500억 원\n■ 모집 기간: 2026년 2월 15일 ~ 3월 15일\n\n본 펀드는 서울 CBD 및 GBD 소재 프라임급 오피스 빌딩에 투자하여 안정적인 임대수익과 중장기 자본차익을 동시에 추구합니다.\n\n상세한 투자 설명서는 당사 영업팀을 통해 제공됩니다.\n\n※ 본 펀드는 전문투자자 대상 사모펀드입니다.\n※ 투자 원금 손실이 발생할 수 있으며, 이는 투자자에게 귀속됩니다.',
  },
  {
    id: 5, category: '뉴스', title: '메타자산운용, 올해의 자산운용사 선정', date: '2026.01.30',
    content: '메타자산운용이 한국금융신문 주최 「2025 대한민국 금융대상」에서 올해의 자산운용사로 선정되었습니다.\n\n심사위원단은 당사의 체계적인 투자 프로세스, 일관된 운용 성과, 그리고 투자자 중심의 운용 철학을 높이 평가하였습니다.\n\n특히 IPO 공모주 전략에서 벤치마크 대비 연평균 3%p 이상의 초과수익을 달성한 점과, 리스크 관리 체계의 우수성이 주요 선정 사유로 꼽혔습니다.\n\n메타자산운용은 이번 수상을 계기로 투자자 여러분의 신뢰에 보다 나은 성과로 보답하겠습니다.',
  },
  {
    id: 6, category: '공시', title: '2025년 3분기 운용 보고서 공시', date: '2025.11.30',
    content: '금융투자업규정 제4-73조에 의거하여 2025년 3분기 자산운용 보고서를 공시합니다.\n\n■ 공시 대상 기간: 2025년 7월 1일 ~ 2025년 9월 30일\n■ 공시 펀드: 전 운용 펀드\n\n3분기 중 주요 운용 성과:\n- IPO 공모주 전략: +4.2% (BM 대비 +1.8%p)\n- 메자닌 전략: +2.1% (안정적 이자수익 기반)\n- 코스닥벤처: +3.5%\n\n상세 보고서는 금융투자협회 전자공시시스템에서 확인 가능합니다.',
  },
  {
    id: 7, category: '공지', title: '메타 대체투자 멀티스트래터지 펀드 모집 안내', date: '2025.11.15',
    content: '메타자산운용에서 대체투자 멀티스트래터지 펀드의 투자자를 모집합니다.\n\n■ 펀드명: 메타 대체투자 멀티스트래터지 펀드 제1호\n■ 투자 전략: 메자닌 + 부동산 + Pre-IPO 혼합 전략\n■ 목표 수익률: 연 8~12%\n■ 펀드 규모: 300억 원\n■ 최소 투자금액: 3억 원\n\n본 펀드는 단일 전략의 리스크를 분산하면서도 복합적인 수익원을 확보하는 것을 목표로 설계되었습니다.\n\n관심 있으신 적격 투자자께서는 당사 영업팀으로 연락 부탁드립니다.',
  },
  {
    id: 8, category: '뉴스', title: '여의도 본사 이전 완료', date: '2025.10.20',
    content: '메타자산운용이 2025년 10월, 서울특별시 영등포구 국제금융로 8길 11 대영빌딩으로 본사를 이전하였습니다.\n\n여의도 금융 중심지에 위치한 새 사무실은 업무 효율성과 대외 접근성을 동시에 높이기 위해 선정되었습니다.\n\n■ 새 주소: 서울특별시 영등포구 국제금융로 8길 11, 대영빌딩 6층 631호\n■ 대표전화: 02-780-9901\n■ 팩스: 02-780-9902\n\n방문 시 사전 연락 부탁드리며, 변경된 연락처로 연락 부탁드립니다.',
  },
  {
    id: 9, category: '공시', title: '2025년 2분기 운용 보고서 공시', date: '2025.08.30',
    content: '금융투자업규정 제4-73조에 의거하여 2025년 2분기 자산운용 보고서를 공시합니다.\n\n■ 공시 대상 기간: 2025년 4월 1일 ~ 2025년 6월 30일\n\n2분기 중 시장 환경이 변동성이 높았음에도 불구하고, 원칙 기반의 운용을 통해 안정적인 성과를 달성하였습니다.\n\n상세 내용은 금융투자협회 전자공시시스템에서 확인하실 수 있습니다.',
  },
  {
    id: 10, category: '뉴스', title: '메타자산운용 운용자산 1,000억원 돌파', date: '2025.07.15',
    content: '메타자산운용의 총 운용자산(AUM)이 1,000억 원을 돌파하였습니다.\n\n2019년 설립 이후 체계적인 투자 프로세스와 일관된 운용 철학을 바탕으로 꾸준한 성장을 이어왔으며, 이번 AUM 1,000억 원 돌파는 투자자 여러분의 신뢰가 만들어낸 결과입니다.\n\n메타자산운용은 향후에도 전문성과 원칙에 기반한 자산운용을 통해 투자자 여러분의 기대에 부응하겠습니다.',
  },
  {
    id: 11, category: '공지', title: '메타 물류센터 개발 펀드 출시', date: '2025.06.01',
    content: '메타자산운용에서 수도권 대형 물류센터 개발 펀드를 출시합니다.\n\n■ 펀드명: 메타 물류인프라 투자신탁 제1호\n■ 투자 대상: 수도권 소재 대형 물류센터 개발사업\n■ 목표 수익률: 연 7~9%\n■ 펀드 규모: 200억 원\n\n이커머스 시장의 지속적 성장에 따른 물류센터 수요 증가를 기반으로 안정적인 투자 수익을 추구합니다.\n\n※ 전문투자자 대상 사모펀드입니다.',
  },
  {
    id: 12, category: '뉴스', title: 'IPO 시장 전망 리포트 발간', date: '2025.05.10',
    content: '메타자산운용 리서치센터에서 「2025 하반기 IPO 시장 전망」 리포트를 발간하였습니다.\n\n본 리포트는 2025년 상반기 IPO 시장 리뷰와 하반기 주요 상장 예정 기업 분석, 그리고 업종별 투자 전략을 담고 있습니다.\n\n주요 내용:\n1. 2025년 상반기 IPO 시장 리뷰\n2. 하반기 대형 IPO 파이프라인 분석\n3. 업종별 공모가 적정성 분석\n4. 메타자산운용 IPO 투자 전략 제언\n\n리포트 전문은 기관투자자 대상으로 배포되며, 관심 있으신 분은 당사로 문의 바랍니다.',
  },
  {
    id: 13, category: '공시', title: '2025년 1분기 운용 보고서 공시', date: '2025.05.30',
    content: '금융투자업규정 제4-73조에 의거하여 2025년 1분기 자산운용 보고서를 공시합니다.\n\n■ 공시 대상 기간: 2025년 1월 1일 ~ 2025년 3월 31일\n\n상세 내용은 금융투자협회 전자공시시스템에서 확인 가능합니다.',
  },
  {
    id: 14, category: '공지', title: '메타 IPO 전략 펀드 설정 완료', date: '2025.03.01',
    content: '메타자산운용이 IPO 전문 투자 펀드의 설정을 완료하였습니다.\n\n■ 펀드명: 메타 IPO 알파 전략 펀드\n■ 투자 전략: 자체 IPO 스코어링 모델 기반 공모주 선별 투자\n■ 벤치마크: KOSPI\n■ 목표: BM 대비 연 3%p 이상 초과수익\n\n본 펀드는 연간 200개 이상의 IPO 후보 기업을 분석하고, 엄격한 기준에 부합하는 기업에만 선별 투자하여 안정적인 초과수익을 추구합니다.',
  },
  {
    id: 15, category: '뉴스', title: '부동산 펀드 수익률 연 9.2% 달성', date: '2025.01.15',
    content: '메타자산운용이 운용 중인 부동산 펀드가 2024년 연간 수익률 9.2%를 달성하였습니다.\n\n서울 핵심권역 프라임급 오피스 빌딩에 대한 선제적 투자와 체계적인 자산관리가 우수한 성과의 주요 요인이었습니다.\n\n특히 높은 공실률 환경에서도 95% 이상의 임대율을 유지하며 안정적인 현금흐름을 확보한 점이 돋보였습니다.\n\n메타자산운용은 부동산 투자 영역에서도 전문성에 기반한 차별화된 성과를 지속 창출하겠습니다.',
  },
];

export interface JobPost {
  id: number;
  title: string;
  department: string;
  type: string;
  deadline: string;
  status: '모집중' | '마감';
  content: string;
}

export const JOB_POSTS: JobPost[] = [
  {
    id: 1, title: '부동산 투자 운용역 (과장~차장급)', department: '운용본부', type: '경력', deadline: '2026.04.30', status: '모집중',
    content: '■ 모집 부문: 부동산 투자 운용역 (과장~차장급)\n■ 소속: 운용본부 부동산투자팀\n■ 채용 형태: 정규직\n\n[담당 업무]\n- 부동산 펀드 운용 및 투자 의사결정\n- 투자 대상 자산 실사(Due Diligence) 수행\n- 자산가치 평가 및 투자 구조 설계\n- 투자 포트폴리오 관리 및 성과 분석\n- 기관투자자 대상 IR 활동 지원\n\n[자격 요건]\n- 부동산 투자 또는 자산운용 경력 5년 이상\n- 부동산 펀드 운용 경험자 우대\n- 감정평가사, CFA, 부동산 관련 자격증 보유자 우대\n- 영어 커뮤니케이션 가능자\n\n[근무 조건]\n- 근무지: 서울 여의도 본사\n- 급여: 회사 내규에 따름 (경력 고려)\n\n지원서는 info@metaasset.co.kr로 보내주시기 바랍니다.',
  },
  {
    id: 2, title: '리서치 애널리스트 (대리~과장급)', department: '리서치센터', type: '경력', deadline: '2026.04.30', status: '모집중',
    content: '■ 모집 부문: 리서치 애널리스트 (대리~과장급)\n■ 소속: 리서치센터\n■ 채용 형태: 정규직\n\n[담당 업무]\n- IPO 후보 기업 리서치 및 투자 의견 작성\n- 산업 분석 및 기업 밸류에이션\n- 투자위원회 자료 작성 및 발표\n- 정기 시장 전망 리포트 발간\n\n[자격 요건]\n- 증권사 또는 자산운용사 리서치 경력 3년 이상\n- 재무제표 분석 및 밸류에이션 모델링 능력\n- CFA Level 2 이상 보유자 우대\n\n[근무 조건]\n- 근무지: 서울 여의도 본사\n- 급여: 회사 내규에 따름\n\n지원서는 info@metaasset.co.kr로 보내주시기 바랍니다.',
  },
  {
    id: 3, title: '리스크관리 담당자', department: '리스크관리팀', type: '경력', deadline: '2026.05.15', status: '모집중',
    content: '■ 모집 부문: 리스크관리 담당자\n■ 소속: 리스크관리팀\n■ 채용 형태: 정규직\n\n[담당 업무]\n- 펀드별 투자 리스크 모니터링\n- VaR, 스트레스 테스트 등 리스크 지표 관리\n- 투자 한도 및 컴플라이언스 점검\n- 리스크 보고서 작성 및 보고\n\n[자격 요건]\n- 금융기관 리스크관리 경력 3년 이상\n- FRM 또는 CFA 보유자 우대\n- 금융공학 또는 통계학 전공자 우대\n\n지원서는 info@metaasset.co.kr로 보내주시기 바랍니다.',
  },
  {
    id: 4, title: '경영지원 (인사/총무)', department: '경영지원팀', type: '경력', deadline: '마감시', status: '모집중',
    content: '■ 모집 부문: 경영지원 담당자 (인사/총무)\n■ 소속: 경영지원팀\n■ 채용 형태: 정규직\n\n[담당 업무]\n- 인사관리 (채용, 평가, 교육)\n- 총무 업무 (사무실 관리, 계약 관리)\n- 급여 및 복리후생 관리\n- 대외 행정 업무 지원\n\n[자격 요건]\n- 인사/총무 경력 2년 이상\n- 금융기관 근무 경험자 우대\n\n지원서는 info@metaasset.co.kr로 보내주시기 바랍니다.',
  },
];

