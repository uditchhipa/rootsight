"use client";

import React from "react";
import { ArrowUpRight, Shield, Terminal, Cpu, FileCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-[#ffffff] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#ededed]"
    >
      {/* Subtle blueprint grid with radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Official Startup India Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-[#fafafa] px-3.5 py-1 text-xs font-medium text-[#27272a] shadow-xs mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#10b981]" />
            <span className="font-semibold">Startup India Registered</span>
            <span className="text-[#d4d4d8]">|</span>
            <span className="text-[#71717a]">Cyber Security &amp; Automation</span>
          </div>

          {/* Clean Monumental Headline */}
          <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#09090b] leading-[1.08]">
            Intelligent Cyber Security &amp; Investigation Automation.
          </h1>

          {/* Subheadline explaining Who We Are & What We Do */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#71717a] leading-relaxed">
            Rootsight builds purpose-built automation tooling for law enforcement agencies, executes adversarial penetration testing, and engineers sovereign threat intelligence pipelines.
          </p>

          {/* Clean Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-[#09090b] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#27272a]"
            >
              <span>What We Do</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e4e4e7] bg-white px-6 py-3 text-sm font-semibold text-[#09090b] shadow-2xs transition-colors hover:bg-[#fafafa] hover:border-[#d4d4d8]"
            >
              <span>Who We Are</span>
            </a>

            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e4e4e7] bg-white px-6 py-3 text-sm font-semibold text-[#09090b] shadow-2xs transition-colors hover:bg-[#fafafa] hover:border-[#d4d4d8]"
            >
              <span>Meet the Team</span>
            </a>
          </div>

          {/* 4 Core Pillars Strip (Simple, Clean, High-Trust) */}
          <div className="mt-16 sm:mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-[#f4f4f5]">
            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-xl bg-[#fafafa]/80 border border-[#f4f4f5]">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#e4e4e7] text-[#09090b] mb-3">
                <FileCheck size={18} />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#09090b]">Investigation Tech</h3>
              <p className="mt-1 text-xs text-[#71717a]">CDR / IPDR correlation &amp; automated case workflows</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-xl bg-[#fafafa]/80 border border-[#f4f4f5]">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#e4e4e7] text-[#09090b] mb-3">
                <Shield size={18} />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#09090b]">Offensive Security</h3>
              <p className="mt-1 text-xs text-[#71717a]">Penetration testing &amp; adversarial red teaming</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-xl bg-[#fafafa]/80 border border-[#f4f4f5]">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#e4e4e7] text-[#09090b] mb-3">
                <Terminal size={18} />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#09090b]">Malware Analysis</h3>
              <p className="mt-1 text-xs text-[#71717a]">Payload detonation, reverse engineering &amp; memory analysis</p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 rounded-xl bg-[#fafafa]/80 border border-[#f4f4f5]">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-[#e4e4e7] text-[#09090b] mb-3">
                <Cpu size={18} />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#09090b]">Threat Intel &amp; OSINT</h3>
              <p className="mt-1 text-xs text-[#71717a]">Darknet monitoring &amp; autonomous entity profiling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
