import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { hero, siteConfig } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [displayFont, sansFont] = await Promise.all([
    readFile(
      path.join(
        process.cwd(),
        "node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff",
      ),
    ),
    readFile(
      path.join(
        process.cwd(),
        "node_modules/@fontsource/instrument-sans/files/instrument-sans-latin-400-normal.woff",
      ),
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0813",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(178,102,255,0.24), transparent 55%)",
          fontFamily: "'Instrument Sans Variable'",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid rgba(178,102,255,0.35)",
              background: "#150f22",
              color: "#b266ff",
              fontFamily: "'Space Grotesk Variable'",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            MC
          </div>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a89bc0",
            }}
          >
            {siteConfig.handle}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "'Space Grotesk Variable'",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#f3eefb",
              maxWidth: 980,
              textTransform: "uppercase",
            }}
          >
            {hero.headline}&nbsp;
            <span style={{ color: "#b266ff" }}>{hero.headlineAccent}</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a89bc0", maxWidth: 820 }}>
            {siteConfig.roleLong}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 20,
            color: "#8f83a0",
          }}
        >
          <span style={{ display: "flex", width: 8, height: 8, borderRadius: 999, background: "#b266ff" }} />
          {siteConfig.location}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk Variable", data: displayFont, style: "normal", weight: 700 },
        { name: "Instrument Sans Variable", data: sansFont, style: "normal", weight: 400 },
      ],
    },
  );
}
