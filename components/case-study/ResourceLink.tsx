import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWorkSample } from "@/data/workSamples";

/**
 * Inline pointer to a full work sample, placed at the moment in the narrative
 * where that document is actually the evidence.
 */
export function ResourceLink({ slug, label }: { slug: string; label: string }) {
  const sample = getWorkSample(slug);
  if (!sample) return null;

  return (
    <Link
      href={`/work/cloudbees-unify/${slug}`}
      className="group not-prose flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 card-hover"
    >
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-400 mb-1">
          {sample.framework}
        </span>
        <span className="block text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
          {label}
        </span>
      </span>
      <span className="flex items-center gap-2 shrink-0">
        <span className="text-xs text-slate-600 hidden sm:inline">
          {sample.readingTime}
        </span>
        <ArrowRight
          className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
