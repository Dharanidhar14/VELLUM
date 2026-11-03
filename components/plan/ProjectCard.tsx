import React from "react";
import { PracticeProject } from "@/lib/api/types";
import { FolderGit2, CheckSquare, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: PracticeProject }) {
  return (
    <div className="border border-vellum-charcoal/20 bg-vellum-sand/20 p-6 space-y-4 shadow-editorial">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-vellum-charcoal/15 pb-3">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-vellum-sage" />
          <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal font-semibold">
            Recommended Portfolio Project
          </span>
        </div>
        <Badge variant="outline" className="self-start sm:self-auto text-[10px]">
          {project.complexity}
        </Badge>
      </div>

      <div className="space-y-2">
        <h4 className="font-serif text-xl text-vellum-charcoal">
          {project.title}
        </h4>
        <p className="font-sans text-xs sm:text-sm text-vellum-charcoal/80 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Concrete Deliverable Box */}
      <div className="p-3 bg-vellum-ivory border border-vellum-charcoal/15 space-y-1">
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-vellum-charcoal-light">
          <CheckSquare className="w-3.5 h-3.5 text-vellum-sage" />
          <span>Verifiable Candidate Deliverable</span>
        </div>
        <p className="font-mono text-xs text-vellum-charcoal font-medium">
          {project.deliverable}
        </p>
      </div>

      {/* Skills Practiced Chips */}
      <div className="pt-2 flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light mr-1">
          Skills Tested:
        </span>
        {project.skillsPracticed.map((sk, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-vellum-ivory border border-vellum-charcoal/15 font-mono text-[10px] text-vellum-charcoal"
          >
            {sk}
          </span>
        ))}
      </div>
    </div>
  );
}
