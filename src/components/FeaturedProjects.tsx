import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-16 scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-xl sm:text-[22px] font-bold text-ink tracking-tight">
            Featured Projects
          </h2>
          <a
            href="#all-projects"
            className="text-[13px] font-medium text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-3 border border-surface shadow-[0_4px_20px_-4px_rgba(17,24,39,0.04)] hover:border-accent hover:shadow-[0_10px_25px_-5px_rgba(17,24,39,0.08)] transition-all duration-300 group cursor-pointer flex flex-col"
              >
                {/* Thumbnail Tile */}
                <div className="w-full aspect-[16/11] rounded-xl overflow-hidden bg-gradient-to-br from-background-soft to-surface/40 mb-3 border border-surface relative flex items-center justify-center">
                  <Icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                </div>

                {/* Card Meta */}
                <div className="px-1 pb-1">
                  <h3 className="text-[14px] font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-primary mt-0.5 font-normal">
                    {project.category}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-primary bg-background-soft border border-surface rounded-full px-1.5 py-0.5 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
