'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoMark from '@/components/ui/LogoMark';
import ExpandModal from '@/components/common/ExpandModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={`${styles.section} homepageSection`} aria-label="회사 소개">
      <div className={styles.inner}>
        {/* Left side: large heading + company intro text */}
        <div className={`${styles.left} ${vis1 ? styles.visible : ''}`} ref={ref1}>
          <h2 className={styles.heading}>
            <span className={styles.headingBold}>The highest &amp; best</span>
            <br />
            <span className={styles.headingLight}>asset manager in korea</span>
          </h2>

          <div
            className={styles.introBlock}
            onClick={() => setModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') setModalOpen(true); }}
          >
            <div className={styles.introImage}>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=90"
                alt="META ASSET MANAGEMENT"
                width={320}
                height={220}
                className={styles.introImg}
              />
            </div>
            <div className={styles.introText}>
              <h3 className={styles.introTitle}>회사소개</h3>
              <p className={styles.introDesc}>
                함께 성장하고 서로 신뢰하는 기업 문화를 꿈꾸는 메타자산운용
              </p>
              <span className={styles.viewMore}>view more →</span>
            </div>
          </div>
        </div>

        {/* Right side: large logo + description */}
        <div className={`${styles.right} ${styles.visible}`}>
          <span className={styles.rightLabel}>▎ META ASSET MANAGEMENT</span>
          <div className={styles.rightLogoArea}>
            <LogoMark size="clamp(140px, 20vw, 300px)" className={styles.rightLogo} color="var(--color-text-dark)" />
          </div>
          <p className={styles.rightDesc}>
            투자자의 신뢰에 성과로 보답하는 것,
            <br />
            메타자산운용의 존재 이유입니다.
          </p>
        </div>
      </div>

      <ExpandModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="메타자산운용 회사소개"
        titleEn="ABOUT US"
      >
        <p>
          메타자산운용(주)는 부동산, IPO, 대체투자 등 다양한 분야에서 전문적인 자산운용 서비스를 제공합니다.
        </p>
        <br />
        <p>
          함께 성장하고 서로 신뢰하는 행복한 기업 문화를 꿈꾸며, 투자자의 안정적인 수익실현을 최우선 가치로 삼고 있습니다.
        </p>
        <br />
        <p>
          풍부한 운용경험과 다각화된 네트워크를 바탕으로 금융과 부동산의 새로운 가치를 창출하며, 고객에게 최고의 성과를 보답하는 것이 메타자산운용의 존재 이유이자 이념입니다.
        </p>
        <br />
        <Link href="/about/overview" style={{ color: '#c9a96e', fontWeight: 600 }}>
          더 자세히 보기 →
        </Link>
      </ExpandModal>
    </section>
  );
}
