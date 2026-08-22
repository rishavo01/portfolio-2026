import React from 'react';
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { SpotlightCard } from './ui/SpotlightCard';

/* -------------------------------------------------------------
   CARD 1: BUILD 3D ILLUSTRATION
------------------------------------------------------------- */
const BuildIllustration: React.FC = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full pointer-events-none select-none">
    <defs>
      <linearGradient id="buildBaseTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#eef6ff" />
        <stop offset="100%" stopColor="#dbeafe" />
      </linearGradient>
      <linearGradient id="buildBaseSide" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#bfdbfe" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>
      <linearGradient id="windowSurface" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#e0edff" stopOpacity="0.85" />
      </linearGradient>
      <linearGradient id="windowBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>
      <linearGradient id="glassTile" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#2563eb" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient id="glassTileGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
      </linearGradient>
      <filter id="buildDropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.15" />
      </filter>
      <filter id="tileShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#1d4ed8" floodOpacity="0.25" />
      </filter>
    </defs>

    <ellipse cx="140" cy="125" rx="55" ry="35" fill="#dbeafe" opacity="0.6" />

    <g filter="url(#buildDropShadow)">
      <path d="M 50 128 L 125 158 L 190 125 L 190 135 L 125 168 L 50 138 Z" fill="url(#buildBaseSide)" />
      <path d="M 50 128 L 120 95 L 190 125 L 125 158 Z" fill="url(#buildBaseTop)" stroke="#ffffff" strokeWidth="1.5" />
    </g>

    <g transform="translate(10, 10)">
      <path d="M 58 100 L 118 126 L 118 132 L 58 106 Z" fill="#bfdbfe" opacity="0.9" />
      <path d="M 118 126 L 168 102 L 168 108 L 118 132 Z" fill="#93c5fd" opacity="0.9" />
      <path d="M 58 100 L 108 76 L 168 102 L 118 126 Z" fill="url(#windowSurface)" stroke="url(#windowBorder)" strokeWidth="1.5" />
      <circle cx="75" cy="94" r="2.5" fill="#3b82f6" opacity="0.6" />
      <circle cx="83" cy="90.5" r="2.5" fill="#60a5fa" opacity="0.6" />
      <circle cx="91" cy="87" r="2.5" fill="#93c5fd" opacity="0.6" />
      <path d="M 72 104 L 96 114" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 104 118 L 138 103" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <path d="M 78 111 L 112 126" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
      <path d="M 85 119 L 105 128" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
    </g>

    <g filter="url(#tileShadow)" transform="translate(112, 58)">
      <rect x="0" y="0" width="46" height="46" rx="14" transform="rotate(-15) skewX(-10)" fill="url(#glassTileGlow)" opacity="0.4" />
      <rect x="2" y="2" width="42" height="42" rx="12" transform="rotate(-12)" fill="url(#glassTile)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />
      <g transform="translate(10, 8) rotate(-12)">
        <path d="M 6 14 L 1 18 L 6 22" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 16 14 L 21 18 L 16 22" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 12 12 L 9 24" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

/* -------------------------------------------------------------
   CARD 2: DATA 3D ILLUSTRATION
------------------------------------------------------------- */
const DataIllustration: React.FC = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full pointer-events-none select-none">
    <defs>
      <linearGradient id="dataBaseTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0fdf4" />
        <stop offset="100%" stopColor="#dcfce7" />
      </linearGradient>
      <linearGradient id="dataBaseSide" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#bbf7d0" />
        <stop offset="100%" stopColor="#86efac" />
      </linearGradient>
      <linearGradient id="dbCylinderSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="35%" stopColor="#4ade80" />
        <stop offset="70%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
      <linearGradient id="dbCylinderTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bbf7d0" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
      <linearGradient id="chartGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#dcfce7" stopOpacity="0.75" />
      </linearGradient>
      <filter id="dataDropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#22c55e" floodOpacity="0.15" />
      </filter>
      <filter id="dbShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#15803d" floodOpacity="0.22" />
      </filter>
    </defs>

    <ellipse cx="140" cy="125" rx="55" ry="35" fill="#dcfce7" opacity="0.7" />

    <g filter="url(#dataDropShadow)">
      <path d="M 50 128 L 125 158 L 190 125 L 190 135 L 125 168 L 50 138 Z" fill="url(#dataBaseSide)" />
      <path d="M 50 128 L 120 95 L 190 125 L 125 158 Z" fill="url(#dataBaseTop)" stroke="#ffffff" strokeWidth="1.5" />
    </g>

    <g filter="url(#dbShadow)" transform="translate(68, 62)">
      <g transform="translate(0, 36)">
        <path d="M 0 16 C 0 25 19 32 42 32 C 65 32 84 25 84 16 L 84 28 C 84 37 65 44 42 44 C 19 44 0 37 0 28 Z" fill="url(#dbCylinderSide)" />
        <ellipse cx="42" cy="16" rx="42" ry="14" fill="url(#dbCylinderTop)" stroke="#86efac" strokeWidth="1" />
      </g>
      <g transform="translate(0, 18)">
        <path d="M 0 16 C 0 25 19 32 42 32 C 65 32 84 25 84 16 L 84 28 C 84 37 65 44 42 44 C 19 44 0 37 0 28 Z" fill="url(#dbCylinderSide)" />
        <ellipse cx="42" cy="16" rx="42" ry="14" fill="url(#dbCylinderTop)" stroke="#86efac" strokeWidth="1" />
      </g>
      <g transform="translate(0, 0)">
        <path d="M 0 16 C 0 25 19 32 42 32 C 65 32 84 25 84 16 L 84 28 C 84 37 65 44 42 44 C 19 44 0 37 0 28 Z" fill="url(#dbCylinderSide)" />
        <ellipse cx="42" cy="16" rx="42" ry="14" fill="url(#dbCylinderTop)" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="38" cy="14" rx="34" ry="10" fill="#bbf7d0" opacity="0.6" />
      </g>
    </g>

    <g transform="translate(138, 78)">
      <rect x="0" y="0" width="38" height="48" rx="10" transform="skewY(-10)" fill="url(#chartGlass)" stroke="#ffffff" strokeWidth="1.5" />
      <rect x="8" y="26" width="5" height="14" rx="2.5" transform="skewY(-10)" fill="#22c55e" />
      <rect x="16" y="18" width="5" height="22" rx="2.5" transform="skewY(-10)" fill="#4ade80" />
      <rect x="24" y="12" width="5" height="28" rx="2.5" transform="skewY(-10)" fill="#16a34a" />
    </g>
  </svg>
);

