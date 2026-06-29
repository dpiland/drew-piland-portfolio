import { Search, Bot, Terminal, Mic, Wand2, Presentation } from "lucide-react";
import type { ElementType } from "react";

export interface AITool {
  name: string;
  icon: ElementType;
}

export const aiTools: AITool[] = [
  { name: "Perplexity", icon: Search },
  { name: "ChatGPT", icon: Bot },
  { name: "Claude Code", icon: Terminal },
  { name: "Otter.AI", icon: Mic },
  { name: "Whispr Flow", icon: Wand2 },
  { name: "Gamma", icon: Presentation },
];
