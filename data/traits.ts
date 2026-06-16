import { Lightbulb, PenLine, ArrowLeftRight, Compass, BarChart2, Wrench } from "lucide-react";
import type { ElementType } from "react";

export interface Trait {
  icon: ElementType;
  title: string;
  description: string;
}

// EDIT: Customize trait descriptions to match your voice
export const traits: Trait[] = [
  {
    icon: Lightbulb,
    title: "First-Principles Thinker",
    description:
      "I don't inherit assumptions. I start with what's actually true about the market, the buyer, and the problem, and build from there.",
  },
  {
    icon: PenLine,
    title: "Strong Storyteller",
    description:
      "Complex products deserve clear stories. I find the one thing that matters and make it land, for buyers, for analysts, for boards.",
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Functional Translator",
    description:
      "I speak product, sales, and exec. I'm the person who gets every function aligned on the same story in the same language.",
  },
  {
    icon: Compass,
    title: "Comfortable With Ambiguity",
    description:
      "Early markets, pivoting products, messy org structures. I build clarity where there wasn't any. That's the job.",
  },
  {
    icon: BarChart2,
    title: "Executive Presence",
    description:
      "I've presented to boards and C-suites. I know how to make a case at the level that moves decisions: concise, confident, backed by data.",
  },
  {
    icon: Wrench,
    title: "Builder/Operator Mindset",
    description:
      "I ship. I don't just strategize. I build the assets, run the plays, and iterate on what's working. Strategy and execution, not either/or.",
  },
];
