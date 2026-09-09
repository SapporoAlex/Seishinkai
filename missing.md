# Missing images (broken references)

These pages reference image files that do not exist in `public/assets/images/instructors/`.
Likely cause: instructor photos were renamed/replaced without updating the pages below.
Each entry lists the Japanese page and its English (`en/`) mirror.

## `/assets/images/instructors/oki.jpg` — used for two different people

- `src/pages/dojo/toyohira-k/index.astro:45` / `src/pages/en/dojo/toyohira-k/index.astro:45`
  — alt "担当 島" / "Instructor Shima" (name: 島 / Shima)
  — **candidate fix:** `instructors/shima.jpg` exists
- `src/pages/dojo/akashia/index.astro:42` / `src/pages/en/dojo/akashia/index.astro:44`
  — alt "指導 沖村" / "Instructor Saori Okimura" (name: 沖村 / Saori Okimura)
  — **candidate fix:** `instructors/okimura.jpg` exists
- `src/pages/dojo/nishioka/index.astro:44` / `src/pages/en/dojo/nishioka/index.astro:44`
  — alt "沖村" / "Okimura" (name: 沖村 / Okimura)
  — **candidate fix:** `instructors/okimura.jpg` exists

Note: `dojo/sc/index.astro:102` and `en/dojo/sc/index.astro:102` separately reference `/assets/images/legacy/clubu/oki.jpg`, which **does** exist — that one is fine and not part of this list.

## `/assets/images/instructors/tashiro2.jpg`

- `src/pages/dojo/ebetsu/ebetsu/index.astro:44` / `src/pages/en/dojo/ebetsu/ebetsu/index.astro:53`
  — alt "田代" / "Tashiro" (name: 田代 / Tashiro)
  — **candidate fix:** `instructors/tashiro.jpg` exists (no "2")

## `/assets/images/instructors/miura.jpg`

- `src/pages/dojo/ebetsu/ebetsu/index.astro:45` / `src/pages/en/dojo/ebetsu/ebetsu/index.astro:54`
  — alt "三浦" / "Miura" (name: 三浦 / Miura)
  — no similarly-named file found in `instructors/`

## `/assets/images/instructors/taki.jpg`

- `src/pages/dojo/naganuma/index.astro:46` / `src/pages/en/dojo/naganuma/index.astro:51`
  — alt "指導員 坂本" / "Instructor Sakamoto" (name: 坂本 / Sakamoto)
  — filename ("taki") doesn't match the displayed name ("Sakamoto") even before considering the missing file — worth confirming which is correct
  — no similarly-named file found in `instructors/`

## `/assets/images/instructors/yamane.jpg`

- `src/pages/dojo/takuhoku/index.astro:42` / `src/pages/en/dojo/takuhoku/index.astro:42`
  — alt "指導 山根" / "Instructor Yamane" (name: 山根 / Yamane)
  — no similarly-named file found in `instructors/`

## `/assets/images/instructors/kkpp.jpg`

- `src/pages/news/blogs/index.astro:118` / `src/pages/en/news/blogs/index.astro:118`
  — linked to Facebook profile `kkpps.satharasinghe`
  — no similarly-named file found in `instructors/`
