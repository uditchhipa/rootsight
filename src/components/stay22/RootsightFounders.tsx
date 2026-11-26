"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { ArrowUpRight, Terminal, UserCheck, Shield, Cpu, Code2, Globe } from "lucide-react";

interface FounderData {
  id: string;
  name: string;
  role: string;
  badge: string;
  clearance: string;
  callsign: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  bio: string;
  focus: string;
  skills: string[];
  linkedin: string;
  terminalLogs: string[];
}

const FOUNDERS: FounderData[] = [
  {
    id: "sumit",
    name: "Sumit Vishnoi",
    role: "Founder",
    badge: "CEO & Strategic Command",
    clearance: "LEVEL-01 SOVEREIGN",
    callsign: "ROOT // COMMAND",
    accentColor: "#ffb200",
    accentBg: "rgba(255, 178, 0, 0.15)",
    accentBorder: "rgba(255, 178, 0, 0.4)",
    bio: "Spearheads Rootsight's strategic mission, national law enforcement agency partnerships, and sovereign cyber intelligence architecture.",
    focus: "Strategic Vision, LEA Deployments & Public Sector Alliances",
    skills: ["Executive Strategy", "Forensics Architecture", "LEA Alignments", "DPIIT Mandates"],
    linkedin: "https://www.linkedin.com/in/sumit-vishnoi-0b1a9132b/",
    terminalLogs: [
      ">> DIRECTIVE: SOVEREIGN_INIT [OK]",
      ">> LEA_PORTAL_ROUTING: ACTIVE",
      ">> EVIDENCE_VERIFICATION: 99.4%",
      ">> STATUS: COMMAND_READY",
    ],
  },
  {
    id: "vishwash",
    name: "Vishwash Tank",
    role: "System Designer & Security Guard",
    badge: "Core Systems Architect",
    clearance: "LEVEL-01 PERIMETER",
    callsign: "SIGHT // ARCHITECT",
    accentColor: "#00e5ff",
    accentBg: "rgba(0, 229, 255, 0.15)",
    accentBorder: "rgba(0, 229, 255, 0.4)",
    bio: "Architects high-throughput distributed system topologies and defensive perimeter meshes, safeguarding operational nodes against adversary penetration.",
    focus: "Distributed Telecom Ingestion, Fault-Tolerant Topologies & Defensive Meshes",
    skills: ["System Architecture", "Perimeter Defense", "Telecom Pipeline", "High-Availability"],
    linkedin: "https://www.linkedin.com/in/vishwash-tank-89308b28b",
    terminalLogs: [
      ">> DISTRIBUTED_NODES: 64/64 SYNCED",
      ">> PERIMETER_SHIELD: LOCKED",
      ">> AIR_GAP_LATENCY: 2.1ms",
      ">> INTRUSION_DETECTION: ZERO_VULN",
    ],
  },
  {
    id: "praveen",
    name: "Praveen Sharma",
    role: "Security Guard & DevOps",
    badge: "Lead Infrastructure Defender",
    clearance: "LEVEL-01 INFRA-OPS",
    callsign: "INFRA // GUARDIAN",
    accentColor: "#c084fc",
    accentBg: "rgba(192, 132, 252, 0.15)",
    accentBorder: "rgba(192, 132, 252, 0.4)",
    bio: "Orchestrates air-gapped CI/CD deployment pipelines, hardening sovereign Kubernetes clusters and enforcing low-level security guardrails across cloud assets.",
    focus: "Air-Gapped Cloud Infrastructure, K8s Hardening & CI/CD Security",
    skills: ["DevOps Automation", "Cluster Hardening", "Offensive Red Team", "Air-Gapped CI/CD"],
    linkedin: "https://www.linkedin.com/in/praveen-sharma-762b86314/",
    terminalLogs: [
      ">> AIR_GAPPED_PIPELINE: ENCRYPTED",
      ">> K8S_AUDIT_LOGS: STREAMING",
      ">> SECCOMP_PROFILES: ENFORCED",
      ">> CLUSTER_HEALTH: 100% SECURE",
    ],
  },
  {
    id: "udit",
    name: "Udit Chhipa",
    role: "Malware Researcher & Developer",
    badge: "Kernel Exploit Specialist",
    clearance: "LEVEL-01 KERNEL LAB",
    callsign: "KERNEL // DETONATION",
    accentColor: "#10b981",
    accentBg: "rgba(16, 185, 129, 0.15)",
    accentBorder: "rgba(16, 185, 129, 0.4)",
    bio: "Engineers low-level binary detonation sandboxes, reverse-engineering polymorphic exploit chains and building automated parsing algorithms for complex cyber telemetry.",
    focus: "Binary Deobfuscation, Dynamic Detonation Sandboxes & Payload Analysis",
    skills: ["Malware Research", "Kernel Disassembly", "Polymorphic Detonation", "Reverse Engineering"],
    linkedin: "https://www.linkedin.com/in/udit-chhipa-50a09430b/",
    terminalLogs: [
      ">> BINARY_PARSER: ELF64/PE32+ ACTIVE",
      ">> DISASSEMBLY: xor rax, rax ; syscall",
      ">> ENTROPY_ANALYSIS: 7.94 [PACKED]",
      ">> ISOLATED_SANDBOX: DETONATED 0ms",
    ],
  },
];

