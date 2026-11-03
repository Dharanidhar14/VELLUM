import React from "react";
import { cn } from "@/lib/utils";

interface ScoreMeterProps {
  score: number; // 0 to 100
  verdict?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  showTicks?: boolean;
}

export function ScoreMeter({
  score,
  verdict,
  size = "md",
  className = "",
  showTicks = true,
}: ScoreMeterProps) {
  // Clamped score
  const safeScore = Math.max(0, Math.min(100, score));

  return (
    <div className={cn("flex flex-col gap-3 font-sans", className)}>
      <div className="flex items-baseline justify-between border-b border-vellum-charcoal/15 pb-2">
        <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
          Alignment Index
        </span>
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-3xl sm:text-4xl font-bold text-vellum-charcoal tracking-tight">
            {safeScore}
          </span>
          <span className="font-mono text-xs text-vellum-charcoal-muted">/100</span>
        </div>
      </div>

      {/* Segmented linear gauge */}
      <div className="space-y-1.5">
        <div className="relative w-full h-3 bg-vellum-sand/40 border border-vellum-charcoal/20 overflow-hidden">
          <div
            className="h-full bg-vellum-sage transition-all duration-700 ease-out"
            style={{ width: `${safeScore}%` }}
          />
          {/* Target benchmark threshold line at 75% */}
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-vellum-charcoal/60 z-10"
            style={{ left: "75%" }}
            title="Typical competitive threshold (75%)"
          />
        </div>

        {showTicks && (
          <div className="flex justify-between font-mono text-[10px] text-vellum-charcoal-light uppercase tracking-wider">
            <span>0 — Nascent</span>
            <span className="hidden sm:inline">50 — Developing</span>
            <span className="text-vellum-charcoal font-semibold">75 — Target Bar</span>
            <span>100 — Complete</span>
          </div>
        )}
      </div>

      {verdict && (
        <div className="flex items-center gap-2 pt-1">
          <span className="w-2 h-2 rounded-full bg-vellum-sage" />
          <span className="font-mono text-xs tracking-wide text-vellum-charcoal font-medium">
            Assessment: {verdict}
          </span>
        </div>
      )}
    </div>
  );
}
