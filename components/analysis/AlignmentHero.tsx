import React from "react";
import { AlignmentAnalysis } from "@/lib/api/types";
import { ScoreMeter } from "@/components/ui/ScoreMeter";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, AlertTriangle, XCircle, FileText, Calendar, Compass } from "lucide-react";

export function AlignmentHero({ analysis }: { analysis: AlignmentAnalysis }) {
  return (
    <div className="border border-vellum-charcoal/20 bg-vellum-ivory p-6 sm:p-10 shadow-editorial space-y-8">
      {/* Header bar */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between pb-8 border-b border-vellum-charcoal/15 gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
              Diagnostic Audit Report
            </span>
            <span className="text-vellum-charcoal/30">&middot;</span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-vellum-charcoal-muted">
              <Calendar className="w-3.5 h-3.5" />
              <span>{analysis.analyzedAt}</span>
            </div>
            <span className="text-vellum-charcoal/30">&middot;</span>
            <div className="flex items-center gap-1.5 font-mono text-xs text-vellum-charcoal-muted">
              <FileText className="w-3.5 h-3.5" />
              <span className="truncate max-w-[180px]">{analysis.resumeFileName}</span>
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight">
            {analysis.targetRole.title}
          </h2>

          <p className="font-mono text-xs sm:text-sm text-vellum-charcoal/80 leading-relaxed italic border-l-2 border-vellum-charcoal/30 pl-4 py-1">
            &ldquo;{analysis.editorialSummary}&rdquo;
          </p>
        </div>

        {/* Alignment Score Meter */}
        <div className="lg:w-80 shrink-0 bg-vellum-sand/20 border border-vellum-charcoal/15 p-6">
          <ScoreMeter score={analysis.overallScore} verdict={analysis.verdict} />
        </div>
      </div>

      {/* 3-Part Skill Distribution Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Matched */}
        <div className="border border-vellum-charcoal/15 p-5 bg-vellum-ivory space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-vellum-charcoal-muted">
              Demonstrated Skills
            </span>
            <CheckCircle2 className="w-4 h-4 text-vellum-sage" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-vellum-charcoal">
              {analysis.matchedCount}
            </span>
            <span className="font-mono text-xs text-vellum-charcoal-muted">verified</span>
          </div>
          <p className="font-sans text-xs text-vellum-charcoal-light">
            Definitive resume evidence located across codebases or coursework.
          </p>
        </div>

        {/* Partial */}
        <div className="border border-vellum-charcoal/15 p-5 bg-vellum-ivory space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-vellum-charcoal-muted">
              Partially Shown
            </span>
            <AlertTriangle className="w-4 h-4 text-[#b76e1a]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-[#b76e1a]">
              {analysis.partialCount}
            </span>
            <span className="font-mono text-xs text-vellum-charcoal-muted">needs depth</span>
          </div>
          <p className="font-sans text-xs text-vellum-charcoal-light">
            Mentioned conceptually but lacking rigorous production artifacts.
          </p>
        </div>

        {/* Missing */}
        <div className="border border-vellum-charcoal/15 p-5 bg-vellum-ivory space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-vellum-charcoal-muted">
              Missing Competencies
            </span>
            <XCircle className="w-4 h-4 text-vellum-charcoal/40" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-bold text-vellum-charcoal">
              {analysis.missingCount}
            </span>
            <span className="font-mono text-xs text-vellum-charcoal-muted">critical gaps</span>
          </div>
          <p className="font-sans text-xs text-vellum-charcoal-light">
            Required role benchmarks with zero evidence detected in submission.
          </p>
        </div>
      </div>
    </div>
  );
}
