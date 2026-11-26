/*
From Uiverse.io by NK2552003 - https://uiverse.io/NK2552003/chatty-eel-90
MIT License, Copyright (c) Rafa - https://codepen.io/RAFA3L/pen/ZYbabEa, NK2552003 (Nitish)
*/

"use client";

import React, { useState, CSSProperties } from "react";
import { ArrowUpRight, Shield, Sparkles } from "lucide-react";
import "./luminous-card.css";

interface FounderLuminousData {
  id: string;
  name: string;
  role: string;
  badge: string;
  clearance: string;
  callsign: string;
  monogram: string;
  glowColor: string;
  glowAlpha: string;
  badgeBg: string;
  badgeBorder: string;
  description: string;
  linkedin: string;
  iconPath: string;
  gradientStops: [string, string];
}

const FOUNDERS: FounderLuminousData[] = [
  {
    id: "sumit",
    name: "Sumit Vishnoi",
    role: "Founder",
    badge: "CEO & Strategic Command",
    clearance: "LEVEL-01 SOVEREIGN",
    callsign: "ROOT // COMMAND",
    monogram: "SV",
    glowColor: "#ffb200",
    glowAlpha: "rgba(255, 178, 0, 0.75)",
    badgeBg: "rgba(255, 178, 0, 0.15)",
    badgeBorder: "rgba(255, 178, 0, 0.4)",
    description: "Spearheads Rootsight's sovereign mission, law enforcement agency alliances & strategic direction.",
    linkedin: "https://www.linkedin.com/in/sumit-vishnoi-0b1a9132b/",
    gradientStops: ["#ffe082", "#ffb200"],
    iconPath: "M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m278 533c0 1.1-.1 2.1-.2 3.1c0 .4-.1.7-.2 1a14.2 14.2 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7c-.2.4-.4.8-.5 1.2c-.3.5-.5 1.1-.8 1.6c-.2.4-.4.7-.7 1.1c-.3.5-.7 1-1 1.5c-.3.4-.5.7-.8 1c-.4.4-.8.9-1.2 1.3c-.3.3-.6.6-1 .9c-.4.4-.9.8-1.4 1.1c-.4.3-.7.6-1.1.8c-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4c-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1c-.3-.3-.6-.6-1-.9c-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5c-.2-.4-.5-.7-.7-1.1c-.3-.5-.6-1.1-.8-1.6c-.2-.4-.4-.8-.5-1.2c-.2-.6-.4-1.2-.6-1.7c-.1-.4-.3-.8-.4-1.2c-.2-.7-.3-1.3-.4-2c-.1-.3-.1-.7-.2-1c-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1c.1-.3.1-.7.2-1a14.2 14.2 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7c.2-.4.4-.8.5-1.2c.2-.5.5-1.1.8-1.6c.2-.4.4-.7.7-1.1c.6-.9 1.2-1.7 1.8-2.5c.4-.4.8-.9 1.2-1.3c.3-.3.6-.6 1-.9c.4-.4.9-.8 1.3-1.1s.7-.6 1.1-.8c.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8l1.4 1.1c.3.3.6.6 1 .9c.4.4.8.8 1.2 1.3c.7.8 1.3 1.6 1.8 2.5c.2.4.5.7.7 1.1c.3.5.6 1 .8 1.6c.2.4.4.8.5 1.2c.2.6.4 1.2.6 1.7c.1.4.3.8.4 1.2c.2.7.3 1.3.4 2c.1.3.1.7.2 1c.1 1 .2 2.1.2 3.1zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4l84.5 56.4l84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3z",
  },
  {
    id: "vishwash",
    name: "Vishwash Tank",
    role: "System Designer & Security Guard",
    badge: "Core Systems Architect",
    clearance: "LEVEL-01 PERIMETER",
    callsign: "SIGHT // ARCHITECT",
    monogram: "VT",
    glowColor: "#00e5ff",
    glowAlpha: "rgba(0, 229, 255, 0.75)",
    badgeBg: "rgba(0, 229, 255, 0.15)",
    badgeBorder: "rgba(0, 229, 255, 0.4)",
    description: "Architects distributed high-throughput pipelines & defensive perimeter security meshes.",
    linkedin: "https://www.linkedin.com/in/vishwash-tank-89308b28b",
    gradientStops: ["#a5f3fc", "#00e5ff"],
    iconPath: "M512 64L160 192v256c0 240 150 464 352 512c202-48 352-272 352-512V192L512 64zm0 128l224 81.5v174.5c0 152.9-95.6 295.6-224 326.1c-128.4-30.5-224-173.2-224-326.1V273.5L512 192zm-64 192h128v128H448V384zm0 192h128v128H448V576z",
  },
  {
    id: "praveen",
    name: "Praveen Sharma",
    role: "Security Guard & DevOps",
    badge: "Lead Infrastructure Defender",
    clearance: "LEVEL-01 INFRA-OPS",
    callsign: "INFRA // GUARDIAN",
    monogram: "PS",
    glowColor: "#c084fc",
    glowAlpha: "rgba(192, 132, 252, 0.75)",
    badgeBg: "rgba(192, 132, 252, 0.15)",
    badgeBorder: "rgba(192, 132, 252, 0.4)",
    description: "Hardens air-gapped CI/CD deployment pipelines & enforces low-level Kubernetes security.",
    linkedin: "https://www.linkedin.com/in/praveen-sharma-762b86314/",
    gradientStops: ["#f3e8ff", "#c084fc"],
    iconPath: "M512 64L128 288v448l384 224l384-224V288L512 64zm0 128l256 149.3v298.7L512 789.3L256 640V341.3L512 192zm-96 224v192l192-96v-192l-192 96z",
  },
  {
    id: "udit",
    name: "Udit Chhipa",
    role: "Malware Researcher & Developer",
    badge: "Kernel Exploit Specialist",
    clearance: "LEVEL-01 KERNEL LAB",
    callsign: "KERNEL // DETONATION",
    monogram: "UC",
    glowColor: "#10b981",
    glowAlpha: "rgba(16, 185, 129, 0.75)",
    badgeBg: "rgba(16, 185, 129, 0.15)",
    badgeBorder: "rgba(16, 185, 129, 0.4)",
    description: "Engineers binary detonation sandboxes, polymorphic exploit tracing & automated telemetry.",
    linkedin: "https://www.linkedin.com/in/udit-chhipa-50a09430b/",
    gradientStops: ["#a7f3d0", "#10b981"],
    iconPath: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 128c176.7 0 320 143.3 320 320S688.7 832 512 832S192 688.7 192 512S335.3 192 512 192zm-64 160v128H320v64h128v128h64V544h128v-64H512V352h-64z",
  },
];

