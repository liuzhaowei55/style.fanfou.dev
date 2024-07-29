import type * as Preset from '@docusaurus/preset-classic';
import remarkPluginNpm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const themeConfig = {
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
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    additionalLanguages: ['php', 'ignore', 'neon', 'groovy', 'ini', 'json'],
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
} satisfies Preset.ThemeConfig;

const config: Config = {
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [[remarkPluginNpm2yarn, { sync: true }]],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/liuzhaowei55/style.fanfou.dev/tree/main',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig,
};

export default config;
