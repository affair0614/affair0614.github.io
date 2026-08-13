import { access, readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";
import { projects, publications, education, experience, skillGroups } from "../assets/content.js";

const pages = ["../index.html", "../research/index.html", "../projects/index.html", "../publications/index.html", "../about/index.html"];
const markup = (await Promise.all(pages.map(page => readFile(new URL(page, import.meta.url), "utf8")))).join("\n");
const site = await readFile(new URL("../assets/site.js", import.meta.url), "utf8");
const content = await readFile(new URL("../assets/content.js", import.meta.url), "utf8");

for (const route of ["/research/", "/projects/", "/publications/", "/about/"]) assert.match(markup + site, new RegExp(route.replaceAll("/", "\\/")), `Missing route ${route}`);
for (const page of pages) await access(new URL(page, import.meta.url));
for (const asset of ["../assets/styles.css", "../assets/site.js", "../assets/content.js", "../assets/chonghui-zhang-dark.png", "../.nojekyll"]) await access(new URL(asset, import.meta.url));

assert.ok(projects.length >= 6 && publications.length >= 10, "Research collections are incomplete");
assert.ok(education.length && experience.length && skillGroups.length, "About data is incomplete");
assert.match(site, /portfolio-language/, "Language preference is not persisted");
assert.match(site, /try \{ initialLanguage = localStorage/, "Storage access is not guarded");
assert.match(markup, /Researching how learning systems can reshape engineering design/, "Homepage lacks static fallback content");
assert.doesNotMatch(`${markup}\n${site}\n${content}`, /张崇辉|GPA|3\.85|4\/130|专业排名|National Scholarship|chatgpt|vinext|wrangler|\.openai\/hosting/i, "Résumé metric, translated name, or runtime-specific reference found");
assert.match(site, /<details id=/, "Projects are not expandable");
assert.ok((markup.match(/Chonghui Zhang/g) || []).length >= pages.length, "English name must appear consistently across pages");

console.log(`Validated ${pages.length} pages, ${projects.length} expandable projects, ${publications.length} publications, shared navigation, and bilingual UI.`);
