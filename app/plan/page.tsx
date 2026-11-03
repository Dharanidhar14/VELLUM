"use client";

import React from "react";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import { RoadmapTimeline } from "@/components/plan/RoadmapTimeline";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, CheckCircle2, ArrowRight, Printer, Share2, Compass } from "lucide-react";

export default function DevelopmentPlanPage() {
  const { analysis, isAnalyzing } = useAnalysis();

  if (isAnalyzing || !analysis) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-4">
        <Compass className="w-8 h-8 animate-spin text-vellum-sage mx-auto" />
        <h2 className="font-serif text-2xl text-vellum-charcoal">
          Drafting Development Roadmap...
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full space-y-10">
      {/* Editorial Page Header */}
      <div className="border-b border-vellum-charcoal/15 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
              Step 05 &middot; Actionable Roadmap
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight">
            Strategic progression roadmap.
          </h1>

          <p className="font-mono text-xs sm:text-sm text-vellum-charcoal-muted max-w-2xl leading-relaxed">
            A sequenced, 6-week curriculum designed to close verified competency gaps
            for {analysis.targetRole.title} through authoritative study and concrete portfolio builds.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="md"
            onClick={() => window.print()}
            className="gap-2"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Curriculum
          </Button>
          <Button href="/skills" variant="primary" size="md">
            Skill Matrix
          </Button>
        </div>
      </div>

      {/* Program Summary Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-vellum-charcoal/15 bg-vellum-sand/20 p-6">
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light block">
            Target Trajectory
          </span>
          <span className="font-serif text-lg font-medium text-vellum-charcoal">
            {analysis.targetRole.title}
          </span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light block">
            Total Duration
          </span>
          <span className="font-serif text-lg font-medium text-vellum-charcoal">
            6 Weeks &middot; 3 Phased Gates
          </span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light block">
            Target Outcome
          </span>
          <span className="font-serif text-lg font-medium text-vellum-sage-dark">
            Production Ready &gt; 85% Index
          </span>
        </div>
      </div>

      {/* Multi-Phase Timeline */}
      <RoadmapTimeline phases={analysis.developmentPlan} />

      {/* Bottom Completion Banner */}
      <div className="border border-vellum-charcoal/20 bg-vellum-ivory p-8 text-center space-y-6 shadow-editorial">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="font-serif text-2xl sm:text-3xl text-vellum-charcoal">
            Ready to calibrate another role or re-evaluate?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-vellum-charcoal-muted leading-relaxed">
            As you complete projects and append new bullet points to your resume, upload the updated
            document to track your quantitative employability trajectory.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/upload" variant="primary" size="lg" withArrow>
            Upload Updated Resume
          </Button>
          <Button href="/roles" variant="secondary" size="lg">
            Compare Another Role
          </Button>
        </div>
      </div>
    </div>
  );
}
