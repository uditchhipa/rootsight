"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+/<>[]";

export function useScrambleText(targetText: string, durationMs = 700) {
  const [display, setDisplay] = useState(targetText);
  const reducedMotion = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  const trigger = useCallback(() => {
    if (reducedMotion) {
      setDisplay(targetText);
      return;
    }

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const start = performance.now();
    const length = targetText.length;

    const frame = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const revealedCount = Math.floor(progress * length);

      let out = "";
      for (let i = 0; i < length; i++) {
        const ch = targetText[i];
        if (ch === " " || ch === "\n") {
          out += ch;
        } else if (i < revealedCount) {
          out += ch;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplay(out);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        setDisplay(targetText);
      }
    };

    rafRef.current = requestAnimationFrame(frame);
  }, [targetText, durationMs, reducedMotion]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { display, trigger };
}
