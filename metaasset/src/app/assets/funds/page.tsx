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
  { value: '759', unit: '억원', label: '총 운용자산(AUM)' },
  { value: '6', unit: '개', label: '운용 펀드수' },
  { value: '11.2', unit: '%', label: '평균 수익률' },
  { value: '100', unit: '%', label: '원금 보전율' },
];

const FUND_CATEGORIES = ['전체', 'IPO', '코스닥벤처', '메자닌', '채권'];

const FUNDS: Fund[] = [
  {
    id: 1,
    name: '메타 IPO 전략 1호',
    category: 'IPO',
    categoryColor: '#c9a96e',
    status: '운용중',
    aum: '185억원',
    inception: '2023.06',
    targetReturn: '연 15~20%',
    investmentArea: 'KOSPI/KOSDAQ IPO',
    description: '체계적인 기업 분석을 통해 선별된 IPO 종목에 투자하여 초과 수익을 추구하는 공모주 전문 펀드입니다.',
  },
  {
    id: 2,
    name: '메타 코스닥벤처 1호',
    category: '코스닥벤처',
    categoryColor: '#2563eb',
    status: '운용중',
    aum: '152억원',
    inception: '2023.09',
    targetReturn: '연 12~18%',
    investmentArea: 'KOSDAQ 벤처기업',
    description: '성장 잠재력이 높은 코스닥 벤처기업에 투자하여 기업 성장에 따른 자본차익을 추구합니다.',
  },
  {
    id: 3,
    name: '메타 메자닌 전환사채 1호',
    category: '메자닌',
    categoryColor: '#9333ea',
    status: '운용중',
    aum: '128억원',
    inception: '2024.03',
    targetReturn: '연 8~12%',
    investmentArea: 'CB·BW 전환사채',
    description: '전환사채(CB)·신주인수권부사채(BW) 등 메자닌 증권에 투자하여 안정적 이자수익과 주식전환 차익을 동시에 추구합니다.',
  },
  {
    id: 4,
    name: '메타 채권형 안정 1호',
    category: '채권',
    categoryColor: '#059669',
    status: '운용중',
    aum: '120억원',
    inception: '2022.12',
    targetReturn: '연 5~7%',
    investmentArea: '우량 회사채·국공채',
    description: '신용 분석에 기반한 안정적 채권 운용으로 예금금리 이상의 수익을 추구하며 리스크를 최소화합니다.',
  },
  {
    id: 5,
    name: '메타 IPO 블렌드 2호',
    category: 'IPO',
    categoryColor: '#c9a96e',
    status: '운용중',
    aum: '98억원',
    inception: '2025.03',
    targetReturn: '연 12~16%',
    investmentArea: 'KOSPI/KOSDAQ IPO',
    description: '공모주와 상장 초기 종목을 혼합 운용하여 리스크를 분산하면서 수익을 극대화합니다.',
  },
  {
    id: 6,
    name: '메타 코스닥벤처 2호',
    category: '코스닥벤처',
    categoryColor: '#2563eb',
    status: '운용중',
    aum: '76억원',
    inception: '2025.09',
    targetReturn: '연 10~15%',
    investmentArea: 'KOSDAQ 벤처기업',
    description: '혁신 기술 기반 코스닥 벤처기업을 선별하여 중장기 성장 수익을 추구합니다.',
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
