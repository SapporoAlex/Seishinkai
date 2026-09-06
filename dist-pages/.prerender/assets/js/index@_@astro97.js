import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Dojos in Abira, Tomakomai & Shinkan", "description": "A list of Seishinkai affiliated dojos and karate classes in Abira Town, Tomakomai City, and Shinkan Town. Information on Seishinkan Takahashi Dojo (Abira, Tomakomai, Oiwake, Hayakita, and Toasa) and Hokushinkai Shinkan Dojo.", "lang": "en", "path": "/dojo/abira/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO LIST</span>
        <h1 class="section-title">
          Karate Dojos and Classes in Abira, Tomakomai & Shinkan
        </h1>
      </div>

      <p class="detail-page__contact">
        For inquiries, please contact each dojo directly.
      </p>

      <!-- <BranchTable entries={entries} /> -->

      <div class="branch-table__wrap fade-up-in">
        <table class="branch-table fade-up-in">
          <thead>
            <tr>
              <th></th>
              <th>Dojo / Branch</th>
              <th>Address / Facility</th>
              <th>Training Day / Contact</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td rowspan="3" class="branch-table__name">
                ◇Seishinkan Takahashi Dojo
              </td>
              <td>Abira, Abira Town　Abira Elementary School Gymnasium</td>
              <td>Tuesday　※090-3114-7066 (Takahashi)</td>
            </tr>
<!-- 
            <tr>
              <td>2</td>
              <td>Oiwake, Abira Town　Oiwake Labor Hall</td>
              <td>Thursday　※0145-23-2604 (Takahashi)</td>
            </tr> -->

            <tr>
              <td>2</td>
              <td>Hayakita, Abira Town　Hayakita Community Center</td>
              <td>Friday　※090-3114-7066 (Takahashi)</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Toasa, Abira Town　Toasa Community Center</td>
              <td>Monday　※090-3114-7066 (Takahashi)</td>
            </tr>

            <tr>
              <td>4</td>
              <td class="branch-table__name">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100034261714273">
                  ◇Hokushinkai Shinkan Dojo
                </a>
              </td>
              <td>Shinkan Town</td>
              <td>※090-9086-7943 (Takano)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="detail-page__note">
        ◇Seishinkai Takahashi Dojo is affiliated with the Tomakomai Area Karate Federation (JKF Hokkaido Karate Federation).<br>
        　The classes listed above follow a training system based on the standards of the Japan Karate Federation.<br>
        ※Takahashi is at work during the daytime and may not be able to answer the phone.
      </p>

      <div class="detail-gallery detail-gallery--full">
        <figure>
          <img src="/assets/images/instructors/takafashiabira.jpg" alt="Takeshi Takahashi" loading="lazy">
          <figcaption>
            Seishinkan Takahashi Dojo<br>
            Chief Instructor　Takeshi Takahashi
          </figcaption>
        </figure>

        <figure>
          <img src="/assets/images/instructors/takano.jpg" alt="Hitoshi Takano" loading="lazy">
          <figcaption>
            Hokushinkai Dojo<br>
            Chief Instructor　Hitoshi Takano
          </figcaption>
        </figure>
      </div>

      
      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_hokushinkai_01.jpg" alt="Hokushinkai" width="256" height="173" loading="lazy">
          <figcaption>Hokushinkai</figcaption>
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_abira_01.jpg" alt="Takahashi Dojo" width="246" height="184" loading="lazy">
          <figcaption>Takahashi Dojo</figcaption>
        </figure>
      </div>
     

      <p class="detail-page__back">
        <a href="/dojo/">← Back to Karate Dojos & Classes</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/abira/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/abira/index.astro";
const $$url = "/en/dojo/abira";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
