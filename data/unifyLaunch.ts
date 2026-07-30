/**
 * CloudBees Unify launch (May 2025). Structured content for the
 * /work/cloudbees-unify case study.
 *
 * METRIC DISCIPLINE. Every number here is a Phase 2 (Feb to May 2025) result
 * unless the copy says otherwise. Three figures belong to adjacent phases and
 * must stay labeled as such or stay off the page entirely:
 *   - +26% ARR on the $45M release orchestration line is 2023 work, cited on
 *     this page only as prior proof that the motion was repeatable.
 *   - "Recovered 90 days" belongs to the 2026 offsite phase, not this launch.
 *   - Average deal size is $265K. $350K, $275K, and $260K are superseded.
 */

export interface Metric {
  value: string;
  label: string;
  note: string;
}

export const heroMetrics: Metric[] = [
  {
    value: "13",
    label: "Referenceable customers",
    note: "Against a company goal of 10 by fiscal year end",
  },
  {
    value: "$265K",
    label: "Average deal size",
    note: "Up from $100K as the motion moved into new buying centers",
  },
  {
    value: "On time",
    label: "May 2025",
    note: "Sixteen weeks from the competitive signal to launch",
  },
];

/**
 * Five sections, in the order a GTM reviewer asks for them: how success was
 * defined, the shape of the launch, the narrative and its pre-launch proof,
 * how it was coordinated across the field, and what it taught.
 */
export const storyArc = [
  { id: "metrics", label: "Success metrics" },
  { id: "strategy", label: "GTM strategy" },
  { id: "positioning", label: "Positioning" },
  { id: "coordination", label: "Coordination" },
  { id: "learnings", label: "Learnings" },
  { id: "resources", label: "Resources" },
];

export interface SuccessMetric {
  tier: "Leading" | "Lagging";
  measure: string;
  why: string;
  result: string;
}

/**
 * The one metric the launch was actually steered by. Called out separately
 * because "here are five KPIs" is a dashboard, not a decision.
 */
export const primaryMetric: SuccessMetric = {
  tier: "Leading",
  measure: "Stage 1 to Stage 3 qualified conversion",
  why: "Top of funnel was healthy and we won about 60% of deals that reached qualified, so stage 3 was the only broken link in the chain. Impressions can look excellent while nothing gets there.",
  result:
    "Volume was never the constraint. Every enablement decision after the first quarter pointed here.",
};

/**
 * Defined before launch, not reverse-engineered after. Asset delivery was
 * explicitly rejected as a measure of progress.
 */
export const successMetrics: SuccessMetric[] = [
  {
    tier: "Leading",
    measure: "Is the positioning actually spoken in live deals",
    why: "Assets shipping is not evidence a message landed. Gong call scoring was.",
    result: "Replaced asset delivery as the progress measure",
  },
  {
    tier: "Lagging",
    measure: "Deal cycle length",
    why: "PMM's standing metric. Cycles ran six to nine months, so removing a stage was worth more than adding a touch.",
    result:
      "SE demo sandboxes I built in Claude Code let us skip the proof-of-value stage outright in two deals",
  },
  {
    tier: "Lagging",
    measure: "Referenceable customers",
    why: "A customer who will vouch is the only proof the positioning is real.",
    result: "13 against a goal of 10",
  },
  {
    tier: "Lagging",
    measure: "Average deal size",
    why: "Tests whether the story reached a higher buying center.",
    result: "$100K to $265K",
  },
];

/**
 * The durable asset. Verbatim from cloudbees.com/unify, checked 2026-07-29.
 * NOTE: the live page also carries vendor proof points (test-time reduction,
 * deployment multiples, hours saved). Those are CloudBees marketing claims,
 * not Drew's launch results, and are deliberately not reproduced here.
 */
export const pitch = {
  href: "https://www.cloudbees.com/unify",
  hook: "Every tool is green. But can you ship?",
  setup:
    "The build passed. The scan came back clean. The board signed off. But is it safe to ship?",
  body: "CloudBees Unify is the one layer above the tools you already run. It reads every signal, resolves every conflict, and gives you a single honest answer.",
  kicker: "Same tools. Same teams. No migration.",
};

export interface PublishedAsset {
  phase: string;
  date: string;
  title: string;
  href: string;
  audience: string;
  line: string;
  note: string;
}

