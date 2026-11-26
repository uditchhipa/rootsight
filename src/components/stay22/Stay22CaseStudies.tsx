"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Stay22CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-[#ead8ca] border-b border-[#262222]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
            Case Studies
          </p>
          <h2
            className="font-heading text-4xl sm:text-6xl font-normal text-[#262222] tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            Real impact,{" "}
            <em
              className="font-serif italic font-normal text-[#262222]"
              style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
            >
              measurable growth.
            </em>
          </h2>
        </div>

        {/* Featured Case Study Card */}
        <div className="rounded-[32px] bg-[#fbf6f0] border border-[#262222]/10 p-8 sm:p-12 lg:p-16 shadow-lg grid gap-12 lg:grid-cols-12 items-center">
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
              <span className="text-xs font-bold text-[#262222] bg-[#ffb200] px-3 py-1 rounded-full">
                CASE STUDY
              </span>
            </div>

            <h3
              className="font-heading text-2xl sm:text-4xl font-normal text-[#262222] tracking-tight leading-snug"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              How Bookaway Turned Ticket Sales into an Accommodation Revenue Line with Stay22
            </h3>

            <p className="text-base text-[#262222]/80 leading-relaxed font-medium">
              Bookaway integrated Stay22&apos;s dynamic Nova intelligence across ground transportation confirmation pages and itinerary emails, converting travelers directly into hotel and resort bookings.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f2e4d8] border border-[#262222]/5">
                <div
                  className="font-heading text-3xl sm:text-4xl text-[#262222] font-normal"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  40x
                </div>
                <div className="text-xs font-bold text-[#262222]/70 mt-1">
                  Total Accommodation Bookings
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#f2e4d8] border border-[#262222]/5">
                <div
                  className="font-heading text-3xl sm:text-4xl text-[#262222] font-normal"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  +38%
                </div>
                <div className="text-xs font-bold text-[#262222]/70 mt-1">
                  Incremental Net Revenue
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://another.stay22.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#262222] text-[#f2e4d8] hover:bg-black px-6 py-3 rounded-full text-xs font-bold tracking-tight transition-all shadow-md hover:scale-105"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right: Editorial Photography */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] border-2 border-[#262222]/10 shadow-xl group">
            <Image
              src="/stay22/images/Platform_cie.jpg"
              alt="Stay22 Platform Interface and Results"
              width={800}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md text-white text-xs flex items-center justify-between">
              <span className="font-semibold">Bookaway x Stay22 Live Deployment</span>
              <span className="font-mono text-[#ffb200] font-bold">Verified 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
