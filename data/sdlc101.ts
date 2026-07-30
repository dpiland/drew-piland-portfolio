/**
 * The SDLC 101 course. THIS FILE IS THE SOURCE OF TRUTH for the page at
 * /work/cloudbees-unify/sdlc-101, which is laid out as a visual course rather
 * than rendered from markdown, so the reader is not walked through seven
 * stages twice.
 *
 * The original prose lives at job-applications/Career/work-samples/
 * cloudbees-unify-sdlc-101-course.md and is NOT synced or deployed. Editing it
 * changes nothing on the site; edit here instead.
 *
 * Zones mirror data/unifyLaunch.ts lifecycle so the case-study strip and these
 * cards can never disagree.
 */

export type Zone = "outside" | "heritage" | "expansion";

export interface SdlcStage {
  name: string;
  zone: Zone;
  /** What the stage is, in one line */
  what: string;
  roles: string;
  vendors: string[];
  /** Why it carries that zone tag */
  why: string;
}

export const zoneLabels: Record<Zone, string> = {
  outside: "Outside",
  heritage: "Heritage",
  expansion: "Expansion",
};

export const zoneMeaning: Record<Zone, string> = {
  outside:
    "Never our territory. Embraced by connecting to it (a planning tool, a repo), never pitched as something to replace.",
  heritage:
    "The one stage CloudBees actually excelled at and owned outright.",
  expansion:
    "The stages Unify let us compete for, by embracing the tools a customer already runs and coordinating them as one governed system, rather than asking anyone to migrate off them.",
};

/** The deploy/release mix-up every new rep walked in with. */
export const misconception = {
  heading: "The misconception every new rep walked in with",
  claim: "Deploy is an action. Release is a decision.",
  body: [
    "Reps used the two as synonyms. They aren't, and the difference is the whole reason CloudBees treats them as separate stages. Deploy is the mechanical fact of an artifact moving into an environment, up to and including production. Release is the governed call that whatever just moved is actually available to customers.",
    "The two routinely happen apart. Code can be deployed to production behind a feature flag, sitting there dark, fully shipped and not released to a single user. A release can happen with no new deploy at all, flipping a flag on code that has been in production for a week.",
    "A rep who collapses them will describe a customer's dark-launch practice as broken (\"you deployed it but it's not live?\") when it's a deliberate, mature pattern they built on purpose. Naming the distinction correctly is often the fastest way a rep earns credibility with a platform engineering audience in the first five minutes.",
  ],
};

export interface CakeStep {
  stage: string;
  text: string;
}

/**
 * The closing analogy. The seven-stage map is accurate; this is what a rep
 * actually repeats back to a customer at 4pm on a Friday.
 */
export const cake: CakeStep[] = [
  {
    stage: "Plan",
    text: "Deciding what cake to bake and pulling the recipe. That decision belongs to whoever is planning the event, not to whoever eventually bakes it.",
  },
  {
    stage: "Code",
    text: "Measuring the ingredients and mixing the batter. CloudBees doesn't sell flour, and it doesn't sell mixing bowls either.",
  },
  {
    stage: "Build",
    text: "Putting the batter in the oven. The stage CloudBees has always owned: the oven everyone already trusts to turn batter into a cake, the same way every time.",
  },
  {
    stage: "Test",
    text: "The toothpick test. Checking that what came out of the oven is actually done before anyone commits to serving it.",
  },
  {
    stage: "Release",
    text: "The decision that the cake is frosted, inspected, and cleared to leave the kitchen. A decision, not an action.",
  },
  {
    stage: "Deploy",
    text: "Carrying the cake out and setting it on the table. The action, not the decision. A cake can sit under a cover, deployed but not released, same as a feature flag.",
  },
  {
    stage: "Govern",
    text: "The recipe card that travels with the cake, so when someone asks what is actually in it later, an allergy question, an auditor, there's a written answer instead of a reconstruction.",
  },
];

export const cakePunchline =
  "CloudBees was never trying to be the cookbook or sell the flour, and it wasn't asking anyone to buy a new oven. Theirs already works. What Unify added was everything after the oven: knowing the cake is done, deciding it's ready, getting it to the table, and keeping the card that says what's in it.";

export const sdlcStages: SdlcStage[] = [
  {
    name: "Plan",
    zone: "outside",
    what: "A business need becomes a scoped, sequenced body of work.",
    roles: "Product managers, business analysts, engineering leads",
    vendors: ["Jira", "Azure Boards", "Linear", "ServiceNow"],
    why: "CloudBees never sold a planning tool. Unify connects to it so a release traces back to the work item it shipped.",
  },
  {
    name: "Code",
    zone: "outside",
    what: "A plan becomes a change set: writing, reviewing, merging source.",
    roles: "Software engineers, tech leads, code reviewers",
    vendors: ["GitHub", "GitLab", "Bitbucket"],
    why: "Connect to the repo a customer already runs. A rep says that plainly rather than implying we want to own it.",
  },
  {
    name: "Build",
    zone: "heritage",
    what: "Reviewed code is compiled and packaged into a reproducible artifact.",
    roles: "Build and CI engineers, DevOps engineers, release engineers",
    vendors: ["Jenkins", "CloudBees CI", "GitHub Actions", "CircleCI"],
    why: "Real credibility, not something to disclaim. But it is one stage out of seven, and treating it as the whole pitch is what kept reps boxed in.",
  },
  {
    name: "Test",
    zone: "expansion",
    what: "The built artifact is checked against functional, performance, and security requirements.",
    roles: "QA engineers, SDETs, security engineers, test automation",
    vendors: ["Selenium", "Snyk", "SonarQube", "Tricentis"],
    why: "No native test engine, and embrace don't replace means we don't try. A test run in any of these becomes a tracked step in the same governed release.",
  },
  {
    name: "Release",
    zone: "expansion",
    what: "The governed decision that a candidate build is approved to ship.",
    roles: "Release managers, change advisory board, compliance and audit",
    vendors: ["CloudBees Unify", "Harness", "Octopus Deploy"],
    why: "The stage the control plane reframe is built on. The immutable release manifest wraps around whatever tooling is already there.",
  },
  {
    name: "Deploy",
    zone: "expansion",
    what: "An approved release physically moves into an environment.",
    roles: "SRE and platform engineers, DevOps engineers, release engineers",
    vendors: ["Argo CD", "Spinnaker", "Octopus Deploy", "CloudBees Unify"],
    why: "Unify doesn't replace the deploy engine a team runs, it tracks that deploy as a step in the governed release.",
  },
  {
    name: "Govern",
    zone: "expansion",
    what: "Policy, evidence retention, and the audit trail across the other six.",
    roles: "Security and compliance, platform leadership, auditors, CISO",
    vendors: ["CloudBees Unify", "Open Policy Agent", "Snyk", "ServiceNow GRC"],
    why: "The most forward-leaning claim, and the one the retro flagged hardest. Runtime policy for AI agents is architecture, not yet a measured outcome.",
  },
];

/** Highlighted in the vendor chips: our own ground versus everyone else's. */
export const OURS = ["CloudBees Unify", "CloudBees CI", "Jenkins"];
