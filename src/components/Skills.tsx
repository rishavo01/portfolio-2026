import React from 'react';
import { skills } from '../data/portfolio';

const categoryAccents: Record<string, { label: string; border: string; dot: string }> = {
  BUILD:       { label: 'text-primary',     border: 'border-primary/20',  dot: 'bg-primary' },
  DATA:        { label: 'text-green-600',   border: 'border-green-200',   dot: 'bg-green-500' },
  ENGINEERING: { label: 'text-slate-600',   border: 'border-slate-200',   dot: 'bg-slate-500' },
  EXPLORING:   { label: 'text-amber-600',   border: 'border-amber-200',   dot: 'bg-amber-500' },
};

const tagBg: Record<string, string> = {
  BUILD:       'bg-primary/5 border-primary/15 text-primary/80 hover:bg-primary/10',
  DATA:        'bg-green-50 border-green-200 text-green-700 hover:bg-green-100',
  ENGINEERING: 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100',
  EXPLORING:   'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100',
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 scroll-mt-16 bg-surface/20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Skills</span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[32px] sm:text-[38px] font-black tracking-[-0.03em] text-ink leading-tight">
            What I work with
          </h2>
          <p className="hidden sm:block text-[13px] text-ink/45 max-w-[200px] text-right leading-relaxed">
            No percentages. Just honest categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group) => {
            const accent = categoryAccents[group.category];
            const tags = tagBg[group.category];
            return (
              <div
                key={group.category}
                className={`bg-white rounded-2xl p-6 border ${accent.border} hover:shadow-[0_8px_24px_-6px_rgba(22,58,95,0.07)] transition-all`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                  <p className={`text-[11px] font-black uppercase tracking-[0.15em] ${accent.label}`}>
                    {group.category}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-[12px] font-medium px-3 py-1 rounded-full border transition-colors cursor-default ${tags}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest note */}
        <div className="mt-10 text-center">
          <p className="text-[13px] text-ink/40 italic">
            Skills aren't percentages. These are technologies I've used to build real things.
          </p>
        </div>

      </div>
    </section>
  );
};
