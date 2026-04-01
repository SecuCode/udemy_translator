'use client';

import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounter } from '@/hooks/useCounter';
import ExpandModal from '@/components/common/ExpandModal';
import styles from './KeyFigures.module.css';

interface FigureData {
  label: string;
  labelEn: string;
  value: number;
  unit: string;
  prefix: string;
  detail: string;
}

interface CounterCardProps extends FigureData {
  isVisible: boolean;
  delay: number;
  onHover: () => void;
}

function CounterCard({ label, labelEn, value, unit, prefix, isVisible, delay, onHover }: CounterCardProps) {
  const { count, startCounting } = useCounter({ end: value, duration: 2000 });

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(startCounting, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, startCounting, delay]);

  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${delay}s` }}
      onClick={onHover}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onHover(); }}
    >
      <span className={styles.cardLabelEn}>{labelEn}</span>
      <div className={styles.cardValue}>
        <span className={styles.cardPrefix}>{prefix}</span>
        <span className={styles.cardNumber}>{unit.includes('년') ? count : count.toLocaleString()}</span>
        <span className={styles.cardUnit}>{unit}</span>
      </div>
      <span className={styles.cardLabel}>{label}</span>
      <div className={styles.cardLine} />
    </div>
  );
}

const FIGURES: FigureData[] = [
  {
    label: 'AUM 목표',
    labelEn: 'TARGET AUM',
    value: 3000,
    unit: '억원',
    prefix: '',
    detail: '메타자산운용은 2028년까지 운용자산 규모(AUM) 3,000억 원 달성을 목표로 합니다. 2027년 1,000억 돌파를 1차 마일스톤으로, 부동산·IPO·메자닌·채권 4개 핵심 전략과 PEF·실물자산 등 신규 영역 확장을 통해 단계적으로 성장해 나갑니다.',
  },
  {
    label: '목표 펀드',
    labelEn: 'TARGET FUNDS',
    value: 15,
    unit: '개+',
    prefix: '',
    detail: '기존 핵심 전략인 IPO 공모주, 코스닥벤처, 메자닌, 채권 펀드를 기반으로 PEF, 부동산·실물자산 등 15개 이상의 신규 펀드 출시를 목표합니다. 각 펀드는 투자자의 위험 선호도와 시장 환경에 맞춘 맞춤형 전략으로 운용됩니다.',
  },
  {
    label: '목표 수익률',
    labelEn: 'TARGET RETURNS',
    value: 15,
    unit: '%+',
    prefix: '',
    detail: 'IPO 공모주 전략 연환산 목표 수익률 15%+, 메자닌 전략 8%+, KOSPI 대비 알파 3%p+ 확보를 추구합니다. 보수적이지만 실현 가능한 목표를 설정하고, 체계적인 리서치와 리스크 관리를 통해 달성해 나갑니다.',
  },
  {
    label: '설립년도',
    labelEn: 'SINCE',
    value: 2019,
    unit: '년',
    prefix: '',
    detail: '2019년 전문사모집합투자업으로 등록한 이래, IPO 공모주·코스닥벤처·메자닌·채권 분야에서 전문성을 축적해 왔습니다. META라는 새로운 이름 아래 종합 자산운용사로 도약합니다.',
  },
];

export default function KeyFigures() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [selectedFigure, setSelectedFigure] = useState<FigureData | null>(null);

  return (
    <section className={`${styles.section} homepageSection`} aria-label="핵심 수치">
      <div className={styles.bgPattern} />
      <div className={styles.inner} ref={ref}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.sectionLabel}>KEY FIGURES</span>
          <h2 className={styles.sectionTitle}>
            META가 추구하는 목표
          </h2>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {FIGURES.map((fig, idx) => (
            <CounterCard
              key={fig.labelEn}
              {...fig}
              isVisible={isVisible}
              delay={0.3 + idx * 0.15}
              onHover={() => setSelectedFigure(fig)}
            />
          ))}
        </div>
      </div>

      <ExpandModal
        isOpen={selectedFigure !== null}
        onClose={() => setSelectedFigure(null)}
        title={selectedFigure?.label ?? ''}
        titleEn={selectedFigure?.labelEn}
      >
        <p>{selectedFigure?.detail}</p>
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(201, 169, 110, 0.08)', borderRadius: '6px', borderLeft: '3px solid #c9a96e' }}>
          <span style={{ fontSize: '0.75rem', color: '#999', letterSpacing: '0.05em' }}>{selectedFigure?.labelEn}</span>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#c9a96e', marginTop: '0.25rem' }}>
            {selectedFigure?.prefix}{selectedFigure?.value.toLocaleString()}{selectedFigure?.unit}
          </div>
        </div>
      </ExpandModal>
    </section>
  );
}
