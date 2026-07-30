import { downstreamChannels } from "@/data/unifyLaunch";

/**
 * One source, many channels. The point of the visual is the direction of the
 * arrow: PMM owned positioning and messaging, and everything downstream
 * inherited it instead of authoring its own version.
 */
export function MessageFlow() {
  return (
    <figure className="my-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,15rem)_auto_1fr] gap-5 md:gap-6 items-center">
          {/* The source */}
          <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-5">
            <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-400 mb-2">
              PMM owned this
            </div>
            <div className="text-lg font-semibold text-white leading-snug">
              Positioning &amp; messaging
            </div>
          </div>

          {/* Connector */}
          <div
            className="hidden md:flex items-center justify-center text-slate-700"
            aria-hidden="true"
          >
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
              <path
                d="M0 7h24m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="md:hidden flex justify-center text-slate-700"
            aria-hidden="true"
          >
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
              <path
                d="M7 0v20m0 0-5-5m5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* What inherited it */}
          <div className="flex flex-wrap gap-2">
            {downstreamChannels.map((channel) => (
              <span
                key={channel}
                className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-400"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-slate-500 leading-relaxed">
        Six channels saying the same thing is not a coordination win, it is an
        ownership decision. Marketing executed against the messaging rather than
        interpreting it, which is why the story held together in market.
      </figcaption>
    </figure>
  );
}
