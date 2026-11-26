"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";
import { TTM_FOUNDERS, TTM_CREATORS } from "@/data/ttmContent";

export function AboutSection() {
  const [activeFounder, setActiveFounder] = useState<string | null>(null);

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#171717] border-b border-[#262626] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-[#dcd0ff]/5 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-80 w-80 -translate-y-1/2 rounded-full bg-[#ecaf30]/5 blur-[100px]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* Section Pill Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ecaf30] bg-[#222222] border border-[#2d2d2d] px-4 py-1.5 rounded-full shadow-inner">
            So what’s TTM about?
          </span>
        </div>

        {/* The Signature TTM Conversational Story with Inline Interactive Founder Pills */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#f3f3ed] tracking-tight leading-[1.3] sm:leading-[1.35]">
            Well... We{" "}
            {/* Mees Verberne Inline Pill */}
            <span className="inline-block mx-1.5 align-middle">
              <button
                type="button"
                onClick={() =>
                  setActiveFounder(activeFounder === "mees" ? null : "mees")
                }
                className="inline-flex items-center gap-2 rounded-full bg-[#242424] hover:bg-[#2e2e2e] border border-[#383838] px-3 py-1 text-sm sm:text-base font-bold text-[#f3f3ed] transition-all hover:scale-105 shadow-md group"
              >
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full overflow-hidden border border-[#ecaf30]/60 shrink-0">
                  <Image
                    src="/ttm/mees-verberne.jpg"
                    alt="Mees Verberne"
                    fill
                    className="object-cover"
                  />
                </div>
                <span>Mees Verberne</span>
              </button>
            </span>
            and{" "}
            {/* Ronald de Groot Inline Pill */}
            <span className="inline-block mx-1.5 align-middle">
              <button
                type="button"
                onClick={() =>
                  setActiveFounder(activeFounder === "ronald" ? null : "ronald")
                }
                className="inline-flex items-center gap-2 rounded-full bg-[#242424] hover:bg-[#2e2e2e] border border-[#383838] px-3 py-1 text-sm sm:text-base font-bold text-[#f3f3ed] transition-all hover:scale-105 shadow-md group"
              >
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full overflow-hidden border border-[#9cd696]/60 shrink-0">
                  <Image
                    src="/ttm/ronald-de-groot.jpg"
                    alt="Ronald de Groot"
                    fill
                    className="object-cover"
                  />
                </div>
                <span>Ronald de Groot</span>
              </button>
            </span>{" "}
            got tired of starting from scratch. Every social post meant opening After Effects, building timelines, resizing, exporting, tweaking, exporting again.
          </h2>

          <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ecaf30] tracking-tight leading-snug">
            So we built TTM — Templates that move.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#86867f] max-w-2xl mx-auto font-normal">
            A real-time WebGL studio powered by Three.js, GSAP timelines, and in-browser hardware-accelerated MP4 export. No After Effects. No plugins. No render queues.
          </p>
        </div>

        {/* Detailed Founder Cards (Interactive on pill click or visible on scroll) */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {TTM_FOUNDERS.map((f, idx) => {
            const isLilac = idx === 0;
            return (
              <div
                key={f.name}
                className={`relative rounded-3xl p-6 sm:p-8 bg-[#1f1f1f] border transition-all duration-300 ${
                  (activeFounder === "mees" && idx === 0) ||
                  (activeFounder === "ronald" && idx === 1)
                    ? "border-[#ecaf30] ring-2 ring-[#ecaf30]/20 shadow-xl scale-[1.02]"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden shrink-0 border-2 border-white/10 shadow-lg">
                    <Image
                      src={f.avatar}
                      alt={f.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1"
                      style={{
                        backgroundColor: isLilac ? "#dcd0ff" : "#9cd696",
                        color: "#171717",
                      }}
                    >
                      {f.role}
                    </span>
                    <h3 className="text-lg font-black text-[#f3f3ed] truncate">
                      {f.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#86867f] leading-relaxed">
                      {f.bio}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creative Community Section */}
        <div className="mt-16 pt-12 border-t border-[#262626] text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#86867f] mb-6">
            <Heart className="w-3.5 h-3.5 fill-[#ff8a7a] text-[#ff8a7a]" />
            <span>Join our creative community of 12,000+ creators</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {TTM_CREATORS.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#202020] border border-white/5 hover:border-white/20 transition-all"
              >
                <div className="relative h-7 w-7 rounded-full overflow-hidden shrink-0 border border-white/20">
                  <Image
                    src={c.avatar}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#f3f3ed]">{c.name}</div>
                  <div className="text-[10px] text-[#86867f]">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
