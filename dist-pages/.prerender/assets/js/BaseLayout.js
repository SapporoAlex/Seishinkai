import { A as AstroError, I as InvalidComponentArgs, c as createRenderInstruction, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, d as renderSlot, e as renderHead, u as unescapeHTML } from './prerender.js';
import 'piccolore';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
	const v = glob$1[path$13];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
	});
};

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { brand = "Seishinkai", logoAlt = "清心会空手のロゴ", nav = [
    { label: "Home", href: "/en/" },
    { label: "About", href: "/en/about/" },
    { label: "Schedule", href: "/en/schedule/" },
    { label: "Membership", href: "/en/membership/" },
    { label: "Instructors", href: "/en/instructors/" },
    { label: "Dojo List", href: "/en/dojo/" },
    { label: "News & SNS", href: "/en/news/" },
    { label: "Links & Partners", href: "/en/links-partners/" }
  ], lang = "ja", currentPath = "/" } = Astro2.props;
  const normalizePath = (value) => {
    const raw = typeof value === "string" ? value.trim() : "/";
    let pathname = raw.startsWith("/") ? raw : `/${raw}`;
    if (!pathname.endsWith("/")) pathname += "/";
    return pathname === "//" ? "/" : pathname;
  };
  const activePath = normalizePath(currentPath);
  const jaHref = activePath.startsWith("/en/") ? activePath.replace(/^\/en/, "") || "/" : activePath;
  const enHref = activePath.startsWith("/en/") ? activePath : activePath === "/" ? "/en/" : `/en${activePath}`;
  return renderTemplate`${maybeRenderHead()}<header class="header">
  <div class="header__inner">

    <div class="header__left">
      <img class="header__logo" src="/assets/images/logo.svg"${addAttribute(logoAlt, "alt")}>
      <p class="header__brand">${brand}</p>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        ${nav.map((item) => renderTemplate`<li>
            <a${addAttribute("header__nav-link" + (item.href === activePath ? " header__nav-link--active" : ""), "class")}${addAttribute(item.href, "href")}${addAttribute(item.href === activePath ? "page" : void 0, "aria-current")}>
              ${item.label}
            </a>
          </li>`)}
      </ul>
      <div class="header__lang-desktop" role="group" aria-label="Language switch">
        <a${addAttribute("header__lang-link" + (lang === "ja" ? " header__lang-link--active" : ""), "class")}${addAttribute(jaHref, "href")}>Ja</a>
        <span class="header__lang-separator">|</span>
        <a${addAttribute("header__lang-link" + (lang === "en" ? " header__lang-link--active" : ""), "class")}${addAttribute(enHref, "href")}>En</a>
      </div>
    </nav>
    <button class="header__hamburger" aria-label="Open menu" id="js-hamburger">
      <span></span><span></span><span></span>
    </button>
    <div class="header__drawer" id="js-drawer" tabindex="-1" aria-hidden="true">
      <button class="header__drawer-close" aria-label="Close menu" id="js-drawer-close">&times;</button>
      <ul class="header__drawer-list">
        ${nav.map((item) => renderTemplate`<li>
            <a${addAttribute("header__nav-link" + (item.href === activePath ? " header__nav-link--active" : ""), "class")}${addAttribute(item.href, "href")}${addAttribute(item.href === activePath ? "page" : void 0, "aria-current")}>
              ${item.label}
            </a>
          </li>`)}
      </ul>
      <div class="header__drawer-lang" role="group" aria-label="Language switch">
        <a${addAttribute("header__lang-link" + (lang === "ja" ? " header__lang-link--active" : ""), "class")}${addAttribute(jaHref, "href")}>Ja</a>
        <span class="header__drawer-lang-separator">|</span>
        <a${addAttribute("header__lang-link" + (lang === "en" ? " header__lang-link--active" : ""), "class")}${addAttribute(enHref, "href")}>En</a>
      </div>
    </div>
    <div class="header__drawer-backdrop" id="js-drawer-backdrop"></div>
  </div>
</header>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { text = "Copyright© 1995-2026 全日本清心会空手道連盟 All Rights Reserved.", lang = "ja" } = Astro2.props;
  const isEn = lang === "en";
  const p = isEn ? "/en" : "";
  const brand = isEn ? "Seishinkai" : "清心会";
  const org = isEn ? "NPO All Japan Seishinkai Karate Federation" : "特定非営利活動法人 全日本清心会空手道連盟";
  const address = isEn ? "2-1-27 Sakaedori, Shiroishi-ku, Sapporo" : "札幌市白石区栄通2丁目1-27（東北通沿）";
  const hours = isEn ? "Mon–Fri 13:00–16:00" : "月〜金 13:00〜16:00";
  const columns = [
    {
      title: isEn ? "Menu" : "メニュー",
      links: [
        { label: isEn ? "Home" : "トップ", href: `${p}/` },
        { label: isEn ? "About" : "清心会について", href: `${p}/about/` },
        { label: isEn ? "Schedule" : "スケジュール", href: `${p}/schedule/` },
        { label: isEn ? "Membership" : "入会案内", href: `${p}/membership/` },
        { label: isEn ? "Instructors" : "師範・支部長", href: `${p}/instructors/` },
        { label: isEn ? "Dojo List" : "道場一覧", href: `${p}/dojo/` },
        { label: isEn ? "News & SNS" : "ニュース・SNS", href: `${p}/news/` },
        { label: isEn ? "Links & Partners" : "リンク・パートナー", href: `${p}/links-partners/` }
      ]
    },
    {
      title: isEn ? "Join & Visit" : "入会・体験",
      links: [
        { label: isEn ? "Fees" : "入会費用", href: `${p}/membership/#fees` },
        {
          label: isEn ? "Trial & Contact" : "体験申込・お問い合わせ",
          href: `${p}/membership/#contact`
        },
        { label: isEn ? "Media Coverage" : "メディア取材", href: `${p}/membership/#media` },
        {
          label: isEn ? "Application Form (PDF)" : "入会申込書(PDF)",
          href: "/assets/pdf/newkai.pdf",
          external: true
        },
        {
          label: isEn ? "Online Karate School" : "オンライン空手教室",
          href: "http://seishinryu.info/",
          external: true
        }
      ]
    },
    {
      title: isEn ? "Related Links" : "関連リンク",
      links: [
        {
          label: isEn ? "Official Site" : "清心会公式サイト",
          href: "https://seishinkan.ne.jp/",
          external: true
        },
        {
          label: isEn ? "ISKF Overseas Branches" : "ISKF海外支部",
          href: "https://seishinryu.info/iskf/schedule.html",
          external: true
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/ISKF.Seishinryu.karate/",
          external: true
        },
        {
          label: isEn ? "Bulletin Board" : "掲示板・連絡事項",
          href: "https://seishinkan-dojo.bbs.fc2.com/",
          external: true
        }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer">
  <div class="footer__inner">
    <div class="footer__brand">
      <div class="footer__brand-row">
        <img class="footer__logo" src="/assets/images/logo.svg"${addAttribute(`${brand}のロゴ`, "alt")}>
        <span class="footer__brand-name">${brand}</span>
      </div>
      <p class="footer__org">${org}</p>
      <ul class="footer__contact">
        <li>${address}</li>
        <li>TEL 011-300-0048（${hours}）</li>
        <li>FAX 011-300-0094</li>
        <li>Karate@seishinkan.ne.jp</li>
      </ul>
    </div>

    <nav class="footer__nav" aria-label="Footer navigation">
      ${columns.map((column) => renderTemplate`<div class="footer__col">
            <p class="footer__heading">${column.title}</p>
            <ul class="footer__links">
              ${column.links.map((link) => renderTemplate`<li>
                  <a${addAttribute(link.href, "href")}${addAttribute(link.external ? "_blank" : void 0, "target")}${addAttribute(link.external ? "noopener" : void 0, "rel")}>
                    ${link.label}
                  </a>
                </li>`)}
            </ul>
          </div>`)}
    </nav>
  </div>

  <div class="footer__bottom">
    <p class="footer__text">${text}</p>
  </div>
</footer>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/Footer.astro", void 0);

const title = "清心会空手";
const url = "https://seishinkan.ne.jp";
const ogImage = "/assets/images/ogp.png";
const logo = "/assets/images/logo.svg";
const description = "札幌を中心に北海道各地で活動する全日本清心会空手道連盟（清心会空手）の公式サイト。";
const siteData = {
  title,
  url,
  ogImage,
  logo,
  description,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const siteDomain = siteData.url.replace(/\/+$/, "");
  const props = Astro2.props;
  const lang = props.lang ?? "ja";
  const keywords = props.keywords ?? void 0;
  const path = props.path ?? "/";
  const currentPath = path;
  const ogImage = props.ogImage ?? siteData.ogImage;
  props.breadcrumb ?? void 0;
  const jaPath = currentPath.startsWith("/en/") ? currentPath.replace(/^\/en/, "") || "/" : currentPath;
  const enPath = currentPath.startsWith("/en/") ? currentPath : currentPath === "/" ? "/en/" : `/en${currentPath}`;
  const alternatePath = lang === "ja" ? enPath : jaPath;
  const ogLocaleMap = {
    ja: "ja_JP",
    en: "en_US"
  };
  const ogLocale = ogLocaleMap[lang] ?? "ja_JP";
  const ogLocaleAlternate = lang === "ja" ? "en_US" : "ja_JP";
  let localeData = null;
  try {
    localeData = (await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/locales/en.json": () => import('./en.js'),"../data/locales/ja.json": () => import('./ja.js')})), `../data/locales/${lang}.json`, 4)).default;
  } catch (e) {
    localeData = (await import('./ja.js')).default;
  }
  const localeSite = localeData?.site ?? {
    name: siteData.title,
    fullName: siteData.title,
    defaultTitle: siteData.title,
    description: siteData.description,
    logoAlt: `${siteData.title}のロゴ`,
    titleSeparator: "｜",
    areaServed: "北海道"
  };
  const fullTitle = props.title ? `${props.title}${localeSite.titleSeparator}${localeSite.name}` : localeSite.defaultTitle;
  const description = props.description ?? localeSite.description;
  const canonicalUrl = siteDomain + path;
  const alternateUrl = siteDomain + alternatePath;
  const ogImageUrl = siteDomain + ogImage;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: localeSite.fullName,
    alternateName: localeSite.name,
    url: siteDomain + (lang === "en" ? "/en/" : "/"),
    logo: siteDomain + siteData.logo,
    sport: "Karate",
    areaServed: localeSite.areaServed
  };
  const headerProps = localeData?.header ?? {
    brand: siteData.title,
    nav: [
      { label: "トップ", href: "/" },
      { label: "概要", href: "/about/" },
      { label: "スケジュール", href: "/schedule/" },
      { label: "入会", href: "/membership/" },
      { label: "インストラクター", href: "/instructors/" },
      { label: "道場一覧", href: "/dojo/" },
      { label: "ニュース・SNS", href: "/news/" }
    ]
  };
  const footerProps = localeData?.footer ?? { text: `© 2026 ${siteData.title}` };
  return renderTemplate(_a || (_a = __template(["<html", "", '>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>', '</title>\n    <!-- <GtmHeader /> -->\n    <meta name="description"', ">\n    ", '\n\n    <meta property="og:title"', '>\n    <meta property="og:site_name"', '>\n    <meta property="og:description"', '>\n    <meta property="og:url"', '>\n    <meta property="og:image"', '>\n    <meta property="og:type" content="website">\n    <meta property="og:locale"', '>\n    <meta property="og:locale:alternate"', '>\n    <meta name="twitter:card" content="summary_large_image">\n\n    <meta name="format-detection" content="telephone=no">\n\n    <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico">\n    <link rel="canonical"', '>\n    <!-- hreflang alternates -->\n    <link rel="alternate"', "", '>\n    <link rel="alternate"', "", '>\n    <link rel="alternate"', ' hreflang="x-default">\n    <script type="application/ld+json">', '<\/script>\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&family=Noto+Sans+JP:wght@300;400;500&family=Bebas+Neue&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css">\n    <script src="/assets/js/swiper-bundle.min.js"><\/script>\n    ', "\n  ", "</head>\n  <body>\n    ", "\n    <main>\n      ", '\n    </main>\n    <button id="js-back-to-top" class="back-to-top" aria-label="Back to top" type="button">\n      <span class="back-to-top__chevron" aria-hidden="true"></span>\n    </button>\n    ', "\n  </body></html>"])), addAttribute(lang, "lang"), addAttribute(lang === "en" ? "lang-en" : "lang-ja", "class"), fullTitle, addAttribute(description, "content"), keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`, addAttribute(fullTitle, "content"), addAttribute(localeSite.name, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(ogImageUrl, "content"), addAttribute(ogLocale, "content"), addAttribute(ogLocaleAlternate, "content"), addAttribute(canonicalUrl, "href"), addAttribute(canonicalUrl, "href"), addAttribute(lang === "ja" ? "ja" : "en", "hreflang"), addAttribute(alternateUrl, "href"), addAttribute(lang === "ja" ? "en" : "ja", "hreflang"), addAttribute(`${siteDomain}/`, "href"), unescapeHTML(JSON.stringify(orgSchema)), renderScript($$result, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Header", $$Header, { ...headerProps, "logoAlt": localeSite.logoAlt, "lang": lang, "currentPath": path }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { ...footerProps, "lang": lang }));
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, createComponent as c };
