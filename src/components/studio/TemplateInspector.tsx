"use client";

import React, { useState } from "react";
import {
  Layers,
  Type,
  Box,
  Palette,
  Music,
  Check,
  Eye,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { TTMTemplate, TTM_TEMPLATES } from "@/data/ttmContent";

interface TemplateInspectorProps {
  currentTemplate: TTMTemplate;
  onSelectTemplate: (t: TTMTemplate) => void;
  headlineText: string;
  setHeadlineText: (val: string) => void;
  subheadText: string;
  setSubheadText: (val: string) => void;
  tagText: string;
  setTagText: (val: string) => void;
  wireframe: boolean;
  setWireframe: (val: boolean) => void;
  accentColor: string;
  setAccentColor: (val: string) => void;
  bgColor: string;
  setBgColor: (val: string) => void;
  showSafeZones: boolean;
  setShowSafeZones: (val: boolean) => void;
}

export function TemplateInspector({
  currentTemplate,
  onSelectTemplate,
  headlineText,
  setHeadlineText,
  subheadText,
  setSubheadText,
  tagText,
  setTagText,
  wireframe,
  setWireframe,
  accentColor,
  setAccentColor,
  bgColor,
  setBgColor,
  showSafeZones,
  setShowSafeZones,
}: TemplateInspectorProps) {
  const [activeTab, setActiveTab] = useState<"templates" | "text" | "3d" | "style" | "audio">("templates");
  const [selectedAudio, setSelectedAudio] = useState("Along The Way");

  const colorPalettes = [
    { label: "Lilac", color: "#dcd0ff" },
    { label: "Amber", color: "#ecaf30" },
    { label: "Sage", color: "#9cd696" },
    { label: "Coral", color: "#ff8a7a" },
    { label: "Cyan", color: "#67e8f9" },
    { label: "White", color: "#f3f3ed" },
  ];

  const bgPresets = [
    { label: "Studio Dark", color: "#171717" },
    { label: "Void Black", color: "#0a0a0a" },
    { label: "Deep Navy", color: "#0c1527" },
    { label: "Deep Violet", color: "#1f152d" },
    { label: "Charcoal", color: "#222222" },
  ];

  const audioTracks = [
    { name: "Along The Way", genre: "Dubstep Sunshine", bpm: 140 },
    { name: "Cyber Drift", genre: "Synthwave / Electronic", bpm: 128 },
    { name: "Lofi Horizon", genre: "Chillhop Beats", bpm: 85 },
    { name: "Kinetic Pulse", genre: "Bass & Glitch", bpm: 130 },
  ];

  return (
    <div className="flex flex-col h-full bg-[#1b1b1b] border-r border-[#2a2a2a] w-80 shrink-0 text-white select-none">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between border-b border-[#2a2a2a] px-2 py-2 bg-[#171717]">
        <button
          onClick={() => setActiveTab("templates")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "templates"
              ? "bg-[#2c2c2c] text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          Presets
        </button>

        <button
          onClick={() => setActiveTab("text")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "text"
              ? "bg-[#2c2c2c] text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          Text
        </button>

        <button
          onClick={() => setActiveTab("3d")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "3d"
              ? "bg-[#2c2c2c] text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          3D
        </button>

        <button
          onClick={() => setActiveTab("style")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "style"
              ? "bg-[#2c2c2c] text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          Style
        </button>

        <button
          onClick={() => setActiveTab("audio")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "audio"
              ? "bg-[#2c2c2c] text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          <Music className="w-3.5 h-3.5" />
          Audio
        </button>
      </div>

      {/* Tab Content Panes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {/* TAB: TEMPLATES */}
        {activeTab === "templates" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                Template Presets ({TTM_TEMPLATES.length})
              </span>
            </div>

            <div className="space-y-2">
              {TTM_TEMPLATES.map((tmpl) => {
                const isSelected = tmpl.id === currentTemplate.id;
                return (
                  <button
                    key={tmpl.id}
                    onClick={() => {
                      onSelectTemplate(tmpl);
                      setHeadlineText(tmpl.defaultText.headline);
                      setSubheadText(tmpl.defaultText.subhead);
                      setTagText(tmpl.defaultText.tag);
                      setAccentColor(tmpl.accentColor);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? "bg-[#262626] border-[#ecaf30] shadow-md ring-1 ring-[#ecaf30]/30"
                        : "bg-[#202020] border-white/5 hover:border-white/20 hover:bg-[#242424]"
                    }`}
                  >
                    <div
                      className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center font-bold text-xs"
                      style={{
                        backgroundColor: tmpl.accentColor,
                        color: "#171717",
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-white truncate">
                          {tmpl.title}
                        </span>
                        <span className="text-[10px] font-mono text-white/50 px-1.5 py-0.5 rounded bg-black/30">
                          {tmpl.aspectRatio}
                        </span>
                      </div>
                      <p className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                        {tmpl.categoryLabel} • {tmpl.duration}s
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB: TEXT */}
        {activeTab === "text" && (
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
              Typography & Copy
            </span>

            {/* Tag / Category Badge Text */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/80">Tag Badge</label>
              <input
                type="text"
                value={tagText}
                onChange={(e) => setTagText(e.target.value)}
                placeholder="NEW DROP #042"
                className="w-full bg-[#141414] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ecaf30]"
              />
            </div>

            {/* Headline Text */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/80">Primary Headline</label>
              <textarea
                rows={2}
                value={headlineText}
                onChange={(e) => setHeadlineText(e.target.value)}
                placeholder="FUTURE OF MOTION"
                className="w-full bg-[#141414] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ecaf30] resize-none"
              />
            </div>

            {/* Subheading Text */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/80">Subhead Caption</label>
              <textarea
                rows={3}
                value={subheadText}
                onChange={(e) => setSubheadText(e.target.value)}
                placeholder="Endless generative 3D loops for modern brands."
                className="w-full bg-[#141414] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ecaf30] resize-none"
              />
            </div>
          </div>
        )}

        {/* TAB: 3D */}
        {activeTab === "3d" && (
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
              3D Object & Mesh
            </span>

            {/* Wireframe Mode Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#202020] border border-white/5">
              <div>
                <div className="text-xs font-semibold text-white">Wireframe Mode</div>
                <div className="text-[11px] text-white/50">Render procedural geometry as cybernetic wireframe</div>
              </div>
              <button
                onClick={() => setWireframe(!wireframe)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                  wireframe ? "bg-[#ecaf30]" : "bg-[#333333]"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    wireframe ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Accent Color Palette */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/80">3D Emissive & Accent Color</label>
              <div className="grid grid-cols-3 gap-2">
                {colorPalettes.map((p) => (
                  <button
                    key={p.color}
                    onClick={() => setAccentColor(p.color)}
                    className={`flex items-center gap-2 p-2 rounded-lg border text-xs font-medium transition-all ${
                      accentColor === p.color
                        ? "border-[#ecaf30] bg-[#292929]"
                        : "border-white/5 bg-[#202020] hover:border-white/20"
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="truncate">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: STYLE & BACKGROUND */}
        {activeTab === "style" && (
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
              Canvas Styling
            </span>

            {/* Background Color Presets */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/80">Background Hue</label>
              <div className="space-y-1.5">
                {bgPresets.map((bg) => (
                  <button
                    key={bg.color}
                    onClick={() => setBgColor(bg.color)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium transition-all ${
                      bgColor === bg.color
                        ? "border-[#ecaf30] bg-[#292929]"
                        : "border-white/5 bg-[#202020] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: bg.color }}
                      />
                      <span>{bg.label}</span>
                    </div>
                    {bgColor === bg.color && <Check className="w-4 h-4 text-[#ecaf30]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Safe Area Guides Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#202020] border border-white/5">
              <div>
                <div className="text-xs font-semibold text-white">Social Safe Zones</div>
                <div className="text-[11px] text-white/50">Overlay Stories & Reels boundary margins</div>
              </div>
              <button
                onClick={() => setShowSafeZones(!showSafeZones)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                  showSafeZones ? "bg-[#ecaf30]" : "bg-[#333333]"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    showSafeZones ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* TAB: AUDIO */}
        {activeTab === "audio" && (
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
              Audio Soundtrack Sync
            </span>

            <div className="space-y-2">
              {audioTracks.map((tr) => {
                const isSelected = selectedAudio === tr.name;
                return (
                  <button
                    key={tr.name}
                    onClick={() => setSelectedAudio(tr.name)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-[#292929] border-[#ecaf30]"
                        : "bg-[#202020] border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{tr.name}</div>
                      <div className="text-[11px] text-white/50">
                        {tr.genre} • {tr.bpm} BPM
                      </div>
                    </div>
                    {/* Equalizer animation */}
                    <div className="flex items-end gap-0.5 h-4">
                      <span className={`w-1 bg-[#ecaf30] rounded-full transition-all ${isSelected ? "h-4 animate-pulse" : "h-1"}`} />
                      <span className={`w-1 bg-[#ecaf30] rounded-full transition-all ${isSelected ? "h-3 animate-pulse" : "h-2"}`} />
                      <span className={`w-1 bg-[#ecaf30] rounded-full transition-all ${isSelected ? "h-5 animate-pulse" : "h-1"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
