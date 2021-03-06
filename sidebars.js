// @ts-check

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
      label: 'Java',
      items: ['java/google-java-style-guide', 'java/checkstyle', 'java/google-java-format'],
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
  ],
};

module.exports = sidebars;
