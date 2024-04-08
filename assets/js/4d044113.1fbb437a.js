"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[6416],{183:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=a(5893),r=a(1151);const t={},s="Spring Java Format",l={id:"java/spring-javaformat",title:"Spring Java Format",description:"- https://github.com/spring-io/spring-javaformat",source:"@site/docs/java/spring-javaformat.md",sourceDirName:"java",slug:"/java/spring-javaformat",permalink:"/docs/java/spring-javaformat",draft:!1,unlisted:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/java/spring-javaformat.md",tags:[],version:"current",lastUpdatedAt:1687931126e3,frontMatter:{},sidebar:"docs",previous:{title:"Spotless \ud83d\udc4d",permalink:"/docs/java/spotless"},next:{title:"JavaScript Code Style",permalink:"/docs/javascript/"}},c={},o=[{value:"Gradle \u9879\u76ee\u4e2d\u4f7f\u7528",id:"gradle-\u9879\u76ee\u4e2d\u4f7f\u7528",level:2},{value:"build.gradle \u914d\u7f6e",id:"buildgradle-\u914d\u7f6e",level:3},{value:"Spring Java Format \u914d\u7f6e\u6587\u4ef6",id:"spring-java-format-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"checkstyle \u914d\u7f6e\u6587\u4ef6",id:"checkstyle-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"IntelliJ IDEA \u4f7f\u7528",id:"intellij-idea-\u4f7f\u7528",level:2},{value:"Spring Javaformat \u63d2\u4ef6",id:"spring-javaformat-\u63d2\u4ef6",level:3},{value:"CheckStype-IDEA \u63d2\u4ef6",id:"checkstype-idea-\u63d2\u4ef6",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"spring-java-format",children:"Spring Java Format"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/spring-io/spring-javaformat",children:"https://github.com/spring-io/spring-javaformat"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/spring-io/spring-javaformat/blob/main/spring-javaformat/spring-javaformat-checkstyle/src/main/resources/io/spring/javaformat/checkstyle/spring-checkstyle.xml",children:"https://github.com/spring-io/spring-javaformat/blob/main/spring-javaformat/spring-javaformat-checkstyle/src/main/resources/io/spring/javaformat/checkstyle/spring-checkstyle.xml"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gradle-\u9879\u76ee\u4e2d\u4f7f\u7528",children:"Gradle \u9879\u76ee\u4e2d\u4f7f\u7528"}),"\n",(0,i.jsx)(n.h3,{id:"buildgradle-\u914d\u7f6e",children:"build.gradle \u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/spring-io/spring-javaformat#checkstyle-1",children:"\u5b98\u65b9\u6587\u6863"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'buildscript {\n    repositories {\n        mavenCentral()\n    }\n    dependencies {\n        classpath "io.spring.javaformat:spring-javaformat-gradle-plugin:0.0.39"\n    }\n}\n\nplugins {\n   id "checkstyle"\n}\n\ncheckstyle {\n    toolVersion = "9.3"\n}\n\nallprojects {\n    repositories {\n        mavenCentral()\n    }\n\n    apply plugin: \'checkstyle\'\n    apply plugin: \'io.spring.javaformat\'\n\n    dependencies {\n        checkstyle("io.spring.javaformat:spring-javaformat-checkstyle:0.0.39")\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"spring-java-format-\u914d\u7f6e\u6587\u4ef6",children:"Spring Java Format \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",metastring:'title=".springjavaformatconfig"',children:"indentation-style=spaces\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"checkstyle-\u914d\u7f6e\u6587\u4ef6",children:"checkstyle \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="config/checkstyle/checkstyle.xm"',children:'<?xml version="1.0"?>\n<!DOCTYPE module PUBLIC\n\t\t"-//Checkstyle//DTD Checkstyle Configuration 1.3//EN"\n\t\t"https://checkstyle.org/dtds/configuration_1_3.dtd">\n<module name="com.puppycrawl.tools.checkstyle.Checker">\n\t<module name="io.spring.javaformat.checkstyle.SpringChecks" >\n\t\t<property name="tabWidth" value="4" />\n\t\t<property name="headerType" value="unchecked" />\n\t\t<property name="excludes" value="com.puppycrawl.tools.checkstyle.checks.javadoc.JavadocPackageCheck" />\n\t</module>\n</module>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"intellij-idea-\u4f7f\u7528",children:"IntelliJ IDEA \u4f7f\u7528"}),"\n",(0,i.jsx)(n.h3,{id:"spring-javaformat-\u63d2\u4ef6",children:"Spring Javaformat \u63d2\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/spring-io/spring-javaformat#intellij-idea",children:"\u5b98\u65b9\u6587\u6863\u8bf4\u660e"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4ece ",(0,i.jsx)(n.a,{href:"https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-intellij-idea-plugin/0.0.39/",children:"Maven Central"})," \u4e0b\u8f7d ",(0,i.jsx)(n.a,{href:"https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-intellij-idea-plugin/0.0.39/spring-javaformat-intellij-idea-plugin-0.0.39.jar",children:"spring-javaformat-intellij-idea-plugin-0.0.39.jar"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"IntelliJ IDEA | Settings | Plugins | Install Plugin from Disk... \u9009\u62e9\u521a\u521a\u4e0b\u8f7d\u7684 jar \u6587\u4ef6\uff0c\u5b89\u88c5 Plugin"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u7f16\u8f91\u5668\u72b6\u6001\u680f\u663e\u793a ",(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/spring-io/spring-javaformat/main/spring-javaformat-intellij-idea/spring-javaformat-intellij-idea-plugin/src/main/resources/spring-javaformat/formatOn.png",alt:""})," \u56fe\u6807\uff0c\u8868\u793a Spring Formatter \u6b63\u5e38\u542f\u7528"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"checkstype-idea-\u63d2\u4ef6",children:"CheckStype-IDEA \u63d2\u4ef6"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u8f7d\u5b89\u88c5\u63d2\u4ef6 ",(0,i.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/1065-checkstyle-idea",children:"https://plugins.jetbrains.com/plugin/1065-checkstyle-idea"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u8f7d ",(0,i.jsx)(n.a,{href:"https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-checkstyle/0.0.39/spring-javaformat-checkstyle-0.0.39.jar",children:"spring-javaformat-checkstyle-0.0.39.jar"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4e0b\u8f7d ",(0,i.jsx)(n.a,{href:"https://repo1.maven.org/maven2/io/spring/javaformat/spring-javaformat-config/0.0.39/spring-javaformat-config-0.0.39.jar",children:"spring-javaformat-config-0.0.39.jar"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"IntelliJ IDEA | Settings | Tools | Checkstyle \u8bbe\u7f6e"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Checkstyle version: 9.3"}),"\n",(0,i.jsxs)(n.li,{children:["Configuration File Add ",(0,i.jsx)(n.code,{children:"config/checkstyle/checkstyle.xml"})]}),"\n",(0,i.jsxs)(n.li,{children:["Third-Party Checks Add ",(0,i.jsx)(n.code,{children:"spring-javaformat-checkstyle-0.0.39.jar"})," && ",(0,i.jsx)(n.code,{children:"spring-javaformat-config-0.0.39.jar"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var i=a(7294);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);