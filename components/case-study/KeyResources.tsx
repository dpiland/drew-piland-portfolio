import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { workSamples } from "@/data/workSamples";
import { publishedAssets, pitch } from "@/data/unifyLaunch";

/**
 * Everything referenced above, in one place. Work samples are hosted here;
 * the published assets are live CloudBees properties.
 */
export function KeyResources() {
  return (
    <div className="space-y-10">
      {/* The reconstructions */}
      <div>
        <div className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-2">
          Work samples
        </div>
        <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-2xl">
          Reconstructions written from public CloudBees material plus proof
          points I can personally verify. No confidential detail, no roadmap, no
          invented numbers. Where a claim needs evidence CloudBees never
          published, it says so.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {workSamples.map(({ slug, title, framework, blurb, readingTime }) => (
            <Link
              key={slug}
              href={`/work/cloudbees-unify/${slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col card-hover"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-400">
                  {framework}
                </span>
                <span className="text-xs text-slate-600 shrink-0">
                  {readingTime}
                </span>
              </div>
              <div className="flex items-start gap-1.5 mb-2">
                <span className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  {title}
                </span>
                <ArrowRight
                  className="w-4 h-4 shrink-0 mt-1 text-slate-600 group-hover:text-blue-400 transition-colors"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{blurb}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* The live properties */}
      <div>
        <div className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-2">
          Published CloudBees assets
        </div>
        <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-2xl">
          Live properties. The two posts carry our CPO&apos;s byline and I
          informed the narrative behind them.
        </p>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
          {[
            {
              href: pitch.href,
              title: "CloudBees Unify product page",
              meta: "Web copy",
            },
            ...publishedAssets.map((a) => ({
              href: a.href,
              title: a.title,
              meta: a.date,
            })),
          ].map(({ href, title, meta }, i) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between gap-4 px-5 sm:px-6 py-4 hover:bg-slate-800/40 transition-colors ${
                i > 0 ? "border-t border-slate-800" : ""
              }`}
            >
              <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                {title}
              </span>
              <span className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-slate-600 hidden sm:inline">
                  {meta}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
