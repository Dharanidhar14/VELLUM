import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "ivory" | "sand" | "bordered" | "charcoal";
}

export function Card({
  children,
  className,
  variant = "ivory",
  ...props
}: CardProps) {
  const variantStyles = {
    ivory: "bg-vellum-ivory border border-vellum-charcoal/15",
    sand: "bg-vellum-sand/30 border border-vellum-charcoal/15",
    bordered: "bg-transparent border border-vellum-charcoal/20",
    charcoal: "bg-vellum-charcoal text-vellum-ivory border border-vellum-charcoal",
  };

  return (
    <div
      className={cn(
        "relative transition-all duration-150 p-6 sm:p-8",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
