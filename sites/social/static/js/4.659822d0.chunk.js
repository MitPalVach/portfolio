(this.webpackJsonpsocial_ts=this.webpackJsonpsocial_ts||[]).push([[4],{290:function(s,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a(5),t=a(89),_=(a(0),a(16)),l=a(1),o=function(s){return{isAuth:s.auth.isAuth}};function n(s){return Object(_.b)(o)((function(e){e.isAuth;var a=Object(t.a)(e,["isAuth"]);return Object(l.jsx)(s,Object(i.a)({},a))}))}},293:function(s,e,a){s.exports={dialogs:"Dialogs_dialogs__2xRSA",dir__title:"Dialogs_dir__title__euGaD",dialogUsers:"Dialogs_dialogUsers__3n8lx",dialogMessages__wrapper:"Dialogs_dialogMessages__wrapper__3yGDs",dialogMessages:"Dialogs_dialogMessages__3ag9d",dialogFormWrapper:"Dialogs_dialogFormWrapper__16edN",dialogMessages__input:"Dialogs_dialogMessages__input__1ACmk",dialogMessages__btn:"Dialogs_dialogMessages__btn__QhydC"}},297:function(s,e,a){s.exports={dialogs__item:"DialogItem_dialogs__item__1Cdio",dialogs__itemLink_img:"DialogItem_dialogs__itemLink_img__cYh4p",dialogs__itemLink:"DialogItem_dialogs__itemLink__tlNq4",dialogs__itemLink_active:"DialogItem_dialogs__itemLink_active__2OIAv",dialogs__item_name:"DialogItem_dialogs__item_name__3uvlk"}},298:function(s,e,a){s.exports={dialogsMessages__item:"Message_dialogsMessages__item__fepUr"}},300:function(s,e,a){"use strict";a.r(e);var i=a(126),t=(a(0),a(293)),_=a.n(t),l=a(297),o=a.n(l),n=a(17),d=a(1),g=function(s){return Object(d.jsx)("div",{className:o.a.dialogs__item,children:Object(d.jsxs)(n.b,{className:o.a.dialogs__itemLink,to:"/dialogs/"+s.dialogs.id,activeClassName:o.a.dialogs__itemLink_active,children:[Object(d.jsx)("img",{className:o.a.dialogs__itemLink_img,src:s.dialogs.friendsAvatar,alt:""}),Object(d.jsx)("div",{className:o.a.dialogs__item_name,children:s.dialogs.name})]})})},c=a(298),r=a.n(c),m=function(s){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:r.a.dialogsMessages__item,children:s.messages.message},s.messages.id)})},u=a(128),j=a(129),b=a(73),p=a(72),O=Object(b.a)(50),h=Object(j.a)({form:"dialogAddMessageForm"})((function(s){return Object(d.jsxs)("form",{className:_.a.dialogFormWrapper,onSubmit:s.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{className:_.a.dialogMessages__input,component:p.b,name:"newMessageBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[b.b,O]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:_.a.dialogMessages__btn,children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"})})]})})),x=function(s){var e=s.dialogsPage,a=e.dialogs.map((function(s){return Object(d.jsx)(g,{dialogs:s},s.id)})),i=e.messages.map((function(s){return Object(d.jsx)(m,{messages:s},s.id)}));return Object(d.jsxs)("div",{className:_.a.dialogs,children:[Object(d.jsx)("div",{className:_.a.dialogUsers,children:a}),Object(d.jsxs)("div",{className:_.a.dialogMessages__wrapper,children:[Object(d.jsx)("h4",{className:_.a.dir__title,children:" Dialogs "}),Object(d.jsx)("div",{className:_.a.dialogMessages,children:i}),Object(d.jsx)(h,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]})]})},f=a(16),v=a(290),M=a(10);e.default=Object(M.d)(Object(f.b)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s(Object(i.b)(e))}}})),v.a)(x)}}]);
//# sourceMappingURL=4.659822d0.chunk.js.map