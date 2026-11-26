"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Examples", href: "#showcase" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#171717]/90 backdrop-blur-md border-b border-[#262626]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-transform hover:scale-95"
            aria-label="TTM Home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#dcd0ff] via-[#ecaf30] to-[#9cd696] p-[1.5px]">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#171717]">
                <span className="font-black text-xs text-[#ecaf30]">TTM</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#f3f3ed]">
                TTM
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-[#86867f] -mt-1 font-medium">
                Templates that move
              </span>
            </div>
          </Link>

          <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#ecaf30]/15 border border-[#ecaf30]/30 px-3 py-0.5 text-[10px] font-bold text-[#ecaf30]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ecaf30] animate-pulse" />
            <span>Studio Live 60 FPS</span>
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-[#202020] border border-[#2d2d2d] rounded-full p-1.5 shadow-inner">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#2c2c2c] transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Signature TTM Yellow Action Button -> Studio */}
        <div className="flex items-center gap-3">
          <Link
            href="/studio"
            className="ttm-pill flex items-center gap-2 bg-[#ecaf30] px-5 py-2 text-xs font-black text-[#171717] shadow-lg transition-transform hover:bg-[#ffd13b] hover:scale-105 active:scale-95"
          >
            <Sparkles size={14} className="stroke-[2.5]" />
            <span>My Studio</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 23 23" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="3" width="19" height="17" rx="3" />
              <line x1="8" y1="3" x2="8" y2="20" />
            </svg>
          </Link>

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
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#f3f3ed] hover:bg-[#262626] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/studio"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#ecaf30] py-3 text-xs font-bold text-[#171717]"
            >
              <span>Open TTM Studio</span>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
