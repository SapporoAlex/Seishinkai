// Rewrites root-relative href="/..." and src="/..." references in a built
// `dist`-style output so the site works when served from a sub-path (e.g.
// a GitHub Pages project site at https://user.github.io/Seishinkai/)
// instead of a domain root. Run AFTER `astro build`, never before.
//
// The site's internal links/assets are written as root-absolute paths
// (e.g. "/dojo/cyuo/", "/assets/images/logo.svg") because that's correct
// when the site is served from a domain root. Those same paths break once
// the site is served from a sub-path, since the browser resolves them
// against the domain root, not the sub-path. This script patches the
// already-built HTML in place rather than touching any source file, so the
// normal root-domain build is completely unaffected.
//
// Usage: node scripts/set-base-path.mjs <dir> </base-path>
// Example: node scripts/set-base-path.mjs dist-pages /Seishinkai

import { readFileSync, writeFileSync } from "node:fs";
import { glob } from "node:fs/promises";

const [, , dir, base] = process.argv;

if (!dir || !base || !base.startsWith("/") || base.endsWith("/")) {
  console.error("Usage: node scripts/set-base-path.mjs <dir> </base-path>");
  console.error("Example: node scripts/set-base-path.mjs dist-pages /Seishinkai");
  process.exit(1);
}

// Matches href="/..." or src="/..." but not "//" (protocol-relative) and
// not full URLs (those don't start with "/" right after the quote).
const ROOT_PATH = /((?:href|src)=")\/(?!\/)/g;

let filesChanged = 0;
for await (const file of glob(`${dir}/**/*.html`)) {
  const original = readFileSync(file, "utf8");
  const rewritten = original.replace(ROOT_PATH, `$1${base}/`);
  if (rewritten !== original) {
    writeFileSync(file, rewritten);
    filesChanged++;
  }
}

console.log(`Rewrote root-relative paths to "${base}/" in ${filesChanged} file(s) under ${dir}/`);
