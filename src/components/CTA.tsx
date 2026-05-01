import { ArrowRight } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { openCalendly } from '../lib/calendly';

export function CTA() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="cta" ref={ref} className="relative isolate overflow-hidden py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 px-10 py-20 text-center shadow-soft sm:px-16 sm:py-28">
          <div className="absolute inset-0 -z-10 opacity-60 mix-blend-screen">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-teal-200 blur-3xl" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-40 mix-blend-overlay" />

          <span data-reveal className="pill border-white/20 bg-white/10 text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Free during early access
          </span>
          <h2
            data-reveal
            className="h-display mx-auto mt-7 max-w-2xl text-balance text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.02] text-white"
          >
            Run a <span className="italic">simpler</span> clinic by next week.
          </h2>
          <p data-reveal className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/80">
            Onboard in an afternoon. Bring your patient list, your chairs, your
            billing credentials — we handle the rest.
          </p>
          <div data-reveal className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-700 shadow-soft transition hover:-translate-y-0.5 hover:bg-bg-warm"
            >
              Book a demo
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
