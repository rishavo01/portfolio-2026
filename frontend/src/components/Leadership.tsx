import React from 'react';
import { leadership } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

const typeColors: Record<string, string> = {
  'Hackathon':         'bg-primary/10 text-primary border-primary/20',
  'Tech Community':    'bg-blue-50 text-blue-600 border-blue-200',
  'National Festival': 'bg-amber-50 text-amber-700 border-amber-200',
};

export const Leadership: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.85 });

  return (
    <section id="community" ref={sectionRef} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Leadership & Community</span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[32px] sm:text-[38px] font-black tracking-[-0.03em] text-ink leading-tight">
            {leadership.headline}
          </h2>
        </div>

        <p className="text-[15px] text-ink/60 max-w-[560px] mb-12 leading-relaxed">
          {leadership.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.events.map((event) => {
            const typeStyle = typeColors[event.type] ?? 'bg-surface text-ink border-surface';
            return (
              <SpotlightCard
                key={event.title}
                className="bg-white rounded-2xl p-6 border border-surface hover:border-primary/40 hover:shadow-[0_8px_30px_-6px_rgba(22,58,95,0.10)] transition-all flex flex-col"
              >
                {/* Type badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-[10.5px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border ${typeStyle}`}
                  >
                    {event.type}
                  </span>
                  <span className="text-[11px] text-ink/40 font-medium">{event.role}</span>
                </div>

                <h3 className="text-[18px] font-bold text-ink mb-3 leading-snug">{event.title}</h3>
                <p className="text-[13px] text-ink/60 leading-relaxed mb-5">{event.description}</p>

                {/* Highlight */}
                <div className="bg-surface/50 rounded-xl p-3.5 mb-5 border border-surface">
                  <p className="text-[12px] text-ink/60 italic leading-relaxed">"{event.highlight}"</p>
                </div>

                {/* What I learned */}
                <div className="mt-auto">
                  <p className="text-[10.5px] font-bold text-ink/40 uppercase tracking-widest mb-2.5">
                    {event.type === 'Hackathon' ? 'What I learned' : 'Topics explored'}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {event.learned.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] text-ink/65 bg-surface border border-surface px-2.5 py-1 rounded-full group-hover:border-primary/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
