import React from 'react';
import { Check } from 'lucide-react';
import { focusAreas, process } from '../data/portfolio';

export const PricingProcess: React.FC = () => {
  return (
    <section id="pricing" className="py-12 md:py-16 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Left: 3 Focus Cards */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h2 className="text-xl font-bold text-ink mb-1 tracking-tight">
              My Focus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5 pt-4">
              {focusAreas.map((area) => (
                <div
                  key={area.label}
                  className={`relative bg-white rounded-2xl p-5 flex flex-col justify-between transition-all ${
                    area.highlighted
                      ? 'border-2 border-primary shadow-[0_8px_30px_rgba(47,75,110,0.12)]'
                      : 'border border-surface shadow-[0_4px_20px_-4px_rgba(17,24,39,0.03)]'
                  }`}
                >
                  {/* Badge */}
                  {area.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-semibold px-3 py-0.5 rounded-full shadow-xs tracking-wide whitespace-nowrap">
                      {area.badge}
                    </div>
                  )}

                  <div>
                    <p className="text-[11px] font-bold text-primary tracking-widest mb-1">{area.label}</p>
                    <h3 className="text-[15px] font-bold text-ink mb-4">{area.title}</h3>

                    <ul className="space-y-2.5 mb-6">
                      {area.items.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-[12px] text-[#4B5563]">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className={`w-full py-2 rounded-full text-[12.5px] font-medium text-center transition-all block ${
                      area.highlighted
                        ? 'bg-primary hover:bg-accent text-white shadow-xs'
                        : 'bg-white hover:bg-background-soft text-primary border border-primary'
                    }`}
                  >
                    Let's Connect
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Development Process Timeline */}
          <div id="process" className="lg:col-span-5 xl:col-span-4 pl-0 lg:pl-4 scroll-mt-20">
            <h2 className="text-xl font-bold text-ink mb-7 tracking-tight">
              My Development Process
            </h2>

            <div className="relative pl-6 space-y-6">
              {/* Continuous vertical line */}
              <div className="absolute left-[35px] top-4 bottom-6 w-[1.5px] bg-surface"></div>

              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative flex items-start gap-4 group">
                    {/* Circle Node */}
                    <div className="relative z-10 w-9 h-9 rounded-full bg-background-soft border border-surface flex items-center justify-center text-primary shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Step Text */}
                    <div className="pt-0.5">
                      <h3 className="text-[14px] font-bold text-primary">
                        {step.number}
                      </h3>
                      <p className="text-[12px] text-ink leading-relaxed mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
