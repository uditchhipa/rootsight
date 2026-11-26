"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { RootsightLogo } from "./RootsightLogo";

const NAV_LINKS = [
  { label: "Who We Are", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "Leadership & Roles", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e4e4e7] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Left: Brand Logo & Startup India Tag */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="flex items-center gap-2"
            aria-label="ROOTSIGHT Home"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#09090b] text-white">
              <RootsightLogo size={16} color="#FFFFFF" accentEye={false} />
            </div>
            <span className="font-extrabold text-sm tracking-wider text-[#09090b]">
              ROOTSIGHT<span className="text-[#10b981]">.</span>
            </span>
          </a>

          <span className="hidden sm:inline-block rounded-full bg-[#f4f4f5] px-2.5 py-0.5 text-[10px] font-semibold text-[#71717a] border border-[#e4e4e7]">
            Startup India
          </span>
        </div>

        {/* Center: Clean Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold text-[#52525b] hover:text-[#09090b] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Contact CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-[#09090b] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#27272a] transition-colors"
          >
            Get In Touch
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e4e4e7] text-[#09090b] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-t border-[#e4e4e7] bg-white px-6 py-5 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
