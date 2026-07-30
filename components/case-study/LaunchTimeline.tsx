import { timeline } from "@/data/unifyLaunch";

/**
 * Vertical rail. Sixteen weeks from competitive signal to launch, then the
 * two beats after launch that actually decided whether it worked.
 */
export function LaunchTimeline() {
  return (
    <div className="relative my-10">
      {/* The rail */}
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-slate-800 to-slate-800"
        aria-hidden="true"
      />

      <ol className="space-y-8">
        {timeline.map(({ when, title, detail, emphasis }) => (
          <li key={when + title} className="relative pl-10">
            {/* Node */}
            <span
              className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                emphasis
                  ? "border-blue-400 bg-blue-500"
                  : "border-slate-700 bg-slate-950"
              }`}
              aria-hidden="true"
            />
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 mb-1">
              {when}
            </div>
            <div
              className={`text-lg font-semibold mb-1.5 ${
                emphasis ? "text-blue-400" : "text-white"
              }`}
            >
              {title}
            </div>
            <p className="text-slate-400 leading-relaxed max-w-2xl">{detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
