import {
  sdlcStages,
  zoneLabels,
  zoneMeaning,
  OURS,
  type Zone,
} from "@/data/sdlc101";

const zoneCard: Record<Zone, string> = {
  outside: "border-slate-800 bg-slate-900/50",
  heritage: "border-slate-500/60 bg-slate-800/40",
  expansion: "border-blue-500/40 bg-blue-500/[0.06]",
};

const zoneBadge: Record<Zone, string> = {
  outside: "bg-slate-800 text-slate-500",
  heritage: "bg-slate-600/40 text-slate-200",
  expansion: "bg-blue-500/20 text-blue-400",
};

const zoneBar: Record<Zone, string> = {
  outside: "bg-slate-800 text-slate-600 border-slate-800",
  heritage: "bg-slate-800/70 text-white border-slate-500",
  expansion: "bg-blue-500/15 text-blue-400 border-blue-500/50",
};

/**
 * The course as a map rather than as prose. The strip carries the shape (one
 * box we owned, four we claimed), the cards carry what a rep actually needed
 * per stage: who is in the room and whose logo is already on the wall.
 */
export function SdlcMap() {
  return (
    <section className="mb-14 not-prose">
      {/* The shape */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6 mb-4">
        <div className="overflow-x-auto">
          <div className="flex items-stretch gap-1.5 min-w-[620px]">
            {sdlcStages.map(({ name, zone }) => (
              <div
                key={name}
                className={`flex-1 rounded-lg px-2 py-3 text-center border text-sm font-semibold ${zoneBar[zone]}`}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex gap-1.5 min-w-[620px] mt-2">
            <div className="flex-[2]" aria-hidden="true" />
            <div className="flex-1">
              <div className="h-2 border-l border-r border-b border-slate-500 rounded-b-md" />
              <div className="text-xs text-slate-400 text-center mt-1.5 font-medium">
                Owned
              </div>
            </div>
            <div className="flex-[4]">
              <div className="h-2 border-l border-r border-b border-blue-500/50 rounded-b-md" />
              <div className="text-xs text-blue-400 text-center mt-1.5 font-medium">
                Claimed by coordinating, not replacing
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zone legend */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        {(Object.keys(zoneLabels) as Zone[]).map((z) => (
          <div
            key={z}
            className={`rounded-xl border p-4 ${zoneCard[z]}`}
          >
            <span
              className={`inline-block text-[10px] font-semibold tracking-[0.14em] uppercase px-2 py-0.5 rounded mb-2 ${zoneBadge[z]}`}
            >
              {zoneLabels[z]}
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              {zoneMeaning[z]}
            </p>
          </div>
        ))}
      </div>

      {/* Stage by stage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sdlcStages.map(({ name, zone, what, roles, vendors, why }, i) => (
          <div
            key={name}
            className={`rounded-2xl border p-5 flex flex-col ${zoneCard[zone]}`}
          >
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-xs font-semibold text-slate-600 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-semibold text-white">{name}</span>
              <span
                className={`ml-auto text-[10px] font-semibold tracking-[0.14em] uppercase px-2 py-0.5 rounded ${zoneBadge[zone]}`}
              >
                {zoneLabels[zone]}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">{what}</p>

            <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-600 mb-1.5">
              Who is in the room
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {roles}
            </p>

            <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-600 mb-2">
              Whose logo is on the wall
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {vendors.map((v) => {
                const ours = OURS.includes(v);
                return (
                  <span
                    key={v}
                    className={`rounded-md px-2 py-1 text-xs border ${
                      ours
                        ? "border-blue-500/40 bg-blue-500/10 text-blue-400 font-medium"
                        : "border-slate-800 bg-slate-900/70 text-slate-500"
                    }`}
                  >
                    {v}
                  </span>
                );
              })}
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mt-auto pt-3 border-t border-slate-800/80">
              {why}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