/**
 * The two public flagship pieces, and the reason they are a pair: the May
 * launch piece is written for the architect, the October piece is the
 * executive rebuild after win/loss showed the first was not reaching the VPs
 * who sign. Both carry the CPO's byline; Drew informed the narrative.
 * Dates verified against the live posts 2026-07-29.
 */
export const publishedAssets: PublishedAsset[] = [
  {
    phase: "At launch",
    date: "May 20, 2025",
    title: "Enough with the “Platform”",
    href: "https://www.cloudbees.com/blog/cloudbees-unify-the-anti-platform",
    audience: "Architects and DevOps decision makers",
    line: "We are not a platform. We are CloudBees Unify, an operating layer for the modern enterprise.",
    note: "The manifesto. Incremental over forklift, open over opinionated, evolution over revolution.",
  },
  {
    phase: "After the rebuild",
    date: "October 27, 2025",
    title: "Why Every Enterprise Needs a DevSecOps Control Plane",
    href: "https://www.cloudbees.com/blog/why-every-enterprise-needs-a-devsecops-control-plane",
    audience: "CIOs and security leaders",
    line: "What's missing isn't another platform. It's a DevSecOps control and context plane.",
    note: "Same position, rebuilt on business outcomes: audit exposure, regulatory pressure, and the economics.",
  },
];

export interface Validation {
  method: string;
  detail: string;
}

/** Run before committing to the narrative, on a clock that fit the launch. */
export const validation: Validation[] = [
  {
    method: "Wynter message testing",
    detail:
      "Pressure-tested the positioning against the real buyer before we committed to it.",
  },
  {
    method: "Analyst briefings",
    detail:
      "Sanity-checked the narrative against what Gartner and Forrester were already hearing. I prepped our VP of PMM to lead them.",
  },
  {
    method: "A motion we had already run",
    detail:
      "The Jenkins-to-platform reframe had worked once before, on a smaller line, so we knew it was repeatable.",
  },
];

/**
 * The operating model: PMM owned positioning and messaging, and every
 * downstream channel inherited it rather than writing its own version.
 */
export const downstreamChannels = [
  "Press release",
  "Launch moment (Nasdaq, Times Square)",
  "Blogs and thought leadership",
  "Webinar series",
  "Campaigns and outreach",
  "Analyst briefings",
  "Sales plays and enablement",
];

export interface CadenceRow {
  who: string;
  when: string;
  what: string;
}

/** The answer to "how did you keep everyone aligned after launch week." */
export const cadence: CadenceRow[] = [
  {
    who: "Sales engineers",
    when: "Biweekly",
    what: "Technical depth and objection handling, alternating with the AE sessions",
  },
  {
    who: "Account executives",
    when: "Biweekly",
    what: "Plays, positioning, and who we were up against",
  },
  {
    who: "Top four reps",
    when: "Every two weeks",
    what: "Champion program. What is working in live deals, so it reaches the reps who never ask",
  },
  {
    who: "Whole field",
    when: "Weekly",
    what: "Market intel newsletter from a scraping agent, reviewed by me before it went out",
  },
  {
    who: "Product",
    when: "Twice weekly",
    what: "Start and end of week. Disagree and commit",
  },
];

export interface RolePillar {
  title: string;
  items: string[];
}

export const rolePillars: RolePillar[] = [
  {
    title: "Positioning & messaging",
    items: ["Owned the launch narrative", "Developed the positioning", "Built the messaging framework"],
  },
  {
    title: "Analyst relations",
    items: ["Led the Gartner MQ submission", "Led the Forrester Wave submission", "Prepped the exec briefings"],
  },
  {
    title: "Sales enablement",
    items: ["SDLC 101 course", "Sales plays and competitive GPTs", "Champion program with the top reps"],
  },
  {
    title: "Measurement",
    items: ["Gong pitch-relevance scoring", "Customer reference conversion", "Deal size and win-rate analysis"],
  },
];

export interface TimelineStep {
  when: string;
  title: string;
  detail: string;
  emphasis?: boolean;
  image?: { src: string; alt: string; caption: string };
}

