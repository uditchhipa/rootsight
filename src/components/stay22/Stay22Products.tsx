"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { RareFoxCard } from "./RareFoxCard";

interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  desc: string;
  metrics: string;
  cardDetails: {
    ultraText: string;
    engineTag: string;
    cardNumber: string;
    cardHolder: string;
    validThru: string;
    engineSpecs: string;
    airgapBadge: string;
  };
}

const PRODUCTS: ProductItem[] = [
  {
    id: "nexus",
    name: "Nexus",
    tagline: "Automated CDR & IPDR correlation engine",
    icon: "/stay22/images/icon_Nova.svg",
    desc: "Ingests raw, unstructured multi-carrier telecom records, IPDR sessions, and tower dumps. Automatically isolates co-traveling entities, burns burners, and outputs courtroom-grade evidentiary timelines.",
    metrics: "Parses 10,000,000+ call records in under 8 seconds with zero data loss.",
    cardDetails: {
      ultraText: "NEXUS // ULTRA",
      engineTag: "CDR & IPDR CORRELATION",
      cardNumber: "9024  8810  2408  5192",
      cardHolder: "ROOTSIGHT // TELECOM CORE",
      validThru: "11/30",
      engineSpecs: "10M+ RECS/S • <12MS",
      airgapBadge: "AIR-GAPPED",
    },
  },
  {
    id: "sentinel",
    name: "Sentinel",
    tagline: "Darknet & deepweb threat intelligence",
    icon: "/stay22/images/icon_Spark.svg",
    desc: "Autonomous cyber reconnaissance tracking ransomware leak sites, illicit forums, and credential brokers. Delivers verified threat actor attribution and early warning alerts.",
    metrics: "Monitors 400+ active ransomware groups and illicit marketplaces 24/7.",
    cardDetails: {
      ultraText: "SENTINEL // INTEL",
      engineTag: "DARKNET THREAT ATTRIBUTION",
      cardNumber: "4418  9021  7732  1084",
      cardHolder: "ROOTSIGHT // CYBER RECON",
      validThru: "08/30",
      engineSpecs: "400+ GRP • 24/7 LIVE",
      airgapBadge: "ZERO-TRUST",
    },
  },
  {
    id: "vanguard",
    name: "Vanguard",
    tagline: "Continuous adversarial red team suite",
    icon: "/stay22/images/icon_Lift.svg",
    desc: "Simulates advanced nation-state threat actors against banking, telecom, and government infrastructure. Discovers exploitable attack paths before adversaries do.",
    metrics: "Identifies 99.8% of high-severity external attack vectors pre-breach.",
    cardDetails: {
      ultraText: "VANGUARD // RED TEAM",
      engineTag: "ADVERSARIAL SIMULATION",
      cardNumber: "7720  4419  3382  9910",
      cardHolder: "ROOTSIGHT // ATTACK PATH",
      validThru: "05/30",
      engineSpecs: "99.8% PRE-BREACH DEFENSE",
      airgapBadge: "OFFENSIVE",
    },
  },
  {
    id: "kernel",
    name: "Kernel",
    tagline: "Reverse sandbox & binary dissection",
    icon: "/stay22/images/icon_Map.svg",
    desc: "Deep kernel-level malware detonation sandbox that strips anti-analysis evasion, deobfuscates encrypted payloads, and maps MITRE ATT&CK techniques automatically.",
    metrics: "Sub-second unpacking of polymorphic and zero-day malicious binaries.",
    cardDetails: {
      ultraText: "KERNEL // DETONATION",
      engineTag: "REVERSE SANDBOX LAB",
      cardNumber: "1024  5120  2048  4096",
      cardHolder: "ROOTSIGHT // BINARY DISSECT",
      validThru: "12/30",
      engineSpecs: "SUB-SECOND 0-DAY UNPACK",
      airgapBadge: "ISOLATED",
    },
  },
  {
    id: "trace",
    name: "Trace",
    tagline: "Geo-temporal suspect mapping & routes",
    icon: "/stay22/images/icon_Loop.svg",
    desc: "Visualizes suspect movements, rendezvous patterns, and cell tower handoffs on high-resolution GIS maps with millimeter precision and timeline playback.",
    metrics: "Interactive multi-target timeline analysis across nationwide cellular grids.",
    cardDetails: {
      ultraText: "TRACE // GEO-SPATIAL",
      engineTag: "TEMPORAL SUSPECT MAPPING",
      cardNumber: "6601  9924  5180  7741",
      cardHolder: "ROOTSIGHT // TOWER HANDOFF",
      validThru: "09/30",
      engineSpecs: "MILLIMETER GIS PRECISION",
      airgapBadge: "TELEMETRY",
    },
  },
  {
    id: "sovereign",
    name: "Sovereign",
    tagline: "Air-gapped in-country cloud & vault",
    icon: "/stay22/images/icon_Allez.svg",
    desc: "Certified air-gapped on-premises appliance or dedicated sovereign cloud vault. Cryptographically enforces complete chain of custody and 100% in-country data residency.",
    metrics: "Meets strict DPIIT, CERT-In, and defense-grade air-gap security benchmarks.",
    cardDetails: {
      ultraText: "SOVEREIGN // VAULT",
      engineTag: "AIR-GAPPED CLOUD & VAULT",
      cardNumber: "0001  1337  8800  9999",
      cardHolder: "ROOTSIGHT // DPIIT CERTIFIED",
      validThru: "01/32",
      engineSpecs: "100% IN-COUNTRY DATA",
      airgapBadge: "SOVEREIGN",
    },
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

          {/* Right Product Graphic Mockup - Dynamic Titanium Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <RareFoxCard
              key={activeTab.id}
              title={activeTab.name}
              ultraText={activeTab.cardDetails.ultraText}
              engineTag={activeTab.cardDetails.engineTag}
              cardNumber={activeTab.cardDetails.cardNumber}
              cardHolder={activeTab.cardDetails.cardHolder}
              validThru={activeTab.cardDetails.validThru}
              engineSpecs={activeTab.cardDetails.engineSpecs}
              airgapBadge={activeTab.cardDetails.airgapBadge}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
