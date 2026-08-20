import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const statusColors: Record<string, string> = {
  green: 'bg-green-50 text-green-700 border-green-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
};

const statusDots: Record<string, string> = {
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  amber: 'bg-amber-500',
};

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.85 });

  const featured = projects.find((p) => p.size === 'featured')!;
  const medium = projects.filter((p) => p.size === 'medium');
  const experimental = projects.find((p) => p.size === 'experimental')!;

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">Projects</span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[32px] sm:text-[38px] font-black tracking-[-0.03em] text-ink leading-tight">
            Things I've built
          </h2>
          <p className="hidden sm:block text-[13px] text-ink/45 max-w-[240px] text-right leading-relaxed">
            Real projects. Real problems. Real code.
          </p>
        </div>

        {/* === FEATURED === */}
        <div className="mb-6 group">
          <SpotlightCard className="bg-white rounded-3xl border border-surface overflow-hidden hover:border-primary/40 hover:shadow-[0_12px_40px_-8px_rgba(22,58,95,0.12)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-surface to-white min-h-[260px] lg:min-h-[380px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Top meta */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-[0.12em]">
                      {featured.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border ${statusColors[featured.statusColor]}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDots[featured.statusColor]}`} />
                      {featured.status}
                    </span>
                  </div>

                  <h3 className="text-[24px] sm:text-[28px] font-black text-ink tracking-tight mb-4 leading-snug">
                    {featured.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-[11px] font-bold text-ink/40 uppercase tracking-widest mb-1">Problem</p>
                      <p className="text-[13.5px] text-ink/75 leading-relaxed">{featured.problemStatement}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-ink/40 uppercase tracking-widest mb-1">What I built</p>
                      <p className="text-[13.5px] text-ink/75 leading-relaxed">{featured.whatIBuilt}</p>
                    </div>
                    {expandedId === featured.id && (
                      <div className="transition-all duration-300">
                        <p className="text-[11px] font-bold text-ink/40 uppercase tracking-widest mb-1">My contribution</p>
                        <p className="text-[13.5px] text-ink/75 leading-relaxed">{featured.myContribution}</p>
                      </div>
                    )}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-ink/70 bg-surface border border-surface px-2.5 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Note */}
                {featured.note && (
                  <p className="text-[12px] text-ink/45 italic border-t border-surface pt-4 mb-4">
                    {featured.note}
                  </p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setExpandedId(expandedId === featured.id ? null : featured.id)}
                    className="text-[12.5px] font-medium text-primary hover:text-ink transition-colors cursor-pointer"
                  >
                    {expandedId === featured.id ? 'Show less' : 'Read more →'}
                  </button>
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] text-ink/60 hover:text-ink transition-colors ml-auto"
                    >
                      <GithubIcon />
                      <span>GitHub</span>
                    </a>
                  )}
                  {featured.demo && (
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[12.5px] text-ink/60 hover:text-ink transition-colors"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* === MEDIUM CARDS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {medium.map((project) => (
            <SpotlightCard
              key={project.id}
              className="bg-white rounded-2xl border border-surface overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_-6px_rgba(22,58,95,0.10)] transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-surface to-white h-[200px]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-600 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.1em]">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10.5px] font-medium px-2.5 py-0.5 rounded-full border ${statusColors[project.statusColor]}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDots[project.statusColor]}`} />
                    {project.status}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-ink mb-2">{project.title}</h3>
                <p className="text-[13px] text-ink/65 leading-relaxed mb-4">{project.problemStatement}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] text-ink/65 bg-surface border border-surface px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.note && (
                  <p className="text-[11.5px] text-ink/40 italic mt-auto pt-3 border-t border-surface">
                    {project.note}
                  </p>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* === EXPERIMENTAL === */}
        <div className="group">
          <SpotlightCard className="bg-gradient-to-r from-surface/60 to-white rounded-2xl border border-surface overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_-6px_rgba(22,58,95,0.08)] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Image — narrow */}
              <div className="relative overflow-hidden bg-gradient-to-br from-surface to-white h-[200px] md:h-auto">
                <img
                  src={experimental.image}
                  alt={experimental.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-600 ease-out"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.1em]">
                    Experimental · {experimental.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10.5px] font-medium px-2.5 py-0.5 rounded-full border ${statusColors[experimental.statusColor]}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDots[experimental.statusColor]}`} />
                    {experimental.status}
                  </span>
                </div>

                <h3 className="text-[20px] font-bold text-ink mb-2">{experimental.title}</h3>
                <p className="text-[13px] text-ink/65 leading-relaxed mb-3">{experimental.problemStatement}</p>
                <p className="text-[12.5px] text-ink/55 leading-relaxed mb-4">
                  <span className="font-semibold text-ink/70">My contribution: </span>
                  {experimental.myContribution}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {experimental.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] text-ink/65 bg-white border border-surface px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {experimental.note && (
                  <p className="text-[12px] text-ink/40 italic">{experimental.note}</p>
                )}
              </div>
            </div>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
};
