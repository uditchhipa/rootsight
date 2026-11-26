"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import * as THREE from "three";
import { ArrowUpRight, Play, Sparkles, Sliders, Layers } from "lucide-react";
import { ASPECT_RATIOS } from "@/data/ttmContent";

const AUDIENCE_ROLES = [
  "Content Creators",
  "Motion Designers",
  "Social Agencies",
  "Studios",
  "Developers",
  "You",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [selectedRatio, setSelectedRatio] = useState<string>("9:16");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Audience ticker loop
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % AUDIENCE_ROLES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // Three.js interactive 3D hero background scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(480, 480, false);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xdcd0ff, 2.5);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xecaf30, 2.0);
    dirLight2.position.set(-4, -4, -2);
    scene.add(dirLight2);

    // Torus knot geometry
    const geom = new THREE.TorusKnotGeometry(1.5, 0.45, 120, 20, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1c1c1c,
      metalness: 0.9,
      roughness: 0.15,
      emissive: new THREE.Color(0xdcd0ff),
      emissiveIntensity: 0.12,
    });
    const torus = new THREE.Mesh(geom, material);
    scene.add(torus);

    // Wireframe halo
    const wireGeom = geom.clone();
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xecaf30,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    wireMesh.scale.set(1.04, 1.04, 1.04);
    scene.add(wireMesh);

    let animationFrameId: number;
    let t = 0;

    const animate = () => {
      t += 0.015;
      torus.rotation.x = t * 0.7;
      torus.rotation.y = t * 0.9;
      torus.rotation.z = Math.sin(t * 0.5) * 0.2;

      wireMesh.rotation.x = t * 0.7;
      wireMesh.rotation.y = t * 0.9;
      wireMesh.rotation.z = Math.sin(t * 0.5) * 0.2;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geom.dispose();
      material.dispose();
      wireGeom.dispose();
      wireMat.dispose();
    };
  }, []);

  // Determine aspect class for preview card
  const getAspectClass = (ratio: string) => {
    switch (ratio) {
      case "9:16":
        return "w-[260px] sm:w-[300px] aspect-[9/16]";
      case "3:4":
        return "w-[300px] sm:w-[340px] aspect-[3/4]";
      case "4:5":
        return "w-[310px] sm:w-[350px] aspect-[4/5]";
      case "1:1":
        return "w-[320px] sm:w-[360px] aspect-square";
      case "4:3":
        return "w-[360px] sm:w-[420px] aspect-[4/3]";
      case "16:9":
        return "w-[380px] sm:w-[480px] aspect-video";
      default:
        return "w-[280px] sm:w-[320px] aspect-[9/16]";
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-[#171717] border-b border-[#262626]"
    >
      {/* TTM Floating Colorful Pastel Decorative Blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#dcd0ff]/10 blur-[100px] animate-blob-1" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-[450px] w-[450px] rounded-full bg-[#ecaf30]/10 blur-[120px] animate-blob-2" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-[#9cd696]/10 blur-[140px] animate-blob-1" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow with Animated Ticker */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#202020] border border-[#2d2d2d] px-4 py-1.5 text-xs font-medium text-[#86867f] shadow-inner mb-6">
            <span>Built for</span>
            <span className="inline-block font-bold text-[#ecaf30] min-w-[130px] text-left transition-all duration-300">
              {AUDIENCE_ROLES[roleIndex]}
            </span>
          </div>

          {/* Monumental Headline in Poppins */}
          <h1 className="max-w-5xl text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-[-0.03em] text-[#f3f3ed] leading-[0.98]">
            Templates<br />
            <span className="text-[#ecaf30]">that move.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#86867f] leading-relaxed font-normal">
            Change your output in seconds. A growing library of customizable 3D and motion templates you can edit, timeline-scrub, and export as MP4 directly in your browser.
          </p>

          {/* Aspect Ratio Switcher Pills */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#86867f]">
              Select Canvas Output Ratio
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#202020] rounded-full border border-[#2d2d2d] shadow-inner">
              {ASPECT_RATIOS.map((ar) => (
                <button
                  key={ar.label}
                  onClick={() => setSelectedRatio(ar.label)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedRatio === ar.label
                      ? "bg-[#ecaf30] text-[#171717] shadow-md scale-105"
                      : "text-[#86867f] hover:text-[#f3f3ed] hover:bg-[#2c2c2c]"
                  }`}
                >
                  {ar.label}
                </button>
              ))}
            </div>
          </div>

          {/* Center Dynamic Preview Frame */}
          <div className="mt-10 flex justify-center items-center w-full">
            <div
              className={`relative ${getAspectClass(
                selectedRatio
              )} max-h-[520px] rounded-3xl bg-[#1e1e1e] border-2 border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group flex flex-col justify-between p-6 sm:p-8`}
            >
              {/* Three.js Interactive Canvas inside Card */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90"
              />

              {/* Card Top: Tags */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#dcd0ff] text-[#171717] text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow">
                  3D WebGL Torus
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                  {selectedRatio} • 60 FPS
                </span>
              </div>

              {/* Card Bottom: Content & Launch Studio Pill */}
              <div className="relative z-10 space-y-3">
                <div className="text-left space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-md">
                    FUTURE OF MOTION
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-1 drop-shadow">
                    Endless generative 3D loops for modern brands.
                  </p>
                </div>

                <Link
                  href={`/studio?template=kinetic-torus`}
                  className="w-full flex items-center justify-center gap-2 bg-[#f3f3ed] hover:bg-white text-[#171717] py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-[#ecaf30] text-[#ecaf30]" />
                  <span>Open in Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
