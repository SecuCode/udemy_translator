'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SubNavigation.module.css';

interface SubNavItem {
  label: string;
  href: string;
}

interface SubNavigationProps {
  items: SubNavItem[];
  variant?: 'tabs' | 'cards' | 'minimal';
}

export default function SubNavigation({ items, variant = 'tabs' }: SubNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={`${styles.nav} ${styles[variant]}`} aria-label="하위 네비게이션">
      <div className={styles.inner}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.link} ${pathname === item.href ? styles.linkActive : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
