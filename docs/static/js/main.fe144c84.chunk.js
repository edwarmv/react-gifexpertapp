(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(9),r=n(1),i=n(0),s=function(e){var t=e.setCategories,n=Object(r.useState)(""),s=Object(a.a)(n,2),u=s[0],o=s[1];return Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(c.a)(e))})),o(""))},children:Object(i.jsx)("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}})})},u=n(10),o=n(6),j=n.n(o),d=n(7),l=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=49GWePe4iJowUPCxzYZsXak0CLtu3SLh"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){e.id;var t=e.title,n=e.url;return Object(i.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(i.jsx)("img",{src:n,alt:t}),Object(i.jsx)("p",{children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(a.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){l(e).then((function(e){i({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,s=n.loading;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),s&&Object(i.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(i.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(i.jsx)(f,Object(u.a)({},e),e.id)}))})]})},b=function(){var e=Object(r.useState)(["One Punch"]),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:"GifExpertApp"}),Object(i.jsx)(s,{setCategories:c}),Object(i.jsx)("hr",{}),Object(i.jsx)("ol",{children:n.map((function(e){return Object(i.jsx)(p,{category:e},e)}))})]})},m=n(8),h=n.n(m);n(17);h.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fe144c84.chunk.js.map