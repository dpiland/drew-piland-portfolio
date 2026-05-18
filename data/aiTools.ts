import { Search, Bot, Terminal, Mic, Wand2, Presentation } from "lucide-react";
import type { ElementType } from "react";

export interface AITool {
  name: string;
  icon: ElementType;
  description: string;
}

export const aiTools: AITool[] = [
  {
    name: "Perplexity",
    icon: Search,
    description: "Market research and competitive intel in real time.",
  },
  {
    name: "ChatGPT",
    icon: Bot,
    description: "First-draft briefs, brainstorming, message testing.",
  },
  {
    name: "Claude Code",
    icon: Terminal,
    description: "Automating repetitive content and workflow tasks.",
  },
  {
    name: "Otter.AI",
    icon: Mic,
    description: "Meeting transcription and follow-up extraction.",
  },
  {
    name: "Whispr Flow",
    icon: Wand2,
    description: "Voice-to-text across every surface, all day.",
  },
  {
    name: "Gamma",
    icon: Presentation,
    description: "Quick presentation design and decks from scratch.",
  },
];
