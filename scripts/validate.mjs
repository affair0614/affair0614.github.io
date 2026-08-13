import { access, readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";
import { projects, publications, education, experience, skillGroups } from "../assets/content.js";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const site = await readFile(new URL("../assets/site.js", import.meta.url), "utf8");
const anchors = ["top", "research", "projects", "publications", "experience"];

for (const anchor of anchors) assert.match(html, new RegExp(`id=["']${anchor}["']`), `Missing #${anchor}`);
assert.equal((html.match(/mailto:chonghui\.zhang@mail\.mcgill\.ca/g) || []).length, 2, "Expected two email links");
assert.ok(projects.length >= 6 && publications.length >= 10, "Portfolio data is incomplete");
assert.ok(education.length && experience.length && skillGroups.length, "Experience data is incomplete");
assert.match(site, /portfolio-language/, "Language preference is not persisted");
assert.doesNotMatch(`${html}\n${site}`, /chatgpt|vinext|wrangler|\.openai\/hosting/i, "Runtime-specific reference found");

for (const asset of ["../assets/styles.css", "../assets/site.js", "../assets/content.js", "../assets/chonghui-zhang-dark.png", "../.nojekyll"]) {
  await access(new URL(asset, import.meta.url));
}

console.log(`Validated ${projects.length} projects, ${publications.length} publications, bilingual UI hooks, anchors, email links, and local assets.`);
