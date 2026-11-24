import React from "react";
import { RootsightLogo } from "@/components/RootsightLogo";
import { SITE_CONFIG } from "@/data/content";

export function FooterSection() {
  return (
    <footer className="bg-[#f8f8f8] pt-24 pb-28 md:pb-16 border-t border-[#ededed]">
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        <div className="grid gap-12 border-b border-[#ededed] pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#222222] text-white">
                <RootsightLogo size={18} color="#FFFFFF" accentEye={false} />
              </div>
              <span className="font-extrabold text-base tracking-wider text-[#222222]">
                ROOTSIGHT<span className="text-[#00c875]">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#555555]">
              {SITE_CONFIG.tagline} Registered Indian cyber security and
              investigation automation startup recognized under Startup India (DPIIT).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
                Navigation
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-[#555555]">
                <li>
                  <a href="#about" className="hover:text-[#222222]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#222222]">
                    Systems
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#222222]">
                    Directory
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#222222]">
                    Methodology
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
                Connect
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-[#555555]">
                <li>
                  <a
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#222222]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#222222]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#222222]"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
                Recognition
              </h4>
              <p className="mt-4 text-xs leading-relaxed text-[#555555]">
                Startup India (DPIIT)
                <br />
                {SITE_CONFIG.startupIndiaId}
                <br />
                {SITE_CONFIG.location}
              </p>
            </div>
          </div>
        </div>

        {/* Monumental Watermark */}
        <div className="overflow-hidden py-12 select-none">
          <p className="text-center font-black uppercase leading-[0.82] tracking-[-0.04em] text-[#222222]/[0.05] text-[14vw]">
            ROOTSIGHT
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#ededed] pt-6 text-xs text-[#7a7a7a] sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} ROOTSIGHT Cyber Technologies. All rights reserved.
          </span>
          <span className="font-mono text-[11px]">See the root of every threat.</span>
        </div>
      </div>
    </footer>
  );
}
