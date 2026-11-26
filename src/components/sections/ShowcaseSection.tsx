"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Filter, Play } from "lucide-react";
import { TTM_TEMPLATES, TTMTemplate } from "@/data/ttmContent";

const CATEGORIES = [
  { id: "all", label: "All Templates" },
  { id: "3d", label: "3D Objects" },
  { id: "carousels", label: "Carousels" },
  { id: "flythrough", label: "Fly-through" },
  { id: "grids", label: "Grids" },
  { id: "stacks", label: "Stacks" },
  { id: "typography", label: "Typography" },
  { id: "mockups", label: "Mockups" },
];

export function ShowcaseSection() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filteredTemplates =
    selectedCat === "all"
      ? TTM_TEMPLATES
      : TTM_TEMPLATES.filter((t) => t.category === selectedCat);

  return (
    <section
      id="showcase"
      className="py-24 md:py-32 bg-[#171717] border-b border-[#262626]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ecaf30] bg-[#222222] border border-[#2d2d2d] px-4 py-1.5 rounded-full shadow-inner">
              Explore Templates
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-black text-[#f3f3ed] tracking-tight">
              Crafted for creators.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#86867f] max-w-xl">
              Every template is ready to customize with your own text, 3D geometry, colors, and aspect ratios.
            </p>
          </div>

          <Link
            href="/studio"
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ecaf30] hover:text-[#ffd13b] transition-colors"
          >
            <span>Launch Blank Studio Canvas</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedCat === cat.id
                  ? "bg-[#ecaf30] text-[#171717] shadow-lg scale-105"
                  : "bg-[#202020] text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#282828] border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group relative rounded-3xl bg-[#1e1e1e] border border-white/5 hover:border-white/20 p-5 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Card Preview Graphic */}
              <div
                className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundColor: "#141414" }}
              >
                {/* Visual Representation of 3D / Motion */}
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center font-black text-2xl transition-transform group-hover:rotate-12 duration-500 shadow-xl"
                  style={{
                    backgroundColor: template.accentColor,
                    color: "#171717",
                  }}
                >
                  <Sparkles className="w-10 h-10 stroke-[2]" />
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: template.accentColor,
                      color: "#171717",
                    }}
                  >
                    {template.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                    {template.aspectRatio}
                  </span>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/50 bg-black/60 px-2 py-0.5 rounded-md">
                  {template.duration}s
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#f3f3ed] group-hover:text-[#ecaf30] transition-colors">
                  {template.title}
                </h3>
                <p className="mt-1 text-xs text-[#86867f] line-clamp-2 leading-relaxed">
                  {template.description}
                </p>
              </div>

              {/* Action Button: Open in Studio */}
              <Link
                href={`/studio?template=${template.id}`}
                className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#262626] group-hover:bg-[#ecaf30] text-white group-hover:text-[#171717] text-xs font-bold uppercase tracking-wider transition-all shadow-md group-hover:scale-[1.02]"
              >
                <span>Open in Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
