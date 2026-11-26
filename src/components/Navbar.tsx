"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { RootsightLogo } from "./RootsightLogo";

const NAV_LINKS = [
  { label: "Who We Are", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Founding Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#171717]/90 backdrop-blur-md border-b border-[#262626]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Left: Brand + Startup India Pastel Tag */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#hero"
            className="flex items-center gap-2.5 transition-transform hover:scale-95"
            aria-label="ROOTSIGHT Home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#dcd0ff] via-[#ecaf30] to-[#9cd696] p-[1.5px]">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#171717]">
                <RootsightLogo size={14} color="#f3f3ed" accentEye={false} />
              </div>
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#f3f3ed]">
              ROOTSIGHT
            </span>
          </a>

          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#9cd696]/15 border border-[#9cd696]/30 px-3 py-0.5 text-[10px] font-bold text-[#9cd696]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9cd696] animate-pulse" />
            <span>Startup India</span>
          </span>
        </div>

        {/* Center: Navigation Links with TTM Pill Hover */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-[#202020] border border-[#2d2d2d] rounded-full p-1.5 shadow-inner">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#2c2c2c] transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Signature TTM Yellow/Lilac Action Pill */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="ttm-pill hidden sm:inline-flex items-center gap-1.5 bg-[#ecaf30] px-5 py-2 text-xs font-bold text-[#171717] shadow-lg transition-transform hover:bg-[#ffd13b]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#202020] border border-[#2d2d2d] text-[#f3f3ed] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="border-b border-[#2d2d2d] bg-[#1a1a1a] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#f3f3ed] hover:bg-[#262626] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#ecaf30] py-3 text-xs font-bold text-[#171717]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