/* -------------------------------------------------------------
   CARD 3: ENGINEERING 3D ILLUSTRATION
------------------------------------------------------------- */
const EngineeringIllustration: React.FC = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full pointer-events-none select-none">
    <defs>
      <linearGradient id="engBaseTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#faf5ff" />
        <stop offset="100%" stopColor="#f3e8ff" />
      </linearGradient>
      <linearGradient id="engBaseSide" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e9d5ff" />
        <stop offset="100%" stopColor="#d8b4fe" />
      </linearGradient>
      <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e9d5ff" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
      <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#7e22ce" />
      </linearGradient>
      <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#6b21a8" />
      </linearGradient>
      <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <filter id="engDropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#8b5cf6" floodOpacity="0.15" />
      </filter>
      <filter id="cubeShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#6b21a8" floodOpacity="0.25" />
      </filter>
    </defs>

    <ellipse cx="140" cy="125" rx="55" ry="35" fill="#f3e8ff" opacity="0.7" />

    <g filter="url(#engDropShadow)">
      <path d="M 50 128 L 125 158 L 190 125 L 190 135 L 125 168 L 50 138 Z" fill="url(#engBaseSide)" />
      <path d="M 50 128 L 120 95 L 190 125 L 125 158 Z" fill="url(#engBaseTop)" stroke="#ffffff" strokeWidth="1.5" />
    </g>

    <g filter="url(#cubeShadow)">
      <g transform="translate(80, 88)">
        <path d="M 0 16 L 24 3 L 48 16 L 24 29 Z" fill="url(#cubeTop)" stroke="#ffffff" strokeWidth="0.8" />
        <path d="M 0 16 L 24 29 L 24 55 L 0 42 Z" fill="url(#cubeLeft)" />
        <path d="M 24 29 L 48 16 L 48 42 L 24 55 Z" fill="url(#cubeRight)" />
      </g>
      <g transform="translate(108, 76)">
        <path d="M 0 16 L 24 3 L 48 16 L 24 29 Z" fill="url(#cubeTop)" stroke="#ffffff" strokeWidth="0.8" />
        <path d="M 0 16 L 24 29 L 24 55 L 0 42 Z" fill="url(#cubeLeft)" />
        <path d="M 24 29 L 48 16 L 48 42 L 24 55 Z" fill="url(#cubeRight)" />
      </g>
      <g transform="translate(94, 52)">
        <path d="M 0 16 L 24 3 L 48 16 L 24 29 Z" fill="url(#cubeTop)" stroke="#ffffff" strokeWidth="1" />
        <path d="M 0 16 L 24 29 L 24 55 L 0 42 Z" fill="url(#cubeLeft)" />
        <path d="M 24 29 L 48 16 L 48 42 L 24 55 Z" fill="url(#cubeRight)" />
      </g>
    </g>

    <g transform="translate(142, 54)">
      <circle cx="16" cy="16" r="14" fill="url(#gearGradient)" stroke="#ffffff" strokeWidth="1" />
      <rect x="13.5" y="0" width="5" height="32" rx="1.5" fill="url(#gearGradient)" />
      <rect x="0" y="13.5" width="32" height="5" rx="1.5" fill="url(#gearGradient)" />
      <rect x="13.5" y="0" width="5" height="32" rx="1.5" transform="rotate(45 16 16)" fill="url(#gearGradient)" />
      <rect x="13.5" y="0" width="5" height="32" rx="1.5" transform="rotate(-45 16 16)" fill="url(#gearGradient)" />
      <circle cx="16" cy="16" r="6" fill="#f3e8ff" />
      <circle cx="16" cy="16" r="4" fill="#6b21a8" />
    </g>
  </svg>
);

