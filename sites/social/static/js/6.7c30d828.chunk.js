(this.webpackJsonpsocial_ts=this.webpackJsonpsocial_ts||[]).push([[6],{346:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}t.d(n,"a",(function(){return r}))},348:function(e,n,t){e.exports={usersInner:"Users_usersInner__2v4Ca",usersWrapper:"Users_usersWrapper__2gv8N",users__leftSide:"Users_users__leftSide__2K0Yk",usersPhoto:"Users_usersPhoto__3osYH",usersBtn:"Users_usersBtn__1iOAv",users__rightSide:"Users_users__rightSide__2yxXk",pagination:"Users_pagination__2Njh9",usersPagination:"Users_usersPagination__1qbrf",pages:"Users_pages__2ZPtK",selectedPage:"Users_selectedPage__J63sh",usersItems:"Users_usersItems__3D9Hj",pageBtnDisplayNone:"Users_pageBtnDisplayNone__2TZjX",pageBtn:"Users_pageBtn__2Wtq-"}},351:function(e,n,t){"use strict";t.d(n,"b",(function(){return u}));t(0);var r=t(348),s=t.n(r),o=t(30),i=t(1),u="https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";n.a=function(e){return Object(i.jsxs)("div",{className:s.a.usersItems,children:[Object(i.jsx)(o.b,{to:"/profile/"+e.user.id,children:Object(i.jsx)("img",{className:s.a.usersPhoto,alt:"user_photo",src:null!==e.user.photos.small?e.user.photos.small:u})}),Object(i.jsx)("div",{children:e.user.followed?Object(i.jsx)("button",{disabled:e.followingInProgress.includes(e.user.id),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(i.jsx)("button",{disabled:e.followingInProgress.includes(e.user.id),onClick:function(){e.follow(e.user.id)},children:"Follow"})}),Object(i.jsxs)("span",{children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("div",{children:e.user.name}),Object(i.jsx)("div",{children:e.user.status})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("div",{children:"props.location.country"}),Object(i.jsx)("div",{children:"props.location.city"})]})]})]})}},359:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(9),s=t(346),o=(t(0),t(40)),i=t(1),u=function(e){return{isAuth:e.auth.isAuth}};function a(e){return Object(o.b)(u)((function(n){n.isAuth;var t=Object(s.a)(n,["isAuth"]);return Object(i.jsx)(e,Object(r.a)({},t))}))}},421:function(e,n,t){"use strict";t.r(n);var r=t(62),s=t(63),o=t(84),i=t(83),u=t(0),a=t.n(u),c=t(40),l=t(131),p=t(348),g=t.n(p),f=t(16),h=t(1),d=function(e){for(var n=Math.ceil(e.totalItemsCount/e.pageSize),t=[],r=1;r<=n;r++)t.push(r);var s=Math.ceil(n/e.portionSize),o=Object(u.useState)(1),i=Object(f.a)(o,2),a=i[0],c=i[1],l=(a-1)*e.portionSize+1,p=a*e.portionSize;return Object(h.jsxs)("div",{className:g.a.usersPagination,children:[a>1&&Object(h.jsx)("button",{className:g.a.pageBtn,onClick:function(){c(a-1)},children:" \u2190 "}),t.filter((function(e){return e>=l&&e<=p})).map((function(n){return Object(h.jsx)("span",{className:e.currentPage===n?g.a.selectedPage:g.a.pages,onClick:function(){return e.onPageChanged(n)},children:n},n)})),s>a&&Object(h.jsx)("button",{className:g.a.pageBtn,onClick:function(){c(a+1)},children:" \u2192 "})]})},j=t(351),b=function(e){return Object(h.jsxs)("div",{className:g.a.usersInner,children:[Object(h.jsx)(d,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:e.portionSize}),e.usersPage.map((function(n){return Object(h.jsx)(j.a,{user:n,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},n.id)}))]})},_=t(103),P=t(359),O=t(59);function v(e,n){return e===n}function w(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,s=0;s<r;s++)if(!e(n[s],t[s]))return!1;return!0}function x(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var m=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];var o=0,i=r.pop(),u=x(r),a=e.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(t)),c=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return a.apply(null,e)}));return c.resultFunc=i,c.dependencies=u,c.recomputations=function(){return o},c.resetRecomputations=function(){return o=0},c}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,t=null,r=null;return function(){return w(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var y=m((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),S=function(e){return e.usersPage.pageSize},C=function(e){return e.usersPage.totalUsersCount},U=function(e){return e.usersPage.currentPage},z=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},k=function(e){return e.usersPage.portionSize},N=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){e.props.getUsers(n,e.props.pageSize)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(_.a,{}):null,Object(h.jsx)(b,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,usersPage:this.props.usersPage,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,portionSize:this.props.portionSize})]})}}]),t}(a.a.Component);n.default=Object(O.d)(P.a,Object(c.b)((function(e){return{usersPage:y(e),pageSize:S(e),totalUsersCount:C(e),currentPage:U(e),isFetching:z(e),followingInProgress:I(e),portionSize:k(e)}}),{follow:l.b,unfollow:l.h,setCurrentPage:l.e,toggleFollowingProgress:l.f,getUsers:l.c,onPageChanged:l.d,toggleIsFetching:l.g}))(N)}}]);
//# sourceMappingURL=6.7c30d828.chunk.js.map