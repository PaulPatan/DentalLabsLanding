import { Calendar, Clock, FileText, Receipt, Check } from 'lucide-react';
import { Odontogram } from 'react-odontogram';
import 'react-odontogram/style.css';

/**
 * Static "screenshots" of each feature. Drawn entirely in HTML/CSS to stay
 * crisp at any size and to dodge the brittleness of real screenshot files.
 */

export function ScheduleMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
      <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Calendar className="h-4 w-4 text-teal-600" />
          Schedule · Wednesday, Apr 29
        </div>
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span className="h-2 w-2 rounded-full bg-teal-500" />
          Chair 1
          <span className="h-2 w-2 rounded-full bg-gold-400" />
          Chair 2
        </div>
      </div>

      <div className="grid grid-cols-[44px_1fr_1fr] divide-x divide-ink/5 text-[11px]">
        {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map((t, i) => (
          <div key={t} className="contents">
            <div className="px-2 py-3 font-mono text-ink-muted">{t}</div>
            <div className="relative h-14 px-2 py-1">
              {i === 1 && <Block tone="teal" title="Cleaning" name="Andrei P." />}
              {i === 4 && <Block tone="teal" title="Crown prep" name="Maria T." span={2} />}
            </div>
            <div className="relative h-14 px-2 py-1">
              {i === 0 && <Block tone="gold" title="Consultation" name="Vlad M." />}
              {i === 3 && <Block tone="gold" title="Filling · Tooth 16" name="Sara D." />}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-ink/10 bg-white/90 px-3 py-1.5 text-[11px] text-ink-soft shadow-softer">
        <Clock className="h-3 w-3 text-teal-600" />
        No conflicts · 4 confirmed
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
      className={`absolute inset-x-2 top-1 rounded-lg ring-1 ${palette} p-1.5`}
      style={{ height: span === 2 ? 'calc(200% + 0.25rem)' : 'calc(100% - 0.5rem)' }}
    >
      <div className="text-[10px] font-semibold leading-tight">{title}</div>
      <div className="text-[10px] opacity-70">{name}</div>
    </div>
  );
}

export function ToothChartMockup() {
  // teethConditions takes "teeth-XX" ids; we use them to express prior
  // restorations + the currently-active tooth in the same anatomical chart.
  const conditions = [
    {
      label: 'Restored',
      teeth: ['teeth-16', 'teeth-36', 'teeth-47'],
      outlineColor: 'hsl(173 58% 45%)',
      fillColor: 'hsl(173 58% 85%)',
    },
    {
      label: 'Active · composite',
      teeth: ['teeth-22'],
      outlineColor: 'hsl(173 58% 35%)',
      fillColor: 'hsl(173 58% 55%)',
    },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-ink">Maria Teodorescu · Tooth chart</div>
        <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-medium text-teal-700">
          Updated · Apr 28
        </span>
      </div>

      <div className="chart-host relative mx-auto mt-2 h-[280px] w-full">
        <Odontogram
          theme="light"
          layout="circle"
          showHalf="full"
          readOnly
          showTooltip={false}
          showLabels={false}
          teethConditions={conditions}
          styles={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-bg-warm/70 p-3 text-[11px]">
        <div>
          <div className="font-semibold text-ink">Tooth 22 · Composite restoration</div>
          <div className="text-ink-muted">Mesial-distal · Apr 22, 2026</div>
        </div>
        <button className="rounded-full bg-ink px-3 py-1.5 text-[11px] font-medium text-white">
          + Note
        </button>
      </div>
    </div>
  );
}

export function HealthRecordMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
      <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <FileText className="h-4 w-4 text-teal-600" />
          Health record · Andrei Popescu
        </div>
        <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-medium text-teal-700">
          Risk · Low
        </span>
      </div>

      <div className="space-y-3 px-5 py-4 text-[12px]">
        <Row label="Allergies" value="Penicillin" tone="warn" />
        <Row label="Medications" value="None" />
        <Row label="Smoking" value="Former" />
        <Row label="Pregnancy" value="—" />
        <Row label="Conditions" value="Hypertension · controlled" />
      </div>

      <div className="mx-5 mb-5 rounded-xl border border-teal-200/60 bg-teal-50/60 p-3 text-[11px] text-teal-800">
        <div className="font-semibold">Dr. Ionescu's note</div>
        <div className="mt-0.5 text-teal-700/80">
          Use lidocaine; avoid amoxicillin pre-op. Reviewed 14 days ago.
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: 'warn';
}) {
  return (
    <div className="flex items-center justify-between border-b border-ink/5 pb-2 last:border-0">
      <span className="text-ink-muted">{label}</span>
      <span
        className={`font-medium ${
          tone === 'warn' ? 'text-amber-700' : 'text-ink'
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export function InvoiceMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
      <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Receipt className="h-4 w-4 text-teal-600" />
          Invoice · DL-2026-0184
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-2.5 py-1 text-[10px] font-semibold text-teal-800">
          <Check className="h-3 w-3" /> Filed · Accepted
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 px-5 pt-4 text-[11px]">
        <div>
          <div className="text-ink-muted">Issued to</div>
          <div className="mt-0.5 font-semibold text-ink">Maria Teodorescu</div>
          <div className="text-ink-muted">VAT 12345678</div>
        </div>
        <div>
          <div className="text-ink-muted">Total</div>
          <div className="mt-0.5 h-display text-2xl font-medium text-ink">€1,420.00</div>
          <div className="text-ink-muted">incl. 19% VAT</div>
        </div>
      </div>

      <div className="mt-3 divide-y divide-ink/5 px-5 text-[11px]">
        <Line desc="Cleaning" qty="1" amt="220.00" />
        <Line desc="Composite restoration · Tooth 16" qty="1" amt="650.00" />
        <Line desc="Composite restoration · Tooth 22" qty="1" amt="550.00" />
      </div>

      <div className="mt-3 mx-5 mb-5 flex items-center gap-2 rounded-lg bg-teal-50 px-3 py-2 text-[10px] text-teal-800">
        <span className="font-mono">UBL 2.1</span>
        <span className="opacity-70">filed with tax authority · 2026-04-29 14:31</span>
      </div>
    </div>
  );
}

function Line({ desc, qty, amt }: { desc: string; qty: string; amt: string }) {
  return (
    <div className="flex items-center justify-between py-2 text-ink">
      <span>{desc}</span>
      <span className="flex items-center gap-3 text-ink-muted">
        <span className="font-mono">×{qty}</span>
        <span className="font-mono text-ink">{amt} lei</span>
      </span>
    </div>
  );
}
