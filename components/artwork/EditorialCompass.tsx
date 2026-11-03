import React from "react";

export function EditorialCompass({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" stroke="#252820" strokeWidth="0.75" strokeOpacity="0.25" />
      <circle cx="50" cy="50" r="38" stroke="#252820" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2 3" />
      <circle cx="50" cy="50" r="2" fill="#647763" />
      
      {/* Editorial cross ticks */}
      <line x1="50" y1="0" x2="50" y2="100" stroke="#252820" strokeWidth="0.75" strokeOpacity="0.2" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="#252820" strokeWidth="0.75" strokeOpacity="0.2" />
      
      {/* Corner calibration brackets */}
      <path d="M 20 20 L 26 20 M 20 20 L 20 26" stroke="#252820" strokeWidth="0.75" strokeOpacity="0.4" />
      <path d="M 80 20 L 74 20 M 80 20 L 80 26" stroke="#252820" strokeWidth="0.75" strokeOpacity="0.4" />
      <path d="M 20 80 L 26 80 M 20 80 L 20 74" stroke="#252820" strokeWidth="0.75" strokeOpacity="0.4" />
      <path d="M 80 80 L 74 80 M 80 80 L 80 74" stroke="#252820" strokeWidth="0.75" strokeOpacity="0.4" />
    </svg>
  );
}
