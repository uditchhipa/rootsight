"use client";

import { Muxer, ArrayBufferTarget } from "mp4-muxer";

export interface ExportOptions {
  canvas: HTMLCanvasElement;
  duration: number; // in seconds
  fps?: number;
  filename?: string;
  onProgress?: (progress: number, statusText: string) => void;
  renderFrameAtTime?: (time: number) => void;
}

/**
 * High-performance in-browser MP4 exporter.
 * Utilizes WebCodecs API + mp4-muxer when available for deterministic frame-by-frame rendering,
 * and falls back seamlessly to MediaRecorder.
 */
export async function exportCanvasToMP4({
  canvas,
  duration,
  fps = 30,
  filename = "ttm-template-export.mp4",
  onProgress,
  renderFrameAtTime,
}: ExportOptions): Promise<Blob> {
  const width = canvas.width || 1080;
  const height = canvas.height || 1920;
  // Ensure even dimensions for H.264
  const encWidth = width % 2 === 0 ? width : width - 1;
  const encHeight = height % 2 === 0 ? height : height - 1;

  onProgress?.(0.05, "Initializing encoder...");

  // 1. Try WebCodecs + mp4-muxer if available
  if (typeof window !== "undefined" && "VideoEncoder" in window) {
    try {
      const target = new ArrayBufferTarget();
      const muxer = new Muxer({
        target,
        video: {
          codec: "avc",
          width: encWidth,
          height: encHeight,
        },
        fastStart: "in-memory",
      });

      let encodedFrames = 0;
      const totalFrames = Math.max(1, Math.round(duration * fps));

      const videoEncoder = new (window as any).VideoEncoder({
        output: (chunk: any, meta: any) => muxer.addVideoChunk(chunk, meta),
        error: (e: any) => console.error("WebCodecs VideoEncoder error:", e),
      });

      await videoEncoder.configure({
        codec: "avc1.4d002a", // Baseline / Main profile Level 4.2
        width: encWidth,
        height: encHeight,
        bitrate: 8_000_000, // 8 Mbps high quality
        framerate: fps,
      });

      for (let i = 0; i < totalFrames; i++) {
        const timestampMicroseconds = (i / fps) * 1_000_000;
        const timeSeconds = i / fps;

        if (renderFrameAtTime) {
          renderFrameAtTime(timeSeconds);
        }

        // Wait a tick for canvas to flush
        await new Promise((resolve) => requestAnimationFrame(resolve));

        const frame = new (window as any).VideoFrame(canvas, {
          timestamp: timestampMicroseconds,
        });

        // Keyframe every 2 seconds
        const keyFrame = i % (fps * 2) === 0;
        videoEncoder.encode(frame, { keyFrame });
        frame.close();

        encodedFrames++;
        const pct = Math.min(0.95, (encodedFrames / totalFrames) * 0.9 + 0.05);
        onProgress?.(pct, `Rendering frame ${encodedFrames}/${totalFrames} (${Math.round(pct * 100)}%)`);
      }

      onProgress?.(0.96, "Finalizing MP4 container...");
      await videoEncoder.flush();
      muxer.finalize();

      const buffer = target.buffer;
      const mp4Blob = new Blob([buffer], { type: "video/mp4" });

      onProgress?.(1.0, "Ready!");
      triggerDownload(mp4Blob, filename);
      return mp4Blob;
    } catch (err) {
      console.warn("WebCodecs export failed, falling back to MediaRecorder:", err);
    }
  }

  // 2. Fallback: MediaRecorder stream capture
  return new Promise((resolve, reject) => {
    try {
      onProgress?.(0.1, "Recording canvas stream...");

      const stream = canvas.captureStream(fps);
      const mimeTypes = [
        "video/mp4;codecs=avc1",
        "video/mp4",
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp8",
        "video/webm",
      ];

      let selectedMime = "video/webm";
      for (const mime of mimeTypes) {
        if (MediaRecorder.isTypeSupported(mime)) {
          selectedMime = mime;
          break;
        }
      }

      const recorder = new MediaRecorder(stream, {
        mimeType: selectedMime,
        videoBitsPerSecond: 8_000_000,
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };

      const startTime = performance.now();
      const totalMs = duration * 1000;

      const progressInterval = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(0.95, 0.1 + (elapsed / totalMs) * 0.85);
        onProgress?.(progress, `Recording video (${Math.round(progress * 100)}%)...`);
      }, 100);

      recorder.onstop = () => {
        clearInterval(progressInterval);
        onProgress?.(0.98, "Preparing download...");
        const blob = new Blob(chunks, { type: selectedMime });
        const ext = selectedMime.includes("mp4") ? ".mp4" : ".webm";
        const finalName = filename.replace(/\.(mp4|webm)$/i, "") + ext;

        triggerDownload(blob, finalName);
        onProgress?.(1.0, "Download complete!");
        resolve(blob);
      };

      recorder.onerror = (e) => {
        clearInterval(progressInterval);
        reject(e);
      };

      recorder.start();

      setTimeout(() => {
        recorder.stop();
      }, totalMs);
    } catch (err) {
      reject(err);
    }
  });
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1000);
}
