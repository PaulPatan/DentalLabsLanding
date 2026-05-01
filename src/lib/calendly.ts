// Replace this with your actual Calendly scheduling link.
// e.g. 'https://calendly.com/yourname/30min'
const CALENDLY_URL = 'https://calendly.com/paulpatan22/30min';

export function openCalendly(e?: React.MouseEvent) {
  e?.preventDefault();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL });
}
