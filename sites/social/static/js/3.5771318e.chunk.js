(this.webpackJsonpsocial_ts=this.webpackJsonpsocial_ts||[]).push([[3],{288:function(s,t,e){s.exports={usersInner:"Users_usersInner__2v4Ca",usersWrapper:"Users_usersWrapper__2gv8N",users__leftSide:"Users_users__leftSide__2K0Yk",usersPhoto:"Users_usersPhoto__3osYH",usersBtn:"Users_usersBtn__1iOAv",users__rightSide:"Users_users__rightSide__2yxXk",pagination:"Users_pagination__2Njh9",usersPagination:"Users_usersPagination__1qbrf",pages:"Users_pages__2ZPtK",selectedPage:"Users_selectedPage__J63sh",usersItems:"Users_usersItems__3D9Hj",pageBtnDisplayNone:"Users_pageBtnDisplayNone__2TZjX",pageBtn:"Users_pageBtn__2Wtq-"}},290:function(s,t,e){"use strict";e.d(t,"b",(function(){return i}));e(0);var o=e(288),r=e.n(o),a=e(17),n=e(1),i="https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";t.a=function(s){return Object(n.jsxs)("div",{className:r.a.usersItems,children:[Object(n.jsx)(a.b,{to:"/profile/"+s.user.id,children:Object(n.jsx)("img",{className:r.a.usersPhoto,alt:"user_photo",src:null!==s.user.photos.small?s.user.photos.small:i})}),Object(n.jsx)("div",{children:s.user.followed?Object(n.jsx)("button",{disabled:s.followingInProgress.includes(s.user.id),onClick:function(){s.unfollow(s.user.id)},children:"Unfollow"}):Object(n.jsx)("button",{disabled:s.followingInProgress.includes(s.user.id),onClick:function(){s.follow(s.user.id)},children:"Follow"})}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:s.user.name}),Object(n.jsx)("div",{children:s.user.status})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:"props.location.country"}),Object(n.jsx)("div",{children:"props.location.city"})]})]})]})}},291:function(s,t,e){"use strict";e.d(t,"a",(function(){return r}));var o=e(95);function r(s,t){return function(s){if(Array.isArray(s))return s}(s)||function(s,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(s)){var e=[],o=!0,r=!1,a=void 0;try{for(var n,i=s[Symbol.iterator]();!(o=(n=i.next()).done)&&(e.push(n.value),!t||e.length!==t);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return e}}(s,t)||Object(o.a)(s,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},293:function(s,t,e){s.exports={profileImg:"ProfileInfo_profileImg__3mXT7",avatar:"ProfileInfo_avatar__3xuFq",avatarImg:"ProfileInfo_avatarImg__2izmI",myPosts:"ProfileInfo_myPosts__1no8m",myPosts__input:"ProfileInfo_myPosts__input__3tJm9",myPosts__button:"ProfileInfo_myPosts__button__19Gsk",statusText:"ProfileInfo_statusText__1KWIZ"}},296:function(s,t,e){s.exports={posts:"MyPosts_posts__3tZ1c",myPosts__input_inner:"MyPosts_myPosts__input_inner__3ju60",myPosts__input:"MyPosts_myPosts__input__3c6Pi",myPosts__button:"MyPosts_myPosts__button__2y1hV"}},297:function(s,t,e){s.exports={postsItem:"Post_postsItem__1DHL5",postsItem__inner:"Post_postsItem__inner__1-7QK",postsItem__avatar:"Post_postsItem__avatar__3N6Bd",postsItem__messages:"Post_postsItem__messages__1V62h",postsItem__activity:"Post_postsItem__activity__1G8T2",postsItem__like:"Post_postsItem__like__3sh5I",postsItem__send:"Post_postsItem__send__QVbcU"}},298:function(s,t,e){s.exports={profileFormWrapper:"Profile_profileFormWrapper__1TJsL",profileMessages__input:"Profile_profileMessages__input__1M3bu",profileMessages__btn:"Profile_profileMessages__btn__1SIl3"}},299:function(s,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),a=e(293),n=e.n(a),i=e(88),c=e(291),_=e(1),u=function(s){var t=Object(o.useState)(!1),e=Object(c.a)(t,2),r=e[0],a=e[1],i=Object(o.useState)(s.status),u=Object(c.a)(i,2),l=u[0],p=u[1];Object(o.useEffect)((function(){p(s.status)}),[s.status]);return Object(_.jsxs)("div",{className:n.a.statusText,children:[!r&&Object(_.jsx)("span",{onDoubleClick:function(){a(!0)},children:l||"no status"}),r&&Object(_.jsx)("input",{onChange:function(s){p(s.currentTarget.value)},onBlur:function(){a(!1),s.updateStatus(l)},autoFocus:!0,value:l})]})},l=e(290),p=function(s){return s.profile?Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:n.a.profileImg,src:s.profile.photos.large||l.b,alt:"owl"})}),Object(_.jsxs)("div",{className:n.a.avatar,children:[s.profile.photos.large&&Object(_.jsx)("img",{className:n.a.avatarImg,src:s.profile.photos.large,alt:"avatar"}),Object(_.jsx)(u,{status:s.status,updateStatus:s.updateStatus})]})]}):Object(_.jsx)(i.a,{})},d=e(96),j=e(296),f=e.n(j),m=e(297),b=e.n(m),h=function(s){return Object(_.jsxs)("div",{className:b.a.postsItem,children:[Object(_.jsxs)("div",{className:b.a.postsItem__inner,children:[Object(_.jsx)("img",{className:b.a.postsItem__avatar,src:"https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"avatar_to_all"}),s.post.message]}),Object(_.jsxs)("div",{className:b.a.postsItem__activity,children:[Object(_.jsxs)("span",{className:b.a.postsItem__like,children:[s.post.likeCount," \u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"]}),Object(_.jsx)("span",{className:b.a.postsItem__send,children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})]})]})},P=e(128),x=e(129),g=e(298),O=e.n(g),v=e(73),I=e(72),y=Object(v.a)(50),S=Object(x.a)({form:"profileAddPostForm"})((function(s){return Object(_.jsxs)("form",{className:O.a.profileFormWrapper,onSubmit:s.handleSubmit,children:[Object(_.jsx)("div",{children:Object(_.jsx)(P.a,{className:O.a.profileMessages__input,component:I.b,name:"newPostText",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[v.b,y]})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{className:O.a.profileMessages__btn,children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"})})]})})),N=r.a.memo((function(s){var t=s.profilePage.postData.map((function(s){return Object(_.jsx)(h,{post:s},s.id)}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:Object(_.jsx)(S,{onSubmit:function(t){s.addPost(t.newPostText),t.newPostText=""}})}),Object(_.jsx)("div",{className:f.a.posts,children:t})]})})),w=e(16),U=Object(w.b)((function(s){return{postData:s.profilePage.postData,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s(Object(d.a)(t))}}}))(N),T=function(s){var t=s.profilePage,e=s.updateStatus;return Object(_.jsxs)("div",{children:[Object(_.jsx)(p,{profile:t.profile,status:t.status,updateStatus:e}),Object(_.jsx)(U,{profilePage:t})]})},k=e(11),M=e(10);t.default=Object(M.d)(Object(w.b)((function(s){return{profilePage:s.profilePage,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:d.c,updateStatus:d.e}),k.f)((function(s){var t=Object(w.c)();return Object(o.useEffect)((function(){var e=+s.match.params.userId;e||(e=s.authorizedUserId||0),t(Object(d.c)(e)),t(Object(d.d)(e))}),[]),Object(_.jsx)(T,{getUserProfile:s.getUserProfile,updateStatus:s.updateStatus,profilePage:s.profilePage})}))}}]);
//# sourceMappingURL=3.5771318e.chunk.js.map