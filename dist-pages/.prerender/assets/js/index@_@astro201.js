import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const supportingCompanies = [
    {
      name: "株式会社ロジェ",
      href: "https://www.loger.co.jp/index.html"
    },
    {
      name: "ジャパンエージェンシー",
      href: "https://japan-agency.com/"
    },
    {
      name: "毎日フレンド北海道"
    },
    {
      name: "三愛自動車工業株式会社",
      href: "https://www.san-ai-jikou.co.jp/index.php"
    },
    {
      name: "ながお内科循環器クリニック",
      href: "http://www.nagao-naika.com/"
    },
    {
      name: "北10条デンタルオフィス",
      href: "https://kita10jyou.chitosedori.com/"
    },
    {
      name: "株式会社サエグサ薬品",
      href: "https://www.saegusayakuhin.co.jp/"
    },
    {
      name: "株式会社サエグサ薬品九州",
      href: "https://www.saegusayakuhin-q.co.jp/"
    },
    {
      name: "有限会社ナベックス"
    },
    {
      name: "株式会社第一葬祭"
    },
    {
      name: "ひかり工務店",
      href: "http://hikari.geo.jp/"
    },
    {
      name: "スズキオート札幌"
    },
    {
      name: "SBS札幌西"
    },
    {
      name: "バイクステーションMAX",
      href: "https://www1.suzuki.co.jp/motor/shops/index.php?job=info&id=1117"
    },
    {
      name: "株式会社合田観光商事",
      href: "https://www.pph-g.com/"
    },
    {
      name: "名鉄観光サービス"
    },
    {
      name: "富士堂スポーツ"
    },
    {
      name: "東洋武道具"
    },
    {
      name: "及川写真事務所"
    }
  ];
  const supportingOrganizations = [
    {
      name: "日本スタイリスト協会",
      href: "https://ameblo.jp/ams-style/"
    },
    {
      name: "北海道毎日文化協会",
      href: "http://mainichi-school.info/"
    }
  ];
  const partnerOrganizations = [
    {
      name: "体術･波動門北海道",
      href: "http://hado.dpcnp.info/"
    },
    {
      name: "NPO法人普門會",
      href: "https://fumonkaikawasaki.wixsite.com/kawasaki-karate"
    },
    {
      name: "糸東流･三心館空手インターナショナル"
    },
    {
      name: "沖縄小林流空手古武道連盟"
    },
    {
      name: "世界小林流空手古武道協会"
    },
    {
      name: "トリニダード･トバコ空手道連盟"
    }
  ];
  const links = [
    {
      name: "武道道場ナビ",
      href: "https://www.budo-dojo-navi.com/"
    }
  ];
  const quickLinks = [
    {
      title: "Facebook Group",
      href: "https://www.facebook.com/seishinkai.karate.dojo"
    },
    {
      title: "お勧めリンク",
      href: "/recommended-links/"
    },
    {
      title: "清心会空手行事予定",
      href: "/news/archive/"
    },
    {
      title: "掲示板・連絡事項",
      href: "https://seishinkan-dojo.bbs.fc2.com/"
    },
    {
      title: "会員ブログ・Facebook",
      href: "/news/blogs/"
    },
    {
      title: "連盟顧問・相談役",
      href: "/about/yakuin/"
    }
  ];
  const featuredPhotos = [
    {
      image: "/assets/images/img_backup-02.jpg",
      caption: "常設道場・清心館大麻空手道場  江別市大麻沢町6-2 パークヒルズ1F"
    },
    {
      image: "/assets/images/img_backup-03.jpg",
      caption: "常設道場・清心館本通空手道場  札幌市白石区本通16丁目北"
    },
    {
      image: "/assets/images/img_backup-04.jpg",
      caption: "清心館山本研修所"
    }
  ];
  const youtubeArchives = [
    {
      year: "2013",
      image: "/assets/images/youtube/img_backup-2013.jpg"
    },
    {
      year: "2013",
      image: "/assets/images/youtube/img_backup-2013b.jpg"
    },
    {
      year: "2014（動画）",
      image: "/assets/images/youtube/img_backup-2014.jpg",
      href: "https://www.youtube.com/watch?v=MICYPkxtO6w"
    },
    {
      year: "2015",
      image: "/assets/images/youtube/img_backup-2015.jpg"
    },
    {
      year: "2016（動画）",
      image: "/assets/images/youtube/img_backup-2016.jpg",
      href: "https://www.youtube.com/watch?v=JnYL0ukfJcU"
    },
    {
      year: "2017（動画）",
      image: "/assets/images/youtube/img_backup-2017.jpg",
      href: "https://www.youtube.com/watch?v=xYKuv0V5Y7o"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "友好団体・企業", "description": "清心会を支えてくださる企業・団体、友好団体、関連リンクをご紹介します。", "lang": "ja", "path": "/links-partners/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="detail-page">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">LINKS & PARTNERS</span>
        <h1 class="section-title">友好団体・企業</h1>
      </div>

      <p class="detail-page__intro">
        清心会を支えてくださる企業・団体、友好団体および関連サイトをご紹介しています。
      </p>

      <section class="partner-section">
        <h2 class="detail-page__heading">清心会の活動を応援して下さる企業</h2>

        <p>清心会の空手活動を応援してくださる企業様です。</p>

        <ul class="partner-section__list">
          ${supportingCompanies.map((company) => renderTemplate`<li class="partner-section__item">
              ${company.href ? renderTemplate`<a${addAttribute(company.href, "href")} target="_blank" rel="noopener noreferrer">
                  ${company.name}
                </a>` : renderTemplate`<span>${company.name}</span>`}
            </li>`)}
        </ul>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">清心会の活動に賛同して下さる団体</h2>

        <p>
          清心会の空手活動に賛同し、応援してくださっている団体・個人の皆様です。
        </p>

        <ul class="partner-section__list">
          ${supportingOrganizations.map((org) => renderTemplate`<li class="partner-section__item">
              ${org.href ? renderTemplate`<a${addAttribute(org.href, "href")} target="_blank" rel="noopener noreferrer">
                  ${org.name}
                </a>` : renderTemplate`<span>${org.name}</span>`}
            </li>`)}
        </ul>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">友好協力団体</h2>

        <ul class="partner-section__list">
          ${partnerOrganizations.map((org) => renderTemplate`<li class="partner-section__item">
              ${org.href ? renderTemplate`<a${addAttribute(org.href, "href")} target="_blank" rel="noopener noreferrer">
                  ${org.name}
                </a>` : renderTemplate`<span>${org.name}</span>`}
            </li>`)}
        </ul>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">HPリンク</h2>

        <ul class="partner-section__list">
          ${links.map((link) => renderTemplate`<li class="partner-section__item">
              ${link.href && link.href !== "#" ? renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer">
                  ${link.name}
                </a>` : renderTemplate`<span>${link.name}</span>`}
            </li>`)}
        </ul>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">関連ページ</h2>

        <div class="quick-links">
          ${quickLinks.map((link) => {
    const isExternal = /^https?:\/\//.test(link.href);
    return renderTemplate`<a class="quick-link"${addAttribute(link.href, "href")}${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}>
                ${link.title}
              </a>`;
  })}
        </div>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">行事アーカイブ</h2>

        <div class="youtube-grid">
          ${youtubeArchives.map((video) => renderTemplate`<a class="youtube-card"${addAttribute(video.href, "href")} target="_blank" rel="noopener noreferrer">
              <span class="youtube-card__thumb">
                <img${addAttribute(video.image, "src")}${addAttribute(video.year, "alt")}>
              </span>
              <span>${video.year}</span>
            </a>`)}
        </div>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">フォトギャラリー</h2>

        <div class="photo-grid">
          ${featuredPhotos.map((photo) => renderTemplate`<figure>
              <img${addAttribute(photo.image, "src")}${addAttribute(photo.caption, "alt")}>
              <figcaption>${photo.caption}</figcaption>
            </figure>`)}
        </div>
      </section>

    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/links-partners/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/links-partners/index.astro";
const $$url = "/links-partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
