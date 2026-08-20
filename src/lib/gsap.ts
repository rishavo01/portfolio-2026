import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Hook to trigger a smooth fade-in and slide-up animation when an element enters viewport
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  threshold?: number;
}) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: options?.y ?? 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 0.85,
          delay: options?.delay ?? 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options?.delay, options?.duration, options?.y]);

  return elementRef;
}

/**
 * Hook for staggered list item entrance animation on scroll
 */
export function useScrollStagger<T extends HTMLElement = HTMLDivElement>(options?: {
  selector?: string;
  stagger?: number;
  y?: number;
  duration?: number;
}) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = options?.selector ? container.querySelectorAll(options.selector) : container.children;
      if (!items || items.length === 0) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: options?.y ?? 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 0.75,
          stagger: options?.stagger ?? 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [options?.selector, options?.stagger, options?.y, options?.duration]);

  return containerRef;
}
