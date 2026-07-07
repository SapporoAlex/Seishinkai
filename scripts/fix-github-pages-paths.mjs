import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const basePath = "/seishinkai";

function rewritePath(value) {
  if (!value) {
    return value;
  }

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    value.startsWith("data:") ||
    value.startsWith("#") ||
    value.startsWith("?")
  ) {
    return value;
  }

  if (value === "/" || value === basePath || value.startsWith(`${basePath}/`)) {
    return value;
  }

  if (value.startsWith("/")) {
    return `${basePath}${value}`;
  }

  return value;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function updateFile(filePath) {
  let content = await readFile(filePath, "utf8");
  const original = content;

  content = content.replace(
    /(href|src)=(["'])(\/[^"']*)(\2)/g,
    (match, attr, quote, value) => {
      return `${attr}=${quote}${rewritePath(value)}${quote}`;
    },
  );

  content = content.replace(/url\((\/[^)]+)\)/g, (match, value) => {
    return `url(${rewritePath(value)})`;
  });

  if (content !== original) {
    await writeFile(filePath, content);
  }
}

const files = await walk(distDir);
const htmlAndCssFiles = files.filter(
  (file) => file.endsWith(".html") || file.endsWith(".css"),
);

for (const file of htmlAndCssFiles) {
  await updateFile(file);
}
