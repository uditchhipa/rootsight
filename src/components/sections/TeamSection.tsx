"use client";

import React from "react";
import { ArrowUpRight, Github, Linkedin, Shield } from "lucide-react";
import { TEAM } from "@/data/content";

const ACCENT_COLORS = [
  { bg: "#dcd0ff", text: "#171717", border: "#dcd0ff" },
  { bg: "#ecaf30", text: "#171717", border: "#ecaf30" },
  { bg: "#9cd696", text: "#171717", border: "#9cd696" },
  { bg: "#ff8a7a", text: "#171717", border: "#ff8a7a" },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 md:py-32 bg-[#171717] border-b border-[#262626]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ecaf30]">
            The Founding Team
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black text-[#f3f3ed] tracking-tight">
            The 4 people behind Rootsight.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#86867f]">
            Directly authoring, deploying, and overseeing every law enforcement suite and security engagement.
          </p>
        </div>

        {/* 4-Person Grid Matching TTM Card Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((founder, idx) => {
            const accent = ACCENT_COLORS[idx % ACCENT_COLORS.length];
            return (
              <div
                key={founder.name}
                className="group flex flex-col justify-between rounded-2xl bg-[#1c1c1c] border border-[#2b2b2b] hover:border-[#404040] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Header: Monogram Avatar & Social Links */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl font-black text-sm shadow-md"
                      style={{ backgroundColor: accent.bg, color: accent.text }}
                    >
                      {founder.name.slice(0, 2).toUpperCase()}
                    </div>

                    <div className="flex items-center gap-2">
                      {founder.linkedin && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${founder.name} LinkedIn`}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#242424] text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#333] transition-colors"
                        >
                          <Linkedin size={14} />
                        </a>
                      )}
                      {founder.github && (
                        <a
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${founder.name} GitHub`}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#242424] text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#333] transition-colors"
                        >
                          <Github size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Founder Name & Role */}
                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-[#f3f3ed] group-hover:text-white">
                      {founder.name}
                    </h3>
                    <span
                      className="inline-block mt-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold font-mono"
                      style={{ backgroundColor: `${accent.bg}15`, color: accent.bg }}
                    >
                      {founder.role}
                    </span>
                  </div>

                  {/* Focus */}
                  <div className="mt-4 pt-4 border-t border-[#262626]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#86867f] block mb-1">
                      Primary Responsibility:
                    </span>
                    <p className="text-xs font-semibold text-[#d4d4d0] leading-snug">
                      {founder.focus}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="mt-3 text-xs text-[#86867f] leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                {/* Skills Tags in TTM Pastel Style */}
                <div className="mt-6 pt-4 border-t border-[#262626]">
                  <div className="flex flex-wrap gap-1.5">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#222222] border border-[#2d2d2d] px-2.5 py-0.5 text-[10px] font-medium text-[#a3a39e]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement */}
        <div className="mt-12 p-8 rounded-2xl bg-[#1f1f1f] border border-[#2c2c2c] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecaf30]/15 text-[#ecaf30] shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#f3f3ed]">
                100% Founder-Led Technical Execution
              </h4>
              <p className="text-xs text-[#86867f] mt-0.5">
                We do not outsource core engineering. All tools, forensic algorithms, and offensive assessments are developed and executed directly by our four co-founders.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="ttm-pill bg-[#ecaf30] px-6 py-3 text-xs font-bold text-[#171717] hover:bg-[#ffd13b] shrink-0"
          >
            <span>Connect with Us</span>
            <ArrowUpRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
