import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CodeAI Cloud — Custom Mobile App Development in Hyderabad";
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
          padding: 72,
          background: "linear-gradient(145deg, #041c22 0%, #0b4f4a 55%, #0e7490 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(145deg, #14b8a6 0%, #0e7490 100%)",
            }}
          />
          <span>
            CodeAI <span style={{ color: "#5eead4" }}>Cloud</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
            Custom Mobile App Development in Hyderabad
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
            Android · iOS · Cross-Platform · UI/UX · Business Applications
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
