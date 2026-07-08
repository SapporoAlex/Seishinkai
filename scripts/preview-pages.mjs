// Serves a base-path-rewritten build (see set-base-path.mjs) the same way
// GitHub Pages would serve a project site: content that physically lives at
// the root of `dir` is made reachable under `/base-path/...`. A generic
// static server (or `astro preview`) can't do this — it serves `dir` as-is
// at "/", so links rewritten to "/Seishinkai/..." would 404. This lets you
// verify the GitHub Pages build actually works before deploying it.
//
// Usage: node scripts/preview-pages.mjs <dir> </base-path> [port]
// Example: node scripts/preview-pages.mjs dist-pages /Seishinkai 4321

import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const [, , dir, base, portArg] = process.argv;

if (!dir || !base || !base.startsWith("/") || base.endsWith("/")) {
  console.error("Usage: node scripts/preview-pages.mjs <dir> </base-path> [port]");
  console.error("Example: node scripts/preview-pages.mjs dist-pages /Seishinkai 4321");
  process.exit(1);
}

const ROOT = resolve(dir);
const PORT = Number(portArg) || 4321;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

function resolveFile(urlPath) {
  let relPath = urlPath.slice(base.length) || "/";
  if (relPath.endsWith("/")) relPath += "index.html";

  const filePath = normalize(join(ROOT, relPath));
  if (!filePath.startsWith(ROOT)) return null; // path traversal guard

  if (existsSync(filePath) && statSync(filePath).isFile()) return filePath;

  const withIndex = join(filePath, "index.html");
  if (existsSync(withIndex)) return withIndex;

  return null;
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);

  if (urlPath === "/") {
    res.writeHead(302, { Location: `${base}/` });
    return res.end();
  }

  if (!urlPath.startsWith(base)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end(`Not found — this server only serves paths under ${base}/`);
  }

  const filePath = resolveFile(urlPath);
  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end(`Not found: ${urlPath}`);
  }

  res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Serving ${dir}/ as a GitHub Pages project site would, at:`);
  console.log(`  http://localhost:${PORT}${base}/`);
});