export function RootsightFounders() {
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({
    sumit: true,
    vishwash: true,
    praveen: true,
    udit: true,
  });

  const toggleCard = (id: string) => {
    setActiveCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAll = (state: boolean) => {
    setActiveCards({
      sumit: state,
      vishwash: state,
      praveen: state,
      udit: state,
    });
  };

  const allActive = Object.values(activeCards).every(Boolean);

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

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => toggleAll(!allActive)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2a2626] hover:bg-[#1e1b1b] text-[#f2e4d8] text-xs font-mono font-bold shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffb200]" />
              <span>{allActive ? "DIM ALL LUMENS" : "ILLUMINATE ALL"}</span>
            </button>
          </div>
        </div>

        {/* 4 Luminous Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {FOUNDERS.map((founder) => (
            <LuminousFounderCard
              key={founder.id}
              founder={founder}
              isActive={!!activeCards[founder.id]}
              onToggle={() => toggleCard(founder.id)}
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

function LuminousFounderCard({
  founder,
  isActive,
  onToggle,
}: {
  founder: FounderLuminousData;
  isActive: boolean;
  onToggle: () => void;
}) {
  const customStyles: CSSProperties & Record<string, string> = {
    "--card-glow": founder.glowColor,
    "--card-glow-alpha": founder.glowAlpha,
    "--card-badge-bg": founder.badgeBg,
    "--card-badge-border": founder.badgeBorder,
  };

  return (
    <div className="rs-luminous-card-container">
      <div
        className={`rs-luminous-card ${isActive ? "active" : ""}`}
        style={customStyles}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {/* Luminous Light Layer with Slit, Volumetric Lumen Rays & Darken Shadows */}
        <div className="rs-luminous-light-layer">
          <div className="rs-luminous-slit" />
          <div className="rs-luminous-lumen">
            <div className="min" />
            <div className="mid" />
            <div className="hi" />
          </div>
          <div className="rs-luminous-darken">
            <div className="sl" />
            <div className="ll" />
            <div className="slt" />
            <div className="srt" />
          </div>
        </div>

        {/* Content Section */}
        <div className="rs-luminous-content">
          {/* Top Bar with Monogram, Clearance & Verified Badge */}
          <div className="rs-luminous-top">
            <div className="rs-luminous-header-bar w-full">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center font-bold font-mono text-xs shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? founder.glowColor : "rgba(255, 255, 255, 0.08)",
                    color: isActive ? "#161313" : "#f2e4d8",
                  }}
                >
                  {founder.monogram}
                </div>
                <div className="text-[9px] font-mono leading-tight text-white/60">
                  <span className="opacity-80">CLR: T-01</span>
                  <div style={{ color: founder.glowColor }} className="font-bold">
                    {founder.callsign.split("//")[0].trim()}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/70">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: founder.glowColor }}
                />
                <span>VERIFIED</span>
              </div>
            </div>

            {/* Central 3D Luminous Icon sitting above the light slit */}
            <div className="rs-luminous-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3.4rem"
                height="3.4rem"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill={`url(#iconGradient-${founder.id})`}
                  d={founder.iconPath}
                  filter={`url(#strong-inner-${founder.id})`}
                />
                <defs>
                  <linearGradient id={`iconGradient-${founder.id}`} x1="0" x2="0" y1="-1" y2="0.8">
                    <stop offset="0%" stopColor={founder.gradientStops[0]} />
                    <stop offset="100%" stopColor={founder.gradientStops[1]} />
                  </linearGradient>
                  <filter id={`strong-inner-${founder.id}`}>
                    <feFlood floodColor="rgba(255,255,255,0.25)" />
                    <feComposite operator="out" in2="SourceGraphic" />
                    <feMorphology operator="dilate" radius="8" />
                    <feGaussianBlur stdDeviation="32" />
                    <feComposite operator="atop" in2="SourceGraphic" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Bottom Card Body with Name, Role, Bio, Toggle Switch & LinkedIn */}
          <div className="rs-luminous-bottom">
            <h3
              className="rs-luminous-title font-heading"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              <span>{founder.name}</span>
            </h3>

            <div>
              <span className="rs-luminous-role-badge">
                {founder.role}
              </span>
            </div>

            <p className="rs-luminous-description">
              {founder.description}
            </p>

            {/* Bottom Row: Tactile Toggle Switch & LinkedIn Connect */}
            <div className="rs-luminous-toggle-row">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#0077b5] text-white text-[11px] font-semibold tracking-tight transition-all hover:scale-105 shadow-sm border border-white/10"
                title={`Connect with ${founder.name} on LinkedIn`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </a>

              {/* Physical Skeuomorphic Tactile Switch */}
              <div
                className={`rs-luminous-toggle ${isActive ? "active" : ""}`}
                title="Toggle Lumen Glow"
              >
                <div className="rs-luminous-handle" />
                <span className="rs-luminous-toggle-label">
                  {isActive ? "Lumen Active" : "Activate Lumen"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
