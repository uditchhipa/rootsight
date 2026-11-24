"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { RootsightLogo } from "./RootsightLogo";

const DOCK_ITEMS = [
  { label: "Systems", href: "#projects" },
  { label: "Directory", href: "#services" },
  { label: "Methodology", href: "#process" },
  { label: "About", href: "#about" },
];

export function FloatingDock() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll-to-top Floating Button (Bottom-Left like Awwwards) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-black/85 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-black hover:scale-105 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={16} />
      </button>

      {/* Exact Awwwards Floating Bottom Dock */}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 md:block">
        <nav
          aria-label="Quick Navigation Dock"
          className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-black/10 bg-[#161616]/95 p-2 shadow-2xl backdrop-blur-xl text-white"
        >
          {/* Logo */}
          <a
            href="#hero"
            aria-label="Root Sight home"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          >
            <RootsightLogo size={18} color="#FFFFFF" accentEye={true} />
          </a>

          {/* Links */}
          <div className="flex items-center gap-1 px-1">
            {DOCK_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Visit Sotd / Contact White Pill Button */}
          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-[#00FF9C]"
          >
            Initiate Contact
          </a>
        </nav>
      </div>
    </>
  );
}
