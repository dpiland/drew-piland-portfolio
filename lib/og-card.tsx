import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "Drew Piland, Product Marketing: I build for the rep, not the deck.";

/**
 * Shared social card, rendered at build time and reused by both the
 * OpenGraph and Twitter image routes. Keeps LinkedIn, Slack, and X
 * previews identical.
 */
export function renderOgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Radial glow, matches the site hero */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(59, 130, 246, 0.28), transparent 70%)",
          }}
        />

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "48px",
              height: "2px",
              backgroundColor: "rgba(96, 165, 250, 0.5)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#60a5fa",
            }}
          >
            Drew Piland
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "78px",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex" }}>I build for the rep,</div>
          <div style={{ display: "flex", color: "#60a5fa" }}>not the deck.</div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", fontSize: "26px", color: "#94a3b8" }}>
            Principal &amp; Director Product Marketing
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#475569" }}>
            drewpiland.com
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
