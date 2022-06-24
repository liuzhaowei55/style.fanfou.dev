# lint-staged

- [github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)

## 安装

```bash
yarn add lint-staged -D
```

配置

```bash
cat <<EEE > .lintstagedrc.json
{
  "package.json": ["npx prettier --write"],
  "*.{js,jsx,less,md,json}": ["prettier --write"],
  "*.ts?(x)": ["prettier --parser=typescript --write"]
}
EEE
```

```bash
npx husky add .husky/pre-commit 'npx --no-install lint-staged --quiet'
```
