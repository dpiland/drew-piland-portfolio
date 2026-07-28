import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Outcomes, not volume. Scope facts (launches, reps, partner orgs) live in
// the chip row under Case Studies so the same claims aren't made twice.
const stats = [
  { value: "+26%", label: "ARR on a $45M product line" },
  { value: "2.6x", label: "Avg deal size, $100K to $265K" },
  { value: "+272%", label: "YoY partner cloud revenue" },
  { value: "75%", label: "Rep adoption, AI knowledge base" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: narrative */}
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 leading-tight">
              The person behind
              <br />
              the positioning.
            </h2>
            {/* EDIT: Make this your own: voice, tenure, industries, personality */}
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I work on B2B tech with long sales cycles, buying committees of
                six or more, and products that are genuinely hard to explain.
                My job is to make the explaining easier, and to hand sales a
                story they&apos;ll use without being told to.
              </p>
              <p>
                I&apos;ve done this across DevOps, CDN, infrastructure, and
                enterprise software and services. In all of them the product
                advantage was real and invisible until somebody put it into
                words a buyer recognized.
              </p>
              <p>
                Outside work it&apos;s my wife and three young kids, plus a round
                of golf when I can sneak one in. Golf is mostly an exercise in
                accepting that you cannot control every variable, which turns
                out to be decent practice for this job.
              </p>
            </div>
          </div>

          {/* Right: photo + stat grid */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/headshot.jpg"
                alt="Drew Piland"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col items-start"
                >
                  <span className="text-4xl font-bold text-white mb-1.5">{value}</span>
                  <span className="text-sm text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
