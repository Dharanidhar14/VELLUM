"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RoleCatalog } from "@/components/roles/RoleCatalog";
import { CustomJobDesc } from "@/components/roles/CustomJobDesc";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, RefreshCw, FileText, CheckCircle2 } from "lucide-react";

export default function TargetRoleSelectionPage() {
  const router = useRouter();
  const { resume, activeRole, customJobDescription, isAnalyzing, runAnalysis } = useAnalysis();
  const [activeTab, setActiveTab] = useState<"catalog" | "custom">("catalog");

  const handleStartAnalysis = async () => {
    try {
      await runAnalysis();
      router.push("/analysis");
    } catch (err) {
      console.error("Analysis execution error:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full space-y-10">
      {/* Editorial Page Header */}
      <div className="border-b border-vellum-charcoal/15 pb-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
            Step 02 &middot; Target Calibration
          </span>
          <span className="font-mono text-xs text-vellum-charcoal-light">
            ROLE BENCHMARKS &middot; 2026
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight">
          Select target calibration.
        </h1>

        <p className="font-mono text-xs sm:text-sm text-vellum-charcoal-muted max-w-2xl leading-relaxed">
          Calibrate your candidate profile against established industry role standards,
          or supply verbatim text from a live job requisition.
        </p>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex items-center gap-4 border-b border-vellum-charcoal/15 pb-px">
        <button
          onClick={() => setActiveTab("catalog")}
          className={`font-mono text-xs uppercase tracking-wider py-2.5 px-4 border-b-2 transition-all ${
            activeTab === "catalog"
              ? "border-vellum-charcoal text-vellum-charcoal font-semibold bg-vellum-sand/20"
              : "border-transparent text-vellum-charcoal-muted hover:text-vellum-charcoal"
          }`}
        >
          01 &middot; Predefined Engineering Roles
        </button>
        <button
          onClick={() => setActiveTab("custom")}
          className={`font-mono text-xs uppercase tracking-wider py-2.5 px-4 border-b-2 transition-all ${
            activeTab === "custom"
              ? "border-vellum-charcoal text-vellum-charcoal font-semibold bg-vellum-sand/20"
              : "border-transparent text-vellum-charcoal-muted hover:text-vellum-charcoal"
          }`}
        >
          02 &middot; Custom Job Description
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "catalog" ? <RoleCatalog /> : <CustomJobDesc />}

      {/* Sticky Bottom Action Tray */}
      <div className="border border-vellum-charcoal/20 bg-vellum-ivory p-6 shadow-editorial flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-vellum-charcoal-muted">
              Active Configuration
            </span>
            <Badge variant="neutral" className="text-[10px]">
              {resume ? resume.name : "Sample Document Loaded"}
            </Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl sm:text-2xl text-vellum-charcoal font-medium">
              {activeTab === "catalog"
                ? activeRole?.title || "Software Engineer"
                : customJobDescription
                ? "Custom Job Specification"
                : "No Custom Text Pasted (Defaulting to Core Engineer)"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleStartAnalysis}
            disabled={isAnalyzing}
            withArrow={!isAnalyzing}
            className="w-full sm:w-auto"
          >
            {isAnalyzing ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Evaluating Alignment...
              </span>
            ) : (
              "Run Alignment Analysis"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
