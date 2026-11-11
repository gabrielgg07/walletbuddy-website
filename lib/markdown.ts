import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content");

/**
 * Reads `content/<slug>.md` and returns its raw Markdown.
 * Pages are statically rendered, so this runs at build time on Vercel and
 * the Markdown is baked into the generated HTML.
 */
export function getMarkdown(slug: string): string {
  return fs.readFileSync(path.join(contentDir, `${slug}.md`), "utf8");
}
