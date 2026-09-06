import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, a as renderTemplate, b as addAttribute } from './prerender.js';
import 'clsx';

const $$ClassScheduleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClassScheduleCard;
  const { title, schedule, instructors = [], note } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="class-schedule-card fade-up-in">
  <header class="class-schedule-card__header">
    <h3 class="class-schedule-card__title">${title}</h3>
  </header>
  <div class="class-schedule-card__body">
    <ul class="class-schedule-card__times">
      ${schedule.map((time) => renderTemplate`<li>${time}</li>`)}
    </ul>
    ${note && renderTemplate`<p class="class-schedule-card__note">${note}</p>`}
    ${instructors.length > 0 && renderTemplate`<div class="class-schedule-card__instructors">
          ${instructors.map((ins) => renderTemplate`<div class="class-schedule-card__instructor">
              ${ins.image && renderTemplate`<img${addAttribute(ins.image, "src")}${addAttribute(ins.name, "alt")} loading="lazy">`}
              <div class="class-schedule-card__instructor-info">
                <p class="class-schedule-card__name">${ins.name}</p>
                ${ins.position && renderTemplate`<p class="class-schedule-card__position">${ins.position}</p>`}
              </div>
            </div>`)}
        </div>`}
  </div>
</article>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/ClassScheduleCard.astro", void 0);

export { $$ClassScheduleCard as $ };
