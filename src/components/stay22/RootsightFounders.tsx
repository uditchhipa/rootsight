/*
From Uiverse.io by NK2552003 - https://uiverse.io/NK2552003/chatty-eel-90
MIT License, Copyright (c) Rafa - https://codepen.io/RAFA3L/pen/ZYbabEa, NK2552003 (Nitish)
*/

"use client";

import React, { useState } from "react";
import { ArrowUpRight, Shield } from "lucide-react";
import "./luminous-card.css";

interface FounderData {
  id: string;
  name: string;
  role: string;
  description: string;
  linkedin: string;
  iconPath: string;
}

const FOUNDERS: FounderData[] = [
  {
    id: "sumit",
    name: "Sumit Vishnoi",
    role: "Founder",
    description: "Spearheading sovereign cyber intelligence architecture, law enforcement alliances, and strategic direction.",
    linkedin: "https://www.linkedin.com/in/sumit-vishnoi-0b1a9132b/",
    iconPath: "M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m278 533c0 1.1-.1 2.1-.2 3.1c0 .4-.1.7-.2 1a14.2 14.2 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7c-.2.4-.4.8-.5 1.2c-.3.5-.5 1.1-.8 1.6c-.2.4-.4.7-.7 1.1c-.3.5-.7 1-1 1.5c-.3.4-.5.7-.8 1c-.4.4-.8.9-1.2 1.3c-.3.3-.6.6-1 .9c-.4.4-.9.8-1.4 1.1c-.4.3-.7.6-1.1.8c-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4c-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1c-.3-.3-.6-.6-1-.9c-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5c-.2-.4-.5-.7-.7-1.1c-.3-.5-.6-1.1-.8-1.6c-.2-.4-.4-.8-.5-1.2c-.2-.6-.4-1.2-.6-1.7c-.1-.4-.3-.8-.4-1.2c-.2-.7-.3-1.3-.4-2c-.1-.3-.1-.7-.2-1c-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1c.1-.3.1-.7.2-1a14.2 14.2 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7c.2-.4.4-.8.5-1.2c.2-.5.5-1.1.8-1.6c.2-.4.4-.7.7-1.1c.6-.9 1.2-1.7 1.8-2.5c.4-.4.8-.9 1.2-1.3c.3-.3.6-.6 1-.9c.4-.4.9-.8 1.3-1.1s.7-.6 1.1-.8c.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8l1.4 1.1c.3.3.6.6 1 .9c.4.4.8.8 1.2 1.3c.7.8 1.3 1.6 1.8 2.5c.2.4.5.7.7 1.1c.3.5.6 1 .8 1.6c.2.4.4.8.5 1.2c.2.6.4 1.2.6 1.7c.1.4.3.8.4 1.2c.2.7.3 1.3.4 2c.1.3.1.7.2 1c.1 1 .2 2.1.2 3.1zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4l84.5 56.4l84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3z",
  },
  {
    id: "vishwash",
    name: "Vishwash Tank",
    role: "System Designer & Security Guard",
    description: "Architecting high-throughput distributed ingestion pipelines and defensive perimeter security meshes.",
    linkedin: "https://www.linkedin.com/in/vishwash-tank-89308b28b",
    iconPath: "M512 64L160 192v256c0 240 150 464 352 512c202-48 352-272 352-512V192L512 64zm0 128l224 81.5v174.5c0 152.9-95.6 295.6-224 326.1c-128.4-30.5-224-173.2-224-326.1V273.5L512 192zm-64 192h128v128H448V384zm0 192h128v128H448V576z",
  },
  {
    id: "praveen",
    name: "Praveen Sharma",
    role: "Security Guard & DevOps",
    description: "Hardening air-gapped CI/CD deployment pipelines and enforcing low-level sovereign cluster security.",
    linkedin: "https://www.linkedin.com/in/praveen-sharma-762b86314/",
    iconPath: "M512 64L128 288v448l384 224l384-224V288L512 64zm0 128l256 149.3v298.7L512 789.3L256 640V341.3L512 192zm-96 224v192l192-96v-192l-192 96z",
  },
  {
    id: "udit",
    name: "Udit Chhipa",
    role: "Malware Researcher & Developer",
    description: "Engineering binary detonation sandboxes, reverse-engineering polymorphic exploit chains, and automated telemetry.",
    linkedin: "https://www.linkedin.com/in/udit-chhipa-50a09430b/",
    iconPath: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 128c176.7 0 320 143.3 320 320S688.7 832 512 832S192 688.7 192 512S335.3 192 512 192zm-64 160v128H320v64h128v128h64V544h128v-64H512V352h-64z",
  },
];

