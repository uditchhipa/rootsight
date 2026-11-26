import React from "react";
import { RootsightLogo } from "@/components/RootsightLogo";
import { SITE_CONFIG } from "@/data/content";

export function FooterSection() {
  return (
    <footer className="bg-[#fafafa] py-16 border-t border-[#e4e4e7]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-[#e4e4e7]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#09090b] text-white">
                <RootsightLogo size={16} color="#FFFFFF" accentEye={false} />
              </div>
              <span className="font-extrabold text-sm tracking-wider text-[#09090b]">
                ROOTSIGHT<span className="text-[#10b981]">.</span>
              </span>
            </div>
            <p className="max-w-md text-xs text-[#71717a] leading-relaxed">
              <strong>Rootsight Cyber Technologies</strong> is an Indian cyber security and investigation automation startup recognized by Startup India (DPIIT), engineering sovereign digital forensics, offensive red teaming, and threat research.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#09090b]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-[#52525b]">
              <li>
                <a href="#about" className="hover:text-[#09090b] transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#09090b] transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#09090b] transition-colors">
                  Leadership &amp; Roles
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#09090b] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional / Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#09090b]">
              Headquarters
            </h4>
            <p className="mt-4 text-xs text-[#71717a] leading-relaxed">
              {SITE_CONFIG.location}<br />
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#09090b] font-medium hover:underline">
                {SITE_CONFIG.email}
              </a>
            </p>
            <div className="mt-4 inline-block rounded border border-[#e4e4e7] bg-white px-2 py-1 text-[10px] font-semibold text-[#10b981]">
              Startup India Registered
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <span>© {new Date().getFullYear()} Rootsight Cyber Technologies. All rights reserved.</span>
          <span className="font-mono text-[11px] text-[#a1a1aa]">Security, automated. Root cause identified.</span>
        </div>
      </div>
    </footer>
  );
}
