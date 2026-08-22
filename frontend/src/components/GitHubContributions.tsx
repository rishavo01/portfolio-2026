import React, { useEffect, useState } from 'react';
import { githubConfig } from '../data/portfolio';
import { useScrollReveal } from '../lib/gsap';
import { MagneticButton } from './ui/MagneticButton';
import { SpotlightCard } from './ui/SpotlightCard';

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

interface ContributionDay {
  date: string;   // "YYYY-MM-DD"
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────

const CELL_SIZE = 12;
const CELL_GAP  = 3;
const CELL_STEP = CELL_SIZE + CELL_GAP;

// Left margin for day labels, top margin for month labels
const MARGIN_LEFT = 32;
const MARGIN_TOP  = 18;

// Day labels: row 0 = Monday … row 6 = Sunday
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// GitHub-style greens on dark background
const FILL: Record<number, string> = {
  0: '#161b22',
  1: '#0e4429',
  2: '#006d32',
  3: '#26a641',
  4: '#39d353',
};
const STROKE: Record<number, string> = {
  0: '#30363d',
  1: '#0e442980',
  2: '#006d3280',
  3: '#26a64180',
  4: '#39d35340',
};

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

function toYMD(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function buildWeekColumns(): Array<Array<{ date: Date; row: number }>> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endMonday = new Date(today);
  const dow = today.getDay();
  const daysToMon = dow === 0 ? 6 : dow - 1;
  endMonday.setDate(endMonday.getDate() - daysToMon);

  const startMonday = new Date(endMonday);
  startMonday.setDate(startMonday.getDate() - 52 * 7);

  const columns: Array<Array<{ date: Date; row: number }>> = [];
  const cursor = new Date(startMonday);

  while (cursor <= today) {
    const col: Array<{ date: Date; row: number }> = [];
    for (let row = 0; row < 7; row++) {
      const d = new Date(cursor);
      if (d <= today) col.push({ date: d, row });
      cursor.setDate(cursor.getDate() + 1);
    }
    if (col.length > 0) columns.push(col);
  }

  return columns;
}

function formatTooltipDate(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });
}

// ─────────────────────────────────────────────────────────────
// Hover state
// ─────────────────────────────────────────────────────────────

interface HoverState {
  visible: boolean;
  col: number;
  row: number;
  date: string;
  count: number;
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export const GitHubContributions: React.FC = () => {
  const [data,    setData]    = useState<Map<string, ContributionDay>>(new Map());
  const [total,   setTotal]   = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);
  const [hover,   setHover]   = useState<HoverState>({
    visible: false, col: 0, row: 0, date: '', count: 0,
  });

