import Image from 'next/image';
import styles from './SubpageHero.module.css';

interface SubpageHeroProps {
  titleEn: string;
  titleKo: string;
  description?: string;
  backgroundImage: string;
}

export default function SubpageHero({ titleEn, titleKo, description, backgroundImage }: SubpageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src={backgroundImage}
          alt={titleKo}
          fill
          priority
          className={styles.backgroundImage}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.titleKo}>{titleKo}</span>
        <h1 className={styles.titleEn}>{titleEn}</h1>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </section>
  );
}
