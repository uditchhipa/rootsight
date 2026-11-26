"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit } from "@rive-app/react-canvas";

export function Stay22ValueProps() {
  const [activeTab, setActiveTab] = useState<"creators" | "platforms">("creators");

  const cards = [
    {
      title: "Personal",
      tagline: "Designed for Trust",
      desc: "Built for genuine audience trust. Zero invasive redirects, intrusive popups, or disruptive banners. Disappears seamlessly into your editorial content.",
      riveSrc: "/stay22/human.riv",
    },
    {
      title: "Lucrative",
      tagline: "Up to 4x Higher RPMs",
      desc: "Multi-inventory optimization across Booking.com, Expedia, VRBO, and direct hotels ensures your users find the best rates while maximizing payout.",
      riveSrc: "/stay22/lucrative.riv",
    },
    {
      title: "Effortless",
      tagline: "Drop-in Simplicity",
      desc: "One line of code. Automatic broken link healing, instant mobile optimization, and real-time commission tracking without ongoing developer maintenance.",
      riveSrc: "/stay22/effortless.riv",
    },
  ];

  return (
    <div className="bg-[#f2e4d8] text-[#262222]">
      {/* SECTION: Step through. */}
      <section id="step-through" className="py-20 md:py-28 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            Step through.
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#creators"
              className="bg-[#ffb200] text-[#262222] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-[#ffa000] hover:scale-105 transition-all shadow-md flex items-center gap-2"
            >
              <span>For Creators</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#platforms"
              className="bg-[#262222] text-[#f2e4d8] font-bold text-sm px-7 py-3.5 rounded-full hover:bg-black hover:scale-105 transition-all shadow-md flex items-center gap-2"
            >
              <span>For Platforms</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: The monetization partner. */}
      <section id="solutions" className="py-16 md:py-24 px-6 md:px-12 border-t border-[#262222]/10">
        <div className="max-w-5xl mx-auto text-center mb-16">
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
          <p className="mt-6 text-xl sm:text-2xl text-[#262222]/80 max-w-2xl mx-auto font-medium">
            Giving time back and moving revenue forward.
          </p>
        </div>

        {/* STACKED CONTENT: Creators & Platforms */}
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Card 1: For ambitious creators */}
          <article
            id="creators"
            className="rounded-[32px] bg-[#ffb200] text-[#262222] p-8 md:p-14 overflow-hidden shadow-xl grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-6 space-y-6">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-black/10 px-3.5 py-1.5 rounded-full">
                Creators &amp; Publishers
              </span>
              <h3
                className="font-heading text-3xl sm:text-5xl font-normal leading-tight"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                For ambitious creators
              </h3>
              <p className="text-base sm:text-lg text-[#262222]/85 leading-relaxed">
                Whether you run an award-winning travel blog, destination guides, or social newsletters, Stay22 turns your existing links into top-performing affiliate revenue with zero manual upkeep.
              </p>

              <ul className="space-y-3 font-semibold text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" /> Instant link monetization without rewriting articles
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" /> Auto-replaces dead links with active high-paying inventory
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" /> Complete control over brand styling and behavior
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="https://another.stay22.com/sign-up"
                  className="bg-[#262222] text-[#f2e4d8] px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:bg-black transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <Image
                  src="/stay22/images/Balloon_02.png"
                  alt="Ambitious creators hot air balloon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </article>

          {/* Card 2: For intent-rich platforms */}
          <article
            id="platforms"
            className="rounded-[32px] bg-[#e4d4c5] text-[#262222] p-8 md:p-14 overflow-hidden shadow-xl grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-6 order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black/5">
                <Image
                  src="/stay22/images/bike-women.jpg"
                  alt="Intent-rich travel platforms"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-6 order-1 md:order-2 space-y-6">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-black/10 px-3.5 py-1.5 rounded-full">
                Ticketing &amp; Transit Platforms
              </span>
              <h3
                className="font-heading text-3xl sm:text-5xl font-normal leading-tight"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                For intent‑rich platforms
              </h3>
              <p className="text-base sm:text-lg text-[#262222]/85 leading-relaxed">
                Connect accommodation booking options straight into your transit checkouts, event tickets, or flight itineraries. Drive double-digit incremental revenues without taking attention away from your core product.
              </p>

              <ul className="space-y-3 font-semibold text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" /> High conversion native integrations (Map, Spark, Allez)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" /> Multi-currency, multi-language international coverage
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 stroke-[3]" /> Reliable enterprise API uptime and white-label options
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="#case-studies"
                  className="bg-[#262222] text-[#f2e4d8] px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:bg-black transition-colors"
                >
                  <span>Explore Platform</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION: One reason to join (Interactive Rive Shape) */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-t border-[#262222]/10 bg-[#eadecc]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            One reason to join
          </h2>
          <p className="mt-4 text-xl text-[#262222]/80 font-medium">
            Higher conversion, guaranteed payout, transparent performance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto aspect-[16/9] relative rounded-3xl overflow-hidden shadow-2xl bg-[#ffb200]/20 border border-black/5 flex items-center justify-center">
          <RiveAnimation
            src="/stay22/onereason.riv"
            stateMachines="State Machine 1"
            fit={Fit.Contain}
            className="w-full h-full"
          />
        </div>
      </section>

      {/* SECTION: Three reasons to stay */}
      <section id="why-stay22" className="py-20 md:py-32 px-6 md:px-12 border-t border-[#262222]/10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-[#262222]"
            style={{ fontFamily: "'Exposure', Georgia, serif" }}
          >
            Three reasons to stay
          </h2>
        </div>

        {/* 3 Column Cards with Live Rive Animations */}
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-[28px] p-8 bg-[#faf4ec] border border-[#262222]/10 hover:border-[#ffb200] transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Rive Animated Character / Icon Canvas */}
                <div className="relative w-full aspect-square max-h-56 rounded-2xl overflow-hidden mb-6 bg-[#f2e4d8]/50 border border-[#262222]/5 flex items-center justify-center">
                  <RiveAnimation
                    src={card.riveSrc}
                    stateMachines="State Machine 1"
                    fit={Fit.Contain}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#ffb200] mb-1">
                  {card.tagline}
                </div>
                <h3
                  className="font-heading text-3xl font-normal text-[#262222] tracking-tight"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-[#262222]/80 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#262222]/10 flex items-center justify-between text-xs font-bold text-[#262222]">
                <span>Active Protection</span>
                <span className="text-emerald-600 font-extrabold">● Live Rive Canvas</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Unfiltered Opinions (Testimonials) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#262222] text-[#f2e4d8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ffb200] mb-4">
            Unfiltered opinions
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote
                className="font-heading text-2xl sm:text-4xl font-normal leading-snug tracking-tight text-[#f2e4d8]"
                style={{ fontFamily: "'Exposure', Georgia, serif" }}
              >
                “Since joining Stay22 myself, I&apos;ve nearly 10x my affiliate income without having to put any more effort in. Wish I&apos;d joined sooner!”
              </blockquote>
              <p className="mt-6 text-sm font-bold text-[#ffb200]">
                Travel Publisher &amp; Content Creator
              </p>
            </div>

            <div className="border-l border-white/10 pl-8 space-y-6">
              <div>
                <div
                  className="font-heading text-5xl sm:text-6xl text-[#ffb200] font-normal"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  $1.5B+
                </div>
                <p className="text-sm text-white/70 mt-1 font-semibold">
                  Gross booking value generated for partners worldwide
                </p>
              </div>

              <div>
                <div
                  className="font-heading text-5xl sm:text-6xl text-[#ffb200] font-normal"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  10,000+
                </div>
                <p className="text-sm text-white/70 mt-1 font-semibold">
                  Publishers, bloggers, and ticketing platforms actively earning
                </p>
              </div>

              <div>
                <div
                  className="font-heading text-5xl sm:text-6xl text-[#ffb200] font-normal"
                  style={{ fontFamily: "'Exposure', Georgia, serif" }}
                >
                  10 years
                </div>
                <p className="text-sm text-white/70 mt-1 font-semibold">
                  Pioneering travel intent monetization with award-winning UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
