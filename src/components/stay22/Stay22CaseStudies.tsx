"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function Stay22CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-[#ead8ca] border-b border-[#2a2626]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#786ddc] bg-white/60 px-4 py-1.5 rounded-full border border-[#786ddc]/20">
            Proven Results
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-black text-[#2a2626] tracking-tight leading-[1.05]">
            Real impact, <br />
            <span className="font-serif italic font-normal text-[#786ddc]">measurable growth.</span>
          </h2>
        </div>

        {/* Featured Case Study Card */}
        <div className="rounded-3xl bg-[#fbf6f0] border border-[#2a2626]/10 p-8 sm:p-12 lg:p-16 shadow-lg grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-28 relative">
                <Image
                  src="/stay22/images/Bookaway-beige.svg"
                  alt="Bookaway"
                  width={110}
                  height={32}
                  className="object-contain filter invert contrast-200"
                />
              </div>
              <span className="text-xs font-mono font-bold text-[#786ddc] bg-[#786ddc]/10 px-2.5 py-0.5 rounded-full">
                CASE STUDY
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-[#2a2626] tracking-tight leading-snug">
              How Bookaway Turned Ticket Sales into an Accommodation Revenue Line with Stay22
            </h3>

            <p className="text-sm sm:text-base text-[#2a2626]/75 leading-relaxed">
              Bookaway integrated Stay22's dynamic Nova intelligence across ground transportation confirmation pages and itinerary emails, converting travelers directly into hotel and resort bookings.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f2e4d8] border border-[#2a2626]/5">
                <div className="text-3xl sm:text-4xl font-black text-[#786ddc]">+38%</div>
                <div className="text-xs font-semibold text-[#2a2626]/70 mt-1">Incremental Revenue</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#f2e4d8] border border-[#2a2626]/5">
                <div className="text-3xl sm:text-4xl font-black text-[#2a2626]">2.4x</div>
                <div className="text-xs font-semibold text-[#2a2626]/70 mt-1">Conversion Lift</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#2a2626] hover:text-[#786ddc] transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right: Real Editorial Photography */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] border-2 border-[#2a2626]/10 shadow-xl group">
            <Image
              src="/stay22/images/Platform_cie.jpg"
              alt="Stay22 Platform Interface and Results"
              width={800}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs flex items-center justify-between">
              <span>Bookaway x Stay22 Live Deployment</span>
              <span className="font-mono text-[#ffb200]">Verified 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
