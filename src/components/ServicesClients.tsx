import React from 'react';
import { services, technologies } from '../data/portfolio';

export const ServicesClients: React.FC = () => {
  return (
    <section id="services" className="py-8 md:py-12 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Container: Services I Offer */}
          <div className="lg:col-span-7 bg-background-soft rounded-2xl p-6 sm:p-7 border border-surface flex flex-col justify-between">
            <div>
              <h2 className="text-[19px] font-bold text-ink mb-5 tracking-tight">
                What I Work On
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-3.5 border border-surface shadow-[0_2px_8px_rgba(17,24,39,0.03)] hover:border-accent hover:bg-white transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-7 h-7 rounded-lg bg-background-soft flex items-center justify-center text-primary mb-3">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-[13px] font-bold text-ink mb-1">
                          {service.title}
                        </h3>
                        <p className="text-[11px] text-[#6B7280] leading-relaxed font-normal">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Container: Technologies I Work With */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-surface shadow-[0_4px_20px_-4px_rgba(17,24,39,0.03)] flex flex-col justify-between">
            <div>
              <h2 className="text-[19px] font-bold text-ink mb-6 tracking-tight">
                Technologies I Work With
              </h2>

              {/* Tech Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-3 gap-x-3 items-center justify-items-stretch">
                {technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 text-primary bg-background-soft border border-surface hover:bg-surface rounded-full px-2.5 py-1.5 transition-colors"
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                      <span className="font-medium text-[12px] tracking-tight">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
