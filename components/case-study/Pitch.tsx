import { ArrowUpRight } from "lucide-react";
import { pitch } from "@/data/unifyLaunch";

/**
 * The positioning compressed into the words that actually shipped. Rendered
 * as the product's own voice, not as description of it, because "here is how
 * it sounds" beats "here is what I decided" in a portfolio walkthrough.
 */
export function Pitch() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7 sm:p-9">
      <div className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 mb-6">
        The pitch, in the words that shipped
      </div>

      <p className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
        {pitch.hook}
      </p>
      <p className="text-slate-400 leading-relaxed mb-5">{pitch.setup}</p>
      <p className="text-slate-300 leading-relaxed mb-5">{pitch.body}</p>

      <p className="text-lg sm:text-xl font-semibold gradient-text mb-7">
        {pitch.kicker}
      </p>

      <a
        href={pitch.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
      >
        cloudbees.com/unify
        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}
