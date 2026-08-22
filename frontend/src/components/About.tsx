import React from 'react';
import { about } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

export const About: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.9 });

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">About</span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Headline + story */}
          <div className="lg:col-span-5">
            <h2 className="text-[36px] sm:text-[42px] font-black tracking-[-0.03em] text-ink leading-[1.08] mb-6">
              I learn<br />
              <span className="text-primary">by building.</span>
            </h2>

            <p className="text-[15px] text-ink/70 leading-relaxed mb-5">
              I'm Rishav — a student developer, builder, and founder from Nepal.
            </p>
            <p className="text-[15px] text-ink/70 leading-relaxed mb-5">
              I started with programming fundamentals and gradually moved into backend development,
              full-stack applications, deployment, AI, and DevOps through building real software.
            </p>
            <p className="text-[15px] text-ink/70 leading-relaxed mb-8">
              Today, I'm also building MeroPharma, exploring Web3 and blockchain, and continuing to deepen my understanding of software engineering.
            </p>

            {/* Philosophy callout */}
            <blockquote className="border-l-2 border-primary pl-5 py-1">
              <p className="text-[18px] font-semibold text-ink leading-snug italic">
                "{about.philosophy}"
              </p>
            </blockquote>
          </div>

          {/* Right: Pillars + motif */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* 3 pillars with Spotlight card glow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.pillars.map((pillar) => (
                <SpotlightCard
                  key={pillar.label}
                  className="bg-white rounded-2xl p-5 border border-surface hover:border-primary/40 hover:shadow-[0_4px_20px_-4px_rgba(116,180,217,0.15)] transition-all"
                >
                  <p className="text-[11px] font-bold text-primary uppercase tracking-[0.12em] mb-2">
                    {pillar.label}
                  </p>
                  <h3 className="text-[15px] font-bold text-ink mb-1.5">{pillar.title}</h3>
                  <p className="text-[12.5px] text-ink/65 leading-relaxed">{pillar.desc}</p>
                </SpotlightCard>
              ))}
            </div>

            {/* Loop motif */}
            <div className="bg-surface/40 rounded-2xl p-6 border border-surface">
              <p className="text-[11.5px] font-bold text-ink/50 uppercase tracking-widest mb-4">
                How I grow
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {about.motif.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="text-[13px] font-semibold text-ink bg-white px-3 py-1.5 rounded-full border border-surface shadow-2xs hover:border-primary/40 hover:scale-105 transition-all">
                      {step}
                    </span>
                    {idx < about.motif.length - 1 && (
                      <span className="text-primary text-[12px] font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Tech exploration */}
            <div>
              <p className="text-[11.5px] font-bold text-ink/50 uppercase tracking-widest mb-3">
                Technologies I've explored
              </p>
              <div className="flex flex-wrap gap-2">
                {about.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] text-ink/75 bg-white border border-surface px-3 py-1 rounded-full hover:border-primary/40 hover:text-primary transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
