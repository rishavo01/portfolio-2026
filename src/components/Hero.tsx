import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { hero, personal } from '../data/portfolio';
import { gsap } from '../lib/gsap';
import { MagneticButton } from './ui/MagneticButton';
import { ParticleBackground } from './ui/ParticleBackground';
import { ShimmerBadge } from './ui/ShimmerBadge';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.301-.778.979-.954 1.18-.176.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.49-1.049-.935-1.758-2.09-1.964-2.443-.206-.352-.022-.542.128-.692.136-.135.301-.352.452-.527.15-.175.2-.3.301-.502.101-.201.05-.376-.025-.526-.075-.151-.678-1.635-.929-2.239-.245-.588-.493-.508-.678-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.424h-.007a9.88 9.88 0 0 1-5.032-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.004-5.459 4.446-9.9 9.909-9.9 2.644.001 5.129 1.03 6.994 2.898a9.825 9.825 0 0 1 2.893 6.994c-.004 5.46-4.446 9.901-9.899 9.901zm8.413-18.313A11.82 11.82 0 0 0 12.005 0C5.395 0 .02 5.375.016 11.986a11.95 11.95 0 0 0 1.83 6.353L0 24l5.803-1.522a11.87 11.87 0 0 0 6.2 1.72h.005c6.61 0 11.986-5.376 11.99-11.988a11.89 11.89 0 0 0-3.513-8.498z"/>
  </svg>
);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.4'
        )
        .fromTo(
          textRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          socialRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.3'
        )
        .fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.94, y: 25 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.8'
        );

      // Subtle ambient float on portrait
      gsap.to(portraitRef.current, {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden scroll-mt-16"
    >
      {/* Interactive Particle Constellation */}
      <ParticleBackground quantity={30} />

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #A9D6EE 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.18,
        }}
      />

      {/* Soft gradient wash */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-surface/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div id="about-anchor" className="flex flex-col justify-center">

            {/* Tagline shimmer pill */}
            <div ref={badgeRef} className="mb-6 self-start">
              <ShimmerBadge>
                <span className="text-[12.5px] font-semibold text-ink tracking-wide uppercase">
                  {hero.greeting}
                </span>
              </ShimmerBadge>
            </div>

            {/* Main headline */}
            <h1
              ref={headlineRef}
              className="text-[38px] sm:text-[46px] lg:text-[52px] font-black tracking-[-0.03em] text-ink leading-[1.06] mb-6"
            >
              I build software to{' '}
              <em className="not-italic text-primary">understand</em>{' '}
              how technology works —<br className="hidden sm:block" />
              then{' '}
              <em
                className="not-italic"
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: '#A9D6EE',
                  textDecorationThickness: '3px',
                  textUnderlineOffset: '5px',
                }}
              >
                share
              </em>{' '}
              what I learn.
            </h1>

            {/* Subtitle */}
            <p ref={textRef} className="text-[15px] text-ink/65 leading-relaxed max-w-[480px] mb-8">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 mb-10">
              <MagneticButton strength={0.25}>
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex items-center gap-2 bg-ink text-cream text-[13.5px] font-medium px-6 py-2.5 rounded-full hover:bg-primary transition-all shadow-sm group"
                >
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-transparent text-ink text-[13.5px] font-medium px-5 py-2.5 rounded-full border border-ink/20 hover:border-ink/50 hover:bg-white transition-all"
                >
                  {hero.secondaryCta.label}
                </a>
              </MagneticButton>
            </div>

            {/* Social links */}
            <div ref={socialRef} className="flex items-center gap-5">
              <span className="text-[12px] text-ink/40 uppercase tracking-widest font-medium">Find me</span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[13px] text-ink/60 hover:text-ink transition-colors"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
                <span className="w-px h-3 bg-ink/20" />
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[13px] text-ink/60 hover:text-ink transition-colors"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
                <span className="w-px h-3 bg-ink/20" />
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-1.5 text-[13px] text-ink/60 hover:text-ink transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <span className="w-px h-3 bg-ink/20" />
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[13px] text-ink/60 hover:text-green-600 transition-colors"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Portrait with editorial treatment */}
          <div
            ref={portraitRef}
            className="relative flex items-center justify-center min-h-[420px] lg:min-h-[520px]"
          >
            {/* Background accent shapes */}
            <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-br from-surface via-surface/60 to-transparent z-0" />
            <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-primary/20 z-0 animate-pulse" />
            <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full border border-primary/15 z-0" />

            {/* Portrait */}
            <div className="relative z-10 w-[280px] sm:w-[320px] lg:w-[360px]">
              <img
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating location tag */}
            <div className="absolute top-8 left-4 sm:left-0 bg-white/95 backdrop-blur-xs rounded-xl px-3.5 py-2.5 border border-surface shadow-sm z-20">
              <p className="text-[11px] text-ink/50 font-medium uppercase tracking-widest mb-0.5">Based in</p>
              <p className="text-[13px] font-bold text-ink">{personal.destination}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
