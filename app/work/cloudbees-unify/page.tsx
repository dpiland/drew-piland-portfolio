import type { Metadata } from "next";
import Link from "next/link";
import { CaseHeader } from "@/components/case-study/CaseHeader";
import { CaseSection } from "@/components/case-study/CaseSection";
import { MetricStrip } from "@/components/case-study/MetricStrip";
import { StoryArc } from "@/components/case-study/StoryArc";
import { PullQuote } from "@/components/case-study/PullQuote";
import { SuccessMetrics } from "@/components/case-study/SuccessMetrics";
import { LaunchTimeline } from "@/components/case-study/LaunchTimeline";
import { RolePillars } from "@/components/case-study/RolePillars";
import { PositioningDiagram } from "@/components/case-study/PositioningDiagram";
import { Pitch } from "@/components/case-study/Pitch";
import { PublishedAssets } from "@/components/case-study/PublishedAssets";
import { ResourceLink } from "@/components/case-study/ResourceLink";
import { KeyResources } from "@/components/case-study/KeyResources";
import { MessageFlow } from "@/components/case-study/MessageFlow";
import { CadenceGrid } from "@/components/case-study/CadenceGrid";
import { LifecycleStrip } from "@/components/case-study/LifecycleStrip";
import { FunnelDiagnostic } from "@/components/case-study/FunnelDiagnostic";
import { heroMetrics, validation } from "@/data/unifyLaunch";

