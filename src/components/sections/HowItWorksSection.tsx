"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, UploadCloud, Sliders, Zap, CheckCircle2 } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      badgeColor: "#dcd0ff",
      icon: UploadCloud,
      title: "Drop it in.",
      desc: "Pick your template from our collection and drop your own brand assets, images, headlines, and colors right onto the live canvas.",
    },
    {
      step: "02",
      badgeColor: "#ecaf30",
      icon: Sliders,
      title: "Make it move.",
      desc: "Fine-tune 3D objects, lighting, cameras, text motion, and easing curves with interactive controls and real-time WebGL rendering.",
    },
    {
      step: "03",
      badgeColor: "#9cd696",
      icon: Zap,
      title: "Take it live.",
      desc: "Export high-resolution 60 FPS MP4 video directly in your browser using hardware-accelerated WebCodecs. Ready for Reels, TikTok, and web.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-[#171717] border-b border-[#262626]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ecaf30] bg-[#222222] border border-[#2d2d2d] px-4 py-1.5 rounded-full shadow-inner">
            This is how it works
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black text-[#f3f3ed] tracking-tight">
            From idea to post. In minutes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86867f]">
            Forget heavy render machines and complex timeline software. TTM brings production motion design into your browser.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="relative rounded-3xl bg-[#1e1e1e] border border-white/5 hover:border-white/20 p-8 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Step Pill */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="flex items-center justify-center w-12 h-12 rounded-2xl font-black text-lg shadow-md"
                      style={{
                        backgroundColor: st.badgeColor,
                        color: "#171717",
                      }}
                    >
                      {st.step}
                    </span>
                    <Icon className="w-6 h-6 text-white/40" />
                  </div>

                  <h3 className="text-2xl font-black text-[#f3f3ed] tracking-tight">
                    {st.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#86867f] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-white/50">
                  <CheckCircle2 className="w-4 h-4 text-[#9cd696]" />
                  <span>Browser native • 100% interactive</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
