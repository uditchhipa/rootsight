"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/content";
import { ProductVisual } from "@/components/ProductVisual";
import { RootsightLogo } from "@/components/RootsightLogo";

const CATEGORIES = [
  "All",
  "Law Enforcement / OSINT",
  "Digital Forensics Workflow",
  "Offensive Security",
  "Malware Analysis",
];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const visibleProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="bg-[#f8f8f8] py-28 md:py-36 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        {/* Exact Awwwards NOMINEES Style Centered Header with Laurel Emblem */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2">
            <h2 className="font-extrabold uppercase tracking-[-0.035em] text-[#222222] text-5xl sm:text-7xl lg:text-8xl">
              SYSTEMS
            </h2>
            {/* Golden Laurel Wreath (Exact match to Awwwards Screenshot 3) */}
            <span className="text-[#F5A623] inline-flex items-center">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                <path
                  d="M12 36C8 30 8 20 16 12C18 10 20 8 24 6"
                  stroke="#F5A623"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M36 36C40 30 40 20 32 12C30 10 28 8 24 6"
                  stroke="#F5A623"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="24" r="3" fill="#F5A623" />
                <circle cx="16" cy="18" r="3" fill="#F5A623" />
                <circle cx="21" cy="13" r="3" fill="#F5A623" />
                <circle cx="36" cy="24" r="3" fill="#F5A623" />
                <circle cx="32" cy="18" r="3" fill="#F5A623" />
                <circle cx="27" cy="13" r="3" fill="#F5A623" />
              </svg>
            </span>
          </div>

          <p className="mt-4 text-base font-normal text-[#7a7a7a] sm:text-lg">
            Inspect and deploy autonomous intelligence &amp; offensive tools by Rootsight
          </p>

          {/* Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-4 py-2 text-xs transition-all ${
                    active
                      ? "bg-[#222222] font-semibold text-white shadow-xs"
                      : "bg-[#ededed] text-[#7a7a7a] hover:bg-[#dedede] hover:text-[#222222]"
                  }`}
                >
                  {cat === "All" ? "All Systems" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean, Non-Overlapping 2-Column Grid with GitHub Spotlight & Google Elevation */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-14">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
              className="spotlight-card group flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              {/* Card Media Container (Pure artwork, zero conflicting text) */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-[#ededed] bg-[#ffffff] shadow-xs transition-all duration-300 group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] group-hover:border-[#dedede]"
              >
                <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                  <ProductVisual variant={project.id} />
                </div>

                {/* Awwwards Centered "Deploy Now" Hover Action Pill */}
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold text-[#222222] shadow-2xl transition-all duration-200 hover:scale-105 hover:bg-[#F5A623] active:scale-95"
                  >
                    <span>Deploy Now</span>
                    <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Clean, Uncluttered Card Meta Below Frame (NO OVERLAPPING TEXT) */}
              <div className="mt-5 flex flex-col gap-2 px-1">
                {/* Meta Top Line: Code & Status Badges */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#222222] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase">
                      {project.code}
                    </span>
                    <span className="text-[#7a7a7a]">
                      {project.status}
                    </span>
                  </div>

                  <span className="font-semibold text-[#D8281E]">
                    {project.metrics}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#222222] transition-colors group-hover:text-[#D8281E] leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#7a7a7a]">
                  {project.summary}
                </p>

                {/* Byline & Author */}
                <div className="mt-1 flex items-center justify-between border-t border-[#ededed] pt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[#a7a7a7]">By</span>
                    <span className="font-semibold text-[#222222]">
                      Rootsight Labs
                    </span>
                    <span className="text-[#dedede]">·</span>
                    <span className="text-[#7a7a7a]">{project.category}</span>
                  </div>

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ededed]">
                    <RootsightLogo size={13} color="#222222" accentEye={false} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
