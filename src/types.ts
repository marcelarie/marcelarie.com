import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type Post = {
  id: string;
  slug: string;
  body: string;
  collections: "posts";
  data: {
    title: string;
    date: Date;
    excerpt: string;
    draft: boolean;
    tags: string[];
  };
  render: () => Promise<{
    Content: AstroComponentFactory;
  }>;
};
