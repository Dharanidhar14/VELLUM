import React from "react";

export function PaperTexture() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.035] mix-blend-multiply"
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="vellum-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.8 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#vellum-paper-noise)" />
      </svg>
    </div>
  );
}
