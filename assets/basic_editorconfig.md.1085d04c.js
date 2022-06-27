import{_ as s,c as n,o as a,a as e}from"./app.98a88fc5.js";const f=JSON.parse('{"title":"EditorConfig","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"}],"relativePath":"basic/editorconfig.md"}'),l={name:"basic/editorconfig.md"},p=e(`<h1 id="editorconfig" tabindex="-1">EditorConfig <a class="header-anchor" href="#editorconfig" aria-hidden="true">#</a></h1><ul><li><a href="https://editorconfig.org/" target="_blank" rel="noopener noreferrer">EditorConfig Homepage</a></li></ul><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;font-style:italic;">EEE</span><span style="color:#C3E88D;"> &gt; .editorconfig</span></span>
<span class="line"><span style="color:#C3E88D;"># EditorConfig is awesome: https://EditorConfig.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;"># top-most EditorConfig file</span></span>
<span class="line"><span style="color:#C3E88D;">root = true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;"># Unix-style newlines with a newline ending every file</span></span>
<span class="line"><span style="color:#C3E88D;">[*]</span></span>
<span class="line"><span style="color:#C3E88D;">end_of_line = lf</span></span>
<span class="line"><span style="color:#C3E88D;">insert_final_newline = true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;"># Matches multiple files with brace expansion notation</span></span>
<span class="line"><span style="color:#C3E88D;"># Set default charset</span></span>
<span class="line"><span style="color:#C3E88D;">[*.{js,py}]</span></span>
<span class="line"><span style="color:#C3E88D;">charset = utf-8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;"># 4 space indentation</span></span>
<span class="line"><span style="color:#C3E88D;">[*.py]</span></span>
<span class="line"><span style="color:#C3E88D;">indent_style = space</span></span>
<span class="line"><span style="color:#C3E88D;">indent_size = 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;"># Tab indentation (no size specified)</span></span>
<span class="line"><span style="color:#C3E88D;">[Makefile]</span></span>
<span class="line"><span style="color:#C3E88D;">indent_style = tab</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;"># Indentation override for all JS under lib directory</span></span>
<span class="line"><span style="color:#C3E88D;">[lib/**.js]</span></span>
<span class="line"><span style="color:#C3E88D;">indent_style = space</span></span>
<span class="line"><span style="color:#C3E88D;">indent_size = 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;"># Matches the exact files either package.json or .travis.yml</span></span>
<span class="line"><span style="color:#C3E88D;">[{package.json,.travis.yml}]</span></span>
<span class="line"><span style="color:#C3E88D;">indent_style = space</span></span>
<span class="line"><span style="color:#C3E88D;">indent_size = 2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">EEE</span></span>
<span class="line"></span></code></pre></div>`,4),o=[p];function t(i,c,r,d,y,E){return a(),n("div",null,o)}var C=s(l,[["render",t]]);export{f as __pageData,C as default};
