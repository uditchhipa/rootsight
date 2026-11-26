"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit, Alignment } from "@rive-app/react-canvas";

const CREATOR_TICKER_ITEMS = [
  "IrelandBeforeYouDie",
  "The Local",
  "Practical Wanderlust",
  "The Savvy Backpacker",
  "Travel Lemming",
  "Oneika the Traveller",
  "A Broken Backpack",
  "The Planet D",
  "Earth Trekkers",
  "Nomadic Boys",
];

const PLATFORM_TICKER_ITEMS = [
  "Hearst",
  "TicketOne",
  "Bookaway",
  "ItaliaRail",
  "Sundial",
  "WeGo",
  "Omio",
  "FlixBus",
  "Trainline",
];

export function Stay22ValueProps() {
  const oneReasonRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLElement>(null);

  return (
    <div className="bg-[#f2e4d8] text-[#262222] relative w-full overflow-hidden">
      {/* ========================================================
          SECTION 1: Step through.
          ======================================================== */}
      <section id="step-through" className="py-20 md:py-28 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            Step through.
          </h2>

          <nav className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://hub.stay22.com/en/auth/signup"
              className="stay22-btn-yellow flex items-center gap-2 group shadow-lg hover:scale-105 transition-all"
            >
              <span>Start Monetizing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://www.stay22.com/book-a-demo"
              className="stay22-btn-primary flex items-center gap-2 group shadow-lg hover:scale-105 transition-all"
            >
              <span>Talk to our team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </nav>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: The monetization partner. & STACKED CARDS
          ======================================================== */}
      <section id="solutions" className="py-16 md:py-24 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10">
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
              monetization
            </em>{" "}
            partner.
          </h2>
          <p className="mt-5 text-lg sm:text-2xl text-[#262222]/80 max-w-2xl mx-auto font-medium">
            Giving time back and moving revenue forward.
          </p>
        </div>

        {/* STACKED CONTENT CARDS with Sticky Scroll and Running Tickers */}
        <div className="max-w-7xl mx-auto flex flex-col gap-12 relative">
          {/* Card 1: For ambitious creators (Yellow Card) */}
          <article
            id="creators"
            className="sticky top-24 rounded-[32px] md:rounded-[40px] bg-[#ffb200] text-[#2a2626] p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden grid lg:grid-cols-12 gap-8 items-center z-10"
            style={{ backgroundColor: "#ffb200" }}
          >
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-black/10 px-3.5 py-1.5 rounded-full">
                  Creators &amp; Publishers
                </span>
                <h3
                  className="font-heading text-3xl sm:text-5xl md:text-5xl font-normal leading-[1.05]"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  For ambitious creators who want to keep creating
                </h3>
                <p className="text-base sm:text-lg text-[#2a2626]/85 leading-relaxed font-medium">
                  Whether you run an award-winning travel blog, destination guides, or social newsletters, Stay22 turns your existing links into top-performing affiliate revenue with zero manual upkeep.
                </p>
              </div>

              {/* Running Horizontal Marquee Ticker 1 */}
              <div className="w-full overflow-hidden py-3 border-y border-black/10 my-4">
                <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
                  {[...CREATOR_TICKER_ITEMS, ...CREATOR_TICKER_ITEMS].map((name, i) => (
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
                  href="https://another.stay22.com/sign-up"
                  className="inline-flex items-center gap-2 bg-[#2a2626] text-[#f2e4d8] hover:bg-black px-7 py-3.5 rounded-full font-bold text-sm tracking-tight transition-all shadow-md hover:scale-105"
                >
                  <span>Explore for Creators</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Media: bike-women.jpg */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group border-2 border-black/5">
                <Image
                  src="/stay22/images/bike-women.jpg"
                  alt="Creators riding bicycles"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </article>

          {/* Card 2: For ambitious platforms (Dark/Violet Stacking Card) */}
          <article
            id="platforms"
            className="sticky top-28 rounded-[32px] md:rounded-[40px] bg-[#2a2626] text-[#f2e4d8] p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden grid lg:grid-cols-12 gap-8 items-center z-20"
            style={{ backgroundColor: "#2a2626", color: "#f2e4d8" }}
          >
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full order-2 lg:order-1">
              <div className="space-y-4">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-white/10 text-[#ffb200] px-3.5 py-1.5 rounded-full">
                  Platforms &amp; Transit
                </span>
                <h3
                  className="font-heading text-3xl sm:text-5xl md:text-5xl font-normal leading-[1.05] text-white"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  For travel platforms looking to optimize revenue
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-medium">
                  Connect accommodation booking options straight into your transit checkouts, event tickets, or flight itineraries. Drive double-digit incremental revenues without taking attention away from your core product.
                </p>
              </div>

              {/* Running Horizontal Marquee Ticker 2 */}
              <div className="w-full overflow-hidden py-3 border-y border-white/10 my-4">
                <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
                  {[...PLATFORM_TICKER_ITEMS, ...PLATFORM_TICKER_ITEMS].map((name, i) => (
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
                  href="https://another.stay22.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#ffb200] text-[#2a2626] hover:bg-[#ffa000] px-7 py-3.5 rounded-full font-bold text-sm tracking-tight transition-all shadow-md hover:scale-105"
                >
                  <span>Explore Platform</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Right Media: Platform_cie.jpg */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group border-2 border-white/10">
                <Image
                  src="/stay22/images/Platform_cie.jpg"
                  alt="Platform intelligence"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: One reason to join (Interactive onereason.riv)
          ======================================================== */}
      <section
        ref={oneReasonRef}
        className="pb-row-text-media-shape py-20 md:py-32 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10 bg-[#eadecc] relative"
      >
        <div className="max-w-5xl mx-auto text-center mb-12 space-y-4">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            One reason to join
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-[#262222]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect and the whole supplier network opens up. We pick the right one for your audience in real time. From intent to bookings to revenue.
          </p>

          <nav className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://hub.stay22.com/en/auth/signup"
              className="stay22-btn-yellow flex items-center gap-2 group shadow-md hover:scale-105 transition-all"
            >
              <span>Start monetizing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://www.stay22.com/book-a-demo"
              className="stay22-btn-primary flex items-center gap-2 group shadow-md hover:scale-105 transition-all"
            >
              <span>Talk to our team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </nav>
        </div>

        {/* Wide Interactive Rive Container: onereason.riv */}
        <div className="max-w-6xl mx-auto relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl bg-[#ffb200]/10 border border-black/5 aspect-[1333/760]">
          <RiveAnimation
            src="/stay22/onereason.riv"
            stateMachines="State Machine 1"
            fit={Fit.Contain}
            alignment={Alignment.Center}
            autoplay={true}
            className="w-full h-full"
          />
        </div>
      </section>

      {/* ========================================================
          SECTION 4: Three reasons to stay (human.riv, lucrative.riv, effortless.riv)
          ======================================================== */}
      <section
        ref={columnsRef}
        id="why-stay22"
        className="py-20 md:py-32 px-4 sm:px-8 lg:px-12 border-t border-[#262222]/10"
      >
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            Three reasons to stay
          </h2>
        </div>

        {/* 3 Column Feature Cards matching Stay22 official layout */}
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Column 1: Personal (human.riv) */}
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
                Personal
              </h3>
              <p className="text-base text-[#262222]/80 leading-relaxed font-medium">
                Real people, real response times, and the kind of support that makes you wonder why you ever waited.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262222]/10 flex items-center justify-between text-xs font-bold text-[#262222]/70">
              <span>Human Support</span>
              <span className="text-[#ffb200] font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffb200]" />
                Interactive Character
              </span>
            </div>
          </div>

          {/* Column 2: Lucrative (lucrative.riv) */}
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
                Lucrative
              </h3>
              <p className="text-base text-[#262222]/80 leading-relaxed font-medium">
                Real money. Even on a slow Tuesday. More ways to turn your traffic into revenue.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262222]/10 flex items-center justify-between text-xs font-bold text-[#262222]/70">
              <span>High RPMs</span>
              <span className="text-[#ffb200] font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffb200]" />
                Spinning Coins
              </span>
            </div>
          </div>

          {/* Column 3: Effortless (effortless.riv) */}
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
                Effortless
              </h3>
              <p className="text-base text-[#262222]/80 leading-relaxed font-medium">
                Set it up once. It keeps working, so you can get back to what you do best.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#262222]/10 flex items-center justify-between text-xs font-bold text-[#262222]/70">
              <span>Zero Maintenance</span>
              <span className="text-[#ffb200] font-extrabold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ffb200]" />
                Live Motion
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
