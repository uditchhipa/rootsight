"use client";

import React from "react";
import { SITE_CONFIG, VALUES } from "@/data/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 hairline-b bg-[#F9F9F7]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Contextual Anchor */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-1">
              <span className="mono-tag text-[#A3A39E]">01 // THE FIRM</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[#111213]">
                Who We Are
              </h2>
            </div>

            <p className="text-xs text-[#6E7073] leading-relaxed">
              Rootsight Cyber Technologies is a registered Indian cyber security startup recognized under <strong>Startup India (DPIIT)</strong>. Headquartered in New Delhi, we engineer sovereign digital evidence automation, offensive simulation tools, and malware dissection frameworks.
            </p>

            <div className="space-y-2 pt-4 hairline-t text-xs mono-tag text-[#6E7073]">
              <div className="flex justify-between py-1 hairline-b">
                <span>ENTITY</span>
                <span className="text-[#111213] font-semibold">ROOTSIGHT CYBER TECH</span>
              </div>
              <div className="flex justify-between py-1 hairline-b">
                <span>RECOGNITION</span>
                <span className="text-[#111213] font-semibold">STARTUP INDIA (DPIIT)</span>
              </div>
              <div className="flex justify-between py-1 hairline-b">
                <span>LOCATION</span>
                <span className="text-[#111213] font-semibold">NEW DELHI, INDIA</span>
              </div>
              <div className="flex justify-between py-1">
                <span>DISCIPLINE</span>
                <span className="text-[#111213] font-semibold">DEFENSE &amp; AUTOMATION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Operational Tenets */}
          <div className="lg:col-span-8 lg:pl-10 space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-[#111213] leading-[1.15]">
                Most security tools generate noise. We engineer sovereign instruments that produce mathematical evidence and root-cause clarity.
              </h3>

              <div className="mt-8 space-y-4 text-sm sm:text-base text-[#525457] leading-relaxed font-normal">
                <p>
                  Modern digital investigations and offensive assessments are too frequently burdened by fragmented spreadsheets, manual log ingestion, and opaque commercial software. In high-stakes law enforcement and enterprise defense, every minute lost to manual correlation jeopardizes case outcomes.
                </p>
                <p>
                  Rootsight was founded by four technical operators to replace brittle manual workflows with deterministic, audit-logged automation. Our methodology combines:
                </p>
              </div>

              {/* The Root & Sight Tenets */}
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-[#E5E5E2] rounded-xl space-y-2">
                  <span className="mono-tag text-[#111213] font-bold">01 // ROOT</span>
                  <h4 className="text-sm font-bold text-[#111213] uppercase">Root-Cause Precision</h4>
                  <p className="text-xs text-[#6E7073] leading-relaxed">
                    Low-level kernel inspection, binary disassembly, and isolating the exact architectural vulnerability before adversaries exploit it.
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#E5E5E2] rounded-xl space-y-2">
                  <span className="mono-tag text-[#111213] font-bold">02 // SIGHT</span>
                  <h4 className="text-sm font-bold text-[#111213] uppercase">Continuous Intelligence</h4>
                  <p className="text-xs text-[#6E7073] leading-relaxed">
                    Automated entity graphing across CDR, IPDR, and darknet surveillance to generate comprehensive situational clarity for investigators.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Institutional Values */}
            <div className="hairline-t pt-8">
              <span className="mono-tag text-[#A3A39E] block mb-4">OUR PRINCIPLES</span>
              <div className="grid sm:grid-cols-2 gap-6">
                {VALUES.map((val) => (
                  <div key={val.number} className="space-y-1">
                    <span className="mono-tag text-[10px] text-[#A3A39E]">{val.number}</span>
                    <h5 className="text-sm font-bold text-[#111213]">{val.title}</h5>
                    <p className="text-xs text-[#6E7073] leading-relaxed">{val.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
