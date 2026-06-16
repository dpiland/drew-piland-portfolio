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
      "I build the narrative infrastructure that makes a product impossible to ignore, from category framing to competitive differentiation that actually lands.",
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
      "Launches that move metrics. I coordinate across product, sales, and marketing to make sure the story lands, and the pipeline follows.",
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
      "I give sales teams the story, tools, and confidence to have better conversations. Assets they actually use, not ones that collect dust in a shared drive.",
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
      "Board decks, analyst briefings, investor narratives. I translate market strategy into the language that shapes decisions at the highest level.",
    proofPoints: [
      "Gartner MQ and Forrester Wave preparation",
      "Board and C-suite presentation strategy",
      "Market category and thought leadership narrative",
    ],
  },
];
