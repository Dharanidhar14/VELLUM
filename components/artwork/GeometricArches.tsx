import React from "react";

interface GeometricArchesProps {
  className?: string;
  variant?: "hero" | "compact" | "dual";
}

export function GeometricArches({ className = "", variant = "hero" }: GeometricArchesProps) {
  // Arches with concentric geometric lines inspired by architectural vellum drafting
  const rings = [10, 24, 38, 52, 66, 80, 94, 108, 122, 136];

  if (variant === "compact") {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {rings.slice(0, 6).map((radius, idx) => (
          <path
            key={idx}
            d={`M ${100 - radius} 170 V 100 A ${radius} ${radius} 0 0 1 ${100 + radius} 100 V 170`}
            stroke="#252820"
            strokeWidth="0.85"
            strokeOpacity={0.22 + (idx % 2) * 0.08}
          />
        ))}
        <circle cx="100" cy="100" r="2" fill="#252820" fillOpacity="0.4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 420 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Upper concentric arch vault */}
      <g>
        {rings.map((radius, i) => {
          const cy = 160;
          const cx = 210;
          return (
            <path
              key={`upper-${i}`}
              d={`M ${cx - radius} 0 V ${cy} A ${radius} ${radius} 0 0 0 ${cx + radius} ${cy} V 0`}
              stroke="#252820"
              strokeWidth="0.85"
              strokeOpacity={0.16 + (i / rings.length) * 0.12}
            />
          );
        })}
      </g>

      {/* Axis alignment crosshair */}
      <line x1="210" y1="0" x2="210" y2="540" stroke="#252820" strokeWidth="0.6" strokeDasharray="3 4" strokeOpacity="0.15" />
      <line x1="40" y1="270" x2="380" y2="270" stroke="#252820" strokeWidth="0.6" strokeDasharray="3 4" strokeOpacity="0.15" />

      {/* Lower concentric arch vault */}
      <g>
        {rings.map((radius, i) => {
          const cy = 380;
          const cx = 210;
          return (
            <path
              key={`lower-${i}`}
              d={`M ${cx - radius} 540 V ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy} V 540`}
              stroke="#252820"
              strokeWidth="0.85"
              strokeOpacity={0.16 + (i / rings.length) * 0.12}
            />
          );
        })}
      </g>

      {/* Architectural focal points */}
      <circle cx="210" cy="160" r="3.5" fill="#252820" fillOpacity="0.45" />
      <circle cx="210" cy="380" r="3.5" fill="#252820" fillOpacity="0.45" />
      <circle cx="210" cy="270" r="5" stroke="#252820" strokeWidth="0.8" strokeOpacity="0.4" />
      <circle cx="210" cy="270" r="1.5" fill="#647763" />
    </svg>
  );
}
