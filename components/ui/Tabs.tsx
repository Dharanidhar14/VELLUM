import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className = "" }: TabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-1 border-b border-vellum-charcoal/15 pb-px",
        className
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-150 relative -bottom-px border-b-2 flex items-center gap-2",
              isActive
                ? "border-vellum-charcoal text-vellum-charcoal font-semibold bg-vellum-sand/20"
                : "border-transparent text-vellum-charcoal-muted hover:text-vellum-charcoal hover:border-vellum-charcoal/30"
            )}
          >
            <span>{tab.label}</span>
            {typeof tab.count === "number" && (
              <span
                className={cn(
                  "px-1.5 py-0.2 text-[10px] rounded-none",
                  isActive
                    ? "bg-vellum-charcoal text-vellum-ivory"
                    : "bg-vellum-sand/40 text-vellum-charcoal-muted"
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
