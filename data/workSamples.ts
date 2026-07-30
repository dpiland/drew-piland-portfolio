/**
 * Long-form work samples behind the CloudBees Unify case study.
 *
 * Source of truth for the prose is ~/Projects/job-applications/Career/
 * work-samples/cloudbees-unify-*.md. The copies in content/work-samples/ are
 * what actually deploy, because Vercel only checks out this repo.
 *
 * Editing a source file does NOT update the site. Run `npm run sync-samples`
 * and commit content/work-samples/. `npm run check-samples` reports drift
 * without writing. The filename map lives in scripts/sync-work-samples.mjs
 * and must stay aligned with the `file` values below.
 */

export interface WorkSample {
  slug: string;
  /** Source filename in content/work-samples/ */
  file: string;
  title: string;
  /** Named method, shown as the eyebrow. Fills the "which frameworks" question. */
  framework: string;
  blurb: string;
  /** Roughly how long the doc takes to read, for the resources list */
  readingTime: string;
}

export const workSamples: WorkSample[] = [
  {
    slug: "launch-bom",
    file: "launch-bom.md",
    title: "Launch BOM: CloudBees Unify",
    framework: "Tier 1 launch bill of materials",
    blurb:
      "The plan as it should have been briefed on day one, with a RACI across nine functions. Its whole point is the correction: funnel instrumentation belonged on the critical path, not backfilled after a quarter of great impressions and no pipeline.",
    readingTime: "8 min",
  },
  {
    slug: "positioning",
    file: "positioning.md",
    title: "Positioning: CloudBees Unify",
    framework: "Ten-component positioning method",
    blurb:
      "Worked from competitive alternatives up rather than from the product down, including the alternative most positioning exercises forget: the buyer keeps governing manually and buys nothing.",
    readingTime: "12 min",
  },
  {
    slug: "messaging-house",
    file: "messaging-house.md",
    title: "Messaging House: CloudBees Unify",
    framework: "Messaging house",
    blurb:
      "The pillar structure under the launch narrative, with claims marked UNPROVEN where CloudBees has not published the evidence, plus the one messaging risk the company actually ran into.",
    readingTime: "12 min",
  },
  {
    slug: "command-of-the-message",
    file: "command-of-the-message.md",
    title: "Command of the Message: CloudBees Unify",
    framework: "Force Management Command of the Message",
    blurb:
      "Discovery-to-proof structure for selling against a consolidation platform or against the status quo. Where the honest answer was not quantified, it says so.",
    readingTime: "12 min",
  },
  {
    slug: "sdlc-101",
    file: "sdlc-101.md",
    title: "SDLC 101: The Course That Taught Reps the Lifecycle",
    framework: "Seven-stage lifecycle map",
    blurb:
      "Every stage tagged against where CloudBees had an earned claim, an embrace claim, or no claim at all. Includes the deploy-versus-release mix-up every new rep walked in with, and the cake analogy they actually repeated back.",
    readingTime: "5 min",
  },
  {
    slug: "analyst-submission",
    file: "analyst-submission.md",
    title: "Analyst Submissions: Positioning Cloud Native First",
    framework: "Gartner MQ and Forrester Wave submission strategy",
    blurb:
      "February 2025. Why we submitted on the product line that would become Unify instead of on our strongest legacy tooling, and what that cost us on paper to buy a truthful record before the May launch.",
    readingTime: "10 min",
  },
  {
    slug: "progressive-delivery",
    file: "progressive-delivery.md",
    title: "Progressive Delivery: Three Features, One Platform Bet",
    framework: "Roadmap-to-platform reframe",
    blurb:
      "Three separately queued capabilities, reframed into one buyer outcome, with the launch trigger moved from GA to demoable to recover 90 days against competitors already embedded in deal cycles. I left before this phase reached GA, so there's no downstream number attached, only the bet and the reframe.",
    readingTime: "4 min",
  },
];

export function getWorkSample(slug: string): WorkSample | undefined {
  return workSamples.find((s) => s.slug === slug);
}
