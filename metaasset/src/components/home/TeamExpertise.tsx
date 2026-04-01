'use client';

import { useState } from 'react';
import ExpandModal from '@/components/common/ExpandModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './TeamExpertise.module.css';

interface ExpertiseItem {
  title: string;
  titleEn: string;
  percentage: number;
  desc: string;
  detail: string;
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    title: '부동산 금융',
    titleEn: 'REAL ESTATE FINANCE',
    percentage: 95,
    desc: '오피스·물류·리테일 등 프라임급 부동산 자산 투자',
    detail: '20년 이상의 부동산 투자 경험을 보유한 전문 인력이 서울 핵심 권역 프라임급 오피스, 수도권 물류센터, 핵심 상권 리테일 등 다양한 부동산 섹터에 대한 깊은 이해를 바탕으로 최적의 투자 의사결정을 수행합니다. 매입-운영-매각 전 과정을 아우르는 종합 운용 역량을 갖추고 있습니다.',
  },
  {
    title: 'IPO / 공모주',
    titleEn: 'IPO MARKET',
    percentage: 88,
    desc: '기업공개 시장 분석 및 전략적 포트폴리오 구성',
    detail: '자체 개발 IPO 스코어링 모델과 빅데이터 기반 시장 분석 시스템을 통해 연간 200건 이상의 IPO 후보를 심층 리서치합니다. 기업의 재무건전성, 성장 잠재력, 산업 트렌드를 종합 평가하여 높은 확률의 성공적 투자를 추구합니다.',
  },
  {
    title: '리스크 관리',
    titleEn: 'RISK MANAGEMENT',
    percentage: 92,
    desc: '체계적 리스크 관리 시스템을 통한 안정적 수익 추구',
    detail: '시장위험, 신용위험, 유동성위험, 운영위험 등 4대 리스크 카테고리에 대한 실시간 모니터링 체계를 운영합니다. 스트레스 테스트, VaR 분석, 시나리오 분석 등 선진 기법을 활용하여 투자 포트폴리오의 위험을 체계적으로 관리합니다.',
  },
  {
    title: '구조화 금융',
    titleEn: 'STRUCTURED FINANCE',
    percentage: 85,
    desc: '메자닌, PFV, SPC 등 복합 금융 구조 설계 및 운용',
    detail: '복합 금융 구조를 활용한 맞춤형 투자 솔루션을 설계합니다. 메자닌 파이낸싱, PFV(프로젝트금융투자회사), SPC(특수목적회사) 등 다양한 구조화 수단을 동원하여 투자자의 위험 선호도에 맞는 최적의 위험-수익 프로파일을 구성합니다.',
  },
];

export default function TeamExpertise() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [selectedItem, setSelectedItem] = useState<ExpertiseItem | null>(null);

  return (
    <section className={`${styles.section} homepageSection`} aria-label="전문 역량">
      <div className={styles.inner} ref={ref}>
        <div className={styles.layout}>
          {/* Left side - heading */}
          <div className={`${styles.leftSide} ${isVisible ? styles.visible : ''}`}>
            <span className={styles.sectionLabel}>EXPERTISE</span>
            <h2 className={styles.sectionTitle}>
              추구하는
              <br />
              투자 역량
            </h2>
            <p className={styles.sectionDesc}>
              전문 인력의 경험과
              <br />
              체계적인 운용 프로세스로
              <br />
              최적의 투자 성과를 추구합니다.
            </p>
            <div className={styles.decorLine} />
          </div>

          {/* Right side - expertise bars */}
          <div className={`${styles.rightSide} ${isVisible ? styles.visible : ''}`}>
            {EXPERTISE_ITEMS.map((item, idx) => (
              <div
                key={item.titleEn}
                className={styles.expertiseItem}
                style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(item); }}
              >
                <div className={styles.expertiseHeader}>
                  <div>
                    <span className={styles.expertiseTitle}>{item.title}</span>
                    <span className={styles.expertiseTitleEn}>{item.titleEn}</span>
                  </div>
                  <span className={styles.expertisePercent}>{item.percentage}%</span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: isVisible ? `${item.percentage}%` : '0%',
                      transitionDelay: `${0.5 + idx * 0.2}s`,
                    }}
                  />
                </div>
                <p className={styles.expertiseDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExpandModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title ?? ''}
        titleEn={selectedItem?.titleEn}
      >
        <p>{selectedItem?.detail}</p>
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f9f9f9', borderRadius: '6px' }}>
          <span style={{ fontSize: '0.75rem', color: '#999' }}>전문성 수준</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div style={{ flex: 1, height: '4px', background: '#eee', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${selectedItem?.percentage ?? 0}%`, height: '100%', background: '#c9a96e', borderRadius: '2px', transition: 'width 0.8s ease' }} />
            </div>
            <span style={{ fontWeight: 700, color: '#c9a96e', fontSize: '1.1rem' }}>{selectedItem?.percentage}%</span>
          </div>
        </div>
      </ExpandModal>
    </section>
  );
}
