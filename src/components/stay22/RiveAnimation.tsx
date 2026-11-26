"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface RiveAnimationProps {
  src: string;
  stateMachines?: string;
  animations?: string;
  autoplay?: boolean;
  className?: string;
  fit?: Fit;
  alignment?: Alignment;
  scrollScrub?: boolean;
  scrollTargetRef?: React.RefObject<HTMLElement | null>;
}

export function RiveAnimation({
  src,
  stateMachines = "State Machine 1",
  animations,
  autoplay = true,
  className = "w-full h-full",
  fit = Fit.Cover,
  alignment = Alignment.TopCenter,
  scrollScrub = false,
  scrollTargetRef,
}: RiveAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines: stateMachines || undefined,
    animations: animations || undefined,
    autoplay,
    layout: new Layout({
      fit,
      alignment,
    }),
  });

  const scrollProgressInput = useStateMachineInput(
    rive,
    stateMachines || "State Machine 1",
    "ScrollProgress"
  );

  useEffect(() => {
    if (!scrollScrub || !scrollProgressInput) return;

    const handleScroll = () => {
      const target = scrollTargetRef?.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress from when target enters to when it leaves
        const totalDistance = rect.height;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(100, (scrolled / totalDistance) * 100));
        scrollProgressInput.value = progress;
      } else {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = window.innerHeight;
        const progress = Math.max(0, Math.min(100, (scrollTop / maxScroll) * 100));
        scrollProgressInput.value = progress;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollScrub, scrollProgressInput, scrollTargetRef]);

  if (!mounted) {
    return <div className={`bg-[#2b1842] ${className}`} />;
  }

  return <RiveComponent className={className} />;
}
