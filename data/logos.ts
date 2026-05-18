export interface Logo {
  name: string;
  // If set, renders as an img from cdn.simpleicons.org/{slug}/{color}
  slug?: string;
  // Override default icon height (default: h-6)
  tall?: boolean;
}

export const experienceLogos: Logo[] = [
  { name: "CloudBees", slug: "cloudbees" },
  { name: "Lenovo",    slug: "lenovo", tall: true },
  { name: "IBM" },
  { name: "Citrix" },
];

export const brandLogos: Logo[] = [
  { name: "Akamai" },
  { name: "Microsoft" },
  { name: "Google",                slug: "google" },
  { name: "SentinelOne" },
  { name: "Absolute Software" },
  { name: "Secret Double Octopus" },
];
