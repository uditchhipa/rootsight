"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown, Menu, Search, X, ArrowUpRight } from "lucide-react";
import { RootsightLogo } from "./RootsightLogo";
import { PROJECTS, SERVICES } from "@/data/content";

const NAV_LINKS = [
  { label: "Explore", href: "#hero", hasDropdown: true },
  { label: "Directory", href: "#services" },
  { label: "Systems", href: "#projects", badge: "Live" },
  { label: "Methodology", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const matchedProjects = PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q)
    ).map((p) => ({ label: p.title, sub: p.category, href: "#projects" }));

    const matchedServices = SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.subtitle.toLowerCase().includes(q)
    ).map((s) => ({ label: s.title, sub: s.subtitle, href: "#services" }));

    return [...matchedProjects, ...matchedServices].slice(0, 5);
  }, [query]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#ededed] bg-[#ffffff]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] sm:h-[66px] max-w-[1520px] items-center justify-between gap-3 sm:gap-5 px-4 sm:px-6 lg:px-10">
        {/* Left: Brand + Desktop Links */}
        <div className="flex items-center gap-4 sm:gap-7">
          <a
            href="#hero"
            className="group flex items-center gap-1.5 shrink-0"
            aria-label="ROOTSIGHT Home"
          >
            <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#222222] text-white transition-transform group-hover:scale-95">
              <RootsightLogo size={18} color="#FFFFFF" accentEye={false} />
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-wider text-[#222222]">
              ROOTSIGHT<span className="text-[#00c875]">.</span>
            </span>
          </a>

          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1 text-[13px] font-medium text-[#555555] transition-colors hover:text-[#222222]"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    size={12}
                    className="text-[#a7a7a7] transition-transform group-hover:translate-y-0.5"
                  />
                )}
                {item.badge && (
                  <span className="rounded bg-[#222222] px-1.5 py-0.5 text-[9px] font-semibold uppercase text-white">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Center: Awwwards Search Bar (Hidden on small mobile) */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <div className="flex h-10 items-center gap-2.5 rounded-full border border-transparent bg-[#ededed] px-4 transition-all focus-within:border-[#222222]/20 focus-within:bg-white focus-within:shadow-xs">
            <Search size={14} className="shrink-0 text-[#7a7a7a]" />
            <input
              type="search"
              value={query}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 180)}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by System, OSINT, Pentest, Forensics..."
              aria-label="Search ROOTSIGHT products and services"
              className="w-full bg-transparent text-xs text-[#222222] placeholder:text-[#7a7a7a] focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-[#7a7a7a] hover:text-[#222222]"
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {focused && results.length > 0 && (
            <div className="absolute left-0 right-0 top-12 overflow-hidden rounded-xl border border-[#ededed] bg-white shadow-xl">
              {results.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setQuery("")}
                  className="flex items-center justify-between border-b border-[#ededed] px-4 py-3 text-left transition-colors last:border-0 hover:bg-[#f8f8f8]"
                >
                  <div>
                    <div className="text-xs font-semibold text-[#222222]">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-[#7a7a7a]">{item.sub}</div>
                  </div>
                  <ArrowUpRight size={14} className="text-[#00c875]" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right: Auth & Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#about"
            className="hidden sm:inline-block rounded-full bg-[#222222] px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-black"
          >
            Startup India
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#dedede] bg-white px-3 sm:px-4 py-1.5 text-xs font-medium text-[#222222] transition-all hover:border-[#222222]"
          >
            Deploy System
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#ededed] text-[#222222] xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-t border-[#ededed] bg-white px-5 py-6 shadow-xl xl:hidden">
          <nav className="flex flex-col gap-3">
            {[
              { label: "Explore Platform", href: "#hero" },
              { label: "Systems & Tools", href: "#projects" },
              { label: "Directory & Practice", href: "#services" },
              { label: "Execution Framework", href: "#process" },
              { label: "About Rootsight", href: "#about" },
              { label: "Contact / Briefing", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg p-2.5 text-sm font-semibold text-[#222222] hover:bg-[#f8f8f8] transition-colors"
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
