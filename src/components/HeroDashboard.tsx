import { Calendar, ChevronRight, Search, Bell, Activity } from 'lucide-react';
import { Odontogram } from 'react-odontogram';
import 'react-odontogram/style.css';

/**
 * The hero focal point: a tilted "command center" view of the product.
 * Pure HTML/CSS — looks crisp at any size, no external assets, no 3D
 * runtime. The tilt + soft shadow + GSAP float (added by Hero) sells
 * the depth.
 */
export function HeroDashboard() {
  return (
    <div className="relative isolate" style={{ perspective: '2200px' }}>
      <div
        className="relative origin-top-left will-change-transform"
        style={{
          transform: 'rotateX(7deg) rotateY(-3deg) rotate(-0.6deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main dashboard window */}
        <div className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft">
          {/* faux titlebar */}
          <div className="flex items-center gap-3 border-b border-ink/5 bg-bg-warm/60 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-white/70 px-3 py-1.5 text-[11px] text-ink-muted ring-1 ring-ink/5">
              <Search className="h-3 w-3" />
              dentallabs.app · Today
            </div>
            <Bell className="h-3.5 w-3.5 text-ink-muted" />
          </div>

          <div className="grid grid-cols-[180px_1fr_220px]">
            {/* Sidebar */}
            <aside className="border-r border-ink/5 bg-bg-warm/40 p-4 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 text-white">
                  <Calendar className="h-3.5 w-3.5" />
                </span>
                <div className="leading-tight">
                  <div className="font-semibold text-ink">Harmony Dental</div>
                  <div className="text-ink-muted">2 chairs · 3 staff</div>
                </div>
              </div>

              <div className="mt-5 space-y-1.5">
                {[
                  { label: 'Today', active: true },
                  { label: 'Schedule' },
                  { label: 'Patients' },
                  { label: 'Charts' },
                  { label: 'Health records' },
                  { label: 'Invoices' },
                  { label: 'Inventory' },
                  { label: 'Reports' },
                ].map((it) => (
                  <div
                    key={it.label}
                    className={`flex items-center justify-between rounded-md px-2 py-1.5 ${
                      it.active
                        ? 'bg-white text-ink shadow-softer ring-1 ring-ink/5'
                        : 'text-ink-soft'
                    }`}
                  >
                    <span>{it.label}</span>
                    {it.active && <ChevronRight className="h-3 w-3 text-teal-600" />}
                  </div>
                ))}
              </div>
            </aside>

            {/* Schedule grid */}
            <section className="p-5">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    Wed · Apr 29
                  </div>
                  <div className="h-display mt-0.5 text-2xl font-medium leading-tight text-ink">
                    8 booked, 0 conflicts.
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-teal-500" /> Chair 1
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-gold-400" /> Chair 2
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[36px_1fr_1fr] gap-1 text-[10px]">
                {['09', '10', '11', '12', '13', '14'].map((t, i) => (
                  <div key={t} className="contents">
                    <div className="py-1.5 font-mono text-ink-muted">{t}:00</div>
                    <div className="relative h-10 rounded-md bg-bg-warm/40">
                      {i === 0 && (
                        <Block tone="teal" title="Cleaning" name="Andrei P." />
                      )}
                      {i === 3 && (
                        <Block tone="teal" title="Crown prep · 16" name="Maria T." span={2} />
                      )}
                    </div>
                    <div className="relative h-10 rounded-md bg-bg-warm/40">
                      {i === 1 && (
                        <Block tone="gold" title="Consultation" name="Vlad M." />
                      )}
                      {i === 4 && (
                        <Block tone="gold" title="Filling · Tooth 22" name="Sara D." />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-teal-50/70 px-3 py-2 text-[10px] text-teal-800">
                <span className="font-semibold">No conflicts · 4 confirmed</span>
                <span className="font-mono opacity-70">SMS reminders sent · 09:00</span>
              </div>
            </section>

            {/* Right rail: patient peek */}
            <aside className="border-l border-ink/5 p-4 text-[10px]">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted">
                Up next
              </div>
              <div className="mt-2 rounded-xl border border-ink/5 bg-white p-3 shadow-softer">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-teal-100 text-[10px] font-semibold text-teal-800">
                    AP
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] font-semibold text-ink">Andrei Popescu</div>
                    <div className="text-ink-muted">Cleaning · 09:00</div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Stat label="Risk" value="Low" tone="teal" />
                  <Stat label="Last visit" value="Jan 15" />
                </div>

                <div className="mt-3">
                  <div className="text-ink-muted">Allergies</div>
                  <div className="mt-0.5 font-medium text-amber-700">Penicillin</div>
                </div>
              </div>

              {/* Tooth chart preview */}
              <div className="mt-3 rounded-xl border border-ink/5 bg-white p-3 shadow-softer">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted">
                    Chart
                  </span>
                  <Activity className="h-3 w-3 text-teal-600" />
                </div>
                <div className="hero-chart-host mt-1" style={{ height: 80 }}>
                  <Odontogram
                    theme="light"
                    layout="circle"
                    showHalf="full"
                    readOnly
                    showTooltip={false}
                    showLabels={false}
                    teethConditions={[
                      {
                        label: 'Restored',
                        teeth: ['teeth-16', 'teeth-36', 'teeth-47'],
                        outlineColor: 'hsl(173 58% 45%)',
                        fillColor: 'hsl(173 58% 85%)',
                      },
                      {
                        label: 'Active',
                        teeth: ['teeth-22'],
                        outlineColor: 'hsl(173 58% 35%)',
                        fillColor: 'hsl(173 58% 55%)',
                      },
                    ]}
                    styles={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="mt-1 text-[9px] text-ink-muted">Tooth 22 · composite</div>
              </div>
            </aside>
          </div>
        </div>

        {/* Floating mini-card layered in front for depth */}
        <div className="absolute -bottom-8 -right-8 w-56 rotate-3 rounded-2xl border border-ink/10 bg-white p-3 shadow-soft">
          <div className="flex items-center gap-2 text-[10px] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Invoice DL-2026-0184
          </div>
          <div className="mt-1 text-[12px] font-semibold text-ink">Maria T. · Crown prep</div>
          <div className="mt-2 flex items-center justify-between">
            <span className="h-display text-base font-medium text-ink">€1,420</span>
            <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[9px] font-semibold text-teal-800">
              Submitted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({
  tone,
  title,
  name,
  span = 1,
}: {
  tone: 'teal' | 'gold';
  title: string;
  name: string;
  span?: number;
}) {
  const palette =
    tone === 'teal'
      ? 'bg-teal-50 ring-teal-300 text-teal-800'
      : 'bg-gold-50 ring-gold-200 text-ink';
  return (
    <div
      className={`absolute inset-x-1 top-0.5 rounded-md ring-1 ${palette} px-1.5 py-1 leading-tight`}
      style={{ height: span === 2 ? 'calc(200% + 0.25rem)' : 'calc(100% - 0.25rem)' }}
    >
      <div className="text-[9px] font-semibold">{title}</div>
      <div className="text-[9px] opacity-70">{name}</div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: 'teal';
}) {
  return (
    <div className="rounded-md bg-bg-warm/60 px-2 py-1.5">
      <div className="text-[9px] text-ink-muted">{label}</div>
      <div className={`text-[11px] font-semibold ${tone === 'teal' ? 'text-teal-700' : 'text-ink'}`}>
        {value}
      </div>
    </div>
  );
}
