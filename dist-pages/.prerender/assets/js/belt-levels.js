import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './prerender.js';
import 'clsx';

const $$ProfileCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProfileCard;
  const {
    image,
    name,
    role,
    position,
    date,
    prefecture,
    profession,
    details = [],
    tags = [],
    link,
    lang = "ja"
  } = Astro2.props;
  const labels = lang === "en" ? { date: "Life:", prefecture: "Region:", profession: "Occupation:" } : { date: "生没年:", prefecture: "地域:", profession: "職業:" };
  const linkLabel = lang === "en" ? "Learn more" : "もっと見る";
  const isExternal = link ? /^https?:\/\//.test(link) : false;
  return renderTemplate`${maybeRenderHead()}<div class="profile-card fade-up-in">
  <div class="profile-card__image">
    ${image && renderTemplate`<img${addAttribute(image, "src")}${addAttribute(name, "alt")} loading="lazy">`}
  </div>

  <div class="profile-card__content">
    ${role && renderTemplate`<p class="profile-card__role">${role}</p>`}

    <h3 class="profile-card__name">
      ${name}
      ${position && renderTemplate`<span class="profile-card__position">${position}</span>`}
    </h3>

    <div class="profile-card__info">
      ${date && renderTemplate`<p class="profile-card__info-item">
            <span class="profile-card__label">${labels.date}</span>
            <span>${date}</span>
          </p>`}
      ${prefecture && renderTemplate`<p class="profile-card__info-item">
            <span class="profile-card__label">${labels.prefecture}</span>
            <span>${prefecture}</span>
          </p>`}
      ${profession && renderTemplate`<p class="profile-card__info-item">
            <span class="profile-card__label">${labels.profession}</span>
            <span>${profession}</span>
          </p>`}
      ${details.map((detail) => renderTemplate`<p class="profile-card__info-item">${detail}</p>`)}
    </div>

    ${tags.length > 0 && renderTemplate`<div class="profile-card__tags">
          ${tags.map((tag) => renderTemplate`<span class="profile-card__tag">${tag}</span>`)}
        </div>`}
    ${link && renderTemplate`<a class="profile-card__link"${addAttribute(link, "href")}${addAttribute(isExternal ? "_blank" : void 0, "target")}${addAttribute(isExternal ? "noopener noreferrer" : void 0, "rel")}>
        ${linkLabel}
      </a>`}  </div>
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/ProfileCard.astro", void 0);

const sections = /* #__PURE__ */ JSON.parse("[{\"id\":\"honorary\",\"title\":\"ISKF全日本清心会空手道連盟 名誉範士\",\"subtitle\":\"\",\"groups\":[{\"id\":\"honorary-members\",\"title\":\"\",\"note\":\"\",\"members\":[{\"id\":\"mimura\",\"link\":\"/instructors/mimura/\",\"image\":\"/assets/images/instructors/mimu2.jpg\",\"name\":\"故・三村佳代子\",\"role\":\"\",\"position\":\"\",\"date\":\"1974-2015\",\"prefecture\":\"北海道\",\"profession\":\"\",\"details\":[\"清心館総本部二代目館長\"],\"tags\":[]},{\"id\":\"shinozaki\",\"link\":\"https://muryukun.wixsite.com/muryukun/about-us\",\"image\":\"/assets/images/instructors/sinozaki.jpg\",\"name\":\"故・篠崎太郎\",\"role\":\"\",\"position\":\"\",\"date\":\"1940-2012\",\"prefecture\":\"千葉県\",\"profession\":\"\",\"details\":[\"無琉塾初代塾長\"],\"tags\":[]},{\"id\":\"muroki-yoichi\",\"link\":\"https://ja.wikipedia.org/wiki/%E5%AE%A4%E6%9C%A8%E6%B4%8B%E4%B8%80\",\"image\":\"/assets/images/instructors/muroki-yoichi.jpg\",\"name\":\"故・室木洋一\",\"role\":\"\",\"position\":\"\",\"date\":\"1927-2003\",\"prefecture\":\"北海道\",\"profession\":\"\",\"details\":[\"清心会技術顧問\",\"北海道大学名誉教授\"],\"tags\":[]}]}]},{\"id\":\"leadership\",\"title\":\"ISKF全日本清心会空手道連盟 支部長・師範・指導員\",\"subtitle\":\"Master and Branch chief in Japan\",\"groups\":[{\"id\":\"senior-staff\",\"title\":\"専任/師範・部長\",\"note\":\"\",\"members\":[{\"id\":\"okubo-masami\",\"link\":\"/about/okubo/\",\"image\":\"/assets/images/instructors/masami.jpg\",\"name\":\"大久保勝美\",\"role\":\"ISKF 会長/宗家\",\"position\":\"範士\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"\",\"details\":[],\"tags\":[]},{\"id\":\"okubo-tsubasa\",\"link\":\"/about/tubasa/\",\"image\":\"/assets/images/instructors/tsubasa.jpg\",\"name\":\"大久保翼\",\"role\":\"総本部道長/第二代宗家\",\"position\":\"首席師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"自営 / 富士堂スポーツ\",\"details\":[],\"tags\":[]}]},{\"id\":\"\",\"title\":\"\",\"note\":\"\",\"members\":[{\"id\":\"sumiyoshi\",\"link\":\"https://sumiyoshijuku.org/jukucho/\",\"image\":\"/assets/images/instructors/sumiyoshi.jpg\",\"name\":\"住吉一徳\",\"role\":\"統括本部長\",\"position\":\"教士\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"自営\",\"details\":[],\"tags\":[]},{\"id\":\"muroki-takushi\",\"link\":\"https://www.facebook.com/profile.php?id=100014649318764\",\"image\":\"/assets/images/instructors/muroki.jpg\",\"name\":\"室木拓士\",\"role\":\"居合部長/広報部長\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"定年/広告会社\",\"details\":[],\"tags\":[\"英語\",\"イタリア語\"]},{\"id\":\"maekawa\",\"link\":\"/dojo/atsubetsu/\",\"image\":\"/assets/images/instructors/maekawa.jpg\",\"name\":\"前川信孝\",\"role\":\"古武術部長/国際部長\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"定年/毎日新聞社\",\"details\":[],\"tags\":[\"英語\"]},{\"id\":\"ishimori\",\"link\":\"/dojo/ebetsu/\",\"image\":\"/assets/images/instructors/ishimori.jpg\",\"name\":\"石森忠之\",\"role\":\"支部長会議長\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"定年/岩見沢市役所\",\"details\":[],\"tags\":[]}]},{\"id\":\"honbushidoin\",\"title\":\"本部指導員\",\"note\":\"※各師範・支部長は就労後、ボランティア指導員として交代で清心会本部・支部活動に参加しています(順不同)\",\"members\":[{\"id\":\"takashima\",\"image\":\"/assets/images/instructors/takashima.jpg\",\"name\":\"髙嶋\",\"role\":\"\",\"position\":\"師範補\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"団体職員\",\"details\":[],\"tags\":[]},{\"id\":\"okimura\",\"image\":\"/assets/images/instructors/okimura.jpg\",\"name\":\"沖村さおり\",\"role\":\"\",\"position\":\"師範補\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"団体職員\",\"details\":[],\"tags\":[]},{\"id\":\"shima\",\"image\":\"/assets/images/instructors/shima.jpg\",\"name\":\"島\",\"role\":\"\",\"position\":\"師範代\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"団体職員\",\"details\":[],\"tags\":[]},{\"id\":\"kimura\",\"image\":\"/assets/images/instructors/kimura.jpg\",\"name\":\"木村孝雄\",\"role\":\"\",\"position\":\"師範補\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"定年/司法書士\",\"details\":[],\"tags\":[]},{\"id\":\"yamazaki\",\"image\":\"/assets/images/instructors/asami.jpg\",\"name\":\"山崎麻美\",\"role\":\"\",\"position\":\"師範代\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"主婦\",\"details\":[],\"tags\":[]}]},{\"id\":\"uchideshi\",\"title\":\"内弟子・内弟子見習い\",\"note\":\"※各師範・支部長は就労後、ボランティアとして清心会活動に参加しています(順不同)\",\"members\":[{\"id\":\"noro\",\"image\":\"/assets/images/instructors/noro.jpg\",\"name\":\"野呂\",\"role\":\"\",\"position\":\"\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"\",\"details\":[],\"tags\":[]},{\"id\":\"rui\",\"image\":\"/assets/images/instructors/rui.jpg\",\"name\":\"瑠唯\",\"role\":\"\",\"position\":\"\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"\",\"details\":[],\"tags\":[]}]},{\"id\":\"branch-instructors\",\"title\":\"師範・支部長・指導員・助教\",\"note\":\"※各師範・支部長は就労後、ボランティア指導員として清心会活動に参加しています(順不同)\",\"members\":[{\"id\":\"inoue\",\"link\":\"/dojo/inoue/\",\"image\":\"/assets/images/instructors/inoue.jpg\",\"name\":\"井上龍一郎\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"歯科医師\",\"details\":[],\"tags\":[]},{\"id\":\"inuura\",\"link\":\"https://www.facebook.com/jushin.inuura.3\",\"image\":\"/assets/images/instructors/inuura.jpg\",\"name\":\"犬浦壽信\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"僧侶/住職\",\"details\":[],\"tags\":[]},{\"id\":\"namikawa\",\"link\":\"https://www.facebook.com/kazuaki.namikawa\",\"image\":\"/assets/images/instructors/namikawa.jpg\",\"name\":\"波川和明\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"学習塾\",\"details\":[],\"tags\":[]},{\"id\":\"inomata\",\"link\":\"/dojo/higashi/higashi/\",\"image\":\"/assets/images/instructors/inomata.jpg\",\"name\":\"猪又敬之\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"公務員\",\"details\":[],\"tags\":[]},{\"id\":\"kudo\",\"link\":\"/dojo/kitahiro/\",\"image\":\"/assets/images/instructors/kudo.jpg\",\"name\":\"工藤哲弘\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"kudo-hiromi\",\"link\":\"https://www.facebook.com/profile.php?id=100004385984913\",\"image\":\"/assets/images/instructors/hiromi.jpg\",\"name\":\"工藤博美\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"\",\"details\":[],\"tags\":[]},{\"id\":\"takahashi-tsuyoshi\",\"image\":\"/assets/images/instructors/takafashiabira.jpg\",\"name\":\"髙橋 剛\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"安平町\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"takano\",\"link\":\"https://www.facebook.com/profile.php?id=100034261714273\",\"image\":\"/assets/images/instructors/takano.jpg\",\"name\":\"高野 均\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"新冠町\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"wakabayashi\",\"link\":\"https://seishinkan.ne.jp/dojo/atsubetsu/\",\"image\":\"/assets/images/instructors/wakabayashi.jpg\",\"name\":\"若林敬司\",\"role\":\"\",\"position\":\"師範代\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"mikami\",\"link\":\"/dojo/cyuo/\",\"image\":\"/assets/images/instructors/mikami.jpg\",\"name\":\"三上 淳\",\"role\":\"\",\"position\":\"師範代\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"客員教授\",\"details\":[],\"tags\":[\"英語\"]},{\"id\":\"yoshida\",\"link\":\"/dojo/shiroishi/\",\"image\":\"/assets/images/instructors/yoshida.jpg\",\"name\":\"吉田ますみ\",\"role\":\"\",\"position\":\"師範代\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"oikawa\",\"image\":\"/assets/images/instructors/oikawa.jpg\",\"name\":\"及川義彦\",\"role\":\"\",\"position\":\"二段\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"及川写真事務所\",\"details\":[],\"tags\":[]},{\"id\":\"takahashi-katsunori\",\"link\":\"http://la-piece.com/\",\"image\":\"/assets/images/instructors/takahashi.jpg\",\"name\":\"髙橋克典\",\"role\":\"\",\"position\":\"師範代\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"ラ･ビエス\",\"details\":[],\"tags\":[\"英語\"]},{\"id\":\"suda\",\"link\":\"https://sumiyoshijuku.org/\",\"image\":\"/assets/images/instructors/suda.jpg\",\"name\":\"須田まきこ\",\"role\":\"\",\"position\":\"師範\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"harada\",\"image\":\"/assets/images/instructors/harada.jpg\",\"name\":\"原田哲郎\",\"role\":\"\",\"position\":\"師範補\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"shirokawa\",\"link\":\"https://sumiyoshijuku.org/class/shinkotoni/\",\"image\":\"/assets/images/instructors/shirokawa.jpg\",\"name\":\"城川義明\",\"role\":\"\",\"position\":\"師範補\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"定年/北電\",\"details\":[],\"tags\":[]},{\"id\":\"imai\",\"link\":\"/dojo/higashi/higashi/\",\"image\":\"/assets/images/instructors/imai.jpg\",\"name\":\"今井直也\",\"role\":\"\",\"position\":\"二段\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"sugimoto\",\"image\":\"/assets/images/instructors/sugimoto.jpg\",\"name\":\"杉本冬弥\",\"role\":\"\",\"position\":\"初段\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"sato-tsuyoshi\",\"image\":\"/assets/images/instructors/sato2.jpg\",\"name\":\"佐藤 剛\",\"role\":\"\",\"position\":\"初段\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"団体職員\",\"details\":[],\"tags\":[]},{\"id\":\"sakai\",\"image\":\"/assets/images/instructors/sakai.jpg\",\"name\":\"坂井陽人\",\"role\":\"\",\"position\":\"初段\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"saito-manaya\",\"image\":\"/assets/images/instructors/manaya.jpg\",\"name\":\"斎藤愛弥\",\"role\":\"\",\"position\":\"初段\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"保育士\",\"details\":[],\"tags\":[]},{\"id\":\"kurahashi\",\"image\":\"/assets/images/instructors/kurahashi.jpg\",\"name\":\"倉橋伸直\",\"role\":\"\",\"position\":\"二段\",\"date\":\"\",\"prefecture\":\"愛知県\",\"profession\":\"会社員\",\"details\":[],\"tags\":[]},{\"id\":\"masuda\",\"image\":\"/assets/images/instructors/masuda.jpg\",\"name\":\"増田宇倫\",\"role\":\"\",\"position\":\"二段\",\"date\":\"\",\"prefecture\":\"\",\"profession\":\"エンジニア\",\"details\":[],\"tags\":[]}]}]}]");

const lastUpdated = "令和7年12月10日";
const danRanks = [{"rank":"初段","count":180},{"rank":"二段","count":31},{"rank":"三段","count":18},{"rank":"四段","count":8},{"rank":"五段","count":3},{"rank":"六段","count":4},{"rank":"七段","count":6},{"rank":"八段","count":3}];
const beltLevels = {
  lastUpdated,
  danRanks,
};

export { $$ProfileCard as $, beltLevels as b, sections as s };
