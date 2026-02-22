export const SITE_CONFIG = {
  title: "Unexpected cool pointer",
  description: "This is my personal blog where I write about things I like.",
  url: "https://followthetrace.com",

  author: {
    name: "Marcel Arie",
    username: "marcelarie",
    email: "googlillo@example.com",
    birthDate: new Date("1995-09-27"),
    programmingStartDate: new Date("2020-10-10"),
  },

  github: {
    username: "marcelarie",
    repo: "followthetrace.com",
    repoId: "MDEwOlJlcG9zaXRvcnkyODU1OTY4MzE",
  },

  giscus: {
    category: "General",
    categoryId: "DIC_kwDOEQXcn84CvJvn",
  },

  projects: [
    "tarea",
    "git-commit-search",
    "nu-alias-converter",
    "sourses",
    "rund",
    "git-tellme",
    "marcelarie.com",
  ],
} as const;
