"use client";

import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/data/content";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#ffffff] py-20 md:py-28 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#71717a]">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#09090b]">
            Specialized capabilities engineered for mission success.
          </h2>
          <p className="mt-4 text-base text-[#71717a] leading-relaxed">
            From assisting law enforcement agencies with evidence automation to uncovering zero-day vulnerabilities in enterprise infrastructure, here is how Rootsight protects and empowers our clients.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-8 rounded-2xl bg-[#fafafa] border border-[#e4e4e7] transition-all hover:border-[#d4d4d8] hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#e4e4e7]">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#10b981] bg-[#10b981]/10 px-2.5 py-1 rounded-md">
                    PRACTICE // {service.code}
                  </span>
                  <span className="text-xs font-medium text-[#71717a]">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#09090b] tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-[#52525b] leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities Checklist */}
                <div className="mt-6 pt-6 border-t border-[#e4e4e7] space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#71717a] block mb-3">
                    Key Deliverables:
                  </span>
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5 text-xs text-[#27272a]">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#10b981]/15 text-[#10b981] shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e4e4e7] flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#09090b] hover:text-[#2563eb] transition-colors"
                >
                  <span>Request Technical Briefing</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
