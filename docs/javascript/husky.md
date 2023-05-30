---
description: husky
---

# husky

- [typicode/husky](https://github.com/typicode/husky)
- [husky docs](https://typicode.github.io/husky)

## 安装

```bash npm2yarn
npm install --save-dev husky
```

## 设置 prepare

```bash
npm pkg set scripts.prepare="husky install" && npm run prepare
```

## 设置 hooks

```shell
npx husky add .husky/pre-commit "npm test"
```

## 提交 .husky 文件变化

```shell
git add .husky/pre-commit
```
