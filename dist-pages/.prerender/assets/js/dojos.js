import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate } from './prerender.js';
import 'clsx';

const $$DojoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DojoCard;
  const { id, name, sensei, category, lang = "ja" } = Astro2.props;
  const categoryLabels = {
    ja: {
      direct: "清心会直系・公認道場/自主管理道場",
      participating: "清心流参加道場・加盟道場",
      affiliated: "準加盟道場・提携協力道場"
    },
    en: {
      direct: "Seishinkai direct / certified dojo",
      participating: "Participating / member dojo",
      affiliated: "Associate / partner dojo"
    }
  };
  const labels = categoryLabels[lang] ?? categoryLabels.ja;
  const buttonLabel = lang === "en" ? "Details" : "詳細を見る";
  return renderTemplate`${maybeRenderHead()}<div class="dojo-card fade-up-in"${addAttribute(id, "data-dojo-id")}>
  <div class="dojo-card__category">${labels[category]}</div>
  <h3 class="dojo-card__name">${unescapeHTML(name)}</h3>
  <p class="dojo-card__sensei">${sensei}</p>
  <button class="dojo-card__button"${addAttribute(id, "data-modal-trigger")}>
    ${buttonLabel}
  </button>
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/DojoCard.astro", void 0);

const $$DojoModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DojoModal;
  const { id, name, phone, title, subtitle, locations, category, lang = "ja" } = Astro2.props;
  const phoneLabel = lang === "en" ? "Phone:" : "電話:";
  const locationsLabel = lang === "en" ? "Locations" : "活動地域";
  const closeLabel = lang === "en" ? "Close" : "閉じる";
  return renderTemplate`${maybeRenderHead()}<div class="dojo-modal"${addAttribute(`modal-${id}`, "id")}${addAttribute(id, "data-modal")}>
  <div class="dojo-modal__overlay"${addAttribute(id, "data-modal-close")}></div>
  <div class="dojo-modal__content">
    <button class="dojo-modal__close"${addAttribute(id, "data-modal-close")}${addAttribute(closeLabel, "aria-label")}>
      ×
    </button>

    <h2 class="dojo-modal__name">${unescapeHTML(name)}</h2>

    <div class="dojo-modal__info">
      <p class="dojo-modal__phone">
        <span>${phoneLabel}</span>
        ${phone}
      </p>
      <p class="dojo-modal__sensei">
        ${title}
        ${subtitle && renderTemplate`<span class="dojo-modal__subtitle">${subtitle}</span>`}
      </p>
    </div>

    ${locations.length > 0 && renderTemplate`<div class="dojo-modal__locations">
          <h3 class="dojo-modal__locations-title">${locationsLabel}</h3>
          <ul class="dojo-modal__locations-list">
            ${locations.map((location) => renderTemplate`<li>${unescapeHTML(location)}</li>`)}
          </ul>
        </div>`}

    <!-- {
      categoryNotes[category] && (
        <p class="dojo-modal__note">{categoryNotes[category]}</p>
      )
    } -->
  </div>
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/DojoModal.astro", void 0);

