import { CheckCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { highlights } from "@/data/highlights";

export function CareerHighlights() {
  return (
    <section id="highlights" className="py-28 px-6 relative">
      {/* Subtle center glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59, 130, 246, 0.04), transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Impact</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            Career Highlights
          </h2>
          <p className="mt-4 text-slate-400">The work that moved the needle.</p>
        </div>
        {/* EDIT: Update achievement bullets in data/highlights.ts */}
        <ul className="space-y-3">
          {highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-slate-800/60 bg-slate-900/40 hover:border-slate-700 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
