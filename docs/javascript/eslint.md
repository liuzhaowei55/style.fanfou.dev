# ESLint

- [ESLint Homepage](https://eslint.org/)
- [AlloyTeam/eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

## 安装

```bash npm2yarn
npm install --save-dev eslint eslint-config-alloy eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```bash
npm pkg set scripts.eslint="eslint src"
npm pkg set scripts.eslint:fix="eslint --fix src"
```

## 配置

```js title=".eslintrc.cjs"
module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
  },
};
```

```ignore title=".eslintignore"
*.css
```

## 使用

```shell
npx eslint "src/**"
```
