import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

// EDIT: Update these with your real numbers
const stats = [
  { value: "20+", label: "Product Launches" },
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
            {/* EDIT: Make this your own: voice, tenure, industries, personality */}
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Senior PMM who specializes in B2B tech, the kind
                with long sales cycles, complex buyers, and products that are
                genuinely hard to explain. My job is to make that easier:
                cleaner positioning, sharper messaging, and narratives that give
                sales teams something they actually want to use.
              </p>
              <p>
                Over the years I&apos;ve worked across DevOps, CDN,
                infrastructure, and enterprise software and services, categories
                where the product advantage is real, but invisible until someone
                tells the right story. That&apos;s where I come in.
              </p>
              <p>
                Outside work, most of my time goes to my wife and three young
                kids, with the occasional round of golf when I can sneak away.
                It&apos;s a humbling teacher of the same thing the job demands:
                you can&apos;t control every variable, so you focus on the next
                decision and play to your strengths.
              </p>
            </div>
          </div>

          {/* Right: photo + stat grid */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/headshot.png"
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
