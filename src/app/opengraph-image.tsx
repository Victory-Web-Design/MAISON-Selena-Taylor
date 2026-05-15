import { ImageResponse } from "next/og";
import { SITE_OG } from "@/lib/constants";

export const alt = SITE_OG.imageAlt;
export const size = { width: SITE_OG.imageWidth, height: SITE_OG.imageHeight };
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
          alignItems: "center",
          background: "linear-gradient(135deg, #14110d 0%, #1c1812 55%, #070605 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 39% 29%, rgba(161,156,78,0.38) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: 80,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 22,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(161,156,78,0.9)",
            }}
          >
            Beverly Hills · Private Maison
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 72,
              fontWeight: 500,
              color: "#f5f2eb",
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Selena Taylor
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 28,
              color: "rgba(245,242,235,0.72)",
              textAlign: "center",
              maxWidth: 900,
              lineHeight: 1.45,
            }}
          >
            Private Rare Stone Maison
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
