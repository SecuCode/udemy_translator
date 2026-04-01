'use client';

import { useEffect, useCallback } from 'react';
import styles from './ExpandModal.module.css';

interface ExpandModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  titleEn?: string;
  children: React.ReactNode;
  accentColor?: string;
}

export default function ExpandModal({
  isOpen,
  onClose,
  title,
  titleEn,
  children,
  accentColor = '#c9a96e',
}: ExpandModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal={isOpen}
      aria-label={title}
    >
      <div
        className={`${styles.modal} ${isOpen ? styles.modalOpen : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.accentBar} style={{ background: accentColor }} />
        <button className={styles.closeBtn} onClick={onClose} aria-label="닫기" type="button">
          <span className={styles.closeLine} />
          <span className={styles.closeLine} />
        </button>

        <div className={styles.header}>
          {titleEn && <span className={styles.titleEn}>{titleEn}</span>}
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
