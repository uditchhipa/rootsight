"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-number");
      counters.forEach((el) => {
        const target = Number(el.dataset.target || 0);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString("en-US");
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="bg-white py-24 md:py-28 border-b border-black/[0.08]"
    >
      <div className="mx-auto max-w-[1520px] px-6 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-black/[0.12] pl-6"
            >
              <div className="flex items-baseline gap-1 font-display text-4xl font-extrabold text-black sm:text-5xl">
                <span className="stat-number" data-target={stat.value}>
                  {reducedMotion ? stat.value.toLocaleString("en-US") : "0"}
                </span>
                {stat.suffix && (
                  <span className="text-[#00C875]">{stat.suffix}</span>
                )}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-zinc-900">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-zinc-500">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
