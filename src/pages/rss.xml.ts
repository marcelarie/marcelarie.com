import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

type Context = {
  site: string | URL;
};

export async function GET(context: Context) {
  const blogPosts = await getCollection("posts");
  console.log(blogPosts);

  return rss({
    title: "Marcel's Blog",
    description: "This is my personal blog where I write about things I like.",
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.tags,
      content: post.body,
      // Assumes all posts are rendered as `/blog/[slug]`
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
