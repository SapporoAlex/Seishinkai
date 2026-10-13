// Converts every .jpg/.jpeg/.png under <dir>/assets/images to .webp and
// rewrites the matching /assets/images/... references in every built .html
// file so the pages point at the new files. Run AFTER `astro build`, on the
// built output only — source files in src/ and public/ are left untouched,
// so `astro dev` still serves the original jpg/png while developing.
//
// SVGs and GIFs are left alone on purpose: webp isn't a size win for the
// site's one vector logo, and the handful of tiny legacy GIFs aren't worth
// the risk of losing animation.
//
// Usage: node scripts/convert-images-webp.mjs <dir>
// Example: node scripts/convert-images-webp.mjs dist

import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { glob } from "node:fs/promises";
import sharp from "sharp";

const [, , dir] = process.argv;

if (!dir) {
  console.error("Usage: node scripts/convert-images-webp.mjs <dir>");
  console.error("Example: node scripts/convert-images-webp.mjs dist");
  process.exit(1);
}

const imagesDir = `${dir}/assets/images`;
if (!existsSync(imagesDir)) {
  console.log(`No ${imagesDir} directory found, skipping webp conversion.`);
  process.exit(0);
}

let converted = 0;
let totalBefore = 0;
let totalAfter = 0;

for await (const file of glob(`${imagesDir}/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}`)) {
  const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  if (existsSync(webpPath)) {
    console.warn(`Skipping ${file}: ${webpPath} already exists (extension collision).`);
    continue;
  }

  const before = readFileSync(file);
  const after = await sharp(before).webp({ quality: 82 }).toBuffer();

  writeFileSync(webpPath, after);
  unlinkSync(file);

  totalBefore += before.length;
  totalAfter += after.length;
  converted++;
}

let filesChanged = 0;
// Only touches /assets/images/... paths ending in the converted extensions,
// so unrelated .jpg-looking text elsewhere is never at risk.
const IMAGE_EXT = /(\/assets\/images\/[^"'()\s]+?)\.(jpg|jpeg|png)(?=["'()\s])/gi;

for await (const file of glob(`${dir}/**/*.html`)) {
  const original = readFileSync(file, "utf8");
  const rewritten = original.replace(IMAGE_EXT, "$1.webp");
  if (rewritten !== original) {
    writeFileSync(file, rewritten);
    filesChanged++;
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(
  `Converted ${converted} image(s) to webp (${mb(totalBefore)} MB -> ${mb(totalAfter)} MB), ` +
    `rewrote references in ${filesChanged} HTML file(s) under ${dir}/`,
);
