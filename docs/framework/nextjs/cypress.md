# Cypress

- [Testing | Next.js](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#cypress)
- [Cypress Documentation](https://docs.cypress.io)

安装 Cypress

```bash
npm install --save-dev cypress
```

添加 scripts 命令

```bash
npm pkg set scripts.cypress="cypress open"
npm pkg set scripts.cypress:component="cypress run --component --config video=false"
npm pkg set scripts.cypress:e2e="cypress run --e2e --config video=false"
```

```json title="cypress/tsconfig.json"
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

添加 .gitignore 忽略文件

```ignore title=".gitignore"
# Cypress
cypress/downloads
cypress/screenshots
cypress/videos
```
