import{d as N,w as D}from"./chunk/m78c574d5c3843a3d.js";import{i as U}from"./chunk/m6cd080c8112b9076.js";import{I as F}from"./chunk/Icon.js";import{d as $,c as E,a as g,b as R,t as M,p as P,q as j,w as K,f as O,v as L,x as G,T as Q,o as X,e as k,r as b,y as z,k as T,z as A,j as Y,n as S,F as Z}from"./chunk/mc55b2a42316522d6.js";import{J as ee,n as te,y as ne,K as oe}from"./chunk/ma6cfd38af5d4c661.js";import{u as I,r as v}from"./chunk/m6bdda40d8bd2cf5a.js";import{_ as q}from"./chunk/_plugin-vue_export-helper.js";import{_ as se}from"./chunk/EditorView.vue_vue_type_style_index_0_lang.js";import{s as ae,r as re,B as le}from"./chunk/Button.js";import{_ as ce}from"./chunk/md825331c71ee2150.js";import{_ as ie}from"./chunk/CloseButton.vue_vue_type_script_setup_true_lang.js";import{O as fe}from"./chunk/m3fc8d974e5d8216d.js";import"./chunk/m110db13e4dc1cf62.js";const ue="modulepreload",de=function(u,a){return new URL(u,a).href},J={},pe=function(a,t,o){if(!t||t.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(t.map(l=>{if(l=de(l,o),l in J)return;J[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!o)for(let n=s.length-1;n>=0;n--){const r=s[n];if(r.href===l&&(!c||r.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ue,c||(f.as="script",f.crossOrigin=""),f.href=l,document.head.appendChild(f),c)return new Promise((n,r)=>{f.addEventListener("load",n),f.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>a()).catch(l=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l})};const ve=$({__name:"Icon.ce",props:{path:{},type:{},size:{},viewbox:{},flip:{},rotate:{},color:{}},setup(u){const a=u,t=U[a.path]??a.path,o=E(()=>({transform:"rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1))",color:"var(--color)",width:"var(--size)",height:"var(--size)"}));return(s,l)=>(g(),R(F,ee(M({...a,...s.$attrs,path:I(t),style:o.value})),null,16))}}),he=`:host{height:var(--size)}
`,me=q(ve,[["styles",[he]]]);customElements.define("web-icon",N(me));const ye=$({__name:"EditorView.ce",props:{blocks:{}},setup(u){const a=u,t=j(),o=E(()=>{if(typeof a.blocks=="string")try{return JSON.parse(a.blocks)}catch{}return a.blocks});return P(()=>{var s;t.vnode.el.parentNode.host.shadowRoot.appendChild((s=document.querySelector("#main-css"))==null?void 0:s.cloneNode())}),(s,l)=>(g(),R(se,{content:o.value},null,8,["content"]))}});customElements.define("web-view",N(ye));const _e=["src","alt"],ge=$({__name:"Image.ce",props:{meta:{},fancybox:{type:[Boolean,String]}},setup(u){const a=u,t=JSON.parse(a.meta),o=v(a.fancybox);K(()=>a.fancybox,n=>{o.value=n},{deep:!0});const s=v(null),l=E(()=>{if(t!=null&&t.palette){const n=ae(t==null?void 0:t.palette.map(re)).reverse(),r=[],m=n.length-1;return n.forEach((p,y)=>{let e=y*100/m;r.push(`${p.hex} ${e}%`)}),`radial-gradient(farthest-corner at center,${r.join(", ")})`}return"#fff"}),c=E(()=>{if(s.value){const n=parseInt((t==null?void 0:t.width)??"0");return n<s.value.offsetWidth?`${n}px`:`${s.value.offsetWidth}px`}return"auto"}),h=E(()=>{if(s.value){const n=parseInt((t==null?void 0:t.height)??"0"),r=parseInt((t==null?void 0:t.width)??"0");if(n>0&&r>0)return r<s.value.offsetWidth?`${n}px`:`${Math.ceil(s.value.offsetWidth*n/r)}px`}return"auto"}),i=()=>{var n,r;(r=(n=s.value)==null?void 0:n.remove)==null||r.call(n)},f=()=>{if(o.value&&(t!=null&&t.url)){const n={},r=[];typeof o.value=="string"?(n.groupAttr="fancybox",n.groupAll=!0,document.querySelectorAll(`[${n.groupAttr}=${o.value}]`).forEach((m,p)=>{const{url:y}=JSON.parse(m.meta);r.push({src:y}),y===(t==null?void 0:t.url)&&(n.startIndex=p)})):r.push({src:t==null?void 0:t.url}),ce.show(r,n)}};return(n,r)=>{var m,p;return g(),O("figure",{ref_key:"wrapper",ref:s,class:te(["figure image",{"with-fancybox":o.value}]),style:ne({background:l.value,width:c.value,height:h.value,margin:0}),onClick:f},[L("img",{src:(m=I(t))==null?void 0:m.url,class:"figure-img img-fluid",alt:(p=I(t))==null?void 0:p.size,loading:"lazy",onError:i,style:{"max-width":"100%"}},null,40,_e)],6)}}}),be=`.figure{--color: #fff;--bg: rgba(0, 0, 0, .7);position:relative}.figure.with-fancybox{cursor:pointer}.figure.with-fancybox:after{content:"Click to Enlarge";position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;background:var(--bg);color:var(--color);z-index:-1;opacity:0;transition:all .25s ease}.figure:hover:after{z-index:1;opacity:1}
`,we=q(ge,[["styles",[be]]]);customElements.define("web-image",N(we));const ke={key:0,class:"offcanvas-header"},$e={key:0,class:"offcanvas-title"},Ee={class:"offcanvas-body"},Ce=$({inheritAttrs:!1,__name:"Offcanvas",props:{title:{default:""},placement:{default:"start"},responsive:{default:null},backdrop:{type:[Boolean,String],default:"static"},keyboard:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},native:{type:Boolean,default:!1}},emits:["close","closed","prevented","open","opened"],setup(u,{expose:a,emit:t}){G();const o=v(null),s=v(null),l=v(!1),c=v(u.native?"div":Q),h=e=>{t("close",e)},i=e=>{t("closed",e)},f=e=>{t("prevented",e)},n=e=>{t("open",e)},r=e=>{t("opened",e)},m=()=>{s.value=new fe(o.value,{backdrop:u.backdrop,keyboard:u.keyboard,scroll:u.scroll}),o.value.addEventListener("hide.bs.offcanvas",h),o.value.addEventListener("hidden.bs.offcanvas",i),o.value.addEventListener("hidePrevented.bs.offcanvas",f),o.value.addEventListener("show.bs.offcanvas",n),o.value.addEventListener("shown.bs.offcanvas",r)},p=()=>{var e,d;(d=(e=s.value)==null?void 0:e.show)==null||d.call(e)},y=()=>{l.value=!0,S(()=>{var e,d;(d=(e=s.value)==null?void 0:e.hide)==null||d.call(e),setTimeout(()=>{l.value=!1},300)})};return a({open:p,close:y}),P(()=>{m()}),X(()=>{var e,d,w,C,_,H,x,V,B,W;(d=(e=o.value)==null?void 0:e.removeEventListener)==null||d.call(e,"hide.bs.offcanvas",h),(C=(w=o.value)==null?void 0:w.removeEventListener)==null||C.call(w,"hidden.bs.offcanvas",i),(H=(_=o.value)==null?void 0:_.removeEventListener)==null||H.call(_,"hidePrevented.bs.offcanvas",f),(V=(x=o.value)==null?void 0:x.removeEventListener)==null||V.call(x,"show.bs.offcanvas",n),(W=(B=o.value)==null?void 0:B.removeEventListener)==null||W.call(B,"shown.bs.offcanvas",r)}),(e,d)=>(g(),R(Y(c.value),{to:"body"},{default:k(()=>[L("div",A({ref_key:"offcanvasRef",ref:o,class:{[`offcanvas${e.responsive?"-${responsive}":""}`]:!0,[`offcanvas-${e.placement}`]:!0,show:!0,closing:l.value},tabindex:"-1","aria-labelledby":"offcanvasLabel"},e.$attrs),[e.noHeader?z("",!0):(g(),O("div",ke,[e.$slots.title||e.title?(g(),O("div",$e,[b(e.$slots,"title",{},()=>[L("h5",null,oe(e.title),1)])])):z("",!0),T(ie,{onClick:D(y,["prevent","stop"]),class:"ms-auto"},null,8,["onClick"])])),L("div",Ee,[b(e.$slots,"default")])],16)]),_:3}))}});const xe=$({inheritAttrs:!1,__name:"ToggleButton",emits:["open","close"],setup(u,{expose:a,emit:t}){const o=v(null),s=v(!1),l=()=>{s.value=!0,S(()=>{var i,f;(f=(i=o.value)==null?void 0:i.open)==null||f.call(i),S(()=>{var n,r;(r=(n=o.value)==null?void 0:n.update)==null||r.call(n),S(()=>{t("open")})})})},c=i=>{o.value=i},h=()=>{s.value=!1,t("close")};return a({open:l}),(i,f)=>(g(),O(Z,null,[T(le,A({onClick:l},i.$attrs),{default:k(()=>[b(i.$slots,"default")]),_:3},16),s.value?b(i.$slots,"content",{key:0,element:c,closed:h}):z("",!0)],64))}}),Be=$({inheritAttrs:!1,__name:"OffCanvas.ce",emits:["close","closed","prevented","open","opened"],setup(u,{expose:a,emit:t}){const o=j(),s=v(null),l=v(null),c=v(null),h=e=>{c.value=e},i=e=>{t("close",e)},f=e=>{t("closed",e)},n=e=>{t("prevented",e)},r=e=>{t("open",e)},m=e=>{t("opened",e)},p=()=>{var e,d;(d=(e=l.value)==null?void 0:e.open)==null||d.call(e)},y=()=>{var e,d;(d=(e=c.value)==null?void 0:e.close)==null||d.call(e)};return a({open:p,close:y}),P(()=>{var e;s.value=document.documentElement.dataset.bsTheme,o.vnode.el.parentNode.host.open=p,o.vnode.el.parentNode.host.close=y,o.vnode.el.parentNode.host.shadowRoot.appendChild((e=document.querySelector("#main-css"))==null?void 0:e.cloneNode())}),(e,d)=>(g(),R(xe,{ref_key:"toggleButton",ref:l},{default:k(()=>[b(e.$slots,"button")]),content:k(({element:w,closed:C})=>[T(Ce,A({ref:_=>{w(_),h(_)}},e.$attrs,{native:"",class:{dark:s.value==="dark"},onClose:i,onClosed:_=>{C(),f(_)},onPrevented:n,onOpen:r,onOpened:m}),{title:k(()=>[b(e.$slots,"title")]),default:k(()=>[b(e.$slots,"default")]),_:2},1040,["class","onClosed"])]),_:3},512))}}),Le=`.dark .btn-close{filter:var(--bs-btn-close-white-filter)}
`,Se=q(Be,[["styles",[Le]]]);customElements.define("web-offcanvas",N(Se));document.addEventListener("readystatechange",async u=>{var a,t;u.target.readyState==="complete"&&((t=(a=await pe(()=>import("./chunk/index.js").then(o=>o.d),["./chunk\\index.js","./chunk\\m21bbc25c9f3922b4.js","./chunk\\m64d389f71fee61f4.js","./chunk\\m6bdda40d8bd2cf5a.js","./chunk\\ma6cfd38af5d4c661.js","./chunk\\mc55b2a42316522d6.js"],import.meta.url))==null?void 0:a.initTheme)==null||t.call(a))});
