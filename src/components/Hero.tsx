import React from 'react';
import { ArrowRight, Download, Sparkles, Cpu } from 'lucide-react';
import { hero } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden scroll-mt-20">
      {/* Background Circuit Traces Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute right-0 top-0 w-3/5 h-full opacity-35 text-accent"
          viewBox="0 0 700 500"
          fill="none"
        >
          {/* Circuit Lines */}
          <path
            d="M 250,40 L 450,40 L 500,80 L 680,80"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <circle cx="250" cy="40" r="3" fill="currentColor" />
          <circle cx="500" cy="80" r="3" fill="currentColor" />
          <circle cx="680" cy="80" r="3.5" fill="currentColor" />

          <path
            d="M 380,120 L 520,120 L 570,170 L 690,170"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="380" cy="120" r="2.5" fill="currentColor" />
          <circle cx="570" cy="170" r="2.5" fill="currentColor" />

          <path
            d="M 450,220 L 560,220 L 610,270 L 700,270"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle cx="450" cy="220" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Intro & Headline (doubles as the About anchor) */}
          <div id="about" className="lg:col-span-6 flex flex-col justify-center pt-2 scroll-mt-20">
            {/* Hi Badge */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="text-[#64748B] text-[14.5px] font-medium tracking-wide">
                {hero.greeting}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-[-0.03em] text-ink leading-[1.08] mb-4.5">
              {hero.headline.line1}<br />
              {hero.headline.line2}<br />
              <span className="text-primary">{hero.headline.highlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#64748B] text-[14.5px] leading-relaxed max-w-[460px] mb-7 font-normal">
              {hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white text-[13.5px] font-medium px-6 py-2.5 rounded-full shadow-xs transition-all"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-background-soft text-primary text-[13.5px] font-medium px-5 py-2.5 rounded-full border border-primary transition-all shadow-2xs"
              >
                <span>{hero.secondaryCta.label}</span>
                <Download className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>

            {/* Credibility */}
            <div className="flex items-center gap-3.5">
              <div className="flex -space-x-2.5 overflow-hidden">
                {hero.credibility.icons.map((Icon, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-background-soft text-primary"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                ))}
              </div>

              <div className="text-left leading-tight">
                <p className="text-[13px] font-bold text-ink">{hero.credibility.line1}</p>
                <p className="text-[11.5px] text-[#64748B]">{hero.credibility.line2}</p>
              </div>

              {/* Sparkle */}
              <div className="text-accent ml-1">
                <Sparkles className="w-3.5 h-3.5 fill-accent" />
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[520px]">
            
            {/* Blue Palette Circular Backdrop */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full bg-gradient-to-tr from-background-soft via-surface/60 to-accent-soft/30 z-0"></div>

            {/* Futuristic AI Head in Background Right */}
            <div className="absolute -right-6 sm:-right-10 top-1/2 -translate-y-1/2 w-[260px] sm:w-[300px] opacity-20 z-0 pointer-events-none mix-blend-multiply filter contrast-100">
              <img
                src="/assets/ai_head_profile.jpg"
                alt="AI background element"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Subtle Circuit Overlay Rings */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
              viewBox="0 0 500 500"
              fill="none"
            >
              <circle cx="250" cy="250" r="225" stroke="#6FA6D6" strokeWidth="0.8" strokeDasharray="3 4" />
              <circle cx="250" cy="250" r="195" stroke="#A9C8E8" strokeWidth="0.5" />
            </svg>

            {/* Central Portrait */}
            <div className="relative z-10 w-[300px] sm:w-[350px] lg:w-[380px] flex justify-center">
              <img
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            {/* Floating Card 1: AI-Assisted Dev (Top Right) */}
            <div className="absolute top-4 right-1 sm:right-4 bg-white/95 backdrop-blur-xs rounded-xl p-3 sm:p-3.5 border border-surface shadow-[0_10px_25px_-5px_rgba(17,24,39,0.06)] z-20 max-w-[200px] sm:max-w-[215px]">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-background-soft flex items-center justify-center text-primary">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[12.5px] font-semibold text-ink">{hero.aiCard.title}</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              </div>
              <p className="text-[10.5px] text-[#6B7280] leading-tight">
                {hero.aiCard.text}
              </p>
            </div>

            {/* Floating Card 2: Stat (Bottom Right) */}
            <div className="absolute bottom-8 right-0 sm:right-2 bg-white/95 backdrop-blur-xs rounded-xl p-3.5 border border-surface shadow-[0_10px_25px_-5px_rgba(17,24,39,0.06)] z-20 min-w-[115px] text-left">
              <div className="text-2xl sm:text-3xl font-black text-primary leading-none mb-1">
                {hero.statCard.value}
              </div>
              <p className="text-[11px] font-medium text-[#6B7280] leading-tight">
                {hero.statCard.label}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
