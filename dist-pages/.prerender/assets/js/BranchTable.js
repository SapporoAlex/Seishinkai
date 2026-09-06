import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, a as renderTemplate, b as addAttribute, r as renderComponent, F as Fragment } from './prerender.js';

const $$BranchTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BranchTable;
  const { entries, headers = ["道場・支部名", "住 所/会場施設名", "稽古日"] } = Astro2.props;
  const hasNo = entries.some((e) => e.no !== void 0 && e.no !== null && e.no !== "");
  return renderTemplate`${maybeRenderHead()}<div class="branch-table__wrap fade-up-in">
  <table class="branch-table fade-up-in">
    <thead>
      <tr>
        ${hasNo && renderTemplate`<th class="branch-table__no"></th>`}
        <th>${headers[0]}</th>
        <th>${headers[1]}</th>
        <th>${headers[2]}</th>
      </tr>
    </thead>
    <tbody>
      ${entries.map((e) => renderTemplate`<tr>
            ${hasNo && renderTemplate`<td class="branch-table__no">${e.no ?? ""}</td>`}
            <td class="branch-table__name">
              ${e.marker && renderTemplate`<span class="branch-table__marker">${e.marker}</span>`}
              ${e.link ? renderTemplate`<a${addAttribute(e.link, "href")} class="branch-table__pdf">
                  ${e.name}
                </a>` : e.name}
              ${e.sub && renderTemplate`<span class="branch-table__name-sub">${e.sub}</span>`}
            </td>
            <td>${e.address}
              ${e.pdf && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
                  <br>
                  <a${addAttribute(e.pdf, "href")} target="_blank" rel="noopener noreferrer" class="branch-table__pdf">
                    ${e.pdfText}
                  </a>
                ` })}`}</td>
            <td>
              ${e.schedule.map((line) => renderTemplate`<span class="branch-table__line">${line}</span>`)}
            </td>
          </tr>`)}
    </tbody>
  </table>
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/BranchTable.astro", void 0);

export { $$BranchTable as $ };
