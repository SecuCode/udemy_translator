'use client';

import { useState } from 'react';
import Image from 'next/image';
import SubpageHero from '@/components/common/SubpageHero';
import SubNavigation from '@/components/common/SubNavigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import styles from './risk.module.css';

const ASSET_NAV = [
  { label: '운용자산현황', href: '/assets/performance' },
  { label: '운용전략', href: '/business/strategy' },
  { label: '운용시스템', href: '/assets/system' },
  { label: '리스크관리', href: '/assets/risk' },
];

interface RiskItem {
  title: string;
  desc: string;
  level: string;
  detail: string;
  measures: string[];
}

const RISK_TYPES: RiskItem[] = [
  {
    title: '시장 리스크',
    desc: '금리, 환율, 주가 등 시장 변수의 변동에 따른 손실 가능성을 측정하고 관리합니다.',
    level: '체계적 관리',
    detail: 'VaR(Value at Risk), 스트레스 테스트, 시나리오 분석 등 다양한 계량적 모형을 활용하여 시장 리스크를 정량적으로 측정하고, 일별·주별·월별 리포팅을 통해 사전 모니터링합니다.',
    measures: ['VaR 한도 설정 及 모니터링', '민감도 분석 (Duration, Convexity)', '스트레스 테스트 정기 시행', '시나리오 분석을 통한 극단 상황 대비'],
  },
  {
    title: '신용 리스크',
    desc: '거래 상대방의 채무 불이행 위험을 사전에 평가하고 관리합니다.',
    level: '상시적 관리',
    detail: '투자 대상의 신용등급, 재무건전성, 사업 안정성 등을 종합적으로 평가하여 신용 리스크를 사전에 차단합니다. 투자 후에도 지속적 모니터링을 통해 신용 변화에 대응합니다.',
    measures: ['신용등급 기반 투자한도 설정', '거래상대방 리스크 평가', '집중 리스크 관리 (Single Name, Sector)', '조기경보 시스템 운영'],
  },
  {
    title: '유동성 리스크',
    desc: '시장 유동성 부족 시 자산의 즉시 매각이 어려운 위험을 관리합니다.',
    level: '상시 모니터링',
    detail: '비유동성 자산의 비중 관리, 펀드 환매 대비 유동성 버퍼 유지, 유동성 스트레스 테스트 등을 통해 유동성 리스크를 선제적으로 관리합니다.',
    measures: ['유동성 비율 일별 모니터링', '비유동성 자산 투자한도 관리', '유동성 스트레스 테스트 시행', '비상 유동성 조달 계획 수립'],
  },
  {
    title: '운영 리스크',
    desc: '내부 프로세스, 시스템 장애, 인적 오류 등에 의한 손실 위험을 관리합니다.',
    level: '내부통제 강화',
    detail: '내부통제 체계와 업무연속성 계획(BCP)을 수립하여 운영 리스크 발생을 최소화합니다. 정기적인 자체 점검과 외부 감사를 통해 통제 환경의 적정성을 검증합니다.',
    measures: ['내부통제 체계 구축 및 운영', 'BCP(업무연속성계획) 수립', '정보보안 체계 강화', '임직원 윤리강령 및 교육 시행'],
  },
];

export default function RiskPage() {
  const [selectedRisk, setSelectedRisk] = useState<RiskItem | null>(null);

  return (
    <div className={styles.page}>
      <SubpageHero
        titleEn="RISK MANAGEMENT"
        titleKo="리스크관리"
        description="체계적인 리스크 관리 시스템을 통해 안전한 투자 환경을 제공합니다."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=90"
      />
      <SubNavigation items={ASSET_NAV} variant="cards" />

      {/* Dark: intro with image */}
      <section className={styles.darkSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className={styles.label}>RISK MANAGEMENT</span>
                <h2 className={styles.heading}>
                  메타자산운용은 선진화된<br />
                  리스크 관리 체계를 통해<br />
                  <span className={styles.lightText}>투자자의 자산을 보호합니다.</span>
                </h2>
              </div>
              <div className={styles.introImageWrap}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90"
                  alt="리스크관리"
                  width={600}
                  height={400}
                  className={styles.introImage}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Light: risk type cards — clickable */}
      <section className={styles.cardsSection}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.cardsSectionLabel}>RISK CATEGORIES</span>
            <h2 className={styles.cardsSectionTitle}>리스크 유형별 관리 체계</h2>
            <p className={styles.cardsSectionDesc}>각 카드를 클릭하시면 상세 관리 방안을 확인하실 수 있습니다.</p>
          </ScrollReveal>
          <div className={styles.cardsGrid}>
            {RISK_TYPES.map((risk, idx) => (
              <ScrollReveal key={risk.title} delay={idx * 100}>
                <div
                  className={styles.card}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedRisk(risk)}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedRisk(risk); }}
                >
                  <span className={styles.cardBadge}>{risk.level}</span>
                  <h3 className={styles.cardTitle}>{risk.title}</h3>
                  <p className={styles.cardDesc}>{risk.desc}</p>
                  <span className={styles.cardMore}>자세히 보기 →</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedRisk && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedRisk(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedRisk.title}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalBadge}>{selectedRisk.level}</span>
              <button
                className={styles.modalClose}
                onClick={() => setSelectedRisk(null)}
                type="button"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>
            <h2 className={styles.modalTitle}>{selectedRisk.title}</h2>
            <p className={styles.modalDesc}>{selectedRisk.detail}</p>

            <div className={styles.modalDivider} />

            <h3 className={styles.modalSubtitle}>주요 관리 방안</h3>
            <ul className={styles.modalList}>
              {selectedRisk.measures.map((m) => (
                <li key={m} className={styles.modalListItem}>
                  <span className={styles.modalCheck}>✓</span>
                  {m}
                </li>
              ))}
            </ul>

            <button
              className={styles.modalBtn}
              onClick={() => setSelectedRisk(null)}
              type="button"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
