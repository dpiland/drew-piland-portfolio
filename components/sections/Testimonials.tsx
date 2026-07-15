import { ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-28 px-6 relative">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59, 130, 246, 0.04), transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white">
            What Colleagues Say
          </h2>
          <p className="mt-4 text-slate-400">
            Recommendations from LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-5 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-7 hover:border-slate-700 transition-colors"
            >
              {/* Decorative quote mark */}
              <span className="text-5xl font-serif leading-none text-blue-500/30 select-none">
                &ldquo;
              </span>

              <div className="text-slate-300 leading-relaxed text-[0.95rem] flex-1 -mt-3 space-y-3">
                {t.quote.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-slate-400 text-sm">{t.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.company}</p>
                  <p className="text-slate-600 text-xs mt-1 italic">{t.relationship}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {t.year && (
                    <span className="text-xs text-slate-600">{t.year}</span>
                  )}
                  {t.linkedInUrl && (
                    <a
                      href={t.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-400 transition-colors"
                      aria-label="View on LinkedIn"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
