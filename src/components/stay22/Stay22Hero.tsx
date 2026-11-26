"use client";

import React, { useRef } from "react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit, Alignment } from "@rive-app/react-canvas";

export function Stay22Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="pb-row-hero relative w-full overflow-hidden bg-[#24133b]"
    >
      {/* 
        Full-bleed Rive Canvas covering 100% of the 1440/2381 section.
        As the user scrolls down the page, they scroll through the entire 2381px artboard,
        experiencing the giant purple portal and spinning 3D gold coins at full scale.
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <RiveAnimation
          src="/stay22/hero.riv"
          stateMachines="State Machine 1"
          fit={Fit.Cover}
          alignment={Alignment.TopCenter}
          scrollScrub={true}
          scrollTargetRef={heroRef}
          className="w-full h-full"
        />
      </div>

      {/* Row 1: Header (We’re the portal between attention) */}
      <header className="col-start-1 row-start-1 self-start justify-self-center relative text-white text-center z-10 px-4 pointer-events-none">
        <h1
          className="font-heading text-white text-center font-normal leading-[0.92] tracking-[-0.04em] text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8rem] select-none m-0"
          style={{
            fontFamily: "'Exposure', Georgia, serif",
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }}
        >
          We’re the portal<br />
          between{" "}
          <em
            className="italic font-normal text-white not-italic"
            style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
          >
            attention
          </em>
        </h1>
      </header>

      {/* Row 2: Content (and revenue.) */}
      <div className="col-start-1 row-start-2 self-start justify-self-center relative text-[#262222] text-center z-10 px-4 flex flex-col items-center pointer-events-none">
        <h2
          className="font-heading text-[#262222] text-center font-normal leading-[0.92] tracking-[-0.04em] text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8rem] select-none m-0"
          style={{ fontFamily: "'Exposure', Georgia, serif" }}
        >
          and{" "}
          <em
            className="italic font-normal text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
          >
            revenue
          </em>
          .
        </h2>

        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-[#262222] text-center font-medium max-w-xl mx-auto tracking-tight">
          Between the audience you&apos;ve built and what you should be earning.
        </p>
      </div>
    </section>
  );
}
