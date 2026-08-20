import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { GitHubContributions } from './components/GitHubContributions';
import { Teaching } from './components/Teaching';
import { Skills } from './components/Skills';
import { Leadership } from './components/Leadership';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
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
    <div className="min-h-screen bg-cream text-ink selection:bg-primary/30 selection:text-ink">
      {/* Navigation */}
      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Projects */}
        <Projects />

        {/* 4. Learning Journey */}
        <LearningJourney />

        {/* 5. Currently Exploring — Web3 & Blockchain */}
        <CurrentlyExploring />

        {/* 6. GitHub Contributions */}
        <GitHubContributions />

        {/* 7. Teaching */}
        <Teaching />

        {/* 8. Skills */}
        <Skills />

        {/* 9. Leadership & Community */}
        <Leadership />

        {/* 10. Timeline + Where I'm Going */}
        <Timeline />

        {/* 11. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
