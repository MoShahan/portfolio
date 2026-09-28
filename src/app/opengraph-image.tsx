import { ImageResponse } from "next/og";

export const alt = "Mohammed Shahan — Frontend Engineer";
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
          justifyContent: "center",
          padding: 80,
          background: "#11151b",
          color: "#e8edf3",
        }}
      >
        <div style={{ fontSize: 28, color: "#7aa8d4", letterSpacing: 2, fontFamily: "serif" }}>
          Frontend engineer
        </div>
        <div style={{ fontSize: 72, fontWeight: 500, marginTop: 16 }}>
          Mohammed Shahan
        </div>
        <div style={{ fontSize: 28, color: "#8b96a6", marginTop: 20, maxWidth: 820 }}>
          React, TypeScript, Next.js. Open to frontend and full-stack roles.
        </div>
      </div>
    ),
    size,
  );
}
