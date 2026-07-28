import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

// Scope that frames the case studies below, absorbed from the old
// Career Highlights section so the same facts aren't stated twice.
const scope = [
  "20+ product launches",
  "500+ seller sales orgs",
  "10+ partner orgs",
  "CEO, CMO, and co-founder alignment",
];

export function CaseStudies() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Featured Work
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Real problems, clear thinking, measurable results.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {scope.map((item) => (
            <span
              key={item}
              className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
