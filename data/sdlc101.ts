/**
 * The seven-stage map from the SDLC 101 course. Source of truth is
 * content/work-samples/sdlc-101.md; this is the same content structured for
 * the visual at the top of that page.
 *
 * Zones mirror data/unifyLaunch.ts lifecycle so the strip and the cards can
 * never disagree.
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
  outside: "Never our territory. Connect to it, never pitch replacing it.",
  heritage: "The one stage CloudBees owned outright.",
  expansion: "Where Unify let us compete, by coordinating tools already in place.",
};

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
