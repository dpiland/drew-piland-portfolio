import { Target, Rocket, TrendingUp, FileText } from "lucide-react";
import type { ElementType } from "react";

export interface Pillar {
  icon: ElementType;
  title: string;
  description: string;
  proofPoints: string[];
}

// EDIT: Customize descriptions and proof points with your specific experience
export const pillars: Pillar[] = [
  {
    icon: Target,
    title: "Positioning & Messaging",
    description:
      "Working out what a product should stand for, who it is for, and why anyone would switch. Category framing at the top, the competitive one-liner a rep uses on a call at the bottom.",
    proofPoints: [
      "Buyer persona and jobs-to-be-done research",
      "Competitive positioning and battlecard development",
      "Core messaging frameworks and value proposition architecture",
    ],
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    description:
      "Getting product, sales, and marketing pointed at the same date with the same story. I run a launch as a program that lasts a quarter, and I keep measuring it well past launch day.",
    proofPoints: [
      "Cross-functional GTM planning and launch playbooks",
      "Tiered launch frameworks scaled by market impact",
      "Post-launch measurement and iteration cadence",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement",
    description:
      "The story, the tools, and enough rehearsal that reps trust it in front of a buyer. I judge this work by one thing: whether reps reach for it when nobody is watching.",
    proofPoints: [
      "Pitch decks, battlecards, and objection-handling guides",
      "Buyer-stage content mapped to the sales funnel",
      "Sales training and messaging adoption programs",
    ],
  },
  {
    icon: FileText,
    title: "Executive Narrative",
    description:
      "Board decks, analyst briefings, exec narratives. Turning what is happening in the market into a version a busy executive can make a decision on.",
    proofPoints: [
      "Gartner MQ and Forrester Wave preparation",
      "Board and C-suite presentation strategy",
      "Market category and thought leadership narrative",
    ],
  },
];
