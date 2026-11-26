"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, VALUES } from "@/data/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#fafafa] py-20 md:py-28 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#e4e4e7]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#71717a]">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09090b]">
              Engineering sovereign cyber tools for real-world impact.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#e4e4e7] bg-white px-4 py-2 text-xs font-semibold text-[#18181b] shadow-2xs shrink-0">
            <ShieldCheck size={16} className="text-[#10b981]" />
            <span>Startup India Registered</span>
          </div>
        </div>

        {/* Narrative & Mission */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#09090b]">
              Built by researchers and engineers to solve digital investigation backlogs.
            </h3>
            <p className="text-base text-[#52525b] leading-relaxed">
              <strong>Rootsight Cyber Technologies</strong> is an Indian cyber security and investigation automation startup recognized by <strong>Startup India (DPIIT)</strong>. Founded by offensive security specialists, malware researchers, and systems architects, we build dedicated tools that transform how complex digital cases are handled.
            </p>
            <p className="text-base text-[#52525b] leading-relaxed">
              The name <strong>ROOTSIGHT</strong> reflects our core methodology:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#e4e4e7] shadow-2xs">
                <span className="font-mono text-xs font-bold uppercase text-[#10b981]">01 // ROOT</span>
                <h4 className="mt-1 text-sm font-bold text-[#09090b]">Root-Cause Diagnostics</h4>
                <p className="mt-1 text-xs text-[#71717a] leading-relaxed">
                  Deep kernel-level system visibility, binary reverse engineering, and finding the true origin of every cyber threat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e4e4e7] shadow-2xs">
                <span className="font-mono text-xs font-bold uppercase text-[#2563eb]">02 // SIGHT</span>
                <h4 className="mt-1 text-sm font-bold text-[#09090b]">Actionable Intelligence</h4>
                <p className="mt-1 text-xs text-[#71717a] leading-relaxed">
                  Total situational awareness through multi-source OSINT, live darknet telemetry, and automated correlation.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#e4e4e7] shadow-xs">
            <div>
              <h4 className="text-base font-bold text-[#09090b] uppercase tracking-wider mb-6">
                Our Core Principles
              </h4>
              <div className="space-y-5">
                {VALUES.map((val) => (
                  <div key={val.number} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-[#09090b]">{val.title}</h5>
                      <p className="mt-0.5 text-xs text-[#71717a] leading-relaxed">{val.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#f4f4f5] flex items-center justify-between text-xs text-[#71717a]">
              <span>Headquarters: New Delhi, India</span>
              <span className="font-mono font-medium text-[#09090b]">ROOTSIGHT // 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
