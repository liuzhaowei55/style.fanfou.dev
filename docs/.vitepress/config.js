export default {
  title: 'Code Style Guide',
  description: 'Code Style Best Practices',
  lang: 'zh-CN',
  logo: 'logo.png',
  themeConfig: {
    nav: [
      { text: 'JavaScript', link: '/js/' },
      { text: 'PHP', link: '/php/' },
      { text: 'Java', link: '/java/' },
    ],
    sidebar: {
      '/js/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'husky', link: '/js/husky' },
            { text: 'commitlint', link: '/js/commitlint' },
            { text: 'lint-staged', link: '/js/lint-staged' },
            { text: 'Prettier', link: '/js/prettier' },
            { text: 'ESLint', link: '/js/eslint' },
            { text: 'Stylelint', link: '/js/stylelint' },
          ],
        },
      ],
    },
  },
};
