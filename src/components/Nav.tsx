import { useEffect, useState } from 'react';
import { openCalendly } from '../lib/calendly';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-500 ${
          scrolled
            ? 'border border-ink/10 bg-white/75 py-2.5 shadow-softer backdrop-blur-xl'
            : 'border border-transparent bg-transparent py-2.5'
        }`}
      >
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Dental Labs" className="h-9 w-9 object-contain rounded-xl" />
          <span className="h-display text-lg font-semibold tracking-tight">Dental Labs</span>
        </a>

        <button
          onClick={openCalendly}
          className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg shadow-softer transition hover:bg-ink/85"
        >
          Book a demo
        </button>
      </div>
    </header>
  );
}
