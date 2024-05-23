import{d as N,w as D}from"./chunk/m78c574d5c3843a3d.js";import{i as U}from"./chunk/m6cd080c8112b9076.js";import{I as F}from"./chunk/Icon.js";import{d as $,c as C,a as y,b as R,t as M,p as T,q as j,w as K,f as I,v as L,x as G,T as Q,o as X,e as k,r as b,y as z,k as A,z as V,j as Y,n as S,F as Z}from"./chunk/mc55b2a42316522d6.js";import{J as ee,n as te,y as oe,K as ne}from"./chunk/ma6cfd38af5d4c661.js";import{u as P,r as p}from"./chunk/m6bdda40d8bd2cf5a.js";import{_ as E}from"./chunk/_plugin-vue_export-helper.js";import{E as se}from"./chunk/EditorView.js";import{s as ae,r as re,B as le}from"./chunk/Button.js";import{_ as ce}from"./chunk/md825331c71ee2150.js";import{C as ie}from"./chunk/CloseButton.js";import{O as fe}from"./chunk/m3fc8d974e5d8216d.js";import"./chunk/m110db13e4dc1cf62.js";const ue="modulepreload",de=function(u,a){return new URL(u,a).href},J={},ve=function(a,t,n){if(!t||t.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(t.map(l=>{if(l=de(l,n),l in J)return;J[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!n)for(let o=s.length-1;o>=0;o--){const r=s[o];if(r.href===l&&(!c||r.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ue,c||(f.as="script",f.crossOrigin=""),f.href=l,document.head.appendChild(f),c)return new Promise((o,r)=>{f.addEventListener("load",o),f.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>a()).catch(l=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l})};const pe=$({__name:"Icon.ce",props:{path:{},type:{},size:{},viewbox:{},flip:{},rotate:{},color:{}},setup(u){const a=u,t=U[a.path]??a.path,n=C(()=>({transform:"rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))",color:"var(--color)",width:"var(--size)",height:"var(--size)"}));return(s,l)=>(y(),R(F,ee(M({...a,...s.$attrs,path:P(t),style:n.value})),null,16))}}),he=`:host{height:var(--size)}
`,me=E(pe,[["styles",[he]],["__file","Icon.ce.vue"]]);customElements.define("web-icon",N(me));const _e=$({__name:"EditorView.ce",props:{blocks:{}},setup(u){const a=u,t=j(),n=C(()=>{if(typeof a.blocks=="string")try{return JSON.parse(a.blocks)}catch{}return a.blocks});return T(()=>{var s;t.vnode.el.parentNode.host.shadowRoot.appendChild((s=document.querySelector("#main-css"))==null?void 0:s.cloneNode())}),(s,l)=>(y(),R(se,{content:n.value},null,8,["content"]))}}),ge=E(_e,[["__file","EditorView.ce.vue"]]);customElements.define("web-view",N(ge));const ye=["src","alt"],be=$({__name:"Image.ce",props:{meta:{},fancybox:{type:[Boolean,String]}},setup(u){const a=u,t=JSON.parse(a.meta),n=p(a.fancybox);K(()=>a.fancybox,o=>{n.value=o},{deep:!0});const s=p(null),l=C(()=>{if(t!=null&&t.palette){const o=ae(t==null?void 0:t.palette.map(re)).reverse(),r=[],m=o.length-1;return o.forEach((v,_)=>{let e=_*100/m;r.push(`${v.hex} ${e}%`)}),`radial-gradient(farthest-corner at center,${r.join(", ")})`}return"#fff"}),c=C(()=>{if(s.value){const o=parseInt((t==null?void 0:t.width)??"0");return o<s.value.offsetWidth?`${o}px`:`${s.value.offsetWidth}px`}return"auto"}),h=C(()=>{if(s.value){const o=parseInt((t==null?void 0:t.height)??"0"),r=parseInt((t==null?void 0:t.width)??"0");if(o>0&&r>0)return r<s.value.offsetWidth?`${o}px`:`${Math.ceil(s.value.offsetWidth*o/r)}px`}return"auto"}),i=()=>{var o,r;(r=(o=s.value)==null?void 0:o.remove)==null||r.call(o)},f=()=>{if(n.value&&(t!=null&&t.url)){const o={},r=[];typeof n.value=="string"?(o.groupAttr="fancybox",o.groupAll=!0,document.querySelectorAll(`[${o.groupAttr}=${n.value}]`).forEach((m,v)=>{const{url:_}=JSON.parse(m.meta);r.push({src:_}),_===(t==null?void 0:t.url)&&(o.startIndex=v)})):r.push({src:t==null?void 0:t.url}),ce.show(r,o)}};return(o,r)=>{var m,v;return y(),I("figure",{ref_key:"wrapper",ref:s,class:te(["figure image",{"with-fancybox":n.value}]),style:oe({background:l.value,width:c.value,height:h.value,margin:0}),onClick:f},[L("img",{src:(m=P(t))==null?void 0:m.url,class:"figure-img img-fluid",alt:(v=P(t))==null?void 0:v.size,loading:"lazy",onError:i,style:{"max-width":"100%"}},null,40,ye)],6)}}}),we=`.figure{--color: #fff;--bg: rgba(0, 0, 0, .7);position:relative}.figure.with-fancybox{cursor:pointer}.figure.with-fancybox:after{content:"Click to Enlarge";position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--bg);color:var(--color);z-index:-1;opacity:0;transition:all .25s ease}.figure:hover:after{z-index:1;opacity:1}
`,ke=E(be,[["styles",[we]],["__file","Image.ce.vue"]]);customElements.define("web-image",N(ke));const $e={key:0,class:"offcanvas-header"},Ee={key:0,class:"offcanvas-title"},Ce={class:"offcanvas-body"},xe=$({inheritAttrs:!1,__name:"Offcanvas",props:{title:{default:""},placement:{default:"start"},responsive:{default:null},backdrop:{type:[Boolean,String],default:"static"},keyboard:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},native:{type:Boolean,default:!1}},emits:["close","closed","prevented","open","opened"],setup(u,{expose:a,emit:t}){G();const n=p(null),s=p(null),l=p(!1),c=p(u.native?"div":Q),h=e=>{t("close",e)},i=e=>{t("closed",e)},f=e=>{t("prevented",e)},o=e=>{t("open",e)},r=e=>{t("opened",e)},m=()=>{s.value=new fe(n.value,{backdrop:u.backdrop,keyboard:u.keyboard,scroll:u.scroll}),n.value.addEventListener("hide.bs.offcanvas",h),n.value.addEventListener("hidden.bs.offcanvas",i),n.value.addEventListener("hidePrevented.bs.offcanvas",f),n.value.addEventListener("show.bs.offcanvas",o),n.value.addEventListener("shown.bs.offcanvas",r)},v=()=>{var e,d;(d=(e=s.value)==null?void 0:e.show)==null||d.call(e)},_=()=>{l.value=!0,S(()=>{var e,d;(d=(e=s.value)==null?void 0:e.hide)==null||d.call(e),setTimeout(()=>{l.value=!1},300)})};return a({open:v,close:_}),T(()=>{m()}),X(()=>{var e,d,w,x,g,q,B,H,O,W;(d=(e=n.value)==null?void 0:e.removeEventListener)==null||d.call(e,"hide.bs.offcanvas",h),(x=(w=n.value)==null?void 0:w.removeEventListener)==null||x.call(w,"hidden.bs.offcanvas",i),(q=(g=n.value)==null?void 0:g.removeEventListener)==null||q.call(g,"hidePrevented.bs.offcanvas",f),(H=(B=n.value)==null?void 0:B.removeEventListener)==null||H.call(B,"show.bs.offcanvas",o),(W=(O=n.value)==null?void 0:O.removeEventListener)==null||W.call(O,"shown.bs.offcanvas",r)}),(e,d)=>(y(),R(Y(c.value),{to:"body"},{default:k(()=>[L("div",V({ref_key:"offcanvasRef",ref:n,class:{[`offcanvas${e.responsive?"-${responsive}":""}`]:!0,[`offcanvas-${e.placement}`]:!0,show:!0,closing:l.value},tabindex:"-1","aria-labelledby":"offcanvasLabel"},e.$attrs),[e.noHeader?z("",!0):(y(),I("div",$e,[e.$slots.title||e.title?(y(),I("div",Ee,[b(e.$slots,"title",{},()=>[L("h5",null,ne(e.title),1)])])):z("",!0),A(ie,{onClick:D(_,["prevent","stop"]),class:"ms-auto"},null,8,["onClick"])])),L("div",Ce,[b(e.$slots,"default")])],16)]),_:3}))}});const Be=E(xe,[["__file","Offcanvas.vue"]]),Oe=$({inheritAttrs:!1,__name:"ToggleButton",emits:["open","close"],setup(u,{expose:a,emit:t}){const n=p(null),s=p(!1),l=()=>{s.value=!0,S(()=>{var i,f;(f=(i=n.value)==null?void 0:i.open)==null||f.call(i),S(()=>{var o,r;(r=(o=n.value)==null?void 0:o.update)==null||r.call(o),S(()=>{t("open")})})})},c=i=>{n.value=i},h=()=>{s.value=!1,t("close")};return a({open:l}),(i,f)=>(y(),I(Z,null,[A(le,V({onClick:l},i.$attrs),{default:k(()=>[b(i.$slots,"default")]),_:3},16),s.value?b(i.$slots,"content",{key:0,element:c,closed:h}):z("",!0)],64))}}),Le=E(Oe,[["__file","ToggleButton.vue"]]),Se=$({inheritAttrs:!1,__name:"OffCanvas.ce",emits:["close","closed","prevented","open","opened"],setup(u,{expose:a,emit:t}){const n=j(),s=p(null),l=p(null),c=p(null),h=e=>{c.value=e},i=e=>{t("close",e)},f=e=>{t("closed",e)},o=e=>{t("prevented",e)},r=e=>{t("open",e)},m=e=>{t("opened",e)},v=()=>{var e,d;(d=(e=l.value)==null?void 0:e.open)==null||d.call(e)},_=()=>{var e,d;(d=(e=c.value)==null?void 0:e.close)==null||d.call(e)};return a({open:v,close:_}),T(()=>{var e;s.value=document.documentElement.dataset.bsTheme,n.vnode.el.parentNode.host.open=v,n.vnode.el.parentNode.host.close=_,n.vnode.el.parentNode.host.shadowRoot.appendChild((e=document.querySelector("#main-css"))==null?void 0:e.cloneNode())}),(e,d)=>(y(),R(Le,{ref_key:"toggleButton",ref:l},{default:k(()=>[b(e.$slots,"button")]),content:k(({element:w,closed:x})=>[A(Be,V({ref:g=>{w(g),h(g)}},e.$attrs,{native:"",class:{dark:s.value==="dark"},onClose:i,onClosed:g=>{x(),f(g)},onPrevented:o,onOpen:r,onOpened:m}),{title:k(()=>[b(e.$slots,"title")]),default:k(()=>[b(e.$slots,"default")]),_:2},1040,["class","onClosed"])]),_:3},512))}}),Ie=`.dark .btn-close{filter:var(--bs-btn-close-white-filter)}
`,Ne=E(Se,[["styles",[Ie]],["__file","OffCanvas.ce.vue"]]);customElements.define("web-offcanvas",N(Ne));document.addEventListener("readystatechange",async u=>{var a,t;u.target.readyState==="complete"&&((t=(a=await ve(()=>import("./chunk/index.js").then(n=>n.d),["./chunk\\index.js","./chunk\\m21bbc25c9f3922b4.js","./chunk\\m64d389f71fee61f4.js","./chunk\\m14e047058b3edf4a.js","./chunk\\m6bdda40d8bd2cf5a.js","./chunk\\ma6cfd38af5d4c661.js","./chunk\\mc55b2a42316522d6.js"],import.meta.url))==null?void 0:a.initTheme)==null||t.call(a))});
//# sourceMappingURL=admin.js.map
