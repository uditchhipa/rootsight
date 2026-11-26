"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit, Alignment } from "@rive-app/react-canvas";

const CLIENT_LOGOS = [
  { name: "Hearst", src: "/stay22/images/hearst.png" },
  { name: "TicketOne", src: "/stay22/images/ticketone.png" },
  { name: "Bookaway", src: "/stay22/images/Bookaway-beige.svg" },
  { name: "ItaliaRail", src: "/stay22/images/ItaliaRail-Logo-f2e4d8.webp" },
  { name: "Sundial", src: "/stay22/images/Sundial-Logo-f2e4d8.webp" },
];

export function Stay22Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full overflow-visible bg-[#24133b]"
      style={{
        // 260vh matches Stay22's exact 1440/2381 vertical scroll aspect ratio
        height: "260vh",
      }}
    >
      {/* Pinned Sticky Rive Canvas covering full screen during hero scroll */}
      <div className="sticky top-0 left-0 w-full h-screen pointer-events-auto overflow-hidden z-0">
        <RiveAnimation
          src="/stay22/hero.riv"
          stateMachines="State Machine 1"
          fit={Fit.Cover}
          alignment={Alignment.TopCenter}
          scrollScrub={true}
          scrollTargetRef={heroRef}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrolling Content Track over the Pinned Canvas */}
      <div className="relative z-10 w-full -mt-[100vh] flex flex-col pointer-events-none">
        {/* STAGE 1 (Scroll 0 - 100vh): Initial Viewport with White Exposure Headline */}
        <div className="h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6">
          <header className="max-w-6xl mx-auto text-center pointer-events-none pt-12 md:pt-16">
            <h1
              className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[6.75rem] xl:text-[7.75rem] font-normal leading-[0.92] tracking-[-0.04em] text-white text-center select-none"
              style={{
                fontFamily: "'Exposure', Georgia, serif",
                textShadow: "0 4px 30px rgba(0,0,0,0.3)",
              }}
            >
              We’re the portal
              <br />
              between{" "}
              <em
                className="font-serif italic font-normal text-white not-italic"
                style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
              >
                attention
              </em>
            </h1>
          </header>
        </div>

        {/* STAGE 2 (Scroll 100vh - 180vh): The Pure Cosmic Portal & Gold Coins Corridor
            Headline 1 has scrolled away. As the user scrolls through this corridor,
            ScrollProgress reaches 40-60% where the purple vortex swirls open
            and the huge spinning gold coins fly out into the center of the viewport! */}
        <div className="h-[80vh] w-full flex items-center justify-center pointer-events-none" />

        {/* STAGE 3 (Scroll 180vh - 260vh): Reveal of 'and revenue.' & CTA */}
        <div className="h-[80vh] w-full flex flex-col justify-center items-center px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <h2
              className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[6.75rem] xl:text-[7.75rem] font-normal leading-[0.92] tracking-[-0.04em] text-[#262222] text-center select-none"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              and{" "}
              <em
                className="font-serif italic font-normal text-[#262222]"
                style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
              >
                revenue.
              </em>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#262222]/85 max-w-2xl font-medium leading-relaxed tracking-tight text-center">
              Between the audience you&apos;ve built and what you should be earning.
            </p>

            <div className="pt-2 pointer-events-auto flex flex-wrap items-center justify-center gap-4">
              <a
                href="#step-through"
                className="bg-[#262222] text-[#f2e4d8] hover:bg-[#ffb200] hover:text-[#262222] px-8 py-4 rounded-full font-bold text-sm tracking-tight flex items-center gap-2 shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Step through</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Social Proof Marquee / Partner Badges */}
            <div className="mt-8 w-full max-w-3xl pointer-events-auto">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-[#262222]/60 mb-6">
                Powering Travel Revenue for Industry Leaders Worldwide
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
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
        </div>
      </div>
    </section>
  );
}
