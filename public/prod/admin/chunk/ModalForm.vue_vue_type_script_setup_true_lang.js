import{w as A,a as x}from"./m78c574d5c3843a3d.js";import{I as _}from"./Icon.js";import{t as H,a as ce,i as de}from"./index.js";import{q as pe,r as ve,s as me,t as he,u as fe,f as ge,v as $e,w as be,x as ye,y as ke,z as Ce,A as Pe,B as we,p as Se}from"./m6cd080c8112b9076.js";import{s as Ve}from"./m21bbc25c9f3922b4.js";import{p as Ie,c as Ne}from"./StringInput.vue_vue_type_script_setup_true_lang.js";import{D as ae,a as _e,_ as De}from"./Modal.vue_vue_type_script_setup_true_lang.js";import{d as J,c as E,w as ee,a as r,f as d,y as $,v as i,k as P,F as M,g as F,b as K,e as N,A as W,r as f,p as Ae,G as ze,D as Be,E as Me,q as Re,n as te}from"./mc55b2a42316522d6.js";import{r as b,u as m,v as je}from"./m6bdda40d8bd2cf5a.js";import{K as j,n as R}from"./ma6cfd38af5d4c661.js";import{_ as se}from"./_plugin-vue_export-helper.js";import{B as oe}from"./Button.js";import{a as Oe}from"./api.js";const Ue={class:"pagination-component"},Ee={key:0,class:"count"},Fe={key:1,"aria-label":"Page navigation",class:"pages"},Ke={class:"pagination pagination-sm"},Te={key:0,class:"page-link"},Le=["onClick"],qe={class:"per-page"},Ge=J({__name:"Pagination",props:{page:{default:1},perPage:{default:10},total:{default:0},pages:{},buttons:{default:5},sizes:{default:()=>[5,10,25,50]}},emits:["update:page","update:perPage","update:total","update:buttons","change"],setup(t,{expose:h,emit:c}){const a=b(t.page),n=b(t.page),o=b(t.perPage),C=E(()=>Math.ceil(t.total/o.value)),w=E(()=>Ie(a.value,t.perPage,t.total,t.buttons)),S=b(null);ee([a,o],()=>{c("update:page",a),c("update:perPage",o),c("update:total",t.total),c("update:buttons",t.buttons),c("change",{page:a,perPage:o,total:t.total,pages:C.value,buttons:t.buttons})},{deep:!0}),ee(o,()=>{a.value=1});const y=l=>{a.value=l},z=()=>{n.value++,n.value>C.value&&(n.value=1)},p=()=>{n.value--,n.value<1&&(n.value=C.value)},v=l=>{o.value=l,S.value.close()};return h({goTo:y,increment:z,decrement:p,changeSize:v}),(l,I)=>(r(),d("div",Ue,[l.total>0?(r(),d("div",Ee,j(m(H)(":?-:? of :? rows",l.perPage*a.value-(l.perPage-1),l.perPage*a.value<=l.total?l.perPage*a.value:l.total,l.total)),1)):$("",!0),w.value.length>1?(r(),d("nav",Fe,[i("ul",Ke,[i("li",{class:R(["page-item",{disabled:a.value===1}])},[i("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:I[0]||(I[0]=A(g=>y(1),["prevent"]))},[P(_,{path:m(pe)},null,8,["path"])])],2),i("li",{class:R(["page-item",{disabled:a.value===1}])},[i("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:I[1]||(I[1]=A(g=>y(a.value-1),["prevent"]))},[P(_,{path:m(ve)},null,8,["path"])])],2),(r(!0),d(M,null,F(w.value,g=>(r(),d("li",{class:R(["page-item",{active:g===a.value}]),key:g},[g===a.value?(r(),d("span",Te,j(g),1)):(r(),d("a",{key:1,class:"page-link",href:"#",onClick:A(V=>y(g),["prevent"])},j(g),9,Le))],2))),128)),i("li",{class:R(["page-item",{disabled:a.value===C.value}])},[i("a",{class:"page-link",href:"#",onClick:I[2]||(I[2]=A(g=>y(a.value+1),["prevent"]))},[P(_,{path:m(me)},null,8,["path"])])],2),i("li",{class:R(["page-item",{disabled:a.value===C.value}])},[i("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:I[3]||(I[3]=A(g=>y(C.value),["prevent"]))},[P(_,{path:m(he)},null,8,["path"])])],2)])])):$("",!0),i("div",qe,[l.total>0?(r(),K(ae,{key:0,ref_key:"dropDown",ref:S,title:`${l.perPage} ${m(H)("rows")}`,"auto-close":""},{default:N(()=>[(r(!0),d(M,null,F(l.sizes,(g,V)=>(r(),d(M,{key:g},[V===0||(l.sizes.at(V-1)??0)<=l.total?(r(),K(_e,{key:0,onClick:A(O=>v(g),["prevent"])},{default:N(()=>[W(j(g)+" "+j(m(H)("rows")),1)]),_:2},1032,["onClick"])):$("",!0)],64))),128))]),_:1},8,["title"])):$("",!0)])]))}});const He=se(Ge,[["__scopeId","data-v-2f185689"]]),We={class:"input-group search-input-group"},Je=["placeholder","value","onKeydown"],Qe=["onClick"],Xe=J({__name:"Search",props:{modelValue:{}},emits:["update:modelValue","clear","search"],setup(t,{emit:h}){const c=o=>{h("update:modelValue",o.target.value.trim())},a=()=>{h("clear")},n=()=>{h("search")};return(o,C)=>(r(),d("div",We,[o.$slots["start-search"]?f(o.$slots,"start-search",{key:0}):$("",!0),o.modelValue!==""?(r(),d("button",{key:1,type:"button",class:"btn btn-primary",onClick:a},[P(_,{path:m(fe)},null,8,["path"])])):$("",!0),o.$slots["before-search"]?f(o.$slots,"before-search",{key:2}):$("",!0),i("input",{type:"text",class:"form-control",placeholder:m(H)("Search..."),value:o.modelValue,onInput:C[0]||(C[0]=w=>c(w)),onKeydown:[x(A(n,["stop"]),["enter"]),x(A(a,["stop"]),["esc"])]},null,40,Je),o.$slots["after-search"]?f(o.$slots,"after-search",{key:3}):$("",!0),i("button",{type:"button",class:"btn btn-primary",onClick:A(n,["prevent"])},[P(_,{path:m(ge)},null,8,["path"])],8,Qe),o.$slots["end-search"]?f(o.$slots,"end-search",{key:4}):$("",!0)]))}}),Ye=t=>(Be("data-v-59390f8f"),t=t(),Me(),t),Ze={class:"row"},xe={class:"col-md-5"},et={class:"d-flex flex-horizontal gap-3"},tt={class:"col-md-7"},at={class:"d-flex gap-2 justify-content-end align-items-center h-100"},st={class:"table-responsive"},ot={key:0,class:"fitable no-select"},lt=Ye(()=>i("th",{class:"fitable no-select"},"#",-1)),nt=["onClick"],rt=["colspan"],ut={key:0,class:"fitable no-select align-middle"},it={class:"fitable no-select align-middle"},ct={key:1,class:"fitable no-select align-middle"},dt={class:"d-flex gap-2 align-items-start"},pt={key:2,class:"fitable no-select align-middle"},vt={key:0},mt=["colspan"],ht=J({__name:"Crud",props:{fields:{},fetch:{type:Function},keyName:{default:"id"}},emits:["empty","noEmpty"],setup(t,{expose:h,emit:c}){const a=E(()=>t.fields),n=Re(),o=ce(),{isDarkTheme:C}=Ve(o),w=je([]),S=b(1),y=b(5),z=b(""),p=b(t.keyName),v=b(!0),l=b(0),I=b(0),g=b(5),V=b({}),O=b(null),T=b(0),D=async()=>{var e,k,s,B;(k=(e=O.value)==null?void 0:e.start)==null||k.call(e);try{const u=await t.fetch({page:S.value,perPage:y.value,keyword:z.value,sort:`${v.value?"":"-"}${p.value}`.trim(),fields:a.value});w.value=u.data,l.value=(u==null?void 0:u.total)??0,S.value=(u==null?void 0:u.page)??1,y.value=(u==null?void 0:u.perPage)??1,I.value=(u==null?void 0:u.pages)??0,V.value={},w.value.length>0?c("noEmpty"):c("empty"),T.value++}catch{}(B=(s=O.value)==null?void 0:s.stop)==null||B.call(s)},L=async e=>{e.sortable&&(p.value=e.name,v.value=!v.value,D())},U=e=>{S.value=e.page.value,y.value=e.perPage.value,D()},q=()=>{S.value=1,D()},le=()=>{S.value=1,z.value="",D()},Z=()=>{D()},Q=e=>e.visible===void 0||e.visible,ne=E(()=>{var e,k,s,B,u,G;return t.fields.filter(ie=>Q(ie)).length+1+((k=(e=n==null?void 0:n.proxy)==null?void 0:e.$slots)!=null&&k.actions?1:0)+((B=(s=n==null?void 0:n.proxy)==null?void 0:s.$slots)!=null&&B.moreActions?1:0)+((G=(u=n==null?void 0:n.proxy)==null?void 0:u.$slots)!=null&&G.details?1:0)}),re=e=>{V.value={...V.value,[e[t.keyName]]:!X(e)}},X=e=>Object.hasOwn(V.value,e[t.keyName])&&V.value[e[t.keyName]],ue=E(()=>{var e;return((e=w.value)==null?void 0:e.length)??0});return Ae(()=>{D()}),h({refresh:Z,length:()=>ue.value,data:()=>w.value}),(e,k)=>(r(),d("div",{class:"crud-component",key:`crud-${T.value}`},[f(e.$slots,"start",{},void 0,!0),i("div",Ze,[i("div",xe,[i("div",et,[P(oe,{color:"primary",onClick:Z,ref_key:"refresher",ref:O,"spinner-small":"","spinner-color":"light",style:{"min-width":"50px"}},{default:N(()=>[P(_,{path:m($e)},null,8,["path"])]),_:1},512),P(Xe,{modelValue:z.value,"onUpdate:modelValue":k[0]||(k[0]=s=>z.value=s),onClear:le,onSearch:q},ze({_:2},[e.$slots["start-search"]?{name:"start-search",fn:N(()=>[f(e.$slots,"start-search",{},void 0,!0)]),key:"0"}:void 0,e.$slots["before-search"]?{name:"before-search",fn:N(()=>[f(e.$slots,"before-search",{},void 0,!0)]),key:"1"}:void 0,e.$slots["after-search"]?{name:"after-search",fn:N(()=>[f(e.$slots,"after-search",{},void 0,!0)]),key:"2"}:void 0,e.$slots["end-search"]?{name:"end-search",fn:N(()=>[f(e.$slots,"end-search",{},void 0,!0)]),key:"3"}:void 0]),1032,["modelValue"])])]),i("div",tt,[i("div",at,[f(e.$slots,"topActions",{},void 0,!0)])])]),f(e.$slots,"before",{},void 0,!0),i("div",st,[i("table",{class:R(["table table-bordered table-striped table-hover m-0",{"table-dark":m(C)}])},[i("thead",null,[i("tr",null,[e.$slots.details?(r(),d("th",ot," ")):$("",!0),lt,(r(!0),d(M,null,F(a.value,(s,B)=>(r(),d(M,{key:`${s.name}-${B}`},[Q(s)?(r(),d("th",{key:0,class:R({fitable:s.fitable,"no-select":!0,pointer:s.sortable,"table-active":s.sortable&&p.value===s.name})},[i("div",{class:"d-flex gap-2",onClick:A(u=>L(s),["prevent","stop"])},[i("span",null,[f(e.$slots,`${s.name}Header`,{field:s},()=>[W(j(s.label),1)],!0)]),s.sortable&&p.value===s.name?(r(),K(_,{key:0,path:v.value?m(be):m(ye),class:R({"ms-auto":!0}),color:m(de)()?"info":"primary"},null,8,["path","color"])):(r(),K(_,{key:1,path:m(ke),class:"ms-auto text-muted"},null,8,["path"]))],8,nt)],2)):$("",!0)],64))),128)),e.$slots.moreActions||e.$slots.actions?(r(),d("th",{key:1,colspan:e.$slots.moreActions&&e.$slots.actions?2:1,class:"fitable no-select"}," Actions ",8,rt)):$("",!0)])]),i("tbody",null,[(r(!0),d(M,null,F(w.value,(s,B)=>(r(),d(M,{key:s[e.keyName]},[i("tr",null,[e.$slots.details?(r(),d("td",ut,[P(_,{path:X(s)?m(Ce):m(Pe),onClick:u=>re(s),class:"pointer"},null,8,["path","onClick"])])):$("",!0),i("td",it,j(B+1),1),(r(!0),d(M,null,F(a.value,(u,G)=>(r(),d(M,{key:`${u.name}-${G}`},[Q(u)?(r(),d("td",{key:0,class:R({fitable:u.fitable,"select-all":!0,"table-active":u.sortable&&p.value===u.name,border:u.sortable&&p.value===u.name,"align-middle":!0})},[f(e.$slots,`${u.name}Value`,{field:u,item:s},()=>[W(j(s[u.name]),1)],!0)],2)):$("",!0)],64))),128)),e.$slots.actions?(r(),d("td",ct,[i("div",dt,[f(e.$slots,"actions",{item:s},void 0,!0)])])):$("",!0),e.$slots.moreActions?(r(),d("td",pt,[P(ae,{"no-arrow":"",div:""},{button:N(()=>[P(_,{path:m(we)},null,8,["path"])]),default:N(()=>[f(e.$slots,"moreActions",{item:s},void 0,!0)]),_:2},1024)])):$("",!0)]),e.$slots.details&&X(s)?(r(),d("tr",vt,[i("td",{colspan:ne.value,class:"p-0 align-middle"},[f(e.$slots,"details",{item:s},void 0,!0)],8,mt)])):$("",!0)],64))),128))])],2)]),f(e.$slots,"after",{},void 0,!0),P(He,{page:S.value,"onUpdate:page":k[1]||(k[1]=s=>S.value=s),"per-page":y.value,"onUpdate:perPage":k[2]||(k[2]=s=>y.value=s),total:l.value,"onUpdate:total":k[3]||(k[3]=s=>l.value=s),buttons:g.value,"onUpdate:buttons":k[4]||(k[4]=s=>g.value=s),onChange:U},null,8,["page","per-page","total","buttons"]),f(e.$slots,"end",{},void 0,!0)]))}});const zt=se(ht,[["__scopeId","data-v-59390f8f"]]);function Y(t,h=null){const c=[];let a;for(a in t)if(t.hasOwnProperty(a)){const n=h?`${h}[${a}]`:a,o=t[a];c.push(o!==null&&typeof o=="object"?Y(o,n):`${encodeURIComponent(n)}=${encodeURIComponent(o)}`)}return c.join("&")}var ft=(t=>(t.Number="number",t.String="string",t.Enum="enum",t))(ft||{});const gt=({data:t,header:h})=>({data:t,total:parseInt(h("x-pagination-total-count"))??0,page:parseInt(h("x-pagination-current-page"))??1,perPage:parseInt(h("x-pagination-per-page"))??1,pages:parseInt(h("x-pagination-page-count"))??0}),$t=(t,h)=>{if(t){let c=[];for(const a of h)if(a.searchable){const n={};a.type==="number"&&/^\d+\.{0,1}\d{0,}$/.test(t)?n[a.name]=t:(a.type==="string"||a.type==="enum")&&(n[a.name]={like:t}),Object.keys(n).length>0&&c.push(n)}return c={or:c},Y(c,"filter")}return""},Bt=(t,h,c)=>({page:a,perPage:n,sort:o,keyword:C,fields:w})=>new Promise((S,y)=>{const z=()=>{if(c&&Object.keys(c).length>0){let v=[];for(let l in c)typeof c[l]=="object"?v.push(Y(c[l],l)):v.push(`${l}=${c[l]}`);return`&${v.join("&")}`}return""},p=$t(C,w);Oe().get(`${t}?${h?`expand=${h}&`:""}page=${a}&per-page=${n}&sort=${o}${p?`&${p}`:""}${z()}`).then(v=>{S(gt(v))}).catch(v=>{y(v)})}),Mt=(...t)=>[...t],Rt=J({inheritAttrs:!1,__name:"ModalForm",props:{modelClass:{type:Function},name:{},size:{default:null},fullscreen:{type:[Boolean,String],default:!1}},emits:["save"],setup(t,{expose:h,emit:c}){const a=b(null),n=b(null),[o,C,w]=Ne(t.modelClass),S=p=>{C({...p??{}}),te(()=>{var v,l;(l=(v=a.value)==null?void 0:v.open)==null||l.call(v)})},y=()=>{var p,v,l,I;(I=(l=(v=(p=o.value)==null?void 0:p.validate)==null?void 0:v.call(p))==null?void 0:l.then)==null||I.call(l,g=>{var V,O;g&&o.value&&((O=(V=n.value)==null?void 0:V.start)==null||O.call(V),c("save",o.value,(T=!1)=>{var D,L;(L=(D=n.value)==null?void 0:D.stop)==null||L.call(D),T||te(()=>{var U,q;(q=(U=a.value)==null?void 0:U.close)==null||q.call(U)})}))})},z=()=>{w()};return h({open:S}),(p,v)=>m(o)?(r(),K(De,{key:0,ref_key:"modal",ref:a,tag:"form",title:`${m(o).isNewRecord?"Add New":"Edit"} ${p.name}`,size:p.size,fullscreen:p.fullscreen,onSubmit:A(y,["prevent"]),onClosed:z},{header:N(()=>[f(p.$slots,"header")]),buttons:N(()=>[P(oe,{type:"submit",ref_key:"button",ref:n,color:"primary","spinner-color":"info",style:{height:"42px"}},{default:N(()=>[P(_,{path:m(Se),color:"info"},null,8,["path"]),W("Save ")]),_:1},512)]),default:N(()=>[f(p.$slots,"default",{model:m(o)})]),_:3},8,["title","size","fullscreen","onSubmit"])):$("",!0)}});export{zt as C,ft as F,Rt as _,Mt as c,Bt as f};
