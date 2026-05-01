import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

export function initSmoothScroll() {
  if (lenis) return lenis;

  gsap.registerPlugin(ScrollTrigger);

  const instance = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
  });

  instance.on('scroll', ScrollTrigger.update);

  // Capture the local instance in the closure so a later destroy()
  // doesn't leave the ticker dereferencing a nulled module-level ref.
  let alive = true;
  tickerCallback = (time: number) => {
    if (!alive) return;
    instance.raf(time * 1000);
  };
  // Disarm flag is set in destroy via the closure-bound ref below.
  (instance as unknown as { __disarm: () => void }).__disarm = () => {
    alive = false;
  };
  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  lenis = instance;

  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    (window as unknown as { __lenis?: Lenis }).__lenis = instance;
  }

  // Recalculate ScrollTrigger positions once Lenis is wired and after layout settles.
  // Without this, triggers registered before Lenis attaches can stay "pre-fire" if the
  // page lands past their start point.
  requestAnimationFrame(() => ScrollTrigger.refresh());
  setTimeout(() => ScrollTrigger.refresh(), 250);

  return lenis;
}

export function destroySmoothScroll() {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
  if (lenis) {
    (lenis as unknown as { __disarm?: () => void }).__disarm?.();
    lenis.destroy();
  }
  lenis = null;
}
