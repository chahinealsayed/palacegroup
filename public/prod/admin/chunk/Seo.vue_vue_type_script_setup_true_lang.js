var rt=Object.defineProperty;var at=(r,s,a)=>s in r?rt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a;var M=(r,s,a)=>(at(r,typeof s!="symbol"?s+"":s,a),a);import{a as Q,s as j}from"./api.js";import{n as lt,a as ot,B as I}from"./Button.js";import{l as R}from"./index.js";import{d as W,c as F,a as h,f as C,r as nt,z as it,k as _,e as u,v as S,b as D,A as $,y as V,F as G,g as ct}from"./mc55b2a42316522d6.js";import{c as dt,F as x,f as ut,C as ft,_ as pt}from"./ModalForm.vue_vue_type_script_setup_true_lang.js";import{_ as ht,M as gt}from"./StringInput.vue_vue_type_script_setup_true_lang.js";import{_ as J}from"./TextInput.vue_vue_type_script_setup_true_lang.js";import{I as U}from"./Icon.js";import{m as yt,a as _t}from"./m6cd080c8112b9076.js";import{r as E,u as k}from"./m6bdda40d8bd2cf5a.js";import{K as A}from"./ma6cfd38af5d4c661.js";class bt{constructor(s){M(this,"_action",()=>{});M(this,"_events",{});this.count=s}set action(s){this._action=s}get action(){return this._action}on(s,a){this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(a)}dispatch(s,a=null){if(this._events.hasOwnProperty(s))for(const v of this._events[s])v(new CustomEvent(s,{bubbles:!0,detail:{target:this,data:a}}))}start(){this.dispatch("start"),X(this)}}function X(r,s=0){kt(r,s),r.count>s?r.action(s,()=>{X(r,s+1)}):r.dispatch("done")}function kt(r,s){let a=Math.ceil(s*100/r.count);a>100&&(a=100),r.dispatch("progress",{current:s,total:r.count,percentage:a})}function vt(r){return new bt(r)}const P=W({__name:"Badge",props:{color:{default:"primary"},bgColor:{default:null},pill:{type:Boolean,default:!1}},setup(r){const s=F(()=>{const a={badge:!0};return r.bgColor?(a[`text-${r.color}`]=!0,a[`bg-${r.bgColor}`]=!0):a[`text-bg-${r.color}`]=!0,r.pill&&(a["rounded-pill"]=!0),a});return(a,v)=>(h(),C("span",it({class:s.value},a.$attrs),[nt(a.$slots,"default")],16))}}),mt=["innerHTML"],wt={class:"d-flex flex-horizontal gap-2"},St={key:0,class:"d-flex flex-horizontal gap-2"},$t=["innerHTML"],xt={class:"mb-3"},Ct={class:"mb-3"},Tt={class:"mb-3"},Ot=W({__name:"Seo",props:{target:{}},setup(r){const s=dt({type:x.Number,name:"id",label:"ID",sortable:!0,searchable:!0,fitable:!0},{type:x.String,name:"title",label:"Title",sortable:!0,searchable:!0},{type:x.String,name:"description",label:"Description",sortable:!0,searchable:!0},{type:x.String,name:"keywords",label:"Keywords",sortable:!0,searchable:!0,fitable:!0},{type:x.String,name:"target",label:"Page",sortable:!0,searchable:!0,fitable:!0}),a=E(null),v=E(null),B=E(null),L=E(!1);class Y extends gt{get id(){var e;return this.field("id","ID",((e=this.initData)==null?void 0:e.id)??null)}get target(){var e;return this.field("target","Target",((e=this.initData)==null?void 0:e.target)??null)}get title(){var e;return this.field("title","Title",((e=this.initData)==null?void 0:e.title)??"")}get description(){var e;return this.field("description","Description",((e=this.initData)==null?void 0:e.description)??"")}get keywords(){var e;return this.field("keywords","Keywords",((e=this.initData)==null?void 0:e.keywords)??[],"Separate keywords by comma")}get rules(){return[]}}const H=o=>{L.value=o},Z=()=>{var l,g,n,d,b;(g=(l=B.value)==null?void 0:l.start)==null||g.call(l);const o=(b=(d=(n=a.value)==null?void 0:n.data)==null?void 0:d.call(n))==null?void 0:b.map(i=>{var f;return(f=i.target)==null?void 0:f.split("-").at(1)}),e=R().filter(({value:i})=>!o.includes(i)),t=vt(e.length);t.action=(i,f)=>{var c,y;Q().post("/seo",{target:`${r.target}${(y=(c=e==null?void 0:e.at)==null?void 0:c.call(e,i))==null?void 0:y.value}`,keywords:[],description:"",title:`Seo Title ${new Date().getTime()}`}).then(()=>{f()})},t.on("done",()=>{var i,f,c,y;j("Seo Created Successfully"),(f=(i=a.value)==null?void 0:i.refresh)==null||f.call(i),(y=(c=B.value)==null?void 0:c.stop)==null||y.call(c)}),t.start()},q=o=>{var t,l;const e={...o};e.keywords=e.keywords.join(`
`),(l=(t=v.value)==null?void 0:t.open)==null||l.call(t,e)},tt=(o,e)=>{var l,g;const t=o.data;t.keywords=((g=(l=t.keywords)==null?void 0:l.split)==null?void 0:g.call(l,","))??[],Q().put(`/seo/${t.id}`,t).finally(()=>{var n,d;j("Seo Created Successfully"),(d=(n=a.value)==null?void 0:n.refresh)==null||d.call(n),e()}).catch(n=>{var d;e(!0),(d=o==null?void 0:o.addRemoteErrors)==null||d.call(o,n)})},et=F(()=>{if(r.target)return{filter:{target:{like:r.target}}}}),st=F(()=>{var o,e,t;return((e=(o=a.value)==null?void 0:o.length)==null?void 0:e.call(o))<((t=R())==null?void 0:t.length)});return(o,e)=>(h(),C(G,null,[_(ft,{ref_key:"crud",ref:a,fields:k(s),fetch:k(ut)("/seo",void 0,et.value),onEmpty:e[0]||(e[0]=t=>H(!0)),onNoEmpty:e[1]||(e[1]=t=>H(!1))},{descriptionValue:u(({item:t})=>[S("div",{innerHTML:k(lt)((t==null?void 0:t.description)??"")},null,8,mt)]),targetValue:u(({item:t})=>{var l,g,n,d,b,i,f,c,y,z;return[S("div",wt,[(f=(i=(b=(d=(n=(g=(l=t==null?void 0:t.target)==null?void 0:l.split)==null?void 0:g.call(l,"-"))==null?void 0:n[0])==null?void 0:d.toString())==null?void 0:b.split)==null?void 0:i.call(b,":"))!=null&&f[0]?(h(),D(P,{key:0,color:"primary"},{default:u(()=>{var p,m,w,K,T,O,N;return[$(A(((N=(O=(T=(K=(w=(m=(p=t==null?void 0:t.target)==null?void 0:p.split)==null?void 0:m.call(p,"-"))==null?void 0:w[0])==null?void 0:K.toString())==null?void 0:T.split)==null?void 0:O.call(T,":"))==null?void 0:N[0])??""),1)]}),_:2},1024)):V("",!0),(z=(y=(c=t==null?void 0:t.target)==null?void 0:c.split)==null?void 0:y.call(c,"-"))!=null&&z[1]?(h(),D(P,{key:1,color:"info"},{default:u(()=>{var p,m,w;return[$(A(((w=(m=(p=t==null?void 0:t.target)==null?void 0:p.split)==null?void 0:m.call(p,"-"))==null?void 0:w[1])??""),1)]}),_:2},1024)):V("",!0)])]}),keywordsValue:u(({item:t})=>[Array.isArray(t.keywords)&&t.keywords.length>0?(h(),C("div",St,[(h(!0),C(G,null,ct(t.keywords,l=>(h(),D(P,{key:l,color:"warning"},{default:u(()=>[$(A(l),1)]),_:2},1024))),128))])):(h(),C("div",{key:1,innerHTML:k(ot)()},null,8,$t))]),actions:u(({item:t})=>[_(I,{color:"info",class:"text-light",onClick:l=>q(t)},{default:u(()=>[_(U,{path:k(yt),color:"light"},null,8,["path"]),$("Edit ")]),_:2},1032,["onClick"])]),topActions:u(()=>[o.target&&(L.value||st.value)?(h(),D(I,{key:0,ref_key:"adder",ref:B,color:"primary",class:"text-light",onClick:Z},{default:u(()=>[_(U,{path:k(_t),color:"light"},null,8,["path"]),$("Add Seo ")]),_:1},512)):V("",!0)]),_:1},8,["fields","fetch"]),_(pt,{ref_key:"modal",ref:v,name:"SEO","model-class":Y,onSave:tt},{default:u(({model:t})=>[S("div",xt,[_(ht,{field:t.title},null,8,["field"])]),S("div",Ct,[_(J,{field:t.description,style:{height:"200px"}},null,8,["field"])]),S("div",Tt,[_(J,{field:t.keywords,style:{height:"200px"}},null,8,["field"])])]),_:1},512)],64))}});export{Ot as _};