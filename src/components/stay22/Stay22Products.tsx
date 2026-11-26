"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const PRODUCTS = [
  {
    id: "nexus",
    name: "Nexus",
    tagline: "Automated CDR & IPDR correlation engine",
    icon: "/stay22/images/icon_Nova.svg",
    desc: "Ingests raw, unstructured multi-carrier telecom records, IPDR sessions, and tower dumps. Automatically isolates co-traveling entities, burns burners, and outputs courtroom-grade evidentiary timelines.",
    metrics: "Parses 10,000,000+ call records in under 8 seconds with zero data loss.",
  },
  {
    id: "sentinel",
    name: "Sentinel",
    tagline: "Darknet & deepweb threat intelligence",
    icon: "/stay22/images/icon_Spark.svg",
    desc: "Autonomous cyber reconnaissance tracking ransomware leak sites, illicit forums, and credential brokers. Delivers verified threat actor attribution and early warning alerts.",
    metrics: "Monitors 400+ active ransomware groups and illicit marketplaces 24/7.",
  },
  {
    id: "vanguard",
    name: "Vanguard",
    tagline: "Continuous adversarial red team suite",
    icon: "/stay22/images/icon_Lift.svg",
    desc: "Simulates advanced nation-state threat actors against banking, telecom, and government infrastructure. Discovers exploitable attack paths before adversaries do.",
    metrics: "Identifies 99.8% of high-severity external attack vectors pre-breach.",
  },
  {
    id: "kernel",
    name: "Kernel",
    tagline: "Reverse sandbox & binary dissection",
    icon: "/stay22/images/icon_Map.svg",
    desc: "Deep kernel-level malware detonation sandbox that strips anti-analysis evasion, deobfuscates encrypted payloads, and maps MITRE ATT&CK techniques automatically.",
    metrics: "Sub-second unpacking of polymorphic and zero-day malicious binaries.",
  },
  {
    id: "trace",
    name: "Trace",
    tagline: "Geo-temporal suspect mapping & routes",
    icon: "/stay22/images/icon_Loop.svg",
    desc: "Visualizes suspect movements, rendezvous patterns, and cell tower handoffs on high-resolution GIS maps with millimeter precision and timeline playback.",
    metrics: "Interactive multi-target timeline analysis across nationwide cellular grids.",
  },
  {
    id: "sovereign",
    name: "Sovereign",
    tagline: "Air-gapped in-country cloud & vault",
    icon: "/stay22/images/icon_Allez.svg",
    desc: "Certified air-gapped on-premises appliance or dedicated sovereign cloud vault. Cryptographically enforces complete chain of custody and 100% in-country data residency.",
    metrics: "Meets strict DPIIT, CERT-In, and defense-grade air-gap security benchmarks.",
  },
];

export function Stay22Products() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0]);

  return (
    <section id="products" className="py-24 md:py-32 bg-[#f2e4d8] border-b border-[#262222]/10 relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
            Engineered for real-world operations. Built to never fail.
          </p>
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            A product for every cyber mission
          </h2>
        </div>

        {/* Product Navigation Grid */}
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-12">
          {PRODUCTS.map((prod) => {
            const isSelected = prod.id === activeTab.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col items-start gap-3 cursor-pointer ${
                  isSelected
                    ? "bg-[#ffb200] text-[#262222] border-black/20 shadow-lg scale-105"
                    : "bg-[#FAF4EC] text-[#262222] border-[#262222]/10 hover:border-[#ffb200] hover:bg-white"
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? "bg-black/10" : "bg-[#f2e4d8]"}`}>
                  <Image src={prod.icon} alt={prod.name} width={24} height={24} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <div className="font-bold text-lg">{prod.name}</div>
                  <div className="text-[11px] font-medium opacity-75 truncate max-w-[120px]">
                    {prod.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Product Interactive Showcase Card */}
        <div className="rounded-[32px] md:rounded-[40px] bg-[#FAF4EC] border border-[#262222]/10 p-8 sm:p-12 lg:p-16 shadow-xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb200]/20 text-[#262222] font-extrabold text-xs uppercase tracking-wider">
              <span>Proprietary Tech</span>
              <span>•</span>
              <span>{activeTab.name}</span>
            </div>

            <h3
              className="font-heading text-3xl sm:text-5xl font-normal text-[#262222] tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              {activeTab.tagline}
            </h3>

            <p className="text-base sm:text-lg text-[#262222]/80 leading-relaxed font-medium">
              {activeTab.desc}
            </p>

            <div className="p-4 rounded-2xl bg-white border border-[#262222]/10 flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#ffb200] shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-[#262222]">
                {activeTab.metrics}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="stay22-btn-yellow inline-flex items-center gap-2 group shadow-md hover:scale-105 transition-all"
              >
                <span>Request Technical Dossier</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <a
                href="#contact"
                className="stay22-btn-primary inline-flex items-center gap-2 group shadow-md hover:scale-105 transition-all"
              >
                <span>Schedule Confidential Demo</span>
              </a>
            </div>
          </div>

          {/* Right Product Graphic Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#262222] text-[#f2e4d8] p-8 flex flex-col justify-between shadow-2xl border border-black/10 overflow-hidden">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-mono text-xs text-[#ffb200]">
                  <span className="w-2 h-2 rounded-full bg-[#ffb200] animate-pulse" />
                  <span>ROOTSIGHT // {activeTab.name.toUpperCase()}</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono text-white/70">
                  SECURE DEPLOYMENT
                </div>
              </div>

              <div className="my-auto space-y-3">
                <div className="text-xs uppercase font-mono text-white/50 tracking-wider">
                  Operational Capability
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                  {activeTab.name} Engine
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {activeTab.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between text-[11px] font-mono text-white/60">
                <span>STATUS: OPERATIONAL</span>
                <span>LATENCY: &lt;12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
