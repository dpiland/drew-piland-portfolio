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
      "Buyers didn't care about features — they cared about pipeline risk and deployment confidence. The product solved a real enterprise pain point, but the story wasn't connecting.",
    action:
      "Rebuilt positioning around release intelligence. Developed a new core messaging framework and led narrative alignment across product, sales, and exec teams.",
    impact:
      "[Placeholder: XX% increase in qualified pipeline / analyst recognition / launch KPI]",
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
      "Analysts evaluate narrative as much as product capability. Internal teams weren't telling a coherent, differentiated story — every function had its own version of the truth.",
    action:
      "Led analyst relations strategy, reframed differentiation narrative, and coordinated cross-functional input for submissions and briefings.",
    impact:
      "[Placeholder: Improved ranking / Gartner MQ inclusion / Forrester Wave positioning / analyst quote secured]",
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
      "Enterprise buyers needed to see the integrated value proposition — not two separate product pitches stapled together.",
    action:
      "Developed joint positioning, co-branded messaging architecture, and a launch playbook. Aligned stakeholders across two large, complex organizations.",
    impact:
      "[Placeholder: Partner pipeline generated / joint wins / sales adoption rate / revenue attribution]",
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
      "The bottleneck wasn't partner motivation — it was the absence of a repeatable framework partners could adapt and deploy without heavy support.",
    action:
      "Built a repeatable partner marketing playbook: messaging templates, campaign briefs, and co-sell enablement assets designed for self-service use.",
    impact:
      "[Placeholder: Partner adoption rate / pipeline contribution / scale metric / time-to-first-campaign reduction]",
    tags: ["Channel Marketing", "Partner Enablement", "Playbook", "Scale"],
  },
];
