import{_ as d,M as s,p as a,q as g,R as t,t as e,N as l,V as r,a1 as c}from"./framework-5866ffd3.js";const i={},x=t("h1",{id:"活动",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#活动","aria-hidden":"true"},"#"),e(" 活动")],-1),y=t("p",null,[e("新人群经常举办各种活动。其中主要由管理层举办的活动有："),t("strong",null,"群赛"),e("、"),t("strong",null,"悬赏"),e("、"),t("strong",null,"集锦"),e("。")],-1),o=t("h2",{id:"群赛",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#群赛","aria-hidden":"true"},"#"),e(" 群赛")],-1),h=c('<p><strong>群赛</strong> (matches，通常简称为 ocnc) 即新人群群赛，允许新人群主群的玩家参与。玩家报名通过后，在开赛时，需要在多人游戏房间内逐个游玩指定的谱面，最后管理员会按照玩家所属分段统计分数，并根据分数发放对应的奖励。</p><p>开赛前，会根据玩家所属的 <strong>PP 分段</strong>，发放对应的谱面包。PP 越低，提前知道的谱面就越多。</p><p>部分谱面有多次机会，可在群赛开始后<strong>多次游玩</strong>，统计分数时会以较高的分数为准。</p><p>所有参与者均完成游玩后，管理员会根据玩家所属的 <strong>PP 分段</strong>，<strong>加权修正</strong>玩家的总分。最后根据<strong>分段内排名</strong>和<strong>总排名</strong>选出<strong>优胜</strong>和<strong>冠军</strong>。</p><h3 id="赛图类型" tabindex="-1"><a class="header-anchor" href="#赛图类型" aria-hidden="true">#</a> 赛图类型</h3><table><thead><tr><th style="text-align:center;">赛图简称</th><th style="text-align:center;">内部名称</th><th style="text-align:center;">数量</th><th style="text-align:center;">机会</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>NP</strong></td><td style="text-align:center;">新手追加</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">提供给新人群中 PP 较低的玩家，以获得更高的奖励分数</td></tr><tr><td style="text-align:center;"><strong>NS</strong></td><td style="text-align:center;">常规短图</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td><td style="text-align:center;">比较简单的短图，考验玩家对一般谱面的处理能力</td></tr><tr><td style="text-align:center;"><strong>DT</strong></td><td style="text-align:center;">DT 图</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td><td style="text-align:center;">还细分为常规 DT 和高难 DT</td></tr><tr><td style="text-align:center;"><strong>NL</strong></td><td style="text-align:center;">常规长图</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">比较简单的长图，考验玩家的稳定性</td></tr><tr><td style="text-align:center;"><strong>ACC</strong></td><td style="text-align:center;">ACC 图</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">注意：<strong>accuracy 计分</strong> (scoreV1)，考验玩家的准确度</td></tr><tr><td style="text-align:center;"><strong>HL</strong></td><td style="text-align:center;">高难长图</td><td style="text-align:center;">2</td><td style="text-align:center;">1</td><td style="text-align:center;">比较困难的长图，考验玩家的练图强度</td></tr><tr><td style="text-align:center;"><strong>HS</strong></td><td style="text-align:center;">高难短图</td><td style="text-align:center;">1</td><td style="text-align:center;">2</td><td style="text-align:center;">比较困难的短图，考验玩家的上限</td></tr><tr><td style="text-align:center;"><strong>HP</strong></td><td style="text-align:center;">高手追加</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">提供给新人群中 PP 较高的玩家，以获得更高的奖励分数</td></tr><tr><td style="text-align:center;"><em>FL</em></td><td style="text-align:center;">FL 图</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">注意：<strong>scoreV1 计分</strong>，通常很简单，考验玩家的即时记忆能力</td></tr><tr><td style="text-align:center;"><em>MM</em></td><td style="text-align:center;">背板图</td><td style="text-align:center;">1</td><td style="text-align:center;">5</td><td style="text-align:center;">注意：<strong>scoreV1 计分</strong>，通常很简单，考验玩家的即时记忆能力</td></tr></tbody></table><p><em>备注：NP、HP 通常不允许开启其他任何模组 (即强制 NoMod)，其他赛图可以自由开启模组 (即 FreeMod，允许使用的模组有：HD HR FL)，来争取获得更高的分数。</em></p><p><em>备注：FL 和 MM 图通常在新人群群赛中不会出现，只会在部分群赛中偶尔替换掉上述加粗的赛图。</em></p><p><em>备注：ACC 图的赋分方式为：统计所有参与者在这张谱面上的准确率，再按照从高到低的顺序赋予 100 万到 0 分之间的一个值。</em></p><h3 id="玩家分段" tabindex="-1"><a class="header-anchor" href="#玩家分段" aria-hidden="true">#</a> 玩家分段</h3><table><thead><tr><th style="text-align:center;">分段编号</th><th style="text-align:center;">PP 分段</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>A</strong></td><td style="text-align:center;">0 - 999</td></tr><tr><td style="text-align:center;"><strong>B</strong></td><td style="text-align:center;">1000 - 1299</td></tr><tr><td style="text-align:center;"><strong>C</strong></td><td style="text-align:center;">1300 - 1599</td></tr><tr><td style="text-align:center;"><strong>D</strong></td><td style="text-align:center;">1600 - 1999</td></tr><tr><td style="text-align:center;"><strong>E</strong></td><td style="text-align:center;">2000 - 2399</td></tr><tr><td style="text-align:center;"><strong>F</strong></td><td style="text-align:center;">2400 - 2799</td></tr></tbody></table><h3 id="赋分倍率" tabindex="-1"><a class="header-anchor" href="#赋分倍率" aria-hidden="true">#</a> 赋分倍率</h3><table><thead><tr><th style="text-align:center;">分段编号</th><th style="text-align:center;">NP</th><th style="text-align:center;">NS1</th><th style="text-align:center;">NDT</th><th style="text-align:center;">NS2</th><th style="text-align:center;">NL</th><th style="text-align:center;">ACC</th><th style="text-align:center;">HL1</th><th style="text-align:center;">HDT</th><th style="text-align:center;">HL2</th><th style="text-align:center;">HP</th><th style="text-align:center;">FL/MM</th><th style="text-align:center;">理论总分</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>A</strong></td><td style="text-align:center;">1</td><td style="text-align:center;">1.4</td><td style="text-align:center;">1.4</td><td style="text-align:center;">1.4</td><td style="text-align:center;">1.4</td><td style="text-align:center;">1.4</td><td style="text-align:center;">1.4</td><td style="text-align:center;">1.4</td><td style="text-align:center;">1.4</td><td style="text-align:center;">0</td><td style="text-align:center;">1.4</td><td style="text-align:center;"><strong>1360w</strong></td></tr><tr><td style="text-align:center;"><strong>B</strong></td><td style="text-align:center;">0.7</td><td style="text-align:center;">1</td><td style="text-align:center;">1.3</td><td style="text-align:center;">1.3</td><td style="text-align:center;">1.3</td><td style="text-align:center;">1.3</td><td style="text-align:center;">1.3</td><td style="text-align:center;">1.3</td><td style="text-align:center;">1.3</td><td style="text-align:center;">0</td><td style="text-align:center;">1.3</td><td style="text-align:center;"><strong>1210w</strong></td></tr><tr><td style="text-align:center;"><strong>C</strong></td><td style="text-align:center;">0.4</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1.2</td><td style="text-align:center;">1.2</td><td style="text-align:center;">1.2</td><td style="text-align:center;">1.2</td><td style="text-align:center;">1.2</td><td style="text-align:center;">1.2</td><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;"><strong>1060w</strong></td></tr><tr><td style="text-align:center;"><strong>D</strong></td><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1.1</td><td style="text-align:center;">1</td><td style="text-align:center;">1.1</td><td style="text-align:center;">1.1</td><td style="text-align:center;">1.1</td><td style="text-align:center;">0.4</td><td style="text-align:center;">1</td><td style="text-align:center;"><strong>980w</strong></td></tr><tr><td style="text-align:center;"><strong>E</strong></td><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">0.7</td><td style="text-align:center;">1</td><td style="text-align:center;"><strong>970w</strong></td></tr><tr><td style="text-align:center;"><strong>F</strong></td><td style="text-align:center;">0</td><td style="text-align:center;">0.9</td><td style="text-align:center;">0.9</td><td style="text-align:center;">0.9</td><td style="text-align:center;">0.9</td><td style="text-align:center;">0.9</td><td style="text-align:center;">0.9</td><td style="text-align:center;">0.9</td><td style="text-align:center;">0.9</td><td style="text-align:center;">1</td><td style="text-align:center;">0.9</td><td style="text-align:center;"><strong>910w</strong></td></tr></tbody></table><p><em>备注：本表采用的是第 26 届群赛的赋分倍率。不同届群赛，赋分倍率可能会有细微调整。</em></p><h2 id="悬赏" tabindex="-1"><a class="header-anchor" href="#悬赏" aria-hidden="true">#</a> 悬赏</h2>',15),_=t("p",null,[t("strong",null,"悬赏"),e(" (charts) 即需要参与者挑战某张或多张谱面，并争取奖励的活动。若玩家达成悬赏所属的要求或排名靠前，即可获得悬赏对应的奖励。")],-1),p=t("h2",{id:"集锦",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#集锦","aria-hidden":"true"},"#"),e(" 集锦")],-1),u=t("p",null,[t("strong",null,"集锦"),e(" (collections) 即管理员收集参与者的游戏回放，制作视频并发至视频网站，供大家鉴赏的活动。")],-1);function m(b,P){const n=s("RouterLink");return a(),g("div",null,[x,y,o,t("p",null,[e("参见："),l(n,{to:"/events/matches/"},{default:r(()=>[e("群赛列表")]),_:1})]),h,t("p",null,[e("参见："),l(n,{to:"/events/charts/"},{default:r(()=>[e("悬赏列表")]),_:1})]),_,p,t("p",null,[e("参见："),l(n,{to:"/events/collections/"},{default:r(()=>[e("集锦列表")]),_:1})]),u])}const N=d(i,[["render",m],["__file","index.html.vue"]]);export{N as default};