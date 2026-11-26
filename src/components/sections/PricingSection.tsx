"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowUpRight, HelpCircle, ChevronDown } from "lucide-react";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Can I use exported videos for commercial client work?",
      a: "Yes! All Pro All-Access members receive an unlimited commercial license covering client projects, broadcast, social ads, and digital signage.",
    },
    {
      q: "Do I need After Effects or any desktop software?",
      a: "No. Everything runs 100% inside your web browser (Chrome, Safari, Edge, Firefox). The templates are rendered using WebGL (Three.js) and exported using WebCodecs / MP4-Muxer.",
    },
    {
      q: "What formats and frame rates can I export?",
      a: "You can export MP4 video in 30 FPS or 60 FPS at crystal-clear 1080p and 4K resolutions, tailored for 9:16 Stories/Reels, 4:5 Feed, 1:1 Square, and 16:9 Landscape.",
    },
    {
      q: "How often do you add new templates?",
      a: "We drop new curated motion templates every single week across 3D, carousels, typography fly-throughs, and kinetic grids.",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-[#171717] border-b border-[#262626]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ecaf30] bg-[#222222] border border-[#2d2d2d] px-4 py-1.5 rounded-full shadow-inner">
            Membership
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black text-[#f3f3ed] tracking-tight">
            One price, all templates. Endless possibilities.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86867f]">
            Unlimited access to our growing library. Export as much as you want in full HD/4K.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center gap-1.5 bg-[#202020] p-1.5 rounded-full border border-white/5 shadow-inner">
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingPeriod === "annual"
                  ? "bg-[#ecaf30] text-[#171717] shadow-md scale-105"
                  : "text-[#86867f] hover:text-[#f3f3ed]"
              }`}
            >
              Annual (Save 35%)
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-[#ecaf30] text-[#171717] shadow-md scale-105"
                  : "text-[#86867f] hover:text-[#f3f3ed]"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2 items-stretch">
          {/* Free Starter */}
          <div className="rounded-3xl bg-[#1e1e1e] border border-white/5 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                  Free Starter
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-white/70">
                  EXPLORE
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-[#f3f3ed]">$0</span>
                <span className="text-xs text-[#86867f]">/ forever</span>
              </div>
              <p className="mt-3 text-xs text-[#86867f] leading-relaxed">
                Test-drive our studio engine and try all templates with standard browser preview.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Access to all template previews",
                  "Studio editor with timeline controls",
                  "3D WebGL rotation and lighting",
                  "Community forum support",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-xs text-white/80">
                    <Check className="w-4 h-4 text-[#86867f] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/studio"
              className="mt-8 block text-center py-3 rounded-full bg-[#282828] hover:bg-[#333333] text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              Launch Studio Free
            </Link>
          </div>

          {/* Pro All-Access (Highlighted) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#242424] to-[#1a1a1a] border-2 border-[#ecaf30] p-8 shadow-2xl flex flex-col justify-between">
            <div className="absolute -top-3 right-8 bg-[#ecaf30] text-[#171717] px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ecaf30]">
                  Pro All-Access
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-[#f3f3ed]">
                  ${billingPeriod === "annual" ? "19" : "29"}
                </span>
                <span className="text-xs text-[#86867f]">/ month</span>
              </div>
              <p className="mt-3 text-xs text-[#86867f] leading-relaxed">
                {billingPeriod === "annual"
                  ? "Billed annually ($228/year). Unlimited exports, zero restrictions."
                  : "Billed monthly. Cancel anytime with one click."}
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Unlimited high-res 60 FPS MP4 browser exports",
                  "Full commercial license for client work",
                  "Access to all 100+ templates & weekly drops",
                  "Custom typography and media upload",
                  "No watermarks, no render queues",
                  "Hardware-accelerated WebCodecs encoding",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-xs text-white font-medium">
                    <Check className="w-4 h-4 text-[#ecaf30] shrink-0 stroke-[3]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/studio"
              className="mt-8 flex items-center justify-center gap-2 text-center py-3 rounded-full bg-[#ecaf30] hover:bg-[#ffd13b] text-[#171717] text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Get Pro All-Access</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-xl font-black text-center text-[#f3f3ed] mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#1e1e1e] border border-white/5 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-white hover:text-[#ecaf30] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/50 transition-transform ${
                        isOpen ? "rotate-180 text-[#ecaf30]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#86867f] leading-relaxed border-t border-white/5 pt-3">
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
