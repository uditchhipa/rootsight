"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { RootsightLogo } from "./RootsightLogo";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      setDone(true);
      return;
    }

    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const mainSquare = svg.querySelector("#rs-main-square") as SVGRectElement | null;
    const cornerSquare = svg.querySelector("#rs-corner-square") as SVGRectElement | null;
    const overlapBlock = svg.querySelector("#rs-overlap-block") as SVGRectElement | null;
    const sqrtPath = svg.querySelector("#rs-sqrt-path") as SVGPathElement | null;
    const eyeLid = svg.querySelector("#rs-eye-lid") as SVGPathElement | null;
    const eyeIris = svg.querySelector("#rs-eye-iris") as SVGPathElement | null;
    const wordmark = svg.querySelector("#rs-wordmark") as SVGTextElement | null;

    const ctx = gsap.context(() => {
      if (mainSquare && cornerSquare) {
        const mainLen = mainSquare.getTotalLength();
        const cornerLen = cornerSquare.getTotalLength();

        gsap.set(mainSquare, {
          strokeDasharray: mainLen,
          strokeDashoffset: mainLen,
        });
        gsap.set(cornerSquare, {
          strokeDasharray: cornerLen,
          strokeDashoffset: cornerLen,
        });
      }

      gsap.set([overlapBlock, sqrtPath, wordmark], { opacity: 0 });
      gsap.set(eyeLid, { opacity: 0, scaleY: 0.1, transformOrigin: "50% 50%" });
      gsap.set(eyeIris, { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" });

      const tl = gsap.timeline({
        onComplete: () => {
          setDone(true);
        },
      });

      tl.to(mainSquare, {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power3.inOut",
      })
        .to(
          cornerSquare,
          {
            strokeDashoffset: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(overlapBlock, { opacity: 1, duration: 0.15 }, "-=0.15")
        .to(sqrtPath, { opacity: 1, duration: 0.2 }, "-=0.1")
        .to(
          eyeLid,
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.3,
            ease: "power3.out",
          },
          "-=0.05"
        )
        .to(
          eyeIris,
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
          },
          "-=0.15"
        )
        .to(wordmark, { opacity: 1, duration: 0.25 }, "-=0.1")
        .to(statusRef.current, { opacity: 0, duration: 0.2 }, "+=0.15")
        .to(container, {
          yPercent: -100,
          duration: 0.55,
          ease: "power4.inOut",
        });
    }, container);

    return () => ctx.revert();
  }, [reducedMotion]);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        <RootsightLogo
          ref={svgRef}
          size={130}
          showWordmark
          accentEye
          color="#0A0A0A"
          accentColor="#00C875"
        />
        <div
          ref={statusRef}
          className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#00C875]" />
          <span>ROOTSIGHT // INITIALIZING</span>
        </div>
      </div>
    </div>
  );
}
