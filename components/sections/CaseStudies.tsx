import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudies() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Featured Work
          </h2>
          {/* EDIT: Customize this sub-heading */}
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Real problems, clear thinking, measurable results.
          </p>
        </div>
        {/* EDIT: Add or remove case study cards in data/caseStudies.ts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
