import React from 'react';
import { Mail } from 'lucide-react';
import { personal } from '../data/portfolio';

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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.049-.935-1.758-2.09-1.964-2.443-.206-.352-.022-.542.128-.692.136-.135.301-.352.452-.527.15-.175.2-.3.301-.502.101-.201.05-.376-.025-.526-.075-.151-.678-1.635-.929-2.239-.245-.588-.493-.508-.678-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.424h-.007a9.88 9.88 0 0 1-5.032-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.004-5.459 4.446-9.9 9.909-9.9 2.644.001 5.129 1.03 6.994 2.898a9.825 9.825 0 0 1 2.893 6.994c-.004 5.46-4.446 9.901-9.899 9.901zm8.413-18.313A11.82 11.82 0 0 0 12.005 0C5.395 0 .02 5.375.016 11.986a11.95 11.95 0 0 0 1.83 6.353L0 24l5.803-1.522a11.87 11.87 0 0 0 6.2 1.72h.005c6.61 0 11.986-5.376 11.99-11.988a11.89 11.89 0 0 0-3.513-8.498z"/>
  </svg>
);

const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Skills', href: '#skills' },
  { label: 'Community', href: '#community' },
  { label: 'GitHub Contributions', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white pt-14 pb-8">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              aria-label="Home"
              className="inline-flex items-center mb-4 group transition-transform hover:scale-105"
            >
              <img
                src="/favicon.png"
                alt="Rishav Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
              />
            </a>
            <p className="text-[13px] text-white/40 leading-relaxed mb-4">
              {personal.tagline}
            </p>
            <p className="text-[13px] text-white/30">
              {personal.destination}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {footerNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] text-white/55 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-4">Connect</p>
            <div className="space-y-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[13px] text-white/55 hover:text-primary transition-colors"
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[13px] text-white/55 hover:text-primary transition-colors"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[13px] text-white/55 hover:text-green-400 transition-colors"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-[13px] text-white/55 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/25">
            © 2026 {personal.fullName}
          </p>
          <p className="text-[12px] text-white/25 italic text-center">
            Built with curiosity, too many bugs, and a lot of debugging.
          </p>
        </div>

      </div>
    </footer>
  );
};
