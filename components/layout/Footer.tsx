import React from "react";
import Link from "next/link";
import { EditorialCompass } from "@/components/artwork/EditorialCompass";

export function Footer() {
  return (
    <footer className="w-full bg-vellum-ivory border-t border-vellum-charcoal/15 mt-24">
      {/* Editorial colophon container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Colophon Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-normal tracking-tight text-vellum-charcoal">
                vellum
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-vellum-sage" />
            </div>
            
            <p className="font-serif text-xl sm:text-2xl text-vellum-charcoal/90 leading-snug max-w-sm">
              Your next chapter, thoughtfully prepared.
            </p>
            
            <p className="font-sans text-xs text-vellum-charcoal-muted leading-relaxed max-w-sm">
              VELLUM is an editorial career intelligence platform designed for students,
              emerging engineers, and analysts to build verifiable employability through deep
              skills gap transparency.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <EditorialCompass className="w-8 h-8 opacity-70" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-vellum-charcoal-muted">
                Vol. I &middot; System Edition 2026
              </span>
            </div>
          </div>

          {/* Links Column 1: Platform Experience */}
          <div className="md:col-span-3 space-y-4">
            <span className="block font-mono text-[11px] uppercase tracking-widest text-vellum-charcoal-muted border-b border-vellum-charcoal/15 pb-2">
              01 &middot; Platform Experience
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <Link
                  href="/upload"
                  className="text-vellum-charcoal hover:text-vellum-sage transition-colors"
                >
                  Resume Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/roles"
                  className="text-vellum-charcoal hover:text-vellum-sage transition-colors"
                >
                  Target Role Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/analysis"
                  className="text-vellum-charcoal hover:text-vellum-sage transition-colors"
                >
                  Alignment Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-vellum-charcoal hover:text-vellum-sage transition-colors"
                >
                  Detailed Skill Matrix
                </Link>
              </li>
              <li>
                <Link
                  href="/plan"
                  className="text-vellum-charcoal hover:text-vellum-sage transition-colors"
                >
                  Development Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Editorial Principles */}
          <div className="md:col-span-4 space-y-4">
            <span className="block font-mono text-[11px] uppercase tracking-widest text-vellum-charcoal-muted border-b border-vellum-charcoal/15 pb-2">
              02 &middot; Engineering Standards
            </span>
            <div className="space-y-3 font-sans text-xs text-vellum-charcoal-muted leading-relaxed">
              <p>
                We do not produce synthetic flattery or arbitrary scorecards. Every recommendation is
                derived from verifiable resume evidence cross-referenced against technical hiring standards.
              </p>
              <p className="font-mono text-[11px] text-vellum-charcoal-light">
                Non-extractive &middot; Local first privacy &middot; Restrained design
              </p>
            </div>
          </div>
        </div>

        {/* Lower colophon bar */}
        <div className="mt-16 pt-8 border-t border-vellum-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-vellum-charcoal-light">
          <div>
            &copy; {new Date().getFullYear()} VELLUM Intelligence Platform. Crafted with editorial care.
          </div>
          <div className="flex items-center gap-6">
            <span>Bodoni Moda / Inter / IBM Plex Mono</span>
            <span>#F5F1E8 &middot; #252820</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
