"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Share2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Video,
  Ratio,
} from "lucide-react";
import confetti from "canvas-confetti";
import { TTM_TEMPLATES, ASPECT_RATIOS, TTMTemplate } from "@/data/ttmContent";
import { StudioWebGLCanvas } from "@/components/studio/StudioWebGLCanvas";
import { TimelineController } from "@/components/studio/TimelineController";
import { TemplateInspector } from "@/components/studio/TemplateInspector";
import { exportCanvasToMP4 } from "@/components/studio/VideoExporter";

function StudioContent() {
  const searchParams = useSearchParams();
  const initialTemplateId = searchParams.get("template") || "kinetic-torus";

  // Active template state
  const [template, setTemplate] = useState<TTMTemplate>(() => {
    const found = TTM_TEMPLATES.find((t) => t.id === initialTemplateId);
    return found || TTM_TEMPLATES[0];
  });

  // Canvas aspect ratio
  const [aspectRatio, setAspectRatio] = useState<string>(template.aspectRatio || "9:16");

  // Editable template properties
  const [headlineText, setHeadlineText] = useState(template.defaultText.headline);
  const [subheadText, setSubheadText] = useState(template.defaultText.subhead);
  const [tagText, setTagText] = useState(template.defaultText.tag);
  const [wireframe, setWireframe] = useState(false);
  const [accentColor, setAccentColor] = useState(template.accentColor);
  const [bgColor, setBgColor] = useState("#171717");
  const [showSafeZones, setShowSafeZones] = useState(false);

  // Timeline & Playback state
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [inPoint, setInPoint] = useState(0);
  const [outPoint, setOutPoint] = useState(template.duration);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [isLooping, setIsLooping] = useState(true);
  const [fps, setFps] = useState<30 | 60>(30);

  // Export State
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [exportStatusText, setExportStatusText] = useState("");
  const canvasElementRef = useRef<HTMLCanvasElement | null>(null);

  // Synchronize when query param or template changes
  useEffect(() => {
    const tmpl = TTM_TEMPLATES.find((t) => t.id === initialTemplateId);
    if (tmpl) {
      setTemplate(tmpl);
      setAspectRatio(tmpl.aspectRatio);
      setHeadlineText(tmpl.defaultText.headline);
      setSubheadText(tmpl.defaultText.subhead);
      setTagText(tmpl.defaultText.tag);
      setAccentColor(tmpl.accentColor);
      setOutPoint(tmpl.duration);
      setCurrentTime(0);
    }
  }, [initialTemplateId]);

  // Animation Playhead loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const loop = (timestamp: number) => {
      const deltaSeconds = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (isPlaying && !isExporting) {
        setCurrentTime((prevTime) => {
          const next = prevTime + deltaSeconds * playbackSpeed;
          if (next >= outPoint) {
            return isLooping ? inPoint : outPoint;
          }
          return next;
        });
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, isExporting, playbackSpeed, inPoint, outPoint, isLooping]);

  // Handle Export MP4
  const handleExport = async () => {
    if (!canvasElementRef.current) return;
    setIsPlaying(false);
    setIsExporting(true);
    setExportProgress(0.01);
    setExportStatusText("Initializing WebCodecs engine...");

    const exportDuration = Math.max(1, outPoint - inPoint);

    try {
      await exportCanvasToMP4({
        canvas: canvasElementRef.current,
        duration: exportDuration,
        fps,
        filename: `ttm-${template.id}-${aspectRatio.replace(":", "x")}.mp4`,
        onProgress: (prog, status) => {
          setExportProgress(prog);
          setExportStatusText(status);
        },
        renderFrameAtTime: (timeOffset) => {
          setCurrentTime(inPoint + timeOffset);
        },
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error("Export error:", err);
      alert("Export failed: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setIsExporting(false);
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#141414] text-[#f3f3ed] font-sans antialiased">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-4 py-2.5 bg-[#1b1b1b] border-b border-[#2a2a2a] shrink-0 z-30">
        {/* Left: Back Link & Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors bg-[#242424] hover:bg-[#2c2c2c] px-3 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Templates</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-black text-sm tracking-tighter text-[#ecaf30]">TTM</span>
            <span className="text-white/30 font-light">/</span>
            <span className="text-xs font-bold text-white tracking-wide">
              {template.title}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white/60">
              STUDIO APP
            </span>
          </div>
        </div>

        {/* Center: Aspect Ratio Selector Pills */}
        <div className="flex items-center gap-1 bg-[#222222] p-1 rounded-full border border-white/5">
          {ASPECT_RATIOS.map((ar) => (
            <button
              key={ar.label}
              onClick={() => setAspectRatio(ar.label)}
              title={`${ar.label} (${ar.name})`}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                aspectRatio === ar.label
                  ? "bg-[#f3f3ed] text-[#171717] shadow-sm scale-105"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {ar.label}
            </button>
          ))}
        </div>

        {/* Right: FPS & Export MP4 */}
        <div className="flex items-center gap-3">
          {/* Framerate selector */}
          <div className="hidden sm:flex items-center rounded-lg bg-[#242424] p-0.5 text-xs font-mono">
            {[30, 60].map((f) => (
              <button
                key={f}
                onClick={() => setFps(f as 30 | 60)}
                className={`px-2 py-1 rounded transition-colors ${
                  fps === f
                    ? "bg-[#333333] text-[#ecaf30] font-bold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {f}fps
              </button>
            ))}
          </div>

          {/* Export MP4 Button */}
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 bg-[#ecaf30] hover:bg-[#d99e24] text-[#171717] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5 stroke-[3]" />
            <span>{isExporting ? "Rendering..." : "Export MP4"}</span>
          </button>
        </div>
      </header>

      {/* Main Studio Body: Left Inspector + Center Viewport */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Inspector Sidebar */}
        <TemplateInspector
          currentTemplate={template}
          onSelectTemplate={(tmpl) => {
            setTemplate(tmpl);
            setAspectRatio(tmpl.aspectRatio);
            setOutPoint(tmpl.duration);
            setCurrentTime(0);
          }}
          headlineText={headlineText}
          setHeadlineText={setHeadlineText}
          subheadText={subheadText}
          setSubheadText={setSubheadText}
          tagText={tagText}
          setTagText={setTagText}
          wireframe={wireframe}
          setWireframe={setWireframe}
          accentColor={accentColor}
          setAccentColor={setAccentColor}
          bgColor={bgColor}
          setBgColor={setBgColor}
          showSafeZones={showSafeZones}
          setShowSafeZones={setShowSafeZones}
        />

        {/* Center WebGL Canvas Viewport */}
        <main className="flex-1 relative flex items-center justify-center bg-[#111111] overflow-hidden">
          <StudioWebGLCanvas
            template={template}
            aspectRatio={aspectRatio}
            currentTime={currentTime}
            isPlaying={isPlaying}
            wireframe={wireframe}
            headlineText={headlineText}
            subheadText={subheadText}
            tagText={tagText}
            accentColor={accentColor}
            bgColor={bgColor}
            showSafeZones={showSafeZones}
            onCanvasReady={(canvas) => {
              canvasElementRef.current = canvas;
            }}
          />
        </main>
      </div>

      {/* Bottom Timeline Engine */}
      <footer className="shrink-0 z-30">
        <TimelineController
          currentTime={currentTime}
          duration={template.duration}
          inPoint={inPoint}
          outPoint={outPoint}
          isPlaying={isPlaying}
          playbackSpeed={playbackSpeed}
          isLooping={isLooping}
          onTimeChange={(t) => setCurrentTime(t)}
          onPlayPauseToggle={() => setIsPlaying(!isPlaying)}
          onInPointChange={(t) => setInPoint(t)}
          onOutPointChange={(t) => setOutPoint(t)}
          onLoopToggle={() => setIsLooping(!isLooping)}
          onSpeedChange={(s) => setPlaybackSpeed(s)}
        />
      </footer>

      {/* Export Progress Modal */}
      {isExporting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="bg-[#1b1b1b] border border-[#2e2e2e] rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 mx-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ecaf30] animate-ping" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Exporting MP4 in Browser
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-[#ecaf30]">
                {Math.round(exportProgress * 100)}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full bg-[#111111] rounded-full overflow-hidden border border-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#ecaf30] to-[#9cd696] transition-all duration-150 rounded-full"
                style={{ width: `${Math.max(2, exportProgress * 100)}%` }}
              />
            </div>

            <p className="text-xs text-white/70 font-mono text-center">
              {exportStatusText}
            </p>

            <div className="text-[11px] text-white/40 text-center">
              Encoding with WebCodecs hardware acceleration (H.264 / mp4-muxer). Your download will trigger automatically.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StudioPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-screen bg-[#141414] text-white font-mono text-sm">
          Loading TTM Studio...
        </div>
      }
    >
      <StudioContent />
    </Suspense>
  );
}
