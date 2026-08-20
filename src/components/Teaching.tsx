import React from 'react';
import { teaching } from '../data/portfolio';

export const Teaching: React.FC = () => {
  return (
    <section id="teaching" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Teaching</span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Story */}
          <div className="lg:col-span-5">
            <h2 className="text-[32px] sm:text-[40px] font-black tracking-[-0.03em] text-ink leading-[1.06] mb-6">
              {teaching.headline}<br />
              <span className="text-primary">{teaching.subheadline}</span>
            </h2>

            <p className="text-[14.5px] text-ink/65 leading-relaxed mb-8">
              I studied at <strong className="text-ink font-semibold">National Ideal Boarding School</strong> until Class 10.
              Years later, I returned to the same school — this time as an instructor.
              Through Deerwalk Sifal School's Community Hours Program, I taught web development to Class 12 students at my own former school.
              That full circle mattered more than any certificate.
            </p>

            {/* Where */}
            <div className="bg-white border border-surface rounded-2xl p-5 mb-5">
              <p className="text-[11px] text-ink/40 uppercase tracking-widest font-bold mb-1">Program</p>
              <p className="text-[14px] font-semibold text-ink">{teaching.program}</p>
            </div>
            <div className="bg-white border border-surface rounded-2xl p-5">
              <p className="text-[11px] text-ink/40 uppercase tracking-widest font-bold mb-1">Where I taught</p>
              <p className="text-[14px] font-semibold text-ink">{teaching.where}</p>
              <p className="text-[12px] text-ink/50 mt-0.5">Where I also once studied</p>
            </div>
          </div>

          {/* Right: Flow + Topics + Student Projects */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Flow: STUDENT → TAUGHT */}
            <div className="bg-surface/40 border border-surface rounded-2xl p-6">
              <p className="text-[11px] font-bold text-ink/40 uppercase tracking-widest mb-5">The journey</p>
              <div className="flex flex-wrap items-center gap-3">
                {teaching.flow.map((step, idx) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center">
                      <div className={`px-4 py-2 rounded-xl text-[12.5px] font-bold tracking-wide ${
                        step === 'TAUGHT' || step === 'RETURNED'
                          ? 'bg-primary text-white'
                          : 'bg-white text-ink border border-surface'
                      }`}>
                        {step}
                      </div>
                    </div>
                    {idx < teaching.flow.length - 1 && (
                      <span className="text-primary font-bold text-lg">↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Topics taught */}
            <div className="bg-white border border-surface rounded-2xl p-6">
              <p className="text-[11px] font-bold text-ink/40 uppercase tracking-widest mb-4">Topics taught</p>
              <div className="flex flex-wrap gap-2">
                {teaching.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[12.5px] font-medium text-ink bg-surface border border-surface px-3 py-1.5 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Student projects */}
            <div>
              <p className="text-[11px] font-bold text-ink/40 uppercase tracking-widest mb-4">
                Students built
              </p>
              <div className="grid grid-cols-2 gap-3">
                {teaching.studentProjects.map((project) => (
                  <div
                    key={project}
                    className="flex items-start gap-2.5 bg-white border border-surface rounded-xl p-3.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="text-[13px] text-ink/75">{project}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
