"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";

const FAQS = [
  {
    q: "How does Stay22 integrate into my website or app?",
    a: "Integration takes less than 5 minutes. You can add a single asynchronous script tag to your header, use our WordPress plugin, or connect via REST API for custom programmatic routing.",
  },
  {
    q: "What inventory providers and OTAs does Stay22 connect to?",
    a: "Stay22 connects directly into Booking.com, Expedia, VRBO, Hotels.com, TripAdvisor, and direct hotel supplier feeds, providing global coverage across millions of accommodations.",
  },
  {
    q: "How does Stay22 protect user privacy and site performance?",
    a: "Stay22 is 100% cookieless and GDPR/CCPA compliant. Our lightweight scripts load asynchronously after your primary content and consume less than 15KB of bandwidth.",
  },
  {
    q: "When and how are affiliate commissions paid out?",
    a: "Commissions are aggregated into a single monthly payout via direct ACH, Wire Transfer, or PayPal in your preferred currency (USD, EUR, GBP, CAD) with clear transparent reporting.",
  },
];

export function Stay22Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#f2e4d8] border-b border-[#2a2626]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading + Live Stay22 FAQ Rive Animation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#786ddc] bg-white/60 px-4 py-1.5 rounded-full border border-[#786ddc]/20">
              Clear Answers
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#2a2626] tracking-tight leading-[1.05]">
              Frequently asked <br />
              <span className="font-serif italic font-normal text-[#786ddc]">questions.</span>
            </h2>
            <p className="text-base text-[#2a2626]/75">
              Everything you need to know about partnering with Stay22 and unlocking revenue from your travel traffic.
            </p>

            {/* Live Interactive Stay22 FAQ Rive Animation */}
            <div className="relative w-full max-w-[340px] aspect-square rounded-3xl bg-[#FAF4EC] border border-[#2a2626]/10 p-6 flex items-center justify-center">
              <RiveAnimation
                src="/stay22/faq.riv"
                stateMachines="State Machine 1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#FAF4EC] border border-[#2a2626]/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#2a2626] hover:text-[#786ddc] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2a2626]/60 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#786ddc]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-[#2a2626]/75 leading-relaxed border-t border-[#2a2626]/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
