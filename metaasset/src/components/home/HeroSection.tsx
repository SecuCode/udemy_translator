import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.hero} homepageSection`} aria-label="히어로 섹션">
      <div className={styles.bgImage}>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=90"
          alt="메타자산운용"
          fill
          priority
          quality={95}
          className={styles.bgImageInner}
          sizes="100vw"
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.subLabel}>META ASSET MANAGEMENT</span>
        <h1 className={styles.title}>
          <span className={styles.titleLight}>The Highest &amp; Best</span>
          <br />
          <span className={styles.titleBold}>Meta Asset Management</span>
        </h1>
        <p className={styles.subtitle}>
          다각화된 네트워크와 풍부한 운용경험을 바탕으로
          <br />
          금융과 부동산의 새로운 가치를 창출합니다.
        </p>
      </div>

      <div className={styles.scrollDown}>
        <span className={styles.scrollText}>scroll down</span>
      </div>
    </section>
  );
}
