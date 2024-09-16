export type Post = {
  id: string;
  slug: string;
  body: string;
  collections: "posts";
  data: {
    title: string;
    date: Date;
    excerpt: string;
    tags: string[];
  };
  render: any;
};
