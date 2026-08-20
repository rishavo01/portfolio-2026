import React, { useEffect, useState } from 'react';
import { Send, Menu, X } from 'lucide-react';
import { personal } from '../data/portfolio';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
];

const HEADER_OFFSET = 90;

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + HEADER_OFFSET;
      let current = navLinks[0].href.slice(1);

      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1));
        if (el) {
          const docTop = el.getBoundingClientRect().top + window.scrollY;
          if (docTop <= scrollPos) {
            current = link.href.slice(1);
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-ink flex items-baseline gap-0.5">
          <span>{personal.brandName}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13.5px] transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-primary font-medium'
                  : 'text-ink hover:text-accent font-normal'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-primary hover:bg-accent text-white text-[13px] font-medium px-4 py-2 rounded-full border border-primary hover:border-accent transition-all shadow-2xs"
          >
            <span>Let's Talk</span>
            <Send className="w-3 h-3 text-white -rotate-45" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-surface px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm py-1 ${
                activeSection === link.href.slice(1) ? 'text-primary font-medium' : 'text-ink hover:text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 w-full bg-primary hover:bg-accent text-white text-sm font-medium py-2 rounded-full border border-primary hover:border-accent mt-2 transition-all"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5 -rotate-45" />
          </a>
        </div>
      )}
    </header>
  );
};
