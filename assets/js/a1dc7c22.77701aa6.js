"use strict";(self.webpackChunkstyle_fanfou_dev=self.webpackChunkstyle_fanfou_dev||[]).push([[2455],{729:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(5893),o=s(1151);const r={},l="Spotless \ud83d\udc4d",a={id:"java/spotless",title:"Spotless \ud83d\udc4d",description:"- github.com/diffplug/spotless",source:"@site/docs/java/spotless.md",sourceDirName:"java",slug:"/java/spotless",permalink:"/docs/java/spotless",draft:!1,unlisted:!1,editUrl:"https://github.com/liuzhaowei55/style.fanfou.dev/tree/main/docs/java/spotless.md",tags:[],version:"current",lastUpdatedAt:1687784686,formattedLastUpdatedAt:"2023\u5e746\u670826\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"Google java Format",permalink:"/docs/java/google-java-format"},next:{title:"Spring Java Format",permalink:"/docs/java/spring-javaformat"}},i={},c=[{value:"Gradle",id:"gradle",level:2},{value:"\u5b89\u88c5\u914d\u7f6e",id:"\u5b89\u88c5\u914d\u7f6e",level:3},{value:"\u547d\u4ee4\u884c\u4f7f\u7528",id:"\u547d\u4ee4\u884c\u4f7f\u7528",level:3},{value:"\u7f16\u8f91\u5668\u4f7f\u7528",id:"\u7f16\u8f91\u5668\u4f7f\u7528",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"spotless-",children:"Spotless \ud83d\udc4d"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/diffplug/spotless",children:"github.com/diffplug/spotless"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://source.android.com/docs/setup/contribute/code-style?hl=zh-cn",children:"Andorid AOSP Java \u4ee3\u7801\u6837\u5f0f\u6307\u5357"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"gradle",children:"Gradle"}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5\u914d\u7f6e",children:"\u5b89\u88c5\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",metastring:'title="settings.gradle"',children:'// Sharing dependency versions between projects\n// https://docs.gradle.org/current/userguide/platforms.html\ndependencyResolutionManagement {\n    versionCatalogs {\n        libs {\n            // https://plugins.gradle.org/plugin/com.diffplug.spotless\n            plugin("spotless", "com.diffplug.spotless").version("6.17.0")\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"// \u6dfb\u52a0 plugin\nplugins {\n    id 'java'\n    id 'groovy'\n\n    alias(libs.plugins.spotless)\n}\n\napply from: rootProject.file('config/spotless/spotless-dotfiles.gradle')\napply from: rootProject.file('config/spotless/spotless-gradle.gradle')\napply from: rootProject.file('config/spotless/spotless-groovy.gradle')\napply from: rootProject.file('config/spotless/spotless-java.gradle')\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",metastring:'title="config/spotless/greclipse.properties"',children:"#Whether to use 'space', 'tab' or 'mixed' (both) characters for indentation.\n#The default value is 'tab'.\norg.eclipse.jdt.core.formatter.tabulation.char=space\n\n#Number of spaces used for indentation in case 'space' characters\n#have been selected. The default value is 4.\norg.eclipse.jdt.core.formatter.tabulation.size=4\n\n#Number of spaces used for indentation in case 'mixed' characters\n#have been selected. The default value is 4.\norg.eclipse.jdt.core.formatter.indentation.size=4\n\n#Whether or not indentation characters are inserted into empty lines.\n#\u662f\u5426\u5728\u7a7a\u884c\u4e2d\u63d2\u5165\u7f29\u8fdb\u5b57\u7b26\n#The default value is 'true'.\norg.eclipse.jdt.core.formatter.indent_empty_lines=false\n\n#Number of spaces used for multiline indentation.\n#\u7528\u4e8e\u591a\u884c\u7f29\u8fdb\u7684\u7a7a\u683c\u6570\n#The default value is 2.\ngroovy.formatter.multiline.indentation=2\n\n#Length after which list are considered too long. These will be wrapped.\n#\u957f\u5ea6\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u957f\u5ea6\u7684\u5217\u8868\u5c06\u88ab\u89c6\u4e3a\u8fc7\u957f\u3002\u8fd9\u4e9b\u5c06\u88ab\u5305\u8d77\u6765\n#The default value is 30.\ngroovy.formatter.longListLength=30\n\n#Whether opening braces position shall be the next line.\n#\u5f00\u5934\u62ec\u53f7\u7684\u4f4d\u7f6e\u662f\u5426\u5e94\u662f\u4e0b\u4e00\u884c\n#The default value is 'same'.\ngroovy.formatter.braces.start=same\n\n#Whether closing braces position shall be the next line.\n#\u95ed\u5408\u5927\u62ec\u53f7\u7684\u4f4d\u7f6e\u662f\u5426\u5e94\u662f\u4e0b\u4e00\u884c\n#The default value is 'next'.\ngroovy.formatter.braces.end=next\n\n#Remove unnecessary semicolons.\n# \u5220\u9664\u4e0d\u5fc5\u8981\u7684\u5206\u53f7\n# The default value is 'false'.\ngroovy.formatter.remove.unnecessary.semicolons=true\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",metastring:'title="config/spotless/spotless-dotfiles.gradle"',children:"// \u914d\u7f6e\nspotless {\n    format 'dotfiles', {\n        target '.gitignore', '.gitattributes', '.editorconfig'\n        indentWithSpaces(2)\n        trimTrailingWhitespace()\n        endWithNewline()\n    }\n}\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",metastring:'title="config/spotless/spotless-gradle.gradle"',children:"// \u914d\u7f6e\nspotless {\n    groovyGradle {\n        target '**/*.gradle'\n        greclipse().configFile rootProject.files(\"config/spotless/greclipse.properties\")\n    }\n}\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",metastring:'title="config/spotless/spotless-groovy.gradle"',children:"// \u914d\u7f6e\nspotless {\n    groovy {\n        target '**/*.groovy'\n        importOrder()\n        indentWithSpaces()\n        endWithNewline()\n        trimTrailingWhitespace()\n        greclipse().configFile rootProject.file(\"config/spotless/greclipse.properties\")\n    }\n}\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",metastring:'title="config/spotless/spotless-java.gradle"',children:"// \u914d\u7f6e\nspotless {\n    java {\n        toggleOffOn('@formatter:off', '@formatter:on')\n        importOrder()\n        removeUnusedImports()\n        googleJavaFormat('1.17.0').aosp().reflowLongStrings()\n        formatAnnotations()\n    }\n}\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u547d\u4ee4\u884c\u4f7f\u7528",children:"\u547d\u4ee4\u884c\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u68c0\u67e5\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"gradle spotlessCheck\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u683c\u5f0f\u5316\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"gradle spotlessApply\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7f16\u8f91\u5668\u4f7f\u7528",children:"\u7f16\u8f91\u5668\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/18321-spotless-gradle",children:"IDEA Plugins Spotless Gradle"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var t=s(7294);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);