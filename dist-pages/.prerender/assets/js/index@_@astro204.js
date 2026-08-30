import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const longTerm = [
    { name: "Hashini / Sri Lanka", years: "2011-2021", rank: "四段", image: "hashini.jpeg", href: "https://www.youtube.com/watch?v=UpRmPGwuNNM" },
    { name: "Erica / Sweden", years: "2025-2026", rank: "", image: "erica_02.jpeg", href: "https://www.facebook.com/erica.bokelius" },
    { name: "Alex / Australia", years: "2007-2013", rank: "二段", image: "alex.jpeg" },
    { name: "Emmet / Ireland", years: "2009-2013", rank: "", image: "emmet.jpeg" },
    { name: "Daniela / Italy", years: "2016-2019", rank: "二段", image: "daniera.jpeg" },
    { name: "Sahan / Sri Lanka", years: "2018-2021", rank: "二段", image: "sahan.jpeg", href: "https://www.youtube.com/watch?v=UpRmPGwuNNM" }
  ];
  const shortTerm = [
    { name: "Mario / Spain", years: "2007 / 2008", image: "mario.jpeg" },
    { name: "Silvia / Italy", years: "2016", image: "silvia.jpeg" },
    { name: "Erica / Sweden", years: "2015 / 2016 / 2025", image: "erica_01.jpeg" },
    { name: "Josephine / Sweden", years: "2016", image: "josephine.jpeg" }
  ];
  const IMG = "/assets/images/membership/foreign-trainees/";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "外国人空手留学生 - Karate International Students", "description": "清心会本部で空手を学んだ外国人留学生・内弟子のご紹介。空手文化ビザによる長期留学制度、宿泊施設、短期留学生の受け入れについてご案内します。", "lang": "ja", "path": "/membership/international-students/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">INTERNATIONAL</span>
        <h1 class="section-title">外国人空手留学生</h1>
      </div>

      <h2 class="detail-page__heading">JAPAN Old style karate "Seishinkai dojo"</h2>

      <p class="detail-page__lead">
        清心会で空手を学ぼうとする外国人は、空手文化ビザを取得して長期間に渡り滞在して、空手を学ぶことが出来ます。<br>
        <em>Get a karate culture visa and stay for a long time to learn
          karate.</em><br>
        以下は清心会本部で学んだ長期実習生(留学生)たちです。<br>
        <em>The following are long-term trainees (international students) who
          studied at Seishinkai Headquarters.</em>
      </p>

      <p class="detail-page__note">
        清心流空手を学ぶ人のための宿泊施設があります。<em>Accommodation available for foreign trainees of Seishinryu
          Karate.</em><br>
        <a href="https://youtu.be/Q6q0g7h7f0A" target="_blank" rel="noopener">宿泊施設の紹介動画(YouTube)を見る</a>
      </p>

      <h2 class="detail-page__heading">
        ◆外国人特別長期留学生(指導者養成コース)・内弟子<br>
        <small>Long-term foreign student, leader training course</small>
      </h2>

      <div class="detail-gallery detail-gallery--tall">
        ${longTerm.map(
    (student) => student.href ? renderTemplate`<figure>
                  <img${addAttribute(`${IMG}${student.image}`, "src")}${addAttribute(student.name, "alt")} loading="lazy">
                <figcaption>
                  ${student.name}
                  <br>
                  ${student.years}
                  ${student.rank && ` ${student.rank}`}
                <a${addAttribute(student.href, "href")} target="_blank" rel="noopener"${addAttribute({
      "logo-youtube": student.href.includes("youtube"),
      "logo-facebook": student.href.includes("facebook")
    }, "class:list")}>
                  ${student.href.includes("facebook") && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z"></path>
                    </svg>`}
                  ${student.href.includes("youtube") && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z"></path>
                    </svg>`}
                </a>
                </figcaption>
              </figure>` : renderTemplate`<figure>
                <img${addAttribute(`${IMG}${student.image}`, "src")}${addAttribute(student.name, "alt")} loading="lazy">
                <figcaption>
                  ${student.name}
                  <br>
                  ${student.years}
                  ${student.rank && ` ${student.rank}`}
                </figcaption>
              </figure>`
  )}
      </div>

      <h2 class="detail-page__heading">
        ◆外国人短期留学生(修了者)<br>
        <small>Foreign short-term students (Graduates)</small>
      </h2>

      <div class="detail-gallery detail-gallery--tall">
        ${shortTerm.map((student) => renderTemplate`<figure>
              <img${addAttribute(`${IMG}${student.image}`, "src")}${addAttribute(student.name, "alt")} loading="lazy">
              <figcaption>
                ${student.name}
                <br>
                ${student.years}
              </figcaption>
            </figure>`)}
      </div>

      <h2 class="detail-page__heading">稽古の様子</h2>
      <div class="detail-gallery">
        <figure>
          <a class="video-thumb" href="https://www.youtube.com/watch?v=UpRmPGwuNNM" target="_blank" rel="noopener">
            <img${addAttribute(`${IMG}video_thumb_01.jpg`, "src")} alt="留学生の稽古風景(YouTube)" loading="lazy">
          </a>
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_01.jpeg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_02.jpeg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_03.jpg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_04.jpg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_05.jpg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_06.jpg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_07.jpg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_08.jpg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
        <figure>
          <img${addAttribute(`${IMG}foreign-trainees_09.jpg`, "src")} alt="留学生の稽古風景" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        国内在住の外国人の方は、日本人と同じ形での入会となります。<br>
        <em>Foreigners residing in Japan will be charged the same enrollment
          and fees as Japanese.</em><br>
        <a href="/assets/pdf/kis.pdf" target="_blank">About karate study abroad expenses(PDF)</a>
      </p>

      <h2 class="detail-page__heading">Inquiry by message</h2>
      <div class="detail-gallery detail-gallery--full">
        <figure>
          <a href="https://www.facebook.com/katsumi.okubo.9" target="_blank" rel="noopener">
            <img src="/assets/images/instructors/masami2.jpg" alt="Soke Okubo" loading="lazy">
          </a>
          <figcaption>Soke Okubo</figcaption>
        </figure>
        <figure>
          <a href="https://www.facebook.com/nobutaka.maekawa" target="_blank" rel="noopener">
            <img src="/assets/images/instructors/maekawa.jpg" alt="Master Maekawa" loading="lazy">
          </a>
          <figcaption>Master Maekawa</figcaption>
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/membership/">← 入会の御案内へ戻る</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/membership/international-students/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/membership/international-students/index.astro";
const $$url = "/membership/international-students";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