export function RootsightFounders() {
  const [activeTelemetry, setActiveTelemetry] = useState<Record<string, boolean>>({});

  const toggleTelemetry = (id: string) => {
    setActiveTelemetry((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="team" className="py-24 md:py-32 bg-[#eadecc] border-b border-[#262222]/10 relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
              Founding Leadership &amp; Engineering
            </span>
            <h2
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              The{" "}
              <em
                className="font-serif italic font-normal text-[#262222]"
                style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
              >
                minds
              </em>{" "}
              behind Rootsight
            </h2>
            <p className="text-base sm:text-xl text-[#262222]/80 leading-relaxed font-medium">
              Four specialists uniting executive law enforcement strategy, defensive systems engineering, air-gapped DevOps, and low-level malware research.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a2626] text-[#f2e4d8] text-xs font-mono font-bold shrink-0 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>DIRECT FOUNDER-LED DEPLOYMENTS</span>
          </div>
        </div>

        {/* 4 3D Tilt Cyber Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDERS.map((founder) => (
            <FounderCard3D
              key={founder.id}
              founder={founder}
              isTelemetry={!!activeTelemetry[founder.id]}
              onToggleTelemetry={() => toggleTelemetry(founder.id)}
            />
          ))}
        </div>

        {/* Bottom Founder Commitment Banner */}
        <div className="mt-16 rounded-[32px] bg-[#faf4ec] border border-[#262222]/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ffb200] text-[#262222] flex items-center justify-center font-bold font-mono shadow-md shrink-0">
              <Shield className="w-6 h-6 text-[#262222]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#262222]">
                Guaranteed Founder-Led Technical Oversight
              </h4>
              <p className="text-xs sm:text-sm text-[#262222]/75 leading-relaxed font-medium">
                Every law enforcement integration and critical infrastructure deployment is personally supervised by our core leadership council.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="stay22-btn-yellow inline-flex items-center gap-2 text-sm font-bold shadow-md hover:scale-105 transition-all shrink-0"
          >
            <span>Schedule Confidential Briefing</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FounderCard3D({
  founder,
  isTelemetry,
  onToggleTelemetry,
}: {
  founder: FounderData;
  isTelemetry: boolean;
  onToggleTelemetry: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: "1200px" }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.12s ease-out, box-shadow 0.12s ease-out",
        }}
        className="relative rounded-[28px] bg-[#1e1b1b] text-[#f2e4d8] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-[#ffb200]/60 min-h-[520px] group will-change-transform"
      >
        {/* Holographic Specular Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.22) 0%, ${founder.accentBg} 35%, transparent 70%)`,
            mixBlendMode: "screen",
          }}
        />

        {/* Top Header: Monogram Avatar, Radar Scan, Clearance & Mode Toggle */}
        <div className="relative z-10">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            {/* Avatar Monogram with Cyber Ring */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold font-mono text-base shadow-lg relative overflow-hidden"
                style={{
                  backgroundColor: "#2a2626",
                  color: founder.accentColor,
                  border: `2px solid ${founder.accentBorder}`,
                }}
              >
                {/* Subtle Radar Sweep effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, ${founder.accentColor} 360deg)`,
                    animation: "spin 4s linear infinite",
                  }}
                />
                <span className="relative z-10">
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-wider text-white/50 block">
                  {founder.clearance}
                </span>
                <span
                  className="text-xs font-mono font-bold tracking-tight block"
                  style={{ color: founder.accentColor }}
                >
                  {founder.callsign}
                </span>
              </div>
            </div>

            {/* Toggle Telemetry Mode Button */}
            <button
              type="button"
              onClick={onToggleTelemetry}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer shadow-xs"
              title={isTelemetry ? "View Profile Dossier" : "View Cyber Telemetry"}
              aria-label="Toggle Telemetry"
            >
              {isTelemetry ? (
                <UserCheck className="w-4 h-4 text-[#ffb200]" />
              ) : (
                <Terminal className="w-4 h-4 text-[#ffb200]" />
              )}
            </button>
          </div>

          {/* Name & Official Title */}
          <div className="mt-5">
            <h3
              className="font-heading text-2xl font-normal text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              {founder.name}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5 items-center">
              <span
                className="inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: founder.accentBg,
                  color: founder.accentColor,
                  border: `1px solid ${founder.accentBorder}`,
                }}
              >
                {founder.role}
              </span>
            </div>
          </div>

          {/* Switchable Layer: Dossier Mode vs Telemetry Mode */}
          {!isTelemetry ? (
            <div className="mt-4 space-y-3 animate-in fade-in duration-200">
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                {founder.bio}
              </p>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                  Primary Domain:
                </span>
                <p className="text-xs font-bold text-white/90">
                  {founder.focus}
                </p>
              </div>

              {/* Skills tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {founder.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-4 p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-[10px] text-white/50 border-b border-white/10 pb-1.5">
                <span>// LIVE KERNEL TELEMETRY</span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>
              <div className="space-y-1.5 text-[11px]" style={{ color: founder.accentColor }}>
                {founder.terminalLogs.map((log, i) => (
                  <div key={i} className="truncate">
                    {log}
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-white/10 text-[10px] text-white/40">
                HOST: air-gap-node-0{founder.id.length}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action: Official LinkedIn Connection Pill */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span>VERIFIED MEMBER</span>
          </div>

          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
            title={`View ${founder.name}'s LinkedIn Profile`}
          >
            {/* Official LinkedIn SVG glyph */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
}
