import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Browser tab favicon — edit this file to change the “M” mark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ff2d95 0%, #a855f7 38%, #22d3ee 72%, #facc15 100%)",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: "#ffffff",
            textShadow: "0 1px 8px rgba(0,0,0,0.35)",
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          M
        </span>
      </div>
    ),
    { ...size },
  );
}
