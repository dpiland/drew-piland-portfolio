import { SectionLabel } from "@/components/ui/SectionLabel";
import { PillarCard } from "@/components/ui/PillarCard";
import { pillars } from "@/data/pillars";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            What I Do
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Four core disciplines. Every engagement draws on all of them.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
