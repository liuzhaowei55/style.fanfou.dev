export default {
  title: 'Code Style Guide',
  description: 'Code Style Best Practices',
  lang: 'zh-CN',
  logo: 'logo.png',
  themeConfig: {
    algolia: {
      appId: 'J0TJ9SD1IK',
      apiKey: '6118ce2dd52f087a80b2065af6374040',
      indexName: 'style_fanfou_dev',
    },
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
