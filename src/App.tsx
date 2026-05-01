import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { FeatureScroll } from './components/FeatureScroll';
import { Capabilities } from './components/Capabilities';
import { Patient } from './components/Patient';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { initSmoothScroll, destroySmoothScroll } from './lib/lenis';

export default function App() {
  useEffect(() => {
    initSmoothScroll();
    return () => destroySmoothScroll();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <FeatureScroll />
        <Capabilities />
        <Patient />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
