# Site Audit & Newsletter Notes (2026-08-31)

Working notes from the cleanup pass: unused images removed, the new WebP
build pipeline, dojo pages that aren't linked from anywhere on the site, and
how the new password-protected newsletter area works.

## 1. Unused images removed

**254 unused image files (~19.4 MB) were deleted from `public/assets/images/`.**
Confirmed unused: every file in `src/` (`.astro/.ts/.tsx/.js/.mjs/.scss/.css/.json`)
and in `public/`/root HTML/sitemap files was searched for a reference to each
image's full path; only files with zero references anywhere were removed. A
few of the trickier cases were spot-checked by hand before deleting (files
that share a basename with a genuinely-used file elsewhere, e.g. a file
literally sitting in a folder called `unused/` that happened to share a name
with a real, in-use image at the top level).

As suspected, the overwhelming majority — **229 of the 254** — were under
`public/assets/images/legacy/` (old-site photos: news archive shots, dojo
photo overflow, instructor/member portraits, historical images). The rest
were superseded duplicates left over at the top level of `assets/images/`
(e.g. `icon_dojo.png`, `img_schedule.jpg` — newer copies exist in
subfolders), a couple of numbering gaps (`img_chuoumainichi_03.jpg`,
`img_shiroishi_1.jpg` — the page only ever referenced the other numbers),
and 3 superseded instructor photos.

**Nothing else was touched.** Images referenced only through a
prefix-constant + filename pattern (e.g. `` `${IMG}${x.image}` `` in the
yakuin, membership, and international-students pages) were correctly kept —
those looked unused to a naive path search but are real.

## 2. Image build pipeline now outputs WebP

**What changed:** `npm run build` and `npm run build:pages` now run a new
step (`scripts/convert-images-webp.mjs`) right after `astro build`. It
converts every `.jpg`/`.jpeg`/`.png` under the build output's
`assets/images/` to `.webp` (quality 82) and rewrites every matching
`/assets/images/...` reference in the built HTML to point at the new `.webp`
file. SVGs (the one logo) and the handful of tiny legacy GIFs are left as-is.

**Result on this repo's current images:** 246.7 MB → 36.4 MB of images in
the build output — an 85% reduction — with zero remaining `.jpg`/`.png`
references in the built HTML (verified).

**Important:** this only affects the *build output* (`dist/`, `dist-pages/`).
Source images in `public/assets/images/` stay as `.jpg`/`.png`, and
`astro dev` still serves the originals — so local development is unchanged,
only what actually gets deployed is smaller. A new dependency, `sharp`, was
added to `devDependencies` to do the conversion (already installed and
tested).

## 3. Dojo pages that are unreachable from the site

These 12 dojo pages exist as built pages (both the Japanese and English
versions) but are never linked from anywhere else on the site — not from
the dojo listing page, not from any hub page's branch table, not from
nav/footer. The only place their own slug appears is in their own
canonical-URL metadata and in some legacy image paths. A visitor has no way
to reach them by clicking through the site; they're only reachable if
someone already knows the exact URL.

- `src/pages/dojo/akashia/` (+ `src/pages/en/dojo/akashia/`)
- `src/pages/dojo/asahikawa/` (+ en)
- `src/pages/dojo/cyuo-m/` (+ en)
- `src/pages/dojo/dac/` (+ en)
- `src/pages/dojo/hana-k/` (+ en) — this page itself links out to `/dojo/ryoku/`, but nothing links *to* it
- `src/pages/dojo/hiragishi/` (+ en) — a legacy page that tells visitors to use the current Misono branch page instead
- `src/pages/dojo/hiraoka/` (+ en) — distinct from the reachable `hiraoka-c` and `hiraoka-sc`
- `src/pages/dojo/naebo/` (+ en) — distinct from the reachable `h-naebo`
- `src/pages/dojo/sc/` (+ en) — no inbound or outbound references anywhere
- `src/pages/dojo/taihei/` (+ en)
- `src/pages/dojo/takuhoku/` (+ en)
- `src/pages/dojo/yamamoto/` (+ en) — links out to `/dojo/hondori/`, but nothing links to it

