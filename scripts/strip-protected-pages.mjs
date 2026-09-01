// Removes paths that must never appear on the public GitHub Pages mirror
// (dist-pages) from a build output. GitHub Pages serves static files
// directly and ignores .htaccess/.htpasswd entirely, so anything meant to
// be password-protected on the real (Apache) host would be world-readable
// there instead — and this repo's dist-pages folder is committed straight
// to a public GitHub repo. Run AFTER `astro build --outDir dist-pages`.
//
// Usage: node scripts/strip-protected-pages.mjs <dir> <path...>
// Example: node scripts/strip-protected-pages.mjs dist-pages news/newsletter

import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const [, , dir, ...paths] = process.argv;

if (!dir || paths.length === 0) {
  console.error("Usage: node scripts/strip-protected-pages.mjs <dir> <path...>");
  console.error("Example: node scripts/strip-protected-pages.mjs dist-pages news/newsletter");
  process.exit(1);
}

for (const p of paths) {
  const target = join(dir, p);
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${target} (kept off the public GitHub Pages mirror)`);
  }
}
