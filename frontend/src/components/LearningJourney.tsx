import React from 'react';
import { learningJourney } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

export const LearningJourney: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.85 });

  return (
    <section id="learning" ref={sectionRef} className="py-20 md:py-28 bg-ink scroll-mt-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
            {learningJourney.title}
          </span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Heading + philosophy */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-[32px] sm:text-[40px] font-black tracking-[-0.03em] text-white leading-[1.08] mb-6">
              A structured challenge<br />
              to learn backend<br />
              <span className="text-primary">from the ground up.</span>
            </h2>

            <p className="text-[14.5px] text-white/60 leading-relaxed mb-8 max-w-[400px]">
              {learningJourney.subtitle}
            </p>

            {/* Philosophy card */}
            <SpotlightCard
              spotlightColor="rgba(116, 180, 217, 0.2)"
              borderColor="rgba(116, 180, 217, 0.4)"
              className="bg-primary/10 border border-primary/25 rounded-2xl p-6 hover:shadow-[0_8px_30px_-6px_rgba(116,180,217,0.2)] transition-all"
            >
              <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">Key Philosophy</p>
              <p className="text-[22px] font-bold text-white leading-tight">
                "{learningJourney.philosophy}"
              </p>
            </SpotlightCard>
          </div>

          {/* Right: Numbered steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningJourney.steps.map((step, idx) => (
              <SpotlightCard
                key={step.number}
                spotlightColor="rgba(116, 180, 217, 0.15)"
                borderColor="rgba(116, 180, 217, 0.3)"
                className={`group relative rounded-2xl p-5 border transition-all duration-300 ${
                  idx === 0
                    ? 'border-primary/40 bg-primary/8 hover:bg-primary/12'
                    : 'border-white/8 bg-white/4 hover:border-primary/30 hover:bg-white/8'
                }`}
              >
                {/* Number */}
                <span className="text-[11px] font-black text-primary/70 tracking-widest mb-3 block group-hover:text-primary transition-colors">
                  {step.number}
                </span>
                <h3 className="text-[15px] font-bold text-white mb-1.5 leading-snug">
                  {step.label}
                </h3>
                <p className="text-[12px] text-white/45 leading-relaxed">
                  {step.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
