export default {
  title: "Code Style Guide",
  description: "Code Style Best Practices",
  lang: "zh-CN",
  themeConfig: {
    nav: [
      { text: "JavaScritp", link: "/js/" },
      { text: "PHP", link: "/php/" },
      { text: "Java", link: "/java/" },
    ],
    sidebar: {
      "/js/": [
        {
          text: "JavaScirpt",
          items: [
            { text: "husky", link: "/js/husky" },
            { text: "commitlint", link: "/js/commitlint" },
            { text: "lint-staged", link: "/js/lint-staged" },
            { text: "Prettier", link: "/js/prettier" },
            { text: "ESLint", link: "/js/eslint" },
            { text: "Stylelint", link: "/js/stylelint" },
          ],
        },
      ],
    },
  },
};
