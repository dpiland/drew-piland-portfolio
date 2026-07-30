import type { Metric } from "@/data/unifyLaunch";

interface MetricStripProps {
  metrics: Metric[];
}

/**
 * The BLUF. Sits directly under the hero deck so the result is readable
 * before any of the reasoning.
 */
export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {metrics.map(({ value, label, note }, i) => (
        <div
          key={label}
          className={`rounded-2xl border border-slate-800 bg-slate-900/60 p-6 animate-fade-up delay-${(i + 3) * 100}`}
        >
          <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            {value}
          </div>
          <div className="text-sm font-medium text-blue-400 mb-1.5">{label}</div>
          <div className="text-sm text-slate-500 leading-snug">{note}</div>
        </div>
      ))}
    </div>
  );
}
