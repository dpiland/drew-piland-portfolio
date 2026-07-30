#!/usr/bin/env node
/**
 * Copies the Unify work samples from the job-applications repo into
 * content/work-samples/, which is what actually deploys.
 *
 * Why this is a manual step and not a build hook: Vercel only checks out THIS
 * repo, so the job-applications sources do not exist at deploy time. The copy
 * has to happen locally and get committed.
 *
 *   npm run sync-samples          copy, report what changed
 *   npm run sync-samples -- --check   report drift only, exit 1 if any
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const SRC_DIR =
  process.env.WORK_SAMPLES_SRC ??
  path.join(os.homedir(), "Projects", "job-applications", "Career", "work-samples");

const DST_DIR = path.join(process.cwd(), "content", "work-samples");

// source filename -> deployed filename. Must stay aligned with the `file`
// values in data/workSamples.ts.
const FILES = {
  "cloudbees-unify-launch-bom.md": "launch-bom.md",
  "cloudbees-unify-positioning.md": "positioning.md",
  "cloudbees-unify-messaging-house.md": "messaging-house.md",
  "cloudbees-unify-command-message.md": "command-of-the-message.md",
  "cloudbees-unify-analyst-submission.md": "analyst-submission.md",
  // sdlc-101 is deliberately absent: that page is laid out as a visual course
  // from data/sdlc101.ts, not rendered from markdown. Edit the data file.
};

const checkOnly = process.argv.includes("--check");

if (!fs.existsSync(SRC_DIR)) {
  console.error(`Source directory not found: ${SRC_DIR}`);
  console.error("Set WORK_SAMPLES_SRC if the job-applications repo lives elsewhere.");
  process.exit(1);
}

fs.mkdirSync(DST_DIR, { recursive: true });

let changed = 0;
let missing = 0;

for (const [src, dst] of Object.entries(FILES)) {
  const srcPath = path.join(SRC_DIR, src);
  const dstPath = path.join(DST_DIR, dst);

  if (!fs.existsSync(srcPath)) {
    console.error(`  MISSING  ${src}`);
    missing++;
    continue;
  }

  const incoming = fs.readFileSync(srcPath, "utf8");
  const current = fs.existsSync(dstPath) ? fs.readFileSync(dstPath, "utf8") : null;

  if (current === incoming) {
    console.log(`  ok       ${dst}`);
    continue;
  }

  changed++;
  if (checkOnly) {
    console.log(`  DRIFTED  ${dst}`);
  } else {
    fs.writeFileSync(dstPath, incoming);
    console.log(`  updated  ${dst}`);
  }
}

// Catch samples added to content/ but never wired into the sync map
const known = new Set(Object.values(FILES));
for (const f of fs.readdirSync(DST_DIR)) {
  if (f.endsWith(".md") && !known.has(f)) {
    console.warn(`  ORPHAN   ${f} is deployed but not in the sync map`);
  }
}

if (missing) process.exit(1);

if (checkOnly && changed) {
  console.error(`\n${changed} file(s) drifted. Run: npm run sync-samples`);
  process.exit(1);
}

console.log(
  changed
    ? `\n${changed} file(s) updated. Commit content/work-samples/ to deploy.`
    : "\nAll work samples in sync."
);
