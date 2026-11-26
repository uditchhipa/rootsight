"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";

const CLIENT_LOGOS = [
  { name: "Hearst", src: "/stay22/images/hearst.png" },
  { name: "TicketOne", src: "/stay22/images/ticketone.png" },
  { name: "Bookaway", src: "/stay22/images/Bookaway-beige.svg" },
  { name: "ItaliaRail", src: "/stay22/images/ItaliaRail-Logo-f2e4d8.webp" },
  { name: "Sundial", src: "/stay22/images/Sundial-Logo-f2e4d8.webp" },
];

export function Stay22Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#f2e4d8]">
      {/* Decorative Warm Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#786ddc]/10 via-[#ffb200]/10 to-[#de69a5]/10 blur-[130px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Monumental Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2a2626]/5 border border-[#2a2626]/15 px-4 py-1.5 text-xs font-bold text-[#2a2626]">
              <Sparkles className="w-3.5 h-3.5 text-[#786ddc]" />
              <span>Affiliate Monetization for Creators &amp; Platforms</span>
            </div>

            {/* Headline with Stay22's Signature Editorial Serif */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.25rem] font-black tracking-[-0.03em] text-[#2a2626] leading-[1.02]">
              We’re the portal <br />
              <span className="font-serif italic font-normal text-[#786ddc]">between attention</span> <br />
              and revenue.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-[#2a2626]/75 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              The best monetization platforms disappear into your site. Stay22 helps creators and publishers monetize travel intent with seamless, high-converting integrations.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="stay22-btn-primary flex items-center gap-2 shadow-lg">
                <span>Step Through</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a href="#products" className="stay22-btn-secondary">
                Explore the Platform
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Stay22 Rive Hero Animation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl bg-transparent flex items-center justify-center">
              <RiveAnimation
                src="/stay22/hero.riv"
                stateMachines="State Machine 1"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Client Social Proof Marquee / Logos */}
        <div className="mt-20 pt-10 border-t border-[#2a2626]/10">
          <p className="text-center text-xs font-extrabold uppercase tracking-widest text-[#2a2626]/50 mb-8">
            Powering Travel Revenue for Industry Leaders Worldwide
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.name} className="relative h-8 w-24 sm:w-28 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={110}
                  height={32}
                  className="object-contain max-h-8 w-auto filter contrast-125"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
