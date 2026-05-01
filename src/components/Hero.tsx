import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import { openCalendly } from '../lib/calendly';
import { HeroDashboard } from './HeroDashboard';
import { GhostCards } from './GhostCards';

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-hero="pill"]', { y: 14, opacity: 0, duration: 0.7 })
        .from(
          '[data-hero="line"]',
          { y: 24, opacity: 0, duration: 1.0, stagger: 0.08 },
          '-=0.45',
        )
        .from('[data-hero="sub"]', { y: 14, opacity: 0, duration: 0.8 }, '-=0.55')
        .from('[data-hero="cta"]', { y: 14, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.6')
        .from(
          '[data-hero="dashboard"]',
          { y: 60, opacity: 0, duration: 1.4, ease: 'power2.out' },
          '-=0.9',
        )
        .from(
          '[data-hero="ghosts"] > *',
          { y: 30, opacity: 0, duration: 0.9, stagger: 0.07 },
          '-=1.2',
        );

      // Subtle continuous float on the dashboard, layered on top of GSAP intro.
      gsap.to('[data-hero="dashboard"]', {
        y: '+=8',
        duration: 4.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg-warm to-bg" />
      <div className="absolute inset-0 -z-10 bg-grid mask-edge-fade opacity-70" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(173_60%_75%_/_0.45),transparent_70%)] blur-2xl" />
      <div className="absolute right-[-10%] top-[20%] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,hsl(43_96%_75%_/_0.55),transparent_70%)] blur-3xl" />

      <div data-hero="ghosts">
        <GhostCards />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <span data-hero="pill" className="pill mb-7">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-gold-400 text-ink">
            <Sparkles className="h-2.5 w-2.5" strokeWidth={2.5} />
          </span>
          One workspace for the modern dental clinic
        </span>

        <h1 className="h-display text-balance text-[clamp(2.6rem,6vw,5.5rem)] font-medium text-ink">
          <span data-hero="line" className="block">
            Run your clinic on
          </span>
          <span data-hero="line" className="block italic">
            <span className="accent-stroke">one</span> screen.
          </span>
        </h1>

        <p
          data-hero="sub"
          className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft"
        >
          Scheduling, charting, health records, AI-assisted X-rays, inventory,
          payments, and compliant invoicing — every workflow your team relies on,
          in one streamlined workspace.
        </p>

        <div data-hero="cta" className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button onClick={openCalendly} className="btn-primary">
            Book a demo
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <a href="#features" className="btn-ghost">
            See how it works
          </a>
        </div>

        {/* Quiet trust strip — generic, no place names */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-muted">
          <span className="font-mono uppercase tracking-[0.22em]">
            Trusted by clinics
          </span>
          <span className="hidden h-px w-10 bg-ink/20 sm:block" />
          <span className="font-medium">From solo practices to multi-chair groups</span>
        </div>

        <div data-hero="dashboard" className="relative mt-16 w-full max-w-5xl">
          <HeroDashboard />
          {/* Specular floor reflection */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-6 mx-auto h-24 w-3/4 rounded-[100%] bg-[radial-gradient(closest-side,hsl(195_30%_35%_/_0.22),transparent_70%)] blur-2xl" />
        </div>
      </div>
    </section>
  );
}
