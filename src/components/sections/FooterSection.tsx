import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RootsightLogo } from "@/components/RootsightLogo";
import { SITE_CONFIG } from "@/data/content";

export function FooterSection() {
  return (
    <footer className="relative bg-[#fcfbf6] text-[#171717] pt-20 pb-16 overflow-hidden">
      {/* Decorative ambient subtle blobs in footer */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-[#ecaf30]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-[#dcd0ff]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-[#e2e1da]">
          {/* Left Column: Newsletter / Briefing */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#86867f]">
              Intelligence Briefing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#171717]">
              Subscribe to Rootsight Intel
            </h2>
            <p className="text-sm text-[#666660] max-w-md leading-relaxed">
              New forensic automation modules, malware analysis advisories, and threat research. Once a month, never spam.
            </p>

            <form
              action="#contact"
              className="mt-6 flex max-w-md items-center rounded-full bg-white border border-[#deddd6] p-1.5 shadow-sm"
            >
              <input
                type="email"
                placeholder="Enter your official email..."
                required
                className="w-full bg-transparent px-4 py-2 text-xs text-[#171717] placeholder:text-[#999990] focus:outline-none"
              />
              <button
                type="submit"
                className="ttm-pill bg-[#171717] hover:bg-black text-[#f3f3ed] px-5 py-2.5 text-xs font-bold shrink-0"
              >
                <span>Subscribe</span>
                <ArrowUpRight size={13} className="ml-1" />
              </button>
            </form>
          </div>

          {/* Right Column: Navigation & Pastel Tags */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#86867f] block mb-4">
                Directory
              </span>
              <ul className="space-y-2.5 text-xs font-medium text-[#444440]">
                <li>
                  <a href="#about" className="hover:text-[#171717] transition-colors">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#171717] transition-colors">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#171717] transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-[#171717] transition-colors">
                    Founding Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#171717] transition-colors">
                    Inquiries
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#86867f] block mb-4">
                Core Focus
              </span>
              <div className="flex flex-col gap-2">
                <span className="ttm-pill inline-block self-start bg-[#dcd0ff] text-[#171717] px-3 py-1 text-[11px] font-bold">
                  Evidence Vault
                </span>
                <span className="ttm-pill inline-block self-start bg-[#ecaf30] text-[#171717] px-3 py-1 text-[11px] font-bold">
                  Red Teaming
                </span>
                <span className="ttm-pill inline-block self-start bg-[#9cd696] text-[#171717] px-3 py-1 text-[11px] font-bold">
                  Malware Lab
                </span>
                <span className="ttm-pill inline-block self-start bg-[#ff8a7a] text-[#171717] px-3 py-1 text-[11px] font-bold">
                  OSINT Radar
                </span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#86867f] block mb-4">
                HQ &amp; Authority
              </span>
              <p className="text-xs text-[#666660] leading-relaxed">
                {SITE_CONFIG.location}<br />
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-[#171717] hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <div className="mt-4 inline-block rounded-full bg-[#171717] text-white px-3 py-1 text-[10px] font-bold">
                Startup India (DPIIT)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777770]">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#171717] text-[#f3f3ed]">
              <RootsightLogo size={12} color="#f3f3ed" accentEye={false} />
            </div>
            <span className="font-bold text-[#171717]">
              ROOTSIGHT CYBER TECHNOLOGIES
            </span>
          </div>

          <span>© {new Date().getFullYear()} ROOTSIGHT. Built for sovereign digital defense.</span>
        </div>
      </div>
    </footer>
  );
}
