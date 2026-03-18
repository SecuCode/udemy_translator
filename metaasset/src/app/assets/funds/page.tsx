'use client';

import { useState } from 'react';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import FundDetailModal from '@/components/common/FundDetailModal';
import styles from './funds.module.css';

const ASSETS_NAV = [
  { label: '운용자산현황', href: '/assets/performance' },
  { label: '운용전략', href: '/business/strategy' },
  { label: '운용시스템', href: '/assets/system' },
  { label: '리스크관리', href: '/assets/risk' },
];

interface Fund {
  id: number;
  name: string;
  category: string;
  categoryColor: string;
  status: string;
  aum: string;
  inception: string;
  targetReturn: string;
  investmentArea: string;
  description: string;
}

const FUND_SUMMARY = [
  { value: '5,200', unit: '억원', label: '총 운용자산(AUM)' },
  { value: '12', unit: '개', label: '운용 펀드수' },
  { value: '8.7', unit: '%', label: '평균 수익률' },
  { value: '100', unit: '%', label: '원금 보전율' },
];

const FUND_CATEGORIES = ['전체', '부동산', 'IPO', 'PFV', '주식', '대체투자'];

const FUNDS: Fund[] = [
  {
    id: 1,
    name: '메타 프라임 부동산 펀드',
    category: '부동산',
    categoryColor: '#2563eb',
    status: '운용중',
    aum: '1,500억원',
    inception: '2024.03',
    targetReturn: '연 8~10%',
    investmentArea: '서울 강남권 오피스',
    description: '서울 핵심 업무지구 프라임급 오피스 빌딩에 투자하여 안정적인 임대수익과 자본차익을 추구하는 펀드입니다.',
  },
  {
    id: 2,
    name: '메타 IPO 전략 펀드',
    category: 'IPO',
    categoryColor: '#c9a96e',
    status: '운용중',
    aum: '800억원',
    inception: '2024.06',
    targetReturn: '연 15~20%',
    investmentArea: 'KOSPI/KOSDAQ IPO',
    description: '체계적인 기업 분석을 통해 선별된 IPO 종목에 투자하여 초과 수익을 추구하는 공모주 전문 펀드입니다.',
  },
  {
    id: 3,
    name: '메타 물류센터 개발 펀드',
    category: '부동산',
    categoryColor: '#2563eb',
    status: '운용중',
    aum: '1,200억원',
    inception: '2024.09',
    targetReturn: '연 9~12%',
    investmentArea: '수도권 물류센터',
    description: '이커머스 성장에 따른 물류 수요 증가에 주목하여 수도권 핵심 물류 거점에 투자합니다.',
  },
  {
    id: 4,
    name: '메타 PFV 개발금융 펀드',
    category: 'PFV',
    categoryColor: '#9333ea',
    status: '운용중',
    aum: '600억원',
    inception: '2025.01',
    targetReturn: '연 10~14%',
    investmentArea: '수도권 복합개발',
    description: '프로젝트 파이낸싱 비히클을 활용한 부동산 개발 사업 투자를 통해 개발 수익을 공유합니다.',
  },
  {
    id: 5,
    name: '메타 공모주 블렌드 펀드',
    category: 'IPO',
    categoryColor: '#c9a96e',
    status: '운용중',
    aum: '500억원',
    inception: '2025.03',
    targetReturn: '연 12~18%',
    investmentArea: 'KOSPI/KOSDAQ IPO',
    description: '공모주와 상장 초기 종목을 혼합 운용하여 리스크를 분산하면서 수익을 극대화합니다.',
  },
  {
    id: 6,
    name: '메타 밸류업 주식형 펀드',
    category: '주식',
    categoryColor: '#059669',
    status: '운용중',
    aum: '350억원',
    inception: '2025.06',
    targetReturn: '연 10~15%',
    investmentArea: 'KOSPI 가치주',
    description: '기업가치 대비 저평가된 우량 종목을 선별 중장기 투자를 통해 가치상승 수익을 추구합니다.',
  },
  {
    id: 7,
    name: '메타 레지던스 펀드',
    category: '부동산',
    categoryColor: '#2563eb',
    status: '모집중',
    aum: '800억원',
    inception: '2026.03(예정)',
    targetReturn: '연 7~9%',
    investmentArea: '서울 주거시설',
    description: '서울 주요 주거지역 레지던스 개발 및 운용을 통해 안정적인 임대수익을 추구합니다.',
  },
  {
    id: 8,
    name: '메타 대체투자 멀티전략',
    category: '대체투자',
    categoryColor: '#dc2626',
    status: '운용중',
    aum: '450억원',
    inception: '2025.09',
    targetReturn: '연 8~12%',
    investmentArea: '인프라 에너지',
    description: '전통 자산군과 낮은 상관관계를 가진 대체자산에 분산 투자하여 포트폴리오 안정성을 높입니다.',
  },
];

