"use client";

import React from "react";
import { RiveAnimation } from "./RiveAnimation";

export function Stay22ValueProps() {
  const cards = [
    {
      title: "Human",
      tagline: "Designed for Trust",
      desc: "Built for genuine audience trust. Zero invasive redirects, dark patterns, or disruptive banners. Disappears seamlessly into your editorial content.",
      riveSrc: "/stay22/human.riv",
      accentBg: "#FAF4EC",
      borderColor: "#e5d4c3",
    },
    {
      title: "Lucrative",
      tagline: "Up to 4x Higher RPMs",
      desc: "Multi-inventory optimization across Booking.com, Expedia, VRBO, and direct hotels ensures your users find the best rates while maximizing payout.",
      riveSrc: "/stay22/lucrative.riv",
      accentBg: "#FAF4EC",
      borderColor: "#e5d4c3",
    },
    {
      title: "Effortless",
      tagline: "Drop-in Simplicity",
      desc: "One line of code. Automatic broken link healing, instant mobile optimization, and real-time commission tracking without ongoing developer maintenance.",
      riveSrc: "/stay22/effortless.riv",
      accentBg: "#FAF4EC",
      borderColor: "#e5d4c3",
    },
  ];

  return (
    <section id="why-stay22" className="py-24 md:py-32 bg-[#ead8ca] border-y border-[#2a2626]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#786ddc] bg-white/60 px-4 py-1.5 rounded-full border border-[#786ddc]/20">
            Why Stay22
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-black text-[#2a2626] tracking-tight leading-[1.05]">
            The <span className="font-serif italic font-normal text-[#786ddc]">monetization</span> partner.
          </h2>
          <p className="mt-4 text-base sm:text-xl text-[#2a2626]/75">
            Engineered to convert intent without sacrificing the user experience your audience loves.
          </p>
        </div>

        {/* 3 Column Cards with Live Rive Animations */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative rounded-3xl p-8 bg-[#fbf6f0] border border-[#2a2626]/10 hover:border-[#786ddc]/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Rive Animated Character / Icon Canvas */}
                <div className="relative w-full aspect-square max-h-56 rounded-2xl overflow-hidden mb-6 bg-[#f2e4d8]/40 border border-[#2a2626]/5 flex items-center justify-center">
                  <RiveAnimation
                    src={card.riveSrc}
                    stateMachines="State Machine 1"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#786ddc] mb-1">
                  {card.tagline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#2a2626] tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-[#2a2626]/75 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2a2626]/10 flex items-center justify-between text-xs font-bold text-[#2a2626]">
                <span>Active Protection</span>
                <span className="text-[#786ddc]">● Live Rive State</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
