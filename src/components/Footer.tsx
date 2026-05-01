import { openCalendly } from '../lib/calendly';

export function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-bg py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Dental Labs" className="h-8 w-8 object-contain rounded-lg" />
            <span className="h-display text-lg font-semibold tracking-tight">
              Dental Labs
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Software for the modern dental clinic. Made for clinicians who would
            rather be with their patients than with their paperwork.
          </p>
        </div>

        <div>
          <div className="eyebrow">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><a href="#" className="transition hover:text-ink">About</a></li>
            <li>
              <button onClick={openCalendly} className="transition hover:text-ink">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-ink/10 px-6 pt-6 text-xs text-ink-muted">
        <span>© {new Date().getFullYear()} Dental Labs. All rights reserved.</span>
      </div>
    </footer>
  );
}
