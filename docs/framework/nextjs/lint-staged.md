# lint-staged

```bash npm2yarn
npm install --save-dev lint-staged
```

```bash
# package.json scripts 添加命令
npm pkg set scripts.lint-staged="lint-staged"
```

```bash
echo "npx --no-install lint-staged" >> .husky/pre-commit
```

```javascript title=".lintstagedrc.js"
const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  'package.json': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
```
