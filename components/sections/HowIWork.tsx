import { SectionLabel } from "@/components/ui/SectionLabel";
import { TraitCard } from "@/components/ui/TraitCard";
import { traits } from "@/data/traits";

export function HowIWork() {
  return (
    <section id="how-i-work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Working Style</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            What You Get With Me
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Beyond the resume. This is how I actually show up.
          </p>
        </div>
        {/* EDIT: Customize trait copy in data/traits.ts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {traits.map((trait) => (
            <TraitCard key={trait.title} {...trait} />
          ))}
        </div>
      </div>
    </section>
  );
}
