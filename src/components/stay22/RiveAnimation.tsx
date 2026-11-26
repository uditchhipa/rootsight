"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

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
  const inputRef = useRef<any>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const calculateProgress = useCallback(() => {
    let progress = 0;
    const target = scrollTargetRef?.current;
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollableDistance = target.offsetHeight - window.innerHeight;
      if (scrollableDistance > 0) {
        const scrolled = -rect.top;
        progress = Math.max(0, Math.min(100, (scrolled / scrollableDistance) * 100));
      }
    } else {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        progress = Math.max(0, Math.min(100, (window.scrollY / maxScroll) * 100));
      }
    }
    return progress;
  }, [scrollTargetRef]);

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

  const getScrollInput = useCallback(() => {
    if (inputRef.current) return inputRef.current;
    if (!rive) return null;
    try {
      const smName = stateMachines || "State Machine 1";
      const inputs = rive.stateMachineInputs(smName);
      if (inputs && inputs.length > 0) {
        const found = inputs.find((i: any) => i.name === "ScrollProgress");
        if (found) {
          inputRef.current = found;
          return found;
        }
      }
    } catch {
      // Wasm might still be parsing
    }
    return null;
  }, [rive, stateMachines]);

  const updateScrub = useCallback(() => {
    if (!scrollScrub) return;
    const input = getScrollInput();
    if (input) {
      const progress = calculateProgress();
      input.value = progress;
      if (rive && !rive.isPlaying) {
        rive.play();
      }
    }
  }, [scrollScrub, getScrollInput, calculateProgress, rive]);

  useEffect(() => {
    if (!rive || !scrollScrub) return;

    const onScrollOrWheel = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        updateScrub();
      });
    };

    window.addEventListener("scroll", onScrollOrWheel, { passive: true });
    window.addEventListener("resize", onScrollOrWheel, { passive: true });
    window.addEventListener("wheel", onScrollOrWheel, { passive: true });
    window.addEventListener("touchmove", onScrollOrWheel, { passive: true });

    // Poll a few times initially to catch when Rive state machine is ready
    const timer = setInterval(() => {
      const input = getScrollInput();
      if (input) {
        updateScrub();
        clearInterval(timer);
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", onScrollOrWheel);
      window.removeEventListener("resize", onScrollOrWheel);
      window.removeEventListener("wheel", onScrollOrWheel);
      window.removeEventListener("touchmove", onScrollOrWheel);
      clearInterval(timer);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [rive, scrollScrub, updateScrub, getScrollInput]);

  if (!mounted) {
    return <div className={`bg-[#24133b] ${className}`} />;
  }

  return <RiveComponent className={className} />;
}
