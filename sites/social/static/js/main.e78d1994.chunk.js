(this.webpackJsonpsocial_ts=this.webpackJsonpsocial_ts||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(40),r=n(5),c="SEND-MESSAGE",i={dialogs:[{id:1,name:"Tom",friendsAvatar:"https://images.pexels.com/photos/3622695/pexels-photo-3622695.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{id:2,name:"Alex",friendsAvatar:"https://images.pexels.com/photos/3732453/pexels-photo-3732453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{id:3,name:"Jane",friendsAvatar:"https://images.pexels.com/photos/6474755/pexels-photo-6474755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}],messages:[{id:1,message:"Hello"},{id:2,message:"Hi"},{id:3,message:"Bye"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)({},e),{},{messages:[{id:6,message:t.newMessageBody}].concat(Object(a.a)(e.messages))})}return e}},127:function(e,t,n){"use strict";n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return x})),n.d(t,"f",(function(){return N})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return y})),n.d(t,"h",(function(){return S}));var a=n(12),r=n.n(a),c=n(20),i=n(40),s=n(5),o=n(21),u="FOLLOW",l="UNFOLLOW",d="SET_USERS",j="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",f="ON_PAGE_CHANGED",p="TOGGLE_IS_FETCHING",O="TOGGLE_IS_FOLLOWING_PROGRESS",m={users:[],pageSize:20,totalUsersCount:0,currentPage:1,pageNumber:1,isFetching:!0,followingInProgress:[],portionSize:10},h=function(e){return{type:u,userId:e}},_=function(e){return{type:l,userId:e}},v=function(e){return{type:j,currentPage:e}},g=function(e){return{type:f,pageNumber:e}},x=function(e){return{type:p,isFetching:e}},N=function(e,t){return{type:O,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),a(v(e)),n.next=4,o.c.getUsers(e,t);case 4:c=n.sent,a(x(!1)),a((i=c.items,{type:d,users:i})),a((r=c.totalCount,{type:b,totalUsersCount:r}));case 8:case"end":return n.stop()}var r,i}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(N(!0,e)),t.next=3,o.c.follow(e);case 3:0===t.sent.data.resultCode&&n(h(e)),n(N(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(N(!0,e)),t.next=3,o.c.unfollow(e);case 3:0===t.sent.data.resultCode&&n(_(e)),n(N(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case l:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case d:return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case j:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case b:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case f:return Object(s.a)(Object(s.a)({},e),{},{pageNumber:t.pageNumber});case p:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case O:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},163:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(131),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"411482a7-ac02-48c2-a201-383524308513"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e))},follow:function(e){return r.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileApi object"),i.getProfile(e)}},i={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status/",{status:e})}},s={me:function(){return r.get("auth/me")},login:function(e,t,n){return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},26:function(e,t,n){e.exports={header:"Header_header__1VCKf",header__inner:"Header_header__inner__26ef8",headerLogo:"Header_headerLogo__pHUY0",headerTitle:"Header_headerTitle__3Y2pE",loginBlock:"Header_loginBlock__6mma5",loginLogoutBtn:"Header_loginLogoutBtn__31tEv"}},287:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(60),i=n.n(c),s=(n(163),n(61)),o=n(62),u=n(65),l=n(64),d=n(50),j=n.n(d),b=n(11),f=n(17),p=n(9),O=n.n(p),m=n(16),h=n(90),_=n.n(h),v=n(67),g=n.n(v),x=n(1),N=function(e){return Object(x.jsxs)("div",{className:g.a.fOnline__inner,children:[Object(x.jsx)("div",{className:g.a.fOnline__name,children:e.name}),Object(x.jsx)("img",{className:g.a.fOnline__ava,src:e.ava,alt:""})]})},w=function(e){var t=e.friendsOnline.sidebar.map((function(e){return Object(x.jsx)(N,{name:e.name,ava:e.ava,id:e.id},e.id)}));return Object(x.jsxs)("div",{className:_.a.fOnline,children:[Object(x.jsx)("h5",{className:_.a.fOnline__title,children:"\u0414\u0440\u0443\u0437\u044c\u044f \u043e\u043d\u043b\u0430\u0439\u043d"}),t]})},y=Object(m.b)((function(e){return{friendsOnline:e.friendsOnline}}))(w),S=function(){return Object(x.jsxs)("nav",{className:O.a.navbar,children:[Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/profile",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/dialogs",children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/users",children:"\u0414\u0440\u0443\u0437\u044c\u044f"})}),Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/news",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/music",children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/photo",children:"\u0424\u043e\u0442\u043e"})}),Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/video",children:"\u0412\u0438\u0434\u0435\u043e"})}),Object(x.jsx)("div",{className:O.a.navbarItem,children:Object(x.jsx)(f.b,{className:O.a.navbarItem__link,activeClassName:O.a.active,to:"/settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),Object(x.jsx)("div",{className:O.a.friendsOnline,children:Object(x.jsx)(y,{})})]})},I=function(){return Object(x.jsx)("div",{children:"News"})},E=function(){return Object(x.jsx)("div",{children:"Music"})},C=function(){return Object(x.jsx)("div",{children:"Photo"})},k=function(){return Object(x.jsx)("div",{children:"Video"})},T=function(){return Object(x.jsx)("div",{children:"Settings"})},A=n(5),P=n(26),L=n.n(P),F=function(e){return Object(x.jsxs)("header",{className:L.a.header,children:[Object(x.jsx)("a",{className:L.a.header__inner,href:"/profile",children:Object(x.jsx)("img",{className:L.a.headerLogo,src:"https://img.icons8.com/ios/452/owl.png",alt:"logo"})}),Object(x.jsx)("a",{className:L.a.header__inner,href:"/profile",children:Object(x.jsx)("h1",{className:L.a.headerTitle,children:"owlbook.com"})}),Object(x.jsx)("div",{className:L.a.loginBlock,children:e.isAuth?Object(x.jsxs)("div",{children:[e.login," ",Object(x.jsx)("button",{className:L.a.loginLogoutBtn,onClick:e.logout,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(x.jsx)(f.b,{className:L.a.loginLogoutBtn,to:"/login",children:"\u0432\u043e\u0439\u0442\u0438"})})]})},U=n(12),D=n.n(U),z=n(20),B=n(21),H=n(51),M="auth/SET_USER_DATA",R={userId:null,email:null,login:null,isAuth:!1},G=function(e,t,n,a){return{type:M,payload:{userId:e,email:t,login:n,isAuth:a}}},W=function(){return function(){var e=Object(z.a)(D.a.mark((function e(t){var n,a,r,c,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,c=a.email,i=a.login,t(G(r,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(A.a)(Object(A.a)({},e),t.payload);default:return e}},K=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(F,Object(A.a)({},this.props))}}]),n}(r.a.Component),Y=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(z.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.logout();case 2:0===e.sent.data.resultCode&&t(G(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(K),V=n(128),X=n(129),q=n(72),Z=n(68),Q=n.n(Z),$=n(73),ee=Object(X.a)({form:"login"})((function(e){return Object(x.jsxs)("form",{onSubmit:e.handleSubmit,className:Q.a.loginFormWrapper,children:[Object(x.jsx)("div",{children:Object(x.jsx)(V.a,{"aria-label":"Email",placeholder:"Email",type:"Email",name:"email",component:q.a,validate:$.b})}),Object(x.jsx)("div",{children:Object(x.jsx)(V.a,{"aria-label":"Password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",component:q.a,validate:$.b})}),Object(x.jsxs)("div",{children:[Object(x.jsx)(V.a,{type:"checkbox",name:"rememberMe",component:"input"})," \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c"]}),e.error&&Object(x.jsx)("div",{className:Q.a.formSummaryError,children:e.error}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:Q.a.loginBtn,children:"Login"})})]})})),te=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(z.a)(D.a.mark((function a(r){var c,i;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,B.a.login(e,t,n);case 2:if(0!==(c=a.sent).data.resultCode){a.next=8;break}return a.next=6,r(W());case 6:a.next=10;break;case 8:i=c.data.messages.length>0?c.data.messages[0]:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0432\u043e\u0434\u0430",r(Object(H.a)("login",{_error:i}));case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(x.jsx)(ee,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),ne=n(10),ae="https://cdn-icons-png.flaticon.com/512/12/12426.png",re={sidebar:[{id:1,name:"\u041d\u0435\u044f\u0441\u044b\u0442\u044c",ava:ae},{id:2,name:"\u0424\u0438\u043b\u0438\u043d",ava:ae},{id:3,name:"\u041f\u043e\u043b\u044f\u0440\u043d\u0430\u044f \u0441\u043e\u0432\u0430",ava:ae}]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re;return e},ie=n(126),se=n(96),oe=n(127),ue=n(133),le=n(130),de="SUCCESS_INITIALIZED",je={initialized:!1},be=function(){return{type:de}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(A.a)(Object(A.a)({},e),{},{initialized:!0});default:return e}},pe=Object(ne.c)({profilePage:se.b,dialogsPage:ie.a,friendsOnline:ce,usersPage:oe.a,auth:J,form:le.a,app:fe}),Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,me=Object(ne.e)(pe,Oe(Object(ne.a)(ue.a))),he=n(88),_e=r.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),ve=r.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),ge=r.a.lazy((function(){return n.e(5).then(n.bind(null,301))})),xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(x.jsx)("div",{className:j.a.container,children:Object(x.jsxs)("div",{className:j.a.app__wrapper,children:[Object(x.jsx)(Y,{}),Object(x.jsx)(S,{}),Object(x.jsx)("div",{className:j.a.content__wrapper,children:Object(x.jsxs)("div",{className:j.a.content__inner,children:[Object(x.jsxs)(r.a.Suspense,{fallback:Object(x.jsx)(he.a,{}),children:[Object(x.jsx)(b.a,{path:"/profile/:userId?",component:_e}),Object(x.jsx)(b.a,{path:"/dialogs",component:ve}),Object(x.jsx)(b.a,{path:"/users",component:ge})]}),Object(x.jsx)(b.a,{path:"/news",render:function(){return Object(x.jsx)(I,{})}}),Object(x.jsx)(b.a,{path:"/music",render:function(){return Object(x.jsx)(E,{})}}),Object(x.jsx)(b.a,{path:"/photo",render:function(){return Object(x.jsx)(C,{})}}),Object(x.jsx)(b.a,{path:"/video",render:function(){return Object(x.jsx)(k,{})}}),Object(x.jsx)(b.a,{path:"/settings",render:function(){return Object(x.jsx)(T,{})}}),Object(x.jsx)(b.a,{path:"/login",render:function(){return Object(x.jsx)(te,{})}})]})})]})}):Object(x.jsx)(he.a,{})}}]),n}(r.a.Component),Ne=Object(ne.d)(b.e,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(W());Promise.all([t]).then((function(){e(be())}))}}}))(xe),we=function(){return Object(x.jsx)(f.a,{children:Object(x.jsx)(m.a,{store:me,children:Object(x.jsx)(Ne,{})})})};i.a.render(Object(x.jsx)(we,{}),document.getElementById("root"))},31:function(e,t,n){e.exports={formControl:"FormControls_formControl__zKx4R",error:"FormControls_error__frz7K",inputWindow:"FormControls_inputWindow__2O6cV",errorMessage:"FormControls_errorMessage__3coxl"}},50:function(e,t,n){e.exports={container:"App_container__16xz_",app__wrapper:"App_app__wrapper__1z8PO",content__wrapper:"App_content__wrapper__32aMC",content__inner:"App_content__inner__37WXs"}},67:function(e,t,n){e.exports={fOnline__inner:"FriendsAvatar_fOnline__inner__3mbGn",fOnline__name:"FriendsAvatar_fOnline__name__2sdlO",fOnline__ava:"FriendsAvatar_fOnline__ava__22q3P"}},68:function(e,t,n){e.exports={loginFormWrapper:"Login_loginFormWrapper__20PK_",loginBtn:"Login_loginBtn__JiEkY",formSummaryError:"Login_formSummaryError__3cy0x"}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n(5),r=n(89),c=(n(0),n(31)),i=n.n(c),s=n(1),o=function(e){e.input,e.meta;var t=Object(r.a)(e,["input","meta"]),n=e.meta.touched&&e.meta.error;return Object(s.jsxs)("div",{className:"".concat(i.a.formControl," ").concat(n?i.a.error:""),children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",Object(a.a)(Object(a.a)({},e.input),t))}),n&&Object(s.jsx)("div",{className:i.a.errorMessage,children:e.meta.error})]})},u=function(e){e.input,e.meta;var t=Object(r.a)(e,["input","meta"]),n=e.meta.touched&&e.meta.error;return Object(s.jsxs)("div",{className:"".concat(i.a.formControl," ").concat(n?i.a.error:""),children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",Object(a.a)(Object(a.a)({className:i.a.inputWindow},e.input),t))}),n&&Object(s.jsx)("div",{className:i.a.errorMessage,children:e.meta.error})]})}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435"},r=function(e){return function(t){if(t.length>e)return"\u041d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},88:function(e,t,n){"use strict";n(0);var a=n(1),r="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=790b7611ea276bbbbaa21051bf651344dc6397a74078b299&rid=giphy.gif&ct=g";t.a=function(){return Object(a.jsx)("div",{style:{background:"white"},children:Object(a.jsx)("img",{src:r,alt:r})})}},9:function(e,t,n){e.exports={navbar:"Navbar_navbar__CLYHD",navbarItem:"Navbar_navbarItem__1xOtf",navbarItem__link:"Navbar_navbarItem__link__2g1i6",active:"Navbar_active__3mbhk",friendsOnline:"Navbar_friendsOnline__2Jno3"}},90:function(e,t,n){e.exports={fOnline:"FriendsOnline_fOnline__3EvEn",fOnline__title:"FriendsOnline_fOnline__title__3WIS0"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return v}));var a=n(12),r=n.n(a),c=n(20),i=n(40),s=n(5),o=n(21),u="ADD-POST",l="DELETE_POST",d="SET_USER_PROFILE",j="SET_USER_STATUS",b="SET_UPDATE_STATUS",f={postData:[{message:"Hi, how are you?",id:1,likeCount:12},{message:"What do you think about JS?",id:2,likeCount:22},{message:"I learn not only JS but and TS!",id:3,likeCount:42},{message:"Oh, it's cool",id:4,likeCount:23}],profile:null,status:""},p=function(e){return{type:u,newPostText:e}},O=function(e){return{type:j,status:e}},m=function(e){return{type:"SET_UPDATE_STATUS",status:e}},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:return a=t.sent,n((r=a.data,{type:d,profile:r})),t.next=6,n(_(e));case 6:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(O(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likeCount:0};return Object(s.a)(Object(s.a)({},e),{},{postData:[n].concat(Object(i.a)(e.postData))});case l:return Object(s.a)(Object(s.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case j:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case d:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case b:return Object(s.a)(Object(s.a)({},e),{},{status:t.status})}return e}}},[[287,1,2]]]);
//# sourceMappingURL=main.e78d1994.chunk.js.map