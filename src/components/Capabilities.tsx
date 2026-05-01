import {
  Brain,
  Boxes,
  CreditCard,
  LineChart,
  Smartphone,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { XrayMockup } from './XrayMockup';

/**
 * Bento-style capability grid. Every card describes a feature that's
 * shipped — never frame anything as "coming soon" or "in progress".
 *
 *  ┌────────────────────────────┬─────────────────────────────┐
 *  │                            │                             │
 *  │    AI X-ray (featured)     │    Inventory (mockup)       │
 *  │                            │                             │
 *  ├──────────────┬─────────────┴─────────────┬───────────────┤
 *  │              │                           │               │
 *  │  Payments    │       Analytics           │  Patient app  │
 *  │              │                           │               │
 *  └──────────────┴───────────────────────────┴───────────────┘
 */

export function Capabilities() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="capabilities" ref={ref} className="relative isolate py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg-warm/60 to-bg" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <span data-reveal className="eyebrow flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-gold-500" /> The full toolkit
          </span>
          <h2
            data-reveal
            className="h-display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium leading-[1.05] tracking-tight text-ink"
          >
            Everything your clinic runs on, in one place.
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-lg text-ink-soft">
            Charts, payments, inventory, AI on your X-rays, a no-friction patient
            app — stitched together so the same data never has to be entered twice.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Featured: AI X-ray */}
          <article
            data-reveal
            className="col-span-12 overflow-hidden rounded-3xl border border-ink/10 bg-ink p-1.5 shadow-soft lg:col-span-7"
          >
            <div className="rounded-[20px] bg-ink p-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="eyebrow text-emerald-300/70">
                    <span className="inline-flex items-center gap-2">
                      <Brain className="h-3.5 w-3.5" /> AI on every X-ray
                    </span>
                  </span>
                  <h3 className="h-display mt-3 max-w-md text-3xl font-medium leading-tight text-white">
                    Predictions the moment a panoramic loads.
                  </h3>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-mono text-emerald-300 ring-1 ring-emerald-300/30">
                  LIVE
                </span>
              </div>

              <div className="mt-5 h-[440px] overflow-hidden rounded-2xl ring-1 ring-white/5">
                <XrayMockup />
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3">
                {[
                  { label: 'Cavity', val: '92%', tone: 'rose' },
                  { label: 'Implant', val: '100%', tone: 'teal' },
                  { label: 'Restoration', val: '87%', tone: 'gold' },
                  { label: 'Bone loss', val: '78%', tone: 'rose' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/5"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/50">
                      {s.label}
                    </div>
                    <div className="mt-1 h-display text-xl font-medium text-white">
                      {s.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Inventory */}
          <article
            data-reveal
            className="col-span-12 overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-softer lg:col-span-5"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-50 text-gold-600">
              <Boxes className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <h3 className="h-display mt-5 text-2xl font-medium leading-tight text-ink">
              Inventory that counts itself.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Composites, anesthetics, gloves — track lot numbers and expiry,
              auto-deduct on procedures.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                { name: 'Composite A2 · 4g', stock: 12, threshold: 6, ok: true },
                { name: 'Lidocaine 2% · 1.8ml', stock: 4, threshold: 6, ok: false },
                { name: 'Nitrile gloves · M', stock: 220, threshold: 100, ok: true },
                { name: 'Burs · diamond round', stock: 18, threshold: 10, ok: true },
              ].map((it) => (
                <li
                  key={it.name}
                  className="flex items-center justify-between rounded-xl bg-bg-warm/60 px-3 py-2 text-[12px]"
                >
                  <span className="text-ink">{it.name}</span>
                  <span
                    className={`flex items-center gap-2 font-mono text-[11px] ${
                      it.ok ? 'text-teal-700' : 'text-amber-700'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        it.ok ? 'bg-teal-500' : 'bg-amber-500'
                      }`}
                    />
                    {it.stock}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* Payments */}
          <article
            data-reveal
            className="col-span-12 overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-softer md:col-span-6 lg:col-span-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-700">
              <CreditCard className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <h3 className="h-display mt-5 text-2xl font-medium leading-tight text-ink">
              Payments at the chair.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Card-present, links for outstanding balances, and reconciliation
              tied to every invoice line.
            </p>

            <div className="mt-5 rounded-2xl bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 p-4 text-white shadow-softer">
              <div className="flex items-center justify-between text-[10px] font-mono opacity-90">
                <span>PAYMENT · 2026-04-29</span>
                <span>14:31</span>
              </div>
              <div className="h-display mt-3 text-3xl font-medium">€420.00</div>
              <div className="mt-1 text-[11px] opacity-80">Maria T. · Cleaning</div>
              <div className="mt-4 flex items-center justify-between rounded-lg bg-white/10 px-3 py-1.5 text-[10px]">
                <span>•••• 4221</span>
                <span className="font-semibold">Approved</span>
              </div>
            </div>
          </article>

          {/* Analytics */}
          <article
            data-reveal
            className="col-span-12 overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-softer md:col-span-6 lg:col-span-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-50 text-gold-600">
              <LineChart className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <h3 className="h-display mt-5 text-2xl font-medium leading-tight text-ink">
              The numbers, on the wall.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Chair utilization, no-show rates, revenue per service — without
              ever opening a spreadsheet.
            </p>

            <div className="mt-5 rounded-2xl bg-bg-warm/50 p-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
                    Revenue · April
                  </div>
                  <div className="h-display mt-1 text-2xl font-medium text-ink">
                    €38,420
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-semibold text-teal-800">
                  <TrendingUp className="h-3 w-3" /> +14%
                </span>
              </div>
              <Sparkline />
            </div>
          </article>

          {/* Patient mobile */}
          <article
            data-reveal
            className="col-span-12 overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-softer md:col-span-12 lg:col-span-4"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-700">
              <Smartphone className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <h3 className="h-display mt-5 text-2xl font-medium leading-tight text-ink">
              A patient app they don't dread.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Self-booking, gentle reminders, and a private way to ask the team
              between visits.
            </p>

            <div className="mt-5 rounded-2xl bg-bg-mint/70 p-4">
              <div className="flex items-center gap-2 text-[11px] text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                Reminder · Wed, May 2
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">
                Cleaning · 10:30
              </div>
              <div className="mt-3 flex gap-2">
                <span className="inline-flex flex-1 items-center justify-center rounded-full bg-teal-600 px-3 py-1.5 text-[11px] font-semibold text-white">
                  Confirm
                </span>
                <span className="inline-flex flex-1 items-center justify-center rounded-full border border-ink/15 px-3 py-1.5 text-[11px] font-medium text-ink">
                  Reschedule
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] text-ink-muted">
                <span>Health record · 92%</span>
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Sparkline() {
  // Hand-tuned points for an upward-trending feel
  const pts = [10, 14, 12, 18, 17, 22, 21, 26, 24, 30, 28, 34];
  const max = Math.max(...pts);
  const w = 220;
  const h = 50;
  const step = w / (pts.length - 1);

  const path = pts
    .map((p, i) => {
      const x = i * step;
      const y = h - (p / max) * (h - 6) - 3;
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
  const fillPath = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-12 w-full">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(173 58% 50%)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="hsl(173 58% 50%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPath} fill="url(#spark)" />
      <path
        d={path}
        fill="none"
        stroke="hsl(173 58% 39%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
