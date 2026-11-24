"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { RootsightLogo } from "@/components/RootsightLogo";
import { HeroDeskMockup } from "@/components/HeroDeskMockup";
import { MARQUEE_KEYWORDS } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-stagger", {
        y: 12,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        delay: 0.04,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative bg-[#f8f8f8] pt-20 sm:pt-22 pb-0 border-b border-[#ededed] min-h-[calc(100vh-66px)] flex flex-col justify-between overflow-hidden"
    >
      {/* GitHub/Microsoft Architectural Precision Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      {/* GitHub Copilot-style ambient warm glow beacon */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(216,40,30,0.07),rgba(255,183,3,0.06),transparent_70%)] animate-beacon" />

      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-between">
        {/* Top Header Group: Eyebrow + Headline + Attribution */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Meta Row with Google/GitHub pill shine */}
          <div className="hero-stagger flex items-center justify-center gap-2 sm:gap-3 text-center text-[10px] sm:text-xs font-normal text-[#7a7a7a]">
            <span>Platform of the Day</span>
            <span className="relative overflow-hidden rounded-full border border-[#dedede] bg-[#ffffff] px-2.5 sm:px-3 py-0.5 sm:py-1 font-mono text-[9px] sm:text-[11px] font-semibold text-[#222222] shadow-2xs">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent animate-shimmer" />
              Nov 25, 2026
            </span>
            <span className="text-[#dedede]">·</span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00c875] animate-pulse" />
              <span>Security Score 9.94 of 10</span>
            </div>
          </div>

          {/* Monumental Centered Awwwards Headline */}
          <div className="hero-stagger my-1.5 sm:my-2.5">
            <h1 className="font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-[#222222] text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem]">
              ROOTSIGHT
            </h1>
          </div>

          {/* Creator Attribution & Startup India Badge */}
          <div className="hero-stagger mb-3 sm:mb-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#222222] text-white">
              <RootsightLogo size={11} color="#FFFFFF" accentEye={false} />
            </div>
            <a
              href="#about"
              className="font-semibold tracking-wide text-[#222222] underline underline-offset-4 decoration-[#a7a7a7] hover:decoration-[#222222] transition-colors"
            >
              Rootsight Cyber Labs
            </a>
            <span className="text-[#dedede]">·</span>
            <span className="rounded-full bg-[#D8281E]/10 border border-[#D8281E]/20 px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold text-[#D8281E]">
              Startup India Registered
            </span>
          </div>
        </div>

        {/* Center: Apple Studio Display Showcase Mockup (Scaled to fit single screen) */}
        <div className="hero-stagger my-1 sm:my-2 w-full flex justify-center">
          <HeroDeskMockup />
        </div>

        {/* Action Bar (100% Fully Visible in Single Screen, Zero Slicing or Overflow) */}
        <div className="hero-stagger mt-3 sm:mt-4 mb-3 sm:mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
          {/* Live Telemetry Ping */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c875] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c875]" />
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#222222]">
              Active Platform // Law Enforcement Intelligence &amp; Red Teaming
            </span>
          </div>

          {/* CTAs with Google-style micro-scale and GitHub arrow slide */}
          <div className="flex items-center gap-2.5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#222222] px-5 sm:px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Systems</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#dedede] bg-white px-5 sm:px-6 py-2.5 text-xs font-semibold text-[#222222] shadow-2xs transition-all duration-200 hover:border-[#222222] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request Briefing</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sleek Bottom Marquee Ticker */}
      <div className="w-full border-t border-[#ededed] bg-[#ffffff] py-2 sm:py-2.5">
        <div className="overflow-hidden">
          <div className="animate-marquee">
            {[...MARQUEE_KEYWORDS, ...MARQUEE_KEYWORDS].map((word, idx) => (
              <div
                key={`${word}-${idx}`}
                className="flex items-center gap-5 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a7a7a]"
              >
                <span>{word}</span>
                <span className="text-[#D8281E]">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
