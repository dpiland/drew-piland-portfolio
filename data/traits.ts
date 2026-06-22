import { Lightbulb, ArrowLeftRight, Wrench } from "lucide-react";
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
    icon: ArrowLeftRight,
    title: "Cross-Functional Translator",
    description:
      "I speak product, sales, and exec. I'm the person who gets every function aligned on the same story in the same language.",
  },
  {
    icon: Wrench,
    title: "Builder/Operator Mindset",
    description:
      "I ship. I don't just strategize. I build the assets, run the plays, and iterate on what's working. Strategy and execution, not either/or.",
  },
];
