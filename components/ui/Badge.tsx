import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "sage" | "sand" | "charcoal" | "amber" | "outline";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "neutral",
  dot = false,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[11px] tracking-wider uppercase border select-none";

  const variantStyles = {
    neutral:
      "bg-vellum-ivory text-vellum-charcoal border-vellum-charcoal/20",
    sage:
      "bg-vellum-sage-tint text-vellum-sage-dark border-vellum-sage/30 font-medium",
    sand:
      "bg-vellum-sand/40 text-vellum-charcoal border-vellum-charcoal/15",
    charcoal:
      "bg-vellum-charcoal text-vellum-ivory border-vellum-charcoal",
    amber:
      "bg-[#fdf3e7] text-[#92541a] border-[#e4b986]/50",
    outline:
      "bg-transparent text-vellum-charcoal/80 border-vellum-charcoal/25",
  };

  const dotColors = {
    neutral: "bg-vellum-charcoal/60",
    sage: "bg-vellum-sage",
    sand: "bg-vellum-sand-dark",
    charcoal: "bg-vellum-ivory",
    amber: "bg-[#b76e1a]",
    outline: "bg-vellum-charcoal/50",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])} />}
      {children}
    </span>
  );
}
