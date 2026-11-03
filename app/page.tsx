import React from "react";
import Link from "next/link";
import { GeometricArches } from "@/components/artwork/GeometricArches";
import { EditorialCompass } from "@/components/artwork/EditorialCompass";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, ArrowUpRight, ShieldCheck, Compass, FileText, Sparkles } from "lucide-react";

export default function LandingPage() {
  const steps = [
    {
      num: "01",
      title: "Understand your profile",
      description:
        "Submit your current resume. VELLUM parses verified experiences, coursework, and demonstrated technologies without synthetic exaggeration.",
      tag: "Verification",
    },
    {
      num: "02",
      title: "Explore your opportunities",
      description:
        "Select from benchmark industry roles or paste a specific job description to establish an exact technical benchmark.",
      tag: "Calibration",
    },
    {
      num: "03",
      title: "Identify your skill gaps",
      description:
        "Receive an objective audit contrasting your demonstrated evidence with real employer expectations—categorized as demonstrated, partial, or missing.",
      tag: "Diagnostic",
    },
    {
      num: "04",
      title: "Build your next step",
      description:
        "Follow a curated, multi-phase curriculum of targeted reference books, authoritative documentation, and concrete portfolio projects.",
      tag: "Action",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          HERO SECTION — Editorial Asymmetrical Composition
          ========================================================================= */}
      <section className="relative overflow-hidden border-b border-vellum-charcoal/15 pt-12 sm:pt-20 pb-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Editorial Narrative Column */}
            <div className="lg:col-span-7 space-y-8 z-10">
              {/* Monospaced Pill Badge (matching reference layout) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-vellum-sand/30 border border-vellum-charcoal/20">
                <span className="w-1.5 h-1.5 rounded-full bg-vellum-charcoal" />
                <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal">
                  Career Intelligence for Emerging Engineers
                </span>
              </div>

              {/* Large Editorial Serif Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-vellum-charcoal tracking-tight leading-[1.08]">
                Your next chapter,
                <br />
                <span className="italic font-normal">thoughtfully</span> prepared.
              </h1>

              {/* Supporting Text */}
              <p className="font-mono text-sm sm:text-base text-vellum-charcoal/80 max-w-xl leading-relaxed">
                Understand your strengths, identify the skills you’re missing, and
                prepare for the opportunities you actually want. No synthetic flattery—only
                verifiable engineering guidance.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/upload"
                  variant="primary"
                  size="lg"
                  withArrow
                >
                  Analyse your resume
                </Button>

                <Button
                  href="#how-it-works"
                  variant="secondary"
                  size="lg"
                >
                  Explore how it works
                </Button>
              </div>

              {/* Editorial metadata strip */}
              <div className="pt-8 border-t border-vellum-charcoal/10 grid grid-cols-3 gap-6 max-w-lg font-mono text-xs text-vellum-charcoal-muted">
                <div>
                  <span className="block text-vellum-charcoal font-semibold">01 &middot; Precision</span>
                  <span>Evidence-first matching</span>
                </div>
                <div>
                  <span className="block text-vellum-charcoal font-semibold">02 &middot; Privacy</span>
                  <span>Client-controlled data</span>
                </div>
                <div>
                  <span className="block text-vellum-charcoal font-semibold">03 &middot; Clarity</span>
                  <span>No synthetic scores</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Geometric Artwork Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-md aspect-[4/5] relative border border-vellum-charcoal/15 bg-vellum-ivory/50 p-6 flex flex-col justify-between">
                {/* Hairline corners */}
                <div className="absolute top-2 left-2 font-mono text-[9px] text-vellum-charcoal-light tracking-widest uppercase">
                  FIG. 01 — ALIGNMENT ARCHITECTURE
                </div>
                <div className="absolute top-2 right-2 font-mono text-[9px] text-vellum-charcoal-light">
                  51.5074° N
                </div>

                {/* SVG Concentric Arches from Design Reference */}
                <div className="my-auto w-full flex justify-center py-4">
                  <GeometricArches className="w-full h-auto max-h-[380px]" />
                </div>

                {/* Bottom caption */}
                <div className="border-t border-vellum-charcoal/15 pt-3 flex justify-between items-center font-mono text-[10px] text-vellum-charcoal-muted uppercase tracking-wider">
                  <span>VELLUM REFERENCE VAULT</span>
                  <span>SYSTEM SPEC 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HOW IT WORKS — 01 to 04 Process Matrix
          ========================================================================= */}
      <section
        id="how-it-works"
        className="py-24 sm:py-32 border-b border-vellum-charcoal/15 bg-vellum-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-vellum-charcoal/15 pb-8 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
                  Methodology & Process
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight">
                How VELLUM operates.
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-vellum-charcoal-muted max-w-md">
              A systematic career diagnostic built to remove ambiguity from entry-level and junior technical hiring.
            </p>
          </div>

          {/* 4-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-vellum-charcoal/15 border border-vellum-charcoal/15">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-vellum-ivory p-8 flex flex-col justify-between space-y-8 hover:bg-vellum-sand/15 transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-vellum-charcoal/10 pb-3">
                    <span className="font-mono text-sm text-vellum-charcoal font-semibold">
                      {step.num} &mdash;
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      {step.tag}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-vellum-charcoal group-hover:text-vellum-charcoal transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-vellum-charcoal-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-vellum-charcoal/10 flex items-center justify-between font-mono text-[11px] text-vellum-charcoal-light">
                  <span>SYSTEM PROTOCOL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRODUCT PREVIEW — Editorial Career Diagnostic Artifact
          ========================================================================= */}
      <section className="py-24 sm:py-32 border-b border-vellum-charcoal/15 bg-vellum-sand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
                Objective Scrutiny
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-vellum-charcoal tracking-tight leading-snug">
                Transparent evaluation.
                <br />
                Down to the line item.
              </h2>
              <p className="font-sans text-sm text-vellum-charcoal/80 leading-relaxed">
                Generic resume scanners offer arbitrary ATS scores with zero context.
                VELLUM breaks down your qualifications into verifiable proof points,
                showing exactly what employers detect, what they question, and what
                practical projects will close the gap.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Verified citations pulled directly from resume bullet points",
                  "Direct comparison against junior & entry-level engineering benchmarks",
                  "3-phase development roadmap with concrete deliverables",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-vellum-sage mt-0.5 shrink-0" />
                    <span className="font-mono text-xs text-vellum-charcoal">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/analysis" variant="primary" size="md" withArrow>
                  View Sample Assessment
                </Button>
              </div>
            </div>

            {/* Right Product Preview Card */}
            <div className="lg:col-span-7">
              <div className="bg-vellum-ivory border border-vellum-charcoal/20 p-6 sm:p-8 shadow-editorial relative">
                {/* Header of preview card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-vellum-charcoal/15 gap-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-vellum-charcoal-muted block">
                      Target Role Evaluation
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-vellum-charcoal">
                      Software Engineer &middot; Core Services
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="sage" dot>
                      Promising Alignment
                    </Badge>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-bold text-vellum-charcoal">
                        74
                      </span>
                      <span className="font-mono text-xs text-vellum-charcoal-muted">/100</span>
                    </div>
                  </div>
                </div>

                {/* Simulated live skills distribution */}
                <div className="py-6 border-b border-vellum-charcoal/15 space-y-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-vellum-charcoal-light block">
                    Observed Competency Distribution (14 Requirements)
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-vellum-sand/20 border border-vellum-charcoal/10">
                      <span className="font-mono text-[10px] uppercase text-vellum-charcoal-muted block">
                        Demonstrated
                      </span>
                      <span className="font-serif text-xl font-semibold text-vellum-charcoal">
                        7 Skills
                      </span>
                    </div>
                    <div className="p-3 bg-vellum-sand/20 border border-vellum-charcoal/10">
                      <span className="font-mono text-[10px] uppercase text-vellum-charcoal-muted block">
                        Partially Shown
                      </span>
                      <span className="font-serif text-xl font-semibold text-vellum-charcoal">
                        4 Skills
                      </span>
                    </div>
                    <div className="p-3 bg-vellum-sand/20 border border-vellum-charcoal/10">
                      <span className="font-mono text-[10px] uppercase text-vellum-charcoal-muted block">
                        Missing Evidence
                      </span>
                      <span className="font-serif text-xl font-semibold text-vellum-charcoal">
                        3 Skills
                      </span>
                    </div>
                  </div>
                </div>

                {/* Evidence snippet */}
                <div className="pt-6 space-y-3 font-sans text-xs">
                  <div className="p-3 bg-vellum-ivory border-l-2 border-vellum-sage bg-vellum-sand/10">
                    <div className="flex items-center justify-between pb-1 font-mono text-[11px]">
                      <span className="font-medium text-vellum-charcoal">
                        Automated Testing & Pytest Fixtures
                      </span>
                      <span className="text-[#92541a] font-semibold">Partial Evidence</span>
                    </div>
                    <p className="text-vellum-charcoal-muted italic">
                      &ldquo;Performed manual sanity checks and wrote assertion scripts for data pipelines.&rdquo;
                    </p>
                    <p className="text-vellum-charcoal mt-1 text-[11px]">
                      &rarr; <strong>Gap identified:</strong> No formal testing framework (pytest/unittest) or CI badges evidenced.
                    </p>
                  </div>
                </div>

                {/* Editorial watermark */}
                <div className="mt-6 pt-4 border-t border-vellum-charcoal/10 flex justify-between items-center font-mono text-[10px] text-vellum-charcoal-light">
                  <span>SAMPLE INTELLIGENCE RECORD</span>
                  <span>AUTONOMOUS AUDIT ENGINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-vellum-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center justify-center">
            <EditorialCompass className="w-12 h-12 opacity-80" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight leading-tight">
            Stop guessing what technical recruiters see.
          </h2>

          <p className="font-mono text-sm sm:text-base text-vellum-charcoal-muted max-w-xl mx-auto leading-relaxed">
            Upload your resume, select your target role, and receive a rigorous editorial analysis in seconds.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button href="/upload" variant="primary" size="lg" withArrow>
              Analyse your resume
            </Button>
            <Button href="/roles" variant="secondary" size="lg">
              Explore Role Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
