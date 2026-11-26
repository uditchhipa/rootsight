"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";

const NAV_LINKS = [
  { label: "Platform", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Stay22", href: "#why-stay22" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

export function Stay22Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f2e4d8]/90 backdrop-blur-md border-b border-[#2a2626]/10 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Left: Brand Logo (Interactive Rive Logo Animation) */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 relative flex items-center justify-center">
              <RiveAnimation
                src="/stay22/logo.riv"
                animations="Timeline-1"
                className="w-9 h-9"
              />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-[#2a2626]">
              stay<span className="text-[#786ddc]">22</span>
            </span>
          </Link>

          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#786ddc]/10 border border-[#786ddc]/30 px-3 py-0.5 text-[11px] font-bold text-[#786ddc]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#786ddc] animate-pulse" />
            <span>Awwwards Nominee</span>
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#2a2626]/80 hover:text-[#786ddc] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://another.stay22.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block text-xs font-bold text-[#2a2626] hover:text-[#786ddc] px-3 py-2 transition-colors"
          >
            Sign In
          </a>

          <a
            href="#contact"
            className="stay22-btn-primary flex items-center gap-2 !py-2.5 !px-5 text-xs font-bold shadow-sm"
          >
            <span>Book a Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-black/5 text-[#2a2626]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f2e4d8] border-b border-[#2a2626]/10 px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#2a2626] hover:text-[#786ddc]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#2a2626]/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="stay22-btn-primary w-full text-center"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
