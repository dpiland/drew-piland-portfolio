export interface Logo {
  name: string;
  // If set, renders as an img from cdn.simpleicons.org/{slug}/{color}
  slug?: string;
}

export const experienceLogos: Logo[] = [
  { name: "CloudBees", slug: "cloudbees" },
  { name: "Lenovo",    slug: "lenovo" },
  { name: "IBM" },
  { name: "Citrix",    slug: "citrix" },
];

export const brandLogos: Logo[] = [
  { name: "Akamai",                slug: "akamai" },
  { name: "Microsoft" },
  { name: "Google",                slug: "google" },
  { name: "SentinelOne" },
  { name: "Absolute Software" },
  { name: "Secret Double Octopus" },
];
