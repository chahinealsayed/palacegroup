import{c as u}from"../chunk/app.js";import{a as g}from"../chunk/api.js";import{$ as p}from"../chunk/ma0e3fbddd3785020.js";import{d as h,o as v,l as a,q as r,r as o,F as j,x as k,n as y}from"../chunk/mc55b2a42316522d6.js";import{r as x}from"../chunk/m6bdda40d8bd2cf5a.js";import{K as m}from"../chunk/ma6cfd38af5d4c661.js";import{_ as L}from"../chunk/_plugin-vue_export-helper.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m64d389f71fee61f4.js";import"../chunk/m14e047058b3edf4a.js";import"../chunk/m78c574d5c3843a3d.js";import"../chunk/m3fc8d974e5d8216d.js";import"../chunk/CloseButton.js";const E={class:"project-section"},A={class:"project-item"},B={class:"row"},I=["title"],O=["href"],q=o("div",{class:"overlay"},null,-1),C={class:"img"},D=["src"],F={class:"cat-title"},S={class:"project-title"},$={href:""},b=h({__name:"pagination",setup(M){const n=x([]),_=()=>{var i;const t=document.querySelectorAll(".category-link");t.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),t.forEach(d=>{d.classList.contains("active")&&d.classList.remove("active")}),e.classList.add("active");const c=e.dataset.cid;l(c)})}),(i=t.item(0))==null||i.click()},f=()=>{const t=document.getElementById("category-select");t.addEventListener("change",i=>{const s=(t==null?void 0:t.options[t.selectedIndex]).getAttribute("data-cid");console.log(s),l(s)})},l=(t="")=>{g().get(`/projects?expand=local,categories,categories.local&sort=position,local.title&cid=${t}`).then(({data:i})=>{p(".project-item").fadeOut(200,function(){n.value=i,y(()=>{p(".project-item").fadeIn(200)})})})};return v(()=>{_(),f()}),(t,i)=>(a(),r("div",null,[o("section",E,[o("section",A,[o("div",B,[(a(!0),r(j,null,k(n.value,e=>{var s,c;return a(),r("div",{key:e.id,class:"col-md-3"},[o("div",{class:"img-stuff",title:e.categories.at(0).local.title},[o("a",{href:e.url},[q,o("div",C,[o("img",{class:"project-image",src:(c=(s=e.attrs)==null?void 0:s.image)==null?void 0:c.url},null,8,D)]),o("div",F,m(e.categories.at(0).local.title),1),o("div",S,[o("a",$,m(e.local.title),1)])],8,O)],8,I)])}),128))])])])]))}}),w=L(b,[["__file","pagination.vue"]]),K=u("pagination",w);K.mount();
//# sourceMappingURL=pagination.js.map