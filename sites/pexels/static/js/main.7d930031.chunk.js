(this.webpackJsonpimages_by_pexels=this.webpackJsonpimages_by_pexels||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),s=n.n(a),o=n(2),i=n(4),l=n(14),u=n.n(l),j=(n(28),n(5)),b=n.n(j),d=n(15),h=n(17),O="GET_PHOTOS",p="SET_ERROR",f=Object(h.a)("563492ad6f91700001000001515a20bbb2e84744a03a7e6c082810a8"),m=function(e,t,n,c){return function(){var r=Object(d.a)(b.a.mark((function r(a){var s;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.photos.search({page:e,query:t,per_page:10});case 3:if(!("error"in(s=r.sent))){r.next=8;break}throw new Error(s.error);case 8:a({type:O,payload:{photos:s.photos,page:e,total_results:s.total_results}}),n();case 10:r.next=16;break;case 12:r.prev=12,r.t0=r.catch(0),a(g("err.message")),c();case 16:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},x=function(e,t,n){return function(){var c=Object(d.a)(b.a.mark((function c(r){var a;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,f.photos.curated({page:e,per_page:10});case 3:if(!("error"in(a=c.sent))){c.next=8;break}throw new Error(a.error);case 8:r({type:O,payload:{photos:a.photos,page:e,total_results:0}}),t();case 10:c.next=16;break;case 12:c.prev=12,c.t0=c.catch(0),r(g("err.message")),n();case 16:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()},g=function(e){return{type:p,payload:e}},v=n(1),N=function(e){var t=e.type,n=void 0===t?"text":t,c=e.placeholder,r=e.value,a=e.name,s=e.onChange;return Object(v.jsx)("div",{className:"field mb-0",children:Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input is-large",type:n,placeholder:c,value:r,name:a,id:a,onChange:s,required:!0,autoComplete:"off"})})})},y=function(e){var t=e.onSearch,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(v.jsx)("section",{className:"hero is-medium is-dark has-text-centered is-bold",children:Object(v.jsx)("div",{className:"hero-body",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"title is-uppercase mb-6",children:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 pexels"}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),s("")},className:"form",children:[Object(v.jsx)(N,{value:a,onChange:function(e){return s(e.currentTarget.value)},placeholder:"\u041f\u043e\u0438\u0441\u043a..."}),Object(v.jsx)("button",{className:"button is-large is-danger ml-4",children:"\u041f\u043e\u0438\u0441\u043a"})]})]})})})},k=function(e){var t=e.src,n=e.onClose,r=e.authorName,a=e.authorUrl,s=Object(c.useState)(!0),i=Object(o.a)(s,2),l=i[0],u=i[1];return Object(v.jsxs)("div",{className:"modal is-active",children:[Object(v.jsx)("div",{className:"modal-background",onClick:n}),Object(v.jsxs)("div",{className:"modal-content",children:[l&&Object(v.jsx)("div",{className:"loading-wrapper",children:Object(v.jsx)("div",{className:"loading"})}),Object(v.jsx)("img",{src:t,alt:"",onLoad:function(){return u(!1)},className:l?"is-hidden":""}),!l&&Object(v.jsxs)("p",{className:"author",children:["Author: ",Object(v.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:r})]})]}),Object(v.jsx)("button",{className:"modal-close is-large",onClick:n})]})},S=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.photos})),n=t.photos,r=t.total_results,a=t.error,s=Object(c.useState)("trending"),j=Object(o.a)(s,2),b=j[0],d=j[1],h=Object(c.useState)(!0),O=Object(o.a)(h,2),p=O[0],f=O[1],N=Object(c.useState)(""),S=Object(o.a)(N,2),_=S[0],C=S[1],w=Object(c.useState)(1),E=Object(o.a)(w,2),T=E[0],F=E[1],P=Object(c.useState)("\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"),R=Object(o.a)(P,2),B=R[0],D=R[1],L=Object(c.useState)(!1),q=Object(o.a)(L,2),I=q[0],J=q[1],M=Object(c.useState)(!1),U=Object(o.a)(M,2),z=U[0],A=U[1],G=Object(c.useState)(""),H=Object(o.a)(G,2),K=H[0],Q=H[1],V=Object(c.useState)(""),W=Object(o.a)(V,2),X=W[0],Y=W[1],Z=Object(c.useState)(""),$=Object(o.a)(Z,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){e(x(1,(function(){return f(!1)}),(function(){return f(!1)})))}),[e]);var ne=null;return ne=p?Object(v.jsx)("div",{className:"is-flex is-justify-content-center py-6",children:Object(v.jsx)("div",{className:"loading"})}):a?Object(v.jsx)("div",{className:"notification is-danger mt-6 has-text-centered",children:a}):Object(v.jsxs)(c.Fragment,{children:["search"===b&&Object(v.jsx)("div",{className:"is-flex is-justify-content-center pt-5",children:Object(v.jsx)("button",{className:"button is-link",onClick:function(){f(!0),D("\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"),d("trending"),e(x(1,(function(){return f(!1)}),(function(){return f(!1)})))},children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u043c"})}),Object(v.jsx)("h2",{className:"is-size-1 has-text-centered py-6",children:B}),n.length>0?Object(v.jsx)(l.ResponsiveMasonry,{columnsCountBreakPoints:{480:2,900:5},children:Object(v.jsx)(u.a,{gutter:20,children:n.map((function(e){return Object(v.jsx)("div",{className:"masonry-item",children:Object(v.jsx)("a",{href:"/#",onClick:function(e){},children:Object(v.jsx)("img",{src:e.src.large,alt:"",onClick:function(t){return function(e,t){e.preventDefault(),Q(t.src.original),te(t.photographer_url),Y(t.photographer),A(!0)}(t,e)}})})},e.id)}))})}):Object(v.jsx)("p",{className:"has-text-centered",children:"\u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0434\u0430\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}),Object(v.jsx)("div",{className:"is-flex is-justify-content-center py-6",children:(r>10*T||"trending"===b)&&Object(v.jsx)("button",{className:"button is-primary is-large",onClick:function(){J(!0),F((function(e){return e+1})),e("trending"===b?x(T+1,(function(){return J(!1)}),(function(){return J(!1)})):m(T+1,_,(function(){return J(!1)}),(function(){return J(!1)})))},disabled:I,children:I?Object(v.jsx)("div",{className:"loading loading--small"}):"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{onSearch:function(t){a&&g(""),d("search"),f(!0),C(t),F(1),e(m(1,t,(function(){return f(!1)}),(function(){return f(!1)}))),D('\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 - "'.concat(t,'"'))}}),Object(v.jsx)("div",{className:"container px-4",children:ne}),z&&Object(v.jsx)(k,{src:K,onClose:function(){Q(""),Y(""),te(""),A(!1)},authorName:X,authorUrl:ee})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},C=n(9),w=n(18),E=n(6),T=n(16),F={photos:[],total_results:0,error:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n=t.payload,c=n.page,r=n.photos,a=n.total_results,s=[];return s=c>1?[].concat(Object(T.a)(e.photos),Object(T.a)(r)):r,Object(E.a)(Object(E.a)({},e),{},{photos:s,total_results:a,error:""});case p:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload});default:return e}},R=Object(C.b)({photos:P}),B=Object(C.c)(R,Object(C.a)(w.a));n(34);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(i.a,{store:B,children:Object(v.jsx)(S,{})})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.7d930031.chunk.js.map