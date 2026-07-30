import { funnel } from "@/data/unifyLaunch";

/**
 * Why the fix was qualification and not top of funnel. The 60% here is a
 * standing pipeline characteristic, not a launch outcome, and the copy on the
 * page treats it that way.
 */
export function FunnelDiagnostic() {
  return (
    <figure className="my-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 space-y-4">
        {funnel.map(({ label, state, width, healthy }) => (
          <div key={label}>
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <span className="text-sm font-medium text-slate-300">{label}</span>
              <span
                className={`text-sm font-semibold shrink-0 ${
                  healthy ? "text-blue-400" : "text-amber-400"
                }`}
              >
                {state}
              </span>
            </div>
            <div className="h-3 rounded-full bg-slate-800/80 overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  healthy ? "bg-blue-500/70" : "bg-amber-500/70"
                }`}
                style={{ width }}
              />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-sm text-slate-500 leading-relaxed">
        The win rate told me the message worked once a buyer heard it properly.
        Getting the right deals to qualified was the constraint, so that&apos;s
        where the enablement went.
      </figcaption>
    </figure>
  );
}
