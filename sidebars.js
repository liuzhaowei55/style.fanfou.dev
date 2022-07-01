// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
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
      label: 'Bash',
      items: ['bash/shellcheck'],
    },
    {
      type: 'category',
      label: 'PHP',
      items: ['php/php-cs-fixer', 'php/phpstan'],
    },
    {
      type: 'category',
      label: 'JavaScript',
      link: { type: 'doc', id: 'js/index' },
      items: [
        'js/husky',
        'js/lint-staged',
        'js/commitlint',
        'js/prettier',
        'js/eslint',
        'js/stylelint',
      ],
    },
  ],
};

module.exports = sidebars;
