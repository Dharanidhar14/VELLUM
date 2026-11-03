"use client";

import React from "react";
import Link from "next/link";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import { AlignmentHero } from "@/components/analysis/AlignmentHero";
import { SectionBreakdown } from "@/components/analysis/SectionBreakdown";
import { ImprovementHighlights } from "@/components/analysis/ImprovementHighlights";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, RefreshCw } from "lucide-react";

export default function AnalysisDashboardPage() {
  const { analysis, isAnalyzing } = useAnalysis();

  if (isAnalyzing || !analysis) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-4">
        <RefreshCw className="w-8 h-8 animate-spin text-vellum-sage mx-auto" />
        <h2 className="font-serif text-2xl text-vellum-charcoal">
          Compiling Career Intelligence Report...
        </h2>
        <p className="font-mono text-xs text-vellum-charcoal-muted">
          Evaluating resume citations against target role benchmarks.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full space-y-12">
      {/* Editorial Page Header */}
      <div className="border-b border-vellum-charcoal/15 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
              Step 03 &middot; Executive Diagnostic
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight">
            Role alignment overview.
          </h1>
          <p className="font-mono text-xs sm:text-sm text-vellum-charcoal-muted max-w-xl">
            A comprehensive quantitative and qualitative evaluation of candidate suitability
            for {analysis.targetRole.title}.
          </p>
        </div>

        {/* Quick Links to Next Steps */}
        <div className="flex flex-wrap items-center gap-3">
          <Button href="/skills" variant="secondary" size="md">
            Inspect Skill Matrix
          </Button>
          <Button href="/plan" variant="primary" size="md" withArrow>
            View Roadmap
          </Button>
        </div>
      </div>

      {/* 1. Alignment Hero Score Card */}
      <AlignmentHero analysis={analysis} />

      {/* 2. Education, Experience, & Projects Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-vellum-charcoal/15 pb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal font-semibold">
            Section Alignment Diagnostics
          </span>
          <span className="font-mono text-xs text-vellum-charcoal-light">
            3 FOUNDATIONAL DIMENSIONS
          </span>
        </div>
        <SectionBreakdown analysis={analysis} />
      </div>

      {/* 3. High Impact Improvement Highlights */}
      <ImprovementHighlights analysis={analysis} />

      {/* 4. Quick Preview of Skill Matrix with Deep-Dive CTA */}
      <div className="border border-vellum-charcoal/20 bg-vellum-ivory p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-vellum-charcoal/15 pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted block">
              Direct Citation Audit
            </span>
            <h3 className="font-serif text-2xl text-vellum-charcoal">
              Skills Breakdown Preview ({analysis.skills.length} Evaluated)
            </h3>
          </div>
          <Button href="/skills" variant="secondary" size="sm" withArrow>
            Explore Full Evidence Drawer
          </Button>
        </div>

        {/* Quick sample rows */}
        <div className="divide-y divide-vellum-charcoal/10 font-mono text-xs">
          {analysis.skills.slice(0, 5).map((sk) => (
            <div key={sk.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                {sk.status === "demonstrated" && (
                  <CheckCircle2 className="w-4 h-4 text-vellum-sage shrink-0" />
                )}
                {sk.status === "partial" && (
                  <AlertTriangle className="w-4 h-4 text-[#b76e1a] shrink-0" />
                )}
                {sk.status === "missing" && (
                  <XCircle className="w-4 h-4 text-vellum-charcoal/30 shrink-0" />
                )}
                <span className="text-vellum-charcoal font-medium">{sk.name}</span>
                <span className="text-vellum-charcoal-light text-[10px]">({sk.category})</span>
              </div>

              <div className="flex items-center gap-3 sm:text-right">
                <Badge
                  variant={
                    sk.status === "demonstrated"
                      ? "sage"
                      : sk.status === "partial"
                      ? "amber"
                      : "neutral"
                  }
                  className="text-[10px]"
                >
                  {sk.status === "demonstrated"
                    ? "Demonstrated"
                    : sk.status === "partial"
                    ? "Partial"
                    : "Missing"}
                </Badge>
                <span className="text-vellum-charcoal-muted text-[11px] hidden sm:inline">
                  {sk.importance} Priority
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
