"use client";

import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 hairline-b bg-[#F9F9F7]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Operational Telemetry Meta Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 hairline-b mono-tag text-[11px] text-[#6E7073]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#111213]" />
            <span className="font-semibold text-[#111213]">ROOTSIGHT CYBER TECHNOLOGIES</span>
            <span className="text-[#D4D4D0]">/</span>
            <span>NEW DELHI, INDIA</span>
          </div>

          <div className="flex items-center gap-4 text-[#6E7073]">
            <span>RECOGNITION: STARTUP INDIA (DPIIT)</span>
            <span className="hidden sm:inline text-[#D4D4D0]">/</span>
            <span className="hidden sm:inline">DISCIPLINE: FORENSIC &amp; OFFENSIVE TECH</span>
          </div>
        </div>

        {/* Hero Editorial Core (Left-Aligned, Asymmetric Human Typography) */}
        <div className="pt-12 md:pt-16 pb-12">
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-[-0.04em] text-[#111213] leading-[0.98]">
              Deterministic Cyber Defense &amp; Investigation Automation.
            </h1>

            <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[#525457] leading-relaxed font-normal">
              Rootsight engineers specialized software for national law enforcement agencies, executes offensive adversary red-teaming, and disassembles modern malware. Built in India for critical digital resilience.
            </p>

            {/* Action Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#111213] px-6 py-3 text-xs font-semibold text-[#F9F9F7] transition-all hover:bg-black"
              >
                <span>Explore Capabilities</span>
                <ArrowDown size={13} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4D4D0] bg-white px-6 py-3 text-xs font-semibold text-[#111213] transition-all hover:border-[#111213]"
              >
                <span>The Firm</span>
              </a>

              <a
                href="#team"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4D4D0] bg-white px-6 py-3 text-xs font-semibold text-[#111213] transition-all hover:border-[#111213]"
              >
                <span>Founding Team</span>
              </a>
            </div>
          </div>
        </div>

        {/* Operational Scope Ledger (Asymmetric 3-Part Split Table) */}
        <div className="mt-8 hairline-t pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="mono-tag text-[#A3A39E]">PRACTICE // 01</span>
            <h3 className="text-sm font-bold uppercase tracking-tight text-[#111213]">
              Investigation Automation
            </h3>
            <p className="text-xs text-[#6E7073] leading-relaxed">
              Automated CDR / IPDR correlation, tamper-evident digital evidence intake, and court-admissible forensic timeline generation.
            </p>
          </div>

          <div className="space-y-2">
            <span className="mono-tag text-[#A3A39E]">PRACTICE // 02</span>
            <h3 className="text-sm font-bold uppercase tracking-tight text-[#111213]">
              Offensive Red Teaming
            </h3>
            <p className="text-xs text-[#6E7073] leading-relaxed">
              Full-scope adversary emulation, cloud hardening, and network vulnerability research conducted by experienced penetration testers.
            </p>
          </div>

          <div className="space-y-2">
            <span className="mono-tag text-[#A3A39E]">PRACTICE // 03</span>
            <h3 className="text-sm font-bold uppercase tracking-tight text-[#111213]">
              Malware &amp; Exploit Labs
            </h3>
            <p className="text-xs text-[#6E7073] leading-relaxed">
              Isolated detonation environments, automated YARA extraction, and memory dump inspection to counter advanced threat actors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
