import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMG = "/assets/images/legacy/komon/";
  const CLUBU = "/assets/images/legacy/clubu/";
  const advisors = [
    { name: "Takahiro Miyakawa", role: "Chairman, Hokkaido Mainichi Culture Association", image: `${IMG}miyakawa.jpg`, href: "https://www.facebook.com/profile.php?id=100015617839109" },
    { name: "Shigeyuki Mori", role: "Hokkaido Prefectural Assembly Member", image: `${IMG}miri-g.jpg`, href: "https://www.facebook.com/profile.php?id=100010477867334" },
    { name: "Yuji Kobayashi", role: "Hokkaido Prefectural Assembly Member", image: `${IMG}koba.jpg`, href: "https://www.facebook.com/yuji.kobayashi.71868" }
  ];
  const advisors2 = [
    { title: "Special Advisor", name: "Kazuhiro Nomura", role: "Ebetsu City Assembly Member", image: `${IMG}nomura.jpg`, href: "https://www.facebook.com/kazuhiro.nomura.5220" },
    { title: "Advisor", name: "Hideki Maruyama", role: "Sapporo City Assembly Member", image: `${IMG}maru-g.jpg`, href: "http://www.komei.or.jp/km/sapporo-maruyama-hideki/" },
    { title: "Advisor", name: "Nobuko Igarashi", role: "Tobetsu Town Assembly Member", image: `${IMG}igarashi.jpg` }
  ];
  const medicalAdvisors = [
    { title: "M.D.", name: "Kazuhiko Nagao, 3rd Dan", role: "Director, Nagao Naika Cardiovascular Clinic", image: `${IMG}nagao.jpg`, roleHref: "http://www.nagao-naika.com/index.html" },
    { title: "D.D.S.", name: "Ryuichiro Inoue, 6th Dan", role: "Director, Kita 10 Jo Dental Office", image: `${IMG}inoue.jpg`, href: "https://www.facebook.com/profile.php?id=100011334952601", roleHref: "https://kita10jyou.chitosedori.com/" }
  ];
  const koenkai = [
    { title: "Director: Mitsuhiro Ara", org: "Roger Co., Ltd.", orgHref: "https://www.loger.co.jp/index.html", role: "President", image: `${IMG}ara.jpg` },
    { title: "Chairman: Yoshihiko Watanabe", org: "Nabex", orgHref: "http://www.sjnk-ag.com/a/nabex/", role: "Chairman & President", image: `${IMG}watanabe.jpg`, href: "https://nabex.insag.jp/" },
    { title: "Director: Yuko Maruyama", org: "Japan Stylist Association", orgHref: "http://r.goope.jp/ams-style", role: "Chairperson", image: `${IMG}maruyuko.jpg`, href: "https://www.facebook.com/yuuko.maruyama.908" }
  ];
  const obKai = [
    { title: "Chairman: Masami Koyano", org: "Hikari Construction", orgHref: "http://hikari.geo.jp/", role: "President (founding-era member)", image: `${IMG}koya.jpg`, href: "https://www.facebook.com/masami.koyano" },
    { title: "Director: Masaki Saegusa", org: "Saegusa Pharmaceutical", role: "President (former Fushiko Branch instructor)", image: `${CLUBU}saegusa3.jpg`, href: "https://www.facebook.com/masaki.saegusa.9" },
    { title: "Vice Chairman: Hirotaka Shimazaki", org: "ES Office", orgHref: "http://www.japan-agency.com/", role: "President (founding-era member)", image: `${IMG}shima.jpg`, href: "https://www.facebook.com/hirotaka.shimazaki.7?ref=br_rs" },
    { title: "Vice Chairman: Atsushi Saegusa", org: "Saegusa Pharmaceutical Kyushu", orgHref: "http://www.saegusayakuhin-q.co.jp/", role: "President (former Fukuoka Branch Chief)", image: `${CLUBU}saegusa2.jpg`, href: "https://www.facebook.com/atsushi.saegusa1" }
  ];
  const koenkaicho = [{ no: 1, years: "1985–present", name: "Yoshihiko Watanabe", role: "Chairman & President, Nabex" }];
  const koenrijicho = [{ no: 1, years: "2012–present", name: "Mitsuhiro Ara", role: "President, Roger" }];
  const shihandai = [
    { no: 1, years: "1985–1985", name: "Atsushi Nakajima", role: "Headquarters Deputy Shihan" },
    { no: 2, years: "1986–1989", name: "Toshihiro Kayano", role: "Headquarters Deputy Shihan" },
    { no: 3, years: "1994–1996", name: "Kazunori Sumiyoshi", role: "Headquarters Deputy Shihan", href: "https://sumiyoshijuku.org/jukucho/" },
    { no: 4, years: "1996–1999", name: "Koichi Sueyoshi", role: "Headquarters Deputy Shihan" },
    { no: 5, years: "1999–2002", name: "Toshinobu Inura", role: "Headquarters Deputy Shihan", href: "https://www.facebook.com/jushin.inuura.3" },
    { no: 6, years: "2002–2003", name: "Kazuya Aoki", role: "Headquarters Deputy Shihan" },
    { no: 7, years: "2004–2005", name: "Kayoko Mimura", role: "Headquarters Deputy Shihan", href: "/en/instructors/mimura/" },
    { no: 8, years: "2006–2007", name: "Kazuaki Namikawa", role: "Headquarters Deputy Shihan", href: "https://www.facebook.com/kazuaki.namikawa" },
    { no: 9, years: "2008–2010", name: "Tadayuki Ishimori", role: "Headquarters Deputy Shihan" },
    { no: 10, years: "2010–2012", name: "Tsubasa Okubo", role: "Headquarters Deputy Shihan", href: "/en/about/tubasa/" },
    { no: 11, years: "2015–2016", name: "Tsubasa Nimori", role: "Headquarters Deputy Shihan" },
    { no: 12, years: "2018–2021", name: "Takushi Muroki", role: "Headquarters Deputy Shihan" },
    { no: 13, years: "2022–present", name: "Kazuya Shima", role: "Headquarters Deputy Shihan", href: "https://www.facebook.com/profile.php?id=100010931403991" },
    { no: 14, years: "2026–present", name: "Fuyuki Shima", role: "Headquarters Deputy Shihan" },
    { no: 15, years: "2026–present", name: "Saori Okimura", role: "Headquarters Deputy Shihan" },
    { no: 16, years: "2026–present", name: "Takao Kimura", role: "Headquarters Deputy Shihan" }
  ];
  const shihan = [
    { no: 1, years: "2002–2003", name: "Kazunori Sumiyoshi", role: "Headquarters Chief Shihan" },
    { no: 2, years: "2006–2012", name: "Kayoko Mimura", role: "Headquarters Chief Shihan, Acting Director", href: "/en/instructors/mimura/" },
    { no: 3, years: "2012–2015", name: "Tsubasa Okubo", role: "Assistant Director, Headquarters Shihan", href: "/en/about/tubasa/" },
    { no: 4, years: "2015–2016", name: "Tsubasa Nimori", role: "Acting Director" },
    { no: 5, years: "2016–2026", name: "Tsubasa Okubo", role: "Headquarters Chief Shihan", href: "/en/about/tubasa/" },
    { no: 6, years: "2026–present", name: "Nobutaka Maekawa", role: "Headquarters Shihan", href: "https://www.facebook.com/nobutaka.maekawa" }
  ];
  const obKaicho = [{ no: 1, years: "1999–present", name: "Masami Koyano", role: "1st Chairman" }];
  const kancho = [
    { no: 1, years: "1986–2012", name: "Katsumi Okubo", role: "1st Director & Founder", href: "/en/about/okubo/" },
    { no: 2, years: "2012–2015", name: "Kayoko Mimura", role: "2nd Director", href: "/en/instructors/mimura/" },
    { no: 3, years: "2016–2020", name: "Tsubasa Nimori", role: "3rd Director" },
    { no: 4, years: "2020–present", name: "Tsubasa Okubo", role: "4th Director", href: "/en/about/tubasa/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Advisors & Consultants", "description": "Advisors, consultants, medical advisors, the Seishinkai Support Association, and the Seishinkan OB Association of the All Japan Seishinkai Karate Federation, plus the full history of headquarters shihan and directors.", "lang": "en", "path": "/en/about/yakuin/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">ADVISORS</span>
        <h1 class="section-title">Advisors & Consultants</h1>
      </div>

      <h2 class="detail-page__heading">All Japan Seishinkai Karate Federation — Advisors</h2>
      <div class="detail-gallery">
        ${advisors.map((p) => renderTemplate`<figure>
              <a${addAttribute(p.href, "href")} target="_blank" rel="noopener">
                <img${addAttribute(p.image, "src")}${addAttribute(p.name, "alt")} loading="lazy">
              </a>
              <figcaption>
                ${p.name}
                <br>
                ${p.role}
              </figcaption>
            </figure>`)}
      </div>

      <h2 class="detail-page__heading">All Japan Seishinkai Karate Federation — Consultants</h2>
      <div class="detail-gallery">
        ${advisors2.map((p) => renderTemplate`<figure>
              ${p.href ? renderTemplate`<a${addAttribute(p.href, "href")} target="_blank" rel="noopener">
                  <img${addAttribute(p.image, "src")}${addAttribute(p.name, "alt")} loading="lazy">
                </a>` : renderTemplate`<img${addAttribute(p.image, "src")}${addAttribute(p.name, "alt")} loading="lazy">`}
              <figcaption>
                ${p.title}
                <br>
                ${p.name}
                <br>
                ${p.role}
              </figcaption>
            </figure>`)}
      </div>

      <h2 class="detail-page__heading">All Japan Seishinkai Karate Federation — Medical Advisors</h2>
      <div class="detail-gallery">
        ${medicalAdvisors.map((p) => renderTemplate`<figure>
              ${p.href ? renderTemplate`<a${addAttribute(p.href, "href")} target="_blank" rel="noopener">
                  <img${addAttribute(p.image, "src")}${addAttribute(p.name, "alt")} loading="lazy">
                </a>` : renderTemplate`<img${addAttribute(p.image, "src")}${addAttribute(p.name, "alt")} loading="lazy">`}
              <figcaption>
                ${p.title}
                <br>
                ${p.name}
                <br>
                <a${addAttribute(p.roleHref, "href")} target="_blank" rel="noopener">
                  ${p.role}
                </a>
              </figcaption>
            </figure>`)}
      </div>

      <h2 class="detail-page__heading">Seishinkai Support Association</h2>
      <div class="detail-gallery">
        ${koenkai.map((p) => renderTemplate`<figure>
              ${p.href ? renderTemplate`<a${addAttribute(p.href, "href")} target="_blank" rel="noopener">
                  <img${addAttribute(p.image, "src")}${addAttribute(p.title, "alt")} loading="lazy">
                </a>` : renderTemplate`<img${addAttribute(p.image, "src")}${addAttribute(p.title, "alt")} loading="lazy">`}
              <figcaption>
                ${p.title}
                <br>
                <a${addAttribute(p.orgHref, "href")} target="_blank" rel="noopener">
                  ${p.org}
                </a>
                <br>
                ${p.role}
              </figcaption>
            </figure>`)}
      </div>

      <h2 class="detail-page__heading">Seishinkan OB Association</h2>
      <div class="detail-gallery">
        ${obKai.map((p) => renderTemplate`<figure>
              <a${addAttribute(p.href, "href")} target="_blank" rel="noopener">
                <img${addAttribute(p.image, "src")}${addAttribute(p.title, "alt")} loading="lazy">
              </a>
              <figcaption>
                ${p.title}
                <br>
                ${p.orgHref ? renderTemplate`<a${addAttribute(p.orgHref, "href")} target="_blank" rel="noopener">
                    ${p.org}
                  </a>` : p.org}
                <br>
                ${p.role}
              </figcaption>
            </figure>`)}
      </div>

      <h2 class="detail-page__heading">Seishinkai — Past Support Association Chairmen</h2>
      <table class="table">
        <tbody>
          ${koenkaicho.map((r) => renderTemplate`<tr><th>${r.no}</th><td>${r.years}</td><td>${r.name}</td><td>${r.role}</td></tr>`)}
        </tbody>
      </table>

      <h2 class="detail-page__heading">Seishinkai — Past Support Association Directors</h2>
      <table class="table">
        <tbody>
          ${koenrijicho.map((r) => renderTemplate`<tr><th>${r.no}</th><td>${r.years}</td><td>${r.name}</td><td>${r.role}</td></tr>`)}
        </tbody>
      </table>

      <h2 class="detail-page__heading">Headquarters Seishinkan Dojo — Past Deputy Shihan</h2>
      <table class="table">
        <tbody>
          ${shihandai.map((r) => renderTemplate`<tr>
              <th>${r.no}</th>
              <td>${r.years}</td>
              <td>${r.href ? renderTemplate`<a${addAttribute(r.href, "href")}${addAttribute(r.href.startsWith("/") ? void 0 : "_blank", "target")}${addAttribute(r.href.startsWith("/") ? void 0 : "noopener", "rel")}>${r.name}</a>` : r.name}</td>
              <td>${r.role}</td>
            </tr>`)}
        </tbody>
      </table>

      <h2 class="detail-page__heading">Headquarters Seishinkan Dojo — Past Shihan (Head Instructors)</h2>
      <table class="table">
        <tbody>
          ${shihan.map((r) => renderTemplate`<tr>
              <th>${r.no}</th>
              <td>${r.years}</td>
              <td>${r.href ? renderTemplate`<a${addAttribute(r.href, "href")}${addAttribute(r.href.startsWith("/") ? void 0 : "_blank", "target")}${addAttribute(r.href.startsWith("/") ? void 0 : "noopener", "rel")}>${r.name}</a>` : r.name}</td>
              <td>${r.role}</td>
            </tr>`)}
        </tbody>
      </table>

      <h2 class="detail-page__heading">Seishinkai Seishinkan Dojo — Past OB Association Chairmen</h2>
      <table class="table">
        <tbody>
          ${obKaicho.map((r) => renderTemplate`<tr><th>${r.no}</th><td>${r.years}</td><td>${r.name}</td><td>${r.role}</td></tr>`)}
        </tbody>
      </table>

      <h2 class="detail-page__heading">Headquarters Seishinkan Okubo Dojo — Past Directors</h2>
      <table class="table">
        <tbody>
          ${kancho.map((r) => renderTemplate`<tr>
              <th>${r.no}</th>
              <td>${r.years}</td>
              <td>${r.href ? renderTemplate`<a${addAttribute(r.href, "href")}${addAttribute(r.href.startsWith("/") ? void 0 : "_blank", "target")}${addAttribute(r.href.startsWith("/") ? void 0 : "noopener", "rel")}>${r.name}</a>` : r.name}</td>
              <td>${r.role}</td>
            </tr>`)}
        </tbody>
      </table>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/images/DSC_0287.jpg" alt="Seishinkai Karate demonstration tournament" loading="lazy">
          <figcaption>Seishinkai Karate demonstration tournament</figcaption>
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/links-partners/">← Back to Links & Partners</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/about/yakuin/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/about/yakuin/index.astro";
const $$url = "/en/about/yakuin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
