"use client";

import React, { forwardRef } from "react";

interface RootsightLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: number;
  accentEye?: boolean;
  color?: string;
  accentColor?: string;
}

/**
 * Vector-traced ROOTSIGHT logo.
 * Geometry:
 *  - Main square frame + overlapping top-left square with solid intersection
 *  - Square-root symbol (√) with angled vinculum tip
 *  - Stylized eye (slanted upper lid + U-shaped iris cup) beneath the root bar
 * Supports dark/light themes via customizable color props.
 */
export const RootsightLogo = forwardRef<SVGSVGElement, RootsightLogoProps>(
  function RootsightLogo(
    {
      className = "",
      showWordmark = false,
      size = 36,
      accentEye = true,
      color = "#0A0A0A",
      accentColor = "#00C875",
    },
    ref
  ) {
    const viewBox = showWordmark ? "0 0 240 275" : "0 0 240 230";

    return (
      <svg
        ref={ref}
        width={size}
        height={showWordmark ? Math.round((size * 275) / 240) : size}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ROOTSIGHT Logo"
      >
        {/* Top-left overlapping square */}
        <rect
          id="rs-corner-square"
          x="28"
          y="28"
          width="56"
          height="56"
          stroke={color}
          strokeWidth="6.5"
        />

        {/* Main outer square frame */}
        <rect
          id="rs-main-square"
          x="56"
          y="56"
          width="144"
          height="144"
          stroke={color}
          strokeWidth="6.5"
        />

        {/* Solid intersection block */}
        <rect
          id="rs-overlap-block"
          x="56"
          y="56"
          width="28"
          height="28"
          fill={color}
        />

        {/* Square-root symbol (√) */}
        <path
          id="rs-sqrt-path"
          d="M72 133 H85 L99 166 L120 93 H185 L179 102 H126 L103 176 H94 L79 141 H72 Z"
          fill={color}
        />

        {/* Stylized Eye: Upper slanted eyelid */}
        <path
          id="rs-eye-lid"
          d="M126 116 C126 112.5 128.5 110 132 110 H144 L177 122 L173 132 L141 121 H132 C128.5 121 126 118.5 126 116 Z"
          fill={color}
        />

        {/* Stylized Eye: Lower iris/cup */}
        <path
          id="rs-eye-iris"
          d="M134 136 A 20 20 0 1 0 170 144"
          stroke={accentEye ? accentColor : color}
          strokeWidth="12"
          strokeLinecap="butt"
          fill="none"
        />

        {showWordmark && (
          <text
            id="rs-wordmark"
            x="120"
            y="246"
            textAnchor="middle"
            fill={color}
            fontFamily="var(--font-orbitron), sans-serif"
            fontWeight="700"
            fontSize="23"
            letterSpacing="4"
          >
            ROOT SIGHT
          </text>
        )}
      </svg>
    );
  }
);
