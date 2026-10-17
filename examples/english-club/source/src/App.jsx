import { useEffect } from 'react';
import AboutSection from './components/AboutSection';
import CommunityCta from './components/CommunityCta';
import EventsSection from './components/EventsSection';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TopicsSection from './components/TopicsSection';

export default function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');
    if (reducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-ivory text-navy">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <FeatureGrid />
        <AboutSection />
        <EventsSection />
        <TopicsSection />
        <HowItWorks />
        <CommunityCta />
      </main>
      <Footer />
    </div>
  );
}
