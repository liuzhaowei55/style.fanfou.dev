/**
 * 侧边栏配置文档
 * https://docusaurus.io/zh-CN/docs/sidebar/items
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    { type: 'doc', id: 'index' },
    {
      type: 'category',
      label: 'Basic',
      link: { type: 'doc', id: 'basic/index' },
      items: ['basic/editorconfig'],
    },
    {
      type: 'category',
      label: 'Java',
      items: ['java/checkstyle', 'java/google-java-format', 'java/spotless'],
    },
    {
      type: 'category',
      label: 'JavaScript',
      link: { type: 'doc', id: 'javascript/index' },
      items: [
        'javascript/husky',
        'javascript/lint-staged',
        'javascript/commitlint',
        'javascript/prettier',
        'javascript/eslint',
        'javascript/stylelint',
      ],
    },
    {
      type: 'category',
      label: 'PHP',
      items: [
        'php/php-cs-fixer',
        'php/phpstan',
        {
          type: 'category',
          label: 'Laravel',
          items: ['php/laravel/pint'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Shell',
      items: ['shell/shellcheck'],
    },
  ],
};

module.exports = sidebars;
