import { lifecycle } from "@/data/unifyLaunch";

const zoneStyles = {
  outside: "border-slate-800 bg-slate-900/60 text-slate-600",
  heritage: "border-slate-500 bg-slate-800/60 text-white",
  expansion: "border-blue-500/50 bg-blue-500/10 text-blue-400",
} as const;

/**
 * The reposition in one picture: the market had CloudBees filed under Build
 * (CI, the Jenkins box) for a decade. Unify was the argument that we belonged
 * across Test through Govern. One box versus four.
 *
 * Deliberately does not render a per-stage champion or competitor table. The
 * SDLC 101 course had one, but it is not documented stage by stage in any
 * source I can verify, so the caption describes it rather than inventing it.
 */
export function LifecycleStrip() {
  return (
    <figure className="my-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7">
        <div className="overflow-x-auto">
          <div className="flex items-stretch gap-1.5 min-w-[600px]">
            {lifecycle.map(({ name, zone }) => (
              <div
                key={name}
                className={`flex-1 rounded-lg px-3 py-4 text-center border ${zoneStyles[zone]}`}
              >
                <div className="text-sm font-semibold">{name}</div>
              </div>
            ))}
          </div>

          {/* Brackets: the box we were in, and the ground Unify claimed */}
          <div className="flex gap-1.5 min-w-[600px] mt-2">
            <div className="flex-[2]" aria-hidden="true" />
            <div className="flex-1">
              <div className="h-2 border-l border-r border-b border-slate-500 rounded-b-md" />
              <div className="text-xs text-slate-400 text-center mt-2 font-medium leading-snug">
                Where the market
                <br />
                had us filed
              </div>
            </div>
            <div className="flex-[4]">
              <div className="h-2 border-l border-r border-b border-blue-500/50 rounded-b-md" />
              <div className="text-xs text-blue-400 text-center mt-2 font-medium leading-snug">
                What Unify let us sell
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-slate-500 leading-relaxed">
        For a decade the market knew us for one box. We already had the products
        to compete across four, and Unify was the argument that connected them.
        The SDLC 101 course taught reps the whole lifecycle, not just our slice,
        then showed which competitor to expect and which champion to look for at
        each stage. Hearing a particular competitor named told a rep where the
        deal already was.
      </figcaption>
    </figure>
  );
}
