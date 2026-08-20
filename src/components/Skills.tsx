import React from 'react';
import { Code2, Database, Settings2, Compass } from 'lucide-react';
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

const categoryAccents: Record<string, { label: string; border: string; iconBg: string; glow: string }> = {
  BUILD:       { label: 'text-primary',     border: 'border-primary/20',  iconBg: 'bg-primary/10',  glow: 'rgba(116, 180, 217, 0.15)' },
  DATA:        { label: 'text-green-600',   border: 'border-green-200',   iconBg: 'bg-green-50',    glow: 'rgba(34, 197, 94, 0.15)' },
  ENGINEERING: { label: 'text-slate-600',   border: 'border-slate-200',   iconBg: 'bg-slate-50',    glow: 'rgba(100, 116, 139, 0.15)' },
  EXPLORING:   { label: 'text-amber-600',   border: 'border-amber-200',   iconBg: 'bg-amber-50',    glow: 'rgba(245, 158, 11, 0.15)' },
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  BUILD: Code2,
  DATA: Database,
  ENGINEERING: Settings2,
  EXPLORING: Compass,
};

const tagBg: Record<string, string> = {
  BUILD:       'bg-primary/5 border-primary/15 text-primary/80 hover:bg-primary/10 hover:border-primary/30',
  DATA:        'bg-green-50 border-green-200 text-green-700 hover:bg-green-100',
  ENGINEERING: 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100',
  EXPLORING:   'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100',
};

export const Skills: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.85 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 scroll-mt-16 bg-surface/20">
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
            const Icon = categoryIcons[group.category];
            return (
              <SpotlightCard
                key={group.category}
                spotlightColor={accent.glow}
                className={`group bg-white rounded-2xl p-6 border ${accent.border} hover:shadow-[0_10px_32px_-8px_rgba(22,58,95,0.12)] hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl border ${accent.border} ${accent.iconBg} ${accent.label} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className={`text-[11px] font-black uppercase tracking-[0.15em] ${accent.label}`}>
                      {group.category}
                    </p>
                    <p className="text-[11px] text-ink/35 font-medium mt-0.5">
                      {group.items.length} {group.items.length === 1 ? 'skill' : 'skills'}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-[12px] font-medium px-3 py-1 rounded-full border transition-all cursor-default hover:scale-105 ${tags}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
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
