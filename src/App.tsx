import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesClients } from './components/ServicesClients';
import { Experience } from './components/Experience';
import { PricingProcess } from './components/PricingProcess';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    // On a cold load with a URL hash (e.g. /#projects), the target section
    // isn't in the DOM yet when the browser attempts its native fragment
    // scroll, so it either misses or lands under the sticky header. Redo it
    // once the app has mounted.
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink font-['Inter',sans-serif] selection:bg-primary/20 selection:text-ink">
      {/* 1. Header */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Projects */}
        <FeaturedProjects />

        {/* 4. Services + Trusted Clients */}
        <ServicesClients />

        {/* 5. Experience & Leadership */}
        <Experience />

        {/* 6. Pricing + Design Process */}
        <PricingProcess />

        {/* 7. Contact CTA */}
        <ContactCTA />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