export const timeline: TimelineStep[] = [
  {
    when: "Early Feb 2025",
    title: "The signal",
    detail:
      "We heard a competitor was about to ship against capability we already had. That set an end-of-May target and started the clock.",
  },
  {
    when: "Feb 2025",
    title: "Control plane, named",
    detail:
      "We put the concept into market as the control plane before the term was in common use, so the category language was ours to define rather than answer.",
    emphasis: true,
  },
  {
    when: "Feb to May",
    title: "Validate, then arm the field",
    detail:
      "Wynter message testing against the real buyer, analyst briefings, a mini sales kickoff, and the SDLC 101 course that taught reps the lifecycle they were selling into.",
  },
  {
    when: "May 2025",
    title: "Unify launches",
    detail: "On the date we set in February.",
    emphasis: true,
    image: {
      src: "/unify-nasdaq-launch.jpg",
      alt: "The CloudBees team in Times Square in front of the Nasdaq tower, which reads: The most open and flexible enterprise DevOps solution is here. Introducing CloudBees Unify.",
      caption:
        "Launch day in Times Square. The tower copy is the positioning compressed to nine words, which is the real test of whether it was ever tight enough.",
    },
  },
  {
    when: "Q1 after launch",
    title: "Great impressions, no pipeline",
    detail:
      "The campaign numbers looked strong enough to keep marketing happy, and none of it was converting to qualified pipeline. That is when I went back to win/loss.",
  },
  {
    when: "Fiscal year end",
    title: "Proof, not announcement",
    detail:
      "The bar moved from launch to product-market fit: 10 referenceable customers. We closed at 13.",
    emphasis: true,
  },
];

export interface PositioningColumn {
  kicker: string;
  title: string;
  steps: string[];
  outcome: string;
  tone: "muted" | "accent";
}

export const positioning: PositioningColumn[] = [
  {
    kicker: "The industry default",
    title: "Consolidate",
    steps: [
      "Rip out the toolchain you have",
      "Standardize on a single vendor",
      "Govern whatever survived the migration",
    ],
    outcome:
      "Governance arrives at the end of a migration, and only for the tools that made it through. Anyone who consolidated eighteen months ago consolidated onto a pre-agent worldview.",
    tone: "muted",
  },
  {
    kicker: "The bet I made",
    title: "Coordinate",
    steps: [
      "Keep the tools each team already chose",
      "Put a governance layer above the whole stack",
      "Enforce policy in the runtime, not by convention",
    ],
    outcome:
      "Governance starts now, across what is already running, and the organization keeps the right to change its mind about tools later.",
    tone: "accent",
  },
];

export interface Workstream {
  title: string;
  detail: string;
}

export const workstreams: Workstream[] = [
  {
    title: "Narrative",
    detail:
      "Owned the portfolio-level story, built on the release orchestration arc I had been developing for years.",
  },
  {
    title: "Analyst strategy",
    detail:
      "Led the Gartner Magic Quadrant and Forrester Wave submissions, and prepped our VP of PMM to lead the briefings.",
  },
  {
    title: "Enablement",
    detail:
      "Mini sales kickoff, the SDLC 101 course, dedicated sales plays, and a champion program with the top four reps.",
  },
  {
    title: "Customer validation",
    detail:
      "Wynter message testing before we committed, then converting adopting accounts into named references.",
  },
  {
    title: "Public launch",
    detail:
      "Fed the finished messaging into the demand and campaign motion, last rather than first.",
  },
];

export interface LifecycleStage {
  name: string;
  /**
   * outside   = never our territory
   * heritage  = the CI box the market had us filed under for a decade
   * expansion = the solution set Unify let us actually compete for
   */
  zone: "outside" | "heritage" | "expansion";
}

/**
 * The SDLC 101 strip. Deliberately shows the SHAPE of the course (which slice
 * of the lifecycle we sold into) and not an invented per-stage champion or
 * competitor table. The only competitor read documented verbatim is the
 * Harness one, which appears in the caption copy on the page.
 */
export const lifecycle: LifecycleStage[] = [
  { name: "Plan", zone: "outside" },
  { name: "Code", zone: "outside" },
  { name: "Build", zone: "heritage" },
  { name: "Test", zone: "expansion" },
  { name: "Release", zone: "expansion" },
  { name: "Deploy", zone: "expansion" },
  { name: "Govern", zone: "expansion" },
];

export interface FunnelStage {
  label: string;
  state: string;
  width: string;
  healthy: boolean;
}

export const funnel: FunnelStage[] = [
  { label: "Top of funnel", state: "Healthy", width: "100%", healthy: true },
  { label: "Stage 3, qualified", state: "The actual constraint", width: "46%", healthy: false },
  { label: "Qualified to closed won", state: "60% win rate", width: "28%", healthy: true },
];
