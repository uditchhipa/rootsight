"use client";

import React from "react";
import { Github, Linkedin, Shield } from "lucide-react";
import { TEAM } from "@/data/content";

export function TeamSection() {
  return (
    <section
      id="team"
      className="bg-[#fafafa] py-20 md:py-28 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#71717a]">
            Leadership &amp; Roles
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09090b]">
            The 4 minds driving Rootsight.
          </h2>
          <p className="mt-4 text-base text-[#71717a] leading-relaxed">
            Our founding team brings together executive strategy, offensive red teaming, systems operations, and low-level malware research to build sovereign Indian cyber defense technology.
          </p>
        </div>

        {/* 4-Person Leadership Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#e4e4e7] shadow-2xs transition-all hover:border-[#d4d4d8] hover:shadow-xs"
            >
              <div>
                {/* Avatar / Monogram Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#f4f4f5]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#09090b] text-white font-mono font-bold text-sm tracking-wider">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e4e4e7] text-[#71717a] hover:text-[#09090b] hover:border-[#a1a1aa] transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e4e4e7] text-[#71717a] hover:text-[#09090b] hover:border-[#a1a1aa] transition-colors"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Name & Official Title */}
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-[#09090b] tracking-tight">
                    {member.name}
                  </h3>
                  <span className="inline-block mt-1 text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded">
                    {member.role}
                  </span>
                </div>

                {/* Focus Area */}
                <div className="mt-4 pt-4 border-t border-[#f4f4f5]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#71717a] block mb-1">
                    Primary Responsibility:
                  </span>
                  <p className="text-xs font-semibold text-[#27272a] leading-snug">
                    {member.focus}
                  </p>
                </div>

                {/* Bio */}
                <p className="mt-3 text-xs text-[#52525b] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Skills / Domains */}
              <div className="mt-6 pt-5 border-t border-[#f4f4f5]">
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-[#fafafa] border border-[#e4e4e7] px-2 py-0.5 text-[10px] font-medium text-[#52525b]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Badge */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#e4e4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/15 text-[#10b981] shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#09090b]">Direct Founder-Led Engagements</h4>
              <p className="text-xs text-[#71717a]">All projects and agency deployments are overseen directly by our four co-founders.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#09090b] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#27272a] transition-colors shrink-0"
          >
            Schedule Discussion
          </a>
        </div>
      </div>
    </section>
  );
}
