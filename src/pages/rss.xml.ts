import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { SITE_CONFIG } from "../config";
import type { Post } from "../types";
const parser = new MarkdownIt();

type Context = {
  site: string | URL;
};

export async function GET(context: Context) {
  const blogPosts = await getCollection("posts");

  return rss({
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map((post: Post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.tags,
      // Note: this will not process components or JSX expressions in MDX files.
      content: sanitizeHtml(parser.render(post.body || ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      // Assumes all posts are rendered as `/blog/[slug]`
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
