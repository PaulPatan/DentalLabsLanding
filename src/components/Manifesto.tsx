import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Outdo's per-word blur→focus reveal — words start blurred and dim,
 * snap to clear focus as the user scrolls through the section.
 */
const COPY = `Most clinic software was designed for paperwork.
Dental Labs was designed for the people doing the work — and the people in the chair.`;

export function Manifesto() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const words = rootRef.current.querySelectorAll<HTMLSpanElement>('.word-reveal');
    const tween = gsap.to(words, {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      stagger: 0.04,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top 75%',
        end: 'bottom 50%',
        scrub: 0.8,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const lines = COPY.split('\n');

  return (
    <section className="relative isolate py-32 sm:py-44">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg-mint to-bg" />
      <div ref={rootRef} className="mx-auto max-w-5xl px-6 text-center">
        <span className="eyebrow">The shift</span>
        <h2 className="h-display mt-5 text-[clamp(2rem,4.5vw,3.6rem)] font-medium leading-[1.1] tracking-tight text-ink">
          {lines.map((line, li) => (
            <span key={li} className="block">
              {line.split(' ').map((word, wi) => (
                <span key={`${li}-${wi}`} className="word-reveal mr-[0.22em]">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
