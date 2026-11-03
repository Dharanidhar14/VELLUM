import React from "react";
import { DevelopmentPlanPhase } from "@/lib/api/types";
import { ResourceCard } from "./ResourceCard";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Target, BookOpen, Layers } from "lucide-react";

export function RoadmapTimeline({ phases }: { phases: DevelopmentPlanPhase[] }) {
  return (
    <div className="space-y-12">
      {phases.map((phase) => (
        <div
          key={phase.phase}
          className="border border-vellum-charcoal/20 bg-vellum-ivory p-6 sm:p-10 space-y-8 shadow-editorial relative"
        >
          {/* Phase Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-vellum-charcoal/15 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
                  Sequential Progression
                </span>
                <span className="text-vellum-charcoal/30">&middot;</span>
                <span className="font-mono text-xs font-semibold text-vellum-sage-dark">
                  {phase.timeframe}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-vellum-charcoal">
                {phase.phaseLabel}
              </h3>
            </div>

            <Badge variant="neutral" className="self-start sm:self-auto font-mono text-xs">
              Phase 0{phase.phase}
            </Badge>
          </div>

          {/* Phase Focus & Strategic Rationale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-vellum-sand/20 border border-vellum-charcoal/10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-vellum-charcoal-light font-semibold block">
                Primary Competency Focus:
              </span>
              <p className="text-vellum-charcoal font-medium">{phase.focus}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase text-vellum-charcoal-light font-semibold block">
                Strategic Rationale:
              </span>
              <p className="text-vellum-charcoal-muted leading-relaxed font-sans">{phase.rationale}</p>
            </div>
          </div>

          {/* Skills within this phase */}
          <div className="space-y-8">
            {phase.skills.map((skillItem, idx) => (
              <div key={idx} className="space-y-6 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-vellum-charcoal" />
                    <h4 className="font-serif text-xl sm:text-2xl text-vellum-charcoal">
                      Target Skill: {skillItem.skillName}
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-vellum-charcoal-muted max-w-3xl leading-relaxed italic border-l border-vellum-charcoal/20 pl-4">
                    &ldquo;{skillItem.whyItMatters}&rdquo;
                  </p>
                </div>

                {/* Learning Resources Grid */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-vellum-charcoal-light block">
                    Curated Primary Literature & Documentation
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillItem.resources.map((res, rIdx) => (
                      <ResourceCard key={rIdx} resource={res} />
                    ))}
                  </div>
                </div>

                {/* Practical Project Deliverable */}
                <div className="pt-2">
                  <ProjectCard project={skillItem.project} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom phase milestone marker */}
          <div className="pt-4 border-t border-vellum-charcoal/10 flex justify-between items-center font-mono text-[10px] text-vellum-charcoal-light">
            <span>MILESTONE VERIFICATION GATE 0{phase.phase}</span>
            <span>MEASURABLE OUTCOME REQUIRED</span>
          </div>
        </div>
      ))}
    </div>
  );
}
