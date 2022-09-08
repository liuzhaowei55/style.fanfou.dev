# lint-staged

- [github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

## 安装

```bash npm2yarn
npm install --save-dev lint-staged
```

配置

```json title='.lintstagedrc.json'
{
  "package.json": ["npx prettier --write"],
  "*.{js,jsx,less,md,json}": ["prettier --write"],
  "*.ts?(x)": ["prettier --parser=typescript --write"]
}
```

```bash
npx husky add .husky/pre-commit 'npx --no-install lint-staged'
```
