import{_ as t,c as a,a as e,b as s,d as o,o as n}from"./app.eaece4d9.js";const w=JSON.parse('{"title":"发送 / Emit","description":"","frontmatter":{},"headers":[{"level":2,"title":"query_server_info","slug":"query-server-info","link":"#query-server-info","children":[]},{"level":2,"title":"set_username","slug":"set-username","link":"#set-username","children":[]},{"level":2,"title":"player_message","slug":"player-message","link":"#player-message","children":[]},{"level":2,"title":"attack","slug":"attack","link":"#attack","children":[]}],"relativePath":"bot-api/emit.md","lastUpdated":1672664992000}'),l={name:"bot-api/emit.md"},r=o(`<h1 id="发送-emit" tabindex="-1">发送 / <code>Emit</code> <a class="header-anchor" href="#发送-emit" aria-hidden="true">#</a></h1><h2 id="query-server-info" tabindex="-1"><code>query_server_info</code> <a class="header-anchor" href="#query-server-info" aria-hidden="true">#</a></h2><p>向 Gennia 请求服务器信息。服务器会返回 <code>server_info</code>。</p><h2 id="set-username" tabindex="-1"><code>set_username</code> <a class="header-anchor" href="#set-username" aria-hidden="true">#</a></h2><p>这个是你愿意加入游戏的标志。</p><p>发送一个参数 <code>username</code>（可以与他人重复）。发送后您会接收到 <code>set_player_id</code>。就是您的 <code>playerId</code>。</p><h2 id="player-message" tabindex="-1"><code>player_message</code> <a class="header-anchor" href="#player-message" aria-hidden="true">#</a></h2><p>发送一个参数 <code>message</code>。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>您只能在游戏<strong>开始前</strong>发送聊天请求</p></div><h2 id="attack" tabindex="-1"><code>attack</code> <a class="header-anchor" href="#attack" aria-hidden="true">#</a></h2><p>需要包含三个参数：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">from</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Point</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">to</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Point</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">half</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其中 <code>Point</code> 类含两个属性：<code>x, y</code>。</p><p><code>half</code> 代表你是否希望进行半数攻击。</p>`,14),c={class:"tip custom-block"},i=e("p",{class:"custom-block-title"},"提示",-1),p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.131ex",height:"1.507ex",role:"img",focusable:"false",viewBox:"0 -666 500 666","aria-hidden":"true"},h=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mn"},[e("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})])])],-1),m=[h],u=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mn",null,"1")])],-1),_=e("code",null,"attack_failure",-1);function y(b,x,g,v,f,F){return n(),a("div",null,[r,e("div",c,[i,e("p",null,[s("您 "),e("mjx-container",p,[(n(),a("svg",d,m)),u]),s(" 游戏刻内只能进行一次攻击。后面几次 Gennia 不会接收，而是返回 "),_,s("。")])])])}const D=t(l,[["render",y]]);export{w as __pageData,D as default};