  const sectionRef = useScrollReveal<HTMLDivElement>({ y: 35, duration: 0.85 });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubConfig.username}?y=last`,
          { signal: AbortSignal.timeout(12_000) }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: ApiResponse = await res.json();
        if (!cancelled) {
          const map = new Map<string, ContributionDay>();
          for (const c of json.contributions) map.set(c.date, c);
          setData(map);
          setTotal(json.total?.lastYear ?? null);
          setLoading(false);
        }
      } catch {
        if (!cancelled) { setError(true); setLoading(false); }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const columns = buildWeekColumns();

  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  columns.forEach((col, ci) => {
    const firstDay = col[0].date;
    const m = firstDay.getMonth();
    if (m !== lastMonth) {
      if (ci > 0) monthLabels.push({ label: MONTH_NAMES[m], col: ci });
      lastMonth = m;
    }
  });

  const svgWidth  = MARGIN_LEFT + columns.length * CELL_STEP;
  const svgHeight = MARGIN_TOP  + 7 * CELL_STEP;

  const tooltipSvgX = MARGIN_LEFT + hover.col * CELL_STEP + CELL_SIZE / 2;
  const tooltipSvgY = MARGIN_TOP  + hover.row * CELL_STEP - 8;

  return (
    <section id="github" ref={sectionRef} className="py-20 md:py-28 bg-ink scroll-mt-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#26a641]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">

        {/* ── Section label ─────────────────────────── */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
            {githubConfig.label}
          </span>
          <span className="flex-1 max-w-[48px] h-px bg-primary/30" />
        </div>

        {/* ── Two-column header ─────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          {/* Left */}
          <div>
            <h2 className="text-[28px] sm:text-[34px] font-black tracking-[-0.03em] text-white leading-tight mb-3">
              {githubConfig.subtitle}
            </h2>
            <p className="text-[14px] text-white/50 leading-relaxed max-w-[480px] mb-3">
              My GitHub activity reflects the things I'm building, experimenting with, and learning over time.
            </p>
            {/* Total contributions */}
            {!loading && !error && total !== null && (
              <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#39d353]/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#39d353] animate-pulse" />
                <span className="text-[13.5px] text-white/80 font-medium">
                  <span className="font-black text-white">{total.toLocaleString()}</span>
                  {' '}contributions in the last year
                </span>
              </div>
            )}
            {loading && (
              <div className="h-8 w-56 bg-white/5 rounded-full animate-pulse" />
            )}
          </div>

          {/* Right — View GitHub button */}
          <MagneticButton strength={0.2}>
            <a
              href={githubConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/80 hover:text-white hover:bg-white/14 text-[13px] font-medium px-5 py-2.5 rounded-full transition-all whitespace-nowrap self-start sm:self-end shadow-sm"
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>View GitHub →</span>
            </a>
          </MagneticButton>
        </div>

        {/* ── Graph card with Spotlight Glow ───────── */}
        <SpotlightCard
          spotlightColor="rgba(38, 166, 65, 0.12)"
          borderColor="rgba(38, 166, 65, 0.3)"
          className="bg-[#0d1117] border border-white/8 rounded-2xl px-6 py-7 sm:px-8 sm:py-8"
        >

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-14 gap-4">
              <div className="w-8 h-8 border-2 border-white/10 border-t-[#39d353] rounded-full animate-spin" />
              <p className="text-[13px] text-white/35">Loading contributions…</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="flex flex-col items-center justify-center py-14 gap-3 text-center">
              <p className="text-[14px] text-white/45">
                GitHub contributions are temporarily unavailable.
              </p>
              <a
                href={githubConfig.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#39d353] hover:text-white transition-colors"
              >
                View activity on GitHub →
              </a>
            </div>
          )}

          {/* Graph */}
          {!loading && !error && (
            <div className="relative">
              {/* Horizontally scrollable on mobile */}
              <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                <div className="relative" style={{ minWidth: svgWidth }}>
                  <svg
                    width={svgWidth}
                    height={svgHeight}
                    role="img"
                    aria-label="GitHub contribution heatmap"
                    style={{ display: 'block' }}
                  >
                    {/* ── Month labels ── */}
                    {monthLabels.map(({ label, col }) => (
                      <text
                        key={`month-${col}`}
                        x={MARGIN_LEFT + col * CELL_STEP}
                        y={MARGIN_TOP - 5}
                        fill="#8b949e"
                        fontSize="10"
                        fontFamily="ui-monospace, 'Cascadia Code', monospace"
                        dominantBaseline="auto"
                      >
                        {label}
                      </text>
                    ))}

                    {/* ── Day-of-week labels ── */}
                    {DAY_LABELS.map((label, row) => (
                      <text
                        key={`day-${row}`}
                        x={0}
                        y={MARGIN_TOP + row * CELL_STEP + CELL_SIZE / 2}
                        fill="#8b949e"
                        fontSize="10"
                        fontFamily="ui-monospace, 'Cascadia Code', monospace"
                        dominantBaseline="middle"
                      >
                        {label}
                      </text>
                    ))}

                    {/* ── Contribution cells ── */}
                    {columns.map((col, ci) =>
                      col.map(({ date, row }) => {
                        const ymd  = toYMD(date);
                        const c    = data.get(ymd);
                        const lvl  = c?.level ?? 0;
                        const cnt  = c?.count  ?? 0;
                        const isHovered = hover.visible && hover.col === ci && hover.row === row;

                        return (
                          <rect
                            key={ymd}
                            x={MARGIN_LEFT + ci * CELL_STEP}
                            y={MARGIN_TOP  + row * CELL_STEP}
                            width={CELL_SIZE}
                            height={CELL_SIZE}
                            rx={2}
                            ry={2}
                            fill={FILL[lvl]}
                            stroke={isHovered ? '#ffffff80' : STROKE[lvl]}
                            strokeWidth={isHovered ? 1.2 : 0.5}
                            style={{
                              cursor: 'pointer',
                              transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                              transformOrigin: `${MARGIN_LEFT + ci * CELL_STEP + CELL_SIZE / 2}px ${MARGIN_TOP + row * CELL_STEP + CELL_SIZE / 2}px`,
                              transition: 'transform 0.12s ease, stroke 0.12s ease',
                            }}
                            onMouseEnter={() =>
                              setHover({ visible: true, col: ci, row, date: ymd, count: cnt })
                            }
                            onMouseLeave={() =>
                              setHover((h) => ({ ...h, visible: false }))
                            }
                          />
                        );
                      })
                    )}

                    {/* ── Tooltip rendered inside SVG via foreignObject ── */}
                    {hover.visible && (
                      <foreignObject
                        x={Math.min(tooltipSvgX - 70, svgWidth - 160)}
                        y={Math.max(tooltipSvgY - 58, 0)}
                        width={160}
                        height={58}
                        style={{ overflow: 'visible', pointerEvents: 'none' }}
                      >
                        <div
                          style={{
                            background: '#1c2128',
                            border: '1px solid rgba(255,255,255,0.18)',
                            borderRadius: 8,
                            padding: '7px 11px',
                            color: 'white',
                            fontSize: 11.5,
                            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                            lineHeight: 1.5,
                          }}
                        >
                          <div style={{ fontWeight: 600, marginBottom: 1 }}>
                            {formatTooltipDate(hover.date)}
                          </div>
                          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11 }}>
                            {hover.count === 0
                              ? 'No contributions'
                              : `${hover.count} contribution${hover.count !== 1 ? 's' : ''}`}
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </svg>
                </div>
              </div>

              {/* ── Legend ── */}
              <div className="flex items-center justify-end gap-2 mt-4">
                <span className="text-[10px] text-white/30 font-medium">Less</span>
                {([0, 1, 2, 3, 4] as const).map((lvl) => (
                  <div
                    key={lvl}
                    style={{
                      width: CELL_SIZE,
                      height: CELL_SIZE,
                      backgroundColor: FILL[lvl],
                      border: `0.5px solid ${STROKE[lvl]}`,
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                ))}
                <span className="text-[10px] text-white/30 font-medium">More</span>
              </div>
            </div>
          )}
        </SpotlightCard>

        {/* ── Username note ─────────────────────────── */}
        <div className="flex justify-end mt-4">
          <a
            href={githubConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/25 hover:text-white/60 transition-colors"
          >
            @{githubConfig.username} on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};
