# Spotless

- [github.com/diffplug/spotless](https://github.com/diffplug/spotless)
- [Andorid AOSP Java 代码样式指南](https://source.android.com/docs/setup/contribute/code-style?hl=zh-cn)

## Gradle

### 安装配置

```groovy title="build.gradle"
// 添加 plugin
plugins {
    id 'java'
    id 'groovy'
    // https://plugins.gradle.org/plugin/com.diffplug.spotless
    id "com.diffplug.spotless" version "6.12.0"
}

// 配置
spotless {
    java {
        importOrder()
		removeUnusedImports()
        googleJavaFormat('1.15.0').aosp().reflowLongStrings()
        formatAnnotations()
    }
    groovy {
        target '**/*.groovy'
        importOrder()
        indentWithSpaces()
        endWithNewline()
        trimTrailingWhitespace()
        greclipse('4.6.3').configFile("config/spotless/greclipse.properties")
    }
    groovyGradle {
        target '**/*.gradle'
        greclipse('4.6.3').configFile("config/spotless/greclipse.properties")
    }
}
```

```ini title="config/spotless/greclipse.properties"
#Whether to use 'space', 'tab' or 'mixed' (both) characters for indentation.
#The default value is 'tab'.
org.eclipse.jdt.core.formatter.tabulation.char=space

#Number of spaces used for indentation in case 'space' characters
#have been selected. The default value is 4.
org.eclipse.jdt.core.formatter.tabulation.size=4

#Number of spaces used for indentation in case 'mixed' characters
#have been selected. The default value is 4.
org.eclipse.jdt.core.formatter.indentation.size=4

#Whether or not indentation characters are inserted into empty lines.
#是否在空行中插入缩进字符
#The default value is 'true'.
org.eclipse.jdt.core.formatter.indent_empty_lines=false

#Number of spaces used for multiline indentation.
#用于多行缩进的空格数
#The default value is 2.
groovy.formatter.multiline.indentation=2

#Length after which list are considered too long. These will be wrapped.
#长度，超过这个长度的列表将被视为过长。这些将被包起来
#The default value is 30.
groovy.formatter.longListLength=30

#Whether opening braces position shall be the next line.
#开头括号的位置是否应是下一行
#The default value is 'same'.
groovy.formatter.braces.start=same

#Whether closing braces position shall be the next line.
#闭合大括号的位置是否应是下一行
#The default value is 'next'.
groovy.formatter.braces.end=next

#Remove unnecessary semicolons.
# 删除不必要的分号
# The default value is 'false'.
groovy.formatter.remove.unnecessary.semicolons=true
```

### 命令行使用

检查代码

```shell
gradle spotlessCheck
```

格式化代码

```shell
gradle spotlessApply
```

### 编辑器使用

[IDEA Plugins Spotless Gradle](https://plugins.jetbrains.com/plugin/18321-spotless-gradle)
