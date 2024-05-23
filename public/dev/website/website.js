import{d as x}from"./chunk/m78c574d5c3843a3d.js";import{I as q}from"./chunk/m6cd080c8112b9076.js";import{I as z}from"./chunk/Icon.js";import{d as I,c as w,l as C,m as E,p as A,o as V,j as B,w as P,q as j,r as L,s as b,t as $,b as W,u as J}from"./chunk/mc55b2a42316522d6.js";import{J as T,v as M,w as R}from"./chunk/ma6cfd38af5d4c661.js";import{u as S,r as y}from"./chunk/m6bdda40d8bd2cf5a.js";import{_ as k}from"./chunk/_plugin-vue_export-helper.js";import{E as H}from"./chunk/EditorView.js";import{s as D,r as F}from"./chunk/strings.js";import{_ as G}from"./chunk/md825331c71ee2150.js";import{T as K,O as Q}from"./chunk/ToggleButton.js";import{S as U,N as X,A as Y,P as Z}from"./chunk/m581c48e44e04e5ef.js";import{$ as s}from"./chunk/ma0e3fbddd3785020.js";import{a as ee}from"./chunk/meafd55f6cf8bd331.js";import"./chunk/CloseButton.js";import"./chunk/m3fc8d974e5d8216d.js";import"./chunk/Button.js";import"./chunk/mdc6ac4cdbbe83890.js";import"./chunk/mfe0af77e95808869.js";const te=I({__name:"Icon.ce",props:{path:{},type:{},size:{},viewbox:{},flip:{},rotate:{},color:{}},setup(v){const d=v,t=q[d.path]??d.path,u=w(()=>({transform:"rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))",color:"var(--color)",width:"var(--size)",height:"var(--size)"}));return(i,o)=>(C(),E(z,T(A({...d,...i.$attrs,path:S(t),style:u.value})),null,16))}}),oe=`:host{height:var(--size)}
`,ne=k(te,[["styles",[oe]],["__file","Icon.ce.vue"]]);customElements.define("web-icon",x(ne));const se=I({__name:"EditorView.ce",props:{blocks:{}},setup(v){const d=v,t=B(),u=w(()=>{if(typeof d.blocks=="string")try{return JSON.parse(d.blocks)}catch{}return d.blocks});return V(()=>{var i;t.vnode.el.parentNode.host.shadowRoot.appendChild((i=document.querySelector("#main-css"))==null?void 0:i.cloneNode())}),(i,o)=>(C(),E(H,{content:u.value},null,8,["content"]))}}),ae=k(se,[["__file","EditorView.ce.vue"]]);customElements.define("web-view",x(ae));const re=["src","alt"],ie=I({__name:"Image.ce",props:{meta:{},fancybox:{type:[Boolean,String]}},setup(v){const d=v,t=JSON.parse(d.meta),u=y(d.fancybox);P(()=>d.fancybox,e=>{u.value=e},{deep:!0});const i=y(null),o=w(()=>{if(t!=null&&t.palette){const e=D(t==null?void 0:t.palette.map(F)).reverse(),l=[],f=e.length-1;return e.forEach((p,g)=>{let n=g*100/f;l.push(`${p.hex} ${n}%`)}),`radial-gradient(farthest-corner at center,${l.join(", ")})`}return"#fff"}),r=w(()=>{if(i.value){const e=parseInt((t==null?void 0:t.width)??"0");return e<i.value.offsetWidth?`${e}px`:`${i.value.offsetWidth}px`}return"auto"}),m=w(()=>{if(i.value){const e=parseInt((t==null?void 0:t.height)??"0"),l=parseInt((t==null?void 0:t.width)??"0");if(e>0&&l>0)return l<i.value.offsetWidth?`${e}px`:`${Math.ceil(i.value.offsetWidth*e/l)}px`}return"auto"}),a=()=>{var e,l;(l=(e=i.value)==null?void 0:e.remove)==null||l.call(e)},c=()=>{if(u.value&&(t!=null&&t.url)){const e={},l=[];typeof u.value=="string"?(e.groupAttr="fancybox",e.groupAll=!0,document.querySelectorAll(`[${e.groupAttr}=${u.value}]`).forEach((f,p)=>{const{url:g}=JSON.parse(f.meta);l.push({src:g}),g===(t==null?void 0:t.url)&&(e.startIndex=p)})):l.push({src:t==null?void 0:t.url}),G.show(l,e)}};return(e,l)=>{var f,p;return C(),j("figure",{ref_key:"wrapper",ref:i,class:M(["figure image",{"with-fancybox":u.value}]),style:R({background:o.value,width:r.value,height:m.value,margin:0}),onClick:c},[L("img",{src:(f=S(t))==null?void 0:f.url,class:"figure-img img-fluid",alt:(p=S(t))==null?void 0:p.size,loading:"lazy",onError:a,style:{"max-width":"100%"}},null,40,re)],6)}}}),ce=`.figure{--color: #fff;--bg: rgba(0, 0, 0, .7);position:relative}.figure.with-fancybox{cursor:pointer}.figure.with-fancybox:after{content:"Click to Enlarge";position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--bg);color:var(--color);z-index:-1;opacity:0;transition:all .25s ease}.figure:hover:after{z-index:1;opacity:1}
`,le=k(ie,[["styles",[ce]],["__file","Image.ce.vue"]]);customElements.define("web-image",x(le));const de=I({inheritAttrs:!1,__name:"OffCanvas.ce",emits:["close","closed","prevented","open","opened"],setup(v,{expose:d,emit:t}){const u=B(),i=y(null),o=y(null),r=y(null),m=n=>{r.value=n},a=n=>{t("close",n)},c=n=>{t("closed",n)},e=n=>{t("prevented",n)},l=n=>{t("open",n)},f=n=>{t("opened",n)},p=()=>{var n,h;(h=(n=o.value)==null?void 0:n.open)==null||h.call(n)},g=()=>{var n,h;(h=(n=r.value)==null?void 0:n.close)==null||h.call(n)};return d({open:p,close:g}),V(()=>{var n;i.value=document.documentElement.dataset.bsTheme,u.vnode.el.parentNode.host.open=p,u.vnode.el.parentNode.host.close=g,u.vnode.el.parentNode.host.shadowRoot.appendChild((n=document.querySelector("#main-css"))==null?void 0:n.cloneNode())}),(n,h)=>(C(),E(K,{ref_key:"toggleButton",ref:o},{default:b(()=>[$(n.$slots,"button")]),content:b(({element:N,closed:O})=>[W(Q,J({ref:_=>{N(_),m(_)}},n.$attrs,{native:"",class:{dark:i.value==="dark"},onClose:a,onClosed:_=>{O(),c(_)},onPrevented:e,onOpen:l,onOpened:f}),{title:b(()=>[$(n.$slots,"title")]),default:b(()=>[$(n.$slots,"default")]),_:2},1040,["class","onClosed"])]),_:3},512))}}),ue=`.dark .btn-close{filter:var(--bs-btn-close-white-filter)}
`,fe=k(de,[["styles",[ue]],["__file","OffCanvas.ce.vue"]]);customElements.define("web-offcanvas",x(fe));(()=>{function v(){ee.init(),d(),t(),u(),i()}document.addEventListener("readystatechange",async o=>{o.target.readyState==="complete"&&v()});function d(){const o=new U(".swiper",{modules:[X,Y,Z],direction:"horizontal",breakpoints:{300:{slidesPerView:4,spaceBetween:10},640:{slidesPerView:4,spaceBetween:20},768:{slidesPerView:6,spaceBetween:20},1024:{slidesPerView:8,spaceBetween:20},1366:{slidesPerView:8,spaceBetween:20}},slidesOffsetAfter:10,slidesOffsetBefore:10,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});o.on("slideChange",function(){let r=o.activeIndex+o.params.slidesPerView-1;o.slides[r].addEventListener("click",function(){o.slideNext()})})}function t(){s(document).ready(function(){var o=0,r=s(".carousel .card-product").length,m;function a(f){var p;typeof f=="number"?p=f:f==="prev"?p=(o-1+r)%r:p=(o+1)%r;var g=s(".carousel .card-product").eq(o),n=s(".carousel .card-product").eq(p);g.fadeOut("slow",function(){g.removeClass("active"),n.addClass("active").hide().fadeIn("slow"),o=p,l()})}function c(){m=setInterval(function(){a("next")},5e3)}function e(){clearInterval(m)}s(".carousel-dot").eq(o).addClass("active"),s(".carousel-dot").on("click",function(){var f=s(this).data("index");f!==o&&(e(),a(f),c())}),s("#prev-button").on("click",function(){e(),a("prev"),c()}),s("#next-button").on("click",function(){e(),a("next"),c()});function l(){s(".carousel-dot").removeClass("active"),s(".carousel-dot").eq(o).addClass("active")}s(".carousel .card-product").eq(o).addClass("active"),c()})}function u(){s(document).ready(function(){var o=0,r=window.carouselImages;s(".project-image").on("click",function(){}),s(".gallery-image").on("click",function(){s(".gallery-image").removeClass("selected"),s(this).addClass("selected"),s(".project-image img").fadeOut(500,function(){var a=r[o];s(".project-image img").attr("src",a),s(".project-image img").fadeIn(500)}),o=s(".gallery-image").index(this)});function m(a){a==="next"?o=(o+1)%r.length:a==="prev"&&(o=(o-1+r.length)%r.length),s(".project-image img").fadeOut(500,function(){var c=r[o];s(".project-image img").attr("src",c),s(".project-image img").fadeIn(500)}),s(".gallery-image").removeClass("selected"),s(".gallery-image").eq(o).addClass("selected")}s(".carousel-control-prev").on("click",function(){m("prev")}),s(".carousel-control-next").on("click",function(){m("next")})})}function i(){function o(r,m){var a=document.getElementById("mySwiper"),c=a==null?void 0:a.querySelectorAll(".swiper-slide");if(c)if(r<=7&&m>767){a==null||a.setAttribute("style","width: fit-content !important");for(var e=0;e<c.length;e++)c[e].classList.add("swiper-slide-custom")}else{a==null||a.setAttribute("style","width: 100% !important");for(var e=0;e<c.length;e++)c[e].classList.remove("swiper-slide-custom")}}window.onload=function(){var r=window.categoryLengths,m=window.innerWidth;o(r,m);var a=window.matchMedia("(max-width: 767px)");function c(e){o(r,e.matches?767:window.innerWidth)}a.addEventListener("change",c)}}})();
//# sourceMappingURL=website.js.map
