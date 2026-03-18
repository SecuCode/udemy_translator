'use client';

import { useEffect, useCallback } from 'react';
import styles from './FundDetailModal.module.css';

interface FundData {
  id: number;
  name: string;
  category: string;
  categoryColor: string;
  status: string;
  aum: string;
  inception: string;
  targetReturn: string;
  investmentArea: string;
  description: string;
}

interface FundDetailModalProps {
  fund: FundData | null;
  onClose: () => void;
}

export default function FundDetailModal({ fund, onClose }: FundDetailModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (fund) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [fund, handleKeyDown]);

  if (!fund) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={fund.name}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <span
              className={styles.categoryBadge}
              style={{ backgroundColor: fund.categoryColor }}
            >
              {fund.category}
            </span>
            <span className={`${styles.statusBadge} ${
              fund.status === '모집중' ? styles.statusRecruiting : ''
            }`}>
              {fund.status}
            </span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} type="button" aria-label="닫기">
            ✕
          </button>
        </div>

        {/* Title */}
        <h2 className={styles.fundName}>{fund.name}</h2>
        <p className={styles.fundDesc}>{fund.description}</p>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Details Grid */}
        <div className={styles.detailGrid}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>운용규모</span>
            <span className={styles.detailValue}>{fund.aum}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>설정일</span>
            <span className={styles.detailValue}>{fund.inception}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>목표수익률</span>
            <span className={styles.detailValue}>{fund.targetReturn}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>투자영역</span>
            <span className={styles.detailValue}>{fund.investmentArea}</span>
          </div>
        </div>

        {/* Chart-like visual */}
        <div className={styles.chartSection}>
          <h3 className={styles.chartTitle}>투자 구조</h3>
          <div className={styles.barChart}>
            <div className={styles.barItem}>
              <div className={styles.barLabel}>선순위 대출</div>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '60%', backgroundColor: '#2563eb' }} /></div>
              <span className={styles.barPercent}>60%</span>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barLabel}>메자닌</div>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '25%', backgroundColor: fund.categoryColor }} /></div>
              <span className={styles.barPercent}>25%</span>
            </div>
            <div className={styles.barItem}>
              <div className={styles.barLabel}>에쿼티</div>
              <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '15%', backgroundColor: '#059669' }} /></div>
              <span className={styles.barPercent}>15%</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <p className={styles.disclaimer}>
            ※ 본 자료는 데모 시안입니다. 실제 투자 시 투자설명서를 반드시 확인하시기 바랍니다.
          </p>
          <button className={styles.contactBtn} onClick={onClose} type="button">
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
}
