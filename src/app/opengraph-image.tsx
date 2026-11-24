import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ROOTSIGHT — See the root of every threat.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          padding: "72px",
          border: "1px solid rgba(255,255,255,0.16)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            letterSpacing: "0.25em",
            color: "#00FF9C",
          }}
        >
          <span>ROOT SIGHT // INDIA</span>
          <span>STARTUP INDIA REGISTERED</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            SEE THE ROOT OF EVERY THREAT.
          </div>
          <div style={{ fontSize: 28, color: "#A1A1AA" }}>
            Law Enforcement Automation • Offensive Security • Threat Intel
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#71717A",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 24,
          }}
        >
          <span>SECURITY, AUTOMATED.</span>
          <span>rootsight.in</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
