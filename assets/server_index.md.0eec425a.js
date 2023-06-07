import{_ as s,c as n,o as e,d as a}from"./app.aa64290a.js";const A=JSON.parse('{"title":"GenniaServer","description":"","frontmatter":{},"headers":[],"relativePath":"server/index.md","lastUpdated":1672664992000}'),p={name:"server/index.md"},l=a(`<h1 id="genniaserver" tabindex="-1">GenniaServer <a class="header-anchor" href="#genniaserver" aria-hidden="true">#</a></h1><p>这是从 Gennia 中移植出来的一个单独的服务器模块。</p><p>它不依赖图形界面，只需要一个命令行，和 Node.js 相关套件即可运行。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:GenniaApp/GenniaServer.git</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GenniaServer</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>服务器会占用您的 <code>9016</code> 端口，请确保该端口没有任务占用，并配置相关安全组策略保证该端口对外开放。</p><p>或者，您可以自定义 <code>main.js</code> 中的 <code>global.serverConfig</code> 中的参数:</p><ul><li><code>name</code>: 您的服务器房间名（默认 <code>Gennia Server</code>）</li><li><code>port</code>：端口号（默认 <code>9016</code>）</li></ul>`,7),o=[l];function r(c,t,i,d,C,_){return e(),n("div",null,o)}const D=s(p,[["render",r]]);export{A as __pageData,D as default};