"use client";

import React, { useState, useEffect } from "react";
import { Check, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  type?: "success" | "info" | "warning";
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  type = "info",
  isOpen,
  onClose,
  duration = 4000,
}: ToastProps) {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="status"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-vellum-ivory border shadow-editorial max-w-md animate-in fade-in slide-in-from-bottom-2 duration-200",
        type === "success" && "border-vellum-sage text-vellum-charcoal",
        type === "warning" && "border-[#b76e1a] text-vellum-charcoal",
        type === "info" && "border-vellum-charcoal text-vellum-charcoal"
      )}
    >
      {type === "success" && <Check className="w-4 h-4 text-vellum-sage shrink-0" />}
      {type === "warning" && <AlertCircle className="w-4 h-4 text-[#b76e1a] shrink-0" />}
      <span className="font-mono text-xs tracking-wide">{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-vellum-charcoal-muted hover:text-vellum-charcoal p-1"
        aria-label="Dismiss message"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
