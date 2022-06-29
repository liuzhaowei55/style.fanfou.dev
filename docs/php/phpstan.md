# PHPStan

- https://phpstan.org

## 安装

```shell
composer require --dev phpstan/phpstan
```

## 配置

```neon title="phpstan.neon.dist"
parameters:
	level: 6
	paths:
		- src
		- tests
```

## 使用

```bash
vendor/bin/phpstan analyse
```
