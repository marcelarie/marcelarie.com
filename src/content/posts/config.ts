import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        // using zod to define type-safe frontmatter of our mdx files
        // astro will generate types definitions for our project so we can use them in templates
        // also it will check every newly created frontmatter in the content/blog directory
        z.object({
            title: z.string(),
            tags: z.array(z.string()),
            cover: image(),
            date: z.coerce.date(),
            excerpt: z.string(),
        }),
});

export const collections = {
    posts: postsCollection,
};