const dojos = [
	{
		id: "sumiyoshi",
		category: "direct",
		name: "札幌西地区本部・住吉塾",
		phone: "090-7517-3285",
		sensei: "住吉一徳",
		title: "師範 住吉一徳",
		subtitle: "(清心会札幌西本部長)",
		locations: [
			"<a href='https://sumiyoshijuku.org/class/shinhassamu/' target='_blank'>新発寒</a>",
			"<a href='https://sumiyoshijuku.org/class/nishimachi/' target='_blank'>西町</a>",
			"<a href='https://sumiyoshijuku.org/class/teine/' target='_blank'>手稲</a>",
			"<a href='https://sumiyoshijuku.org/class/miyanosawa/' target='_blank'>宮の沢</a>",
			"<a href='https://sumiyoshijuku.org/schedule/' target='_blank'>前田</a>",
			"<a href='https://sumiyoshijuku.org/class/shinkotoni/' target='_blank'>新川</a>",
			"<a href='https://sumiyoshijuku.org/class/shinkotoni/' target='_blank'>新琴似</a>",
			"<a href='https://sumiyoshijuku.org/class/hoshioki/' target='_blank'>星置</a>",
			"<a href='https://sumiyoshijuku.org/class/hassamu/' target='_blank'>発寒</a>",
			"<a href='https://sumiyoshijuku.org/schedule/' target='_blank'>西野</a>",
			"<a href='https://sumiyoshijuku.org/class/azabu/' target='_blank'>麻生</a>",
			"<a href='https://sumiyoshijuku.org/class/tonden/' target='_blank'>屯田</a>",
			"<a href='https://sumiyoshijuku.org/class/hachiken/' target='_blank'>八軒</a>"
		],
		en: {
			name: "Sapporo West District HQ / Sumiyoshi-juku",
			sensei: "Shihan Sumiyoshi",
			title: "Shihan Sumiyoshi",
			subtitle: "(Seishinkai Sapporo West Branch Chief)",
			locations: [
				"<a href='https://sumiyoshijuku.org/class/shinhassamu/' target='_blank'>Shin-Hassamu</a>",
				"<a href='https://sumiyoshijuku.org/class/nishimachi/' target='_blank'>Nishimachi</a>",
				"<a href='https://sumiyoshijuku.org/class/teine/' target='_blank'>Teine</a>",
				"<a href='https://sumiyoshijuku.org/class/miyanosawa/' target='_blank'>Miyanosawa</a>",
				"<a href='https://sumiyoshijuku.org/schedule/' target='_blank'>Maeda</a>",
				"<a href='https://sumiyoshijuku.org/class/shinkotoni/' target='_blank'>Shinkawa</a>",
				"<a href='https://sumiyoshijuku.org/class/shinkotoni/' target='_blank'>Shinkotoni</a>",
				"<a href='https://sumiyoshijuku.org/class/hoshioki/' target='_blank'>Hoshioki</a>",
				"<a href='https://sumiyoshijuku.org/class/hassamu/' target='_blank'>Hassamu</a>",
				"<a href='https://sumiyoshijuku.org/schedule/' target='_blank'>Nishino</a>",
				"<a href='https://sumiyoshijuku.org/class/azabu/' target='_blank'>Asabu</a>",
				"<a href='https://sumiyoshijuku.org/class/tonden/' target='_blank'>Tonden</a>",
				"<a href='https://sumiyoshijuku.org/class/hachiken/' target='_blank'>Hachiken</a>"
			]
		}
	},
	{
		id: "inoue",
		category: "direct",
		name: "清心館井上道場",
		phone: "090-7646-9552",
		sensei: "井上龍一郎",
		title: "師範 井上龍一郎",
		subtitle: "",
		locations: [
			"<a href='https://karate13.dokkin.com/' target='_blank'>井上道場</a>"
		],
		en: {
			name: "Seishinkan Inoue Dojo",
			sensei: "Shihan Ryuichiro Inoue",
			title: "Shihan Ryuichiro Inoue",
			subtitle: "",
			locations: [
				"<a href='https://karate13.dokkin.com/' target='_blank'>Inoue Dojo</a>"
			]
		}
	},
	{
		id: "takahashi",
		category: "participating",
		name: "清心館髙橋道場",
		phone: "090-3114-7066",
		sensei: "髙橋 剛",
		title: "師範 髙橋 剛",
		subtitle: "",
		locations: [
			"安平町（安平教室・火曜）",
			"苫小牧市（苫小牧教室・水曜）",
			"安平町（追分教室・木曜）",
			"安平町（早来教室・金曜）",
			"安平町（遠浅教室・月曜）"
		],
		en: {
			name: "Seishinkan Takahashi Dojo",
			sensei: "Shihan Takahashi",
			title: "Shihan Takahashi",
			subtitle: "",
			locations: [
				"Abira Town (Abira Class, Tue)",
				"Tomakomai City (Tomakomai Class, Wed)",
				"Abira Town (Oiwake Class, Thu)",
				"Abira Town (Hayakita Class, Fri)",
				"Abira Town (Toasa Class, Mon)"
			]
		}
	},
	{
		id: "hokushinkai",
		category: "participating",
		name: "北新会",
		phone: "090-9086-7943",
		sensei: "高野 均",
		title: "師範　高野 均",
		subtitle: "",
		locations: [
			"<a href='https://www.facebook.com/profile.php?id=100007777158191' target='_blank'>新冠町（北新会新冠道場）</a>",
			"<a href='https://www.facebook.com/profile.php?id=100007777158191' target='_blank'>新冠町（朝日スポーツ少年団）</a>",
			"静内町（静内農業高校空手部）"
		],
		en: {
			name: "Hokushinkai",
			sensei: "Shihan Hitoshi Takano",
			title: "Shihan Hitoshi Takano",
			subtitle: "",
			locations: [
				"<a href='https://www.facebook.com/profile.php?id=100007777158191' target='_blank'>Niikappu Town (Hokushinkai Niikappu Dojo)</a>",
				"<a href='https://www.facebook.com/profile.php?id=100007777158191' target='_blank'>Niikappu Town (Asahi Sports Youth Club)</a>",
				"Shizunai Town (Shizunai Agricultural High School Karate Club)"
			]
		}
	},
	{
		id: "aozorakai",
		category: "affiliated",
		name: "<a href='https://aozorakai.main.jp/' target='_blank'>青空会</a>",
		phone: "090-9239-0144",
		sensei: "青木和也",
		title: "師範 青木和也",
		subtitle: "",
		locations: [
			"月寒",
			"真駒内",
			"澄川",
			"福井",
			"平和",
			"小樽"
		],
		en: {
			name: "<a href='https://aozorakai.main.jp/' target='_blank'>Aozorakai</a>",
			sensei: "Shihan Kazuya Aoki",
			title: "Shihan Kazuya Aoki",
			subtitle: "",
			locations: [
				"Tsukisamu",
				"Makomanai",
				"Sumikawa",
				"Fukui",
				"Heiwa",
				"Otaru"
			]
		}
	},
	{
		id: "muryujuku",
		category: "affiliated",
		name: "<a href='https://muryukun.wixsite.com/muryukun' target='_blank'>無流塾</a>",
		phone: "電話・Fax：043-304-5991",
		sensei: "鈴木雄三",
		title: "師範 鈴木雄三",
		subtitle: "",
		locations: [
			"千葉市"
		],
		en: {
			name: "<a href='https://muryukun.wixsite.com/muryukun' target='_blank'>Muryu-juku</a>",
			phone: "Tel/Fax: 043-304-5991",
			sensei: "Shihan Yuzo Suzuki",
			title: "Shihan Yuzo Suzuki",
			subtitle: "",
			locations: [
				"Chiba City"
			]
		}
	}
];

export { $$DojoCard as $, $$DojoModal as a, dojos as d };
