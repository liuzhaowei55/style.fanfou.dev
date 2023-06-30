// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require('prism-react-renderer');

const themeConfig =
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: 'Code Style',
      logo: {
        alt: 'code Style logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'doc',
          docId: 'framework/index',
          position: 'left',
          label: 'Framework',
        },
        {
          href: 'https://github.com/liuzhaowei55/style.fanfou.dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: '我等采石之人，当心怀建造大教堂之愿景。',
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['php', 'ignore', 'neon', 'groovy', 'ini'],
    },
    algolia: {
      appId: 'II6TTGG6PX',
      apiKey: '0d1fe35cddef860904088dcf86a36685',
      indexName: 'style',
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  });

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Code Style',
  tagline: 'Code Style Best Practices',
  url: 'https://style.fanfou.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liuzhaowei55', // Usually your GitHub org/user name.
  projectName: 'style.fanfou.dev', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/liuzhaowei55/style.fanfou.dev/tree/main',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig,
};

module.exports = config;
