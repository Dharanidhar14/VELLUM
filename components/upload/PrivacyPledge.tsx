import React from "react";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export function PrivacyPledge() {
  return (
    <div className="border border-vellum-charcoal/15 bg-vellum-sand/20 p-6 sm:p-8 space-y-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-vellum-sage" />
        <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal font-semibold">
          VELLUM Privacy Reassurance
        </span>
      </div>

      <p className="font-sans text-xs sm:text-sm text-vellum-charcoal/80 leading-relaxed">
        Your curriculum vitae represents personal intellectual property. We treat it with strict editorial confidentiality:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs text-vellum-charcoal-muted">
        <div className="flex items-start gap-2.5">
          <Lock className="w-3.5 h-3.5 text-vellum-charcoal-light mt-0.5 shrink-0" />
          <span>No retention for foundational AI model training.</span>
        </div>
        <div className="flex items-start gap-2.5">
          <EyeOff className="w-3.5 h-3.5 text-vellum-charcoal-light mt-0.5 shrink-0" />
          <span>Parsed transiently in encrypted memory sessions.</span>
        </div>
      </div>
    </div>
  );
}
