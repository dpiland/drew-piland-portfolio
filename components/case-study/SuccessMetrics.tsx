import { primaryMetric, successMetrics } from "@/data/unifyLaunch";

/**
 * The primary metric renders as its own card above the rest. Listing five KPIs
 * flat reads as a dashboard; the point of this section is that one of them was
 * the decision and the others were instrumentation.
 */
export function SuccessMetrics() {
  return (
    <div className="space-y-4">
      {/* The one we steered by */}
      <div className="rounded-2xl border border-blue-500/40 bg-blue-500/[0.07] p-6 sm:p-8">
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-400 mb-3">
          The one we steered by
        </div>
        <div className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-snug">
          {primaryMetric.measure}
        </div>
        <p className="text-slate-400 leading-relaxed mb-4">{primaryMetric.why}</p>
        <div className="text-sm font-medium text-slate-300 pt-4 border-t border-blue-500/20">
          {primaryMetric.result}
        </div>
      </div>

      {/* Everything else was instrumentation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {successMetrics.map(({ tier, measure, why, result }) => {
          const leading = tier === "Leading";
          return (
            <div
              key={measure}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col"
            >
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 mb-2">
                <span
                  className={`text-[10px] font-semibold tracking-[0.15em] uppercase px-1.5 py-0.5 rounded ${
                    leading
                      ? "bg-blue-500/15 text-blue-400"
                      : "bg-emerald-500/15 text-emerald-400"
                  }`}
                >
                  {tier}
                </span>
                <span className="text-sm font-semibold text-white">
                  {measure}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-3 flex-1">
                {why}
              </p>
              <div className="text-sm font-medium text-slate-300 pt-3 border-t border-slate-800">
                {result}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
