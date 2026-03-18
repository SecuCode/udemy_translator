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
        <h1 className={styles.title}>
          <span className={styles.titleLight}>메타자산운용은</span>
          <br />
          <span className={styles.titleBold}>금융과 부동산의 새로운 가치를</span> 개발합니다.
        </h1>
      </div>

      <div className={styles.scrollDown}>
        <span className={styles.scrollText}>scroll down</span>
      </div>
    </section>
  );
}
