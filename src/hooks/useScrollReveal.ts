import { useEffect } from 'react';
import { useApp } from '../context/AppContext';

/**
 * useScrollReveal
 *
 * Lightweight, accessible, single-instance IntersectionObserver system.
 * Scans for elements with `.reveal`, `.reveal-up`, `.reveal-left`, `.reveal-right`,
 * `.reveal-image`, `.reveal-scale`, or `[data-reveal]` and applies `.is-revealed` once
 * they enter the viewport.
 *
 * Unobserves immediately after revealing so animations only run once.
 * Fully respects `prefers-reduced-motion` and provides safety fallbacks.
 */
export function useScrollReveal() {
  const { currentPage, selectedProgramId, selectedReportSlug } = useApp();

  useEffect(() => {
    // Check for reduced motion preference
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      const targets = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-image, .reveal-scale, [data-reveal]'
      );
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    // Fallback if IntersectionObserver is unsupported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      const targets = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-image, .reveal-scale, [data-reveal]'
      );
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    let observer: IntersectionObserver | null = null;

    // Small delay to ensure the newly routed page DOM is rendered
    const timeoutId = setTimeout(() => {
      const targets = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-image, .reveal-scale, [data-reveal]'
      );

      if (targets.length === 0) return;

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('is-revealed');
              obs.unobserve(el);
            }
          });
        },
        {
          root: null,
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      targets.forEach((el) => {
        // If already revealed, no need to observe again
        if (el.classList.contains('is-revealed')) return;
        observer?.observe(el);
      });
    }, 40);

    // Safety fallback: after 1.8 seconds, any elements that haven't triggered
    // are revealed automatically so content is never stuck hidden
    const safetyFallbackId = setTimeout(() => {
      const pendingTargets = document.querySelectorAll(
        '.reveal:not(.is-revealed), .reveal-up:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-image:not(.is-revealed), .reveal-scale:not(.is-revealed), [data-reveal]:not(.is-revealed)'
      );
      pendingTargets.forEach((el) => el.classList.add('is-revealed'));
    }, 1800);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(safetyFallbackId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [currentPage, selectedProgramId, selectedReportSlug]);
}
