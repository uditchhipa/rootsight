"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RiveAnimation } from "./RiveAnimation";

export function Stay22Footer() {
  return (
    <footer id="contact" className="relative bg-[#201c1c] text-[#f2e4d8] pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Call-To-Action Banner */}
        <div className="rounded-3xl bg-[#2a2626] border border-white/10 p-8 sm:p-14 mb-20 grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb200] bg-white/10 px-3.5 py-1 rounded-full">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to turn travel intent <br />
              <span className="font-serif italic font-normal text-[#786ddc]">into effortless revenue?</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl">
              Join thousands of creators, platforms, and media publishers monetizing travel with Stay22. Zero setup fees.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-start lg:items-end">
            <a
              href="https://another.stay22.com"
              target="_blank"
              rel="noreferrer"
              className="stay22-btn-primary !bg-[#786ddc] hover:!bg-[#6b5ecc] !text-white w-full sm:w-auto text-center shadow-lg"
            >
              <span>Create Free Account</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="mailto:contact@stay22.com"
              className="stay22-btn-secondary !border-white/20 !text-white hover:!bg-white/10 w-full sm:w-auto text-center"
            >
              Talk to an Specialist
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 py-12 border-t border-white/10 text-xs">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                stay<span className="text-[#786ddc]">22</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Affiliate monetization for creators, event publishers, and digital travel platforms.
            </p>
            <div className="text-[11px] font-mono text-white/40">
              Awwwards Nominee • Agency: MILL3
            </div>
          </div>

          {/* Products */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Products
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#products" className="hover:text-white transition-colors">Nova Link Engine</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Spark Itinerary Cards</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Lift Yield Optimizer</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Interactive Booking Maps</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Allez Short Links</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Solutions
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#solutions" className="hover:text-white transition-colors">For Travel Creators</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">For Media Publishers</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">For Event Organizers</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">For Ticketing Apps</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Interactive Rive Easter Egg Canvas */}
          <div className="space-y-3 flex flex-col items-start sm:items-end">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Interactive Rive Egg
            </h4>
            <div className="w-28 h-28 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden">
              <RiveAnimation
                src="/stay22/footer.riv"
                stateMachines="State Machine 1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Stay22. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
