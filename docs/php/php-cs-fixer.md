# PHP CS Fixer

- https://github.com/FriendsOfPHP/PHP-CS-Fixer

## 安装

```bash
composer require --dev friendsofphp/php-cs-fixer
```

## 配置

```bash
touch .php-cs-fixer.dist.php
```

```php title=".php-cs-fixer.dist.php"
<?php

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude('vendor');

return (new PhpCsFixer\Config())
    ->setCacheFile(__DIR__.'/.php-cs-fixer.cache')
    ->setRules(
        [
            '@Symfony' => true,
        ]
    )
    ->setFinder($finder);

```

```diff title=".gitignore"
+ # php cs fixer cache file
+ .php-cs-fixer.cache
```

## 使用

```bash
# 查看版本
php-cs-fixer --version
# 分析项目
php-cs-fixer fix --dry-run
# 修复问题
php-cs-fixer fix . --rules=@Symfony --using-cache=no
```
