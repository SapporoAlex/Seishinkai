import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const supportingCompanies = [
    {
      name: "Loger Co., Ltd.",
      href: "https://www.loger.co.jp/index.html"
    },
    {
      name: "Japan Agency",
      href: "https://japan-agency.com/"
    },
    {
      name: "Mainichi Friend Hokkaido"
    },
    {
      name: "San-Ai Motor Industry Co., Ltd.",
      href: "https://www.san-ai-jikou.co.jp/index.php"
    },
    {
      name: "Nagao Internal Medicine & Cardiology Clinic",
      href: "http://www.nagao-naika.com/"
    },
    {
      name: "Kita 10 Dental Office",
      href: "https://kita10jyou.chitosedori.com/"
    },
    {
      name: "Saegusa Yakuhin Co., Ltd.",
      href: "https://www.saegusayakuhin.co.jp/"
    },
    {
      name: "Saegusa Yakuhin Kyushu Co., Ltd.",
      href: "https://www.saegusayakuhin-q.co.jp/"
    },
    {
      name: "Navex Co., Ltd."
    },
    {
      name: "Daiichi Funeral Services Co., Ltd."
    },
    {
      name: "Hikari Construction",
      href: "http://hikari.geo.jp/"
    },
    {
      name: "Suzuki Auto Sapporo"
    },
    {
      name: "SBS Sapporo West"
    },
    {
      name: "Bike Station MAX",
      href: "https://www1.suzuki.co.jp/motor/shops/index.php?job=info&id=1117"
    },
    {
      name: "Goda Kanko Shoji Co., Ltd.",
      href: "https://www.pph-g.com/"
    },
    {
      name: "Meitetsu Kanko Service"
    },
    {
      name: "Fujido Sports"
    },
    {
      name: "Toyo Budogu"
    },
    {
      name: "Oikawa Photo Office"
    }
  ];
  const supportingOrganizations = [
    {
      name: "Japan Stylists Association",
      href: "https://ameblo.jp/ams-style/"
    },
    {
      name: "Hokkaido Mainichi Culture Association",
      href: "http://mainichi-school.info/"
    }
  ];
  const partnerOrganizations = [
    {
      name: "Hadomon Hokkaido",
      href: "http://hado.dpcnp.info/"
    },
    {
      name: "NPO Fumonkai",
      href: "https://fumonkaikawasaki.wixsite.com/kawasaki-karate"
    },
    {
      name: "Shito-ryu Sanshinkan Karate International"
    },
    {
      name: "Okinawa Kobayashi-ryu Karate Kobudo Federation"
    },
    {
      name: "World Kobayashi-ryu Karate Kobudo Association"
    },
    {
      name: "Trinidad & Tobago Karate Federation"
    }
  ];
  const links = [
    {
      name: "Budo Dojo Navi",
      href: "https://www.budo-dojo-navi.com/"
    }
  ];
  const quickLinks = [
    {
      title: "Facebook Group",
      href: "https://www.facebook.com/seishinkai.karate.dojo"
    },
    {
      title: "Recommended Links",
      href: "/en/recommended-links/"
    },
    {
      title: "Event Schedule",
      href: "/en/news/archive/"
    },
    {
      title: "Bulletin Board & Notices",
      href: "https://seishinkan-dojo.bbs.fc2.com/"
    },
    {
      title: "Member Blogs & Facebook",
      href: "/en/news/blogs/"
    },
    {
      title: "Advisors & Consultants",
      href: "/en/about/yakuin/"
    }
  ];
  const featuredPhotos = [
    {
      image: "/assets/images/img_backup-02.jpg",
      caption: "Permanent Dojo – Seishinkan Oasa Dojo, Park Hills 1F, 6-2 Oasasawamachi, Ebetsu"
    },
    {
      image: "/assets/images/img_backup-03.jpg",
      caption: "Permanent Dojo – Seishinkan Hondori Dojo, Hondori 16-chome Kita, Shiroishi-ku, Sapporo"
    },
    {
      image: "/assets/images/img_backup-04.jpg",
      caption: "Seishinkan Yamamoto Training Center"
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
      year: "2014 (video)",
      image: "/assets/images/youtube/img_backup-2014.jpg",
      href: "https://www.youtube.com/watch?v=MICYPkxtO6w"
    },
    {
      year: "2015",
      image: "/assets/images/youtube/img_backup-2015.jpg"
    },
    {
      year: "2016 (video)",
      image: "/assets/images/youtube/img_backup-2016.jpg",
      href: "https://www.youtube.com/watch?v=JnYL0ukfJcU"
    },
    {
      year: "2017 (video)",
      image: "/assets/images/youtube/img_backup-2017.jpg",
      href: "https://www.youtube.com/watch?v=xYKuv0V5Y7o"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Links & Partners", "description": "Learn more about the companies, organizations, partner groups, and related websites that support Seishinkai Karate.", "lang": "en", "path": "/en/links-partners/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="detail-page">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">LINKS & PARTNERS</span>
        <h1 class="section-title">Links & Partners</h1>
      </div>

      <p class="detail-page__intro">
        Learn more about the companies, organizations, partner groups, and related websites that support the activities of Seishinkai Karate.
      </p>

      <section class="partner-section">
        <h2 class="detail-page__heading">Supporting Companies</h2>

        <p>These companies generously support Seishinkai's karate activities.</p>

        <ul class="partner-section__list">
          ${supportingCompanies.map((company) => renderTemplate`<li class="partner-section__item">
              ${company.href ? renderTemplate`<a${addAttribute(company.href, "href")} target="_blank" rel="noopener noreferrer">
                  ${company.name}
                </a>` : renderTemplate`<span>${company.name}</span>`}
            </li>`)}
        </ul>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">Supporting Organizations</h2>

        <p>
          Organizations and individuals who support and endorse the activities of
          Seishinkai Karate.
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
        <h2 class="detail-page__heading">Partner Organizations</h2>

        <ul class="partner-section__list">
          ${partnerOrganizations.map((org) => renderTemplate`<li class="partner-section__item">
              ${org.href ? renderTemplate`<a${addAttribute(org.href, "href")} target="_blank" rel="noopener noreferrer">
                  ${org.name}
                </a>` : renderTemplate`<span>${org.name}</span>`}
            </li>`)}
        </ul>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">Related Websites</h2>

        <ul class="partner-section__list">
          ${links.map((link) => renderTemplate`<li class="partner-section__item">
              <a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer">
                ${link.name}
              </a>
            </li>`)}
        </ul>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">Quick Links</h2>

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
        <h2 class="detail-page__heading">Event Video Archive</h2>

        <div class="youtube-grid">
          ${youtubeArchives.map((video) => video.href ? renderTemplate`<a class="youtube-card"${addAttribute(video.href, "href")} target="_blank" rel="noopener noreferrer">
                <span class="youtube-card__thumb">
                  <img${addAttribute(video.image, "src")}${addAttribute(video.year, "alt")}>
                </span>
                <span>${video.year}</span>
              </a>` : renderTemplate`<div class="youtube-card">
                <img${addAttribute(video.image, "src")}${addAttribute(video.year, "alt")}>
                <span>${video.year}</span>
              </div>`)}
        </div>
      </section>

      <section class="partner-section">
        <h2 class="detail-page__heading">Photo Gallery</h2>

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
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/links-partners/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/links-partners/index.astro";
const $$url = "/en/links-partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
