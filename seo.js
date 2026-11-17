/** @format */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SITE_URL = "https://database-website-nine.vercel.app";

const template = readFileSync("dist/index.html", "utf8");
const pages = [...readFileSync("src/pageMappings.tsx", "utf8").matchAll(/title:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g)];

const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const set = (html, tag, value) => html.replace(new RegExp(`(${tag}\\s+(?:content|href)=")[^"]*`), (_, start) => start + escape(value));

for (const [, title, description] of pages) {
  const slug = title.toLowerCase().replaceAll(" ", "-");
  const url = `${SITE_URL}/${slug}`;
  const fullTitle = `Xeno | ${title}`;

  let html = template.replace(/<title>.*?<\/title>/, () => `<title>${escape(fullTitle)}</title>`);
  html = set(html, '<link\\s+rel="canonical"', url);
  html = set(html, '<meta\\s+name="description"', description);
  html = set(html, '<meta\\s+property="og:url"', url);
  html = set(html, '<meta\\s+property="og:title"', fullTitle);
  html = set(html, '<meta\\s+property="og:description"', description);

  mkdirSync(`dist/${slug}`, { recursive: true });
  writeFileSync(`dist/${slug}/index.html`, html);
  console.log(`dist/${slug}/index.html`);
}
