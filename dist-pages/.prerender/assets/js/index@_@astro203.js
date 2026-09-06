import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const internationalExchangeVideos = [
    { href: "https://www.youtube.com/watch?v=xYKuv0V5Y7o", image: "/assets/images/membership/international-exchange/thumb_inex_01.jpg", caption: "2017 オーストラリア" },
    { href: "https://www.youtube.com/watch?v=mEdD0fOIVaA", image: "/assets/images/membership/international-exchange/thumb_inex_02.jpg", caption: "2017 イタリア・パキスタン・フランス" },
    { href: "https://www.youtube.com/watch?v=JnYL0ukfJcU", image: "/assets/images/membership/international-exchange/thumb_inex_03.jpg", caption: "2016 イタリア・アルゼンチン" },
    { href: "https://www.youtube.com/watch?v=UR9dPqzvwEQ", image: "/assets/images/membership/international-exchange/thumb_inex_04.jpg", caption: "2013 スウェーデン" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "空手古武道国際交流", "description": "海外から清心会総本部道場を訪れる外国人空手指導者たちとの国際交流の記録。スウェーデン、イタリア、スリランカなど、世界各国との交流の様子をご紹介します。", "lang": "ja", "path": "/membership/international-exchange/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">国際交流</span>
        <h1 class="section-title">空手古武道国際交流</h1>
      </div>

      <p class="detail-page__lead">
        海外から外国人師範・空手指導者が訪れる清心会空手<br>
        清心会総本部道場には毎年、海外から外国人空手指導者たちが訪れます。<br>
        その多くは競技スポーツでない伝統文化としての空手を求めて北海道の清心会へ訪れ、その後、沖縄へと向かいます（その逆に沖縄へ寄ってから北海道札幌へ来る場合もあります）。<br>
        外国人師範の多くは競技空手を経て、修行し足りないものを補いに、更に空手の源流を求めて古流空手へたどり着きます。
      </p>

      <h2 class="detail-page__heading">空手古武道国際交流</h2>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_01.jpg" alt="2013年4月 スウェーデン" loading="lazy">
          <figcaption>2013年4月 スウェーデン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_02.jpg" alt="2013年8月 スリランカ遠征" loading="lazy">
          <figcaption>2013年8月 スリランカ遠征</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_03.jpg" alt="2014年9月 イタリア・アルゼンチン・エジプト" loading="lazy">
          <figcaption>2014年9月 イタリア・アルゼンチン・エジプト</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_04.jpg" alt="2015年4月 スウェーデン" loading="lazy">
          <figcaption>2015年4月 スウェーデン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_05.jpg" alt="2016年4月 アルゼンチン" loading="lazy">
          <figcaption>2016年4月 アルゼンチン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_06.jpg" alt="2017年4月 イタリア" loading="lazy">
          <figcaption>2017年4月 イタリア</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_07.jpg" alt="2017年4月 パキスタン" loading="lazy">
          <figcaption>2017年4月 パキスタン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_08.jpg" alt="2017年6月 オーストラリア" loading="lazy">
          <figcaption>2017年6月 オーストラリア</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_09.jpg" alt="2017年 フランス" loading="lazy">
          <figcaption>2017年 フランス</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_10.jpg" alt="2018年5月 インド" loading="lazy">
          <figcaption>2018年5月 インド</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_11.jpg" alt="2018年9月 イタリア・アルゼンチン・エジプト・フィリピン・パキスタン" loading="lazy">
          <figcaption>2018年9月 イタリア・アルゼンチン・エジプト・フィリピン・パキスタン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_12.jpg" alt="2019年10月 アルゼンチン" loading="lazy">
          <figcaption>2019年10月 アルゼンチン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_13.jpg" alt="2023年7月 スウェーデン遠征" loading="lazy">
          <figcaption>2023年7月 スウェーデン遠征</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_14.jpg" alt="2024年4月 スリランカ" loading="lazy">
          <figcaption>2024年4月 スリランカ</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_15.jpg" alt="2024年8月 ロシア" loading="lazy">
          <figcaption>2024年8月 ロシア</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_16.jpg" alt="2024年10月 アルゼンチン" loading="lazy">
          <figcaption>2024年10月 アルゼンチン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_17.jpg" alt="2024年 スリランカ" loading="lazy">
          <figcaption>2024年 スリランカ</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_18.jpg" alt="2025年1月 スウェーデン" loading="lazy">
          <figcaption>2025年1月 スウェーデン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_19.jpg" alt="2025年6月 スリランカ" loading="lazy">
          <figcaption>2025年6月 スリランカ</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_20.jpg" alt="2025年12月 ノルウェー" loading="lazy">
          <figcaption>2025年12月 ノルウェー</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_21.jpg" alt="2026年2月 スウェーデン" loading="lazy">
          <figcaption>2026年2月 スウェーデン</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_22.jpg" alt="2026年7月 オーストラリア" loading="lazy">
          <figcaption>2026年7月 オーストラリア</figcaption>
        </figure>
      </div>

      <p class="detail-page__note">
        来訪国は、スウェーデン、イタリア、パキスタン、エジプト、オーストラリア、フランス、アルゼンチン、スリランカ、インド、クウェート、アイルランド、アメリカなど。
      </p>

      <section class="partner-section">
        <h2 class="detail-page__heading">動画ギャラリー</h2>

        <div class="youtube-grid">
          ${internationalExchangeVideos.map((video) => renderTemplate`<a class="youtube-card"${addAttribute(video.href, "href")} target="_blank" rel="noopener noreferrer">
                <span class="youtube-card__thumb">
                  <img${addAttribute(video.image, "src")}${addAttribute(`${video.caption}（YouTube）`, "alt")} loading="lazy">
                </span>
                <span>${video.caption}</span>
              </a>`)}
        </div>
      </section>

      <h2 class="detail-page__heading">簡易短期宿泊施設</h2>

      <p>
        海外からの訪問者向けに、短期滞在用の宿泊施設をご用意しております。
      </p>

      <div class="detail-page__img-text-pair--col">
        <div class="detail-gallery">
          <a class="video-thumb" target="_blank" href="https://www.youtube.com/watch?v=Q6q0g7h7f0A">
            <figure>
              <img src="/assets/images/youtube/img_accommodation-thumb.jpg" alt="簡易短期宿泊施設（YouTube）" loading="lazy">
            </figure>
          </a>
        </div>
      </div>

      <h2 class="detail-page__heading">お問い合わせ</h2>

      <p class="detail-page__note">
        メールまたはメッセンジャーをご利用ください。その他の担当者は日本語のみとなります。
      </p>

      <div class="detail-gallery detail-gallery--full">
        <figure>
          <a href="https://www.facebook.com/katsumi.okubo.9" target="_blank" rel="noopener">
            <img src="/assets/images/instructors/masami2.jpg" alt="大久保宗家" loading="lazy">
          </a>
          <figcaption>大久保宗家</figcaption>
        </figure>

        <figure>
          <a href="https://www.facebook.com/nobutaka.maekawa" target="_blank" rel="noopener">
            <img src="/assets/images/instructors/maekawa.jpg" alt="前川師範" loading="lazy">
          </a>
          <figcaption>前川師範</figcaption>
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/membership/">← 入会の御案内へ戻る</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/membership/international-exchange/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/membership/international-exchange/index.astro";
const $$url = "/membership/international-exchange";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
