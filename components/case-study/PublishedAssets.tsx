import { ArrowUpRight } from "lucide-react";
import { publishedAssets } from "@/data/unifyLaunch";

/**
 * The messaging, in public, as a matched pair. The persona split between these
 * two posts is the flat-quarter correction with dates on it, which is why they
 * render side by side rather than as a link list.
 */
export function PublishedAssets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {publishedAssets.map(
        ({ phase, date, title, href, audience, line, note }, i) => {
          const rebuild = i === 1;
          return (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-2xl border p-6 flex flex-col card-hover ${
                rebuild
                  ? "border-blue-500/40 bg-blue-500/[0.06]"
                  : "border-slate-800 bg-slate-900/60"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <span
                  className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${
                    rebuild ? "text-blue-400" : "text-slate-500"
                  }`}
                >
                  {phase}
                </span>
                <span className="text-xs text-slate-600 shrink-0">{date}</span>
              </div>

              <div className="flex items-start gap-2 mb-3">
                <span className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {title}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 shrink-0 mt-1 text-slate-600 group-hover:text-blue-400 transition-colors"
                  aria-hidden="true"
                />
              </div>

              <div className="text-xs font-medium text-slate-500 mb-4">
                Written for: {audience}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic mb-4 flex-1">
                &ldquo;{line}&rdquo;
              </p>

              <div className="text-sm text-slate-500 leading-relaxed pt-4 border-t border-slate-800">
                {note}
              </div>
            </a>
          );
        }
      )}
    </div>
  );
}
