"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SERVICES } from "@/data/content";
import { RootsightLogo } from "@/components/RootsightLogo";

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string>(SERVICES[0].id);

  return (
    <section
      id="services"
      className="bg-[#f8f8f8] py-28 md:py-36 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7a7a7a]">
              Directory // Practice Areas
            </span>
            <h2 className="mt-2 font-extrabold uppercase tracking-[-0.03em] text-[#222222] text-3xl sm:text-5xl">
              SERVICES &amp; CAPABILITIES
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#7a7a7a]">
            Click any practice row to expand operational deliverables, investigative capabilities, and deployment architecture.
          </p>
        </div>

        {/* Clean Awwwards Directory Table */}
        <div className="overflow-hidden rounded-2xl border border-[#ededed] bg-[#ffffff] shadow-xs">
          <div className="hidden grid-cols-12 border-b border-[#ededed] bg-[#f8f8f8] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#7a7a7a] md:grid">
            <div className="col-span-5">Practice / Capability</div>
            <div className="col-span-3">Domain</div>
            <div className="col-span-3">Primary Focus</div>
            <div className="col-span-1 text-right">Details</div>
          </div>

          <div className="divide-y divide-[#ededed]">
            {SERVICES.map((svc, idx) => {
              const isOpen = expandedId === svc.id;
              return (
                <div key={svc.id} className="transition-colors hover:bg-[#fcfcfc]">
                  <button
                    type="button"
                    onClick={() => setExpandedId(isOpen ? "" : svc.id)}
                    className="grid w-full grid-cols-1 items-center gap-3 px-6 py-5 text-left md:grid-cols-12 md:gap-4"
                  >
                    <div className="flex items-center gap-4 md:col-span-5">
                      <span className="font-mono text-xs text-[#a7a7a7]">
                        0{idx + 1}
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ededed]">
                        <RootsightLogo size={15} color="#222222" accentEye={false} />
                      </div>
                      <span className="text-base font-semibold text-[#222222]">
                        {svc.title}
                      </span>
                    </div>

                    <div className="text-xs text-[#7a7a7a] md:col-span-3">
                      {svc.subtitle}
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:col-span-3">
                      <span className="rounded-full border border-[#dedede] bg-[#f8f8f8] px-3 py-1 text-[11px] font-medium text-[#222222]">
                        {svc.capabilities[0]}
                      </span>
                    </div>

                    <div className="flex justify-end md:col-span-1">
                      <ChevronDown
                        size={16}
                        className={`text-[#7a7a7a] transition-transform ${
                          isOpen ? "rotate-180 text-[#222222]" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="grid gap-6 border-t border-[#ededed] bg-[#fbfbfc] px-6 py-8 md:grid-cols-12 md:px-12">
                      <div className="md:col-span-7">
                        <p className="text-sm leading-relaxed text-[#555555]">
                          {svc.description}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between gap-4 md:col-span-5">
                        <div className="flex flex-wrap gap-2">
                          {svc.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="rounded-lg border border-[#ededed] bg-[#ffffff] px-3 py-1.5 font-mono text-[11px] text-[#222222] shadow-xs"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                        <div>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#222222] hover:text-[#00c875]"
                          >
                            <span>Request consultation for {svc.title}</span>
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