**How this was found:** the dojo listing page (`src/pages/dojo/index.astro`
and its `en/` mirror) hardcodes links to ~19 "hub" slugs; each hub page then
lists its own branches via `BranchTable.astro`. Every `href`/`link:` value
across `src/pages`, `src/components`, `src/data`, and `src/layouts` was
collected into a link graph and diffed against the full list of page
folders. No broken links were found in the other direction (every link
target does resolve to a real page).

**No pages were deleted here** — this is a list for you to review. For each
one you'll want to decide: relink it from the appropriate hub/branch table
(if the dojo is still active), or delete the page (if it's closed/merged
into another branch, like `hiragishi` appears to be).

## 4. Password-protected newsletter area

**What was built:**
- `/news/` now has a button under "ニュースレター" linking to `/news/newsletter/`.
- `/news/newsletter/` is a new page listing all PDF newsletters, each one a direct download link.
- The PDFs live in `public/news/newsletter/` — the exact same folder the page itself builds into (`dist/news/newsletter/`), alongside an `.htaccess` file.

**How the protection works:**
Apache's Basic Auth is used, scoped to that one folder only:
- `.htaccess` (committed, no secret) tells Apache "everything in this folder needs a valid username/password," and points at a `.htpasswd` file for the credentials.
- `.htpasswd` holds the bcrypt-hashed username/password. When a visitor clicks the button and hits `/news/newsletter/`, the browser shows its native username/password popup — Apache checks it against `.htpasswd` before serving *anything* from that folder, including the PDFs directly.
- **`.htpasswd` is deliberately NOT committed to git.** This GitHub repo is public, and a committed password hash can be brute-forced offline at leisure. Instead:
  - `public/news/newsletter/.htpasswd.example` (committed) documents the format and the command to generate one.
  - `.gitignore` excludes the real `public/news/newsletter/.htpasswd`.
  - A real one was generated locally for you to test with (see Next Steps — I'll give you the password directly, not in a file).

**The GitHub Pages mirror (`dist-pages`) is a separate concern:** this repo also builds a second copy of the site for GitHub Pages via `npm run build:pages`. GitHub Pages serves files as plain static files and does not process `.htaccess`/`.htpasswd` at all — anything placed there would be world-readable with no password prompt, and this repo is public. To prevent that, `build:pages` now deletes `news/newsletter/` from the `dist-pages` output right after building it (see `scripts/strip-protected-pages.mjs`), so the protected newsletter area only ever exists on the real Apache-hosted production site, never on the public mirror.

## 5. Next steps for you (dev)

1. **Set the real AuthUserFile path.** Open `public/news/newsletter/.htaccess` and replace `/REPLACE/WITH/ABSOLUTE/SERVER/PATH/...` with the actual absolute server path to `.htpasswd` on your host (your hosting control panel will show you the document root — ask support if it's not obvious; Sakura/Xserver/Lolipop-style hosts usually show this as "サーバーの絶対パス" or similar).
2. **Confirm `AllowOverride AuthConfig` (or `All`) is enabled** for your account on that host — this is what makes `.htaccess` files work at all. It's on by default for most Japanese shared hosting but is worth a quick check with support if the password prompt doesn't appear after deploying.
3. **Get the real `.htpasswd` onto the server.** A working one was generated locally during setup with username `seishinkai` and a random password (given to you separately, not written to any file) — you can use that to test, then rotate it later, or generate your own now with:
   `htpasswd -c -B -b public/news/newsletter/.htpasswd seishinkai "your-new-password"`
   Upload the resulting file to the server directly (FTP/SFTP/cPanel file manager) into the same folder as `.htaccess` — never via git.
4. **Add new newsletter issues** by dropping the PDF into `public/news/newsletter/` and adding a matching entry to the `newsletters` array in `src/pages/news/newsletter/index.astro`.
5. **Deploy and test end-to-end** on the real host: visit `/news/newsletter/`, confirm the password prompt appears, confirm a wrong password is rejected, confirm a correct one lets you both see the list and download a PDF directly by URL.
6. **Decide on the 12 unreachable dojo pages above** — relink or remove each one.
7. **Run `npm install`** before your next build — `sharp` was added as a devDependency for the webp conversion step.
8. **Note the build now takes a bit longer** (every image is re-encoded on every build, ~a few seconds for this site's current image set) — not an issue at this size, but worth knowing if the image library grows a lot.
