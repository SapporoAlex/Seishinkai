import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "安平町・苫小牧・新冠の空手教室", "description": "安平町・苫小牧市・新冠町の清心会加盟道場一覧。清心館高橋道場(安平・苫小牧・追分・早来・遠浅)と北新会新冠道場のご案内です。", "lang": "ja", "path": "/dojo/abira/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO LIST</span>
        <h1 class="section-title">
          安平町空手道場・苫小牧空手教室・新冠空手道場の一覧
        </h1>
      </div>
      <p class="detail-page__contact">お問い合わせは　各道場へ</p>

      <!-- <BranchTable entries={entries} /> -->

      <div class="branch-table__wrap fade-up-in">
        <table class="branch-table fade-up-in">
          <thead>
            <tr>
              <th></th>
              <th>道場・支部名</th>
              <th>住　所/会場施設名</th>
              <th>稽古日/連絡先</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td rowspan="3" class="branch-table__name">◇清心館高橋道場</td>
              <td>安平町安平　安平小体育館</td>
              <td>火曜　※090-3114-7066(高橋)</td>
            </tr>

            <!-- <tr>
              <td>2</td>
              <td>安平町追分　追分労働会館</td>
              <td>木曜　※0145-23-2604(高橋)</td>
            </tr> -->

            <tr>
              <td>2</td>
              <td>安平町早来　早来町民センター</td>
              <td>金曜　※090-3114-7066(高橋)</td>
            </tr>

            <tr>
              <td>3</td>
              <td>安平町遠浅　遠浅公民館</td>
              <td>月曜　※090-3114-7066(高橋)</td>
            </tr>

            <tr>
              <td>4</td>
              <td class="branch-table__name"><a target="_blank" href="https://www.facebook.com/profile.php?id=100034261714273">◇北新会新冠道場</a></td>
              <td>新冠町</td>
              <td>※090-9086-7943(高野)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="detail-page__note">
        ◇清心会･高橋道場は、苫小牧地区空手道連盟(JKF道空連)加盟しています。<br>
        　上記の各教室は、全空連に準じた形の指導体系となります。<br>
        ※昼間は仕事中ですので、電話に出れない場合があります。
      </p>

      <div class="detail-gallery detail-gallery--full">
        <figure>
            <img src="/assets/images/instructors/takafashiabira.jpg" alt="高橋" loading="lazy">
          <figcaption>清心館高橋道場　<br>
            師範　高橋　剛
          </figcaption>
        </figure>

        <figure>
            <img src="/assets/images/instructors/takano.jpg" alt="高野" loading="lazy">
          <figcaption>北新会道場　<br>
            師範　高野　均
          </figcaption>
        </figure>
      </div>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_hokushinkai_01.jpg" alt="北新会" width="256" height="173" loading="lazy">
          <figcaption>北新会</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_abira_01.jpg" alt="高橋道場" width="246" height="184" loading="lazy">
          <figcaption>高橋道場</figcaption>
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/">← 空手道場・教室の一覧へ戻る</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/abira/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/abira/index.astro";
const $$url = "/dojo/abira";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
