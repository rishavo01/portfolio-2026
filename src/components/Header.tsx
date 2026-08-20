import React, { useEffect, useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { personal } from '../data/portfolio';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Learning', href: '#learning' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Skills', href: '#skills' },
  { name: 'Community', href: '#community' },
];

const HEADER_OFFSET = 80;

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + HEADER_OFFSET;
      let current = 'home';
      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1));
        if (el) {
          const docTop = el.getBoundingClientRect().top + window.scrollY;
          if (docTop <= scrollPos) current = link.href.slice(1);
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-surface shadow-[0_1px_12px_rgba(22,58,95,0.04)]'
          : 'bg-cream/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-1.5 group">
          <span className="text-[17px] font-bold tracking-tight text-ink group-hover:text-primary transition-colors">
            {personal.firstName}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] px-3 py-1.5 rounded-full transition-all ${
                activeSection === link.href.slice(1)
                  ? 'text-primary font-medium bg-primary/8'
                  : 'text-ink/70 hover:text-ink hover:bg-ink/5 font-normal'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Social icons + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-ink/50 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
          >
            <GithubIcon />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-ink/50 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-2 text-ink/50 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-1.5 bg-ink text-cream text-[12.5px] font-medium px-4 py-2 rounded-full hover:bg-primary transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink rounded-full hover:bg-ink/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-surface px-6 py-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-[14px] py-2 px-3 rounded-xl transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-primary font-medium bg-primary/8'
                  : 'text-ink hover:text-primary hover:bg-ink/5'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 pt-4 px-3">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-ink/60 hover:text-ink">
              <GithubIcon />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink/60 hover:text-ink">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${personal.email}`} className="text-ink/60 hover:text-ink">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center bg-ink text-cream text-sm font-medium py-2.5 rounded-xl mt-2 hover:bg-primary transition-all"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};
