# ESLint 9

- [ESLint Homepage](https://eslint.org/)
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## 安装

```bash npm2yarn
npm install --save-dev eslint @antfu/eslint-config
```

```bash
npm pkg set scripts.eslint="eslint ."
npm pkg set scripts.eslint:fix="eslint . --fix"
```

## Run with React

```bash npm2yarn
npm install @eslint-react/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
```

```js title="eslint.config.js"
import antfu from '@antfu/eslint-config';

// with React https://github.com/antfu/eslint-config?tab=readme-ov-file#react
export default antfu({
  react: true,
  typescript: true,
  ignores: [],
});
```

## 使用

```bash npm2yarn
npm run lint
```
