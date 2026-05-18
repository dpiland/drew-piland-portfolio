export interface Talk {
  id: string;
  event: string;
  year: string;
  type: string;
  title: string;
  description: string;
  url: string;
  platform: "youtube" | "linkedin";
  // YouTube only — derived from video ID: https://img.youtube.com/vi/{videoId}/hqdefault.jpg
  videoId?: string;
}

// EDIT: Update titles, descriptions, and years as needed
export const talks: Talk[] = [
  {
    id: "platformcon-2024",
    event: "PlatformCon 2024",
    year: "2024",
    type: "Conference Talk",
    title: "Platform Engineering: Market Dynamics, DevOps Integration & Build vs. Buy",
    description:
      "Walked through the market forces shaping platform engineering, its strategic role in modern DevOps, and a framework for navigating the build vs. buy decision in enterprise organizations.",
    url: "https://www.youtube.com/watch?v=7j2DONqwprM",
    platform: "youtube",
    videoId: "7j2DONqwprM",
  },
  {
    id: "devopsdays-raleigh",
    event: "DevOps Days Raleigh",
    year: "2023",  // EDIT: Update year if different
    type: "Ignite Talk",
    title: "Release Orchestration: Bridging the DevOps SDLC",
    description:
      "An Ignite-format talk — 5 minutes, 20 slides, auto-advance every 15 seconds. Covered Release Orchestration as a capability: what it enables for engineering organizations and how it bridges the gaps in the software delivery lifecycle.",
    url: "https://youtu.be/_e4JSR-bn40",
    platform: "youtube",
    videoId: "_e4JSR-bn40",
  },
  {
    id: "claude-code-demo",
    event: "LinkedIn",
    year: "2024",
    type: "Platform Demo",
    title: "Claude Code: Live Platform Demo",
    description:
      "Shared a live walkthrough of Claude Code — Anthropic's AI coding platform — demonstrating real-world workflows. The post reached the developer tools and AI community on LinkedIn.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7439684648462553088/",
    platform: "linkedin",
  },
];
