"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RootsightLogo } from "@/components/RootsightLogo";
import { Menu, X, ChevronDown, ShieldCheck } from "lucide-react";

export function Stay22Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 pt-4 md:pt-5 px-4 md:px-10">
      <div className="w-full flex items-center justify-between">
        {/* Left spacing for centering balance on desktop / Startup India Badge / Mobile Logo */}
        <div className="flex items-center gap-3 pointer-events-auto md:w-56">
          {/* Mobile Logo */}
          <div className="md:hidden flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2.5 bg-[#ffb200] text-[#262222] px-3.5 py-2 rounded-xl font-bold shadow-md"
            >
              <RootsightLogo size={20} color="#262222" accentColor="#00A86B" />
              <span className="text-sm tracking-tight font-extrabold uppercase">Rootsight</span>
            </Link>
          </div>

          {/* Desktop DPIIT / Startup India Pill */}
          <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/15 text-xs text-white/90 shadow-sm mix-blend-difference">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="font-semibold tracking-tight text-[11px] uppercase">Startup India Registered</span>
          </div>
        </div>

        {/* Center: Signature Floating Yellow Nav Pill */}
        <nav
          className="pointer-events-auto hidden md:flex items-center h-[56px] px-8 bg-[#ffb200] text-[#262222] rounded-[14px] shadow-lg transition-transform duration-300 hover:scale-[1.01]"
          style={{ backgroundColor: "#ffb200" }}
          aria-label="Main Navigation"
        >
          {/* Rootsight Logo Mark inside Yellow Capsule */}
          <Link
            href="/"
            className="flex items-center gap-2.5 mr-8 group relative overflow-visible"
            aria-label="Rootsight Home"
          >
            <div className="w-7 h-7 relative flex items-center justify-center">
              <RootsightLogo
                size={26}
                color="#262222"
                accentColor="#00A86B"
                className="transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            <span
              className="font-heading font-extrabold text-base tracking-tight text-[#262222] uppercase"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              Rootsight
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8 font-bold text-[15px] tracking-[-0.01em]">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-black/70 transition-colors py-2 cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full -left-4 pt-2 w-64">
                  <div className="bg-[#ffb200] text-[#262222] rounded-xl p-3 shadow-2xl border border-black/10 flex flex-col gap-1 text-sm font-semibold">
                    <a
                      href="#solutions"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      Investigation Automation
                    </a>
                    <a
                      href="#solutions"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      Adversarial Red Teaming
                    </a>
                    <a
                      href="#solutions"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      OSINT &amp; Threat Intelligence
                    </a>
                    <a
                      href="#solutions"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      Sovereign Forensics Cloud
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Platform Link */}
            <a
              href="#products"
              className="hover:text-black/70 transition-colors py-2"
            >
              Platform
            </a>

            {/* Leadership Link */}
            <a
              href="#team"
              className="hover:text-black/70 transition-colors py-2"
            >
              Leadership
            </a>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-black/70 transition-colors py-2 cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full -left-4 pt-2 w-56">
                  <div className="bg-[#ffb200] text-[#262222] rounded-xl p-3 shadow-2xl border border-black/10 flex flex-col gap-1 text-sm font-semibold">
                    <a
                      href="#case-studies"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      Case Studies
                    </a>
                    <a
                      href="#why-stay22"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      Why Rootsight
                    </a>
                    <a
                      href="#faq"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      FAQ &amp; Compliance
                    </a>
                    <a
                      href="#contact"
                      className="px-3 py-2 rounded-lg hover:bg-black/10 transition-colors"
                    >
                      Security Dossier
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Right Actions: Search, Account, Language, Request Briefing */}
        <div className="pointer-events-auto flex items-center gap-4 md:w-56 justify-end">
          {/* Search Icon */}
          <button
            type="button"
            className="p-2 text-white/90 hover:text-white transition-colors cursor-pointer mix-blend-difference"
            aria-label="Search"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
            >
              <path
                d="M12.6 6.8C12.6 10.0033 10.0033 12.6 6.8 12.6C3.59675 12.6 1 10.0033 1 6.8C1 3.59675 3.59675 1 6.8 1C10.0033 1 12.6 3.59675 12.6 6.8Z"
                strokeWidth="2"
                stroke="currentColor"
              />
              <path
                d="M11.1055 10.4921L16.7055 16.0921"
                strokeWidth="2"
                stroke="currentColor"
              />
            </svg>
          </button>

          {/* User/Account Portal Icon */}
          <a
            href="#contact"
            className="p-2 text-white/90 hover:text-white transition-colors cursor-pointer mix-blend-difference"
            aria-label="Client Portal"
          >
            <svg
              width="16"
              height="18"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
            >
              <path
                d="M7.50488 0C10.3984 0 12.7441 2.3457 12.7441 5.23926C12.7441 7.19642 11.67 8.90124 10.0801 9.80078C12.6902 10.7545 14.6225 13.115 14.958 15.9658C14.9922 16.2564 15.0098 16.5517 15.0098 16.8506H12.7441C12.7441 16.6403 12.7319 16.4334 12.709 16.2305C12.3999 13.4868 10.2075 11.3506 7.50488 11.3506C4.80225 11.3506 2.60986 13.4868 2.30078 16.2305C2.27783 16.4334 2.26562 16.6403 2.26562 16.8506H0C0 16.5517 0.0175781 16.2564 0.0517578 15.9658C0.387207 13.115 2.31958 10.7545 4.92969 9.80078C3.33984 8.90124 2.26562 7.19642 2.26562 5.23926C2.26562 2.3457 4.61133 0 7.50488 0ZM7.50488 2.26562C5.8623 2.26562 4.53125 3.59668 4.53125 5.23926C4.53125 6.88184 5.8623 8.21289 7.50488 8.21289C9.14746 8.21289 10.4785 6.88184 10.4785 5.23926C10.4785 3.59668 9.14746 2.26562 7.50488 2.26562Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Request Briefing Button (Yellow Capsule) */}
          <a
            href="#contact"
            className="bg-[#ffb200] text-[#262222] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#ffa000] hover:scale-105 transition-all shadow-md whitespace-nowrap"
          >
            Request Briefing
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto md:hidden mt-3 bg-[#ffb200] text-[#262222] rounded-2xl p-6 shadow-2xl border border-black/10">
          <div className="flex flex-col gap-4 font-bold text-base">
            <a
              href="#solutions"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-black/70"
            >
              Solutions
            </a>
            <a
              href="#products"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-black/70"
            >
              Platform
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-black/70"
            >
              Case Studies
            </a>
            <a
              href="#why-stay22"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-black/70"
            >
              Why Rootsight
            </a>
            <a
              href="#faq"
              onClick={() => setMobileOpen(false)}
              className="py-1 hover:text-black/70"
            >
              FAQ
            </a>
            <div className="pt-3 border-t border-black/15 flex gap-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center bg-[#262222] text-[#f2e4d8] py-2.5 rounded-full font-bold text-sm"
              >
                Request Briefing
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
