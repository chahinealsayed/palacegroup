import{c as B}from"../chunk/app.js";import{w as C}from"../chunk/m78c574d5c3843a3d.js";import{B as $}from"../chunk/Button.js";import{_ as D,c as E,a as h,b as R,M as j,S as x,R as N}from"../chunk/RecaptchaInput.vue_vue_type_style_index_0_lang.js";import{d as S,l as y,m as k,v as w,x as F,s as _,t as z,p as V,r as o,u as A,o as L,g as P,q as T,b as i,y as q,z as I}from"../chunk/mc55b2a42316522d6.js";import{u as a}from"../chunk/m6bdda40d8bd2cf5a.js";import{J as U,K as M,v as m}from"../chunk/ma6cfd38af5d4c661.js";import{t as r,a as G,s as J}from"../chunk/api.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m64d389f71fee61f4.js";import"../chunk/strings.js";import"../chunk/m3fc8d974e5d8216d.js";import"../chunk/CloseButton.vue_vue_type_script_setup_true_lang.js";import"../chunk/ma0e3fbddd3785020.js";const K=["id"],H=S({inheritAttrs:!1,__name:"TextInput",props:{field:{},noLabel:{type:Boolean}},setup(b){const d=b,{field:t,noLabel:u=!1}=d,p=e=>{t.update(e.target.value)},f=e=>{t.touch(e)},l=e=>{t.blur(e)};return(e,g)=>(y(),k(D,{field:a(t),"no-label":a(u)},w({default:_(({id:n})=>[o("textarea",A({id:n,class:["form-control",{"is-invalid":a(t).hasErrors}]},e.$attrs,{onInput:p,onFocus:f,onBlur:l,autocomplete:"off",spellcheck:"false",style:{resize:"none"}}),M(a(t).value),17,K)]),_:2},[F(e.$slots,(n,c)=>({name:c,fn:_(s=>[z(e.$slots,c,U(V({...s})))])}))]),1032,["field","no-label"]))}}),O=["onSubmit"],Q={class:"row"},W={class:"col-md-6"},X={class:"col-md-6"},Y={class:"submit-captcha pt-4"},Z={class:"recaptcha"},ee=S({__name:"ContactForm",props:{redirectUrl:{default:""}},setup(b){class d extends j{get name(){var e;return this.field("name",r("Name*"),((e=this.initData)==null?void 0:e.name)??"")}get email(){var e;return this.field("email",r("Email"),((e=this.initData)==null?void 0:e.email)??"")}get subject(){var e;return this.field("subject",r("Subject(optional)"),((e=this.initData)==null?void 0:e.subject)??"")}get message(){var e;return this.field("message",r("Message*"),((e=this.initData)==null?void 0:e.message)??"")}get recaptcha(){var e;return this.field("recaptcha",r("ReCaptcha"),((e=this.initData)==null?void 0:e.recaptcha)??"")}get rules(){return[[[this.name,this.subject,this.email,this.message],x],[[this.name,this.email,this.message],N]]}}const[t,u,p]=E(d),f=()=>{var l,e;(e=(l=t.value)==null?void 0:l.validate())==null||e.then(g=>{var n;g&&G().post("/test",((n=t.value)==null?void 0:n.data)??{}).then(({data:c})=>{var s;J("Form Sent"),console.log((s=t.value)==null?void 0:s.data)}).catch(c=>{var s,v;(v=(s=t.value)==null?void 0:s.addRemoteErrors)==null||v.call(s,c)}).finally(()=>{})})};return L(()=>{u()}),P(()=>{p()}),(l,e)=>a(t)?(y(),T("form",{key:0,onSubmit:C(f,["prevent"]),class:"contact-form-vue"},[o("div",Q,[o("div",W,[i(h,{field:a(t).name,class:m("name"),"no-label":""},null,8,["field"]),i(h,{field:a(t).email,class:m("mail"),"no-label":""},null,8,["field"]),i(h,{field:a(t).subject,class:m("number"),"no-label":""},null,8,["field"])]),o("div",X,[i(H,{placeholder:"Message*",field:a(t).message,class:m("message"),"no-label":"","aria-placeholder":"Message*"},null,8,["field"])])]),o("div",Y,[o("div",null,[i($,{type:"submit",color:"primary",class:"submit","spinner-color":"light",ref:"button"},{default:_(()=>[I(M(a(r)("SEND MESSAGE")),1)]),_:1},512)]),o("div",Z,[i(R,{field:a(t).recaptcha},null,8,["field"])])])],40,O)):q("",!0)}});const te=B("contactform",ee);te.mount();