import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const snsLinks = [
    {
      id: "members",
      name: "Member Blogs & Facebook",
      description: "A directory of blogs and Facebook pages run by branches and members.",
      href: "/en/news/blogs/",
      target: ""
    },
    {
      id: "facebook",
      name: "Facebook Group",
      description: "The official Facebook group of the Seishinkai karate dojo, with updates on daily activities.",
      href: "https://www.facebook.com/seishinkai.karate.dojo",
      target: "_blank"
    },
    {
      id: "x",
      name: "X (Twitter)",
      description: "Seishinkai's official account, sharing the latest announcements.",
      href: "https://twitter.com/Seishinkai2",
      target: "_blank"
    },
    {
      id: "tiktok",
      name: "TikTok",
      description: "Watch videos of demonstrations, training sessions, tournaments, and more.",
      href: "https://www.tiktok.com/@seishinryu.karate",
      target: "_blank"
    },
    {
      id: "youtube",
      name: "YouTube Channel",
      description: "Videos of demonstrations, training, and media appearances.",
      href: "https://www.youtube.com/channel/UClIx3Srenlu1ddf5coow83A/playlists",
      target: "_blank"
    },
    {
      id: "blog",
      name: "Official Blog",
      description: "The dojo's official blog, covering training sessions and events.",
      href: "https://seishinkan-dojo.hateblo.jp/",
      target: "_blank"
    },
    {
      id: "events-blog",
      name: "Events Blog",
      description: "Updates and photos from tournaments, grading examinations, training camps, and other events.",
      href: "https://seishinryu.hatenablog.com/",
      target: "_blank"
    },
    {
      id: "news-blog",
      name: "News Blog",
      description: "The latest news, announcements, and updates from Seishinkai.",
      href: "https://seishinkan-news.hatenablog.com/",
      target: "_blank"
    },
    {
      id: "okubo-blog",
      name: "Okubo Blog",
      description: "Learn more about Okubo Dojo's activities and training sessions.",
      href: "https://okubo-dojo.hatenablog.com/",
      target: "_blank"
    },
    {
      id: "bbs",
      name: "Bulletin Board",
      description: "Class cancellations and announcements — check here in bad weather.",
      href: "https://seishinkan-dojo.bbs.fc2.com/",
      target: "_blank"
    },
    {
      id: "events",
      name: "Seishinkai Event Schedule",
      description: "Annual event schedule: tournaments, gradings, training camps, and more.",
      href: "/en/news/archive/",
      target: ""
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "News & SNS", "description": "Latest news, social media, and videos from Seishinkai Karate — activities and announcements from our dojos in Hokkaido, Japan.", "lang": "en", "path": "/en/news/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="news">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">NEWS</span>
        <h1 class="section-title">News & SNS</h1>
      </div>
      <p class="page-intro">
        Seishinkai publishes its latest updates on social media, blogs, and the bulletin board. For event schedules, training reports, and class cancellation notices, please visit the channels below.
      </p>

      <div class="news__grid">
        ${snsLinks.map((sns) => renderTemplate`<a class="news__card fade-up-in"${addAttribute(sns.href, "href")}${addAttribute(sns.target, "target")} rel="noopener">
              <span${addAttribute(`news__icon news__icon--${sns.id}`, "class")} aria-hidden="true">
                ${sns.id === "facebook" && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z"></path>
                  </svg>`}
                ${sns.id === "x" && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.8 4h2.7l-6 6.8L21.5 20h-5.5l-4.3-5.6L6.7 20H4l6.4-7.3L3.7 4h5.7l3.9 5.1L17.8 4zm-1 14.4h1.5L8.6 5.5H7L16.8 18.4z"></path>
                  </svg>`}
                ${sns.id === "tiktok" && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-1.81V15.5a5.5 5.5 0 1 1-5.5-5.5c.43 0 .86.05 1.27.15v2.79a2.74 2.74 0 1 0 1.48 2.56V2h2.75a4.82 4.82 0 0 0 3.77 4.69v2z"></path>
                  </svg>`}
                ${sns.id === "youtube" && renderTemplate`<svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z"></path>
                  </svg>`}
                ${sns.id === "blog" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>`}
                ${sns.id === "events-blog" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>`}
                ${sns.id === "news-blog" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 19h16"></path>
                    <path d="M5 5h10v12H5z"></path>
                    <path d="M17 7h2v10a2 2 0 0 1-2 2"></path>
                    <line x1="7" y1="8" x2="13" y2="8"></line>
                    <line x1="7" y1="11" x2="13" y2="11"></line>
                    <line x1="7" y1="14" x2="11" y2="14"></line>
                  </svg>`}
                ${sns.id === "okubo-blog" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path>
                    <path d="M4 20a8 8 0 0 1 16 0"></path>
                  </svg>`}
                ${sns.id === "bbs" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>`}
                ${sns.id === "members" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>`}
                ${sns.id === "events" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>`}
              </span>
              <span class="news__card-body">
                <span class="news__card-name">${sns.name}</span>
                <span class="news__card-desc">${sns.description}</span>
              </span>
              <span class="news__card-arrow" aria-hidden="true">→</span>
            </a>`)}
      </div>

      <p class="news__note">※ All links open external sites. Most content is in Japanese.</p>
      
      <h2 class="detail-page__heading">Seishinkai Newsletter</h2>
      <!-- <div class="newsletter-list" data-show-more data-batch-size="3">
        <ul class="newsletter-list__items">
          {
            newsletters.map((n, i) => (
              <li class:list={["newsletter-list__item", { "is-hidden": i >= 3 }]} data-show-more-item>
                <a href={n.href} target="_blank" rel="noopener">
                  {n.title} (Japanese, PDF)
                </a>
              </li>
            ))
          }
        </ul>
        {
          newsletters.length > 3 && (
            <button type="button" class="newsletter-list__show-more" data-show-more-trigger>
              Show more
            </button>
          )
        }
      </div> -->

      <p>The PDF newsletter is available exclusively to members.</p>

      <p>
        If you would like to receive a copy, please contact the Head Office Secretariat by email. A PDF copy of the newsletter will be sent to you as an email attachment.
      </p>

      <p><a href="mailto:Karate@seishinkan.ne.jp">Karate@seishinkan.ne.jp</a></p>

      <p>
        Please include your branch affiliation, membership number, and full name when making your request.
      </p>

    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/news/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/news/index.astro";
const $$url = "/en/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
