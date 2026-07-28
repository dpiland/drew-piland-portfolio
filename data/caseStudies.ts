export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  category: string;
  challenge: string;
  insight: string;
  action: string;
  // EDIT: Replace [Placeholder: ...] markers with your real metrics
  impact: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cloudbees",
    title: "Release Orchestration Narrative",
    company: "CloudBees",
    category: "Positioning & Launch",
    challenge:
      "Fragmented product narrative left sales struggling to differentiate in a crowded DevOps market. Deals stalled at the value conversation.",
    insight:
      "Buyers didn't care about features. They cared about pipeline risk and deployment confidence. The product solved a real enterprise pain point, but the story wasn't connecting.",
    action:
      "Rebuilt positioning around release intelligence, built the core messaging framework, and drove narrative alignment across product, sales, and exec teams.",
    impact:
      "Drove +26% ARR on a $45M product line by reframing the story from Jenkins connector to enterprise release control plane, and aligned the CEO, CMO, and co-founders on the identity shift.",
    tags: ["Positioning", "Launch", "DevOps", "B2B SaaS"],
  },
  {
    id: "analyst",
    title: "Gartner MQ / Forrester Wave Strategy",
    company: "CloudBees",
    category: "Analyst Relations",
    challenge:
      "Company was under-positioned in key analyst reports despite having a strong product. Narrative gaps were costing deals at the enterprise validation stage.",
    insight:
      "Analysts evaluate narrative as much as product capability. Internal teams weren't telling a coherent, differentiated story; every function had its own version of the truth.",
    action:
      "Led analyst relations strategy, reframed differentiation narrative, and coordinated cross-functional input for submissions and briefings.",
    impact:
      "Secured inclusion in both reports. The unified narrative laid the foundation for what became CloudBees Unify, a single platform story replacing a patchwork of disconnected products.",
    tags: ["Analyst Relations", "Gartner", "Forrester", "Positioning"],
  },
  {
    id: "ibm-akamai",
    title: "Partner Solution Launch",
    company: "IBM / Akamai",
    category: "Partner Marketing",
    challenge:
      "Joint solution had real technical value but lacked a market-facing story that either partner's sales team could articulate on their own.",
    insight:
      "Enterprise buyers needed to see the integrated value proposition, not two separate product pitches stapled together.",
    action:
      "Developed joint positioning, co-branded messaging architecture, and a launch playbook. Aligned stakeholders across two large, complex organizations.",
    impact:
      "Drove 20% YoY bookings growth, a partnership record, across a $125M+ alliance portfolio. Shipped the first integrated Zero Trust Network Access offering in the alliance's 20-year history, launched and presented at IBM Think 2020.",
    tags: ["Partner Marketing", "GTM", "Enterprise", "Co-sell"],
  },
  {
    id: "lenovo",
    title: "Channel Portfolio Strategy",
    company: "Lenovo",
    category: "Partner Enablement",
    challenge:
      "A 30-vendor software portfolio was going to market as 30 separate stories through a distributed partner channel. Partners wanted to sell it and had no way to know what to lead with, so most defaulted back to hardware.",
    insight:
      "The bottleneck was the absence of a point of view. Thirty vendors is a catalog, not a portfolio. Partners needed three things to sell, not thirty things to learn.",
    action:
      "Segmented the portfolio into three strategic pillars and established security as the primary growth lane, setting vendor priority across Absolute, SentinelOne, and Secret Double Octopus. Built the enablement layer to match: a job-to-be-done playbook mapping solutions to buyer roles, messaging templates, and co-sell assets built for self-service. Stood up the first centralized software presence on Lenovo Partner Hub, including the tiering mechanism that set partner status.",
    impact:
      "Gave the channel one prioritized story instead of a catalog, and a launch-readiness scorecard that replaced 'are we ready' negotiations with an owned checklist. On-time launch and the fastest channel activation in the portfolio.",
    tags: ["Channel Strategy", "Partner Enablement", "Segmentation", "Portfolio"],
  },
  {
    id: "unify-ai",
    title: "AI Platform GTM: Unify AI",
    company: "CloudBees",
    category: "AI Product Launch",
    challenge:
      "Three AI products (AI Assistant, First Responder, Unify AI) were going to market as three separate launches, into a DevOps audience that had already tuned out vague AI claims. We were also arriving at GA six to nine months after competitors were embedded in enterprise deal cycles.",
    insight:
      "Marketing the AI features individually was the actual problem. Every release read as one more disconnected capability, which is how buyers decide a vendor is chasing a trend. One umbrella narrative, with each product entering as proof of it, was worth more than three announcements. And buyers didn't want an AI story at all: they wanted proof we solved incident chaos, slow triage, and alert fatigue. Lead with the problem, let the AI be the mechanism.",
    action:
      "Collapsed the three launches under a single Unify AI narrative, with product-specific messaging grounded in operational outcomes underneath it. Changed the launch trigger from GA to demoable, moving the anchor to a recorded demo and recovering 90 days against competitors. Built agentic AI demo environments in Claude Code so field teams had something to put on the screen.",
    impact:
      "Moved CloudBees from a CI/CD tool to a platform conversation at the VP Engineering and CISO level, and positioned First Responder as an integrated alternative to standalone incident management. Measured on Stage 1-3 pipeline velocity and field adoption of the new messaging rather than launch-day noise.",
    tags: ["AI Product Marketing", "Category Narrative", "Launch", "DevOps"],
  },
  {
    id: "microsoft-csp",
    title: "Cloud Services GTM: Microsoft CSP",
    company: "Lenovo",
    category: "Revenue Growth",
    challenge:
      "Customers could buy M365 directly from Microsoft, and many did. The opportunity was shifting that motion to Lenovo, where cloud licenses became the entry point for layering on Managed Services and creating low-friction expansion.",
    insight:
      "The win pattern was already sitting in the data: particular account profiles, deal stages, and triggers that reliably preceded a CSP upsell. Reps weren't unwilling, they just had no way to tell which accounts were worth the call.",
    action:
      "Built win intelligence and automated lead scoring to surface the right accounts. Created messaging that framed Microsoft cloud as margin expansion, not a product add-on. Unlocked MDF investment to fund the outreach motion.",
    impact:
      "+272% YoY revenue growth on Microsoft cloud services.",
    tags: ["GTM", "Cloud", "Revenue Growth", "Sales Enablement"],
  },
];
