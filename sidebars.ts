import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'index' },
    {
      type: 'category',
      label: 'Basic',
      link: { type: 'doc', id: 'basic/index' },
      items: ['basic/editorconfig', 'basic/sonarqube'],
    },
    {
      type: 'category',
      label: 'Java',
      items: [
        'java/alibaba-p3c',
        'java/checkstyle',
        'java/google-java-format',
        'java/spotless',
        'java/spring-javaformat',
      ],
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
        'javascript/eslint-9',
        'javascript/stylelint',
        'javascript/lefthook',
      ],
    },
    {
      type: 'category',
      label: 'PHP',
      items: ['php/php-cs-fixer', 'php/phpstan'],
    },
    {
      type: 'category',
      label: 'Shell',
      items: ['shell/shellcheck'],
    },
  ],
  framework: [
    { type: 'doc', id: 'framework/index' },
    {
      type: 'category',
      label: 'Vite + React + TypeScript',
      items: [
        'framework/vite-react-ts/tsconfig-paths',
        'framework/vite-react-ts/git-lefthook',
        'framework/vite-react-ts/git-commitlint',
        'framework/vite-react-ts/lint-biomejs',
        'framework/vite-react-ts/testing-vitest',
        'framework/vite-react-ts/router-react-router',
        'framework/vite-react-ts/router-tanstack-router',
      ],
    },
    {
      type: 'category',
      label: 'NextJS',
      items: [
        'framework/nextjs/index',
        'framework/nextjs/eslint-9',
        'framework/nextjs/prettier',
        'framework/nextjs/stylelint',
        'framework/nextjs/husky',
        'framework/nextjs/lint-staged',
        'framework/nextjs/commitlint',
        'framework/nextjs/cypress',
      ],
    },
    {
      type: 'category',
      label: 'Laravel',
      items: ['framework/laravel/pint'],
    },
  ],
};

export default sidebars;
