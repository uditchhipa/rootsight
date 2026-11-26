"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";

const PRODUCTS = [
  {
    id: "nova",
    name: "Nova",
    tagline: "Automated Link Intelligence",
    icon: "/stay22/images/icon_Nova.svg",
    desc: "Instantly transforms static hotel and destination mentions into dynamic, multi-provider booking links. Zero manual tag configuration.",
    metrics: "Average 42% click-through increase across editorial travel blogs.",
  },
  {
    id: "spark",
    name: "Spark",
    tagline: "High-Converting Itinerary Cards",
    icon: "/stay22/images/icon_Spark.svg",
    desc: "Interactive travel embeds that surface live rates, reviews, and availability directly within your articles and city guides.",
    metrics: "3.2x higher conversion compared to standard banner ads.",
  },
  {
    id: "lift",
    name: "Lift",
    tagline: "Real-Time Yield Maximizer",
    icon: "/stay22/images/icon_Lift.svg",
    desc: "Machine learning routing that selects the best-paying OTA inventory in real-time based on user geography and check-in date.",
    metrics: "Generates $140+ CPMs on high-intent destination posts.",
  },
  {
    id: "map",
    name: "Map",
    tagline: "Interactive Booking Overlays",
    icon: "/stay22/images/icon_Map.svg",
    desc: "Beautiful, responsive maps populated with hotels and vacation rentals centered around key landmarks, venues, and festival locations.",
    metrics: "Over 85% mobile engagement across event platforms.",
  },
  {
    id: "loop",
    name: "Loop",
    tagline: "Conversion Remarketing",
    icon: "/stay22/images/icon_Loop.svg",
    desc: "Recovers abandoned travel bookings through polite, non-intrusive notification bubbles when visitors show high search intent.",
    metrics: "Recovers up to 18% of previously lost booking commissions.",
  },
  {
    id: "allez",
    name: "Allez",
    tagline: "Universal Short Links",
    icon: "/stay22/images/icon_Allez.svg",
    desc: "Branded short URLs designed for Instagram bio links, YouTube video descriptions, and TikTok profiles with full analytics.",
    metrics: "Sub-second redirection to localized app stores and OTAs.",
  },
];

export function Stay22Products() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0]);

  return (
    <section id="products" className="py-24 md:py-32 bg-[#f2e4d8] border-b border-[#2a2626]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#786ddc] bg-white/60 px-4 py-1.5 rounded-full border border-[#786ddc]/20">
              The Product Suite
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black text-[#2a2626] tracking-tight leading-[1.05]">
              Everything you need <br />
              <span className="font-serif italic font-normal text-[#786ddc]">to monetize travel.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#2a2626]/75 max-w-md">
            Deploy one tool or the entire suite. Each product functions seamlessly on standalone pages or integrated into enterprise content networks.
          </p>
        </div>

        {/* Product Navigation Grid */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-12">
          {PRODUCTS.map((prod) => {
            const isSelected = prod.id === activeTab.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col items-start gap-3 ${
                  isSelected
                    ? "bg-[#2a2626] text-[#f2e4d8] border-[#2a2626] shadow-lg scale-105"
                    : "bg-[#FAF4EC] text-[#2a2626] border-[#2a2626]/10 hover:border-[#786ddc]/50 hover:bg-white"
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? "bg-white/10" : "bg-[#f2e4d8]"}`}>
                  <Image src={prod.icon} alt={prod.name} width={24} height={24} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <div className="font-black text-lg">{prod.name}</div>
                  <div className={`text-[11px] font-medium truncate ${isSelected ? "text-white/60" : "text-[#2a2626]/60"}`}>
                    {prod.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Highlight Banner featuring the Active Product + Stay22 Rive Interactive Shape */}
        <div className="rounded-3xl bg-[#2a2626] text-[#f2e4d8] p-8 sm:p-12 lg:p-16 border border-[#2a2626] shadow-2xl grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#786ddc]/20 border border-[#786ddc]/40 px-3.5 py-1 text-xs font-bold text-[#786ddc]">
              <Image src={activeTab.icon} alt={activeTab.name} width={16} height={16} className="w-4 h-4" />
              <span>Product Spec: {activeTab.name}</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {activeTab.name} — <span className="font-serif italic font-normal text-[#ffb200]">{activeTab.tagline}</span>
            </h3>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {activeTab.desc}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90 font-medium flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#ffb200] shrink-0" />
              <span>{activeTab.metrics}</span>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#786ddc] hover:bg-[#6b5ecc] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Deploy {activeTab.name}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right: Live Interactive Stay22 Rive Canvas Shape */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[380px] aspect-square rounded-3xl bg-white/5 border border-white/10 p-6 flex items-center justify-center relative overflow-hidden">
              <RiveAnimation
                src="/stay22/onereason.riv"
                stateMachines="State Machine 1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
