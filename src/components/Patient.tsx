import { Bell, Calendar, Smile, Wifi, BatteryFull } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

export function Patient() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="patient" ref={ref} className="relative isolate overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg-mint to-bg" />
      <div className="absolute -right-20 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,hsl(173_60%_75%_/_0.45),transparent_70%)] blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span data-reveal className="eyebrow flex items-center gap-2">
            <Smile className="h-3.5 w-3.5 text-teal-600" /> For patients
          </span>
          <h2
            data-reveal
            className="h-display mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-ink"
          >
            Half the visit, done <span className="italic">before</span> they arrive.
          </h2>
          <p data-reveal className="mt-6 max-w-md text-lg text-ink-soft">
            Patients book themselves, finish intake on their phone, and confirm
            with one tap. By the time they sit down, you already know everything
            you need — no clipboards, no double-entry.
          </p>

          <ul data-reveal className="mt-8 space-y-3 text-[15px]">
            {[
              'Self-booking with chair availability in real time',
              'Health record completed at home, not in the waiting room',
              'Friendly reminders — no robotic SMS spam',
              'A timeline of past treatments, in plain language',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
                <span className="text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center py-8 lg:h-[640px] lg:py-0">
          <div data-reveal>
            <PhoneFrame />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame() {
  return (
    <div className="relative h-[600px] w-[300px] rounded-[44px] border-[10px] border-ink bg-ink p-1.5 shadow-2xl">
      <div className="absolute left-1/2 top-2 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-gradient-to-b from-bg-warm via-bg to-bg-mint">
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-ink">
          <span className="font-mono">9:41</span>
          <div className="flex items-center gap-1.5">
            <Wifi className="h-3 w-3" />
            <BatteryFull className="h-3 w-3" />
          </div>
        </div>

        <div className="px-5 pt-7">
          <div className="text-[11px] text-ink-muted">Hello, Andrei</div>
          <div className="h-display mt-1 text-2xl font-medium leading-tight text-ink">
            Your next visit is in <span className="text-teal-600">3 days</span>.
          </div>
        </div>

        <div className="mx-5 mt-5 rounded-2xl border border-ink/10 bg-white/85 p-4 shadow-softer backdrop-blur">
          <div className="flex items-center gap-2 text-[11px] text-ink-muted">
            <Calendar className="h-3 w-3 text-teal-600" /> Wed, May 2 · 10:30
          </div>
          <div className="mt-1 text-sm font-semibold text-ink">Cleaning · Dr. Ionescu</div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-full bg-teal-600 px-3 py-1.5 text-[11px] font-semibold text-white">
              Confirm
            </button>
            <button className="flex-1 rounded-full border border-ink/15 px-3 py-1.5 text-[11px] font-medium text-ink">
              Reschedule
            </button>
          </div>
        </div>

        <div className="mx-5 mt-4 rounded-2xl border border-ink/10 bg-white/85 p-4 shadow-softer backdrop-blur">
          <div className="flex items-center gap-2 text-[11px] text-ink-muted">
            <Bell className="h-3 w-3 text-gold-600" /> Reminder
          </div>
          <div className="mt-1 text-[12px] text-ink">
            Health record is 92% complete — finish on the bus?
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink/5">
            <div className="h-full w-[92%] rounded-full bg-teal-500" />
          </div>
        </div>

        <div className="mx-5 mt-4 rounded-2xl border border-ink/10 bg-white/85 p-4 shadow-softer backdrop-blur">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-muted">
            Recent
          </div>
          <ul className="mt-2 space-y-1.5 text-[12px] text-ink-soft">
            <li className="flex justify-between">
              <span>Composite · Tooth 22</span>
              <span className="font-mono text-ink-muted">Apr 22</span>
            </li>
            <li className="flex justify-between">
              <span>Cleaning</span>
              <span className="font-mono text-ink-muted">Jan 15</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
