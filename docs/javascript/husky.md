---
title: husky
---

- [typicode/husky](https://github.com/typicode/husky)
- [husky docs](https://typicode.github.io/husky)

## 安装

```bash npm2yarn
npm install husky --save-dev
```

## 初始化

```bash
npx husky init
```

## 设置 hooks

```shell
echo "npm test" > .husky/pre-commit
```

## 提交 .husky 文件变化

```shell
git add .husky/pre-commit
```

## 完全卸载

```shell
npm uninstall husky

rm -rf .husky

git config --unset core.hooksPath
```
