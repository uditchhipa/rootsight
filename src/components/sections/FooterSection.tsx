import React from "react";
import { RootsightLogo } from "@/components/RootsightLogo";
import { SITE_CONFIG } from "@/data/content";

export function FooterSection() {
  return (
    <footer className="bg-[#F9F9F7] py-16 hairline-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 pb-12 hairline-b">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#111213] text-[#F9F9F7]">
                <RootsightLogo size={13} color="#F9F9F7" accentEye={false} />
              </div>
              <span className="font-extrabold text-xs tracking-[0.14em] uppercase text-[#111213]">
                ROOTSIGHT
              </span>
            </div>
            <p className="max-w-md text-xs text-[#6E7073] leading-relaxed">
              Rootsight Cyber Technologies is a registered Indian cyber security &amp; automation startup recognized under Startup India (DPIIT). We engineer sovereign investigation automation, offensive red teaming frameworks, and malware research tooling.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="mono-tag text-[10px] text-[#A3A39E] block mb-3">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#525457]">
              <li>
                <a href="#about" className="hover:text-[#111213] transition-colors">
                  01 // Who We Are
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#111213] transition-colors">
                  02 // What We Do
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#111213] transition-colors">
                  03 // Founding Team &amp; Roles
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#111213] transition-colors">
                  04 // Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional / Contact */}
          <div className="md:col-span-3">
            <h4 className="mono-tag text-[10px] text-[#A3A39E] block mb-3">
              INSTITUTIONAL
            </h4>
            <p className="text-xs text-[#6E7073] leading-relaxed">
              {SITE_CONFIG.location}<br />
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#111213] font-medium hover:underline">
                {SITE_CONFIG.email}
              </a>
            </p>
            <div className="mt-4 inline-block mono-tag text-[10px] text-[#111213] border border-[#E5E5E2] bg-white px-2 py-0.5 rounded">
              DPIIT RECOGNIZED // STARTUP INDIA
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E7073]">
          <span>© {new Date().getFullYear()} Rootsight Cyber Technologies. All rights reserved.</span>
          <span className="mono-tag text-[10px] text-[#A3A39E]">
            ROOT ACCESS. TOTAL SIGHT.
          </span>
        </div>
      </div>
    </footer>
  );
}
