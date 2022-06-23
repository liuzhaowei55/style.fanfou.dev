import{_ as s,c as a,o as e,d as n}from"./app.d0f031b7.js";const g=JSON.parse('{"title":"prettier","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"}],"relativePath":"js/prettier.md"}'),p={name:"js/prettier.md"},l=n(`<h1 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-hidden="true">#</a></h1><ul><li><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier Homepage</a></li><li><a href="https://github.com/umijs/fabric" target="_blank" rel="noopener noreferrer">umijs/fabric</a></li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add prettier prettier-plugin-organize-imports prettier-plugin-packagejson @umijs/fabric -D</span></span>
<span class="line"></span></code></pre></div><p>\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;font-style:italic;">EEE</span><span style="color:#C3E88D;"> &gt; .prettierrc.js</span></span>
<span class="line"><span style="color:#C3E88D;">const fabric = require(&#39;@umijs/fabric&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">module.exports = {</span></span>
<span class="line"><span style="color:#C3E88D;">  ...fabric.prettier,</span></span>
<span class="line"><span style="color:#C3E88D;">  plugins: [&#39;prettier-plugin-organize-imports&#39;, &#39;prettier-plugin-packagejson&#39;],</span></span>
<span class="line"><span style="color:#C3E88D;">};</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">EEE</span></span>
<span class="line"></span></code></pre></div><p>\u521B\u5EFA ignore \u6587\u4EF6</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;font-style:italic;">EEE</span><span style="color:#C3E88D;"> &gt; .prettierignore</span></span>
<span class="line"><span style="color:#C3E88D;"># Ignore artifacts:</span></span>
<span class="line"><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#C3E88D;">coverage</span></span>
<span class="line"><span style="color:#C3E88D;">*.html</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">EEE</span></span>
<span class="line"></span></code></pre></div>`,8),r=[l];function t(i,o,c,d,D,_){return e(),a("div",null,r)}var h=s(p,[["render",t]]);export{g as __pageData,h as default};
