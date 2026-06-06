import { ImageResponse } from "next/og";

export const alt = "Orvnix — Software, AI, Robotics & Drone Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090c02",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(255,60,0,0.45), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(25,11,40,0.9), transparent 70%)",
          }}
        />

        {/* logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: "#ff3c00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#090c02",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ color: "#f6f4f3", fontSize: 30, fontWeight: 600 }}>
            Orvnix
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#f6f4f3",
              fontSize: 70,
              lineHeight: 1.08,
              fontWeight: 600,
              maxWidth: 960,
            }}
          >
            <span>Software, AI and autonomous</span>
            <div style={{ display: "flex" }}>
              <span>systems, built like they&nbsp;</span>
              <span style={{ color: "#ff3c00" }}>matter.</span>
            </div>
          </div>
          <div style={{ display: "flex", color: "#a3a39d", fontSize: 30, maxWidth: 880 }}>
            A studio for web, mobile, LLMs, AI agents, robotics and drones.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#686963",
            fontSize: 24,
          }}
        >
          <span>Kolkata, India · Worldwide</span>
          <span style={{ color: "#ff3c00" }}>orvnix.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
