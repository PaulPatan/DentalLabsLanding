import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarRange, Sparkles, FileHeart, Receipt } from 'lucide-react';
import {
  ScheduleMockup,
  ToothChartMockup,
  HealthRecordMockup,
  InvoiceMockup,
} from './FeatureMockups';

/**
 * Pinned scrollytelling — the Outdo trick. A right-side mockup pins to the
 * viewport while the left-side copy advances chapter by chapter. Each
 * chapter swaps copy + mockup with a smooth crossfade tied to scroll
 * progress. A `1/4` progress chip ticks through.
 */

const chapters = [
  {
    eyebrow: 'Chapter 01 · Schedule',
    Icon: CalendarRange,
    title: 'Booking that respects everyone\'s time.',
    copy:
      'Chair-aware scheduling with conflict detection, working-hours and time-off rules, automatic SMS reminders, and patient self-booking — all enforced server-side, all reversible.',
    Mockup: ScheduleMockup,
  },
  {
    eyebrow: 'Chapter 02 · Charting',
    Icon: Sparkles,
    title: 'A tooth chart that thinks like a dentist.',
    copy:
      'ISO 3950 numbering, treatment history per tooth, and X-ray uploads tied to the surface they describe — so the next appointment opens with everything in context.',
    Mockup: ToothChartMockup,
  },
  {
    eyebrow: 'Chapter 03 · Health',
    Icon: FileHeart,
    title: 'Health records with built-in risk awareness.',
    copy:
      'Allergies, medications, smoking, pregnancy, and chronic conditions roll up into a live risk assessment. No more re-reading pages of intake before every visit.',
    Mockup: HealthRecordMockup,
  },
  {
    eyebrow: 'Chapter 04 · Billing',
    Icon: Receipt,
    title: 'Invoicing that is automatic and audit-ready.',
    copy:
      'When an appointment completes, an invoice is drafted, validated, and filed with your tax authority automatically — with a full UBL 2.1 audit trail kept on every line.',
    Mockup: InvoiceMockup,
  },
];

export function FeatureScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const total = chapters.length;
      const slides = gsap.utils.toArray<HTMLElement>('[data-chapter]');
      const mockups = gsap.utils.toArray<HTMLElement>('[data-mockup]');
      const progressFill = sectionRef.current!.querySelector<HTMLElement>('[data-progress-fill]');
      const progressLabel = sectionRef.current!.querySelector<HTMLElement>('[data-progress-label]');

      // Initial state: only chapter 0 visible
      slides.forEach((el, i) => {
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 });
      });
      mockups.forEach((el, i) => {
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 24, scale: i === 0 ? 1 : 0.97 });
      });

      const st = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: 'top top',
        end: () => `+=${(total - 1) * window.innerHeight * 1.1}`,
        pin: trackRef.current,
        scrub: 0.6,
        snap: {
          snapTo: (value) => Math.round(value * (total - 1)) / (total - 1),
          duration: 0.45,
          ease: 'power2.inOut',
        },
        onUpdate: (self) => {
          const p = self.progress * (total - 1);
          const active = Math.round(p);

          slides.forEach((el, i) => {
            const dist = Math.abs(i - p);
            gsap.to(el, {
              opacity: dist < 0.5 ? 1 - dist * 1.6 : 0,
              y: (i - p) * 30,
              duration: 0.2,
              overwrite: 'auto',
            });
          });
          mockups.forEach((el, i) => {
            const dist = Math.abs(i - p);
            gsap.to(el, {
              opacity: dist < 0.5 ? 1 - dist * 1.6 : 0,
              y: (i - p) * 20,
              scale: 1 - Math.min(dist, 0.3) * 0.1,
              duration: 0.2,
              overwrite: 'auto',
            });
          });

          if (progressFill) {
            progressFill.style.transform = `scaleX(${self.progress})`;
          }
          if (progressLabel) {
            progressLabel.textContent = `${String(active + 1).padStart(2, '0')} / 0${total}`;
          }
        },
      });

      return () => st.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative isolate bg-bg">
      <div ref={trackRef} className="relative h-screen overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg-warm/40 to-bg" />
        <div className="absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,hsl(173_60%_70%_/_0.35),transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] top-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,hsl(43_96%_75%_/_0.4),transparent_70%)] blur-3xl" />

        {/* Progress bar */}
        <div className="absolute left-1/2 top-24 z-30 flex -translate-x-1/2 items-center gap-3">
          <span data-progress-label className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            01 / 0{chapters.length}
          </span>
          <div className="h-px w-40 overflow-hidden bg-ink/10">
            <div
              data-progress-fill
              className="h-full w-full origin-left scale-x-0 bg-teal-600"
            />
          </div>
        </div>

        <div className="mx-auto grid h-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-16 lg:grid-cols-[5fr_6fr]">
          {/* Left: stacked chapter copy */}
          <div className="relative h-full">
            {chapters.map(({ eyebrow, Icon, title, copy }, i) => (
              <div
                key={i}
                data-chapter
                className="absolute inset-0 flex flex-col justify-center"
              >
                <span className="eyebrow flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 text-teal-600" /> {eyebrow}
                </span>
                <h3 className="h-display mt-4 text-balance text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.05] text-ink">
                  {title}
                </h3>
                <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-soft">
                  {copy}
                </p>
              </div>
            ))}
          </div>

          {/* Right: stacked mockups */}
          <div className="relative h-[460px] sm:h-[520px]">
            {chapters.map(({ Mockup }, i) => (
              <div
                key={i}
                data-mockup
                className="absolute inset-0"
                style={{ zIndex: chapters.length - i }}
              >
                <Mockup />
              </div>
            ))}
            {/* soft floor reflection */}
            <div className="pointer-events-none absolute inset-x-0 -bottom-6 mx-auto h-12 w-3/4 rounded-[100%] bg-[radial-gradient(closest-side,hsl(195_30%_35%_/_0.18),transparent_70%)] blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
