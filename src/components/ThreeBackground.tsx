"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Subtle mouse-reactive Three.js wireframe cyber-eye / node network.
 * Automatically disables WebGL on small mobile screens or prefers-reduced-motion
 * to preserve Lighthouse 90+ performance.
 */
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window === "undefined") return;

    // Lighter fallback on mobile viewports (< 768px)
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Outer icosahedron wireframe (cyber-eye shell)
    const eyeGroup = new THREE.Group();
    scene.add(eyeGroup);

    const outerGeo = new THREE.IcosahedronGeometry(2.6, 2);
    const outerWire = new THREE.WireframeGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
    });
    const outerMesh = new THREE.LineSegments(outerWire, outerMat);
    eyeGroup.add(outerMesh);

    // Inner iris ring
    const ringGeo = new THREE.RingGeometry(0.95, 1.0, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00ff9c,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    eyeGroup.add(ringMesh);

    // Ambient particle network
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    const ptsGeo = new THREE.BufferGeometry();
    ptsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const ptsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.35,
    });
    const points = new THREE.Points(ptsGeo, ptsMat);
    scene.add(points);

    let targetX = 0;
    let targetY = 0;
    const onPointerMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.7;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      eyeGroup.rotation.y += (targetX - eyeGroup.rotation.y) * 0.04;
      eyeGroup.rotation.x += (targetY - eyeGroup.rotation.x) * 0.04;
      outerMesh.rotation.z = elapsed * 0.04;
      ringMesh.rotation.z = -elapsed * 0.12;
      points.rotation.y = elapsed * 0.015;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      outerGeo.dispose();
      outerWire.dispose();
      outerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ptsGeo.dispose();
      ptsMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Mobile / reduced-motion static architectural grid fallback */}
      <div className="noise-overlay absolute inset-0 opacity-60 md:opacity-30" />
    </div>
  );
}
