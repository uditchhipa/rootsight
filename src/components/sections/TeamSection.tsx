"use client";

import React from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { TEAM } from "@/data/content";

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 md:py-28 hairline-b bg-[#F9F9F7]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-3xl pb-12 hairline-b">
          <span className="mono-tag text-[#A3A39E]">03 // LEADERSHIP</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-[#111213]">
            Founding Partners &amp; Roles
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E7073] leading-relaxed">
            Rootsight is directed and operated by four founding technical partners who personally lead every client deployment, investigation framework, and offensive engagement.
          </p>
        </div>

        {/* 4-Person Executive Partner Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {TEAM.map((member, idx) => (
            <article
              key={member.name}
              className="flex flex-col justify-between p-6 bg-white border border-[#E5E5E2] rounded-xl hover:border-[#111213] transition-colors"
            >
              <div>
                {/* Partner Header */}
                <div className="flex items-center justify-between pb-4 hairline-b text-xs mono-tag">
                  <span className="text-[#111213] font-bold">
                    PARTNER // 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="text-[#A3A39E] hover:text-[#111213] transition-colors"
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
                        className="text-[#A3A39E] hover:text-[#111213] transition-colors"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Name & Official Title */}
                <div className="mt-5 space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-[#111213]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#111213] uppercase tracking-wider">
                    {member.title}
                  </p>
                </div>

                {/* Operational Ownership */}
                <div className="mt-5 pt-4 hairline-t space-y-1">
                  <span className="mono-tag text-[10px] text-[#A3A39E] block">
                    OPERATIONAL OWNERSHIP
                  </span>
                  <p className="text-xs font-medium text-[#2A2B2D] leading-snug">
                    {member.focus}
                  </p>
                </div>

                {/* Detailed Bio */}
                <p className="mt-4 text-xs text-[#6E7073] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Competencies */}
              <div className="mt-6 pt-4 hairline-t">
                <span className="mono-tag text-[10px] text-[#A3A39E] block mb-2">
                  AREAS OF PRACTICE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="mono-tag text-[9px] bg-[#F9F9F7] border border-[#E5E5E2] px-2 py-0.5 text-[#525457] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Founder Commitment Statement */}
        <div className="mt-12 p-8 bg-white border border-[#E5E5E2] rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-sm font-bold uppercase tracking-tight text-[#111213]">
              Founder-Led Execution
            </h4>
            <p className="text-xs text-[#6E7073] leading-relaxed">
              We do not outsource or delegate core technical work. All forensic tooling, penetration testing engagements, and malware investigations are authored and verified directly by our four founding partners.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#111213] px-5 py-2.5 text-xs font-semibold text-[#F9F9F7] hover:bg-black transition-colors shrink-0"
          >
            <span>Direct Founder Briefing</span>
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
