"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import { TEAM } from "@/data/content";

export function TeamSection() {
  return (
    <section
      id="team"
      className="bg-[#f8f8f8] py-28 md:py-36 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7a7a7a]">
              Leadership // Core Research
            </span>
            <h2 className="mt-2 font-extrabold uppercase tracking-[-0.03em] text-[#222222] text-4xl sm:text-5xl">
              OPERATORS &amp; ARCHITECTS
            </h2>
          </div>
          <span className="font-mono text-[11px] text-[#a7a7a7]">
            // TODO: Replace placeholder profiles in src/data/content.ts
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.clearance}
              className="flex flex-col justify-between rounded-[20px] border border-[#ededed] bg-[#ffffff] p-8 shadow-xs transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#ededed] pb-4">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#00c875]">
                    {member.clearance}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="text-[#a7a7a7] transition-colors hover:text-[#222222]"
                    >
                      <Linkedin size={15} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="text-[#a7a7a7] transition-colors hover:text-[#222222]"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold uppercase tracking-[-0.02em] text-[#222222]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#7a7a7a]">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#555555]">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
