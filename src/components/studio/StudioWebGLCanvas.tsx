"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TTMTemplate } from "@/data/ttmContent";

interface StudioWebGLCanvasProps {
  template: TTMTemplate;
  aspectRatio: string;
  currentTime: number;
  isPlaying: boolean;
  wireframe: boolean;
  headlineText: string;
  subheadText: string;
  tagText: string;
  accentColor: string;
  bgColor: string;
  showSafeZones: boolean;
  onCanvasReady?: (canvas: HTMLCanvasElement) => void;
}

export function StudioWebGLCanvas({
  template,
  aspectRatio,
  currentTime,
  isPlaying,
  wireframe,
  headlineText,
  subheadText,
  tagText,
  accentColor,
  bgColor,
  showSafeZones,
  onCanvasReady,
}: StudioWebGLCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const mainMeshRef = useRef<THREE.Mesh | null>(null);
  const gridMeshRef = useRef<THREE.LineSegments | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const lightsGroupRef = useRef<THREE.Group | null>(null);

  // Mouse drag interaction
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationOffsetRef = useRef({ x: 0, y: 0 });

  // Map aspect ratio string to width/height classes and numeric ratio
  const getAspectRatioDimensions = (ratio: string) => {
    switch (ratio) {
      case "9:16":
        return { aspectClass: "aspect-[9/16]", width: 1080, height: 1920, ratioVal: 9 / 16 };
      case "3:4":
        return { aspectClass: "aspect-[3/4]", width: 1080, height: 1440, ratioVal: 3 / 4 };
      case "4:5":
        return { aspectClass: "aspect-[4/5]", width: 1080, height: 1350, ratioVal: 4 / 5 };
      case "1:1":
        return { aspectClass: "aspect-square", width: 1080, height: 1080, ratioVal: 1 };
      case "4:3":
        return { aspectClass: "aspect-[4/3]", width: 1440, height: 1080, ratioVal: 4 / 3 };
      case "16:9":
        return { aspectClass: "aspect-video", width: 1920, height: 1080, ratioVal: 16 / 9 };
      default:
        return { aspectClass: "aspect-[9/16]", width: 1080, height: 1920, ratioVal: 9 / 16 };
    }
  };

  const dim = getAspectRatioDimensions(aspectRatio);

  // Setup Three.js scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    onCanvasReady?.(canvas);

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, dim.ratioVal, 0.1, 100);
    camera.position.set(0, 0, 7);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(dim.width, dim.height, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Lights
    const lightsGroup = new THREE.Group();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    lightsGroup.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(accentColor, 2.5);
    dirLight1.position.set(5, 5, 5);
    lightsGroup.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight2.position.set(-5, -5, -3);
    lightsGroup.add(dirLight2);

    const pointLight = new THREE.PointLight(accentColor, 3, 10);
    pointLight.position.set(0, 0, 3);
    lightsGroup.add(pointLight);

    scene.add(lightsGroup);
    lightsGroupRef.current = lightsGroup;

    // Background floating dust particles
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 16;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Create Mesh Group
    const meshGroup = new THREE.Group();
    scene.add(meshGroup);
    meshGroupRef.current = meshGroup;

    return () => {
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // Update Aspect Ratio and Camera
  useEffect(() => {
    if (!rendererRef.current || !cameraRef.current) return;
    cameraRef.current.aspect = dim.ratioVal;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(dim.width, dim.height, false);
  }, [aspectRatio, dim.ratioVal, dim.width, dim.height]);

  // Update 3D Geometry based on template.objectType
  useEffect(() => {
    const meshGroup = meshGroupRef.current;
    if (!meshGroup) return;

    // Clear previous meshes
    while (meshGroup.children.length > 0) {
      const child = meshGroup.children[0];
      meshGroup.remove(child);
      if ((child as any).geometry) (child as any).geometry.dispose();
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.85,
      roughness: 0.15,
      wireframe: wireframe,
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: wireframe ? 0.6 : 0.08,
    });

    let geom: THREE.BufferGeometry;

    switch (template.objectType) {
      case "torus":
        geom = new THREE.TorusKnotGeometry(1.6, 0.45, 140, 24, 2, 3);
        break;
      case "icosahedron":
        geom = new THREE.IcosahedronGeometry(2.0, 1);
        break;
      case "sphere":
        geom = new THREE.SphereGeometry(2.0, 48, 48);
        break;
      case "cube":
        geom = new THREE.BoxGeometry(2.4, 2.4, 2.4);
        break;
      case "grid":
        geom = new THREE.PlaneGeometry(8, 8, 32, 32);
        break;
      case "carousel":
        geom = new THREE.CylinderGeometry(2.2, 2.2, 1.8, 8, 1, true);
        break;
      case "text-fly":
      default:
        geom = new THREE.TorusGeometry(2.0, 0.3, 32, 100);
        break;
    }

    const mesh = new THREE.Mesh(geom, material);
    meshGroup.add(mesh);
    mainMeshRef.current = mesh;

    // Add wireframe cage accent around solid objects
    if (!wireframe && template.objectType !== "grid") {
      const wireGeom = geom.clone();
      const wireMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(accentColor),
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      const wireMesh = new THREE.Mesh(wireGeom, wireMat);
      wireMesh.scale.set(1.03, 1.03, 1.03);
      meshGroup.add(wireMesh);
    }
  }, [template.objectType, wireframe, accentColor]);

  // Synchronize 3D scene animation with currentTime
  useEffect(() => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    const t = currentTime;
    const meshGroup = meshGroupRef.current;
    if (meshGroup) {
      meshGroup.rotation.x = rotationOffsetRef.current.x + t * 0.45;
      meshGroup.rotation.y = rotationOffsetRef.current.y + t * 0.65;
      meshGroup.rotation.z = Math.sin(t * 0.8) * 0.15;

      // Slight scale breathing effect
      const breath = 1 + Math.sin(t * 2) * 0.03;
      meshGroup.scale.set(breath, breath, breath);
    }

    // Floating particles drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
      particlesRef.current.rotation.x = t * 0.02;
    }

    // Grid wave displacement animation
    if (mainMeshRef.current && template.objectType === "grid") {
      const pos = mainMeshRef.current.geometry.attributes.position;
      if (pos) {
        for (let i = 0; i < pos.count; i++) {
          const u = pos.getX(i);
          const v = pos.getY(i);
          const z = Math.sin(u * 1.5 + t * 3) * Math.cos(v * 1.5 + t * 2) * 0.4;
          pos.setZ(i, z);
        }
        pos.needsUpdate = true;
      }
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, [currentTime, template.objectType]);

  // Mouse drag handler for 3D orbit
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;
    rotationOffsetRef.current.y += deltaX * 0.01;
    rotationOffsetRef.current.x += deltaY * 0.01;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };

    if (rendererRef.current && sceneRef.current && cameraRef.current && meshGroupRef.current) {
      meshGroupRef.current.rotation.y = rotationOffsetRef.current.y + currentTime * 0.65;
      meshGroupRef.current.rotation.x = rotationOffsetRef.current.x + currentTime * 0.45;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full p-4 select-none overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Aspect Ratio Canvas Frame */}
      <div
        className={`relative ${dim.aspectClass} max-h-[72vh] max-w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border border-white/10`}
        style={{ backgroundColor: bgColor }}
        onMouseDown={handleMouseDown}
      >
        {/* Real-time WebGL Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-grab active:cursor-grabbing block"
          style={{ width: "100%", height: "100%" }}
        />

        {/* Live Motion Typography Overlay (Renders above WebGL) */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 sm:p-8 z-10">
          {/* Top Tag Pill */}
          <div className="flex items-center justify-between">
            <span
              className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg"
              style={{
                backgroundColor: accentColor,
                color: "#171717",
              }}
            >
              {tagText || template.defaultText.tag}
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{aspectRatio}</span>
            </div>
          </div>

          {/* Bottom Headline & Subhead */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white drop-shadow-md leading-[1.05]">
              {headlineText || template.defaultText.headline}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-white/80 line-clamp-2 max-w-sm drop-shadow">
              {subheadText || template.defaultText.subhead}
            </p>
          </div>
        </div>

        {/* Optional Safe Zone Overlay (Instagram Reels / TikTok / YouTube Shorts) */}
        {showSafeZones && (
          <div className="pointer-events-none absolute inset-0 border-2 border-dashed border-red-500/40 z-20 m-6 rounded-lg flex flex-col justify-between p-2">
            <div className="text-[9px] font-mono text-red-400 bg-black/60 px-2 py-0.5 rounded w-max">
              Stories Safe Area Top
            </div>
            <div className="text-[9px] font-mono text-red-400 bg-black/60 px-2 py-0.5 rounded w-max self-end">
              Action Overlay Zone Bottom
            </div>
          </div>
        )}

        {/* Interactive Drag Hint */}
        <div className="pointer-events-none absolute top-4 right-4 z-10 opacity-0 hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md text-white/60 text-[10px] px-2.5 py-1 rounded-full">
          Drag to rotate 3D
        </div>
      </div>
    </div>
  );
}
