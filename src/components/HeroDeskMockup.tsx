"use client";

import React, { useRef } from "react";
import { RootsightLogo } from "./RootsightLogo";

/**
 * Clean Studio Desk & Cartoon-Tech Command Center Mockup
 * Matches Awwwards Site of the Day Presentation (Apple Studio Display format)
 * with Two26 Studio-inspired cartoon-tech characters and Google/GitHub/Microsoft
 * micro-animations (gentle floating bob, radar pulse, fluent shadow, spotlight).
 */
export function HeroDeskMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    containerRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group relative mx-auto w-full max-w-[780px] lg:max-w-[840px] transition-transform duration-300 ease-out hover:scale-[1.008]"
    >
      {/* Studio Display Frame */}
      <div className="relative z-10 mx-auto w-full">
        {/* Monitor Bezel */}
        <div className="relative mx-auto rounded-[16px] sm:rounded-[20px] border-[5px] sm:border-[7px] border-[#1d1d20] bg-[#0E0E10] shadow-[0_20px_50px_rgba(0,0,0,0.16)] transition-shadow duration-300 group-hover:shadow-[0_28px_65px_rgba(0,0,0,0.22)]">
          {/* Top bezel camera dot */}
          <div className="absolute -top-[5px] sm:-top-[7px] left-1/2 -translate-x-1/2 flex items-center justify-center h-2 w-2">
            <span className="h-1 w-1 rounded-full bg-[#4a4a50]" />
          </div>

          {/* Screen Canvas: Bold Red & Solar Yellow Cartoon-Tech Editorial World */}
          <div className="relative aspect-[16/9] w-full max-h-[36vh] sm:max-h-[40vh] md:max-h-[44vh] overflow-hidden rounded-[9px] sm:rounded-[12px] bg-[#D8281E]">
            {/* Top Browser Command Bar */}
            <div className="flex h-6 sm:h-7 items-center justify-between border-b border-black/10 bg-[#C42416] px-2.5 sm:px-3">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              </div>
              <div className="rounded-full bg-black/25 px-2.5 py-0.5 font-mono text-[8px] sm:text-[9px] tracking-wider text-white/90">
                rootsight.in // security-automated
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[8px] sm:text-[9px] font-bold text-[#FFD13B]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00FF9C]" />
                </span>
                <span>ARMED</span>
              </div>
            </div>

            {/* Cartoon-Tech Scene (Two26 Studio Style from Screenshot) */}
            <div className="relative flex h-[calc(100%-24px)] sm:h-[calc(100%-28px)] flex-col justify-between p-2.5 sm:p-4">
              {/* Decorative Top Eyebrow */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded bg-black text-white">
                    <RootsightLogo size={11} color="#FFFFFF" accentEye={false} />
                  </div>
                  <span className="text-[9px] sm:text-xs font-black tracking-wider text-white">
                    ROOTSIGHT LABS
                  </span>
                </div>
                <div className="rounded-full bg-[#FFB703] px-2 sm:px-2.5 py-0.5 text-[7px] sm:text-[8px] font-bold text-black uppercase tracking-wider shadow-xs">
                  DPIIT India Recognized
                </div>
              </div>

              {/* Vector Cartoon-Tech Illustration with Subtle Google/GitHub Micro-Animations */}
              <svg
                viewBox="0 0 600 240"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Fluid Curves */}
                <path
                  d="M -20 180 Q 200 40 400 180 T 620 120"
                  stroke="#FFB703"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="500" cy="110" r="45" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.4" />

                {/* Ground walking line */}
                <line x1="40" y1="210" x2="560" y2="210" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Character 1 (Left): Walking operative holding "ROOT" sign (Gentle float animation) */}
                <g className="animate-float" transform="translate(130, 35)">
                  {/* Shadow */}
                  <ellipse cx="60" cy="174" rx="28" ry="5" fill="#1A1A1E" fillOpacity="0.25" />

                  {/* Legs in motion (clean white pants) */}
                  <path d="M 50 110 L 36 170" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 70 110 L 82 170" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
                  <ellipse cx="33" cy="172" rx="7" ry="3.5" fill="#1A1A1E" />
                  <ellipse cx="85" cy="172" rx="7" ry="3.5" fill="#1A1A1E" />

                  {/* Body (Dark cyber jacket) */}
                  <path d="M 44 60 C 44 55 76 55 76 60 L 80 110 L 40 110 Z" fill="#1A1A1E" />

                  {/* Arms holding the signboard */}
                  <path d="M 44 70 L 28 90 L 48 90" stroke="#1A1A1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 76 70 L 92 90 L 72 90" stroke="#1A1A1E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Signboard: "ROOT" */}
                  <rect x="25" y="70" width="70" height="38" rx="4" fill="#FFFFFF" stroke="#1A1A1E" strokeWidth="2" />
                  <text x="60" y="95" fill="#1A1A1E" fontSize="16" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">ROOT</text>

                  {/* Head & Sunglasses */}
                  <circle cx="60" cy="36" r="13" fill="#FAD4C0" />
                  <path d="M 48 34 C 48 22 72 22 72 34 Z" fill="#1A1A1E" />
                  <rect x="54" y="34" width="14" height="4.5" rx="1.5" fill="#FFB703" />
                </g>

                {/* Character 2 (Center-Right): Walking operative holding "SIGHT" sign (Reverse float animation) */}
                <g className="animate-float-reverse" transform="translate(310, 35)">
                  {/* Shadow */}
                  <ellipse cx="60" cy="174" rx="28" ry="5" fill="#1A1A1E" fillOpacity="0.25" />

                  {/* Legs in motion (clean white pants) */}
                  <path d="M 48 110 L 38 170" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 68 110 L 84 170" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
                  <ellipse cx="35" cy="172" rx="7" ry="3.5" fill="#1A1A1E" />
                  <ellipse cx="87" cy="172" rx="7" ry="3.5" fill="#1A1A1E" />

                  {/* Body (Warm golden-yellow cyber top) */}
                  <path d="M 44 60 C 44 55 76 55 76 60 L 80 110 L 40 110 Z" fill="#FFB703" />

                  {/* Arms holding the signboard */}
                  <path d="M 44 70 L 28 90 L 48 90" stroke="#FFB703" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 76 70 L 92 90 L 72 90" stroke="#FFB703" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Signboard: "SIGHT" */}
                  <rect x="22" y="70" width="76" height="38" rx="4" fill="#FFFFFF" stroke="#1A1A1E" strokeWidth="2" />
                  <text x="60" y="95" fill="#1A1A1E" fontSize="15" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">SIGHT</text>

                  {/* Head & Stylized Hair */}
                  <circle cx="60" cy="36" r="13" fill="#FAD4C0" />
                  <path d="M 48 34 C 48 20 72 20 72 34 Z" fill="#D8281E" />
                  <rect x="54" y="34" width="14" height="4.5" rx="1.5" fill="#1A1A1E" />
                </g>

                {/* Stylized walking cyber cat 1 */}
                <g transform="translate(60, 160)">
                  <ellipse cx="26" cy="36" rx="16" ry="9" fill="#1A1A1E" />
                  <circle cx="44" cy="30" r="7" fill="#1A1A1E" />
                  <polygon points="40,24 44,18 47,24" fill="#1A1A1E" />
                  <polygon points="45,24 49,18 52,24" fill="#1A1A1E" />
                  <line x1="16" y1="42" x2="14" y2="50" stroke="#1A1A1E" strokeWidth="3" strokeLinecap="round" />
                  <line x1="24" y1="42" x2="26" y2="50" stroke="#1A1A1E" strokeWidth="3" strokeLinecap="round" />
                  <line x1="34" y1="42" x2="33" y2="50" stroke="#1A1A1E" strokeWidth="3" strokeLinecap="round" />
                  <line x1="40" y1="42" x2="42" y2="50" stroke="#1A1A1E" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 12 36 Q 2 28 8 18" stroke="#1A1A1E" strokeWidth="3" strokeLinecap="round" fill="none" />
                </g>

                {/* Stylized walking cyber cat 2 */}
                <g transform="translate(480, 160)">
                  <ellipse cx="26" cy="36" rx="16" ry="9" fill="#FFB703" />
                  <circle cx="44" cy="30" r="7" fill="#FFB703" />
                  <polygon points="40,24 44,18 47,24" fill="#FFB703" />
                  <polygon points="45,24 49,18 52,24" fill="#FFB703" />
                  <line x1="16" y1="42" x2="14" y2="50" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
                  <line x1="24" y1="42" x2="26" y2="50" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
                  <line x1="34" y1="42" x2="33" y2="50" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
                  <line x1="40" y1="42" x2="42" y2="50" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 12 36 Q 2 28 8 18" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" fill="none" />
                </g>
              </svg>

              {/* Bottom Editorial Caption */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-1 font-mono text-[7px] sm:text-[9px]">
                <span className="text-[#FFE875] font-bold">
                  SECURITY PEOPLE TRUST &middot; SOVEREIGN INTELLIGENCE
                </span>
                <span className="text-white/80 hidden sm:inline">
                  ROOT CAUSE AUTOMATION
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Apple Studio Display Aluminum Stand with Cable Pass-Through */}
        <div className="relative mx-auto flex flex-col items-center">
          <div className="relative h-4 sm:h-6 w-10 sm:w-14 bg-gradient-to-b from-[#2e2e32] to-[#1c1c1e] shadow-inner">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-4 sm:h-2.5 sm:w-6 rounded-full bg-[#0E0E10] border border-black/30" />
          </div>
          <div className="h-1 sm:h-1.5 w-24 sm:w-36 rounded-full bg-gradient-to-r from-[#202022] via-[#3d3d42] to-[#202022] shadow-[0_4px_12px_rgba(0,0,0,0.18)]" />
        </div>
      </div>
    </div>
  );
}
