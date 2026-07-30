/**
 * Long-form work samples behind the CloudBees Unify case study.
 *
 * Source of truth for the prose is ~/Projects/job-applications/Career/
 * work-samples/cloudbees-unify-*.md. The copies in content/work-samples/
 * are what actually deploy, since Vercel only builds this repo. Re-copy on
 * edit; there is no sync automation.
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
    slug: "analyst-submission",
    file: "analyst-submission.md",
    title: "Analyst Submissions: Positioning Cloud Native First",
    framework: "Gartner MQ and Forrester Wave submission strategy",
    blurb:
      "February 2025. Why we submitted on the product line that would become Unify instead of on our strongest legacy tooling, and what that cost us on paper to buy a truthful record before the May launch.",
    readingTime: "10 min",
  },
];

export function getWorkSample(slug: string): WorkSample | undefined {
  return workSamples.find((s) => s.slug === slug);
}
