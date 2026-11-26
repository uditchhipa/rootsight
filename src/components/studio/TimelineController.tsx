"use client";

import React, { useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Repeat,
  Volume2,
  Sliders,
  Scissors,
} from "lucide-react";

interface TimelineControllerProps {
  currentTime: number;
  duration: number;
  inPoint: number;
  outPoint: number;
  isPlaying: boolean;
  playbackSpeed: number;
  isLooping: boolean;
  onTimeChange: (time: number) => void;
  onPlayPauseToggle: () => void;
  onInPointChange: (time: number) => void;
  onOutPointChange: (time: number) => void;
  onLoopToggle: () => void;
  onSpeedChange: (speed: number) => void;
}

export function TimelineController({
  currentTime,
  duration,
  inPoint,
  outPoint,
  isPlaying,
  playbackSpeed,
  isLooping,
  onTimeChange,
  onPlayPauseToggle,
  onInPointChange,
  onOutPointChange,
  onLoopToggle,
  onSpeedChange,
}: TimelineControllerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  // Keyboard shortcut: Spacebar to Play/Pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        onPlayPauseToggle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPlayPauseToggle]);

  // Format seconds to mm:ss:ms timecode
  const formatTimecode = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const milliseconds = Math.floor((secs % 1) * 100);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  const handleTrackPointerDown = (e: React.PointerEvent) => {
    if (!trackRef.current) return;
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    seekToClientX(e.clientX);
  };

  const handleTrackPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    seekToClientX(e.clientX);
  };

  const handleTrackPointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const seekToClientX = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    onTimeChange(ratio * duration);
  };

  // Percent positions
  const playheadPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const inPct = duration > 0 ? (inPoint / duration) * 100 : 0;
  const outPct = duration > 0 ? (outPoint / duration) * 100 : 100;

  // Ruler tick marks (e.g. 0s, 1s, 2s, 3s...)
  const numSeconds = Math.ceil(duration);
  const ticks = Array.from({ length: numSeconds + 1 }, (_, i) => i);

  return (
    <div className="w-full bg-[#1e1e1e] border-t border-[#2a2a2a] px-4 py-3 select-none">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
        {/* Playback Transport Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onTimeChange(inPoint)}
            title="Jump to In-point"
            className="p-1.5 rounded-lg bg-[#282828] hover:bg-[#333333] text-white/80 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onPlayPauseToggle}
            title={isPlaying ? "Pause (Space)" : "Play (Space)"}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f3f3ed] text-[#171717] hover:scale-105 active:scale-95 transition-all shadow-md font-bold"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={() => onTimeChange(outPoint)}
            title="Jump to Out-point"
            className="p-1.5 rounded-lg bg-[#282828] hover:bg-[#333333] text-white/80 hover:text-white transition-colors"
          >
            <FastForward className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onLoopToggle}
            title="Loop toggle"
            className={`p-1.5 rounded-lg transition-colors ${
              isLooping
                ? "bg-[#ecaf30]/20 text-[#ecaf30] border border-[#ecaf30]/40"
                : "bg-[#282828] text-white/50 hover:text-white/80"
            }`}
          >
            <Repeat className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Timecode Display */}
        <div className="flex items-center gap-2 font-mono text-xs bg-[#141414] px-3 py-1.5 rounded-lg border border-white/5">
          <span className="text-white font-bold">{formatTimecode(currentTime)}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/50">{formatTimecode(duration)}</span>
        </div>

        {/* In / Out Markers & Playback Speed */}
        <div className="flex items-center gap-3">
          {/* In / Out Badges */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/60 bg-[#282828] px-2.5 py-1 rounded-md">
            <span>In: {inPoint.toFixed(1)}s</span>
            <span className="text-white/20">|</span>
            <span>Out: {outPoint.toFixed(1)}s</span>
          </div>

          {/* Speed Selector */}
          <div className="flex items-center rounded-md bg-[#282828] p-0.5 text-[11px] font-medium">
            {[0.5, 1.0, 1.5, 2.0].map((s) => (
              <button
                key={s}
                onClick={() => onSpeedChange(s)}
                className={`px-2 py-0.5 rounded transition-colors ${
                  playbackSpeed === s
                    ? "bg-[#f3f3ed] text-[#171717] font-bold shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Scrubber Track */}
      <div className="relative pt-2 pb-1">
        {/* Ruler Tick Marks */}
        <div className="relative h-4 w-full flex justify-between text-[9px] font-mono text-white/30 px-1 pointer-events-none">
          {ticks.map((t) => (
            <div key={t} className="flex flex-col items-center">
              <div className="w-[1px] h-1.5 bg-white/20" />
              <span>{t}s</span>
            </div>
          ))}
        </div>

        {/* Track Bar */}
        <div
          ref={trackRef}
          onPointerDown={handleTrackPointerDown}
          onPointerMove={handleTrackPointerMove}
          onPointerUp={handleTrackPointerUp}
          className="relative h-8 w-full bg-[#141414] rounded-lg cursor-pointer overflow-hidden border border-white/5 shadow-inner"
        >
          {/* Active Work Area (between In and Out) */}
          <div
            className="absolute top-0 bottom-0 bg-[#ecaf30]/15 border-x border-[#ecaf30]/60"
            style={{
              left: `${inPct}%`,
              width: `${outPct - inPct}%`,
            }}
          >
            {/* Visual keyframe bars */}
            <div className="absolute left-2 top-2 bottom-2 w-16 bg-[#dcd0ff]/20 rounded text-[9px] text-[#dcd0ff] font-mono flex items-center px-1">
              Intro
            </div>
            <div className="absolute right-2 top-2 bottom-2 w-16 bg-[#9cd696]/20 rounded text-[9px] text-[#9cd696] font-mono flex items-center justify-end px-1">
              Outro
            </div>
          </div>

          {/* Current Progress Fill */}
          <div
            className="absolute top-0 bottom-0 left-0 bg-white/10 pointer-events-none transition-all duration-75"
            style={{ width: `${playheadPct}%` }}
          />

          {/* Red Playhead Line & Thumb */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#ecaf30] pointer-events-none z-20 shadow-[0_0_8px_rgba(236,175,48,0.8)]"
            style={{ left: `${playheadPct}%` }}
          >
            <div className="absolute -top-1 -translate-x-1/2 w-3 h-3 bg-[#ecaf30] rounded-full shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
