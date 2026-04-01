'use client';

import { useState } from 'react';
import Image from 'next/image';
import ExpandModal from '@/components/common/ExpandModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './InvestmentPhilosophy.module.css';

interface PillarItem {
  icon: string;
  title: string;
  titleEn: string;
  desc: string;
  detail: string;
}

const PILLARS: PillarItem[] = [
  {
    icon: '◆',
    title: 'Investor First',
    titleEn: '투자자 이익 최우선',
    desc: '투자자 이익을 최우선으로 합니다',
    detail: '모든 투자 의사결정에서 투자자의 이익을 최우선에 둡니다. 단기 수수료 수익보다 장기적인 투자 성과를 추구하며, 투자자와 운용사의 이해관계가 일치하는 구조를 설계합니다. 투자자의 자산을 내 자산처럼 소중히 다루는 것이 META의 첫 번째 원칙입니다.',
  },
  {
    icon: '◆',
    title: 'Principled',
    titleEn: '원칙 기반 의사결정',
    desc: '원칙에 기반한 의사결정을 합니다',
    detail: '시장의 단기 흐름에 흔들리지 않고, 철저한 분석과 확립된 투자 원칙에 따라 의사결정합니다. 감정이 아닌 데이터에 기반하며, 투자위원회의 체계적 심의 과정을 통해 모든 투자를 결정합니다. 원칙을 지키는 투자가 궁극적으로 가장 높은 수익을 가져다준다고 믿습니다.',
  },
  {
    icon: '◆',
    title: 'Evolution',
    titleEn: '끊임없는 발전',
    desc: '끊임없이 발전합니다',
    detail: '금융 시장은 끊임없이 변화합니다. META는 새로운 투자 기법과 리서치 방법론을 지속적으로 연구하고, 시장 변화에 선제적으로 대응합니다. 구성원 모두가 전문성을 키워가며, 조직 전체가 함께 성장하는 문화를 만들어갑니다.',
  },
  {
    icon: '◆',
    title: 'Transparency',
    titleEn: '투명한 운용',
    desc: '투명하게 운용합니다',
    detail: '운용 과정과 결과를 투명하게 공개합니다. 정기적인 운용 보고서, 투자자 설명회, 실시간 포트폴리오 현황 조회를 통해 투자자와의 신뢰를 구축합니다. 숨기지 않고, 좋은 결과든 나쁜 결과든 정직하게 소통하는 것이 META의 약속입니다.',
  },
];

export default function InvestmentPhilosophy() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [selectedPillar, setSelectedPillar] = useState<PillarItem | null>(null);

  return (
    <section className={`${styles.section} homepageSection`} aria-label="투자 철학">
      <div className={styles.bgImage}>
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=2400&q=85"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImageInner}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner} ref={ref}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>CORE VALUES</span>

          <blockquote className={styles.quote}>
            <span className={styles.quoteLine}>
              <span className={styles.quoteWord} style={{ animationDelay: '0.2s' }}>고객의</span>{' '}
              <span className={styles.quoteWord} style={{ animationDelay: '0.35s' }}>자산을</span>{' '}
              <span className={styles.quoteWord} style={{ animationDelay: '0.5s' }}>내</span>{' '}
              <span className={styles.quoteWord} style={{ animationDelay: '0.65s' }}>자산처럼,</span>
            </span>
            <span className={styles.quoteLine}>
              <span className={styles.quoteWord} style={{ animationDelay: '0.9s' }}>원칙을</span>{' '}
              <span className={styles.quoteWord} style={{ animationDelay: '1.05s' }}>지키는</span>{' '}
              <span className={styles.quoteWord} style={{ animationDelay: '1.2s' }}>투자</span>
            </span>
          </blockquote>

          <div className={styles.divider} />

          <p className={styles.desc}>
            META는 네 가지 핵심 가치를 바탕으로
            <br />
            투자자에게 신뢰받는 자산운용사를 지향합니다.
          </p>

          <div className={styles.pillars}>
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className={styles.pillar}
                onClick={() => setSelectedPillar(pillar)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPillar(pillar); }}
              >
                <span className={styles.pillarIcon}>{pillar.icon}</span>
                <span className={styles.pillarTitle}>{pillar.title}</span>
                <span className={styles.pillarDesc}>{pillar.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExpandModal
        isOpen={selectedPillar !== null}
        onClose={() => setSelectedPillar(null)}
        title={selectedPillar?.title ?? ''}
        titleEn={selectedPillar?.titleEn}
      >
        <p>{selectedPillar?.detail}</p>
      </ExpandModal>
    </section>
  );
}
