"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/content";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 hairline-b bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 hairline-b">
          <div className="max-w-2xl">
            <span className="mono-tag text-[#A3A39E]">02 // CAPABILITIES</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-[#111213]">
              What We Do
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6E7073] leading-relaxed">
              Four specialized engineering practices designed to eliminate operational friction for law enforcement agencies and protect critical enterprise infrastructure.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#111213] hover:text-[#6E7073] transition-colors shrink-0"
          >
            <span>Request Operational Briefing</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Editorial Capability Ledger */}
        <div className="divide-y divide-[#E5E5E2]">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Col 1: Index & Code */}
              <div className="lg:col-span-2">
                <span className="mono-tag text-xs font-bold text-[#111213]">
                  PRACTICE // {service.code}
                </span>
                <span className="block mt-1 text-xs text-[#A3A39E]">
                  {service.subtitle}
                </span>
              </div>

              {/* Col 2: Title & Core Description */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111213] group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#525457] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Col 3: Deliverables List */}
              <div className="lg:col-span-4 lg:pl-6 space-y-2">
                <span className="mono-tag text-[10px] text-[#A3A39E] block mb-2">
                  TECHNICAL DELIVERABLES
                </span>
                <ul className="space-y-2 text-xs text-[#2A2B2D]">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <span className="text-[#A3A39E] font-mono select-none">—</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
