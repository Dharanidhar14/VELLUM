import React from "react";
import { AlignmentAnalysis } from "@/lib/api/types";
import { GraduationCap, Briefcase, FolderGit2, Check, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function SectionBreakdown({ analysis }: { analysis: AlignmentAnalysis }) {
  const { educationAlignment, experienceAlignment, projectRelevance } = analysis;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Education Alignment Card */}
      <div className="border border-vellum-charcoal/15 bg-vellum-ivory p-6 space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-vellum-charcoal/10 pb-3">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-vellum-charcoal" />
              <span className="font-mono text-xs uppercase tracking-wider text-vellum-charcoal font-semibold">
                Education
              </span>
            </div>
            <Badge variant="sage" dot>
              Aligned
            </Badge>
          </div>

          <div className="space-y-1 font-mono text-xs">
            <span className="text-vellum-charcoal-light block uppercase text-[10px]">Detected Credential:</span>
            <p className="text-vellum-charcoal font-medium">{educationAlignment.credentialFound}</p>
          </div>

          <div className="space-y-1 font-mono text-xs">
            <span className="text-vellum-charcoal-light block uppercase text-[10px]">Benchmark Expectation:</span>
            <p className="text-vellum-charcoal-muted">{educationAlignment.targetExpectation}</p>
          </div>

          <p className="font-sans text-xs text-vellum-charcoal-muted leading-relaxed pt-2 border-t border-vellum-charcoal/10">
            {educationAlignment.commentary}
          </p>
        </div>

        <div className="pt-3 border-t border-vellum-charcoal/10 font-mono text-[10px] text-vellum-charcoal-light">
          VERIFIED ACADEMIC FOUNDATION
        </div>
      </div>

      {/* Experience Alignment Card */}
      <div className="border border-vellum-charcoal/15 bg-vellum-ivory p-6 space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-vellum-charcoal/10 pb-3">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-vellum-charcoal" />
              <span className="font-mono text-xs uppercase tracking-wider text-vellum-charcoal font-semibold">
                Experience
              </span>
            </div>
            <Badge variant="neutral" dot>
              Entry-Aligned
            </Badge>
          </div>

          <div className="space-y-1 font-mono text-xs">
            <span className="text-vellum-charcoal-light block uppercase text-[10px]">Demonstrated Scope:</span>
            <p className="text-vellum-charcoal font-medium">{experienceAlignment.yearsDemonstrated}</p>
          </div>

          <div className="space-y-1 font-mono text-xs">
            <span className="text-vellum-charcoal-light block uppercase text-[10px]">Industry Norm:</span>
            <p className="text-vellum-charcoal-muted">{experienceAlignment.targetExpectation}</p>
          </div>

          <p className="font-sans text-xs text-vellum-charcoal-muted leading-relaxed pt-2 border-t border-vellum-charcoal/10">
            {experienceAlignment.commentary}
          </p>
        </div>

        <div className="pt-3 border-t border-vellum-charcoal/10 font-mono text-[10px] text-vellum-charcoal-light">
          TENURE & WORK EXPERIENCE
        </div>
      </div>

      {/* Project Relevance Card */}
      <div className="border border-vellum-charcoal/15 bg-vellum-ivory p-6 space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-vellum-charcoal/10 pb-3">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-vellum-charcoal" />
              <span className="font-mono text-xs uppercase tracking-wider text-vellum-charcoal font-semibold">
                Projects
              </span>
            </div>
            <Badge variant="sand">
              {projectRelevance.relevantCount} of {projectRelevance.projectsEvaluated} Relevant
            </Badge>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light block">
              Key Strengths:
            </span>
            <ul className="space-y-1.5 font-sans text-xs text-vellum-charcoal">
              {projectRelevance.highlightedStrengths.map((str, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-vellum-sage mt-0.5 shrink-0" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-vellum-charcoal/10">
            <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light block">
              Gap Observations:
            </span>
            <ul className="space-y-1.5 font-sans text-xs text-vellum-charcoal-muted">
              {projectRelevance.gapObservations.map((obs, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-[#b76e1a] mt-0.5 shrink-0" />
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-3 border-t border-vellum-charcoal/10 font-mono text-[10px] text-vellum-charcoal-light">
          PORTFOLIO ARTIFACTS
        </div>
      </div>
    </div>
  );
}
