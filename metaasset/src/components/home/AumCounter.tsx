'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './AumCounter.module.css';

const BUSINESS_CARDS = [
  {
    title: '부동산 펀드',
    titleEn: 'REAL ESTATE',
    desc: '프라임급 오피스, 물류센터, 리테일 등 우량 부동산 자산에 투자하여 안정적인 임대수익과 자본차익을 동시에 추구합니다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=90',
    stats: { label: '누적 투자 규모', value: '3,200억' },
    href: '/business/intro',
    accentColor: '#c9a96e',
  },
  {
    title: 'IPO 투자',
    titleEn: 'IPO INVESTMENT',
    desc: '철저한 기업 분석과 IPO 시장 전문 역량을 바탕으로, 성장 가능성이 높은 기업의 공모주에 전략적으로 투자합니다.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400&q=90',
    stats: { label: '평균 수익률', value: '18.3%' },
    href: '/business/ipo',
    accentColor: '#2563eb',
  },
  {
    title: '대체 투자',
    titleEn: 'ALTERNATIVE',
    desc: '인프라, 메자닌, 구조화 금융 등 전통적 투자 자산을 넘어서 다각화된 대체투자 전략으로 포트폴리오 안정성을 높입니다.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=90',
    stats: { label: '운용 펀드', value: '5개' },
    href: '/business/equity',
    accentColor: '#059669',
  },
];

export default function AumCounter() {
  const { ref, isVisible } = useScrollReveal();

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
            <Link href={card.href} key={card.titleEn} className={styles.card} style={{ animationDelay: `${idx * 0.15}s` }}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
