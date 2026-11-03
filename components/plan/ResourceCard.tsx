import React from "react";
import { LearningResource } from "@/lib/api/types";
import { BookOpen, FileCode, Video, Compass, ExternalLink, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ResourceCard({ resource }: { resource: LearningResource }) {
  const typeIcons = {
    Documentation: <FileCode className="w-3.5 h-3.5 text-vellum-sage shrink-0" />,
    Book: <BookOpen className="w-3.5 h-3.5 text-vellum-charcoal shrink-0" />,
    Course: <Video className="w-3.5 h-3.5 text-[#b76e1a] shrink-0" />,
    "Interactive Guide": <Compass className="w-3.5 h-3.5 text-vellum-sage-dark shrink-0" />,
  };

  return (
    <div className="p-4 border border-vellum-charcoal/15 bg-vellum-ivory space-y-2.5 flex flex-col justify-between hover:border-vellum-charcoal/40 transition-colors">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-vellum-charcoal-light">
            {typeIcons[resource.type]}
            <span>{resource.type}</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] text-vellum-charcoal-muted">
            <Clock className="w-3 h-3" />
            <span>{resource.duration}</span>
          </div>
        </div>

        <h5 className="font-serif text-base text-vellum-charcoal font-medium leading-snug">
          {resource.title}
        </h5>

        <p className="font-mono text-xs text-vellum-charcoal-muted">
          Source: {resource.authorOrPlatform}
        </p>
      </div>

      <div className="pt-2 border-t border-vellum-charcoal/10 flex items-center justify-between font-mono text-[10px] text-vellum-charcoal-light">
        <span>AUTHORITATIVE REFERENCE</span>
        <ExternalLink className="w-3 h-3 opacity-60" />
      </div>
    </div>
  );
}
