import{a as f}from"../chunk/app.js";import{I as l}from"../chunk/Icon.js";import{i as c}from"../chunk/m6cd080c8112b9076.js";import{d as y,a as s,f as t,F as o,g as _,k as p,v as a,A}from"../chunk/mc55b2a42316522d6.js";import{n as u,K as v}from"../chunk/ma6cfd38af5d4c661.js";import{_ as k}from"../chunk/_plugin-vue_export-helper.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m64d389f71fee61f4.js";import"../chunk/m14e047058b3edf4a.js";import"../chunk/m6bdda40d8bd2cf5a.js";import"../chunk/m78c574d5c3843a3d.js";const M={class:"menu"},g=["href"],b=["innerHTML"],H={class:"heading"},L={class:"sub-menu"},T=["href"],x=["innerHTML"],B=y({__name:"Menu",props:{list:{}},setup(V){const d=r=>r.filter(i=>i[2]).length>0;return(r,i)=>(s(),t("ul",M,[(s(!0),t(o,null,_(r.list,(e,h)=>(s(),t("li",{key:h,class:u({"has-sub-menu":!Array.isArray(e),active:Array.isArray(e)?e[3]:d(e.items)})},[Array.isArray(e)?(s(),t("a",{key:0,href:e[2]},[p(l,{path:c[e[0]]},null,8,["path"]),a("span",{class:"title",innerHTML:e[1]},null,8,b)],8,g)):(s(),t(o,{key:1},[a("div",H,[p(l,{path:c[e.title[0]]},null,8,["path"]),A(v(e.title[1]),1)]),a("ul",L,[(s(!0),t(o,null,_(e.items,(n,m)=>(s(),t("li",{key:m,class:u({active:n[2]})},[a("a",{href:n[1]},[a("span",{class:"title",innerHTML:n[0]},null,8,x)],8,T)],2))),128))])],64))],2))),128))]))}});const C=k(B,[["__scopeId","data-v-5b56eaba"],["__file","Menu.vue"]]),N=f("menu",C);N.mount();
//# sourceMappingURL=menu.js.map