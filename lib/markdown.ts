import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { workSamples } from "@/data/workSamples";

const CONTENT_DIR = path.join(process.cwd(), "content", "work-samples");

/** Source filename in job-applications -> the slug it deploys under here. */
const CROSS_LINKS: Record<string, string> = {
  "cloudbees-unify-positioning.md": "positioning",
  "cloudbees-unify-messaging-house.md": "messaging-house",
  "cloudbees-unify-command-message.md": "command-of-the-message",
  "cloudbees-unify-analyst-submission.md": "analyst-submission",
};

/**
 * The samples cross-reference each other by their original filenames. Rewrite
 * the ones that have a home here, and unwrap the ones that do not (the release
 * orchestration brief is referenced but not published) so no link 404s.
 */
function rewriteCrossLinks(md: string): string {
  return md.replace(
    /\[([^\]]+)\]\(([a-z0-9-]+\.md)\)/gi,
    (_match, text: string, target: string) => {
      const slug = CROSS_LINKS[target];
      return slug ? `[${text}](/work/cloudbees-unify/${slug})` : text;
    }
  );
}

/**
 * Strips the H1: the page renders its own header, so keeping it would show
 * the title twice.
 */
function stripLeadingH1(md: string): string {
  return md.replace(/^#\s+.*\n+/, "");
}

export function renderWorkSample(file: string): string {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  return marked.parse(rewriteCrossLinks(stripLeadingH1(raw)), {
    async: false,
    gfm: true,
  });
}

export function workSampleSlugs(): string[] {
  return workSamples.map((s) => s.slug);
}
