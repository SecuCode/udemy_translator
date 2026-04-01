'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ExpandModal from '@/components/common/ExpandModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './AumCounter.module.css';

interface BusinessCard {
  title: string;
  titleEn: string;
  desc: string;
  image: string;
  stats: { label: string; value: string };
  href: string;
  accentColor: string;
  detail: string;
}

const BUSINESS_CARDS: BusinessCard[] = [
  {
    title: '부동산 펀드',
    titleEn: 'REAL ESTATE',
    desc: '프라임급 오피스, 물류센터, 리테일 등 우량 부동산 자산에 투자하여 안정적인 임대수익과 자본차익을 동시에 추구합니다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=90',
    stats: { label: '목표 투자 규모', value: '1,000억+' },
    href: '/business/intro',
    accentColor: '#c9a96e',
    detail: '메타자산운용의 부동산 펀드는 서울 핵심 권역의 프라임급 오피스 빌딩, 수도권 대형 물류센터, 핵심 상권 리테일 자산에 집중 투자합니다. 철저한 실사와 보수적 가치 평가를 통해 안정적인 임대수익과 중장기 자본차익을 동시에 추구합니다.',
  },
  {
    title: 'IPO 투자',
    titleEn: 'IPO INVESTMENT',
    desc: '철저한 기업 분석과 IPO 시장 전문 역량을 바탕으로, 성장 가능성이 높은 기업의 공모주에 전략적으로 투자합니다.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400&q=90',
    stats: { label: '목표 수익률', value: '15%+' },
    href: '/business/ipo',
    accentColor: '#2563eb',
    detail: '자체 IPO 스코어링 모델을 활용하여 기업의 재무건전성, 성장성, 산업 트렌드를 종합 분석합니다. 엄격한 투자 기준에 부합하는 기업에만 선별 투자하여 연환산 목표 수익률 15%+ 달성을 추구합니다.',
  },
  {
    title: '대체 투자',
    titleEn: 'ALTERNATIVE',
    desc: '인프라, 메자닌, 구조화 금융 등 전통적 투자 자산을 넘어서 다각화된 대체투자 전략으로 포트폴리오 안정성을 높입니다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90',
    stats: { label: '운용 펀드', value: '5개' },
    href: '/business/equity',
    accentColor: '#059669',
    detail: '전통적인 주식·채권 투자를 넘어 인프라 자산, 메자닌 파이낸싱, PFV/SPC 구조화 금융 등 다양한 대체투자 기회를 발굴합니다. 시장 변동성과 낮은 상관관계를 가진 자산군에 분산 투자하여 포트폴리오 전체의 위험 대비 수익 효율을 극대화합니다.',
  },
];

export default function AumCounter() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedCard, setSelectedCard] = useState<BusinessCard | null>(null);

  return (
    <section className={`${styles.section} homepageSection`} aria-label="사업 소개">
      <div className={styles.inner} ref={ref}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>BUSINESS</span>
          <h2 className={styles.sectionTitle}>사업 영역</h2>
          <p className={styles.sectionDesc}>
            메타자산운용은 부동산, IPO, 대체투자 등 다양한 영역에서<br />
            전문적인 투자 역량을 바탕으로 고객의 자산 가치를 극대화합니다.
          </p>
        </div>

        <div className={`${styles.cardGrid} ${isVisible ? styles.visible : ''}`}>
          {BUSINESS_CARDS.map((card, idx) => (
            <div
              key={card.titleEn}
              className={styles.card}
              style={{ animationDelay: `${idx * 0.15}s` }}
              onClick={() => setSelectedCard(card)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCard(card); }}
            >
              <div className={styles.cardImageWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={styles.cardImage}
                />
                <div className={styles.cardImageOverlay} />
                <span className={styles.cardTitleEn}>{card.titleEn}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.cardStat}>
                    <span className={styles.cardStatLabel}>{card.stats.label}</span>
                    <span className={styles.cardStatValue} style={{ color: card.accentColor }}>{card.stats.value}</span>
                  </div>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ExpandModal
        isOpen={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        title={selectedCard?.title ?? ''}
        titleEn={selectedCard?.titleEn}
        accentColor={selectedCard?.accentColor}
      >
        <p style={{ marginBottom: '1rem' }}>{selectedCard?.detail}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderTop: '1px solid #eee', marginTop: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#aaa' }}>{selectedCard?.stats.label}</span>
            <br />
            <span style={{ fontSize: '1.3rem', fontWeight: 700, color: selectedCard?.accentColor }}>{selectedCard?.stats.value}</span>
          </div>
          <Link
            href={selectedCard?.href ?? '#'}
            style={{ color: selectedCard?.accentColor, fontWeight: 600, fontSize: '0.9rem' }}
            onClick={() => setSelectedCard(null)}
          >
            자세히 보기 →
          </Link>
        </div>
      </ExpandModal>
    </section>
  );
}
