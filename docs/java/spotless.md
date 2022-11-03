# Spotless

- [github.com/diffplug/spotless](https://github.com/diffplug/spotless)
- [Andorid AOSP Java 代码样式指南](https://source.android.com/docs/setup/contribute/code-style?hl=zh-cn)

## Gradle

### 安装配置

```groovy title="build.gradle"
// 添加 plugin
plugins {
    // https://plugins.gradle.org/plugin/com.diffplug.spotless
    id "com.diffplug.spotless" version "6.11.0"
}

// 配置
spotless {
    java {
        importOrder()
		removeUnusedImports()
        googleJavaFormat('1.15.0').aosp().reflowLongStrings()
        formatAnnotations()
    }
}
```

### 命令行使用

检查代码

```shell
gradle spotlessJavaCheck
```

格式化代码

```shell
gradle spotlessApply
```

### 编辑器使用

[IDEA Plugins Spotless Gradle](https://plugins.jetbrains.com/plugin/18321-spotless-gradle)
