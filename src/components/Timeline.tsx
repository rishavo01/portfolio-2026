import React from 'react';
import { timeline, whereImGoing } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

export const Timeline: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.85 });

  return (
    <section id="timeline" ref={sectionRef} className="py-20 md:py-28 bg-ink scroll-mt-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left: Growth Timeline */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Timeline</span>
              <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
            </div>

            <h2 className="text-[30px] sm:text-[36px] font-black tracking-[-0.03em] text-white leading-tight mb-12">
              How I got here.
            </h2>

            {/* Timeline items */}
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-primary/40 to-primary" />

              <div className="space-y-7">
                {timeline.map((item, idx) => {
                  const isLast = idx === timeline.length - 1;
                  return (
                    <div key={item.label} className="relative flex items-start gap-4 group">
                      {/* Node */}
                      <div
                        className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-transform group-hover:scale-125 duration-200 ${
                          isLast
                            ? 'bg-primary border-primary shadow-[0_0_8px_rgba(116,180,217,0.8)]'
                            : 'bg-ink border-white/30 group-hover:border-primary'
                        }`}
                      />
                      {/* Content */}
                      <div className={`pl-5 transition-opacity ${isLast ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                        <p
                          className={`text-[14px] font-bold mb-0.5 ${
                            isLast ? 'text-primary' : 'text-white'
                          }`}
                        >
                          {item.label}
                        </p>
                        <p className="text-[12.5px] text-white/45 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Where I'm Going */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Direction</span>
              <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
            </div>

            <h2 className="text-[30px] sm:text-[36px] font-black tracking-[-0.03em] text-white leading-tight mb-6">
              {whereImGoing.headline}
            </h2>

            <p className="text-[15px] text-white/55 leading-relaxed mb-8 max-w-[420px]">
              {whereImGoing.body}
            </p>

            {/* Directions with SpotlightCard */}
            <div className="space-y-3">
              {whereImGoing.directions.map((dir, idx) => (
                <SpotlightCard
                  key={dir}
                  spotlightColor="rgba(116, 180, 217, 0.15)"
                  borderColor="rgba(116, 180, 217, 0.3)"
                  className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-3.5 hover:bg-white/8 hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-[11px] font-bold text-primary/60 w-5 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[14px] font-semibold text-white/80">{dir}</span>
                </SpotlightCard>
              ))}
            </div>

            {/* Honesty note */}
            <div className="mt-8 border-t border-white/8 pt-6">
              <p className="text-[13px] text-white/30 italic leading-relaxed">
                Still growing. Still exploring. Deliberately choosing depth over breadth.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
