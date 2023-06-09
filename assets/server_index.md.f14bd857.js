import{_ as s,c as n,o as a,d as e}from"./app.aa64290a.js";const m=JSON.parse('{"title":"GenniaServer","description":"","frontmatter":{},"headers":[{"level":2,"title":"建立持续运行的 systemctl 服务","slug":"建立持续运行的-systemctl-服务","link":"#建立持续运行的-systemctl-服务","children":[]}],"relativePath":"server/index.md","lastUpdated":1686278249000}'),l={name:"server/index.md"},p=e(`<h1 id="genniaserver" tabindex="-1">GenniaServer <a class="header-anchor" href="#genniaserver" aria-hidden="true">#</a></h1><p>这是从 Gennia 中移植出来的一个单独的服务器模块。</p><p>它不依赖图形界面，只需要一个命令行，和 Node.js 相关套件即可运行。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:GenniaApp/GenniaServer.git</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GenniaServer</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app.js</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">roomName</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code>roomName</code>: 您的服务器房间名（默认 <code>GenniaServer</code>）</li><li><code>port</code>：端口号（默认 <code>9016</code>）</li></ul><p>服务器会占用您的 <code>[port]</code> 端口，请确保该端口没有任务占用，并配置相关安全组策略保证该端口对外开放。</p><h2 id="建立持续运行的-systemctl-服务" tabindex="-1">建立持续运行的 <code>systemctl</code> 服务 <a class="header-anchor" href="#建立持续运行的-systemctl-服务" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/lib/systemd/system/gennia-server.service</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-ini line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[Unit]</span></span>
<span class="line"><span style="color:#F07178;">Description</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Gennia Server Backend Service</span></span>
<span class="line"><span style="color:#F07178;">After</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">network.target network-online.target syslog.target</span></span>
<span class="line"><span style="color:#F07178;">Wants</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">network.target network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[Service]</span></span>
<span class="line"><span style="color:#F07178;">Type</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">simple</span></span>
<span class="line"><span style="color:#F07178;">ExecStart</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">node /path/to/GenniaServer/main.js GenniaLobby1 8080</span></span>
<span class="line"><span style="color:#F07178;">RemainAfterExit</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[Install]</span></span>
<span class="line"><span style="color:#F07178;">WantedBy</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">multi-user.target</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,9),o=[p];function r(t,c,i,d,y,C){return a(),n("div",null,o)}const b=s(l,[["render",r]]);export{m as __pageData,b as default};
