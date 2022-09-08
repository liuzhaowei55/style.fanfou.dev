---
description: husky
---

# husky

- [typicode/husky](https://github.com/typicode/husky)
- [husky docs](https://typicode.github.io/husky)

## 安装

```bash npm2yarn
npm install husky --save-dev
```

## 设置 prepare

```bash
npm set-script prepare "husky install"
npm run prepare
```

## 设置 hooks

```bash
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```
