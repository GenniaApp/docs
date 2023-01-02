import{_ as o,c as n,a,b as s,d as e,o as l}from"./app.eaece4d9.js";const v=JSON.parse('{"title":"接收 / On","description":"","frontmatter":{},"headers":[{"level":2,"title":"reject_join","slug":"reject-join","link":"#reject-join","children":[]},{"level":2,"title":"server_info","slug":"server-info","link":"#server-info","children":[]},{"level":2,"title":"connect","slug":"connect","link":"#connect","children":[]},{"level":2,"title":"set_player_id","slug":"set-player-id","link":"#set-player-id","children":[]},{"level":2,"title":"room_message","slug":"room-message","link":"#room-message","children":[]},{"level":2,"title":"game_started","slug":"game-started","link":"#game-started","children":[]},{"level":2,"title":"game_update","slug":"game-update","link":"#game-update","children":[{"level":3,"title":"width 与 height","slug":"width-与-height","link":"#width-与-height","children":[]},{"level":3,"title":"gameMap 数据结构","slug":"gamemap-数据结构","link":"#gamemap-数据结构","children":[]},{"level":3,"title":"leaderBoard 数据结构","slug":"leaderboard-数据结构","link":"#leaderboard-数据结构","children":[]}]},{"level":2,"title":"attack_failure","slug":"attack-failure","link":"#attack-failure","children":[]},{"level":2,"title":"game_over","slug":"game-over","link":"#game-over","children":[]},{"level":2,"title":"game_ended","slug":"game-ended","link":"#game-ended","children":[]}],"relativePath":"bot-api/on.md","lastUpdated":1672664992000}'),p={name:"bot-api/on.md"},r=e('<h1 id="接收-on" tabindex="-1">接收 / <code>On</code> <a class="header-anchor" href="#接收-on" aria-hidden="true">#</a></h1><h2 id="reject-join" tabindex="-1"><code>reject_join</code> <a class="header-anchor" href="#reject-join" aria-hidden="true">#</a></h2><p>加入房间申请被拒绝。</p><p>含有两个参数：<code>title, message</code>，为拒绝理由（Gennia 只设计了一个玩家队列，不允许在游戏开始后加入房间）。</p><h2 id="server-info" tabindex="-1"><code>server_info</code> <a class="header-anchor" href="#server-info" aria-hidden="true">#</a></h2><p>服务器信息，含两个参数：<code>name, version</code>。分别为服务器名，版本号。通过发送 <code>query_server_info</code> 获取。</p><h2 id="connect" tabindex="-1"><code>connect</code> <a class="header-anchor" href="#connect" aria-hidden="true">#</a></h2><p>连接到服务器房间。</p><h2 id="set-player-id" tabindex="-1"><code>set_player_id</code> <a class="header-anchor" href="#set-player-id" aria-hidden="true">#</a></h2><p>含一个参数，为在加入房间后 Gennia 向你提供的 <code>playerId</code>。</p><h2 id="room-message" tabindex="-1"><code>room_message</code> <a class="header-anchor" href="#room-message" aria-hidden="true">#</a></h2><p>接收系统/玩家发布的聊天信息。</p><h2 id="game-started" tabindex="-1"><code>game_started</code> <a class="header-anchor" href="#game-started" aria-hidden="true">#</a></h2>',13),t=a("code",null,"playerColor",-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.04ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3111.6 1000","aria-hidden":"true"},d=e('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(389,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1166.8,0)"><path data-c="223C" d="M55 166Q55 241 101 304T222 367Q260 367 296 349T362 304T421 252T484 208T554 189Q616 189 655 236T694 338Q694 350 698 358T708 367Q722 367 722 334Q722 260 677 197T562 134H554Q517 134 481 152T414 196T355 248T292 293T223 311Q179 311 145 286Q109 257 96 218T80 156T69 133Q55 133 55 166Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(2222.6,0)"><path data-c="37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2722.6,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),h=[d],m=a("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mo",{stretchy:"false"},"("),a("mn",null,"0"),a("mo",null,"∼"),a("mn",null,"7"),a("mo",{stretchy:"false"},")")])],-1),y=e(`<h2 id="game-update" tabindex="-1"><code>game_update</code> <a class="header-anchor" href="#game-update" aria-hidden="true">#</a></h2><p>游戏更新。每个游戏刻都会下传。参数列表：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">gameMap</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Stringified</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">turn</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">leaderBoard</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Array</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="width-与-height" tabindex="-1"><code>width</code> 与 <code>height</code> <a class="header-anchor" href="#width-与-height" aria-hidden="true">#</a></h3><p>与原含义颠倒。<code>width</code> 代表竖向格子数，<code>height</code> 代表横向格子数。</p><h3 id="gamemap-数据结构" tabindex="-1"><code>gameMap</code> 数据结构 <a class="header-anchor" href="#gamemap-数据结构" aria-hidden="true">#</a></h3><p><code>String</code> 化的二维 <code>Array</code>。使用时需用 <code>JSON.parse()</code> 方式还原。</p><h3 id="leaderboard-数据结构" tabindex="-1"><code>leaderBoard</code> 数据结构 <a class="header-anchor" href="#leaderboard-数据结构" aria-hidden="true">#</a></h3><p>一维 <code>Array</code>。拥有如下属性：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">username</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">land</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">army</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="attack-failure" tabindex="-1"><code>attack_failure</code> <a class="header-anchor" href="#attack-failure" aria-hidden="true">#</a></h2><p>你发送的上一条 <code>attack</code> 请求不满足要求。</p><h2 id="game-over" tabindex="-1"><code>game_over</code> <a class="header-anchor" href="#game-over" aria-hidden="true">#</a></h2><p>含一个参数：<code>player</code>，表示你被该玩家攻占。通常需要与 <code>leave_game</code> 配合使用。</p><p><code>player</code> 为 <code>player Class</code>。</p><p>一个 <code>player Class</code> 含有以下属性：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">socket_id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">username</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">isRoomHost</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">forceStart</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">isDead</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">operatedTurn</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="game-ended" tabindex="-1"><code>game_ended</code> <a class="header-anchor" href="#game-ended" aria-hidden="true">#</a></h2><p>整场游戏结束。含一个参数：<code>player</code>，表示最后赢家。</p>`,19);function F(u,g,D,b,_,T){return l(),n("div",null,[r,a("p",null,[s("含一个参数："),t,s("，为你的颜色代号 "),a("mjx-container",c,[(l(),n("svg",i,h)),m]),s(" 。")]),y])}const Q=o(p,[["render",F]]);export{v as __pageData,Q as default};
