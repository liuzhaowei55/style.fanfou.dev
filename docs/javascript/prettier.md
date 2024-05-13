# prettier

- [Prettier Homepage](https://prettier.io/)
- [AlloyTeam/eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

## 安装

```bash npm2yarn
npm install --save-dev prettier eslint-config-alloy
```

```bash npm2yarn
npm install --save-dev prettier-plugin-organize-imports prettier-plugin-packagejson prettier-plugin-tailwindcss
```

```bash
npm pkg set scripts.prettier="prettier --ignore-unknown src"
npm pkg set scripts.prettier:fix="prettier -write --ignore-unknown src"
```

创建配置文件

```js title='prettier.config.js'
import alloy from 'eslint-config-alloy/.prettierrc.js';

/** @type {import("prettier").Config} */
const config = {
  ...alloy,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],
};

export default config;

```

创建 ignore 文件

```ignore title='.prettierignore'
# Ignore artifacts:
build
coverage
*.html
```
