# SDLC 101: The Course That Taught Reps the Lifecycle They Were Selling Into

**Author:** Drew Piland, Senior PMM
**Method:** A seven-stage map of the software delivery lifecycle (Plan, Code, Build, Test, Release, Deploy, Govern), each stage broken into what it is, the value it produces, who owns it, and the vendors a rep will hear named in the room.
**Related work samples:** [cloudbees-unify-positioning.md](cloudbees-unify-positioning.md), [cloudbees-unify-messaging-house.md](cloudbees-unify-messaging-house.md), [cloudbees-unify-command-message.md](cloudbees-unify-command-message.md)

---

> **Please read first.** This is a work sample, not internal CloudBees material. It's a reconstruction of the enablement course I built for the Unify launch (referenced in the case study at [drewpiland.com/work/cloudbees-unify](https://www.drewpiland.com/work/cloudbees-unify)), rebuilt here from public product documentation and general SDLC/DevOps market knowledge rather than from any internal training deck. The zone assignments (outside / heritage / expansion) and the diagnosis of why reps needed this are mine and verified against the launch retro. The specific vendor names per stage are the kind of thing that drifts fast in this market, so read them as illustrative of the landscape, not as a frozen competitive list.

---

## Why this course existed

Reps knew our products. They didn't know the lifecycle those products lived inside. Customers don't buy point solutions, they buy solutions to a problem, and a rep can't locate a problem inside a lifecycle they can't picture. Before Unify, the rep's mental model stopped at Jenkins: CloudBees was "the CI tool," full stop. That's an accurate description of one stage out of seven, and it's exactly the box the market had us filed under for a decade.

Unify's launch was the occasion to widen that picture, so the course maps the full lifecycle, not just the stage CloudBees came from. The strategy behind the map was **embrace, don't replace**: focus the product claim on the one stage CloudBees actually excelled at, and everywhere else in the lifecycle, embrace the tools already in place rather than pitch a rip-and-replace. Every stage carries a zone tag against CloudBees's footprint at launch:

- **Outside:** never our territory. Embraced by connecting to it (a planning tool, a repo), never pitched as something to replace.
- **Heritage:** the one stage CloudBees actually excelled at and owned outright.
- **Expansion:** the stages Unify let us actually compete for, by embracing the tools a customer already runs, Jenkins, GitHub Actions, GitLab, and coordinating them as one governed system, rather than asking anyone to migrate off them.

A rep who can place a customer's stated pain onto one of these seven stages knows, in the same instant, whether CloudBees has a right to be in that conversation at all, and if so, whether it's a heritage claim, an embrace claim, or no claim at all.

| Stage | Zone |
|---|---|
| Plan | Outside |
| Code | Outside |
| Build | Heritage |
| Test | Expansion |
| Release | Expansion |
| Deploy | Expansion |
| Govern | Expansion |

---

## 1. Plan — Outside

Plan is where a business need becomes a scoped, sequenced body of work: backlogs, epics, sprints, roadmaps, and the tradeoff conversations that decide what gets built first. Its value to the system is that everything downstream, code, tests, releases, inherits its priorities and its definition of done, so a mis-scoped plan compounds into wasted work at every later stage rather than staying a planning-stage problem.

**Roles involved:** Product managers, business analysts, engineering leads, program/scrum masters.

**Primary vendors:** Jira, Azure Boards, Linear, ServiceNow.

*Why outside: CloudBees has never sold a planning tool, and Unify doesn't change that. This is embrace, don't replace in its purest form: Unify connects to the planning tool a customer already runs so a release can trace back to the work item it shipped, but it was never positioned to be that tool. A rep who hears a prospect's planning pain should recognize it as a real problem to embrace, not one to pitch a replacement for.*

---

## 2. Code — Outside

Code is where a plan becomes a change set: writing, reviewing, and merging the actual source. Its value to the system is that this is where quality and intent get set for the first time, a defect caught in review here is orders of magnitude cheaper to fix than the same defect caught after release.

**Roles involved:** Software engineers, tech leads, code reviewers.

**Primary vendors:** GitHub, GitLab, Bitbucket.

*Why outside: same logic as Plan, and the same embrace, don't replace posture: connect to the repo a customer already runs (a commit and its author are part of the evidence trail) rather than compete for where the code itself lives. A good rep says that plainly rather than implying CloudBees wants to own the repo.*

---

## 3. Build — Heritage

Build is where reviewed code gets compiled, packaged, and validated into a reproducible artifact, the step that turns "code that merged" into "a thing that can actually run somewhere." Its value to the system is repeatability: a build pipeline exists so that what ships is provably the same artifact that was tested, not a slightly different one someone assembled by hand under deadline pressure.

**Roles involved:** Build/CI engineers, DevOps engineers, release engineers.

**Primary vendors:** Jenkins, CloudBees CI, GitHub Actions, CircleCI.

*Why heritage: this is the one stage in the lifecycle where CloudBees actually excelled and owned the ground outright, correctly, since Jenkins is a build-automation tool at its core. The course names it as heritage on purpose: it's real credibility, not something to disclaim, but it's one stage out of seven, and treating it as the whole pitch is what kept reps boxed in.*

---

## 4. Test — Expansion

Test is where a built artifact gets checked against functional, performance, and security requirements before it's trusted to release. Its value to the system is that it's the last cheap point to catch a problem: a bug caught in test costs a re-run, the same bug caught in production costs an incident, a rollback, and a customer's confidence.

**Roles involved:** QA engineers, SDETs, security engineers (SAST/DAST), test automation engineers.

**Primary vendors:** Selenium/Sauce Labs, Snyk, SonarQube, Tricentis.

