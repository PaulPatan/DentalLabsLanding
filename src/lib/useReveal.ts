import { useEffect, useRef } from 'react';

/**
 * Adds `data-revealed` to the element + every descendant matching `selector`
 * once it scrolls into view. Pair with the `.reveal` CSS classes in index.css
 * to get a staggered fade-up that doesn't depend on GSAP/ScrollTrigger timing.
 */
export function useReveal<T extends HTMLElement>(selector = '[data-reveal]') {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!items.length) return;

    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.revealed = 'true';
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);

  return ref;
}
