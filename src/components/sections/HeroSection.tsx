"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowDown, Shield, Terminal, Cpu, Database, Check } from "lucide-react";

const TARGET_ROLES = [
  "Law Enforcement",
  "Cyber Crime Cells",
  "Forensic Examiners",
  "Offensive Teams",
  "Defense Agencies",
  "Security Architects",
];

const MODES = [
  {
    id: "forensics",
    label: "Forensics Vault",
    tag: "SHA-256 AUDITED",
    title: "Zero-Tamper Evidence Intake & Correlation",
    desc: "Ingests raw CDR, IPDR, cellular tower dumps, and digital exhibits. Generates court-admissible timelines with cryptographic proof.",
    stats: "10,000+ records / sec",
    status: "LEGAL EVIDENCE READY",
    color: "#dcd0ff",
  },
  {
    id: "osint",
    label: "OSINT Grapher",
    tag: "SURFACE & DARKNET",
    title: "Autonomous Entity Profiling & Leak Surveillance",
    desc: "Maps attacker infrastructure, cross-references leaked breach databases, and monitors underground forums in real-time.",
    stats: "24/7 darknet listening",
    status: "ACTIVE RADAR",
    color: "#9cd696",
  },
  {
    id: "pentest",
    label: "Red Team Suite",
    tag: "ADVERSARY SIMULATION",
    title: "Automated Attack Surface & Cloud Hardening",
    desc: "Led by certified penetration testers to emulate adversary TTPs across cloud APIs, internal Active Directory, and perimeter networks.",
    stats: "Zero false-positive noise",
    status: "EXPLOIT READY",
    color: "#ecaf30",
  },
  {
    id: "malware",
    label: "Malware Sandbox",
    tag: "KERNEL HOOKING",
    title: "Isolated Detonation & Dynamic YARA Extraction",
    desc: "Detonates suspect payloads in hardened QEMU micro-VMs with automated memory analysis, API tracing, and signature generation.",
    stats: "< 90s full report",
    status: "SANDBOX ARMED",
    color: "#ff8a7a",
  },
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeMode, setActiveMode] = useState(MODES[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % TARGET_ROLES.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-[#171717] border-b border-[#262626]"
    >
      {/* TTM Floating Colorful Pastel Decorative Blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#dcd0ff]/10 blur-[100px] animate-blob-1" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[450px] w-[450px] rounded-full bg-[#ecaf30]/10 blur-[120px] animate-blob-2" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-[#9cd696]/10 blur-[140px] animate-blob-1" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow with Animated Ticker */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#202020] border border-[#2d2d2d] px-4 py-1.5 text-xs font-medium text-[#86867f] shadow-inner mb-6">
            <span>Purpose-built automation for</span>
            <span className="inline-block font-bold text-[#ecaf30] min-w-[130px] text-left transition-all duration-300">
              {TARGET_ROLES[roleIndex]}
            </span>
          </div>

          {/* Monumental Headline in Poppins */}
          <h1 className="max-w-4xl text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-[-0.03em] text-[#f3f3ed] leading-[0.98]">
            Security<br />
            <span className="text-[#ecaf30]">that protects.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#86867f] leading-relaxed font-normal">
            A growing suite of specialized investigation automation, offensive red teaming, and sovereign threat intelligence tools. Go from incident to court-ready evidence in minutes.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#about"
              className="ttm-pill bg-[#f3f3ed] text-[#171717] px-7 py-3.5 text-xs font-bold shadow-xl hover:bg-white"
            >
              <span>So what’s Rootsight about?</span>
              <ArrowDown size={14} className="ml-1.5" />
            </a>

            <a
              href="#services"
              className="ttm-pill bg-[#262626] border border-[#333333] text-[#f3f3ed] px-7 py-3.5 text-xs font-bold hover:bg-[#303030]"
            >
              <span>Explore Capabilities</span>
              <ArrowUpRight size={14} className="ml-1.5" />
            </a>
          </div>

          {/* TTM Interactive Canvas / Mode Selector */}
          <div className="mt-14 w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#86867f] mb-3">
                Live Module Preview
              </span>

              {/* Mode Pills (Canvas Size Selector Style from TTM) */}
              <div className="flex flex-wrap items-center justify-center gap-2 bg-[#202020] border border-[#2d2d2d] p-1.5 rounded-full shadow-inner">
                {MODES.map((mode) => {
                  const active = activeMode.id === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setActiveMode(mode)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                        active
                          ? "bg-[#f3f3ed] text-[#171717] shadow-md scale-102"
                          : "text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#282828]"
                      }`}
                    >
                      {mode.label}
                    </button>
                  );
                })}
              </div>

              {/* Interactive Showcase Card */}
              <div className="mt-6 w-full rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] p-6 sm:p-8 text-left shadow-2xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#282828]">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full animate-pulse"
                      style={{ backgroundColor: activeMode.color }}
                    />
                    <span
                      className="font-mono text-xs font-bold tracking-wider uppercase"
                      style={{ color: activeMode.color }}
                    >
                      {activeMode.tag}
                    </span>
                  </div>

                  <span className="rounded-full bg-[#262626] border border-[#333333] px-3 py-1 font-mono text-[10px] font-bold text-[#f3f3ed]">
                    {activeMode.status}
                  </span>
                </div>

                <div className="mt-6 grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#f3f3ed]">
                      {activeMode.title}
                    </h3>
                    <p className="text-sm text-[#86867f] leading-relaxed">
                      {activeMode.desc}
                    </p>
                  </div>

                  <div className="md:col-span-4 flex flex-col md:items-end justify-center p-4 rounded-xl bg-[#222222] border border-[#2b2b2b]">
                    <span className="text-[10px] uppercase font-bold text-[#86867f]">
                      Performance Benchmark
                    </span>
                    <span className="text-lg font-black text-[#ecaf30] mt-0.5">
                      {activeMode.stats}
                    </span>
                    <span className="text-[10px] text-[#9cd696] mt-1 font-semibold">
                      ✓ Audit Logged &amp; Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
