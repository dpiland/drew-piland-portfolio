# CloudBees Analyst Submissions: Positioning Cloud Native First (February 2025)

**Prepared by:** Drew Piland, Senior PMM
**Audience:** Gartner (Magic Quadrant) and Forrester (Wave) submission cycles, DevOps/software delivery coverage
**Goal:** Get CloudBees recorded, for the first time, as a cloud native platform company rather than an enterprise Jenkins company with a portfolio of point tools attached
**Where it fed:** this submission set the internal alignment and market story that the May 2025 CloudBees Unify launch built on, and it is the reason we wrote "Enough with the Platform" the day we launched

---

> **Please read first.** This is a high level view into how I ran CloudBees' February 2025 Gartner and Forrester submissions, not the actual submission documents. It is a reconstruction written as a work sample: the decision, the trade-off, and the coordination work are what I owned, condensed into a readable narrative. It is not the submission itself, it is not confidential material, and it contains no scores, roadmap dates, or internal figures. The companion piece, [cloudbees-release-orchestration-analyst-brief.md](cloudbees-release-orchestration-analyst-brief.md), covers a live Gartner briefing that came about three months later, once the Unify launch had shipped. That later briefing could assume analysts already understood CloudBees as a cloud native platform company. This is the submission where that identity got established first.

---

## Why this submission was different from every one before it

CloudBees had submitted to Gartner and Forrester before. What changed in February 2025 is what we chose to lead with. Every prior cycle had put our strongest, most mature capabilities forward, and those capabilities were concentrated in our legacy CI/CD tooling, Jenkins chief among them. It was the safe way to score well against established criteria.

This cycle, we made the opposite call: submit against our Cloud Native tooling, the product line that would become CloudBees Unify, and let that be the whole story. Not a section alongside the legacy portfolio. The story.

We knew going in what that decision would cost us on paper, because a platform launch was roughly three months out and we needed the market's record of who we were to already say "platform" before we said it ourselves.

---

## 1. The bet

> **The thesis I carried into both submissions:** an analyst record built on our strongest legacy point tool would keep scoring us as a better Jenkins company. An analyst record built on the platform we were about to become would score us honestly against where we actually were, and it would be the truth we wanted on file when we announced Unify in May.

The alternative was tempting and it was also a trap. Leading with legacy strength would have produced a better score in February and a harder launch in May, because the analyst community's frame of us would still be a collection of point tools with one very good one at the center. We would have been asking Gartner and Forrester to rewrite that frame twice: once now with a strong tool-by-tool score, and again in three months when we announced we were actually a platform company. Every rewrite costs credibility. We chose to spend that cost once, on the frame that was actually going to be true.

---

## 2. What we chose not to lead with, and what we got for it

**What we gave up:** individual capability scores where our legacy tools were genuinely ahead of what the Cloud Native product could do yet. That is not a hedge, it is the honest state of a product line that had not shipped its unifying layer. Submitting on it meant submitting on real gaps.

**What we got instead, for the first time in a CloudBees submission:**

- **We stopped reading as an enterprise Jenkins company.** Every prior submission implicitly confirmed that identity, because Jenkins was the strongest thing in it. This one didn't mention it as the anchor.
- **We started reading as a unified experience instead of a hodgepodge of point tools.** That is a different claim than "our tools are good." It is a claim about whether they are one product, and February 2025 is the first time we had asked an analyst to evaluate us on that claim at all.

Both of those are identity questions, not feature questions, and identity is the thing an analyst record is slowest to update. Getting it on file three months before the launch, instead of trying to argue it into an already-written frame after the launch, is the entire reason this submission mattered more than its score did.

---

## 3. Running it: two analysts, one story, sourced from across the company

I owned the communication with both Gartner and Forrester through this cycle and was responsible for the submissions themselves, which meant sourcing accurate, current input on Cloud Native capabilities from product, engineering, and PMM peers who each held a piece of the picture and none of whom held all of it. The product was moving toward a launch that hadn't been fully specified yet in some of the criteria the analysts were asking about, which meant the sourcing job wasn't "collect what exists," it was "get the right people in the same room enough times to agree on how to describe what was still being built."

