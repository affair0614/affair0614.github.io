import { access, readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";
import { projects, publications } from "../assets/content.js";

const routes = ["", "research/", "projects/", "publications/", "about/"];
const files = routes.flatMap(route => [`../${route}index.html`, `../zh/${route}index.html`]);
const pages = await Promise.all(files.map(file => readFile(new URL(file, import.meta.url), "utf8")));
const all = pages.join("\n");

for (const [index, html] of pages.entries()) {
  assert.match(html, /<main id="main">/, `${files[index]} has no main content`);
  assert.match(html, /Chonghui Zhang/, `${files[index]} has no public name`);
  assert.doesNotMatch(html, /<script|data-copy|localStorage/, `${files[index]} depends on JavaScript rendering`);
  assert.ok(html.length > 1500, `${files[index]} appears empty`);
}
for (const route of routes.slice(1)) {
  assert.match(all, new RegExp(`href="/${route.replaceAll("/", "\\/")}"`), `Missing English route ${route}`);
  assert.match(all, new RegExp(`href="/zh/${route.replaceAll("/", "\\/")}"`), `Missing Chinese route ${route}`);
}
assert.equal((pages[4].match(/<details id=/g) || []).length, projects.length, "English projects are not fully rendered");
assert.equal((pages[6].match(/publication-index/g) || []).length, 1, "English publication page missing");
assert.match(pages[1], /研究学习系统如何重塑工程设计/, "Chinese homepage content missing");
assert.doesNotMatch(all, /张崇辉|GPA|3\.85|4\/130|专业排名|National Scholarship/i, "Removed résumé content returned");
await access(new URL("../assets/styles.css", import.meta.url));
await access(new URL("../assets/chonghui-zhang-dark.png", import.meta.url));

console.log(`Validated ${pages.length} fully static pages, ${projects.length} projects, and ${publications.length} publications without client-side rendering.`);
