import React from 'react';
import { experience } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-16 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section Heading */}
        <h2 className="text-xl sm:text-[22px] font-bold text-primary mb-7 tracking-tight">
          Experience & Leadership
        </h2>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-surface shadow-[0_4px_20px_-4px_rgba(17,24,39,0.03)] hover:border-accent transition-all flex flex-col"
              >
                <div className="w-9 h-9 rounded-lg bg-background-soft flex items-center justify-center text-accent mb-4">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-[14px] font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-ink leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
