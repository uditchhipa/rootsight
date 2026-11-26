"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    author: "Rajesh Kumar, IPS",
    job: "Superintendent of Police, Cyber Crime Cell",
    site: "statepolice.gov.in",
    siteUrl: "#",
    quote: "Rootsight's Nexus engine compressed 3 weeks of grueling manual CDR and tower dump correlation into less than 15 minutes. It gave our operational teams instant suspect tracking timelines that held up flawlessly in court.",
    bgColor: "#2a2626",
    textColor: "#f2e4d8",
    image: "/stay22/images/NeleVanHout.jpg",
    metricBadge: "99.4% Attribution Speed",
  },
  {
    id: 2,
    author: "Vikramaditya Sharma",
    job: "Chief Information Security Officer, Payment Gateway",
    site: "fintechdefense.in",
    siteUrl: "#",
    quote: "Vanguard's continuous adversarial emulation found two zero-day credential chaining flaws that standard automated vulnerability scanners completely missed. Rootsight is indispensable to our infrastructure.",
    bgColor: "#ffb200",
    textColor: "#2a2626",
    image: null,
    metricBadge: "Zero Unplanned Breaches",
  },
  {
    id: 3,
    author: "Dr. Ananya Sen",
    job: "Director of Digital Forensics & Malware Analysis",
    site: "forensicslab.gov.in",
    siteUrl: "#",
    quote: "The Kernel binary deobfuscation platform is sovereign cyber engineering at its finest. Being able to run air-gapped without leaking suspect traces to foreign clouds is non-negotiable for our bureau.",
    bgColor: "#de69a5",
    textColor: "#f2e4d8",
    image: null,
    metricBadge: "100% In-Country Sovereignty",
  },
  {
    id: 4,
    author: "Amitav Roy",
    job: "VP Security Architecture, Critical Telecom Grid",
    site: "telecomops.in",
    siteUrl: "#",
    quote: "When dealing with multi-gigabyte carrier telemetry, standard SIEMs choke. Rootsight ingests our streaming network logs in real time, alerting us to unauthorized subscriber tampering instantly.",
    bgColor: "#786ddc",
    textColor: "#f2e4d8",
    image: null,
    metricBadge: "12ms Real-time Latency",
  },
  {
    id: 5,
    author: "Elena Rostova",
    job: "Global Incident Response Director",
    site: "sovereignthreats.org",
    siteUrl: "#",
    quote: "The Sentinel threat intelligence engine provides actionable attribution down to individual threat actor clusters, not just useless IP blacklists. Highly recommended for elite security operations.",
    bgColor: "#2a2626",
    textColor: "#f2e4d8",
    image: "/stay22/images/ElisaBonneau.jpg",
    metricBadge: "400+ Threat Actor Feeds",
  },
  {
    id: 6,
    author: "Siddharth Verma",
    job: "Deputy Director of Special Investigations",
    site: "cbi.gov.in",
    siteUrl: "#",
    quote: "From raw telecom cell tower dumps to clear suspect co-traveler heatmaps in a single workflow. Rootsight gives time back to investigators when every second counts.",
    bgColor: "#ffb200",
    textColor: "#2a2626",
    image: null,
    metricBadge: "15+ Bureau Deployments",
  },
];

const STATS = [
  {
    value: "120M+",
    label: "Telecom logs correlated",
    sub: "Processed across multi-carrier CDR and IPDR datasets with sub-second retrieval.",
  },
  {
    value: "99.4%",
    label: "Attribution accuracy",
    sub: "Evidentiary timelines structured for law enforcement and legal compliance.",
  },
  {
    value: "15+",
    label: "Active agency deployments",
    sub: "Trusted by state cyber crime cells, critical infrastructure, and banking SOCs.",
  },
  {
    value: "Zero",
    label: "Data residency breaches",
    sub: "Strict 100% sovereign in-country data residency backed by Startup India DPIIT recognition.",
  },
];

export function Stay22CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr === 0 ? TESTIMONIALS.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr === 1 ? 0 : curr + 1));
  };

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-[#FAF4EC] border-b border-[#262222]/10 relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
              Trusted by law enforcement &amp; defense
            </span>
            <h2
              className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              Proven in the field
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border border-[#262222]/20 flex items-center justify-center hover:bg-[#ffb200] hover:text-[#262222] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border border-[#262222]/20 flex items-center justify-center hover:bg-[#ffb200] hover:text-[#262222] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] shadow-2xl min-h-[500px] mb-24">
          {TESTIMONIALS.map((item, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 p-8 sm:p-14 lg:p-20 flex flex-col justify-between ${
                  isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                {/* Background decorative photo if available */}
                {item.image && (
                  <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
                    <Image
                      src={item.image}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                )}

                <div className="relative z-10 flex justify-between items-center">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    {item.metricBadge}
                  </span>
                  <span className="text-sm font-mono opacity-60">
                    0{item.id} / 0{TESTIMONIALS.length}
                  </span>
                </div>

                <div className="relative z-10 max-w-4xl my-auto py-8">
                  <p
                    className="font-heading text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight"
                    style={{ fontFamily: "'Exposure', Georgia, serif" }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-current/15 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold">{item.author}</h4>
                    <p className="text-sm opacity-80">{item.job}</p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
                  >
                    <span>Read Investigation Case File</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* PB-ROW-STATS: Monumental 4-Column Metric Grid */}
        <div className="pt-12 border-t border-[#262222]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="space-y-3">
                <div
                  className="font-heading text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#262222]"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-[#262222]">
                  {stat.label}
                </div>
                <p className="text-sm text-[#262222]/70 leading-relaxed font-medium">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
