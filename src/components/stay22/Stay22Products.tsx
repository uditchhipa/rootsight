"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const PRODUCTS = [
  {
    id: "nova",
    name: "Nova",
    tagline: "Turn reader intent into more bookings",
    icon: "/stay22/images/icon_Nova.svg",
    desc: "Instantly transforms static hotel and destination mentions into dynamic, multi-provider booking links. Zero manual tag configuration.",
    metrics: "Average 42% click-through increase across editorial travel blogs.",
  },
  {
    id: "spark",
    name: "Spark",
    tagline: "High-converting contextual recommendations",
    icon: "/stay22/images/icon_Spark.svg",
    desc: "Interactive travel embeds that surface live rates, reviews, and availability directly within your articles and city guides.",
    metrics: "3.2x higher conversion compared to standard banner ads.",
  },
  {
    id: "lift",
    name: "Lift",
    tagline: "Dynamic CTAs that boost conversions",
    icon: "/stay22/images/icon_Lift.svg",
    desc: "Machine learning routing that selects the best-paying OTA inventory in real-time based on user geography and check-in date.",
    metrics: "Generates $140+ CPMs on high-intent destination posts.",
  },
  {
    id: "map",
    name: "Map",
    tagline: "Interactive booking maps for destinations",
    icon: "/stay22/images/icon_Map.svg",
    desc: "Beautiful, responsive maps populated with hotels and vacation rentals centered around key landmarks, venues, and festival locations.",
    metrics: "Over 85% mobile engagement across event platforms.",
  },
  {
    id: "loop",
    name: "Loop",
    tagline: "Automatic re-engagement loops",
    icon: "/stay22/images/icon_Loop.svg",
    desc: "Recovers abandoned travel bookings through polite, non-intrusive notification bubbles when visitors show high search intent.",
    metrics: "Recovers up to 18% of previously lost booking commissions.",
  },
  {
    id: "allez",
    name: "Allez",
    tagline: "Next-gen direct booking checkout",
    icon: "/stay22/images/icon_Allez.svg",
    desc: "Branded short URLs designed for Instagram bio links, YouTube video descriptions, and TikTok profiles with full analytics.",
    metrics: "Sub-second redirection to localized app stores and OTAs.",
  },
];

export function Stay22Products() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0]);

  return (
    <section id="products" className="py-24 md:py-32 bg-[#f2e4d8] border-b border-[#262222]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
            Works in the background. So you don&apos;t have to.
          </p>
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            A product for every kind of intent
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

        {/* Highlight Banner featuring the Active Product */}
        <div className="rounded-[32px] bg-[#262222] text-[#f2e4d8] p-8 sm:p-12 lg:p-16 border border-[#262222] shadow-2xl grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffb200]/20 border border-[#ffb200]/40 px-3.5 py-1 text-xs font-bold text-[#ffb200]">
              <Image src={activeTab.icon} alt={activeTab.name} width={16} height={16} className="w-4 h-4" />
              <span>Product Spec: {activeTab.name}</span>
            </div>

            <h3
              className="font-heading text-3xl sm:text-5xl font-normal text-white tracking-tight"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              {activeTab.name} —{" "}
              <span className="font-serif italic font-normal text-[#ffb200]">
                {activeTab.tagline}
              </span>
            </h3>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-medium">
              {activeTab.desc}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90 font-medium flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#ffb200] shrink-0" />
              <span>{activeTab.metrics}</span>
            </div>

            <div className="pt-2">
              <a
                href="https://another.stay22.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#ffb200] hover:bg-[#ffa000] text-[#262222] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
              >
                <span>Deploy {activeTab.name}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="w-36 h-36 rounded-full bg-[#ffb200]/10 border border-[#ffb200]/30 p-6 flex items-center justify-center">
              <Image
                src={activeTab.icon}
                alt={activeTab.name}
                width={80}
                height={80}
                className="w-20 h-20 object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
