import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <div className="card-hover rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col gap-6">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-1">
          {study.category}
        </p>
        <h3 className="text-xl font-semibold text-white">{study.title}</h3>
        <p className="text-sm text-slate-500 mt-0.5">{study.company}</p>
      </div>

      {/* ACIA breakdown */}
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
            Challenge
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">{study.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
            Insight
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">{study.insight}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
            Action
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">{study.action}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
            Impact
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">{study.impact}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800 mt-auto">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
