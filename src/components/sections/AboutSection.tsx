"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#ffffff] py-28 md:py-36 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-[#ededed] pb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7a7a7a]">
            01 — Company // Background
          </span>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#dedede] bg-[#f8f8f8] px-4 py-1.5 shadow-xs">
            <ShieldCheck size={15} className="text-[#00c875]" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-[#222222]">
              Startup India Registered · {SITE_CONFIG.startupIndiaId}
            </span>
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="about-reveal lg:col-span-7">
            <h2 className="font-extrabold uppercase leading-[1.05] tracking-[-0.035em] text-[#222222] text-4xl sm:text-6xl">
              ROOT ACCESS. TOTAL SIGHT.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#555555]">
              ROOTSIGHT is an Indian cyber security and automation startup
              recognized by Startup India (DPIIT), engineering sovereign,
              high-velocity intelligence platforms and offensive security frameworks.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#7a7a7a]">
              Our name fuses <strong className="text-[#222222] font-semibold">ROOT</strong>{" "}
              (root-level system access, mathematical rigor, and root-cause diagnostics) with{" "}
              <strong className="text-[#222222] font-semibold">SIGHT</strong>{" "}
              (continuous threat intelligence and surveillance). We equip law
              enforcement agencies and high-security enterprises to operate with speed and precision.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-[#f8f8f8] border border-[#ededed] px-4 py-2 text-xs font-medium text-[#222222]">
                <CheckCircle size={14} className="text-[#00c875]" />
                <span>On-Premise &amp; Air-Gapped Capable</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#f8f8f8] border border-[#ededed] px-4 py-2 text-xs font-medium text-[#222222]">
                <CheckCircle size={14} className="text-[#00c875]" />
                <span>Court-Admissible Evidence Standards</span>
              </div>
            </div>
          </div>

          <div className="about-reveal grid gap-6 lg:col-span-5">
            <div className="rounded-[20px] border border-[#ededed] bg-[#f8f8f8] p-8 shadow-xs">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
                Pillar 01 · Law Enforcement Automation
              </span>
              <h3 className="mt-3 font-bold uppercase tracking-[-0.02em] text-[#222222] text-xl">
                Investigation Engines
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#555555]">
                Automating phone record (CDR/IPDR) correlation, OSINT ingestion, and evidence intake pipelines so officers focus on decisions, not manual data entry.
              </p>
            </div>

            <div className="rounded-[20px] border border-[#ededed] bg-[#f8f8f8] p-8 shadow-xs">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
                Pillar 02 · Offensive Cyber Security
              </span>
              <h3 className="mt-3 font-bold uppercase tracking-[-0.02em] text-[#222222] text-xl">
                Adversary Simulation
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#555555]">
                Full-scope penetration testing, red teaming, and malware reverse engineering to pinpoint critical zero-day vulnerabilities before threat actors exploit them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
