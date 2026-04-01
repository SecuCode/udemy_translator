'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CORE_COMPETENCIES } from '@/lib/constants';
import styles from './CoreCompetency.module.css';

export default function CoreCompetency() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className={`${styles.section} homepageSection`} aria-label="운용자산">
      {/* Left: artwork/decorative image */}
      <div className={styles.artSide}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=90"
          alt=""
          fill
          className={styles.artImage}
          sizes="50vw"
        />
        <div className={styles.artOverlay} />
        <div className={styles.artText}>
          <span className={styles.artTextVertical}>
            Assets under management
          </span>
        </div>
      </div>

      {/* Right: AUM info + stats */}
      <div className={styles.infoSide} ref={ref}>
        <div className={`${styles.infoContent} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.infoTop}>
            <span className={styles.infoLabel}>운용자산</span>
            <h2 className={styles.infoTitle}>
              전문성과 신뢰를 바탕으로
              <br />
              새로운 투자 가치를 창출합니다
            </h2>
            <p className={styles.infoDesc}>
              풍부한 부동산, 주식, 채권의 운용경험과
              <br />
              다각화된 네트워크로 안정적인 운용수익과
              <br />
              초과수익을 창출하여 고객과의 신뢰를 쌓아갑니다.
            </p>
            <Link href="/assets/performance" className={styles.viewMore}>
              view more →
            </Link>
          </div>
        </div>

        <div className={styles.aumPanel}>
          <div className={styles.aumHeading}>
            <span className={styles.aumTitle}>Assets Under</span>
            <span className={styles.aumTitleLight}>Management</span>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statDot}>●</span>
              <span className={styles.statLabel}>목표 운용자산</span>
              <div className={styles.statValue}>
                <span className={styles.statNumber}>3,000</span>
                <span className={styles.statUnit}>억원</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statDot}>●</span>
              <span className={styles.statLabel}>목표 운용 펀드</span>
              <div className={styles.statValue}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statUnit}>개</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