const TITLE = "CloudBees Unify: an end-to-end GTM launch | Drew Piland";
const DESCRIPTION =
  "February to May 2025. How I repositioned CloudBees from the Jenkins company to the open enterprise control plane: how I defined success, the launch shape, the narrative and its pre-launch proof, and how the field carried it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://drewpiland.com/work/cloudbees-unify" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://drewpiland.com/work/cloudbees-unify",
    siteName: "Drew Piland",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function CloudBeesUnifyCaseStudy() {
  return (
    <>
      <CaseHeader />

      <main>
        {/* ── The frame. States the launch before anything else. ── */}
        <section className="relative px-6 pt-20 pb-14 hero-grid overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59, 130, 246, 0.13), transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="animate-fade-up text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-6">
              End-to-end GTM launch
            </div>

            <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-tight mb-7">
              CloudBees Unify.
              <br className="hidden sm:block" />{" "}
              <span className="gradient-text">February to May 2025.</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg text-slate-400 leading-relaxed max-w-3xl mb-10">
              One launch, sixteen weeks. We repositioned CloudBees from the
              Jenkins company to the control plane for software delivery,
              because a competitor was about to define that category for us.
            </p>

            <div className="animate-fade-up delay-300 mb-10">
              <MetricStrip metrics={heroMetrics} />
            </div>

            <div className="animate-fade-up delay-500">
              <StoryArc />
            </div>
          </div>
        </section>

        {/* ── 1. Success metrics ──────────────────── */}
        <CaseSection
          id="metrics"
          label="01 / Success metrics"
          title="I refused to measure this launch by what shipped."
        >
          <p>
            Impressions can look great and a launch can still be failing
            underneath them. So I set the measures before we started, and picked
            one to steer by. The rest were instrumentation.
          </p>

          <SuccessMetrics />
        </CaseSection>

        {/* ── 2. GTM strategy ─────────────────────── */}
        <CaseSection
          id="strategy"
          label="02 / GTM strategy"
          title="The launch was anchored on field readiness, not on an event."
        >
          <p>
            Most launches this size get hung on a conference date. Ours
            couldn&apos;t. CloudBees had been the only real option in its
            category for a decade, so our reps had never had to sell
            competitively, and that (not awareness) was the binding constraint.
            The anchor became an internal moment: a mini sales kickoff where the
            field got the new story in person, with the public launch
            deliberately sequenced after it.
          </p>

          <LaunchTimeline />

          <p className="text-slate-300">
            The date itself was set by a competitor, not a calendar. My bar for
            calling it launched: sales can tell the story and customers will
            vouch for it.
          </p>

          <ResourceLink
            slug="launch-bom"
            label="The full Tier 1 bill of materials, with a RACI across nine functions"
          />

          <div className="pt-4">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-600 mb-4">
              What I owned
            </div>
            <RolePillars />
          </div>
        </CaseSection>

        {/* ── 3. Positioning & messaging ──────────── */}
        <CaseSection
          id="positioning"
          label="03 / Positioning & messaging"
          title="The market's answer to tool sprawl was consolidation. I bet against it."
        >
          <PositioningDiagram />

          <ResourceLink
            slug="positioning"
            label="The full positioning exercise, worked from competitive alternatives up"
          />

          <p>
            We named it the control plane in February 2025, before the term was
            in common use. And it was a risk argument rather than a preference.
            Bind your governance model to one vendor and you&apos;ve bet your
            own audit exposure on that vendor&apos;s release cadence.
          </p>

          <PullQuote cite="The disqualifying test I wrote into the analyst briefing, and applied to us">
            A coordination layer whose only fully supported stack is its own is
            not a coordination layer. It is a migration with governance attached
            as the incentive.
          </PullQuote>

          <Pitch />

          <ResourceLink
            slug="messaging-house"
            label="The pillar structure underneath it, with the unproven claims marked as unproven"
          />

          <div className="pt-2">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-3">
              The same position, written twice
            </div>
            <p className="text-slate-400 leading-relaxed mb-5">
              Both of these carry our CPO&apos;s byline and I informed the
              narrative behind them. They&apos;re a pair on purpose. The first
              is the launch manifesto written for the architect. The second is
              what I rebuilt five months later, once win/loss showed the message
              wasn&apos;t reaching the people who sign.
            </p>
            <PublishedAssets />
          </div>

          <div className="pt-2">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-4">
              How I knew it worked before we launched
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {validation.map(({ method, detail }) => (
                <div
                  key={method}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <div className="text-sm font-semibold text-white mb-1.5">
                    {method}
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    {detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ResourceLink
            slug="analyst-submission"
            label="Why we submitted on the product line that would become Unify, not on our strongest tooling"
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400 mb-2.5">
              Why this didn&apos;t read as a rebrand
            </div>
            <p className="text-slate-400 leading-relaxed">
              I kept two things named separately. The control plane is where
              policy and evidence get defined, and release orchestration is the
              execution layer where they actually run. Collapse those into one
              word and the whole reposition reads as new packaging on the
              product we already sold.
            </p>
          </div>
        </CaseSection>

        {/* ── 4. Coordination & channels ──────────── */}
        <CaseSection
          id="coordination"
          label="04 / Coordination"
          title="PMM owned the source. Every channel downstream inherited it."
        >
          <p>
            I didn&apos;t hand marketing a positioning doc and hope. Positioning
            and messaging sat with PMM, and the press release, the blogs, the
            webinar series, the campaigns, and the sales plays were all built
            off it rather than each writing their own version.
          </p>

          <MessageFlow />

          <p>
            Then the internal half, which is the part that decides whether a
            message survives past launch week.
          </p>

          <CadenceGrid />

          <p>
            The teaching piece was a course I built called SDLC 101. Our reps
            knew our products and not the lifecycle those products lived inside.
            Customers don&apos;t buy point solutions, they buy solutions to
            their problems, and you can&apos;t sell to a problem you can&apos;t
            locate.
          </p>

          <LifecycleStrip />

          <ResourceLink
            slug="sdlc-101"
            label="The full course, all seven stages, with the vendors and champions reps would meet at each"
          />

          <p>
            The organizing rule was embrace, don&apos;t replace. Name the one
            stage we genuinely owned, and everywhere else connect to what the
            customer already ran instead of pitching a rip and replace. A rep
            who can place a stated pain onto a stage knows in the same instant
            whether we have an earned claim, an embrace claim, or no claim at
            all.
          </p>

          <ResourceLink
            slug="command-of-the-message"
            label="The discovery-to-proof structure reps actually sold with"
          />

          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.05] p-6 sm:p-7">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-400 mb-3">
              What went wrong
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              The impression data was excellent. Marketing was happy with it.
              None of it was converting to qualified pipeline, and a quarter of
              good-looking campaign numbers is exactly how a launch dies
              quietly. Win/loss told me why: the message was landing with
              architects, not the VPs who sign. So I rebuilt the executive
              materials around business outcomes, then fixed the distribution
              underneath with dedicated sales plays, rep training, and Gong
              scoring on whether the message was actually being said in deals. A
              better message that never gets spoken is worth nothing. The
              October piece linked in section 03 is what that rebuild produced.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              That scoring caught something I didn&apos;t plan for, too. Some
              pitches that read as well-prepared turned out to be reps reading
              generated text back to a customer.
            </p>
          </div>

          <p>
            That squared with what the pipeline had been telling me all along.
            Top of funnel was healthy, and once deals reached qualified we won
            about 60% of them, which is a standing characteristic of our
            pipeline rather than something this launch produced. Volume was
            never the constraint. Getting the right deals to qualified was.
          </p>

          <FunnelDiagnostic />
        </CaseSection>

        {/* ── 5. Learnings ────────────────────────── */}
        <CaseSection
          id="learnings"
          label="05 / Learnings"
          title="We marketed a unified platform while we were still launching individual products."
        >
          <p>
            Nine months in, that was the honest read. Externally the story was
            one platform. Internally we were still sequencing releases feature
            by feature, prioritized by engineering capacity, and that gap comes
            due the first time a customer asks the platform to behave like one.
            It changed how I organize launches, around customer outcomes rather
            than around whatever happens to be shipping.
          </p>
          <p>
            That same nine-month mark is where we were still working out where
            AI fit into the platform story, what we settled on calling the
            context plane, parallel to the control plane language from launch.
            Getting that timing right mattered: it&apos;s what carried into how
            the messaging evolved for our SKO in February 2026.
          </p>
          <p>
            The smaller one I keep relearning is to validate with customers
            before the internal moment, not after. And a launch is a program,
            not a moment. Nearly all of the learning is in the first 90 days
            after the announcement.
          </p>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 mb-3">
              What I&apos;d do differently
            </div>
            <p className="text-slate-300 leading-relaxed">
              We ran this with an awareness-grade launch and pipeline-grade
              metrics, and nobody said that out loud on day one. If I&apos;d
              declared the objective as pipeline at T-minus-16-weeks instead of
              letting the metrics imply it later, funnel instrumentation would
              have been critical path from the start rather than something I
              backfilled after a quarter of great impressions and no pipeline.
              The flat quarter was a planning failure before it was a messaging
              one.
            </p>
          </div>

          <ResourceLink
            slug="launch-bom"
            label="The BOM rebuilt the way it should have been scoped on day one"
          />
        </CaseSection>

        {/* ── Why this work ───────────────────────── */}
        <section className="px-6 py-20 border-t border-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/[0.06] p-7 sm:p-9">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
                Why this is the work I want more of
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Product marketing is the Rosetta Stone of the org. Engineering
                  has one language, sales has another, and the buyer has a
                  third. Standing in the middle and turning one into the other
                  is the part of this job I actually like.
                </p>
                <p>
                  The moment I chase is narrow and I know exactly what it sounds
                  like: a rep I&apos;ve never coached uses my language on a call
                  I&apos;m not on, and a customer answers in the same words. On
                  this launch that took sixteen weeks of positioning work and
                  then a year of keeping it alive. I&apos;d do it again
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Appendix ────────────────────────────── */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-600 mb-6">
              Appendix / Context, if it comes up
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <div className="text-base font-semibold text-white mb-3">
                  Before (2023)
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I proved the same Jenkins-to-platform reframe on our release
                  orchestration line, a $45M business, where it drove{" "}
                  <strong className="text-slate-300 font-semibold">
                    +26% ARR
                  </strong>
                  . Separate launch, two years earlier, and I keep it separate.
                  It&apos;s why we knew the motion was repeatable.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
                <div className="text-base font-semibold text-white mb-3">
                  After (2026)
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  At a January product offsite I reframed three separately
                  queued capabilities into one buyer outcome and pushed the
                  launch trigger from GA to demoable.{" "}
                  <strong className="text-slate-300 font-semibold">
                    I moved on before that phase reached GA, so there&apos;s no
                    downstream number attached to it.
                  </strong>{" "}
                  I&apos;d rather say that than imply one.
                </p>
                <div className="mt-4">
                  <ResourceLink
                    slug="progressive-delivery"
                    label="The full reframe: three features into one platform bet"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key resources ───────────────────────── */}
        <section
          id="resources"
          className="px-6 py-20 border-t border-slate-900 scroll-mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
              Key resources
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-10 max-w-3xl">
              Everything referenced above, in full.
            </h2>
            <KeyResources />
          </div>
        </section>

        {/* ── Footer ──────────────────────────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                This is built to be talked through.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-7 max-w-2xl">
                Happy to walk the whole thing live, including the calls
                I&apos;d make differently and the ones I still think were right.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:jdpiland6@gmail.com"
                  className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors"
                >
                  Get in touch
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                >
                  See more work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
