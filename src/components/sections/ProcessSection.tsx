"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".process-card", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-[#f8f8f8] py-28 md:py-36 border-b border-[#ededed]"
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7a7a7a]">
            Methodology // Execution Framework
          </span>
          <h2 className="mt-2 font-extrabold uppercase tracking-[-0.03em] text-[#222222] text-4xl sm:text-5xl">
            HOW WE WORK
          </h2>
        </div>

        <div className="relative mb-8 hidden h-px w-full bg-[#ededed] lg:block">
          <div
            ref={lineRef}
            className="h-px w-full bg-gradient-to-r from-[#222222] via-[#a7a7a7] to-transparent"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="process-card rounded-[20px] border border-[#ededed] bg-[#ffffff] p-8 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-black text-3xl text-[#222222]">
                  {item.step}
                </span>
                <span className="rounded bg-[#f8f8f8] px-2.5 py-0.5 font-mono text-[10px] uppercase text-[#7a7a7a] border border-[#ededed]">
                  {item.duration}
                </span>
              </div>

              <h3 className="mt-6 font-bold uppercase tracking-[-0.01em] text-[#222222] text-lg">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#555555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
