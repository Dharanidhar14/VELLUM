import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "sage" | "ghost" | "sand";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  withArrow = false,
  href,
  external,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-vellum-charcoal disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-[11px] gap-1.5",
    md: "px-5 py-2.5 text-xs gap-2.5",
    lg: "px-7 py-3.5 text-sm gap-3 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-vellum-charcoal text-vellum-ivory border border-vellum-charcoal hover:bg-[#34382c] active:translate-y-[1px]",
    secondary:
      "bg-transparent text-vellum-charcoal border border-vellum-charcoal/40 hover:border-vellum-charcoal hover:bg-vellum-charcoal/[0.03] active:translate-y-[1px]",
    sage: "bg-vellum-sage text-vellum-ivory border border-vellum-sage hover:bg-vellum-sage-dark active:translate-y-[1px]",
    sand: "bg-vellum-sand/40 text-vellum-charcoal border border-vellum-charcoal/20 hover:bg-vellum-sand/60",
    ghost:
      "bg-transparent text-vellum-charcoal hover:text-vellum-charcoal-muted underline-offset-4 hover:underline p-0",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    "group",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