*Why expansion: CloudBees doesn't own a native test-execution engine, and embrace, don't replace means it doesn't try to. Unify's polymorphic workflows treat a test run in any of these tools as a tracked step in the same governed release, which is the coordination claim the whole reframe rests on.*

---

## 5. Release — Expansion

Release is the governance event where a candidate build is formally approved to ship: sign-offs, change records, and the evidence an auditor will ask for later. Its value to the system is that it's the point where "engineering thinks this is ready" becomes "the organization is accountable for this decision," which is exactly the record a regulated business needs to produce on demand.

**Roles involved:** Release managers, change advisory board (CAB), compliance/audit, product owners.

**Primary vendors:** CloudBees Unify, Harness, Octopus Deploy.

*Why expansion: this is the stage the "control plane" reframe is built on, and where embrace, don't replace pays off hardest. Release used to be a spreadsheet and a release manager's memory; Unify's immutable release manifest wraps around whatever release tooling is already there rather than asking a customer to swap it out, which is the unique attribute the positioning work sample (Step 2) leans on hardest.*

---

## 6. Deploy — Expansion

Deploy is where an approved release actually moves into an environment, up to and including production. Its value to the system is controlled, reversible change: a deploy stage exists so that shipping to production is a repeatable, observable procedure rather than a one-off manual act that's hard to reason about or undo.

**Roles involved:** SRE/platform engineers, DevOps engineers, release engineers.

**Primary vendors:** Argo CD, Spinnaker, Octopus Deploy, CloudBees Unify.

*Why expansion: same embrace, don't replace logic as Test. Unify doesn't replace the deploy engine a team already runs, it tracks that deploy as a step in the governed release, which is the "no migration required" claim from the positioning work sample.*

---

## 7. Govern — Expansion

Govern is the cross-cutting stage that sits over the rest of the lifecycle: policy definition, evidence retention, and the audit trail that proves the other six stages happened the way the record says they did. Its value to the system is trust that survives scrutiny, the ability to answer "is this safe to ship, and can you prove it" without reconstructing the answer after the fact.

**Roles involved:** Security/compliance teams, platform engineering leadership, auditors, CISO/risk.

**Primary vendors:** CloudBees Unify, Open Policy Agent (OPA), Snyk, ServiceNow GRC.

*Why expansion: this is the newest and most forward-leaning claim in the course, and the one the launch retro flagged hardest for discipline. Runtime-enforced policy for AI agents acting inside pipelines is architecture, not yet a measured outcome. The course taught reps to say that distinction out loud, the same discipline the positioning work sample applies in Step 3.*

---

## The misconception every new rep walked in with: Deploy vs. Release

This was the single most common mix-up in the room, and worth its own callout rather than burying it inside stages 5 and 6. Reps used "deploy" and "release" as synonyms. They aren't, and the difference is the whole reason CloudBees treats them as two separate stages instead of one.

**Deploy is an action. Release is a decision.** Deploy is the mechanical fact of an artifact moving into an environment, up to and including production. Release is the governed call that whatever just moved is actually available to customers. The two can, and routinely do, happen apart: code can be deployed to production behind a feature flag, sitting there dark, fully shipped and not yet released to a single user. A release can also happen without a new deploy at all, flipping a flag on code that's been sitting in production for a week. A rep who collapses the two into one event will describe a customer's dark-launch practice as broken ("you deployed it but it's not live?") when it's actually a deliberate, mature pattern the customer built on purpose. Naming the distinction correctly is often the fastest way a rep earns credibility with a platform engineering audience in the first five minutes of a call.

---

## The closing analogy: baking a cake

The course ended on an industry parallel because the seven-stage map, accurate as it is, isn't what a rep repeats back to a customer at 4pm on a Friday. A cake is.

- **Plan:** Deciding what cake to bake and pulling the recipe. That decision belongs to whoever's planning the event, not to whoever eventually bakes it.
- **Code:** Measuring out the ingredients and mixing the batter. CloudBees doesn't sell flour, and it doesn't sell mixing bowls either.
- **Build:** Putting the batter in the oven. This is the stage CloudBees has always owned, the oven everyone already trusts to turn batter into a cake, reliably, the same way every time.
- **Test:** The toothpick test. Checking that what came out of the oven is actually done before anyone commits to serving it.
- **Release:** The decision that the cake is frosted, inspected, and cleared to leave the kitchen. A decision, not an action, which is exactly the distinction in the misconception above.
- **Deploy:** Physically carrying the cake out and setting it on the table. The action, not the decision, and a cake can sit on the table under a cover, deployed but not yet released, same as a feature flag.
- **Govern:** The recipe card and ingredient list that travels with the cake, so when someone asks what's actually in it later, an allergy question, a health inspector, an auditor, there's a written answer instead of a reconstruction.

The punchline reps kept: CloudBees was never trying to be the cookbook or sell the flour, and it wasn't asking anyone to buy a new oven, theirs already works. What Unify added was everything after the oven: knowing the cake is actually done, deciding it's ready, getting it to the table, and keeping the card that says what's in it. Embrace, don't replace, in a sentence a rep could say back verbatim in a hallway.

---

## Why the shape of the course matters more than any one stage

The point of teaching all seven stages wasn't to turn reps into engineers. It was to give them a map precise enough to place a customer's actual complaint, "we can't tell what got approved," "our audit prep takes weeks," "we have no idea what our agents changed last night", onto a specific stage, and from there to know instantly whether CloudBees has an earned claim (heritage), an embrace claim (outside or expansion), or no claim at all. Embrace, don't replace is what makes the last two categories the same pitch: connect where the ground belongs to someone else, coordinate where the ground is contested, and never ask a customer to rip out a tool that already works. A rep who can make that call in real time sells fewer things badly and more things well. A rep who can't defaults to pitching the one product they know by name, which is the exact failure mode this course was built to close.
