(this.webpackJsonpsocial_ts=this.webpackJsonpsocial_ts||[]).push([[3],{288:function(e,s,t){e.exports={usersInner:"Users_usersInner__2v4Ca",usersWrapper:"Users_usersWrapper__2gv8N",users__leftSide:"Users_users__leftSide__2K0Yk",usersPhoto:"Users_usersPhoto__3osYH",usersBtn:"Users_usersBtn__1iOAv",users__rightSide:"Users_users__rightSide__2yxXk",pagination:"Users_pagination__2Njh9",usersPagination:"Users_usersPagination__1qbrf",pages:"Users_pages__2ZPtK",selectedPage:"Users_selectedPage__J63sh",usersItems:"Users_usersItems__3D9Hj",pageBtnDisplayNone:"Users_pageBtnDisplayNone__2TZjX",pageBtn:"Users_pageBtn__2Wtq-"}},289:function(e,s,t){"use strict";t.d(s,"b",(function(){return i}));t(0);var r=t(288),o=t.n(r),n=t(17),a=t(1),i="https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";s.a=function(e){return Object(a.jsxs)("div",{className:o.a.usersItems,children:[Object(a.jsx)(n.b,{to:"/profile/"+e.user.id,children:Object(a.jsx)("img",{className:o.a.usersPhoto,alt:"user_photo",src:null!==e.user.photos.small?e.user.photos.small:i})}),Object(a.jsx)("div",{children:e.user.followed?Object(a.jsx)("button",{disabled:e.followingInProgress.includes(e.user.id),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(a.jsx)("button",{disabled:e.followingInProgress.includes(e.user.id),onClick:function(){e.follow(e.user.id)},children:"Follow"})}),Object(a.jsxs)("span",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:e.user.name}),Object(a.jsx)("div",{children:e.user.status})]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{children:"props.location.country"}),Object(a.jsx)("div",{children:"props.location.city"})]})]})]})}},291:function(e,s,t){"use strict";t.d(s,"a",(function(){return o}));var r=t(95);function o(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,n=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!s||t.length!==s);r=!0);}catch(c){o=!0,n=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}return t}}(e,s)||Object(r.a)(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(e,s,t){e.exports={profileImg:"ProfileInfo_profileImg__3mXT7",avatar:"ProfileInfo_avatar__3xuFq",avatarImg:"ProfileInfo_avatarImg__2izmI",myPosts:"ProfileInfo_myPosts__1no8m",myPosts__input:"ProfileInfo_myPosts__input__3tJm9",myPosts__button:"ProfileInfo_myPosts__button__19Gsk",statusText:"ProfileInfo_statusText__1KWIZ"}},294:function(e,s,t){e.exports={posts:"MyPosts_posts__3tZ1c",myPosts__input_inner:"MyPosts_myPosts__input_inner__3ju60",myPosts__input:"MyPosts_myPosts__input__3c6Pi",myPosts__button:"MyPosts_myPosts__button__2y1hV"}},295:function(e,s,t){e.exports={postsItem:"Post_postsItem__1DHL5",postsItem__inner:"Post_postsItem__inner__1-7QK",postsItem__avatar:"Post_postsItem__avatar__3N6Bd",postsItem__messages:"Post_postsItem__messages__1V62h",postsItem__activity:"Post_postsItem__activity__1G8T2",postsItem__like:"Post_postsItem__like__3sh5I",postsItem__send:"Post_postsItem__send__QVbcU"}},296:function(e,s,t){e.exports={profileFormWrapper:"Profile_profileFormWrapper__1TJsL",profileMessages__input:"Profile_profileMessages__input__1M3bu",profileMessages__btn:"Profile_profileMessages__btn__1SIl3"}},299:function(e,s,t){"use strict";t.r(s);var r=t(0),o=t.n(r),n=t(70),a=t(292),i=t.n(a),c=t(89),_=t(291),u=t(1),l=function(e){var s=Object(r.useState)(!1),t=Object(_.a)(s,2),o=t[0],n=t[1],a=Object(r.useState)(e.status),c=Object(_.a)(a,2),l=c[0],p=c[1];Object(r.useEffect)((function(){p(e.status)}),[e.status]);return Object(u.jsxs)("div",{className:i.a.statusText,children:[!o&&Object(u.jsx)("span",{onDoubleClick:function(){n(!0)},children:l||"no status"}),o&&Object(u.jsx)("input",{onChange:function(e){p(e.currentTarget.value)},onBlur:function(){n(!1),e.updateStatus(l)},autoFocus:!0,value:l})]})},p=t(289),d=function(e){if(!e.profile)return Object(u.jsx)(c.a,{});return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:i.a.profileImg,src:e.profile.photos.large||p.b,alt:"owl"}),e.isOwner&&Object(u.jsx)("input",{type:"file",onChange:function(e){}})]}),Object(u.jsx)("div",{className:i.a.avatar,children:Object(u.jsx)(l,{status:e.status,updateStatus:e.updateStatus})})]})},f=t(96),j=t(294),b=t.n(j),m=t(295),h=t.n(m),O=function(e){return Object(u.jsxs)("div",{className:h.a.postsItem,children:[Object(u.jsxs)("div",{className:h.a.postsItem__inner,children:[Object(u.jsx)("img",{className:h.a.postsItem__avatar,src:"https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"avatar_to_all"}),e.post.message]}),Object(u.jsxs)("div",{className:h.a.postsItem__activity,children:[Object(u.jsxs)("span",{className:h.a.postsItem__like,children:[e.post.likeCount," \u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"]}),Object(u.jsx)("span",{className:h.a.postsItem__send,children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]})]})},P=t(128),x=t(129),g=t(296),v=t.n(g),I=t(74),y=t(73),w=Object(I.a)(50),S=Object(x.a)({form:"profileAddPostForm"})((function(e){return Object(u.jsxs)("form",{className:v.a.profileFormWrapper,onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(P.a,{className:v.a.profileMessages__input,component:y.b,name:"newPostText",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[I.b,w]})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:v.a.profileMessages__btn,children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"})})]})})),N=o.a.memo((function(e){var s=e.profilePage.postData.map((function(e){return Object(u.jsx)(O,{post:e},e.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(S,{onSubmit:function(s){e.addPost(s.newPostText),s.newPostText=""}})}),Object(u.jsx)("div",{className:b.a.posts,children:s})]})})),U=t(16),T=Object(U.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(s){e(Object(f.a)(s))}}}))(N),k=function(e){var s=e.profilePage,t=e.updateStatus,r=Object(n.a)(e,["profilePage","updateStatus"]);return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{profile:s.profile,status:s.status,isOwner:r.isOwner,updateStatus:t}),Object(u.jsx)(T,{profilePage:s})]})},M=t(11),B=t(10);s.default=Object(B.d)(Object(U.b)((function(e){return{profilePage:e.profilePage,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:f.c,updateStatus:f.e}),M.f)((function(e){var s=Object(U.c)();return Object(r.useEffect)((function(){var t=+e.match.params.userId;t||(t=e.authorizedUserId||0),s(Object(f.c)(t)),s(Object(f.d)(t))}),[]),Object(u.jsx)(k,{getUserProfile:e.getUserProfile,isOwner:!e.match.params.userId,updateStatus:e.updateStatus,profilePage:e.profilePage})}))}}]);
//# sourceMappingURL=3.ccdf3df1.chunk.js.map