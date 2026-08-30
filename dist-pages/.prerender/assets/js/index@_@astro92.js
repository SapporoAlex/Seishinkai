import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const leftGroups = [
    {
      title: "札幌市内の空手道場教室",
      locations: [
        { label: "白石区の空手教室", href: "/dojo/shiroishi/" },
        { label: "厚別区の空手教室", href: "/dojo/atsubetsu/" },
        { label: "中央区の空手教室", href: "/dojo/cyuo/" },
        { label: "豊平区の空手教室", href: "/dojo/toyohira/" },
        { label: "清田区の空手教室", href: "/dojo/minami-kiyota/" },
        { label: "東区の空手教室", href: "/dojo/higashi/" },
        { label: "北区の空手教室", href: "/dojo/kita/" },
        { label: "南区の空手教室", href: "/dojo/minami-kiyota/" },
        { label: "手稲区の空手教室", href: "/dojo/teine/" },
        { label: "西区の空手教室", href: "/dojo/teine/" },
        { label: "個別特別クラス", href: "/dojo/kobetsu/" },
        { label: "居合部", href: "/dojo/iai/" },
        { label: "オンライン空手教室", href: "http://seishinryu.info/" },
        { label: "体術健康クラス", href: "/dojo/kenko/" },
        { label: "パーソナルトレーニング", href: "/dojo/exe/" },
        { label: "総本部道場について", href: "/dojo/hq/" },
        { label: "井上道場(井上塾)", href: "/dojo/inoue/" }
      ]
    },
    {
      title: "海外の空手道場",
      locations: [
        { label: "スリランカ", href: "https://seishinryu.info/iskf/schedule.html" },
        { label: "インド", href: "https://seishinryu.info/iskf/schedule.html" },
        { label: "スウェーデン", href: "https://seishinryu.info/iskf/schedule.html" },
        { label: "オーストラリア", href: "https://seishinryu.info/iskf/schedule.html" },
        { label: "アルゼンチン", href: "https://seishinryu.info/iskf/schedule.html" }
      ]
    }
  ];
  const rightGroups = [
    {
      title: "江別・岩見沢・石狩(花川空手)",
      locations: [
        { label: "江別市の空手教室", href: "/dojo/ebetsu/" },
        { label: "岩見沢市の空手教室", href: "/dojo/ebetsu/" },
        { label: "石狩市の空手教室", href: "/dojo/ebetsu/" }
      ]
    },
    {
      title: "恵庭(島松)・帯広",
      locations: [
        { label: "帯広市の空手教室", href: "/dojo/kitahiro/" },
        { label: "恵庭市の空手教室", href: "/dojo/kitahiro/" },
        { label: "旭川市の空手教室", href: "/dojo/kitahiro/" }
      ]
    },
    {
      title: "当別・長沼・喜茂別・京極・浜頓別・倶知安",
      locations: [
        { label: "当別町の空手教室", href: "/dojo/tobetsu/" },
        { label: "長沼町の空手教室", href: "/dojo/tobetsu/" },
        { label: "喜茂別町の空手教室", href: "/dojo/tobetsu/" },
        { label: "京極町の空手教室", href: "/dojo/tobetsu/" },
        { label: "浜頓別町の空手教室", href: "/dojo/tobetsu/" },
        { label: "南幌町･真狩村の空手教室", href: "/dojo/tobetsu/" }
      ]
    },
    {
      title: "安平町・新冠町・静岡県の空手道場",
      locations: [
        { label: "安平町の空手教室", href: "/dojo/abira/" },
        { label: "新冠町の空手教室", href: "/dojo/abira/" },
        { label: "静岡県･愛知県の教室", href: "/dojo/naichi/" }
      ]
    },
    {
      title: "準加盟・提携友好道場",
      locations: [
        { label: "青空会", href: "http://aozorakai.main.jp/" },
        { label: "千葉県無流塾", href: "/dojo/naichi/" }
      ]
    }
  ];
  const columns = [leftGroups, rightGroups];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "道場一覧", "description": "清心会空手の道場・教室一覧。札幌市内をはじめ北海道各地、千葉県の道場をご案内します。お近くの道場をお探しください。", "lang": "ja", "path": "/dojo/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO LIST</span>
        <h1 class="section-title">空手道場・教室の一覧</h1>
      </div>
      <p class="page-intro">
        清心会空手道連盟が公認及び加盟している各地域での空手道場・教室です。クリックすると一覧が表示されます。
        札幌及び近郊で80ヵ所以上で活動しています。(<a href="/assets/pdf/dojo.pdf" target="_blank">道内・道場一覧PDFダウンロード</a>)(<a href="/assets/pdf/kenko2021.pdf" target="_blank">健康体術クラス</a>)
      </p>
      <p class="page-intro">
        ※コロナにより公共施設等急遽の利用停止や制限により会場、日時等の稽古日が変更になることがあります。ワクチン接種が浸透するまでこの状態が続くと思われます。
      </p>
      <p class="dojo-list__contact">
        お問い合わせは　TEL.011-300-0048(平日13:00-16:00)
      </p>

      <div class="dojo-list__card-group">
        ${columns.map((groups, i) => renderTemplate`<div${addAttribute(i === 0 ? "dojo-list__card-left" : "dojo-list__card-right", "class")}>
              ${groups.map((group) => renderTemplate`<div class="dojo-list__card">
                  <div class="cards-list__locations">
                    <h2 class="cards-list__locations-title">${group.title}</h2>
                    <ul class="cards-list__locations-list">
                      ${group.locations.map((location) => renderTemplate`<li class="dojo-list__location">
                          <a class="dojo-list__location-link"${addAttribute(location.href, "href")}${addAttribute(location.href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(location.href.startsWith("http") ? "noopener" : void 0, "rel")}>
                            ${location.label}
                          </a>
                        </li>`)}
                    </ul>
                  </div>
                </div>`)}
            </div>`)}
      </div>

      <p class="dojo-list__map-link">
        ★札幌及び近郊の空手道場を地図で
      </p>
      <div class="dojo-list__map-embed">
        <iframe src="https://www.google.com/maps/d/embed?mid=1rAno9HwrFRZw9hWdg5c6KHO0BQE&ll=43.05996085602491,141.565931101925&z=11" loading="lazy" title="清心会空手道場マップ"></iframe>
      </div>
      <p class="dojo-list__note">
        ※上記に記載されている道場が清心会空手連盟公認支部及び関連道場となります。
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/index.astro";
const $$url = "/dojo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
