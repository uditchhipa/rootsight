"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { ASPECT_RATIOS } from "@/data/ttmContent";
import ttmVideos from "@/data/ttmVideos.json";

const AUDIENCE_ROLES = [
  "Designers",
  "Content Creators",
  "Marketers",
  "Founders",
  "Developers",
  "You",
];

type AspectRatioKey = keyof typeof ttmVideos;

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedRatio, setSelectedRatio] = useState<AspectRatioKey>("9:16");
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Audience ticker rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % AUDIENCE_ROLES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // When aspect ratio changes, reset video index and force play
  useEffect(() => {
    setVideoIndex(0);
  }, [selectedRatio]);

  const activeVideos = ttmVideos[selectedRatio] || ttmVideos["9:16"];
  const currentVideoSrc = activeVideos[videoIndex] || activeVideos[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideoSrc]);

  // Determine aspect frame classes
  const getAspectClass = (ratio: string) => {
    switch (ratio) {
      case "9:16":
        return "w-[270px] sm:w-[310px] aspect-[9/16]";
      case "3:4":
        return "w-[290px] sm:w-[340px] aspect-[3/4]";
      case "4:5":
        return "w-[300px] sm:w-[360px] aspect-[4/5]";
      case "1:1":
        return "w-[310px] sm:w-[370px] aspect-square";
      case "4:3":
        return "w-[360px] sm:w-[440px] aspect-[4/3]";
      case "16:9":
        return "w-[380px] sm:w-[520px] aspect-video";
      default:
        return "w-[270px] sm:w-[310px] aspect-[9/16]";
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-[#171717] border-b border-[#262626]"
    >
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#dcd0ff]/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[450px] w-[450px] rounded-full bg-[#ecaf30]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow with Animated Ticker */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#202020] border border-[#2d2d2d] px-4 py-1.5 text-xs font-medium text-[#86867f] shadow-inner mb-6">
            <span>Pre-built motion templates for</span>
            <span className="inline-block font-bold text-[#ecaf30] min-w-[120px] text-left transition-all duration-300">
              {AUDIENCE_ROLES[roleIndex]}
            </span>
          </div>

          {/* Monumental Headline in Poppins */}
          <h1 className="max-w-5xl text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-[-0.03em] text-[#f3f3ed] leading-[0.98]">
            Templates<br />
            <span className="text-[#ecaf30]">that move.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#86867f] leading-relaxed font-normal">
            Change your output in seconds. A growing library of pre-built, animated social slides that give you the head start you need.
          </p>

          {/* Aspect Ratio Switcher Pills */}
          <div className="mt-8 flex flex-col items-center gap-2.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#86867f]">
              Canvas size
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#202020] rounded-full border border-[#2d2d2d] shadow-inner">
              {ASPECT_RATIOS.map((ar) => (
                <button
                  key={ar.label}
                  onClick={() => setSelectedRatio(ar.label as AspectRatioKey)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedRatio === ar.label
                      ? "bg-[#ecaf30] text-[#171717] shadow-md scale-105"
                      : "text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#2c2c2c]"
                  }`}
                >
                  {ar.label}
                </button>
              ))}
            </div>
          </div>

          {/* Center Interactive Motion Video Frame */}
          <div className="mt-10 flex flex-col items-center w-full">
            <div
              className={`relative ${getAspectClass(
                selectedRatio
              )} max-h-[540px] rounded-3xl bg-[#141414] border-2 border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group flex flex-col justify-between p-5 sm:p-6`}
            >
              {/* Actual High-End Motion Loop Video */}
              <video
                ref={videoRef}
                key={currentVideoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                src={currentVideoSrc}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Gradient Scrim for Top & Bottom readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

              {/* Card Top: Tags & Aspect ratio badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#ecaf30] text-[#171717] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow">
                  {selectedRatio === "9:16"
                    ? "Stories & Reels"
                    : selectedRatio === "4:5"
                    ? "Feed Portrait"
                    : selectedRatio === "1:1"
                    ? "Square Feed"
                    : "Widescreen"}{" "}
                  · {selectedRatio}
                </span>

                {/* Template slide dots (01, 02, 03) */}
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                  {activeVideos.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setVideoIndex(i);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        videoIndex === i
                          ? "w-5 bg-[#ecaf30]"
                          : "w-2 bg-white/40 hover:bg-white/80"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Bottom: Content & Launch Studio Pill */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-left">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                      TTM Supply Drop #{videoIndex + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-md">
                      TEMPLATES THAT MOVE
                    </h3>
                  </div>

                  {/* Previous / Next Slide buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        setVideoIndex(
                          (prev) => (prev - 1 + activeVideos.length) % activeVideos.length
                        )
                      }
                      className="p-1.5 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white transition-colors border border-white/10"
                      aria-label="Previous template"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() =>
                        setVideoIndex((prev) => (prev + 1) % activeVideos.length)
                      }
                      className="p-1.5 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white transition-colors border border-white/10"
                      aria-label="Next template"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <Link
                  href={`/studio`}
                  className="w-full flex items-center justify-center gap-2 bg-[#f3f3ed] hover:bg-white text-[#171717] py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-[#ecaf30] text-[#ecaf30]" />
                  <span>Open in Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
