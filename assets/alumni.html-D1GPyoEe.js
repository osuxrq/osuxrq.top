import{g as F,_ as x,o as i,c as l,F as v,h as y,a as e,n as B,t as _,i as $,j as C,k as q,d as g,e as A,l as O,T as w,b as D}from"./app-DI_b7L6o.js";const P=F({__name:"Card",props:{users:{}},setup(c,{expose:s}){s();const o={handleImageError:a=>{const n=a.target;n.src="../public/images/defaultAvatar.png"},getCardClass:a=>a.disable?"user-card disable":a.stuff?"user-card stuff":"user-card"};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),z={class:"user-grid"},L=["href"],T=["src","alt"],j={class:"user-info"},H={class:"user-name"};function N(c,s,r,t,o,a){return i(),l("div",z,[!r.users||r.users.length===0?(i(),l(v,{key:0},y(4,n=>e("div",{key:n,class:"skeleton-card"},s[0]||(s[0]=[e("div",{class:"skeleton-avatar"},null,-1),e("div",{class:"skeleton-info"},[e("div",{class:"skeleton-name"}),e("div",{class:"skeleton-date"})],-1)]))),64)):(i(!0),l(v,{key:1},y(r.users,n=>(i(),l("div",{key:n.uid,class:B(t.getCardClass(n))},[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:`https://a.ppy.sh/${n.uid}`,alt:n.name,class:"user-avatar",onError:t.handleImageError},null,40,T),e("div",j,[e("span",H,_(n.name),1),$(c.$slots,"extra",{user:n},void 0,!0)])],8,L)],2))),128))])}const S=x(P,[["render",N],["__scopeId","data-v-ea6b7a07"],["__file","Card.vue"]]),b="https://xrq.365246692.xyz:40002/bot/alumni",I=F({__name:"AlumniList",setup(c,{expose:s}){s();const r=C({2023:[],2024:[]}),t=C(null),o=async()=>{try{const d=await(await fetch(b)).json(),p={};d.forEach(f=>{p[f]=r.value[f]||[]}),r.value=p,await Promise.all(Object.keys(p).map(a))}catch(u){console.error(u)}},a=async u=>{try{const d=await fetch(`${b}?year=${u}`);r.value[u]=await d.json()}catch(d){console.error(d)}},n=u=>{t.value=t.value===u?null:u},m=u=>{var k;if(t.value!==u||!document.querySelector(".panel-content"))return"0px";const p=((k=r.value[u])==null?void 0:k.length)||4;return`${32+p*70+(p-1)*16}px`},h=u=>`(${u.date[0]}/${u.date[1]}/${u.date[2]})`;q(()=>{o()});const E={url:b,userList:r,activeYear:t,loadYear:o,loadYearData:a,togglePanel:n,getMaxHeight:m,getTime:h,Card:S};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}}),M={class:"alumni-list"},R={class:"single-year-panel"},U=["onClick"],Y={class:"user-date"};function V(c,s,r,t,o,a){return i(),l("div",M,[(i(!0),l(v,null,y(t.userList,(n,m)=>(i(),l("div",{key:m,class:"panel"},[e("div",R,[e("button",{onClick:h=>t.togglePanel(m),class:"panel-header"},_(m)+" 年 ",9,U),g(w,{name:"slide-fade"},{default:A(()=>[e("div",{class:"panel-content",style:O({maxHeight:t.getMaxHeight(m)})},[g(t.Card,{users:n},{extra:A(({user:h})=>[e("span",Y,_(t.getTime(h)),1)]),_:2},1032,["users"])],4)]),_:2},1024)])]))),128))])}const J=x(I,[["render",V],["__file","AlumniList.vue"]]),Q=F({__name:"alumni.html",setup(c,{expose:s}){s();const t={contributors:[{stuff:!0,uid:"35628968",name:"SisypheOvO",url:"https://osu.ppy.sh/users/35628968",contribution:"调整网站样式"},{stuff:!0,uid:"13552636",name:"- E C -",url:"https://osu.ppy.sh/users/13552636",contribution:"制作集锦"},{stuff:!0,uid:"17268434",name:"PercyDan",url:"https://osu.ppy.sh/users/17268434",contribution:"制作集锦"},{disable:!0,uid:"19755783",name:"Vup",url:"https://osu.ppy.sh/users/19755783",contribution:`曾作为qq bot
现账号已封禁`}],AlumniList:J,Card:S};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),G={class:"contribution",style:{"white-space":"pre-line"}};function K(c,s,r,t,o,a){return i(),l("div",null,[s[0]||(s[0]=e("h1",{id:"名人堂",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#名人堂"},[e("span",null,"名人堂")])],-1)),s[1]||(s[1]=e("h2",{id:"🚀-达到高阶群出群条件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#🚀-达到高阶群出群条件"},[e("span",null,"🚀 达到高阶群出群条件")])],-1)),g(t.AlumniList),s[2]||(s[2]=e("h2",{id:"✨-做出卓越贡献",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#✨-做出卓越贡献"},[e("span",null,"✨ 做出卓越贡献")])],-1)),g(t.Card,{users:t.contributors},{extra:A(({user:n})=>[e("span",G,_(n.contribution),1)]),_:1}),s[3]||(s[3]=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[e("strong",null,[D("尚未在名人堂找到自己？请"),e("a",{href:"https://docs.qq.com/form/page/DUnV4TlRPUUNTQ2FO",target:"_blank",rel:"noopener noreferrer"},"点此填写表单"),D("进行登记。")])])],-1))])}const Z=x(Q,[["render",K],["__file","alumni.html.vue"]]),ee=JSON.parse('{"path":"/people/alumni.html","title":"名人堂","lang":"zh-CN","frontmatter":{"title":"名人堂","lang":"zh-CN"},"headers":[{"level":2,"title":"🚀 达到高阶群出群条件","slug":"🚀-达到高阶群出群条件","link":"#🚀-达到高阶群出群条件","children":[]},{"level":2,"title":"✨ 做出卓越贡献","slug":"✨-做出卓越贡献","link":"#✨-做出卓越贡献","children":[]}],"git":{"updatedTime":1732595199000,"contributors":[{"name":"SisypheOvO","email":"148706053+SisypheOvO@users.noreply.github.com","commits":1,"url":"https://github.com/SisypheOvO"},{"name":"Sisyphus","email":"benwhr@qq.com","commits":2,"url":"https://github.com/Sisyphus"},{"name":"spring","email":"365246692.@qq.com","commits":4,"url":"https://github.com/spring"},{"name":"SIyuyuko","email":"3228981717@qq.com","commits":15,"url":"https://github.com/SIyuyuko"},{"name":"huanying","email":"63566224+osuying@users.noreply.github.com","commits":1,"url":"https://github.com/huanying"},{"name":"Rainmory","email":"49900967+Amenoe@users.noreply.github.com","commits":1,"url":"https://github.com/Rainmory"},{"name":"Pagerd","email":"1172482284@qq.com","commits":1,"url":"https://github.com/Pagerd"},{"name":"RainbowUsagi","email":"rainbowusagi0x0@gmail.com","commits":1,"url":"https://github.com/RainbowUsagi"},{"name":"YumeMuzi","email":"77779996+YumeMuzi@users.noreply.github.com","commits":3,"url":"https://github.com/YumeMuzi"}]},"filePathRelative":"people/alumni.md"}');export{Z as comp,ee as data};
