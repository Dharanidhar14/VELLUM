"use client";

import React, { useState, useMemo } from "react";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import { SkillRow } from "@/components/skills/SkillRow";
import { SkillFilterBar } from "@/components/skills/SkillFilterBar";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, RefreshCw, Layers } from "lucide-react";

export default function DetailedSkillAssessmentPage() {
  const { analysis, isAnalyzing } = useAnalysis();
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const counts = useMemo(() => {
    if (!analysis) return { all: 0, demonstrated: 0, partial: 0, missing: 0 };
    return {
      all: analysis.skills.length,
      demonstrated: analysis.skills.filter((s) => s.status === "demonstrated").length,
      partial: analysis.skills.filter((s) => s.status === "partial").length,
      missing: analysis.skills.filter((s) => s.status === "missing").length,
    };
  }, [analysis]);

  const filteredSkills = useMemo(() => {
    if (!analysis) return [];
    return analysis.skills.filter((skill) => {
      const matchesStatus =
        statusFilter === "all" || skill.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All Categories" || skill.category === categoryFilter;

      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.evidence && skill.evidence.toLowerCase().includes(searchQuery.toLowerCase())) ||
        skill.gapExplanation.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [analysis, statusFilter, categoryFilter, searchQuery]);

  if (isAnalyzing || !analysis) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-4">
        <RefreshCw className="w-8 h-8 animate-spin text-vellum-sage mx-auto" />
        <h2 className="font-serif text-2xl text-vellum-charcoal">
          Loading Skill Matrix...
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
              Step 04 &middot; Verifiable Citation Audit
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight">
            Itemized skill audit.
          </h1>

          <p className="font-mono text-xs sm:text-sm text-vellum-charcoal-muted max-w-2xl leading-relaxed">
            Every technical competency demanded by {analysis.targetRole.title} contrasted
            against the concrete proof points extracted from your resume.
          </p>
        </div>

        <Button href="/plan" variant="primary" size="md" withArrow>
          View Action Plan
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <SkillFilterBar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        counts={counts}
      />

      {/* Skills Rows List */}
      <div className="space-y-3">
        {filteredSkills.map((skill) => (
          <SkillRow key={skill.id} skill={skill} />
        ))}

        {filteredSkills.length === 0 && (
          <div className="p-12 text-center border border-vellum-charcoal/20 bg-vellum-ivory font-mono text-xs text-vellum-charcoal-muted space-y-2">
            <Layers className="w-6 h-6 mx-auto opacity-50" />
            <p>No skills matched your active filter settings.</p>
            <button
              onClick={() => {
                setStatusFilter("all");
                setCategoryFilter("All Categories");
                setSearchQuery("");
              }}
              className="text-vellum-charcoal underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Strip */}
      <div className="pt-8 border-t border-vellum-charcoal/15 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button href="/analysis" variant="secondary" size="md">
          &larr; Back to Dashboard
        </Button>
        <Button href="/plan" variant="primary" size="md" withArrow>
          Proceed to Development Plan
        </Button>
      </div>
    </div>
  );
}
