"use client";

import React, { useState } from "react";
import { PREDEFINED_ROLES } from "@/lib/api/mockData";
import { TargetRole } from "@/lib/api/types";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import { Search, Check, Briefcase, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function RoleCatalog() {
  const { selectedRoleId, setSelectedRoleId } = useAnalysis();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Engineering", "Data & AI"];

  const filteredRoles = PREDEFINED_ROLES.filter((role) => {
    const matchesSearch =
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.coreRequirements.some((req) => req.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      activeCategory === "All" || role.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search and Category Filter Strip */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-4 border-b border-vellum-charcoal/15">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-vellum-charcoal-muted" />
          <input
            type="text"
            placeholder="Search roles or competencies (e.g. Python, SQL, React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-vellum-ivory border border-vellum-charcoal/20 pl-9 pr-4 py-2 font-mono text-xs text-vellum-charcoal placeholder:text-vellum-charcoal-light focus:outline-none focus:border-vellum-charcoal transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors border shrink-0",
                activeCategory === cat
                  ? "bg-vellum-charcoal text-vellum-ivory border-vellum-charcoal font-medium"
                  : "bg-vellum-ivory text-vellum-charcoal-muted border-vellum-charcoal/20 hover:border-vellum-charcoal"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Role Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRoles.map((role) => {
          const isSelected = role.id === selectedRoleId;
          return (
            <div
              key={role.id}
              onClick={() => setSelectedRoleId(role.id)}
              className={cn(
                "cursor-pointer border p-6 transition-all duration-150 flex flex-col justify-between space-y-4 group",
                isSelected
                  ? "border-vellum-charcoal bg-vellum-sand/30 shadow-editorial ring-1 ring-vellum-charcoal"
                  : "border-vellum-charcoal/20 bg-vellum-ivory hover:border-vellum-charcoal/60 hover:bg-vellum-sand/10"
              )}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-vellum-charcoal-light block">
                      {role.category} &middot; {role.experienceLevel}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-vellum-charcoal group-hover:text-vellum-charcoal">
                      {role.title}
                    </h3>
                  </div>
                  <div
                    className={cn(
                      "w-6 h-6 border flex items-center justify-center shrink-0 transition-colors",
                      isSelected
                        ? "bg-vellum-charcoal border-vellum-charcoal text-vellum-ivory"
                        : "border-vellum-charcoal/30 bg-vellum-ivory text-transparent group-hover:border-vellum-charcoal"
                    )}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="font-sans text-xs text-vellum-charcoal-muted leading-relaxed">
                  {role.summary}
                </p>

                {/* Core requirements tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {role.coreRequirements.slice(0, 4).map((req, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-vellum-ivory border border-vellum-charcoal/15 font-mono text-[10px] text-vellum-charcoal-muted"
                    >
                      {req}
                    </span>
                  ))}
                  {role.coreRequirements.length > 4 && (
                    <span className="px-2 py-0.5 font-mono text-[10px] text-vellum-charcoal-light">
                      +{role.coreRequirements.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-vellum-charcoal/10 flex items-center justify-between font-mono text-[10px] text-vellum-charcoal-light">
                <span>{isSelected ? "ACTIVE SELECTION" : "CLICK TO CALIBRATE"}</span>
                <ChevronRight
                  className={cn(
                    "w-3.5 h-3.5 transition-transform",
                    isSelected ? "text-vellum-charcoal translate-x-1" : "opacity-40"
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>

      {filteredRoles.length === 0 && (
        <div className="p-8 border border-vellum-charcoal/20 text-center font-mono text-xs text-vellum-charcoal-muted bg-vellum-ivory">
          No job roles matched your search criteria. Try a different query or switch to the Custom Job Description tab.
        </div>
      )}
    </div>
  );
}