That coordination work is what our co-founder, Francois Detry, was referring to when he called me "the great cat herder of CloudBees" after the cycle closed. It's a good description of the job: two analyst relationships, one consistent story, and enough people across the org contributing pieces of it that keeping the story consistent was most of the work.

What made it hold together wasn't process, it was that everyone sourcing input already agreed on the underlying call in Section 1. Once "we are submitting as the platform we're becoming, not the tools we already have" was settled, the individual contributions from product and engineering had a frame to fit into instead of a blank submission to fill.

---

## 4. Where we knew we'd score low, stated up front

We went into both submissions knowing the leader's quadrant was not on the table this cycle, by a long shot, and that wasn't a miscalculation we discovered afterward.

Gartner's and Forrester's criteria reward vendors who natively own the full chain of DevSecOps capability. Source code management is the clearest example: score well here and you need to *be* an SCM vendor, not coordinate with one. CloudBees has never built that, on purpose. Our position is that a coordinated layer across a heterogeneous DevSecOps stack is worth more to a customer than forcing that stack to standardize on a single vendor's version of every capability in it. That position is structurally at odds with how these frameworks score, and no amount of better submission writing changes the criteria.

So we wrote the submission we could defend rather than the submission that would score best, and we knew the gap between those two things in advance. That's a different thing than losing. Losing is not knowing why the score came in where it did.

---

## 5. What it fed forward

Internally, this cycle is where CloudBees actually agreed on how to tell the Cloud Native story, not just for analysts but for the launch itself. The sourcing conversations that built the submission were, in practice, the first time product, engineering, and marketing had to describe the platform-in-progress the same way to an outside audience. That alignment didn't get thrown away once the submission shipped. It became the foundation the May 2025 Unify launch was messaged from.

And because we had already put our real position on record with two of the industry's loudest scorekeepers, we knew exactly what argument we'd need to make in public once we launched. Gartner and Forrester's frameworks reward single-vendor completeness. We had just told both of them, in writing, that we believed a coordination layer beats that. Launch day was the moment to make that disagreement public rather than leave it implicit in a submission only the analysts would read. That's why we wrote "Enough with the Platform" on May 20, 2025, the day we launched: to say plainly that our view of what a platform should be differed from the analyst community's, and why, instead of quietly accepting a scoring framework we didn't think served the customer's actual problem.

The submission is where we decided what we believed. The blog is where we said it to the market.

---

## Appendix: how I built this

Context for reviewers. Not part of the submission.

**1. Made the trade-off explicit before writing a word.** The decision to submit on Cloud Native alone instead of legacy strength was a conversation I forced early, with the actual cost stated in plain terms: which capabilities we knew we'd score worse on, and why that was still the right call given a platform launch three months out. Nobody sourcing input for the submission was surprised by the frame later, because the frame was agreed before the sourcing started.

**2. Treated the two analyst relationships as one story, not two submissions.** Gartner and Forrester ask different questions and score on different rubrics, but an inconsistent identity between the two would have undercut both. I ran the communication with both personally so the underlying position never drifted between them.

**3. Sourced from people, not documents.** Because the Cloud Native product was still being built toward the May launch, there wasn't a single source of truth to pull from. The job was getting product, engineering, and PMM peers to describe the same not-yet-finished thing the same way, which is a coordination problem before it's a writing problem.

**4. Scoped the claim honestly, the same discipline as the later Gartner briefing.** Knowing and stating in advance that the leader's quadrant wasn't happening this cycle is the same move as naming where a category doesn't apply: it costs nothing you weren't already going to lose, and it means the score that does come back has a known reason attached to it instead of an open question.

**5. Let the submission set up the launch message instead of trailing it.** The clearest sign this worked is that the disagreement we put in writing to the analysts in February is the same disagreement we published publicly in May. "Enough with the Platform" wasn't a reaction to how the analysts scored us. It was the position we'd already taken, said louder, on the day we had a product to point at.

**What I would do differently:** get product to commit to final Cloud Native capability language before the sourcing round, not during it. We lost a few cycles of rework reconciling descriptions that were still moving while I was collecting them, and a locked capability list going in would have made the cross-org sourcing faster without changing the underlying bet.
