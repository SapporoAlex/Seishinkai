import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const internationalExchangeVideos = [
    {
      href: "https://www.youtube.com/watch?v=xYKuv0V5Y7o",
      image: "/assets/images/membership/international-exchange/thumb_inex_01.jpg",
      caption: "2017 Australia"
    },
    {
      href: "https://www.youtube.com/watch?v=mEdD0fOIVaA",
      image: "/assets/images/membership/international-exchange/thumb_inex_02.jpg",
      caption: "2017 Italy / Pakistan / France"
    },
    {
      href: "https://www.youtube.com/watch?v=JnYL0ukfJcU",
      image: "/assets/images/membership/international-exchange/thumb_inex_03.jpg",
      caption: "2016 Italy / Argentina"
    },
    {
      href: "https://www.youtube.com/watch?v=UR9dPqzvwEQ",
      image: "/assets/images/membership/international-exchange/thumb_inex_04.jpg",
      caption: "2013 Sweden"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "International Karate Exchange", "description": "A record of international exchange with foreign karate instructors who visit the Seishinkai Headquarters Dojo from overseas. This page introduces our exchanges with people from around the world, including Sweden, Italy, Sri Lanka, and many other countries.", "lang": "en", "path": "/membership/international-exchange/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">INTERNATIONAL EXCHANGE</span>
        <h1 class="section-title">International Karate &amp; Kobudo Exchange</h1>
      </div>

      <p class="detail-page__lead">
        Foreign instructors and karate teachers visit Seishinkai from overseas.<br>
        Every year, foreign karate instructors from around the world visit the Seishinkai Headquarters Dojo.<br>
        Many of them come to Seishinkai in Hokkaido seeking karate as a traditional cultural art rather than a competitive sport, and then continue on to Okinawa. Conversely, some visit Okinawa first before coming to Sapporo, Hokkaido.<br>
        Many foreign instructors have experience in competitive karate, but eventually seek the origins of karate and arrive at traditional forms of karate in order to deepen their training and develop the areas they feel are still lacking.
      </p>

      <h2 class="detail-page__heading">International Karate &amp; Kobudo Exchange</h2>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_01.jpg" alt="April 2013 Sweden" loading="lazy">
          <figcaption>April 2013 — Sweden</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_02.jpg" alt="August 2013 Sri Lanka Expedition" loading="lazy">
          <figcaption>August 2013 — Sri Lanka Expedition</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_03.jpg" alt="September 2014 Italy / Argentina / Egypt" loading="lazy">
          <figcaption>September 2014 — Italy / Argentina / Egypt</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_04.jpg" alt="April 2015 Sweden" loading="lazy">
          <figcaption>April 2015 — Sweden</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_05.jpg" alt="April 2016 Argentina" loading="lazy">
          <figcaption>April 2016 — Argentina</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_06.jpg" alt="April 2017 Italy" loading="lazy">
          <figcaption>April 2017 — Italy</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_07.jpg" alt="April 2017 Pakistan" loading="lazy">
          <figcaption>April 2017 — Pakistan</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_08.jpg" alt="June 2017 Australia" loading="lazy">
          <figcaption>June 2017 — Australia</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_09.jpg" alt="2017 France" loading="lazy">
          <figcaption>2017 — France</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_10.jpg" alt="May 2018 India" loading="lazy">
          <figcaption>May 2018 — India</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_11.jpg" alt="September 2018 Italy / Argentina / Egypt / Philippines / Pakistan" loading="lazy">
          <figcaption>September 2018 — Italy / Argentina / Egypt / Philippines / Pakistan</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_12.jpg" alt="October 2019 Argentina" loading="lazy">
          <figcaption>October 2019 — Argentina</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_13.jpg" alt="July 2023 Sweden Expedition" loading="lazy">
          <figcaption>July 2023 — Sweden Expedition</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_14.jpg" alt="April 2024 Sri Lanka" loading="lazy">
          <figcaption>April 2024 — Sri Lanka</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_15.jpg" alt="August 2024 Russia" loading="lazy">
          <figcaption>August 2024 — Russia</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_16.jpg" alt="October 2024 Argentina" loading="lazy">
          <figcaption>October 2024 — Argentina</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_17.jpg" alt="2024 Sri Lanka" loading="lazy">
          <figcaption>2024 — Sri Lanka</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_18.jpg" alt="January 2025 Sweden" loading="lazy">
          <figcaption>January 2025 — Sweden</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_19.jpg" alt="June 2025 Sri Lanka" loading="lazy">
          <figcaption>June 2025 — Sri Lanka</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_20.jpg" alt="December 2025 Norway" loading="lazy">
          <figcaption>December 2025 — Norway</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_21.jpg" alt="February 2026 Sweden" loading="lazy">
          <figcaption>February 2026 — Sweden</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/membership/international-exchange/img_inex_22.jpg" alt="July 2026 Australia" loading="lazy">
          <figcaption>July 2026 — Australia</figcaption>
        </figure>
      </div>

      <p class="detail-page__note">
        Countries represented include Sweden, Italy, Pakistan, Egypt, Australia, France, Argentina, Sri Lanka, India, Kuwait, Ireland, the United States, and others.
      </p>

      <section class="partner-section">
        <h2 class="detail-page__heading">Video Gallery</h2>

        <div class="youtube-grid">
          ${internationalExchangeVideos.map((video) => renderTemplate`<a class="youtube-card"${addAttribute(video.href, "href")} target="_blank" rel="noopener noreferrer">
                <span class="youtube-card__thumb">
                  <img${addAttribute(video.image, "src")}${addAttribute(`${video.caption} (YouTube)`, "alt")} loading="lazy">
                </span>
                <span>${video.caption}</span>
              </a>`)}
        </div>
      </section>

      <h2 class="detail-page__heading">Short-Term Accommodation</h2>

      <p>
        We provide short-term accommodation for visitors from overseas.
      </p>

      <div class="detail-page__img-text-pair--col">
        <div class="detail-gallery">
          <a class="video-thumb" target="_blank" href="https://www.youtube.com/watch?v=Q6q0g7h7f0A">
            <figure>
              <img src="/assets/images/youtube/img_accommodation-thumb.jpg" alt="Short-Term Accommodation (YouTube)" loading="lazy">
            </figure>
          </a>
        </div>
      </div>

      <h2 class="detail-page__heading">Contact Us</h2>

      <p class="detail-page__note">
        Please contact us by email or messenger. Other staff members communicate in Japanese only.
      </p>

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
        <a href="/membership/">← Back to Membership Information</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/membership/international-exchange/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/membership/international-exchange/index.astro";
const $$url = "/en/membership/international-exchange";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
