import React from "react";
import { AlignmentAnalysis } from "@/lib/api/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TrendingUp, ArrowRight, Zap } from "lucide-react";

export function ImprovementHighlights({ analysis }: { analysis: AlignmentAnalysis }) {
  return (
    <div className="border border-vellum-charcoal/15 bg-vellum-sand/20 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-vellum-charcoal/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-vellum-sage" />
            <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal font-semibold">
              Strategic Interventions
            </span>
          </div>
          <h3 className="font-serif text-2xl text-vellum-charcoal mt-1">
            Top 3 High-Impact Remediation Steps
          </h3>
        </div>
        <Button href="/plan" variant="primary" size="sm" withArrow>
          View Full Roadmap
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {analysis.improvementOpportunities.map((imp) => (
          <div
            key={imp.id}
            className="border border-vellum-charcoal/15 bg-vellum-ivory p-6 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge
                  variant={imp.priority === "High Priority" ? "amber" : "neutral"}
                  dot
                >
                  {imp.priority}
                </Badge>
                <span className="font-mono text-xs text-vellum-sage-dark font-semibold">
                  {imp.impact}
                </span>
              </div>

              <h4 className="font-serif text-lg font-normal text-vellum-charcoal">
                {imp.area}
              </h4>

              <p className="font-sans text-xs text-vellum-charcoal-muted leading-relaxed">
                {imp.actionSummary}
              </p>
            </div>

            <div className="pt-3 border-t border-vellum-charcoal/10 font-mono text-[10px] text-vellum-charcoal-light flex items-center justify-between">
              <span>ESTIMATED DURATION: 2 WEEKS</span>
              <TrendingUp className="w-3.5 h-3.5 text-vellum-sage" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
