# Positioning: CloudBees Unify

**Author:** Drew Piland, Senior PMM
**Method:** A ten-component positioning process, working from competitive alternatives up to a positioning statement: competitive alternatives → unique attributes → value → target market → market category → trends, then a positioning statement.
**Related work samples:** [cloudbees-unify-messaging-house.md](cloudbees-unify-messaging-house.md), [cloudbees-unify-command-message.md](cloudbees-unify-command-message.md)

---

> **Please read first.** This is a work sample, not internal CloudBees material. It's reconstructed from public sources (the May 2025 launch newsroom post, "CloudBees Unify: The Anti-Platform," and "Why Every Enterprise Needs a DevSecOps Control Plane") plus my own verified proof points from running the Unify launch and the later control-plane reframe. This method starts from competitive alternatives, not from the product, so that's where this starts too.

---

## Step 1: List the competitive alternatives

What would the buyer do if CloudBees Unify didn't exist? Not "who's in our Gartner category," but literally what they'd use instead.

1. **Nothing new: keep governing manually.** Spreadsheets, release calendars, a person who knows who to call, tribal knowledge. This is the actual default for most of the target market, and it's the alternative most positioning exercises forget to list.
2. **Consolidate onto a single platform-engineering vendor** (Harness, GitLab, or an internally built Backstage-style platform). Standardize the toolchain, then govern what's left.
3. **Bolt governance onto the CI/CD tool already in place.** Add approval gates, audit logging, and reporting on top of Jenkins or GitHub Actions directly, without buying a separate layer.

*Note: CloudBees Unify's own market messaging explicitly names the "consolidate" alternative as the primary foil ("we are not a platform"). That's a deliberate, correct choice: alternative 2 is the one with budget and a competing pitch behind it. But alternative 1 is honestly the more common status quo, and a positioning exercise that skips it will overestimate how "in-market" and platform-literate the average buyer already is.*

---

## Step 2: Identify unique attributes

What does Unify have or do that the alternatives above don't?

- **Coordinates tools it doesn't own as first-class tracked steps** (polymorphic workflows): a Jenkins run and a GitHub Actions run become steps in the same tracked release, not a dashboard bolted on top of separate systems.
- **An application model** (components, environments, applications) that composes a release across independently owned repos without any team restructuring its own workflow.
- **Immutable release manifests** pinned at the moment a release is created, so editing the workflow afterward can't retroactively change what's on record.
- **Evidence generation inherited by default** through shared, reusable workflow actions, rather than something each pipeline author has to remember to add.
- **Policy enforced by the runtime executing the work**, not by a document or convention the actor (human or, increasingly, AI agent) is trusted to follow.

Alternative 1 (manual governance) has none of these. Alternative 2 (consolidation) can build governance, but only for the tools that migrate onto its own runner. Alternative 3 (bolt-on gates in the existing CI tool) can approximate isolated pieces of this, but not the cross-tool tracking, since a single CI tool has no visibility into what happened in a different one.

---

## Step 3: Map attributes to value

| Unique attribute | So what? (the value it produces) |
|---|---|
| Coordinates tools it doesn't own | Governance starts on the estate you already run, today, not after a migration project completes |
| Application model spanning independently owned repos | One release plan can span many teams without forcing any of them to restructure how they work |
| Immutable release manifest | An auditor's question ("what exactly did you approve, and can you prove it applied to this build") gets answered directly instead of reconstructed |
| Evidence inherited by default | Compliance stops depending on individual engineers remembering to opt in |
| Runtime-enforced policy | The control survives contact with a non-deterministic actor (an AI agent) that won't read a runbook first |

**Proof behind the value claims, all independently verifiable, none invented for this exercise:**
- Forrester TEI (commissioned study): 70% reduction in release prep time year one, 95% by year three; 99% reduction in outages; 60% increase in deployment volume without added headcount; $27.5M value over three years.
- May 2025 launch results: 13 referenceable customers against a goal of 10; average deal size grew from $100K to $265K; 60% win rate once deals reached qualified.
- The runtime-enforcement value claim for AI agents specifically is `[UNPROVEN as a measured outcome]`. It's the architecture's forward-looking thesis, not a cited result. Flagged the same way in the other two work samples. Repeating it here rather than quietly dropping it is the point of using one method across all three documents.

---

## Step 4: Identify target market characteristics (best-fit customers)

The approach here: don't start from firmographics, start from *who values the unique attributes most*, then work outward to who that describes.

