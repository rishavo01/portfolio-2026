import React from 'react';
import { experience } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

export const Experience: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.85 });

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Experience</span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <h2 className="text-[32px] sm:text-[38px] font-black tracking-[-0.03em] text-ink leading-tight mb-4">
          {experience.headline}
        </h2>
        <p className="text-[15px] text-ink/60 max-w-[560px] mb-14 leading-relaxed">
          {experience.subtitle}
        </p>

        {/* Vertical timeline */}
        <div className="relative pl-8 sm:pl-10 max-w-[760px]">
          <div className="absolute left-[11px] sm:left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-surface via-primary/30 to-primary" />

          <div className="space-y-8">
            {experience.entries.map((entry) => {
              const isCurrent = !!entry.current;
              return (
                <div key={entry.number} className="relative">
                  {/* Node */}
                  <div className="absolute -left-8 sm:-left-10 top-7 w-[23px] sm:w-[27px] flex justify-center">
                    <span
                      className={`w-3 h-3 rounded-full border-2 ${
                        isCurrent
                          ? 'bg-primary border-primary shadow-[0_0_0_4px_rgba(116,180,217,0.18)]'
                          : 'bg-cream border-primary/40'
                      }`}
                    />
                  </div>

                  <SpotlightCard
                    className={`rounded-2xl border p-6 sm:p-7 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-white border-primary/40 shadow-[0_10px_36px_-8px_rgba(22,58,95,0.14)]'
                        : 'bg-white border-surface hover:border-primary/30 hover:shadow-[0_6px_24px_-6px_rgba(22,58,95,0.08)]'
                    }`}
                  >
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 mb-3">
                      <span className="text-[11px] font-black text-primary/60 tabular-nums">{entry.number}</span>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
                          isCurrent ? 'text-primary' : 'text-ink/50'
                        }`}
                      >
                        {entry.eyebrow}
                      </span>
                    </div>

                    <h3
                      className={`font-bold text-ink mb-1.5 leading-snug ${
                        isCurrent ? 'text-[20px] sm:text-[22px]' : 'text-[17px] sm:text-[18px]'
                      }`}
                    >
                      {entry.title}
                    </h3>

                    {(entry.type || entry.dateRange || entry.duration || entry.location) && (
                      <p className="text-[11.5px] text-ink/45 font-medium mb-4">
                        {[entry.type, entry.dateRange, entry.duration, entry.location].filter(Boolean).join(' · ')}
                      </p>
                    )}

                    <p className={`text-[13.5px] text-ink/65 leading-relaxed max-w-[540px] ${entry.description2 ? 'mb-3' : 'mb-5'}`}>
                      {entry.description}
                    </p>

                    {entry.description2 && (
                      <p className="text-[13.5px] text-ink/65 leading-relaxed mb-5 max-w-[540px]">
                        {entry.description2}
                      </p>
                    )}

                    {entry.highlight && (
                      <p className="text-[13px] text-primary/90 font-medium italic mb-5 border-l-2 border-primary/30 pl-3">
                        {entry.highlight}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {entry.focus.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] text-ink/65 bg-surface border border-surface px-2.5 py-1 rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
