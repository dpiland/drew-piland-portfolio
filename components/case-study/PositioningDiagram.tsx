import { positioning } from "@/data/unifyLaunch";

/**
 * The anti-platform argument, side by side. Left column is the market's
 * default answer to tool sprawl, right column is the bet. Stacks below sm.
 */
export function PositioningDiagram() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      {positioning.map(({ kicker, title, steps, outcome, tone }) => {
        const accent = tone === "accent";
        return (
          <div
            key={title}
            className={`rounded-2xl border p-7 flex flex-col ${
              accent
                ? "border-blue-500/40 bg-blue-500/[0.06]"
                : "border-slate-800 bg-slate-900/40"
            }`}
          >
            <div
              className={`text-xs font-semibold tracking-[0.15em] uppercase mb-2 ${
                accent ? "text-blue-400" : "text-slate-500"
              }`}
            >
              {kicker}
            </div>
            <div
              className={`text-2xl font-semibold mb-6 ${
                accent ? "text-white" : "text-slate-300"
              }`}
            >
              {title}
            </div>

            <ol className="space-y-3 mb-6 flex-1">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-3 items-start">
                  <span
                    className={`shrink-0 mt-0.5 w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold ${
                      accent
                        ? "bg-blue-500/15 text-blue-400"
                        : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`text-sm leading-relaxed ${
                      accent ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div
              className={`text-sm leading-relaxed pt-5 border-t ${
                accent
                  ? "border-blue-500/20 text-slate-300"
                  : "border-slate-800 text-slate-500"
              }`}
            >
              {outcome}
            </div>
          </div>
        );
      })}
    </div>
  );
}
