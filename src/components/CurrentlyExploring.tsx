import React from 'react';
import { currentlyExploring } from '../data/portfolio';

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const CurrentlyExploring: React.FC = () => {
  return (
    <section id="exploring" className="py-20 md:py-28 scroll-mt-16 bg-surface/20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
            {currentlyExploring.headline}
          </span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="text-[32px] sm:text-[38px] font-black tracking-[-0.03em] text-ink leading-tight">
            {currentlyExploring.headline}
          </h2>
          {/* Honest framing badge */}
          <div className="hidden sm:flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Actively Learning
          </div>
        </div>

        <p className="text-[15px] text-ink/60 max-w-[540px] leading-relaxed mb-12">
          {currentlyExploring.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyExploring.cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-7 border border-surface hover:border-primary/30 hover:shadow-[0_8px_30px_-6px_rgba(116,180,217,0.10)] transition-all group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  {card.icon === 'globe' ? <GlobeIcon /> : <LinkIcon />}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {card.status}
                </span>
              </div>

              <h3 className="text-[20px] font-bold text-ink mb-3">{card.title}</h3>
              <p className="text-[13.5px] text-ink/65 leading-relaxed mb-6">{card.description}</p>

              {/* Topics */}
              <div>
                <p className="text-[10.5px] font-bold text-ink/40 uppercase tracking-widest mb-3">
                  Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-[11.5px] font-medium text-ink/70 bg-surface border border-surface px-3 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Honest disclaimer */}
              <p className="text-[11.5px] text-ink/35 italic mt-6 pt-4 border-t border-surface">
                Learning and experimenting — not yet production experience.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
