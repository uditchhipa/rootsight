"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { RootsightLogo } from "./RootsightLogo";

const NAV_ITEMS = [
  { label: "Who We Are", href: "#about", index: "01" },
  { label: "What We Do", href: "#services", index: "02" },
  { label: "Founding Team", href: "#team", index: "03" },
  { label: "Contact", href: "#contact", index: "04" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#F9F9F7]/90 backdrop-blur-md hairline-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand Group */}
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="group flex items-center gap-2.5"
            aria-label="ROOTSIGHT Home"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded bg-[#111213] text-[#F9F9F7] transition-transform group-hover:scale-95">
              <RootsightLogo size={14} color="#F9F9F7" accentEye={false} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xs tracking-[0.14em] uppercase text-[#111213]">
                ROOTSIGHT
              </span>
            </div>
          </a>

          <div className="hidden sm:flex items-center gap-2 pl-3 hairline-l text-[10px] mono-tag text-[#6E7073]">
            <span>DPIIT // INDIA</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#111213]" />
            <span>SEC_AUTO</span>
          </div>
        </div>

        {/* Center Editorial Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1.5 text-xs text-[#6E7073] hover:text-[#111213] transition-colors"
            >
              <span className="mono-tag text-[10px] text-[#A3A39E] group-hover:text-[#111213] transition-colors">
                {item.index}
              </span>
              <span className="font-medium tracking-tight">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#111213] px-4 py-2 text-xs font-medium text-[#F9F9F7] transition-all hover:bg-black"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#111213] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="hairline-b bg-[#F9F9F7] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-medium text-[#111213] hairline-b"
              >
                <span>{item.label}</span>
                <span className="mono-tag text-[#A3A39E]">{item.index}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#111213] py-2.5 text-xs font-medium text-[#F9F9F7]"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight size={13} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
