"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    author: "Nele van Hout",
    job: "Travel blogger, partner since 2021",
    site: "thenavigatio.com",
    siteUrl: "https://thenavigatio.com",
    quote: "Since joining Stay22 myself, I've nearly 10x my affiliate income without having to put any more effort in. Wish I'd joined sooner!",
    bgColor: "#2a2626",
    textColor: "#f2e4d8",
    image: "/stay22/images/NeleVanHout.jpg",
    metricBadge: "10x Revenue Increase",
  },
  {
    id: 2,
    author: "Chris & Angela",
    job: "Founders, Travel Bloggers",
    site: "irelandbeforeyoudie.com",
    siteUrl: "https://www.irelandbeforeyoudie.com",
    quote: "Stay22 has completely transformed how we monetize our travel articles. The links fix themselves and we earn top commissions automatically.",
    bgColor: "#ffb200",
    textColor: "#2a2626",
    image: null,
    metricBadge: "+312% Average RPMs",
  },
  {
    id: 3,
    author: "Marco Rossi",
    job: "Head of Digital, Ticketing & Events",
    site: "ticketone.it",
    siteUrl: "https://www.ticketone.it",
    quote: "Integrating accommodation booking right into our concert and event checkouts was a game changer. Seamless experience for fans and strong incremental profit.",
    bgColor: "#de69a5",
    textColor: "#f2e4d8",
    image: null,
    metricBadge: "94% Booking Completion",
  },
  {
    id: 4,
    author: "Sarah Jenkins",
    job: "Managing Editor, Digital City Guides",
    site: "thesavvybackpacker.com",
    siteUrl: "https://thesavvybackpacker.com",
    quote: "Our RPMs jumped 3x within the first 60 days of installing Nova. It runs in the background and outperforms any traditional affiliate widget we tested.",
    bgColor: "#786ddc",
    textColor: "#f2e4d8",
    image: null,
    metricBadge: "3x Higher Conversion",
  },
  {
    id: 5,
    author: "Elisa Bonneau",
    job: "Travel Content Creator & Photographer",
    site: "instagram.com/elisabonneau",
    siteUrl: "https://www.stay22.com",
    quote: "The team at Stay22 actually listens. The dashboard is clean, payouts are punctual, and their Allez short links make monetization on social effortless.",
    bgColor: "#2a2626",
    textColor: "#f2e4d8",
    image: "/stay22/images/ElisaBonneau.jpg",
    metricBadge: "Creator Partner 2024",
  },
];

const STATS = [
  { value: "$1.5B+", label: "In bookings per year" },
  { value: "10,000+", label: "Active partners worldwide" },
  { value: "230M+", label: "Monthly travelers reached" },
  { value: "4.9 / 5", label: "Partner satisfaction rating" },
];

export function Stay22CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div className="bg-[#f2e4d8] text-[#262222] relative w-full overflow-hidden">
      {/* ========================================================
          SECTION: Testimonials Slider (pb-row-testimonials-slider)
          ======================================================== */}
      <section className="py-20 md:py-28 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
                Unfiltered opinions
              </span>
              <h2
                className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222] mt-2"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                Words from our partners
              </h2>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-black/15 bg-white/60 hover:bg-[#ffb200] hover:text-[#262222] text-[#262222] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-black/15 bg-white/60 hover:bg-[#ffb200] hover:text-[#262222] text-[#262222] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Slide Card */}
          <div
            className="rounded-[32px] md:rounded-[40px] p-8 sm:p-12 md:p-16 shadow-2xl transition-all duration-500 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden"
            style={{
              backgroundColor: current.bgColor,
              color: current.textColor,
            }}
          >
            {/* Background Image if present */}
            {current.image && (
              <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="lg:col-span-8 space-y-6 relative z-10">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-black/10 px-3.5 py-1.5 rounded-full border border-current/15">
                {current.metricBadge}
              </span>

              <blockquote
                className="font-heading text-2xl sm:text-4xl md:text-5xl font-normal leading-snug tracking-tight"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                “{current.quote}”
              </blockquote>

              <div className="pt-4 border-t border-current/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-lg sm:text-xl">{current.author}</h4>
                  <p className="text-xs sm:text-sm opacity-80 font-medium">
                    {current.job}
                  </p>
                </div>

                <a
                  href={current.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  <span>{current.site}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Slide Indicator Dots */}
            <div className="lg:col-span-4 flex lg:flex-col items-center lg:items-end justify-center gap-2 relative z-10">
              <div className="text-xs font-mono font-bold tracking-widest opacity-60 mb-2">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </div>
              <div className="flex gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentIndex ? "w-8 bg-current" : "w-2 bg-current/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION: Stats Grid (pb-row-stats)
          ======================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10 bg-[#eadecc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 p-6 rounded-2xl bg-white/40 border border-[#262222]/5 shadow-sm hover:scale-105 transition-transform"
              >
                <div
                  className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-[#262222] tracking-tight leading-none"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#262222]/75 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
