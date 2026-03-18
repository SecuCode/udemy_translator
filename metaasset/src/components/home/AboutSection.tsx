'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();

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

          <div className={styles.introBlock}>
            <div className={styles.introImage}>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=90"
                alt="META ASSET MANAGEMENT"
                width={320}
                height={200}
                className={styles.introImg}
              />
            </div>
            <div className={styles.introText}>
              <h3 className={styles.introTitle}>회사소개</h3>
              <p className={styles.introDesc}>
                함께 성장하고 서로 신뢰하는 행복한 기업 문화를 꿈꾸는 메타자산운용(주)
              </p>
              <Link href="/about/overview" className={styles.viewMore}>view more →</Link>
            </div>
          </div>
        </div>

        {/* Right side: large logo + description */}
        <div className={`${styles.right} ${styles.visible}`}>
          <span className={styles.rightLabel}>▎ META ASSET MANAGEMENT</span>
          <div className={styles.rightLogoArea}>
            <Logo width={375} height={316} className={styles.rightLogo} />
          </div>
          <p className={styles.rightDesc}>
            풍부한 경험을 통하여 미래 고객에게
            <br />
            최고의 성과를 보답하는 것,
            <br />
            메타자산운용의 존재 이유이자 이념입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
