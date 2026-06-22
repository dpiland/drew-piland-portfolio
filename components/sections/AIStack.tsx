import { SectionLabel } from "@/components/ui/SectionLabel";
import { aiTools } from "@/data/aiTools";
import { Zap, Users, Rocket, Shield } from "lucide-react";

const buckets = [
  {
    tag: "Automation Pipeline",
    icon: Zap,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    title: "Runs without me",
    example:
      "A Python CLI I wrote on the Claude API, with web search built in, that generates full competitive intel reports on demand. It loops on searches, synthesizes the findings, and hands back a structured report ready for sales or positioning.",
    judgment:
      "It keeps competitive intel current at the pace the market moves, not whenever I last had time to refresh it by hand. I still vet every report against recent analyst calls and win/loss data before it ships; the CLI handles velocity, I handle interpretation.",
  },
  {
    tag: "Thought Partnership",
    icon: Users,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    title: "Scales my judgment across the team",
    example:
      "A custom GPT I built and maintained for our sales team, loaded with current messaging, competitive battlecards, and objection-handling, refreshed on a bi-weekly cadence. Reps asked competitive questions in plain language and got answers grounded in live positioning.",
    judgment:
      "Team leverage was the design principle, and it landed: reps self-served about 80% of their positioning and competitive questions, instead of routing every answer through PMM.",
  },
  {
    tag: "Built to Ship",
    icon: Rocket,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    title: "Unblocked myself",
    example:
      "Our demo environment was weak and I couldn't fix it through official channels. So I used Claude Code to build my own: four industry-specific demo apps on our feature management product, each tailored to the pipeline patterns I found analyzing deals by vertical. The SE team adopted it for their own cycles.",
    judgment:
      "In the early going we skipped two POVs entirely. Deal cycle time was one of my core PMM metrics, and this moved it directly.",
  },
];

export function AIStack() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Working With AI</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            How I Actually Use AI
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I organize my AI usage in three buckets: automation pipelines that run without me, thought partnership that scales across the team, and building my own tooling when the official path is too slow. Knowing which bucket a task belongs to matters more than knowing which tool to use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {buckets.map((bucket) => {
            const Icon = bucket.icon;
            return (
              <div
                key={bucket.tag}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className={`shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center ${bucket.iconBg}`}>
                    <Icon className={`w-5 h-5 ${bucket.iconColor}`} />
                  </div>
                  <span className={`text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full border ${bucket.tagColor}`}>
                    {bucket.tag}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-3">{bucket.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{bucket.example}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-800">
                  <p className="text-slate-500 text-sm italic leading-relaxed">{bucket.judgment}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-7 flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl border bg-slate-500/10 border-slate-600/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <p className="text-white font-semibold text-lg mb-2">The calls I keep human</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Positioning decisions, what we&apos;re choosing to claim versus competitors, what an analyst told us off the record. AI doesn&apos;t touch those. That boundary isn&apos;t caution, it&apos;s quality control.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 text-center mb-6">Tools in rotation</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {aiTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 flex items-center gap-3"
                >
                  <Icon className="w-4 h-4 text-slate-500 shrink-0" />
                  <p className="text-slate-400 text-sm font-medium">{tool.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
