import React from "react";
import { ResumeUploader } from "@/components/upload/ResumeUploader";
import { PrivacyPledge } from "@/components/upload/PrivacyPledge";
import { EditorialCompass } from "@/components/artwork/EditorialCompass";

export default function ResumeUploadPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full space-y-12">
      {/* Editorial Page Header */}
      <div className="border-b border-vellum-charcoal/15 pb-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
              Step 01 &middot; Document Ingestion
            </span>
          </div>
          <span className="font-mono text-xs text-vellum-charcoal-light">
            CONFIDENTIAL &middot; 2026
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-vellum-charcoal tracking-tight">
          Submit your curriculum vitae.
        </h1>

        <p className="font-mono text-xs sm:text-sm text-vellum-charcoal-muted max-w-2xl leading-relaxed">
          VELLUM performs evidence-grounded parsing across your skills, repositories, and academic
          history. Upload your current resume in standard PDF or DOCX format.
        </p>
      </div>

      {/* Main Upload Interface */}
      <ResumeUploader />

      {/* Editorial Privacy Reassurance */}
      <PrivacyPledge />

      {/* Colophon notes */}
      <div className="pt-6 border-t border-vellum-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-vellum-charcoal-light">
        <div className="flex items-center gap-2">
          <EditorialCompass className="w-4 h-4 opacity-60" />
          <span>System verified for UTF-8 standard ASCII and Unicode PDF structures.</span>
        </div>
        <span>Client-side verification active</span>
      </div>
    </div>
  );
}
