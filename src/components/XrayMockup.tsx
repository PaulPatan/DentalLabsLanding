import { Odontogram } from 'react-odontogram';
import 'react-odontogram/style.css';

type Finding = 'cavity' | 'implant' | 'restoration' | 'bone';

const FINDING_COLOR: Record<Finding, string> = {
  cavity: '#ff6b6b',
  implant: '#5fc8b8',
  restoration: '#f5d089',
  bone: '#ffa5a5',
};

/*
 * All findings stay in the upper arch (teeth 11-28) so they're fully visible
 * in the clipped container. Teeth 16/26 render on the left/right sides of the
 * circle; 13/23 render in the upper arc region.
 *
 * Measured tooth centers (fraction of container width/height):
 *   tooth 16 → x≈10.5%, y≈55%   (left side of circle)
 *   tooth 26 → x≈89.5%, y≈55%   (right side of circle)
 *   teeth 13/23 are in the upper arc — positions measured below after
 *   first render; callouts tuned to match.
 */
const FINDINGS = {
  cavity:      { tooth: 16, label: 'Cavity',      conf: 92  },
  restoration: { tooth: 26, label: 'Restoration', conf: 87  },
  implant:     { tooth: 13, label: 'Implant',     conf: 100 },
  bone:        { tooth: 23, label: 'Bone loss',   conf: 78  },
} as const;

const conditions = (Object.keys(FINDINGS) as Finding[]).map((k) => ({
  label: FINDINGS[k].label,
  teeth: [`teeth-${FINDINGS[k].tooth}`],
  outlineColor: FINDING_COLOR[k],
  fillColor: `${FINDING_COLOR[k]}55`,
}));

export function XrayMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_center,#0d2624_0%,#08181a_60%,#040c0d_100%)]">
      {/* Coordinate grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(95,200,184,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(95,200,184,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Odontogram */}
      <div className="absolute inset-0 grid place-items-center xray-host">
        <div className="h-full w-full max-w-[680px]">
          <Odontogram
            theme="dark"
            layout="circle"
            showHalf="full"
            readOnly
            showTooltip={false}
            showLabels={false}
            teethConditions={conditions}
            styles={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Scanning beam — animates left→right across full container width */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-[1] w-16 bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent"
        style={{ animation: 'xray-scan 3.6s linear infinite', left: '-64px' }}
      />
      <style>{`@keyframes xray-scan { from { left: -64px; } to { left: 100%; } }`}</style>

      {/* Status pill */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-emerald-200 ring-1 ring-emerald-300/30 backdrop-blur">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
        AI · 4 findings · 1.2s
      </div>

      {/*
        Callout positions tuned to actual measured tooth centers:
          tooth 16 (cavity):      cx≈10.5%,  cy≈55%  → left side, mid-height
          tooth 26 (restoration): cx≈89.5%,  cy≈55%  → right side, mid-height
          tooth 13 (implant):     upper-right arc     → measured ~38%, ~17%
          tooth 23 (bone loss):   upper-left arc      → measured ~62%, ~17%

        The callout flex-col has label above dot. Position the callout so the
        dot (bottom ~24px of the element) lands near the tooth center.
      */}
      {/*
        Dot is the last child (label → dot, flex-col). Each callout is positioned so
        the DOT center lands on the measured tooth center:
          tooth 16 cavity:      cx=10.5%, cy=55.3%  → callout top ≈ 48%
          tooth 26 restoration: cx=89.5%, cy=55.3%  → callout top ≈ 48%
          tooth 13 implant:     cx=24.7%, cy=18.4%  → callout top ≈ 11%
          tooth 23 bone-loss:   cx=75.3%, cy=18.4%  → callout top ≈ 11%
      */}
      <Callout className="left-[4%]  top-[48%]"  tone="cavity"      label="Cavity"       conf={92}  />
      <Callout className="right-[1%] top-[48%]"  tone="restoration" label="Restoration"  conf={87}  />
      <Callout className="left-[17%] top-[11%]"  tone="implant"     label="Implant"      conf={100} />
      <Callout className="right-[15%] top-[11%]" tone="bone"        label="Bone loss"    conf={78}  />

      {/* Legend */}
      <div className="absolute bottom-3 right-3 z-10 flex flex-wrap items-center gap-2.5 rounded-lg bg-black/55 px-3 py-1.5 text-[9px] font-mono uppercase tracking-[0.14em] text-white/70 ring-1 ring-white/10 backdrop-blur">
        <Dot color={FINDING_COLOR.cavity} /> Cavity
        <Dot color={FINDING_COLOR.implant} /> Implant
        <Dot color={FINDING_COLOR.restoration} /> Restoration
        <Dot color={FINDING_COLOR.bone} /> Bone loss
      </div>
    </div>
  );
}

function Callout({
  className,
  tone,
  label,
  conf,
}: {
  className: string;
  tone: Finding;
  label: string;
  conf: number;
}) {
  const color = FINDING_COLOR[tone];
  return (
    <div className={`absolute z-10 ${className} flex flex-col items-center gap-1`}>
      <div
        className="rounded-md bg-black/70 px-2 py-1 text-[10px] font-mono leading-none text-white shadow-lg backdrop-blur"
        style={{ boxShadow: `0 0 18px -6px ${color}`, border: `1px solid ${color}` }}
      >
        <span style={{ color }}>{label}</span>
        <span className="ml-1 text-white/60">· {conf}%</span>
      </div>
      <span
        className="block h-2.5 w-2.5 rounded-full ring-2 ring-black/50"
        style={{ background: color, boxShadow: `0 0 12px ${color}` }}
      />
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}
