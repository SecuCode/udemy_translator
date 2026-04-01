'use client';

import { useState } from 'react';
import Image from 'next/image';
import ExpandModal from '@/components/common/ExpandModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ParallaxShowcase.module.css';

interface PortfolioItem {
  title: string;
  titleEn: string;
  desc: string;
  image: string;
  detail: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: '프라임 오피스',
    titleEn: 'PRIME OFFICE',
    desc: '서울 핵심 권역 프라임급 오피스 빌딩 투자',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
    detail: '서울 여의도, 강남, 종로 등 핵심 업무 지구에 위치한 프라임급 오피스 빌딩에 투자합니다. Grade-A 이상의 건물을 대상으로 철저한 입지 분석, 임차인 신용도 평가, 장기 임대차 구조를 통해 안정적인 현금흐름을 확보합니다. 매입 후 자산의 가치를 지속적으로 향상시키는 밸류애드 전략을 병행합니다.',
  },
  {
    title: '물류 인프라',
    titleEn: 'LOGISTICS',
    desc: '수도권 핵심 물류센터 개발 및 운용',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85',
    detail: '이커머스 성장에 따른 물류 수요 증가에 대응하여, 수도권 주요 교통 거점에 위치한 최신식 물류센터에 투자합니다. 냉장·냉동 물류, 풀필먼트 센터 등 다양한 유형의 물류 인프라를 개발하고, 우량 임차인과의 장기 계약을 통해 안정적 수익을 창출합니다.',
  },
  {
    title: '도시개발',
    titleEn: 'URBAN DEV',
    desc: '대규모 도시개발 프로젝트 파이낸싱',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85',
    detail: '수도권 및 주요 거점 도시의 복합 개발 프로젝트에 참여합니다. 주거, 상업, 업무 시설이 결합된 복합 단지 개발을 위한 프로젝트 파이낸싱(PF)을 주선하고, PFV/SPC 구조를 활용하여 투자자에게 최적의 위험-수익 구조를 제공합니다.',
  },
];

export default function ParallaxShowcase() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section className={`${styles.section} homepageSection`} aria-label="포트폴리오 쇼케이스">
      <div className={styles.inner} ref={ref}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>PORTFOLIO</span>
          <h2 className={styles.sectionTitle}>투자 포트폴리오</h2>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div
              key={item.titleEn}
              className={styles.card}
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedItem(item); }}
            >
              <div className={styles.cardImageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.cardImage}
                />
                <div className={styles.cardImageOverlay} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>0{idx + 1}</span>
                <span className={styles.cardTitleEn}>{item.titleEn}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
              <div className={styles.cardHoverLine} />
            </div>
          ))}
        </div>
      </div>

      <ExpandModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title ?? ''}
        titleEn={selectedItem?.titleEn}
      >
        <p>{selectedItem?.detail}</p>
      </ExpandModal>
    </section>
  );
}