/* -------------------------------------------------------------
   CARD 4: EXPLORING 3D ILLUSTRATION
------------------------------------------------------------- */
const ExploringIllustration: React.FC = () => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full pointer-events-none select-none">
    <defs>
      <linearGradient id="expBaseTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="100%" stopColor="#fef3c7" />
      </linearGradient>
      <linearGradient id="expBaseSide" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#fcd34d" />
      </linearGradient>
      <linearGradient id="compassRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="40%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="compassInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffdfa" />
        <stop offset="100%" stopColor="#fef3c7" />
      </linearGradient>
      <linearGradient id="needleNorth" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#c2410c" />
      </linearGradient>
      <linearGradient id="needleSouth" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
      <filter id="expDropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.15" />
      </filter>
      <filter id="compassShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#d97706" floodOpacity="0.3" />
      </filter>
    </defs>

    <ellipse cx="140" cy="125" rx="55" ry="35" fill="#fef3c7" opacity="0.8" />

    <path d="M 30 145 C 50 140 70 148 95 130 C 120 112 135 125 150 90" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" fill="none" />

    <g filter="url(#expDropShadow)">
      <path d="M 50 128 L 125 158 L 190 125 L 190 135 L 125 168 L 50 138 Z" fill="url(#expBaseSide)" />
      <path d="M 50 128 L 120 95 L 190 125 L 125 158 Z" fill="url(#expBaseTop)" stroke="#ffffff" strokeWidth="1.5" />
    </g>

    <g filter="url(#compassShadow)" transform="translate(86, 68)">
      <ellipse cx="44" cy="48" rx="38" ry="24" fill="#b45309" />
      <ellipse cx="44" cy="44" rx="38" ry="24" fill="#d97706" />
      <ellipse cx="44" cy="40" rx="38" ry="24" fill="url(#compassRing)" stroke="#ffffff" strokeWidth="1.5" />
      <ellipse cx="44" cy="40" rx="32" ry="19" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
      <ellipse cx="44" cy="40" rx="28" ry="16" fill="url(#compassInner)" />
      <line x1="44" y1="25" x2="44" y2="28" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="52" x2="44" y2="55" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="40" x2="23" y2="40" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="65" y1="40" x2="70" y2="40" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="44,40 56,32 46,38" fill="url(#needleNorth)" />
      <polygon points="44,40 56,32 42,34" fill="#f97316" />
      <polygon points="44,40 32,48 42,42" fill="url(#needleSouth)" />
      <polygon points="44,40 32,48 46,46" fill="#64748b" />
      <circle cx="44" cy="40" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
      <circle cx="44" cy="40" r="1.5" fill="#ffffff" />
      <path d="M 22 36 C 26 28 40 25 58 28 C 50 34 32 37 22 36 Z" fill="#ffffff" opacity="0.5" />
    </g>

    <g transform="translate(164, 44)">
      <path d="M 10 0 Q 10 10 20 10 Q 10 10 10 20 Q 10 10 0 10 Q 10 10 10 0 Z" fill="#fbbf24" />
      <circle cx="10" cy="10" r="1.5" fill="#ffffff" />
    </g>
    <g transform="translate(178, 68)">
      <path d="M 6 0 Q 6 6 12 6 Q 6 6 6 12 Q 6 6 0 6 Q 6 6 6 0 Z" fill="#f59e0b" opacity="0.8" />
    </g>
  </svg>
);

const illustrations: Record<string, React.ComponentType> = {
  BUILD: BuildIllustration,
  DATA: DataIllustration,
  ENGINEERING: EngineeringIllustration,
  EXPLORING: ExploringIllustration,
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
          {/* <p className="hidden sm:block text-[13px] text-ink/45 max-w-[200px] text-right leading-relaxed">
            No percentages. Just honest categories.
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group) => {
            const Illustration = illustrations[group.category];
            return (
              <SpotlightCard
                key={group.category}
                className="group relative overflow-hidden bg-white rounded-2xl p-6 border border-surface hover:border-primary/40 hover:shadow-[0_8px_30px_-6px_rgba(116,180,217,0.12)] transition-all duration-300 min-h-[400px] flex flex-col"
              >
                {/* Category header */}
                <div className="relative z-10 mb-6">
                  <p className="text-[13px] font-black uppercase tracking-[0.1em] text-ink">
                    {group.category}
                  </p>
                  <p className="text-[11.5px] text-ink/40 font-medium mt-0.5">
                    {group.items.length} {group.items.length === 1 ? 'technology' : 'technologies'}
                  </p>
                </div>

                {/* Bulleted list */}
                <ul className="relative z-10 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13.5px] text-ink/70 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 3D isometric illustration, bottom-right */}
                <div className="absolute -bottom-14 -right-14 w-[380px] h-[342px] opacity-60 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105">
                  <Illustration />
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Honest note */}
        <p className="text-[13px] text-ink/40 italic text-center mt-10">
          Skills aren't percentages. These are technologies I've used to build real things.
        </p>

      </div>
    </section>
  );
};