**Highest-value fit:**
- Global 2000 enterprises with a delivery estate that is already heterogeneous (multiple CI/CD tools across business units, often from acquisitions or years of team-level tool choice) and where standardizing onto one vendor's runner is a multi-year, politically expensive project, not a quarter-long one.
- Organizations where release is a governed business event with cross-team sign-off and audit exposure (regulated industries, or any org where an auditor's question is a recurring, costly event), not teams doing high-velocity independent microservice deploys many times a day.
- Organizations actively evaluating or piloting AI coding agents, where the governance gap (agents acting inside pipelines built for human approval) is becoming concrete rather than hypothetical.

**Explicitly the wrong fit, and worth saying so:** small, homogeneous engineering orgs where a single-vendor consolidation is realistic within a quarter. For that buyer, alternative 2 above is the right answer, and pitching Unify's "no migration required" attribute to them is solving a problem they don't have. Naming this is a discipline in itself: a positioning statement that claims to fit everyone convinces no one.

**Who's actually in the room:** the one who feels the unique attributes most directly, and the champion, is the head of platform engineering or head of release management. They're carrying pain up from release managers, development leads, and QA testers, the practitioners actually running releases day to day, and they have to keep those practitioners whole for the deal to survive internally. But the budget sits above the champion. This closes at VP of Engineering or VP of Software Delivery, who sign off on what is, in practice, a platform-level purchase even though the pitch is "not a platform." Treating this as a single-practitioner point-tool sale undersells what it actually takes to close it.

---

## Step 5: Determine market category

The core test at this step: pick the category that makes your unique attributes look most valuable to your best-fit customer. That can mean creating a new category or reframing an existing one, and those are two different amounts of work with two different price tags. The choice made here was deliberate about which one it was buying.

**The obvious category, and why it didn't fit:** "DevOps platform" is where the market defaults, and it's also the category analyst rubrics were built to score. Those rubrics assumed a full stack, including a source code management system and a planning tool, and CloudBees had neither. That's not a positioning problem to word around, it's a structural exclusion: getting scored on that rubric was a loss before differentiation ever entered the conversation.

**The tradeoff that was made on purpose:** the textbook answer to "the obvious category doesn't fit" is full category creation, defining new terms and buying the sustained analyst relations and market education it takes to make them stick. That's a multi-year investment with an uncertain payoff, and the team weighed it against the benefit and passed. What got built instead was a reframe, not a new category: adopt "control plane" language to move the competitive conversation away from the DevOps-platform rubric and onto ground CloudBees could actually win, without mounting the full campaign real category creation requires.

**The reframe CloudBees chose:** *DevSecOps control plane* (also positioned as "operating layer," explicitly as the anti-platform). It shifts the comparison from "which platform has more features" to "which layer actually governs what you have," and the unique attributes (coordination without migration, immutable evidence, runtime-enforced policy) become the entire point instead of a workaround for a stack CloudBees doesn't have.

**Why this is a defensible reframe, and where it stops short of a real category:** it moves the comparison off a rubric CloudBees couldn't win, without pretending to have done the analyst-relations and market-education work a genuine new category demands. The one place that heavier lift actually happened was one layer down: release orchestration got the full category-definition treatment with Gartner (see the analyst-briefing work sample), and that's the definitional work "control plane" borrows its credibility from. The umbrella term is the lighter move, riding on a component underneath it that earned the harder one.

**Risk to name honestly:** because "control plane" itself skipped the category-creation investment, it's more exposed to erosion than release orchestration was. There's no dedicated analyst coverage anchoring the definition the way there is for the layer beneath it, no owned Market Guide or Magic Quadrant to point back to if a competitor starts using the same words. That's the direct cost of the tradeoff made here, and it means maintaining the term takes more vigilance than it would if the fuller investment had been made, not less.

---

## Step 6: Layer in relevant trends

Two trends make this positioning land now rather than a year ago, used to *support* the story, not replace it (a trend is not a positioning statement on its own):

1. **Tool sprawl has already broken manual governance.** Delivery running across a dozen systems nobody owns end to end turned "who approved this" from a quick question into a reconstruction exercise. This is the lived current state of the target buyer, which is why alternative 1 and 3 above are already failing.
2. **Agentic sprawl is the trend about to break what's left.** AI agents are starting to take real, non-deterministic actions inside pipelines whose approval controls were designed assuming a human reads the runbook first. This is the trend that makes runtime-enforced policy (versus a document-based convention) go from "nice architecture" to "the only version of this that survives what's coming."

---

## Positioning statement

**For** platform engineering and release leaders at large enterprises running a fragmented, multi-tool delivery estate,
**who** cannot get one trustworthy answer to "is this safe to ship" and are exposed on audit evidence as a result,
**CloudBees Unify is a** DevSecOps control plane
**that** governs the tools you already run, treating cross-tool releases as one tracked system and generating audit evidence as a byproduct of execution rather than a reconstruction after it.
**Unlike** platform-consolidation approaches, which solve governance by asking the organization to migrate onto one vendor's own runner,
**CloudBees Unify** requires no migration, so governance starts on the estate the organization already has and doesn't stop at the edge of whatever tools survive a consolidation project.

*Written to the champion (head of platform engineering or release management), who feels this pain directly. The budget it takes to act on it sits one level up, with the VP of Engineering or VP of Software Delivery, and closing this deal means carrying the statement up to them, not just down to the practitioners underneath the champion.*

---

## What would have to change to break this positioning

Stress-testing the position rather than just asserting it:

- If a consolidation-platform competitor made governance genuinely portable across stacks they don't own (the thing this positioning bets they won't do, because their commercial incentive runs the other way), the "no migration required" attribute stops being unique.
- If "control plane" starts getting diluted the way "orchestration" once did (competitors adopting the term without the architecture), the tradeoff in Step 5 gets tested directly: CloudBees skipped the analyst-relations investment that would anchor the term, so the fallback is to give the reframe the same category-definition treatment release orchestration already got, not to reach for a new label.
- If the agentic-governance trend in Step 6 doesn't produce a measured proof point within the next few quarters, that attribute should be pulled back to a thesis in every derived asset, not left standing next to proven claims as if it were one.
