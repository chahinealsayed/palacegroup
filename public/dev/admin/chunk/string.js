var h=(r,s,t)=>{if(s.has(r))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(r):s.set(r,t)};import{c as l}from"./app.js";import{R as o}from"./StringInput.js";const[g,m]=l(),[e,c]=l(),[i,p]=l(),[n,v]=l();var u,a,d,f;class S extends o{constructor(){super(...arguments);h(this,u,void 0);h(this,a,void 0);h(this,d,void 0);h(this,f,void 0)}get isString(){return typeof this.field.value=="string"}execute(){this.isString&&g(this)&&this.field.silentUpdate(this.field.value.trim())}trim(){return m(this,!0),this}min(t){return c(this,t),this}max(t){return p(this,t),this}length(t){return v(this,t),this}get defaultMessage(){if(this.isString){if(typeof e(this)<"u"&&typeof i(this)<"u"&&(this.field.value.length<e(this)||this.field.value.length>i(this)))return`{attribute} should be between ${e(this)} and ${i(this)} characters.`;if(typeof e(this)<"u"&&this.field.value.length<e(this))return`{attribute} should be bigger than or equal ${e(this)} characters.`;if(typeof i(this)<"u"&&this.field.value.length>i(this))return"{attribute} should be less than or equal $max(this)} characters.";if(typeof n(this)<"u"&&this.field.value.length!==n(this))return`{attribute} should be equal ${n(this)} characters.`}else return"{attribute} should be a string";return""}validate(){return new Promise(t=>{t(this.isString&&(!this.field.value&&this.isSkipOnEmpty||(typeof e(this)>"u"||this.field.value.length>=e(this))&&(typeof i(this)>"u"||this.field.value.length<=i(this))&&(typeof n(this)>"u"||this.field.value.length===n(this))))})}}u=new WeakMap,a=new WeakMap,d=new WeakMap,f=new WeakMap;export{S};
//# sourceMappingURL=string.js.map
