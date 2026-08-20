import React from 'react';

interface ShimmerBadgeProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
}

export const ShimmerBadge: React.FC<ShimmerBadgeProps> = ({
  children,
  className = '',
  dotColor = 'bg-primary',
}) => {
  return (
    <div
      className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/25 bg-white/70 px-3.5 py-1 text-[11px] font-semibold tracking-wide text-ink backdrop-blur-xs shadow-2xs transition-all hover:border-primary/50 hover:shadow-xs ${className}`}
    >
      {/* Animated shimmer beam */}
      <div className="animate-shimmer pointer-events-none absolute inset-0 -z-10" />
      {dotColor && <span className={`h-1.5 w-1.5 rounded-full ${dotColor} animate-pulse`} />}
      {children}
    </div>
  );
};
