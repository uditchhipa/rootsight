"use client";

import React, { useEffect, useState } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface RiveAnimationProps {
  src: string;
  stateMachines?: string;
  animations?: string;
  autoplay?: boolean;
  className?: string;
  fit?: Fit;
}

export function RiveAnimation({
  src,
  stateMachines = "State Machine 1",
  animations,
  autoplay = true,
  className = "w-full h-full",
  fit = Fit.Contain,
}: RiveAnimationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { RiveComponent } = useRive({
    src,
    stateMachines: stateMachines ? stateMachines : undefined,
    animations: animations ? animations : undefined,
    autoplay,
    layout: new Layout({
      fit,
      alignment: Alignment.Center,
    }),
  });

  if (!mounted) {
    return <div className={`animate-pulse bg-[#e3d0bf]/30 rounded-2xl ${className}`} />;
  }

  return <RiveComponent className={className} />;
}
