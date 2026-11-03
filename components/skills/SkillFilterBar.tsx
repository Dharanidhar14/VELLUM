"use client";

import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillFilterBarProps {
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  categoryFilter: string;
  setCategoryFilter: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  counts: {
    all: number;
    demonstrated: number;
    partial: number;
    missing: number;
  };
}

export function SkillFilterBar({
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  searchQuery,
  setSearchQuery,
  counts,
}: SkillFilterBarProps) {
  const statusTabs = [
    { id: "all", label: "All Skills", count: counts.all },
    { id: "demonstrated", label: "Demonstrated", count: counts.demonstrated },
    { id: "partial", label: "Partially Shown", count: counts.partial },
    { id: "missing", label: "Missing", count: counts.missing },
  ];

  const categories = [
    "All Categories",
    "Technical",
    "Architecture & Systems",
    "Tooling & Cloud",
    "Practices & Soft Skills",
  ];

  return (
    <div className="space-y-4 pb-4 border-b border-vellum-charcoal/15">
      {/* Upper bar: Status tabs & search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Status Pills */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {statusTabs.map((tab) => {
            const isActive = statusFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={cn(
                  "px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors border flex items-center gap-2 shrink-0",
                  isActive
                    ? "bg-vellum-charcoal text-vellum-ivory border-vellum-charcoal font-semibold"
                    : "bg-vellum-ivory text-vellum-charcoal-muted border-vellum-charcoal/20 hover:border-vellum-charcoal"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "px-1.5 py-0.2 text-[10px]",
                    isActive
                      ? "bg-vellum-sand/30 text-vellum-ivory"
                      : "bg-vellum-sand/40 text-vellum-charcoal-muted"
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Text search input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-vellum-charcoal-muted" />
          <input
            type="text"
            placeholder="Search skill or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-vellum-ivory border border-vellum-charcoal/20 pl-9 pr-3 py-1.5 font-mono text-xs text-vellum-charcoal placeholder:text-vellum-charcoal-light focus:outline-none focus:border-vellum-charcoal"
          />
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
        <span className="font-mono text-[10px] uppercase text-vellum-charcoal-light mr-1 shrink-0">
          Domain:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={cn(
              "px-2.5 py-0.5 font-mono text-[11px] border transition-colors shrink-0",
              categoryFilter === cat
                ? "border-vellum-charcoal bg-vellum-sand/40 text-vellum-charcoal font-medium"
                : "border-transparent text-vellum-charcoal-muted hover:border-vellum-charcoal/20"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
