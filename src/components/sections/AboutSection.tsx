"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { TEAM, VALUES } from "@/data/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#171717] border-b border-[#262626]"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* TTM Signature Subtitle */}
        <div className="text-sm font-bold uppercase tracking-wider text-[#86867f] mb-6">
          So what’s Rootsight about?
        </div>

        {/* TTM Conversational Title with Embedded Founder Pills */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f3ed] leading-[1.3] sm:leading-[1.35] tracking-tight">
          Well... We{" "}
          <span className="inline-flex flex-wrap items-center gap-2 align-middle my-1">
            {TEAM.map((founder, idx) => {
              const colors = ["#dcd0ff", "#ecaf30", "#9cd696", "#ff8a7a"];
              const pillColor = colors[idx % colors.length];
              return (
                <a
                  key={founder.name}
                  href="#team"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#242424] hover:bg-[#303030] border border-[#333333] hover:border-[#444] px-3.5 py-1 transition-all duration-200 hover:scale-105"
                  aria-label={`View ${founder.name}'s role`}
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-[#171717]"
                    style={{ backgroundColor: pillColor }}
                  >
                    {founder.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#f3f3ed] group-hover:text-white">
                    {founder.name}
                  </span>
                  <span className="text-[10px] font-semibold text-[#86867f] hidden sm:inline">
                    ({founder.role.split("&")[0].trim()})
                  </span>
                </a>
              );
            })}
          </span>{" "}
          got tired of fragmented, manual digital investigations.{" "}
          <span className="text-[#86867f] font-normal block mt-4 text-xl sm:text-3xl md:text-4xl leading-relaxed">
            Every cyber case meant juggling disparate tools, manually parsing raw CDRs, wrestling with chain-of-custody logs, and losing critical days to repetitive triage.
          </span>{" "}
          <span className="block mt-4 text-[#ecaf30]">
            So we built ROOTSIGHT — automated digital intelligence &amp; root-cause security.
          </span>
        </h2>

        {/* 3 Core Pillars in TTM Card Format */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#1f1f1f] border border-[#2b2b2b] space-y-3">
            <span className="inline-block rounded-full bg-[#dcd0ff]/15 px-3 py-1 text-xs font-bold text-[#dcd0ff]">
              01 // EVIDENCE INTEGRITY
            </span>
            <h3 className="text-base font-bold text-[#f3f3ed]">
              Deterministic Speed
            </h3>
            <p className="text-xs text-[#86867f] leading-relaxed">
              We compress multi-day manual investigation and correlation procedures into auditable, zero-tamper minutes with SHA-256 validation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1f1f1f] border border-[#2b2b2b] space-y-3">
            <span className="inline-block rounded-full bg-[#ecaf30]/15 px-3 py-1 text-xs font-bold text-[#ecaf30]">
              02 // OFFENSIVE PERSPECTIVE
            </span>
            <h3 className="text-base font-bold text-[#f3f3ed]">
              Adversary-Informed
            </h3>
            <p className="text-xs text-[#86867f] leading-relaxed">
              Our defensive tools and sandboxes are built by active penetration testers and malware researchers who understand how modern threats think.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1f1f1f] border border-[#2b2b2b] space-y-3">
            <span className="inline-block rounded-full bg-[#9cd696]/15 px-3 py-1 text-xs font-bold text-[#9cd696]">
              03 // SOVEREIGN TECH
            </span>
            <h3 className="text-base font-bold text-[#f3f3ed]">
              Startup India (DPIIT)
            </h3>
            <p className="text-xs text-[#86867f] leading-relaxed">
              Proudly registered under Startup India, dedicated to developing sovereign Indian cyber technologies for law enforcement and critical infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
