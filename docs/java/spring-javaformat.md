# Spring Java Format

- https://github.com/spring-io/spring-javaformat
- https://github.com/spring-io/spring-javaformat/blob/main/spring-javaformat/spring-javaformat-checkstyle/src/main/resources/io/spring/javaformat/checkstyle/spring-checkstyle.xml

## Gradle 项目中使用

### build.gradle 配置

[官方文档](https://github.com/spring-io/spring-javaformat#checkstyle-1)

```groovy title="build.gradle"
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath "io.spring.javaformat:spring-javaformat-gradle-plugin:0.0.39"
    }
}

plugins {
   id "checkstyle"
}

checkstyle {
    toolVersion = "9.3"
}

allprojects {
    repositories {
        mavenCentral()
    }

    apply plugin: 'checkstyle'
    apply plugin: 'io.spring.javaformat'

    dependencies {
        checkstyle("io.spring.javaformat:spring-javaformat-checkstyle:0.0.39")
    }
}

```

### Spring Java Format 配置文件

```ini title=".springjavaformatconfig"
indentation-style=spaces

```

### checkstyle 配置文件

```xml title="config/checkstyle/checkstyle.xm"
<?xml version="1.0"?>
<!DOCTYPE module PUBLIC
		"-//Checkstyle//DTD Checkstyle Configuration 1.3//EN"
		"https://checkstyle.org/dtds/configuration_1_3.dtd">
<module name="com.puppycrawl.tools.checkstyle.Checker">
	<module name="io.spring.javaformat.checkstyle.SpringChecks" >
		<property name="tabWidth" value="4" />
		<property name="headerType" value="unchecked" />
		<property name="excludes" value="com.puppycrawl.tools.checkstyle.checks.javadoc.JavadocPackageCheck" />
	</module>
</module>
```

## IntelliJ IDEA 使用

### Spring Javaformat 插件

[官方文档说明](https://github.com/spring-io/spring-javaformat#intellij-idea)

1. 从 [Maven Central](https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-intellij-idea-plugin/0.0.39/) 下载 [spring-javaformat-intellij-idea-plugin-0.0.39.jar](https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-intellij-idea-plugin/0.0.39/spring-javaformat-intellij-idea-plugin-0.0.39.jar)

2. IntelliJ IDEA | Settings | Plugins | Install Plugin from Disk... 选择刚刚下载的 jar 文件，安装 Plugin

3. 如果编辑器状态栏显示 ![](https://raw.githubusercontent.com/spring-io/spring-javaformat/main/spring-javaformat-intellij-idea/spring-javaformat-intellij-idea-plugin/src/main/resources/spring-javaformat/formatOn.png) 图标，表示 Spring Formatter 正常启用

### CheckStype-IDEA 插件

1. 下载安装插件 https://plugins.jetbrains.com/plugin/1065-checkstyle-idea

2. 下载 [spring-javaformat-checkstyle-0.0.39.jar](https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-checkstyle/0.0.39/spring-javaformat-checkstyle-0.0.39.jar)

3. 下载 [spring-javaformat-config-0.0.39.jar](https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-config/0.0.39/spring-javaformat-config-0.0.39.jar)

4. IntelliJ IDEA | Settings | Tools | Checkstyle 设置

- Checkstyle version: 9.3
- Configuration File Add `config/checkstyle/checkstyle.xml`
- Third-Party Checks Add `spring-javaformat-checkstyle-0.0.39.jar` && `spring-javaformat-config-0.0.39.jar`
