import { cadence } from "@/data/unifyLaunch";

export function CadenceGrid() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
      {cadence.map(({ who, when, what }, i) => (
        <div
          key={who}
          className={`grid grid-cols-1 sm:grid-cols-[9rem_7rem_1fr] gap-1 sm:gap-4 px-5 sm:px-6 py-4 ${
            i > 0 ? "border-t border-slate-800" : ""
          }`}
        >
          <div className="text-sm font-semibold text-white">{who}</div>
          <div className="text-sm text-blue-400">{when}</div>
          <div className="text-sm text-slate-400 leading-relaxed">{what}</div>
        </div>
      ))}
    </div>
  );
}
