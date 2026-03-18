import Link from 'next/link';
import { COMPANY, MENU_ITEMS } from '@/lib/constants';
import styles from './Footer.module.css';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerLogo}>
              <Logo width={18} height={15} className={styles.footerLogoImg} />
              <span>ETA <span className={styles.footerLogoAccent}>ASSET MANAGEMENT</span></span>
            </div>
            <div className={styles.companyDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>주소</span>
                {COMPANY.address}
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>TEL</span>
                {COMPANY.tel}
                <span className={styles.detailLabel} style={{ marginLeft: '1rem' }}>FAX</span>
                {COMPANY.fax}
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>이메일</span>
                {COMPANY.email}
              </div>
            </div>
          </div>

          <nav className={styles.footerNav} aria-label="푸터 메뉴">
            {MENU_ITEMS.slice(0, 4).map((group) => (
              <div key={group.href} className={styles.footerNavGroup}>
                <div className={styles.footerNavTitle}>{group.labelEn}</div>
                {group.children?.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.footerNavLink}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <div>
            <div className={styles.copyright}>{COMPANY.copyright}</div>
            <div className={styles.disclaimer}>
              본 사이트에 게재된 투자 정보는 투자 권유를 목적으로 하지 않으며,
              투자에 따른 손실은 투자자 본인에게 귀속됩니다.
            </div>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>개인정보처리방침</Link>
            <Link href="/terms" className={styles.legalLink}>이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
