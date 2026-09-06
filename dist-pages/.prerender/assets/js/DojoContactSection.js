import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './prerender.js';
import 'clsx';

const $$DojoContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DojoContactSection;
  const {
    lang = "ja",
    dojoName,
    subject,
    directPhone,
    directEmail,
    directEmailLabel
  } = Astro2.props;
  const isEn = lang === "en";
  const t = {
    eyebrow: "CONTACT",
    title: isEn ? `Contact Us About the ${dojoName}` : `${dojoName}へのお問い合わせ`,
    lead: isEn ? "Please feel free to contact us here about a trial class or enrollment." : "体験・入会のお申し込みは、こちらからお気軽にご連絡ください。",
    directPhoneLabel: isEn ? "Direct Line" : "支部直通",
    directEmailLabel: directEmailLabel ?? (isEn ? "Direct Email" : "支部直通メール"),
    officeLabel: isEn ? "Office" : "事務局",
    officeHours: isEn ? "Mon–Fri 1:00 PM–4:00 PM" : "月〜金 13:00〜16:00",
    emailLabel: isEn ? "Email" : "メール",
    note: isEn ? "As many of our venues are rented facilities, please direct trial and enrollment inquiries to the office above." : "※会場は施設をお借りしている場合が多いため、体験・入会のお問い合わせは事務局までお願いします。"
  };
  const officeMailto = `mailto:Karate@seishinkan.ne.jp?subject=${encodeURIComponent(subject)}`;
  return renderTemplate`${maybeRenderHead()}<div class="dojo-contact">
  <div class="dojo-contact__header">
    <span>${t.eyebrow}</span>
    <h2>${t.title}</h2>
    <p>${t.lead}</p>
  </div>

  <div class="dojo-contact__grid">
    ${directPhone && renderTemplate`<div class="dojo-contact__card dojo-contact__card--highlight">
          <div class="dojo-contact__icon">☎</div>
          <h3>${t.directPhoneLabel}</h3>
          <a class="dojo-contact__big"${addAttribute(`tel:${directPhone.tel}`, "href")}>
            ${directPhone.number}
          </a>
          ${directPhone.note && renderTemplate`<small>${directPhone.note}</small>`}
        </div>`}

    ${directEmail && renderTemplate`<div class="dojo-contact__card">
          <div class="dojo-contact__icon">✉</div>
          <h3>${t.directEmailLabel}</h3>
          <a class="dojo-contact__email"${addAttribute(`mailto:${directEmail}`, "href")}>
            ${directEmail}
          </a>
        </div>`}

    <div${addAttribute(`dojo-contact__card${!directPhone ? " dojo-contact__card--highlight" : ""}`, "class")}>
      <div class="dojo-contact__icon">☎</div>
      <h3>${t.officeLabel}</h3>
      <a class="dojo-contact__big" href="tel:0113000048">011-300-0048</a>
      <small>${t.officeHours}</small>
    </div>

    <div class="dojo-contact__card">
      <div class="dojo-contact__icon">✉</div>
      <h3>${t.emailLabel}</h3>
      <a class="dojo-contact__email"${addAttribute(officeMailto, "href")}>Karate@seishinkan.ne.jp</a>
    </div>
  </div>

  <p class="dojo-contact__note">${t.note}</p>
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/DojoContactSection.astro", void 0);

export { $$DojoContactSection as $ };
