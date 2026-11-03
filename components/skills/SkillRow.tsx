"use client";

import React, { useState } from "react";
import { SkillAssessment } from "@/lib/api/types";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, AlertTriangle, XCircle, ChevronDown, ChevronUp, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SkillRow({ skill }: { skill: SkillAssessment }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusIcons = {
    demonstrated: <CheckCircle2 className="w-4 h-4 text-vellum-sage shrink-0" />,
    partial: <AlertTriangle className="w-4 h-4 text-[#b76e1a] shrink-0" />,
    missing: <XCircle className="w-4 h-4 text-vellum-charcoal/30 shrink-0" />,
  };

  const statusBadges = {
    demonstrated: <Badge variant="sage" dot>Demonstrated</Badge>,
    partial: <Badge variant="amber" dot>Partially Shown</Badge>,
    missing: <Badge variant="neutral" dot>Missing Evidence</Badge>,
  };

  const importanceBadges = {
    Critical: <span className="font-mono text-[10px] uppercase text-red-900 bg-red-50 border border-red-200 px-2 py-0.5 font-medium">Critical</span>,
    High: <span className="font-mono text-[10px] uppercase text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 font-medium">High</span>,
    Recommended: <span className="font-mono text-[10px] uppercase text-vellum-charcoal-muted bg-vellum-sand/20 border border-vellum-charcoal/15 px-2 py-0.5">Recommended</span>,
  };

  return (
    <div
      className={cn(
        "border transition-all duration-150 bg-vellum-ivory",
        isExpanded
          ? "border-vellum-charcoal bg-vellum-sand/10 shadow-editorial"
          : "border-vellum-charcoal/15 hover:border-vellum-charcoal/50"
      )}
    >
      {/* Header clickable row */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start sm:items-center gap-3">
          <div className="mt-0.5 sm:mt-0">{statusIcons[skill.status]}</div>
          <div className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-lg sm:text-xl text-vellum-charcoal">
                {skill.name}
              </span>
              <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light">
                &middot; {skill.category}
              </span>
            </div>
            {/* Quick summary snippet when collapsed */}
            {!isExpanded && (
              <p className="font-sans text-xs text-vellum-charcoal-muted line-clamp-1">
                {skill.status === "demonstrated"
                  ? skill.evidence
                  : skill.gapExplanation}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
          {importanceBadges[skill.importance]}
          {statusBadges[skill.status]}
          <div className="text-vellum-charcoal-muted p-1">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>
      </button>

      {/* Expanded detailed audit drawer */}
      {isExpanded && (
        <div className="p-5 sm:p-6 border-t border-vellum-charcoal/15 bg-vellum-ivory space-y-5 animate-in fade-in duration-150">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Evidence found or missing context */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-wider text-vellum-charcoal-light block">
                Evidence Located on Resume
              </span>

              {skill.evidence ? (
                <div className="space-y-2">
                  <p className="font-sans text-xs text-vellum-charcoal font-medium">
                    {skill.evidence}
                  </p>
                  {skill.resumeQuote && (
                    <div className="p-3 bg-vellum-sand/20 border-l-2 border-vellum-charcoal/40 text-vellum-charcoal/90 italic font-mono text-[11px] flex gap-2">
                      <Quote className="w-3.5 h-3.5 shrink-0 text-vellum-charcoal-light mt-0.5" />
                      <span>&ldquo;{skill.resumeQuote}&rdquo;</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3 bg-vellum-sand/15 border border-vellum-charcoal/10 font-sans text-xs text-vellum-charcoal-muted">
                  No textual evidence or citations referring to {skill.name} were identified in the uploaded document.
                </div>
              )}
            </div>

            {/* Right: Gap explanation and recommended action */}
            <div className="space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-wider text-vellum-charcoal-light block">
                Hiring Diagnostic & Gap Analysis
              </span>

              <p className="font-sans text-xs text-vellum-charcoal-muted leading-relaxed">
                {skill.gapExplanation}
              </p>

              <div className="pt-2 border-t border-vellum-charcoal/10 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-vellum-sage-dark font-semibold block flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-vellum-sage" />
                  Recommended Action
                </span>
                <p className="font-sans text-xs text-vellum-charcoal font-medium leading-relaxed">
                  {skill.recommendedAction}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
