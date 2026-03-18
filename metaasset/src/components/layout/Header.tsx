'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_ITEMS } from '@/lib/constants';
import styles from './Header.module.css';
import FullscreenMenu from './FullscreenMenu';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.homepageContainer');
      const scrollTop = container ? container.scrollTop : window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const container = document.querySelector('.homepageContainer');
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const toggleMenu = useCallback(() => setIsMenuOpen((p) => !p), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const activeCategory = MENU_ITEMS.find((item) =>
    pathname.startsWith(item.href)
  );

  const handleMouseEnter = useCallback((href: string) => {
    setActiveDropdown(href);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${!isHome ? styles.subpage : ''}`}
        role="banner"
      >
        {/* Row 1: MENU (left) + LOGO (center) */}
        <div className={styles.row1}>
          <button
            className={styles.menuBtn}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
          >
            <div className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}>
              <span /><span /><span />
            </div>
            <span className={styles.menuLabel}>
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </button>

          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Logo width={18} height={15} className={styles.logoSvg} />
            <span className={styles.logoText}>ETA ASSET MANAGEMENT</span>
          </Link>

          <div className={styles.row1Right} />
        </div>

        {/* Row 2: Category Navigation with Dropdown */}
        <nav className={styles.navRow} aria-label="메인 카테고리">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.href}
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(item.href)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.children?.[0]?.href ?? item.href}
                className={`${styles.navLink} ${
                  activeCategory?.href === item.href ? styles.navLinkActive : ''
                }`}
              >
                {item.label}
              </Link>

              {/* Dropdown submenu */}
              {item.children && item.children.length > 0 && (
                <div
                  className={`${styles.dropdown} ${
                    activeDropdown === item.href ? styles.dropdownOpen : ''
                  }`}
                >
                  <div className={styles.dropdownInner}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${styles.dropdownLink} ${
                          pathname === child.href ? styles.dropdownLinkActive : ''
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
