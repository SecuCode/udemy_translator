'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
}

export function useCounter({ end, duration = 2000, start = 0, delay = 0 }: UseCounterOptions) {
  const [count, setCount] = useState(start);
  const [isStarted, setIsStarted] = useState(false);
  const frameRef = useRef<number | null>(null);

  const startCounting = useCallback(() => {
    setIsStarted(true);
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    const timeout = setTimeout(() => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * eased);

        setCount(current);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isStarted, end, duration, start, delay]);

  return { count, startCounting };
}
