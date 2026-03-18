'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_ITEMS, COMPANY } from '@/lib/constants';
import styles from './FullscreenMenu.module.css';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
      role="navigation"
      aria-label="메인 메뉴"
      aria-hidden={!isOpen}
    >
      {/* Close button */}
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="메뉴 닫기"
        type="button"
      >
        <span className={styles.closeLine} />
        <span className={styles.closeLine} />
      </button>

      {/* Left: menu items */}
      <div className={styles.menuLeft}>
        <div className={styles.menuContainer}>
          {MENU_ITEMS.map((group) => {
            const isGroupActive = pathname.startsWith(group.href);
            return (
              <div key={group.href} className={styles.menuGroup}>
                <div className={`${styles.menuGroupTitle} ${isGroupActive ? styles.menuGroupTitleActive : ''}`}>
                  <span className={styles.menuGroupTitleKo}>{group.label}</span>
                  <span className={styles.menuGroupTitleEn}>{group.labelEn}</span>
                </div>
                <div className={styles.menuChildren}>
                  {group.children?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.menuChild} ${pathname === item.href ? styles.menuChildActive : ''}`}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: company info */}
      <div className={styles.menuRight}>
        <div className={styles.rightContent}>
          <div className={styles.rightLogo}>META ASSET<br />MANAGEMENT</div>
          <div className={styles.rightTagline}>
            The highest &amp; best<br />
            asset manager in korea
          </div>
          <div className={styles.rightContact}>
            <p>{COMPANY.address}</p>
            <p>TEL {COMPANY.tel}</p>
            <p>FAX {COMPANY.fax}</p>
            <p>EMAIL {COMPANY.email}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
