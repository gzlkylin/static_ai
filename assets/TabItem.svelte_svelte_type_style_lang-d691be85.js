import{S as G,e as H,s as K,G as w,a9 as O,N as j,O as T,K as k,U as A,p as g,M as v,H as P,ay as Q,ab as R,ac as U,ad as F,z as J,v as L,A as p,w as I,a4 as S,B as V,D as W,m as B,aA as C,P as N,Q as X,R as z}from"./index-7a480750.js";function D(n,e,l){const s=n.slice();return s[14]=e[l],s[16]=l,s}function Y(n){let e,l=n[14].name+"",s,f,d,_;function i(){return n[12](n[14],n[16])}return{c(){e=j("button"),s=N(l),f=T(),k(e,"class","svelte-kqij2n")},m(u,m){g(u,e,m),v(e,s),v(e,f),d||(_=X(e,"click",i),d=!0)},p(u,m){n=u,m&8&&l!==(l=n[14].name+"")&&z(s,l)},d(u){u&&p(e),d=!1,_()}}}function Z(n){let e,l=n[14].name+"",s,f;return{c(){e=j("button"),s=N(l),f=T(),k(e,"class","selected svelte-kqij2n")},m(d,_){g(d,e,_),v(e,s),v(e,f)},p(d,_){_&8&&l!==(l=d[14].name+"")&&z(s,l)},d(d){d&&p(e)}}}function M(n,e){let l,s;function f(i,u){return i[14].id===i[4]?Z:Y}let d=f(e),_=d(e);return{key:n,first:null,c(){l=B(),_.c(),s=B(),this.first=l},m(i,u){g(i,l,u),_.m(i,u),g(i,s,u)},p(i,u){e=i,d===(d=f(e))&&_?_.p(e,u):(_.d(1),_=d(e),_&&(_.c(),_.m(s.parentNode,s)))},d(i){i&&(p(l),p(s)),_.d(i)}}}function x(n){let e,l,s=[],f=new Map,d,_,i,u=w(n[3]);const m=t=>t[14].id;for(let t=0;t<u.length;t+=1){let o=D(n,u,t),r=m(o);f.set(r,s[t]=M(r,o))}const b=n[11].default,c=O(b,n,n[10],null);return{c(){e=j("div"),l=j("div");for(let t=0;t<s.length;t+=1)s[t].c();d=T(),c&&c.c(),k(l,"class","tab-nav scroll-hide svelte-kqij2n"),k(e,"class",_="tabs "+n[2].join(" ")+" svelte-kqij2n"),k(e,"id",n[1]),A(e,"hide",!n[0])},m(t,o){g(t,e,o),v(e,l);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(l,null);v(e,d),c&&c.m(e,null),i=!0},p(t,[o]){o&408&&(u=w(t[3]),s=P(s,o,m,1,t,u,f,l,Q,M,null,D)),c&&c.p&&(!i||o&1024)&&R(c,b,t,t[10],i?F(b,t[10],o,null):U(t[10]),null),(!i||o&4&&_!==(_="tabs "+t[2].join(" ")+" svelte-kqij2n"))&&k(e,"class",_),(!i||o&2)&&k(e,"id",t[1]),(!i||o&5)&&A(e,"hide",!t[0])},i(t){i||(J(c,t),i=!0)},o(t){L(c,t),i=!1},d(t){t&&p(e);for(let o=0;o<s.length;o+=1)s[o].d();c&&c.d(t)}}}const $={};function ee(n,e,l){let s,f,{$$slots:d={},$$scope:_}=e,{visible:i=!0}=e,{elem_id:u="id"}=e,{elem_classes:m=[]}=e,{selected:b}=e,c=[];const t=I(!1);S(n,t,a=>l(4,f=a));const o=I(0);S(n,o,a=>l(13,s=a));const r=V();W($,{register_tab:a=>(c.push({name:a.name,id:a.id}),t.update(h=>h??a.id),l(3,c),c.length-1),unregister_tab:a=>{const h=c.findIndex(y=>y.id===a.id);c.splice(h,1),t.update(y=>y===a.id?c[h]?.id||c[c.length-1]?.id:y)},selected_tab:t,selected_tab_index:o});function q(a){l(9,b=a),C(t,f=a,f),C(o,s=c.findIndex(h=>h.id===a),s),r("change")}const E=(a,h)=>{q(a.id),r("select",{value:a.name,index:h})};return n.$$set=a=>{"visible"in a&&l(0,i=a.visible),"elem_id"in a&&l(1,u=a.elem_id),"elem_classes"in a&&l(2,m=a.elem_classes),"selected"in a&&l(9,b=a.selected),"$$scope"in a&&l(10,_=a.$$scope)},n.$$.update=()=>{n.$$.dirty&512&&b!==null&&q(b)},[i,u,m,c,f,t,o,r,q,b,_,d,E]}class le extends G{constructor(e){super(),H(this,e,ee,x,K,{visible:0,elem_id:1,elem_classes:2,selected:9})}}export{le as T,$ as a};
//# sourceMappingURL=TabItem.svelte_svelte_type_style_lang-d691be85.js.map