export function RootsightFounders() {
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({
    sumit: true,
    vishwash: false,
    praveen: false,
    udit: false,
  });

  const toggleCard = (id: string) => {
    setActiveCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="team" className="py-24 md:py-32 bg-[#eadecc] border-b border-[#262222]/10 relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Minimal Editorial Section Header matching Stay22 */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
            Leadership &amp; Core Engineering
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
          <p className="text-base sm:text-xl text-[#262222]/80 leading-relaxed font-normal">
            Four specialists uniting executive law enforcement strategy, defensive systems engineering, air-gapped DevOps, and low-level malware research.
          </p>
        </div>

        {/* Minimalist Luminous Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {FOUNDERS.map((founder) => (
            <MinimalLuminousCard
              key={founder.id}
              founder={founder}
              isActive={!!activeCards[founder.id]}
              onToggle={() => toggleCard(founder.id)}
            />
          ))}
        </div>

        {/* Minimal Commitment Banner */}
        <div className="mt-16 rounded-[28px] bg-[#faf4ec] border border-[#262222]/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#ffb200] text-[#262222] flex items-center justify-center font-bold font-mono shadow-xs shrink-0">
              <Shield className="w-5 h-5 text-[#262222]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#262222]">
                Guaranteed Founder-Led Technical Oversight
              </h4>
              <p className="text-xs sm:text-sm text-[#262222]/70 leading-relaxed font-normal">
                Every law enforcement integration and critical infrastructure deployment is personally supervised by our founding team.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="stay22-btn-yellow inline-flex items-center gap-2 text-sm font-bold shadow-xs hover:scale-105 transition-all shrink-0"
          >
            <span>Request Confidential Briefing</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}

function MinimalLuminousCard({
  founder,
  isActive,
  onToggle,
}: {
  founder: FounderData;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rs-luminous-card-container">
      <div
        className={`rs-luminous-card ${isActive ? "active" : ""}`}
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
        {/* Recessed 3D Slit & Clean Lumen Ray Layers */}
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
        <div className="rs-luminous-content font-sans">
          {/* Top: Minimalist Metallic Emblem */}
          <div className="rs-luminous-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3.2rem"
              height="3.2rem"
              viewBox="0 0 1024 1024"
            >
              <path
                fill={`url(#iconGrad-${founder.id})`}
                d={founder.iconPath}
                filter={`url(#strongInner-${founder.id})`}
              />
              <defs>
                <linearGradient id={`iconGrad-${founder.id}`} x1="0" x2="0" y1="-1" y2="0.8">
                  <stop offset="0%" stopColor="#d4d4d8" />
                  <stop offset="100%" stopColor="#52525b" />
                </linearGradient>
                <filter id={`strongInner-${founder.id}`}>
                  <feFlood floodColor="rgba(255,255,255,0.18)" />
                  <feComposite operator="out" in2="SourceGraphic" />
                  <feMorphology operator="dilate" radius="8" />
                  <feGaussianBlur stdDeviation="32" />
                  <feComposite operator="atop" in2="SourceGraphic" />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Bottom: Minimal Typography, Role, Description, LinkedIn & Toggle */}
          <div className="rs-luminous-bottom">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[17px] font-semibold text-white tracking-tight">
                {founder.name}
              </h3>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] font-medium text-white/45 hover:text-[#ffb200] transition-colors inline-flex items-center gap-0.5 shrink-0"
                title={`View ${founder.name}'s LinkedIn profile`}
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-80" />
              </a>
            </div>

            <div className="text-[12px] font-medium text-[#ffb200] mt-0.5 tracking-normal">
              {founder.role}
            </div>

            <p className="text-[12px] text-white/55 leading-relaxed mt-2.5 font-normal line-clamp-2">
              {founder.description}
            </p>

            <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10">
              <span className="text-[10px] uppercase font-mono tracking-wider text-white/40">
                {isActive ? "Lumen On" : "Standby"}
              </span>

              {/* Skeuomorphic Tactile Switch */}
              <div className="rs-luminous-toggle" title="Toggle Lumen">
                <div className="rs-luminous-handle" />
                <span className="rs-luminous-toggle-label">Activate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
