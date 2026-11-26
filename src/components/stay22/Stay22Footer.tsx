"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";
import { Stay22Emblem } from "./Stay22Emblem";
import { Fit } from "@rive-app/react-canvas";

export function Stay22Footer() {
  return (
    <footer id="contact" className="relative bg-[#201c1c] text-[#f2e4d8] pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Call-To-Action Banner */}
        <div className="rounded-[36px] bg-[#2a2626] border border-white/10 p-8 sm:p-14 mb-20 grid gap-8 lg:grid-cols-12 items-center shadow-2xl">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb200] bg-white/10 px-3.5 py-1.5 rounded-full">
              Get Started Today
            </span>
            <h2
              className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Exposure', Georgia, serif" }}
            >
              What you’ve built <br />
              <em
                className="font-serif italic font-normal text-[#ffb200]"
                style={{ fontFamily: "'Exposure', Georgia, serif", fontStyle: "italic" }}
              >
                can take you further.
              </em>
            </h2>
            <p className="text-base text-white/75 max-w-xl font-medium leading-relaxed">
              Join thousands of creators, platforms, and media publishers monetizing travel with Stay22. Zero setup fees, instant deployment.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
            <a
              href="https://another.stay22.com/sign-up"
              target="_blank"
              rel="noreferrer"
              className="bg-[#ffb200] text-[#262222] hover:bg-[#ffa000] px-7 py-3.5 rounded-full font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
            >
              <span>Create Free Account</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a
              href="mailto:contact@stay22.com"
              className="px-7 py-3.5 rounded-full font-bold text-sm tracking-tight border border-white/20 text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Talk to a Specialist
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 py-12 border-t border-white/10 text-xs">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#ffb200] text-[#262222] flex items-center justify-center shadow-md">
                <Stay22Emblem className="w-4 h-4 text-[#262222]" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                stay22
              </span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs font-medium">
              Affiliate monetization for creators, event publishers, and digital travel platforms.
            </p>
            <div className="text-[11px] font-mono text-white/40">
              Awwwards Nominee • Design &amp; Dev by MILL3
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Products
            </h4>
            <ul className="space-y-2 text-white/70 font-medium">
              <li><a href="#products" className="hover:text-[#ffb200] transition-colors">Nova Link Engine</a></li>
              <li><a href="#products" className="hover:text-[#ffb200] transition-colors">Spark Itinerary Cards</a></li>
              <li><a href="#products" className="hover:text-[#ffb200] transition-colors">Lift Yield Optimizer</a></li>
              <li><a href="#products" className="hover:text-[#ffb200] transition-colors">Interactive Booking Maps</a></li>
              <li><a href="#products" className="hover:text-[#ffb200] transition-colors">Loop Retention</a></li>
              <li><a href="#products" className="hover:text-[#ffb200] transition-colors">Allez Short Links</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Solutions
            </h4>
            <ul className="space-y-2 text-white/70 font-medium">
              <li><a href="#solutions" className="hover:text-[#ffb200] transition-colors">For Travel Creators</a></li>
              <li><a href="#solutions" className="hover:text-[#ffb200] transition-colors">For Media Publishers</a></li>
              <li><a href="#solutions" className="hover:text-[#ffb200] transition-colors">For Event Organizers</a></li>
              <li><a href="#solutions" className="hover:text-[#ffb200] transition-colors">For Ticketing Apps</a></li>
              <li><a href="#case-studies" className="hover:text-[#ffb200] transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Interactive Rive Easter Egg Canvas */}
          <div className="space-y-3 flex flex-col items-start sm:items-end">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Interactive Rive Egg
            </h4>
            <div className="w-28 h-28 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-inner">
              <RiveAnimation
                src="/stay22/footer.riv"
                stateMachines="State Machine 1"
                fit={Fit.Contain}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Stay22 Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://another.stay22.com" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://another.stay22.com" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://another.stay22.com" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
