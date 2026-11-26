"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Fit, Alignment } from "@rive-app/react-canvas";

const OFFICIAL_FAQS = [
  {
    q: "What is Stay22?",
    a: "Stay22 is an intent monetization platform that helps travel creators and intent-rich platforms earn from the trips their audience is already planning. When someone reads a destination guide, checks a forecast, searches a train, or buys a ticket, Stay22 connects that moment to a relevant place to stay from major travel suppliers, and you earn on the bookings that follow.",
  },
  {
    q: "How does Stay22 work?",
    a: "Stay22 works by detecting travel intent across your site or app and automatically matching it with high-converting accommodation options from major OTAs like Booking.com, Expedia, and VRBO. A single line of code or script installation activates the network across all your existing content.",
  },
  {
    q: "Is Stay22 free to use?",
    a: "Yes, Stay22 is 100% free to join with zero upfront costs, subscription fees, or minimum traffic requirements. We share in the revenue generated from completed bookings.",
  },
  {
    q: "Is Stay22 legit?",
    a: "Stay22 has been powering travel revenue for over 10 years, managing over $1.5 Billion in annual bookings across 10,000+ active publishers and platforms including major enterprises like Hearst, TicketOne, and Bookaway.",
  },
  {
    q: "Who is Stay22 for?",
    a: "Stay22 is built for two primary audiences: travel bloggers & content creators who produce destination guides, and intent-rich digital platforms such as ticketing agencies, transit apps, and weather portals.",
  },
  {
    q: "Can small blogs and websites use Stay22?",
    a: "Absolutely. Whether you receive 5,000 monthly visitors or 5,000,000, Stay22 automatically optimizes your links and yields higher payouts than traditional affiliate networks from day one.",
  },
  {
    q: "Which travel suppliers does Stay22 work with?",
    a: "We work directly with all major global inventory networks including Booking.com, Expedia, VRBO, Hotels.com, TripAdvisor, and direct hotel supplier feeds, ensuring your readers find the best rate anywhere in the world.",
  },
  {
    q: "Does Stay22 replace my existing affiliate programs?",
    a: "Stay22 can run alongside your existing affiliate programs or replace them entirely. Our smart routing algorithm automatically selects the supplier with the highest probability of conversion and payout.",
  },
  {
    q: "How do I get paid by Stay22?",
    a: "Commissions are paid monthly via direct bank transfer (ACH / Wire) or PayPal in USD, EUR, GBP, CAD, or AUD, backed by transparent real-time analytics in your partner dashboard.",
  },
  {
    q: "How do I update my payment information?",
    a: "You can update your payout preferences, banking details, and tax documentation anytime directly within the Stay22 Partner Hub settings under 'Payout Preferences'.",
  },
  {
    q: "What happens if I stop using Stay22?",
    a: "There are no lock-in contracts or penalties. You can remove our snippet or scripts at any time, and any pending commissions accrued prior to removal will be paid out as scheduled.",
  },
  {
    q: "Why is it called Stay22?",
    a: "The 'Stay' represents accommodation and travel hospitality, while '22' reflects our founding origins and mission to connect two sides of the travel ecosystem: audience attention and supplier revenue.",
  },
  {
    q: "Who founded Stay22, and where is it based?",
    a: "Stay22 was founded in Montreal, Canada by Andrew dependencies and a passionate team of travel tech engineers, and now operates globally across North America, Europe, and Asia.",
  },
];

export function Stay22Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#f2e4d8] border-b border-[#262222]/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Heading + Live FAQ Rive Character */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#262222]/60">
              Clear Answers
            </span>
            <h2
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-[#262222] tracking-tight leading-[1.05]"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              Questions we hear a lot.
            </h2>
            <p className="text-base text-[#262222]/75 font-medium leading-relaxed max-w-md">
              Everything you need to know about partnering with Stay22, setting up integrations, and maximizing travel income.
            </p>

            {/* Live Interactive Stay22 FAQ Rive Animation (faq.riv) */}
            <div className="w-full max-w-[320px] aspect-[607/622] rounded-[32px] bg-[#faf4ec] border border-[#262222]/10 p-6 flex items-center justify-center shadow-md relative overflow-hidden">
              <RiveAnimation
                src="/stay22/faq.riv"
                stateMachines="State Machine 1"
                fit={Fit.Contain}
                alignment={Alignment.Center}
                autoplay={true}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: 13 Accordion Questions */}
          <div className="lg:col-span-7 flex flex-col gap-3 pt-2">
            {OFFICIAL_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#faf4ec] border border-[#262222]/10 overflow-hidden transition-all duration-300 shadow-sm hover:border-[#ffb200]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#262222] hover:text-[#ffb200] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 text-[#262222]">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#262222]/85 leading-relaxed border-t border-black/5 pt-4 font-medium animate-in fade-in slide-in-from-top-1 duration-200">
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
