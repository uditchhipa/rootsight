"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit } from "@rive-app/react-canvas";

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
  {
    q: "Can I customize the look and feel of the integration?",
    a: "Yes. From fonts and colors to pins and card styles, everything can be white-labeled to blend seamlessly into your existing brand identity.",
  },
];

export function Stay22Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#f2e4d8] border-b border-[#262222]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading + Live Stay22 FAQ Rive Animation */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
              Clear Answers
            </p>
            <h2
              className="font-heading text-4xl sm:text-6xl font-normal text-[#262222] tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              Questions we{" "}
              <em
                className="font-serif italic font-normal text-[#262222]"
                style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
              >
                hear a lot.
              </em>
            </h2>
            <p className="text-base text-[#262222]/75 font-medium">
              Everything you need to know about partnering with Stay22 and unlocking revenue from your travel traffic.
            </p>

            {/* Live Interactive Stay22 FAQ Rive Animation */}
            <div className="relative w-full max-w-[340px] aspect-square rounded-3xl bg-[#FAF4EC] border border-[#262222]/10 p-6 flex items-center justify-center shadow-md">
              <RiveAnimation
                src="/stay22/faq.riv"
                stateMachines="State Machine 1"
                fit={Fit.Contain}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4 pt-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#FAF4EC] border border-[#262222]/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#262222] hover:text-[#ffb200] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#262222]/60 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#262222]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-[#262222]/80 leading-relaxed border-t border-[#262222]/5 pt-4 font-medium">
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
