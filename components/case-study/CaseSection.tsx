import { SectionLabel } from "@/components/ui/SectionLabel";

interface CaseSectionProps {
  /** Uppercase eyebrow, doubles as the section's act number */
  label: string;
  /** The section's punchline. Written as a claim, not a topic. */
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function CaseSection({ label, title, children, id }: CaseSectionProps) {
  return (
    // scroll-mt clears the 64px sticky header when the story-arc nav jumps here
    <section id={id} className="px-6 py-20 border-t border-slate-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-8 max-w-3xl">
          {title}
        </h2>
        <div className="space-y-6 text-slate-400 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
