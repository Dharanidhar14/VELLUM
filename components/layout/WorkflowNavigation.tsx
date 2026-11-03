"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface WorkflowStep {
  id: string;
  num: string;
  label: string;
  href: string;
}

const STEPS: WorkflowStep[] = [
  { id: "upload", num: "01", label: "Upload Resume", href: "/upload" },
  { id: "roles", num: "02", label: "Target Role", href: "/roles" },
  { id: "analysis", num: "03", label: "Alignment", href: "/analysis" },
  { id: "skills", num: "04", label: "Skill Matrix", href: "/skills" },
  { id: "plan", num: "05", label: "Roadmap", href: "/plan" },
];

export function WorkflowNavigation() {
  const pathname = usePathname();

  // If on homepage, don't show the workflow bar
  if (pathname === "/") return null;

  return (
    <div className="w-full bg-vellum-sand/20 border-b border-vellum-charcoal/15 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Career intelligence workflow"
          className="flex items-center overflow-x-auto no-scrollbar py-1 gap-2 sm:gap-4"
        >
          {STEPS.map((step, idx) => {
            const isActive = pathname.startsWith(step.href);
            return (
              <React.Fragment key={step.id}>
                <Link
                  href={step.href}
                  className={cn(
                    "flex items-center gap-2 whitespace-nowrap px-3 py-1 font-mono text-xs transition-colors shrink-0",
                    isActive
                      ? "bg-vellum-charcoal text-vellum-ivory font-medium"
                      : "text-vellum-charcoal-muted hover:text-vellum-charcoal hover:bg-vellum-sand/40"
                  )}
                >
                  <span
                    className={cn(
                      "text-[10px]",
                      isActive ? "text-vellum-sand-light" : "text-vellum-charcoal-light"
                    )}
                  >
                    {step.num}
                  </span>
                  <span>{step.label}</span>
                </Link>

                {idx < STEPS.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-vellum-charcoal/25 shrink-0 hidden sm:block" />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
