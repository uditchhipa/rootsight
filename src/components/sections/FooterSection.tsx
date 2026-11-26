"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles, Heart } from "lucide-react";

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [amsterdamTime, setAmsterdamTime] = useState("");

  // Live Amsterdam time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/Amsterdam",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setAmsterdamTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#fcfbf6] text-[#171717] pt-24 pb-12 overflow-hidden border-t border-[#ecebe4] z-10">
      {/* Floating Decorative Organic Blobs (strictly size-constrained & background only) */}
      <div className="pointer-events-none absolute -top-6 -left-6 w-28 h-28 opacity-40 select-none z-0">
        <Image src="/ttm/blob-1.png" alt="Decorative Blob" width={112} height={112} className="w-full h-full object-contain" />
      </div>
      <div className="pointer-events-none absolute top-1/4 -right-6 w-32 h-32 opacity-35 select-none z-0">
        <Image src="/ttm/blob-2.png" alt="Decorative Blob" width={128} height={128} className="w-full h-full object-contain" />
      </div>
      <div className="pointer-events-none absolute -bottom-8 right-1/3 w-32 h-32 opacity-30 select-none z-0">
        <Image src="/ttm/blob-5.png" alt="Decorative Blob" width={128} height={128} className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Newsletter & Big Banner */}
        <div className="grid gap-12 lg:grid-cols-12 items-start pb-16 border-b border-[#e5e4dc]">
          {/* Left: Monumental Headline */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#171717]/60 bg-[#eeeade] px-3.5 py-1 rounded-full">
              Stay in motion
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#171717] tracking-tight leading-[1.02]">
              Subscribe to the TTM newsletter.
            </h2>
            <p className="text-base text-[#666660] max-w-lg leading-relaxed">
              Fresh 3D motion templates, shader techniques, and creative typography experiments delivered straight to your inbox every Thursday.
            </p>
          </div>

          {/* Right: Newsletter Input Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#e5e4dc] shadow-sm">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#9cd696]/20 border border-[#9cd696]/40 text-[#171717] text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#22721b]" />
                <span>You're in! Check your inbox for our curated drops.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#171717]">
                  Your Email Address
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="creative@studio.com"
                    className="flex-1 bg-[#fcfbf6] border border-[#d8d7cf] rounded-full px-4 py-2.5 text-xs text-[#171717] placeholder:text-[#999990] focus:outline-none focus:border-[#ecaf30]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#ecaf30] hover:bg-[#d99e24] text-[#171717] text-xs font-black uppercase tracking-wider transition-all shadow hover:scale-105 active:scale-95 shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="text-[11px] text-[#888880]">
                  Zero spam. Unsubscribe anytime with a single click.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Middle Navigation & Info Columns */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 py-12 border-b border-[#e5e4dc] text-xs">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-black text-xl text-[#171717]">TTM</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#171717]/50 bg-[#e7e5dc] px-2 py-0.5 rounded">
                SUPPLY
              </span>
            </div>
            <p className="text-[#666660] leading-relaxed">
              Templates That Move. A browser-native motion studio engineered for creators and forward-thinking studios.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#444440] bg-[#eeeade] px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#9cd696] animate-pulse" />
              <span>Amsterdam {amsterdamTime || "12:00:00"}</span>
            </div>
          </div>

          {/* Col 2: Templates Categories */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-[#171717] uppercase tracking-wider text-[11px]">
              Templates
            </h4>
            <ul className="space-y-1.5 text-[#666660]">
              <li><Link href="/studio?template=kinetic-torus" className="hover:text-[#171717] transition-colors">3D Objects & WebGL</Link></li>
              <li><Link href="/studio?template=cascade-carousel" className="hover:text-[#171717] transition-colors">Parallax Carousels</Link></li>
              <li><Link href="/studio?template=fly-through-type" className="hover:text-[#171717] transition-colors">Fly-Through Typography</Link></li>
              <li><Link href="/studio?template=cybernetic-grid" className="hover:text-[#171717] transition-colors">Cybernetic Grids</Link></li>
              <li><Link href="/studio?template=elastic-stacks" className="hover:text-[#171717] transition-colors">Elastic Stacks</Link></li>
            </ul>
          </div>

          {/* Col 3: Studio & Tech */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-[#171717] uppercase tracking-wider text-[11px]">
              Studio Engine
            </h4>
            <ul className="space-y-1.5 text-[#666660]">
              <li><Link href="/studio" className="hover:text-[#171717] transition-colors">Open TTM Studio</Link></li>
              <li><a href="#how-it-works" className="hover:text-[#171717] transition-colors">WebCodecs MP4 Export</a></li>
              <li><a href="#how-it-works" className="hover:text-[#171717] transition-colors">Three.js WebGL Core</a></li>
              <li><a href="#how-it-works" className="hover:text-[#171717] transition-colors">GSAP Timeline Scrubber</a></li>
              <li><a href="#pricing" className="hover:text-[#171717] transition-colors">Commercial Licensing</a></li>
            </ul>
          </div>

          {/* Col 4: Community & Creators */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-[#171717] uppercase tracking-wider text-[11px]">
              Community
            </h4>
            <ul className="space-y-1.5 text-[#666660]">
              <li><a href="https://twitter.com/meesverberne" target="_blank" rel="noreferrer" className="hover:text-[#171717] transition-colors">Mees Verberne</a></li>
              <li><a href="https://twitter.com/ronalddegroot" target="_blank" rel="noreferrer" className="hover:text-[#171717] transition-colors">Ronald de Groot</a></li>
              <li><a href="#about" className="hover:text-[#171717] transition-colors">Join 12,000+ Creators</a></li>
              <li><a href="#pricing" className="hover:text-[#171717] transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888880]">
          <div>
            © {new Date().getFullYear()} TTM — Templates That Move. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#terms" className="hover:text-[#171717] transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-[#171717] transition-colors">Privacy</a>
            <a href="#licensing" className="hover:text-[#171717] transition-colors">Licensing</a>
            <a href="#cookies" className="hover:text-[#171717] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