export default function FundsPage() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);

  const filteredFunds = activeCategory === '전체'
    ? FUNDS
    : FUNDS.filter((f) => f.category === activeCategory);

  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="FUND STATUS"
        titleKo="펀드 현황"
        description="메타자산운용의 펀드 운용 현황을 안내합니다."
        backgroundImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2400&q=90"
      />
      <SubNavigation items={ASSETS_NAV} variant="cards" />

      {/* Section 1: Dark - Summary Cards */}
      <section className={styles.summarySection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.label}>AUM OVERVIEW</span>
            <h2 className={styles.summaryTitle}>운용자산 요약</h2>
            <div className={styles.summaryGrid}>
              {FUND_SUMMARY.map((item) => (
                <div key={item.label} className={styles.summaryCard}>
                  <span className={styles.summaryValue}>
                    {item.value}<span className={styles.summaryUnit}>{item.unit}</span>
                  </span>
                  <span className={styles.summaryLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Light - Category Filter + Fund Cards */}
      <section className={styles.fundListSection}>
        <div className={styles.inner}>
          <span className={styles.labelDark}>FUND LIST</span>
          <h2 className={styles.fundListTitle}>펀드 목록</h2>
          <div className={styles.categoryFilter}>
            {FUND_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                type="button"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== '전체' && (
                  <span className={styles.filterCount}>
                    {FUNDS.filter((f) => f.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {filteredFunds.length === 0 ? (
            <div className={styles.emptyState}>
              <p>해당 카테고리에 등록된 펀드가 없습니다.</p>
            </div>
          ) : (
            <div className={styles.fundGrid}>
              {filteredFunds.map((fund) => (
                <div
                  key={fund.id}
                  className={styles.fundCard}
                  onClick={() => setSelectedFund(fund)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedFund(fund); }}
                >
                  <div className={styles.fundCardHeader}>
                    <span
                      className={styles.fundCategory}
                      style={{ backgroundColor: fund.categoryColor }}
                    >
                      {fund.category}
                    </span>
                    <span className={`${styles.fundStatus} ${
                      fund.status === '모집중' ? styles.fundStatusRecruiting : ''
                    }`}>
                      {fund.status}
                    </span>
                  </div>
                  <h3 className={styles.fundName}>{fund.name}</h3>
                  <p className={styles.fundDesc}>{fund.description}</p>
                  <div className={styles.fundMeta}>
                    <div className={styles.fundMetaItem}>
                      <span className={styles.fundMetaLabel}>운용규모</span>
                      <span className={styles.fundMetaValue}>{fund.aum}</span>
                    </div>
                    <div className={styles.fundMetaItem}>
                      <span className={styles.fundMetaLabel}>설정일</span>
                      <span className={styles.fundMetaValue}>{fund.inception}</span>
                    </div>
                    <div className={styles.fundMetaItem}>
                      <span className={styles.fundMetaLabel}>목표수익률</span>
                      <span className={styles.fundMetaValue}>{fund.targetReturn}</span>
                    </div>
                    <div className={styles.fundMetaItem}>
                      <span className={styles.fundMetaLabel}>투자영역</span>
                      <span className={styles.fundMetaValue}>{fund.investmentArea}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Dark - Disclaimer */}
      <section className={styles.disclaimerSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.disclaimer}>
              <h3 className={styles.disclaimerTitle}>투자 유의사항</h3>
              <ul className={styles.disclaimerList}>
                <li>본 금융투자상품은 원금이 보장되지 않으며 투자에 따른 손실은 투자자에게 귀속됩니다.</li>
                <li>과거의 운용실적이 미래의 수익을 보장하는 것은 아닙니다.</li>
                <li>상기 수익률은 목표 수익률이며 실제 수익률은 시장 상황에 따라 달라질 수 있습니다.</li>
                <li>투자 전 반드시 투자설명서를 읽어보시기 바랍니다.</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fund Detail Modal */}
      <FundDetailModal
        fund={selectedFund}
        onClose={() => setSelectedFund(null)}
      />
    </div>
  );
}
