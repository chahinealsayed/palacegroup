import{a as N}from"../chunk/app.js";import{w as U}from"../chunk/m78c574d5c3843a3d.js";import{B as $}from"../chunk/Button.js";import{c as D,_ as k,M as T,a as F}from"../chunk/StringInput.vue_vue_type_script_setup_true_lang.js";import{S as P}from"../chunk/string.js";import{n as R,o as V,p as A}from"../chunk/m6cd080c8112b9076.js";import{I as _}from"../chunk/Icon.js";import{a as j}from"../chunk/api.js";import{i as C,m as q}from"../chunk/index.js";import{d as S,p as G,o as K,a as y,f as I,v as i,k as a,e as h,y as O,A as g,b as Y,T as z,F as H}from"../chunk/mc55b2a42316522d6.js";import{r as J,u as n}from"../chunk/m6bdda40d8bd2cf5a.js";import{K as Q}from"../chunk/ma6cfd38af5d4c661.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m64d389f71fee61f4.js";import"../chunk/_plugin-vue_export-helper.js";import"../chunk/m3fc8d974e5d8216d.js";import"../chunk/m110db13e4dc1cf62.js";import"../chunk/CloseButton.vue_vue_type_script_setup_true_lang.js";import"../chunk/ma0e3fbddd3785020.js";import"../chunk/m0006e5d5f2f1d6ce.js";const W=["onSubmit"],X={class:"d-flex justify-content-center align-items-center"},Z=S({__name:"Login",props:{redirectUrl:{default:""}},setup(v){class w extends T{get username(){var r;return this.field("username","Username",((r=this.initData)==null?void 0:r.username)??"")}get password(){var r;return this.field("password","Password",((r=this.initData)==null?void 0:r.password)??"")}get rules(){return[[[this.username,this.password],P],[[this.username,this.password],F]]}}const d=J(null),[s,M,B]=D(w),E=()=>{var m,r;(r=(m=s.value)==null?void 0:m.validate())==null||r.then(L=>{var p,b,x;L&&((b=(p=d.value)==null?void 0:p.start)==null||b.call(p),j().post("/login",((x=s.value)==null?void 0:x.data)??{}).then(({data:t})=>{var o,l;if(t.code===200){const e=document.createElement("form");e.name="login",e.method="POST",e.action=`${(l=(o=q())==null?void 0:o.url)==null?void 0:l.self}/Login`,e.style.visibility="hidden",e.style.width="0px",e.style.height="0px",e.style.overflow="hidden",e.style.opacity="0";const c=document.createElement("input");c.type="hidden",c.name="token",c.value=t.token,e.appendChild(c);const u=document.createElement("input");u.type="hidden",u.name="expire",u.value=t.expire,e.appendChild(u);const f=document.createElement("input");f.type="hidden",f.name="redirectUrl",f.value=v.redirectUrl??"",e.appendChild(f),document.body.appendChild(e),e.submit()}}).catch(t=>{var o,l;(l=(o=s.value)==null?void 0:o.addRemoteErrors)==null||l.call(o,t)}).finally(()=>{var t,o;(o=(t=d.value)==null?void 0:t.stop)==null||o.call(t)}))})};return G(()=>{M()}),K(()=>{B()}),(m,r)=>n(s)?(y(),I("form",{key:0,onSubmit:U(E,["prevent"]),class:"login-form"},[i("div",null,[a(k,{field:n(s).username},{before:h(()=>[a(_,{path:n(R),color:n(C)()?"info":"primary"},null,8,["path","color"])]),_:1},8,["field"])]),i("div",null,[a(k,{field:n(s).password,type:"password"},{before:h(()=>[a(_,{path:n(V),color:n(C)()?"info":"primary"},null,8,["path","color"])]),_:1},8,["field"])]),i("div",X,[a($,{type:"submit",color:"primary",class:"fw-bold w-100","spinner-color":"light",ref_key:"button",ref:d},{default:h(()=>[a(_,{path:n(A),color:"info"},null,8,["path"]),g("SIGN IN")]),_:1},512)])],40,W)):O("",!0)}});const ee={class:"admin-login-box"},te={class:"copyright"},oe=i("a",{href:"https://codendot.com",target:"_blank"},"Codendot",-1),re=S({__name:"Login",setup(v){return(w,d)=>(y(),I(H,null,[i("div",ee,[a(Z)]),(y(),Y(z,{to:"body"},[i("div",te,[g(" Powered by "),oe,g(" "+Q(new Date().getFullYear()),1)])]))],64))}});const ne=N("login",re);ne.mount();