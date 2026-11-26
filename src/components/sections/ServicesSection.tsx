"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Shield, Terminal, Cpu, Database } from "lucide-react";
import { SERVICES } from "@/data/content";

const CATEGORIES = [
  "All Capabilities",
  "Investigation Automation",
  "Offensive Security",
  "Malware Analysis",
  "Threat Intelligence",
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All Capabilities");

  const filteredServices =
    activeCategory === "All Capabilities"
      ? SERVICES
      : SERVICES.filter((s) => {
          if (activeCategory === "Investigation Automation") return s.id === "law-enforcement";
          if (activeCategory === "Offensive Security") return s.id === "pentest-redteam";
          if (activeCategory === "Malware Analysis") return s.id === "malware-analysis";
          if (activeCategory === "Threat Intelligence") return s.id === "threat-intel-osint";
          return true;
        });

  return (
    <>
      {/* TTM Showcase Section */}
      <section
        id="services"
        className="py-24 md:py-32 bg-[#171717] border-b border-[#262626]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262626]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ecaf30]">
                What We Do
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black text-[#f3f3ed] tracking-tight">
                Change your investigation speed in seconds.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#86867f] max-w-2xl">
                A growing suite of specialized forensic pipelines and offensive tools. Purpose-built for law enforcement agencies, cyber cells, and enterprise defense teams.
              </p>
            </div>

            <a
              href="#contact"
              className="ttm-pill self-start md:self-auto bg-[#ecaf30] px-5 py-2.5 text-xs font-bold text-[#171717] hover:bg-[#ffd13b]"
            >
              <span>Request Operational Briefing</span>
              <ArrowUpRight size={14} className="ml-1" />
            </a>
          </div>

          {/* TTM Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#f3f3ed] text-[#171717] shadow-md scale-102"
                      : "bg-[#202020] text-[#86867f] border border-[#2d2d2d] hover:text-[#f3f3ed] hover:bg-[#282828]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 4 Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service, idx) => {
              const borderAccents = ["#dcd0ff", "#ecaf30", "#9cd696", "#ff8a7a"];
              const accentColor = borderAccents[idx % borderAccents.length];

              return (
                <div
                  key={service.id}
                  className="group flex flex-col justify-between rounded-2xl bg-[#1c1c1c] border border-[#2b2b2b] hover:border-[#3e3e3e] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Header with colorful badge */}
                    <div className="flex items-center justify-between pb-6 border-b border-[#262626]">
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-bold font-mono uppercase"
                        style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                      >
                        PRACTICE // {service.code}
                      </span>
                      <span className="text-xs text-[#86867f]">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#f3f3ed] group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#86867f] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-6 pt-6 border-t border-[#262626] space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#86867f] block mb-2">
                        Core Technical Output:
                      </span>
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2.5 text-xs text-[#d4d4d0]">
                          <span className="text-[#ecaf30] font-bold">•</span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#262626] flex items-center justify-between">
                    <a
                      href="#contact"
                      className="ttm-pill inline-flex items-center gap-1.5 text-xs font-bold text-[#f3f3ed] hover:text-[#ecaf30]"
                    >
                      <span>Deploy Capability</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TTM Signature USPS "This is how it works" Section */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 bg-[#1b1b1b] border-b border-[#262626]"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <div className="text-sm font-bold uppercase tracking-wider text-[#86867f] mb-2">
            This is how it works
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#f3f3ed] tracking-tight">
            From raw incident to court evidence. In minutes.
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {/* Step 1: Purple */}
            <div className="p-8 rounded-2xl bg-[#222222] border border-[#2d2d2d] space-y-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dcd0ff] text-[#171717] font-black text-xl">
                1
              </span>
              <h3 className="text-lg font-bold text-[#f3f3ed]">
                Drop in raw exhibits
              </h3>
              <p className="text-xs text-[#86867f] leading-relaxed">
                Ingest raw CDRs, IPDR dumps, disk images, or suspect binary payloads. Our engine generates SHA-256 cryptographic hashes immediately.
              </p>
            </div>

            {/* Step 2: Yellow */}
            <div className="p-8 rounded-2xl bg-[#222222] border border-[#2d2d2d] space-y-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecaf30] text-[#171717] font-black text-xl">
                2
              </span>
              <h3 className="text-lg font-bold text-[#f3f3ed]">
                Automate &amp; Dissect
              </h3>
              <p className="text-xs text-[#86867f] leading-relaxed">
                Multi-source correlation engines cross-reference cell towers, run dynamic malware detonation in QEMU, or simulate offensive adversary attack paths.
              </p>
            </div>

            {/* Step 3: Green */}
            <div className="p-8 rounded-2xl bg-[#222222] border border-[#2d2d2d] space-y-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9cd696] text-[#171717] font-black text-xl">
                3
              </span>
              <h3 className="text-lg font-bold text-[#f3f3ed]">
                Action &amp; Report
              </h3>
              <p className="text-xs text-[#86867f] leading-relaxed">
                Export legally vetted, court-admissible forensic timelines, extracted YARA signatures, or comprehensive vulnerability remediation briefs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
