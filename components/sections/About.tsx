import { SectionLabel } from "@/components/ui/SectionLabel";

// EDIT: Update these with your real numbers
const stats = [
  { value: "30+", label: "Product Launches" },
  { value: "9", label: "Years in B2B Tech" },
  { value: "500+", label: "Sales Reps Enabled" },
  { value: "F500", label: "Partner Brands" },
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
            {/* EDIT: Make this your own — voice, tenure, industries, personality */}
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Senior PMM who specializes in B2B tech — the kind
                with long sales cycles, complex buyers, and products that are
                genuinely hard to explain. My job is to make that easier:
                cleaner positioning, sharper messaging, and narratives that give
                sales teams something they actually want to use.
              </p>
              <p>
                Over the years I&apos;ve worked across DevOps, CDN, edge
                infrastructure, and enterprise software — categories where the
                product advantage is real, but invisible until someone tells
                the right story. That&apos;s where I come in.
              </p>
              {/* EDIT: Update [sport/activity] with your hobby */}
              <p>
                Outside of work, I&apos;m usually on the golf course —
                where the feedback is immediate and humbling. Golf has a
                way of sharpening how you think about strategy: you can&apos;t
                control every variable, so you focus on the decision in
                front of you and play to your strengths. That mindset
                carries into how I work.
              </p>
            </div>
          </div>

          {/* Right: stat grid */}
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
    </section>
  );
}
