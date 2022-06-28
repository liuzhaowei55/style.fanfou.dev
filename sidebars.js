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
      label: 'JavaScript',
      link: { type: 'doc', id: 'js/index' },
      items: [
        'js/commitlint',
        'js/eslint',
        'js/husky',
        'js/lint-staged',
        'js/prettier',
        'js/stylelint',
      ],
    },
  ],
};

module.exports = sidebars;
