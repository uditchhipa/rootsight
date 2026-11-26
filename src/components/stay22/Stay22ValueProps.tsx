"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit, Alignment } from "@rive-app/react-canvas";

const LEA_TICKER_ITEMS = [
  "Tower Dump Analysis",
  "Geo-Temporal Mapping",
  "IPDR Correlation",
  "CDR Ingestion",
  "Multi-Carrier Normalization",
  "Suspect Geo-Profiling",
  "Chain of Custody Reports",
  "Cyber Crime Cells",
  "Digital Forensics Lab",
];

const ENTERPRISE_TICKER_ITEMS = [
  "Zero Day Research",
  "Adversarial Red Team",
  "Sovereign Telemetry",
  "Kernel Sandboxing",
  "Kernel Exploit Defense",
  "Threat Attribution",
  "Air-Gapped Deployment",
  "SOC Automation",
  "BFSI Compliance",
];

export function Stay22ValueProps() {
  const oneReasonRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLElement>(null);

  // Stacking cards refs
  const card1Ref = useRef<HTMLElement>(null);
  const placeholder0Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLElement>(null);
  const placeholder1Ref = useRef<HTMLDivElement>(null);

  const [card1Height, setCard1Height] = useState(680);
  const [card2Height, setCard2Height] = useState(680);

  useEffect(() => {
    const updateHeights = () => {
      if (card1Ref.current) {
        setCard1Height(card1Ref.current.offsetHeight);
      }
      if (card2Ref.current) {
        setCard2Height(card2Ref.current.offsetHeight);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Card 1 scroll progress calculation based on placeholder 0
          if (placeholder0Ref.current && card1Ref.current) {
            const p0Rect = placeholder0Ref.current.getBoundingClientRect();
            const stickyTop = 96;
            const scrolled = stickyTop - p0Rect.top;
            const totalDistance = Math.max(1, placeholder0Ref.current.offsetHeight);
            const progress1 = Math.min(1, Math.max(0, scrolled / totalDistance));

            const scale1 = 1 - progress1 * 0.05;
            const translateY1 = -progress1 * 16;
            const brightness1 = 1 - progress1 * 0.12;

            card1Ref.current.style.transform = `scale(${scale1}) translateY(${translateY1}px)`;
            card1Ref.current.style.filter = `brightness(${brightness1})`;
          }

          // Card 2 scroll progress calculation based on placeholder 1
          if (placeholder1Ref.current && card2Ref.current) {
            const p1Rect = placeholder1Ref.current.getBoundingClientRect();
            const stickyTop2 = 104;
            const scrolled2 = stickyTop2 - p1Rect.top;
            const totalDistance2 = Math.max(1, placeholder1Ref.current.offsetHeight);
            const progress2 = Math.min(1, Math.max(0, scrolled2 / totalDistance2));

            const scale2 = 1 - progress2 * 0.04;
            const translateY2 = -progress2 * 12;

            card2Ref.current.style.transform = `scale(${scale2}) translateY(${translateY2}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateHeights);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#f2e4d8] text-[#262222] relative w-full">
      {/* ========================================================
          SECTION 1: Step through.
          ======================================================== */}
      <section id="step-through" className="py-20 md:py-28 text-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            Step through.
          </h2>

          <nav className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="stay22-btn-yellow flex items-center gap-2 group shadow-lg hover:scale-105 transition-all"
            >
              <span>Deploy Investigation Tech</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="stay22-btn-primary flex items-center gap-2 group shadow-lg hover:scale-105 transition-all"
            >
              <span>Request Briefing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </nav>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: The sovereign partner. & STACKED CARDS
          ======================================================== */}
      <section id="solutions" className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            The{" "}
            <em
              className="font-serif italic font-normal text-[#262222]"
              style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
            >
              sovereign
            </em>{" "}
            partner.
          </h2>
          <p className="mt-5 text-lg sm:text-2xl text-[#262222]/80 max-w-2xl mx-auto font-medium">
            Giving time back to investigators and moving defense forward.
          </p>
        </div>

        {/* ====================================================
            AUTHENTIC STAY22 STACKED CONTENT GRID (pb-row-stacked-content)
            ==================================================== */}
        <div
          className="pb-row-stacked-content max-w-7xl mx-auto grid grid-cols-1 relative"
          style={{
            gridTemplateRows: `repeat(2, auto)`,
          }}
        >
          {/* CARD 1 (Law Enforcement & Forensics): Spans Row 1 to Row 2, Sticking at top: 96px */}
          <article
            ref={card1Ref}
            id="creators"
            className="pb-row-stacked-content__content rounded-[32px] md:rounded-[40px] bg-[#ffb200] text-[#2a2626] p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden grid lg:grid-cols-12 gap-8 items-center z-10 will-change-transform"
            style={{
              gridColumn: "1",
              gridRow: "1 / span 2",
              position: "sticky",
              top: "96px",
              alignSelf: "start",
              transformOrigin: "top center",
              transition: "transform 0.08s ease-out, filter 0.08s ease-out",
            }}
          >
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-black/10 px-3.5 py-1.5 rounded-full">
                  Law Enforcement &amp; Forensics
                </span>
                <h3
                  className="font-heading text-3xl sm:text-5xl md:text-5xl font-normal leading-[1.05]"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  For elite investigators who want to <br />
                  <em className="font-serif italic">close cases faster</em>
                </h3>
                <p className="text-base sm:text-lg text-[#2a2626]/85 leading-relaxed font-medium">
                  <strong>You didn&apos;t enter intelligence work to manually parse endless spreadsheets. </strong>
                  Rootsight turns fragmented telecom logs, CDRs, and IPDR traces into conclusive evidentiary timelines with zero manual overhead.
                </p>
              </div>

              {/* Tag pill */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs uppercase tracking-wider font-bold opacity-75">
                  Explore by operational scope :
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2a2626]/40 text-xs font-extrabold uppercase tracking-wide hover:bg-[#2a2626] hover:text-[#ffb200] transition-colors"
                  >
                    Cyber Crime Cells
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2a2626]/40 text-xs font-extrabold uppercase tracking-wide hover:bg-[#2a2626] hover:text-[#ffb200] transition-colors"
                  >
                    State Police CID
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#2a2626]/40 text-xs font-extrabold uppercase tracking-wide hover:bg-[#2a2626] hover:text-[#ffb200] transition-colors"
                  >
                    Digital Forensics
                  </a>
                </div>
              </div>

              {/* Running Horizontal Marquee Ticker 1 */}
              <div className="w-full overflow-hidden py-3 border-y border-black/10 my-3">
                <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
                  {[...LEA_TICKER_ITEMS, ...LEA_TICKER_ITEMS].map((name, i) => (
                    <span
                      key={i}
                      className="text-sm md:text-base font-bold text-[#2a2626]/80 flex items-center gap-4"
                    >
                      <span>{name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#2a2626] text-[#f2e4d8] hover:bg-black px-7 py-3.5 rounded-full font-bold text-sm tracking-tight transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Investigation Tech</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Media: bike-women.jpg with organic SVG mask */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group border-2 border-black/5 bg-[#ffb200]">
                <Image
                  src="/stay22/images/bike-women.jpg"
                  alt="Investigation field specialists"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Organic Stay22 SVG Mask Overlay (Desktop) */}
                <svg
                  className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none text-[#ffb200]"
                  viewBox="0 0 682 582"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M137.241 0.000114441C134.887 1.41299 132.531 2.8503 130.176 4.31554C40.2492 60.2626 -15.6004 133.022 5.43164 166.828C20.6958 191.362 72.2582 188.636 133.768 163.91C35.6756 259.162 -3.41151 381.761 46.1914 473.31C111.602 594.032 306.467 615.045 481.435 520.243C579.039 467.359 649.833 389.606 682 310.23V645H0V0.000114441H137.241ZM682 134.187C708.647 186.704 706.834 248.95 682 310.23V134.187ZM682 134.187C681.289 132.785 680.557 131.391 679.806 130.003C619.883 19.4093 451.318 -7.50425 288.935 61.6437C310.311 39.7803 325.266 18.3677 331.809 0.000114441H682V134.187ZM137.241 0.000114441C224.768 -52.5341 310.602 -68.6944 331.084 -35.7743C336.896 -26.4318 336.836 -14.115 331.809 0.000114441H137.241Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </article>

          {/* PLACEHOLDER 0: Reserves scroll track height for Card 1 */}
          <div
            ref={placeholder0Ref}
            id="placeholder0"
            className="pb-row-stacked-content__placeholder pointer-events-none"
            style={{
              gridColumn: "1",
              gridRow: "1 / span 1",
              height: `${card1Height + 120}px`,
              visibility: "hidden",
            }}
            aria-hidden="true"
          />

          {/* CARD 2 (Enterprises & Critical Infrastructure): Placed in Row 2, Sticking at top: 104px and sliding OVER Card 1 */}
          <article
            ref={card2Ref}
            id="platforms"
            className="pb-row-stacked-content__content rounded-[32px] md:rounded-[40px] bg-[#2a2626] text-[#f2e4d8] p-6 sm:p-10 md:p-14 shadow-[0_-25px_60px_rgba(0,0,0,0.55)] overflow-hidden grid lg:grid-cols-12 gap-8 items-center z-20 will-change-transform"
            style={{
              gridColumn: "1",
              gridRow: "2 / span 1",
              position: "sticky",
              top: "104px",
              alignSelf: "start",
              transformOrigin: "top center",
              transition: "transform 0.08s ease-out",
            }}
          >
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full order-2 lg:order-1">
              <div className="space-y-4">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-white/10 text-[#ffb200] px-3.5 py-1.5 rounded-full">
                  Enterprises &amp; Critical Infra
                </span>
                <h3
                  className="font-heading text-3xl sm:text-5xl md:text-5xl font-normal leading-[1.05] text-white"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  For security leaders looking to <em className="font-serif italic text-[#ffb200]">eliminate blindspots</em>
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-medium">
                  <strong>Your systems are probed daily. Just not on your schedule. </strong><br />
                  Rootsight deploys continuous offensive adversarial emulation and deep kernel telemetry, finding vulnerabilities before attackers weaponize them.
                </p>
              </div>

              {/* Tags row */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs uppercase tracking-wider font-bold opacity-75 text-white/70">
                  Explore by organization type :
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Banking & BFSI", href: "#contact" },
                    { label: "Telecom Operators", href: "#contact" },
                    { label: "Defense & Gov", href: "#contact" },
                    { label: "Cloud Providers", href: "#contact" },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-xs font-extrabold uppercase tracking-wide text-white hover:bg-white hover:text-[#2a2626] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Running Horizontal Marquee Ticker 2 */}
              <div className="w-full overflow-hidden py-3 border-y border-white/10 my-3">
                <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
                  {[...ENTERPRISE_TICKER_ITEMS, ...ENTERPRISE_TICKER_ITEMS].map((name, i) => (
                    <span
                      key={i}
                      className="text-sm md:text-base font-bold text-white/80 flex items-center gap-4"
                    >
                      <span className="text-[#ffb200]">{name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#ffb200] text-[#2a2626] hover:bg-[#ffa000] px-7 py-3.5 rounded-full font-bold text-sm tracking-tight transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Enterprise Defense</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Media: Platform_cie.jpg with organic SVG mask */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group border-2 border-white/10 bg-[#2a2626]">
                <Image
                  src="/stay22/images/Platform_cie.jpg"
                  alt="Security operations center intelligence"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Organic Stay22 SVG Mask Overlay (Desktop) */}
                <svg
                  className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none text-[#2a2626]"
                  viewBox="0 0 682 645"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M601.856 -0.000289917C536.833 23.1001 464.439 56.0825 390.16 97.6013C387.208 99.2513 383.771 95.2169 385.753 92.4772C401.708 70.4342 407.55 50.9922 399.89 38.2185C382.255 8.81395 299.752 25.8821 215.614 76.3415C131.477 126.801 77.5648 191.544 95.1992 220.949C105.818 238.655 139.956 239.509 183.809 226.371C187.102 225.384 189.627 230.113 186.929 232.243C52.9139 338 -22.4091 441.329 7.52539 492.332C39.4865 546.787 182.031 525.564 354.5 448.535C357.819 447.053 360.889 452.148 358.035 454.399C269.699 524.057 219.952 591.611 239.353 624.666C266.168 670.353 414.927 632.838 571.616 540.874C612.36 516.96 649.627 491.718 682 466.655V645H0V-0.000289917H601.856ZM682 283.827C745.887 266.617 792.826 267.87 806.773 291.633C826.616 325.441 774.126 395.331 682 466.655V283.827ZM682 283.827C663.851 288.716 644.334 295.095 623.817 302.872C620.422 304.159 617.638 298.901 620.606 296.809C642.203 281.597 662.713 266.286 682 251.03V283.827ZM601.856 -0.000289917C732.893 -46.5526 833.998 -52.9645 860.287 -8.17314C890.138 42.6876 815.316 145.581 682 251.03V-0.000289917H601.856Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </article>

          {/* PLACEHOLDER 1: Reserves scroll track height for Card 2 */}
          <div
            ref={placeholder1Ref}
            id="placeholder1"
            className="pb-row-stacked-content__placeholder pointer-events-none"
            style={{
              gridColumn: "1",
              gridRow: "2 / span 1",
              height: `${card2Height + 100}px`,
              visibility: "hidden",
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ========================================================
          SECTION 3: One reason to partner (Interactive onereason.riv)
          ======================================================== */}
      <section
        ref={oneReasonRef}
        className="pb-row-text-media-shape py-20 md:py-32 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10 bg-[#eadecc] relative z-30 shadow-[0_-25px_60px_rgba(0,0,0,0.2)]"
      >
        <div className="max-w-5xl mx-auto text-center mb-12 space-y-4">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            One reason to partner
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-[#262222]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect to our sovereign pipeline and your entire intelligence horizon clarifies in real time. From raw digital signals to attribution, containment, and defense.
          </p>

          <nav className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="stay22-btn-yellow flex items-center gap-2 group shadow-md hover:scale-105 transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="stay22-btn-primary flex items-center gap-2 group shadow-md hover:scale-105 transition-all"
            >
              <span>Talk to our team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </nav>
        </div>

        {/* Wide Interactive Rive Container: onereason.riv */}
        <div className="max-w-6xl mx-auto relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl bg-[#ffb200]/10 border border-black/5 aspect-[1333/760] select-none">
          <RiveAnimation
            src="/stay22/onereason.riv"
            stateMachines="State Machine 1"
            fit={Fit.Contain}
            alignment={Alignment.Center}
            autoplay={true}
            className="w-full h-full"
          />

          {/* Seamless Pixel-Perfect RootSight Brand Overlay across the 3 website pills */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Pill 1 (Top Lavender Badge) */}
            <div
              className="absolute flex items-center justify-center gap-[4%] font-sans font-medium text-[#262222] bg-[#b6adfd] border-[1.5px] border-[#262222] rounded-full shadow-xs tracking-tight"
              style={{
                left: "7.4%",
                top: "66.5%",
                width: "8.2%",
                height: "3.7%",
                fontSize: "clamp(8px, 0.72vw, 12px)",
              }}
            >
              <svg className="w-[18%] h-[55%] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span>RootSight</span>
            </div>

            {/* Pill 2 (Bottom-Left Light Lavender Badge) */}
            <div
              className="absolute flex items-center justify-center gap-[4%] font-sans font-medium text-[#262222] bg-[#f5f3ff] border-[1.5px] border-[#262222] rounded-full shadow-xs tracking-tight"
              style={{
                left: "11.8%",
                top: "71.6%",
                width: "8.2%",
                height: "3.7%",
                fontSize: "clamp(8px, 0.72vw, 12px)",
              }}
            >
              <svg className="w-[18%] h-[55%] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span>RootSight</span>
            </div>

            {/* Pill 3 (Bottom-Right Lavender Badge) */}
            <div
              className="absolute flex items-center justify-center gap-[4%] font-sans font-medium text-[#262222] bg-[#b6adfd] border-[1.5px] border-[#262222] rounded-full shadow-xs tracking-tight"
              style={{
                left: "24.9%",
                top: "71.6%",
                width: "8.2%",
                height: "3.7%",
                fontSize: "clamp(8px, 0.72vw, 12px)",
              }}
            >
              <svg className="w-[18%] h-[55%] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span>RootSight</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: Three pillars of Rootsight (human.riv, lucrative.riv, effortless.riv)
          ======================================================== */}
      <section
        ref={columnsRef}
        id="why-rootsight"
        className="py-20 md:py-32 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10 relative z-30 bg-[#f2e4d8]"
      >
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            Three pillars of Rootsight
          </h2>
        </div>

        {/* 3 Column Feature Cards matching Stay22 official layout */}
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Column 1: Precision (human.riv) */}
          <div className="group rounded-[32px] bg-[#faf4ec] border border-[#262222]/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#ffb200] transition-all duration-300">
            <div>
              <div className="w-full aspect-[447/556] rounded-2xl overflow-hidden mb-6 bg-[#f2e4d8]/40 border border-[#262222]/5 flex items-center justify-center p-2 relative">
                <RiveAnimation
                  src="/stay22/human.riv"
                  stateMachines="State Machine 1"
                  fit={Fit.Contain}
                  alignment={Alignment.Center}
                  autoplay={true}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3
                className="font-heading text-3xl sm:text-4xl font-normal text-[#262222] tracking-tight mb-3"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                Precision
              </h3>
              <p className="text-base text-[#262222]/80 leading-relaxed font-medium">
                Human-in-the-loop analysis and dedicated cyber intelligence specialists who understand threat actors and adversarial tactics.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262222]/10 flex items-center justify-between text-xs font-bold text-[#262222]/70">
              <span>Expert Support</span>
              <span className="text-[#ffb200] font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffb200]" />
                Threat Researchers
              </span>
            </div>
          </div>

          {/* Column 2: Sovereign (lucrative.riv) */}
          <div className="group rounded-[32px] bg-[#faf4ec] border border-[#262222]/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#ffb200] transition-all duration-300">
            <div>
              <div className="w-full aspect-[447/556] rounded-2xl overflow-hidden mb-6 bg-[#f2e4d8]/40 border border-[#262222]/5 flex items-center justify-center p-2 relative">
                <RiveAnimation
                  src="/stay22/lucrative.riv"
                  stateMachines="State Machine 1"
                  fit={Fit.Contain}
                  alignment={Alignment.Center}
                  autoplay={true}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3
                className="font-heading text-3xl sm:text-4xl font-normal text-[#262222] tracking-tight mb-3"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                Sovereign
              </h3>
              <p className="text-base text-[#262222]/80 leading-relaxed font-medium">
                Zero foreign cloud dependencies, 100% in-country data residency, and full auditability compliant with DPIIT &amp; CERT-In mandates.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262222]/10 flex items-center justify-between text-xs font-bold text-[#262222]/70">
              <span>National Security</span>
              <span className="text-[#ffb200] font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffb200]" />
                Air-Gapped Ready
              </span>
            </div>
          </div>

          {/* Column 3: Autonomous (effortless.riv) */}
          <div className="group rounded-[32px] bg-[#faf4ec] border border-[#262222]/10 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-[#ffb200] transition-all duration-300">
            <div>
              <div className="w-full aspect-[447/556] rounded-2xl overflow-hidden mb-6 bg-[#f2e4d8]/40 border border-[#262222]/5 flex items-center justify-center p-2 relative">
                <RiveAnimation
                  src="/stay22/effortless.riv"
                  stateMachines="State Machine 1"
                  fit={Fit.Contain}
                  alignment={Alignment.Center}
                  autoplay={true}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3
                className="font-heading text-3xl sm:text-4xl font-normal text-[#262222] tracking-tight mb-3"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                Autonomous
              </h3>
              <p className="text-base text-[#262222]/80 leading-relaxed font-medium">
                Instant correlation and zero-touch evidence pipelines that do the heavy data crunching in seconds, leaving zero blindspots.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262222]/10 flex items-center justify-between text-xs font-bold text-[#262222]/70">
              <span>Real-Time Engine</span>
              <span className="text-[#ffb200] font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffb200]" />
                Automated Pipelines
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
