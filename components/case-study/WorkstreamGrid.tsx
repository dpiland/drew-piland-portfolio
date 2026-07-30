import { workstreams } from "@/data/unifyLaunch";

export function WorkstreamGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
      {workstreams.map(({ title, detail }, i) => (
        <div
          key={title}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 card-hover"
        >
          <div className="text-xs font-semibold text-slate-600 mb-3 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="text-base font-semibold text-white mb-2">{title}</div>
          <p className="text-sm text-slate-400 leading-relaxed">{detail}</p>
        </div>
      ))}
    </div>
  );
}
