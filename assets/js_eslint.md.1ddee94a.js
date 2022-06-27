import{_ as s,c as a,o as n,a as e}from"./app.98a88fc5.js";const D=JSON.parse('{"title":"ESLint","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"js/eslint.md"}'),l={name:"js/eslint.md"},p=e(`<h1 id="eslint" tabindex="-1">ESLint <a class="header-anchor" href="#eslint" aria-hidden="true">#</a></h1><ul><li><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint Homepage</a></li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install eslint @umijs/fabric --save-dev</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;font-style:italic;">EEE</span><span style="color:#C3E88D;"> &gt; .eslintrc.js</span></span>
<span class="line"><span style="color:#C3E88D;">const fabric = require(&#39;@umijs/fabric&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">module.exports = {</span></span>
<span class="line"><span style="color:#C3E88D;">  extends: [require.resolve(&#39;@umijs/fabric/dist/eslint&#39;)],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">  rules: {</span></span>
<span class="line"><span style="color:#C3E88D;">    // your rules</span></span>
<span class="line"><span style="color:#C3E88D;">  },</span></span>
<span class="line"><span style="color:#C3E88D;">};</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">EEE</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">eslint </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/**</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div>`,8),t=[p];function c(r,o,i,d,h,_){return n(),a("div",null,t)}var y=s(l,[["render",c]]);export{D as __pageData,y as default};
