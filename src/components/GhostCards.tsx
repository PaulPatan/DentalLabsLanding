import { Calendar, FileText, Receipt, Activity, ScanLine, Stethoscope } from 'lucide-react';

/**
 * Faint floating "context" cards in the hero periphery — Outdo's depth trick,
 * applied to dental-clinic primitives so the hero already hints at what
 * the product handles before the user reads a word.
 */
const cards = [
  {
    Icon: Calendar,
    title: 'Mon, 14:30',
    sub: 'Andrei Popescu — Cleaning',
    pos: 'left-[6%] top-[18%]',
    rot: '-rotate-6',
    delay: '0s',
  },
  {
    Icon: ScanLine,
    title: 'Tooth #22',
    sub: 'Composite restoration',
    pos: 'right-[8%] top-[14%]',
    rot: 'rotate-3',
    delay: '0.6s',
  },
  {
    Icon: Receipt,
    title: 'Invoice DL-2026-0184',
    sub: 'e-Factura · accepted',
    pos: 'left-[10%] bottom-[18%]',
    rot: '-rotate-3',
    delay: '1.1s',
  },
  {
    Icon: FileText,
    title: 'Health record',
    sub: 'Allergies · Medications',
    pos: 'right-[10%] bottom-[22%]',
    rot: 'rotate-6',
    delay: '0.3s',
  },
  {
    Icon: Activity,
    title: 'Risk assessment',
    sub: 'Low · last reviewed Apr 2',
    pos: 'left-[6%] top-[30%]',
    rot: '-rotate-2',
    delay: '1.6s',
  },
  {
    Icon: Stethoscope,
    title: 'Dr. Ionescu',
    sub: 'Chair 2 · 6 today',
    pos: 'right-[8%] top-[28%]',
    rot: 'rotate-2',
    delay: '0.9s',
  },
];

export function GhostCards() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none mask-radial-fade hidden xl:block">
      {cards.map(({ Icon, title, sub, pos, rot, delay }, i) => (
        <div
          key={i}
          className={`absolute ${pos} ${rot} animate-float`}
          style={{ animationDelay: delay }}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/55 px-4 py-3 shadow-softer backdrop-blur-md">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-50 text-teal-600">
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-ink/85">{title}</div>
              <div className="text-[11px] text-ink-muted">{sub}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
