'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface SectionConfig {
  id: string;
  theme: 'dark' | 'light';
}

interface UseActiveSectionReturn {
  activeIndex: number;
  activeTheme: 'dark' | 'light';
  registerSection: (index: number, config: SectionConfig) => void;
}

export function useActiveSection(): UseActiveSectionReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');
  const sectionsRef = useRef<Map<number, SectionConfig>>(new Map());
  const observersRef = useRef<IntersectionObserver[]>([]);

  const registerSection = useCallback((index: number, config: SectionConfig) => {
    sectionsRef.current.set(index, config);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const idx = Number(entry.target.getAttribute('data-section-index'));
          if (!isNaN(idx)) {
            setActiveIndex(idx);
            const config = sectionsRef.current.get(idx);
            if (config) {
              setActiveTheme(config.theme);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '0px',
    });

    observersRef.current.push(observer);

    // Observe all sections after mount
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-section-index]');
      sections.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return { activeIndex, activeTheme, registerSection };
}
