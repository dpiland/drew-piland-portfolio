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
      "Rebuilt positioning around release intelligence. Developed a new core messaging framework and led narrative alignment across product, sales, and exec teams.",
    impact:
      "Grew the product line to $45M in year one (26% ARR growth) by reframing the story from Jenkins connector to enterprise release control plane.",
    tags: ["Positioning", "Launch", "DevOps", "B2B SaaS"],
  },
  {
    id: "analyst",
    title: "Gartner MQ / Forrester Wave Strategy",
    company: "Enterprise B2B",
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
      "Closed $125M in new ARR in the final quarter, exceeding the prior year's total ARR. First-ever co-created solution for enterprise application access through the channel.",
    tags: ["Partner Marketing", "GTM", "Enterprise", "Co-sell"],
  },
  {
    id: "lenovo",
    title: "Partner Marketing Playbook",
    company: "Lenovo",
    category: "Channel Enablement",
    challenge:
      "A distributed partner ecosystem lacked consistent, scalable marketing resources. Partners wanted to go to market but didn't have the scaffolding to do it confidently.",
    insight:
      "The bottleneck wasn't partner motivation; it was the absence of a repeatable framework partners could adapt and deploy without heavy support.",
    action:
      "Built a repeatable partner marketing playbook: messaging templates, campaign briefs, and co-sell enablement assets designed for self-service use.",
    impact:
      "Created the first centralized asset library telling the full Lenovo SSG software portfolio story, giving partners a single, consistent foundation to go to market with.",
    tags: ["Channel Marketing", "Partner Enablement", "Playbook", "Scale"],
  },
  {
    id: "unify-ai",
    title: "AI Platform GTM: Unify AI",
    company: "CloudBees",
    category: "AI Product Launch",
    challenge:
      "Launching three AI products (AI Assistant, First Responder, Unify AI) into a DevOps market skeptical of AI hype. Buyers had seen vague AI claims before and tuned them out.",
    insight:
      "Buyers didn't need an AI story. They needed proof that the product solved a pain they already felt: incident chaos, slow triage, and alert fatigue. Lead with the problem, let the AI be the mechanism.",
    action:
      "Developed product-specific messaging for each AI capability grounded in operational outcomes. Built agentic AI demo environments using Claude Code to give field teams something to show, not just tell.",
    impact:
      "Enabled sales motion for Unify AI suite; positioned First Responder as an integrated alternative to standalone incident management tools, expanding platform value for enterprise buyers.",
    tags: ["AI Product Marketing", "GTM", "Launch", "DevOps"],
  },
  {
    id: "microsoft-csp",
    title: "Cloud Services GTM: Microsoft CSP",
    company: "Lenovo",
    category: "Revenue Growth",
    challenge:
      "Customers could buy M365 directly from Microsoft — and many did. The opportunity was shifting that motion to Lenovo, where cloud licenses became the entry point for layering on Managed Services and creating low-friction expansion.",
    insight:
      "The win pattern was already in the data. Specific account profiles, deal stages, and triggers predicted CSP upsell. The problem wasn't motivation; it was prioritization and messaging fit.",
    action:
      "Built win intelligence and automated lead scoring to surface the right accounts. Created messaging that framed Microsoft cloud as margin expansion, not a product add-on. Unlocked MDF investment to fund the outreach motion.",
    impact:
      "+272% YoY revenue growth on Microsoft cloud services.",
    tags: ["GTM", "Cloud", "Revenue Growth", "Sales Enablement"],
  },
];
