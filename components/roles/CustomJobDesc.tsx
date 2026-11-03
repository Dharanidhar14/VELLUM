"use client";

import React from "react";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import { Button } from "@/components/ui/Button";
import { FileCode, Trash2, Sparkles } from "lucide-react";

export function CustomJobDesc() {
  const { customJobDescription, setCustomJobDescription } = useAnalysis();

  const samplePosting = `Position: Associate Backend Software Engineer
Location: London / Remote
Experience: 0-2 years

About the Role:
We are looking for an ambitious Associate Backend Engineer to help scale our payment processing infrastructure. You will collaborate with senior architects to implement idempotent microservices, manage database migrations, and maintain rigorous automated test suites.

Key Responsibilities:
- Design and implement RESTful APIs using Python (FastAPI) or Go.
- Model normalized database schemas and optimize indexing in PostgreSQL.
- Containerize services using Docker and manage deployments with GitHub Actions.
- Write unit and integration tests using pytest, ensuring over 85% test coverage.
- Instrument services with structured logging and Prometheus metrics.

Requirements:
- Bachelor's degree in Computer Science or equivalent practical understanding.
- Strong proficiency in modern Python 3 or equivalent compiled backend languages.
- Understanding of relational database ACID properties and SQL.
- Familiarity with containerization fundamentals (Docker, docker-compose).
- Passion for writing clean, well-tested, maintainable code.`;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-vellum-charcoal/15 pb-3">
        <div>
          <h3 className="font-serif text-lg text-vellum-charcoal">
            Custom Job Description Input
          </h3>
          <p className="font-mono text-xs text-vellum-charcoal-muted">
            Paste the verbatim text of any job listing to benchmark your resume against its exact requirements.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setCustomJobDescription(samplePosting)}
            className="text-[11px] gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-vellum-sage" />
            Load Sample Posting
          </Button>
          {customJobDescription && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCustomJobDescription("")}
              className="text-[11px] text-red-800 border-red-800/20 hover:border-red-800"
            >
              <Trash2 className="w-3 h-3" />
              Clear
            </Button>
          )}
        </div>
      </div>

      <div className="relative">
        <textarea
          rows={12}
          value={customJobDescription}
          onChange={(e) => setCustomJobDescription(e.target.value)}
          placeholder="Paste job posting text here (including role summary, technical requirements, and qualifications)..."
          className="w-full bg-vellum-ivory border border-vellum-charcoal/25 p-4 font-mono text-xs text-vellum-charcoal placeholder:text-vellum-charcoal-light focus:outline-none focus:border-vellum-charcoal leading-relaxed resize-y"
        />
        <div className="absolute right-3 bottom-4 font-mono text-[10px] text-vellum-charcoal-light bg-vellum-ivory/90 px-1 border border-vellum-charcoal/10">
          {customJobDescription.length} characters
        </div>
      </div>

      <div className="p-4 bg-vellum-sand/20 border border-vellum-charcoal/15 flex items-start gap-3">
        <FileCode className="w-4 h-4 text-vellum-charcoal-light mt-0.5 shrink-0" />
        <div className="font-mono text-xs text-vellum-charcoal-muted space-y-1">
          <span className="font-semibold text-vellum-charcoal block">Extraction Engine</span>
          <p>
            VELLUM will dynamically extract required programming languages, system paradigms, database requirements,
            and soft skills directly from the pasted text to build your diagnostic report.
          </p>
        </div>
      </div>
    </div>
  );
}
