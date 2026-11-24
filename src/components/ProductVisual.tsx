"use client";

import React from "react";

interface ProductVisualProps {
  variant: string;
}

export function ProductVisual({ variant }: ProductVisualProps) {
  // -------------------------------------------------------------------------
  // CARD 1: Law Enforcement OSINT & Target Tracking Platform
  // High-End Graphic Tech Illustration (Cartoon-Tech style matching Two26 Studio)
  // Bold Crimson Red (#D8281E) + Warm Golden-Yellow (#FFB703) + Stylized Investigator
  // -------------------------------------------------------------------------
  if (variant === "project-01") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#D8281E] select-none">
        {/* Ambient solar-yellow glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#FFB703] opacity-30 blur-2xl" />

        {/* Top-Right Badge: Official Agency Stamp */}
        <div className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-black/40 text-center shadow-md backdrop-blur-md">
          <span className="font-mono text-[8px] font-bold text-[#FFD13B] leading-none uppercase">
            OSINT<br />VERIFIED
          </span>
        </div>

        {/* Vector Cartoon-Tech Graphic: Stylized Cyber Investigator & Correlation Grid */}
        <svg
          viewBox="0 0 500 310"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background curved geometric flow line */}
          <path
            d="M 20 270 Q 180 120 480 220"
            stroke="#FFB703"
            strokeWidth="3.5"
            strokeDasharray="6 4"
          />

          {/* Background Radar Range Arc */}
          <circle cx="360" cy="150" r="120" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <circle cx="360" cy="150" r="75" stroke="rgba(255,183,3,0.3)" strokeWidth="1.5" />
          <circle cx="360" cy="150" r="30" stroke="#FFD13B" strokeWidth="2" strokeDasharray="4 3" />

          {/* Target Nodes */}
          <g>
            <circle cx="280" cy="90" r="14" fill="#1C1C20" stroke="#FFD13B" strokeWidth="2" />
            <text x="280" y="94" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">IP</text>
            <line x1="280" y1="104" x2="360" y2="150" stroke="#FFD13B" strokeWidth="1.5" />
          </g>
          <g>
            <circle cx="430" cy="110" r="14" fill="#1C1C20" stroke="#FFFFFF" strokeWidth="2" />
            <text x="430" y="114" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CDR</text>
            <line x1="430" y1="124" x2="360" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          </g>
          <g>
            <circle cx="360" cy="230" r="16" fill="#FFB703" stroke="#FFFFFF" strokeWidth="2.5" />
            <text x="360" y="234" fill="#1A1A1E" fontSize="9" fontFamily="monospace" fontWeight="900" textAnchor="middle">GEO</text>
            <line x1="360" y1="214" x2="360" y2="150" stroke="#FFD13B" strokeWidth="2" />
          </g>

          {/* Center Target Lock */}
          <circle cx="360" cy="150" r="7" fill="#FFFFFF" />
          <circle cx="360" cy="150" r="2.5" fill="#D8281E" />

          {/* Stylized Modern Character (Investigator in flat editorial vector style, like Two26) */}
          <g transform="translate(60, 65)">
            {/* Shadow */}
            <ellipse cx="65" cy="190" rx="35" ry="7" fill="black" fillOpacity="0.25" />

            {/* Legs (clean white trousers matching Two26 style) */}
            <path d="M 50 120 L 46 185" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
            <path d="M 75 120 L 80 185" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
            {/* Shoes */}
            <ellipse cx="44" cy="188" rx="8" ry="4" fill="#1A1A1E" />
            <ellipse cx="83" cy="188" rx="8" ry="4" fill="#1A1A1E" />

            {/* Torso (Dark charcoal cyber jacket) */}
            <path d="M 45 65 C 45 60 80 60 80 65 L 85 120 L 42 120 Z" fill="#1A1A1E" />

            {/* Arms holding digital scanner pad */}
            <path d="M 46 75 L 25 105 L 55 105" stroke="#1A1A1E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 78 75 L 95 105 L 68 105" stroke="#1A1A1E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

            {/* Digital Scanner Pad (Golden Yellow with data graph) */}
            <rect x="36" y="95" width="48" height="28" rx="4" fill="#FFB703" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="42" y1="104" x2="78" y2="104" stroke="#1A1A1E" strokeWidth="2" />
            <line x1="42" y1="112" x2="68" y2="112" stroke="#1A1A1E" strokeWidth="2" />

            {/* Head & Stylized Hair */}
            <circle cx="62" cy="40" r="14" fill="#FAD4C0" />
            <path d="M 50 38 C 50 25 74 25 74 38 Z" fill="#1A1A1E" />
            {/* Cyber Visor / Glasses in yellow */}
            <rect x="56" y="38" width="16" height="5" rx="2" fill="#FFB703" />
          </g>
        </svg>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // CARD 2: Continuous Attack Surface Scanner & Red Teaming
  // High-End Graphic Tech Illustration (Clean Isometric Cyber Radar)
  // Deep Obsidian (#121214) + Solar Yellow (#FFB703) + Crimson Alerts
  // -------------------------------------------------------------------------
  if (variant === "project-02") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#121214] select-none">
        {/* Subtle radial amber illumination */}
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-[#FFB703] opacity-20 blur-2xl" />

        {/* Top-Right Badge: Active Scan Status */}
        <div className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-center shadow-md backdrop-blur-md">
          <span className="font-mono text-[8px] font-bold text-[#FFB703] leading-none uppercase">
            RADAR<br />ACTIVE
          </span>
        </div>

        {/* Vector Cartoon-Tech Graphic: Isometric Server Cluster + Holographic Radar */}
        <svg
          viewBox="0 0 500 310"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Radar Concentric Rings */}
          <circle cx="250" cy="155" r="115" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle cx="250" cy="155" r="85" stroke="#FFB703" strokeWidth="2" strokeDasharray="6 4" strokeOpacity="0.6" />
          <circle cx="250" cy="155" r="50" stroke="#D8281E" strokeWidth="1.5" />
          <circle cx="250" cy="155" r="5" fill="#FFB703" />

          {/* Sweeping Cone */}
          <polygon points="250,155 350,85 365,120" fill="#FFB703" fillOpacity="0.2" />
          <line x1="250" y1="155" x2="350" y2="85" stroke="#FFB703" strokeWidth="2" />

          {/* Isometric Server Block 1 (Left) */}
          <g transform="translate(80, 100)">
            {/* Top Face */}
            <polygon points="40,10 70,25 40,40 10,25" fill="#FFB703" />
            {/* Left Face */}
            <polygon points="10,25 40,40 40,90 10,75" fill="#202024" />
            {/* Right Face */}
            <polygon points="40,40 70,25 70,75 40,90" fill="#2E2E34" />
            {/* Server LED Slots */}
            <line x1="16" y1="40" x2="34" y2="49" stroke="#00FF9C" strokeWidth="2" />
            <line x1="16" y1="52" x2="34" y2="61" stroke="#00FF9C" strokeWidth="2" />
            <line x1="16" y1="64" x2="34" y2="73" stroke="#D8281E" strokeWidth="2" />
          </g>

          {/* Isometric Server Block 2 (Right) */}
          <g transform="translate(360, 130)">
            <polygon points="35,10 65,25 35,40 5,25" fill="#FFFFFF" />
            <polygon points="5,25 35,40 35,80 5,65" fill="#202024" />
            <polygon points="35,40 65,25 65,65 35,80" fill="#2E2E34" />
            <line x1="42" y1="40" x2="58" y2="32" stroke="#FFB703" strokeWidth="2" />
            <line x1="42" y1="50" x2="58" y2="42" stroke="#FFB703" strokeWidth="2" />
          </g>

          {/* Threat Nodes / Crosshairs */}
          <g>
            <circle cx="320" cy="95" r="7" fill="#D8281E" />
            <circle cx="320" cy="95" r="13" stroke="#D8281E" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="320" y="80" fill="#FFD13B" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SHADOW API</text>
          </g>
          <g>
            <circle cx="170" cy="185" r="5" fill="#FFB703" />
            <circle cx="210" cy="85" r="4" fill="#FFFFFF" />
          </g>
        </svg>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // CARD 3: Digital Evidence & Forensics Chain-of-Custody Vault
  // High-End Graphic Tech Illustration (Cartoon-Tech style matching Two26 Studio)
  // Warm Golden-Amber (#F5A623) + Stylized Forensic Specialist + Cryptographic Block
  // -------------------------------------------------------------------------
  if (variant === "project-03") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#F5A623] select-none">
        {/* Subtle crimson glow */}
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-[#D8281E] opacity-25 blur-2xl" />

        {/* Top-Right Badge: Legal Section 65B Seal */}
        <div className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/40 bg-white/90 text-center shadow-md backdrop-blur-md">
          <span className="font-mono text-[8px] font-black text-[#D8281E] leading-none uppercase">
            SEC 65B<br />LEGAL
          </span>
        </div>

        {/* Vector Cartoon-Tech Graphic: Stylized Forensic Analyst + SHA-256 Vault */}
        <svg
          viewBox="0 0 500 310"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Decorative curved grounding line */}
          <path
            d="M 20 250 Q 250 290 480 230"
            stroke="#D8281E"
            strokeWidth="3.5"
            strokeDasharray="6 4"
          />

          {/* Cryptographic Isometric Vault Cube (Center-Right) */}
          <g transform="translate(250, 75)">
            {/* Top Face */}
            <polygon points="80,10 140,40 80,70 20,40" fill="#FFFFFF" />
            {/* Left Face */}
            <polygon points="20,40 80,70 80,150 20,120" fill="#1A1A1E" />
            {/* Right Face */}
            <polygon points="80,70 140,40 140,120 80,150" fill="#2E2E34" />

            {/* Golden Padlock on front face */}
            <rect x="42" y="80" width="22" height="18" rx="3" fill="#F5A623" />
            <path d="M 47 80 L 47 72 C 47 67 59 67 59 72 L 59 80" stroke="#F5A623" strokeWidth="3" fill="none" />

            {/* SHA-256 Code text */}
            <text x="88" y="90" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">SHA-256</text>
            <text x="88" y="105" fill="#F5A623" fontSize="6" fontFamily="monospace">4E9F7A1C...</text>
            <text x="88" y="120" fill="#A1A1AA" fontSize="6" fontFamily="monospace">CHAIN: LOCKED</text>
          </g>

          {/* Stylized Modern Character (Forensic Specialist inspecting vault) */}
          <g transform="translate(90, 70)">
            {/* Shadow */}
            <ellipse cx="65" cy="185" rx="32" ry="6" fill="#1A1A1E" fillOpacity="0.3" />

            {/* Legs (clean white trousers matching Two26 style) */}
            <path d="M 52 118 L 48 180" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
            <path d="M 74 118 L 80 180" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" />
            {/* Shoes */}
            <ellipse cx="46" cy="183" rx="8" ry="4" fill="#1A1A1E" />
            <ellipse cx="83" cy="183" rx="8" ry="4" fill="#1A1A1E" />

            {/* Torso (Warm crimson-red jacket) */}
            <path d="M 46 65 C 46 60 80 60 80 65 L 84 118 L 44 118 Z" fill="#D8281E" />

            {/* Arm pointing forward at evidence vault */}
            <path d="M 78 72 L 115 88" stroke="#D8281E" strokeWidth="7" strokeLinecap="round" />
            <circle cx="118" cy="90" r="4" fill="#FAD4C0" />
            <path d="M 46 72 L 35 105 L 55 105" stroke="#D8281E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

            {/* Head & Stylized Hair */}
            <circle cx="63" cy="40" r="14" fill="#FAD4C0" />
            <path d="M 50 36 C 50 24 74 24 74 36 Z" fill="#1A1A1E" />
          </g>
        </svg>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // CARD 4: Automated Malware Detonation Sandbox
  // High-End Graphic Tech Illustration (Dynamic Syscall Sandbox Chamber)
  // Deep Noir (#101014) + Electric Crimson Wave (#EF4444) + Opcode Matrix
  // -------------------------------------------------------------------------
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#101014] select-none">
      {/* Subtle crimson ambient glow */}
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#EF4444] opacity-20 blur-2xl" />

      {/* Top-Right Badge: QEMU Isolation Seal */}
      <div className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-center shadow-md backdrop-blur-md">
        <span className="font-mono text-[8px] font-bold text-[#EF4444] leading-none uppercase">
          QEMU<br />SANDBOX
        </span>
      </div>

      {/* Vector Cartoon-Tech Graphic: Isolated Detonation Chamber + Waveform */}
      <svg
        viewBox="0 0 500 310"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Grid */}
        <line x1="50" y1="160" x2="450" y2="160" stroke="#25252A" strokeWidth="1" />
        <line x1="50" y1="90" x2="450" y2="90" stroke="#25252A" strokeWidth="1" />
        <line x1="50" y1="230" x2="450" y2="230" stroke="#25252A" strokeWidth="1" />

        {/* Central Detonation Chamber Frame */}
        <rect x="90" y="60" width="320" height="190" rx="14" fill="#17171C" stroke="#33333C" strokeWidth="2" />
        <rect x="105" y="75" width="290" height="160" rx="8" fill="#0C0C0F" />

        {/* Detonation Chamber Header */}
        <circle cx="120" cy="90" r="4" fill="#EF4444" />
        <circle cx="132" cy="90" r="4" fill="#FFB703" />
        <circle cx="144" cy="90" r="4" fill="#00FF9C" />
        <text x="380" y="93" fill="#A1A1AA" fontSize="8" fontFamily="monospace" textAnchor="end">AIR-GAPPED DETONATION</text>

        {/* Dynamic Syscall Detonation Waveform (Crimson & Solar Yellow) */}
        <path
          d="M 120 160 H 160 L 175 110 L 190 200 L 205 85 L 220 180 L 235 125 L 255 160 H 290 L 305 100 L 320 190 L 335 130 L 350 160 H 380"
          stroke="#EF4444"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Spike Warning Marker */}
        <circle cx="205" cy="85" r="5" fill="#FFB703" />
        <line x1="205" y1="85" x2="205" y2="60" stroke="#FFB703" strokeWidth="1.5" strokeDasharray="3 2" />
        <rect x="175" y="44" width="60" height="16" rx="3" fill="#FFB703" />
        <text x="205" y="55" fill="#101014" fontSize="7" fontFamily="monospace" fontWeight="900" textAnchor="middle">YARA ALERT</text>

        {/* Opcode Disassembly Grid below wave */}
        <text x="120" y="215" fill="#71717A" fontSize="7" fontFamily="monospace">0x00401A20: MOV EAX, [EBP-08]</text>
        <text x="260" y="215" fill="#FFB703" fontSize="7" fontFamily="monospace">CALL 0x00402BF0 (HOOKED)</text>
      </svg>
    </div>
  );
}
