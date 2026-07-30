import { renderOgCard, ogSize, ogContentType } from "@/lib/og-card";

export const size = ogSize;
export const contentType = ogContentType;
export const alt =
  "CloudBees Unify: sixteen weeks to define the category before a competitor did. A GTM launch case study by Drew Piland.";

export default function Image() {
  return renderOgCard({
    headline: ["Sixteen weeks to define", "the category."],
    footer: "CloudBees Unify launch, May 2025",
  });
}
