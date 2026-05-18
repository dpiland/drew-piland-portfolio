import { SectionLabel } from "@/components/ui/SectionLabel";
import { aiTools } from "@/data/aiTools";

export function AIStack() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Daily Stack</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            How AI Multiplies My Output
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Not a trend I&apos;m watching — a workflow I&apos;m already running.
            These tools are live in my day-to-day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="card-hover rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex items-start gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{tool.name}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
