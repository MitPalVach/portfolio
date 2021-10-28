(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{127:function(t,e,n){},128:function(t,e,n){},157:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),o=n.n(i),r=n(34),s=n.n(r),l=(n(127),n(128),n(20)),d=n(13),u=n(15),j=n(101),b=n.n(j).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"411482a7-ac02-48c2-a201-383524308513"}}),O=function(){return b.get("todo-lists")},f=function(t){return b.post("todo-lists",{title:t})},h=function(t){return b.delete("todo-lists/".concat(t))},m=function(t,e){return b.put("todo-lists/".concat(t),{title:e})},T=function(t){return b.get("todo-lists/".concat(t,"/tasks"))},p=function(t,e){return b.delete("todo-lists/".concat(t,"/tasks/").concat(e))},v=function(t,e){return b.post("todo-lists/".concat(t,"/tasks"),{title:e})},g=function(t,e,n){return b.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},x=function(t){return b.post("auth/login",t)},k=function(){return b.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var S=function(t,e){t.messages.length?e(A(t.messages[0])):e(A("Some error occurred")),e(D("failed"))},I=function(t,e){e(A(t.message?t.message:"Some error occurred")),e(D("failed"))},C={isLoggedIn:!1},E=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},y={status:"idle",error:null},A=function(t){return{type:"APP/SET-ERROR",error:t}},D=function(t){return{type:"APP/SET-STATUS",status:t}},w=[],L=n(5),P={},N=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var o=Object(d.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);g(n,t,o).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else S(c.data,a)})).catch((function(t){I(t,a)}))}else console.warn("task not found in the state")}},F=n(210),R=n(218),M=n(14),G=n(203),K=n(211),H=n(199),U=n(2),V=o.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var c=Object(i.useState)(""),o=Object(M.a)(c,2),r=o[0],s=o[1],l=Object(i.useState)(null),d=Object(M.a)(l,2),u=d[0],j=d[1],b=function(){""!==r.trim()?(e(r),s("")):j("\u041e\u0448\u0438\u0431\u043a\u0430! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435!")};return Object(U.jsxs)("div",{children:[Object(U.jsx)(G.a,{variant:"outlined",disabled:a,error:!!u,value:r,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),"Enter"===t.key&&b()},label:"Title",helperText:u}),Object(U.jsx)(K.a,{color:"primary",onClick:b,disabled:a,children:Object(U.jsx)(H.a,{})})]})})),Y=n(108),Z=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(i.useState)(!1),n=Object(M.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(t.value),r=Object(M.a)(o,2),s=r[0],l=r[1];return a?Object(U.jsx)(G.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(s)}}):Object(U.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),B=n(212),J=n(200),_=n(205),$=o.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(U.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(U.jsx)(_.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(U.jsx)(Z,{value:t.task.title,onChange:c}),Object(U.jsx)(K.a,{onClick:e,children:Object(U.jsx)(J.a,{})})]},t.task.id)})),q=["demo"],z=o.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,c=Object(Y.a)(t,q);console.log("Todolist called");var o=Object(l.b)();Object(i.useEffect)((function(){if(!n){var t,e=(t=c.todolist.id,function(e){e(D("loading")),T(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(D("succeeded"))}))});o(e)}}),[]);var r=Object(i.useCallback)((function(t){c.addTask(t,c.todolist.id)}),[c.addTask,c.todolist.id]),s=Object(i.useCallback)((function(t){c.changeTodolistTitle(c.todolist.id,t)}),[c.todolist.id,c.changeTodolistTitle]),d=Object(i.useCallback)((function(){return c.changeFilter("all",c.todolist.id)}),[c.todolist.id,c.changeFilter]),u=Object(i.useCallback)((function(){return c.changeFilter("active",c.todolist.id)}),[c.todolist.id,c.changeFilter]),j=Object(i.useCallback)((function(){return c.changeFilter("completed",c.todolist.id)}),[c.todolist.id,c.changeFilter]),b=c.tasks;return"active"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.New}))),"completed"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.Completed}))),Object(U.jsxs)("div",{children:[Object(U.jsxs)("h3",{children:[Object(U.jsx)(Z,{value:c.todolist.title,onChange:s}),Object(U.jsx)(K.a,{onClick:function(){c.removeTodolist(c.todolist.id)},disabled:"loading"===c.todolist.entityStatus,children:Object(U.jsx)(J.a,{})})]}),Object(U.jsx)(V,{addItem:r,disabled:"loading"===c.todolist.entityStatus}),Object(U.jsx)("div",{children:b.map((function(t){return Object(U.jsx)($,{task:t,todolistId:c.todolist.id,removeTask:c.removeTask,changeTaskTitle:c.changeTaskTitle,changeTaskStatus:c.changeTaskStatus},t.id)}))}),Object(U.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(U.jsx)(B.a,{variant:"all"===c.todolist.filter?"outlined":"text",onClick:d,color:"inherit",children:"All"}),Object(U.jsx)(B.a,{variant:"active"===c.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(U.jsx)(B.a,{variant:"completed"===c.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),Q=n(17),W=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.c)((function(t){return t.todolists})),c=Object(l.c)((function(t){return t.tasks})),o=Object(l.c)((function(t){return t.auth.isLoggedIn})),r=Object(l.b)();Object(i.useEffect)((function(){if(!n&&o){var t=function(t){t(D("loading")),O().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(D("succeeded"))}))};r(t)}}),[]);var s=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){p(e,t).then((function(){var a=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(a)}))}}(t,e);r(n)}),[]),d=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(D("loading")),v(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(D("succeeded"))}else S(t.data,n)})).catch((function(t){I(t,n)}))}}(t,e);r(n)}),[]),u=Object(i.useCallback)((function(t,e,n){var a=N(t,{status:e},n);r(a)}),[]),j=Object(i.useCallback)((function(t,e,n){var a=N(t,{title:e},n);r(a)}),[]),b=Object(i.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};r(n)}),[]),T=Object(i.useCallback)((function(t){var e,n=(e=t,function(t){t(D("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),h(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(D("succeeded"))}))});r(n)}),[]),g=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){m(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);r(n)}),[]),x=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(D("loading")),f(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(D("succeeded"))}))}}(t);r(e)}),[r]);return o?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(F.a,{container:!0,style:{padding:"20px"},children:Object(U.jsx)(V,{addItem:x})}),Object(U.jsx)(F.a,{container:!0,spacing:3,children:a.map((function(t){var e=c[t.id];return Object(U.jsx)(F.a,{item:!0,children:Object(U.jsx)(R.a,{style:{padding:"10px"},children:Object(U.jsx)(z,{todolist:t,tasks:e,removeTask:s,changeFilter:b,addTask:d,changeTaskStatus:u,removeTodolist:T,changeTaskTitle:j,changeTodolistTitle:g,demo:n})})},t.id)}))})]}):Object(U.jsx)(Q.a,{from:"*",to:"/login"})},X=n(214),tt=n(215),et=n(213),nt=n(217),at=n(216),ct=n(202),it=n(207),ot=n(206),rt=o.a.forwardRef((function(t,e){return Object(U.jsx)(ot.a,Object(d.a)({elevation:6,ref:e,variant:"filled"},t))}));function st(){var t=Object(l.c)((function(t){return t.app.error})),e=Object(l.b)(),n=function(t,n){"clickaway"!==n&&e(A(null))};return Object(U.jsx)(it.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(U.jsx)(rt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var lt=n(208),dt=n(219),ut=n(197),jt=n(220),bt=n(107),Ot=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.auth.isLoggedIn})),n=Object(bt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"):e.email="\u041b\u043e\u0433\u0438\u043d \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d",t.password?t.password.length<3&&(e.password="\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):e.password="\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d",e},onSubmit:function(e){var a;t((a=e,function(t){t(D("loading")),x(a).then((function(e){0===e.data.resultCode?(t(E(!0)),t(D("succeeded"))):S(e.data,t)})).catch((function(e){I(e,t)}))})),n.resetForm()}});return e?Object(U.jsx)(Q.a,{from:"/login",to:"/"}):Object(U.jsx)(F.a,{container:!0,justifyContent:"center",children:Object(U.jsx)(F.a,{item:!0,justifyContent:"center",children:Object(U.jsxs)(lt.a,{children:[Object(U.jsxs)(ut.a,{children:[Object(U.jsxs)("p",{children:["To log in get registered",Object(U.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(U.jsx)("p",{children:"or use common test account credentials:"}),Object(U.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(U.jsx)("p",{children:"Password: free"})]}),Object(U.jsx)("form",{onSubmit:n.handleSubmit,children:Object(U.jsxs)(dt.a,{children:[Object(U.jsx)(G.a,Object(d.a)({label:"email",margin:"normal",type:"email"},n.getFieldProps("email"))),n.touched.email&&n.errors.email&&Object(U.jsx)("div",{style:{color:"red"},children:n.errors.email}),Object(U.jsx)(G.a,Object(d.a)({label:"password",margin:"normal",type:"password"},n.getFieldProps("password"))),n.touched.password&&n.errors.password&&Object(U.jsx)("div",{style:{color:"red"},children:n.errors.password}),Object(U.jsx)(jt.a,Object(d.a)(Object(d.a)({label:"Remember me",control:Object(U.jsx)(_.a,{})},n.getFieldProps("rememberMe")),{},{checked:n.values.rememberMe})),Object(U.jsx)(B.a,{type:"submit",variant:"contained",color:"primary",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})})})};var ft=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(l.b)();Object(i.useEffect)((function(){a((function(t){k().then((function(e){0===e.data.resultCode&&t(E(!0))}))}))}),[]);var c=Object(l.c)((function(t){return t.app.status}));return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(st,{}),Object(U.jsxs)(X.a,{position:"static",children:[Object(U.jsxs)(tt.a,{children:[Object(U.jsx)(K.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(U.jsx)(ct.a,{})}),Object(U.jsx)(et.a,{variant:"h6",children:"News"}),Object(U.jsx)(B.a,{color:"inherit",children:"Login"})]}),"loading"===c&&Object(U.jsx)(at.a,{})]}),Object(U.jsx)(nt.a,{fixed:!0,children:Object(U.jsxs)(Q.d,{children:[Object(U.jsx)(Q.b,{exact:!0,path:"/",render:function(){return Object(U.jsx)(W,{demo:n})}}),Object(U.jsx)(Q.b,{path:"/login",render:function(){return Object(U.jsx)(Ot,{})}}),Object(U.jsx)(Q.b,{path:"/404",render:function(){return Object(U.jsx)("h1",{children:"404: \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})}}),Object(U.jsx)(Q.a,{from:"*",to:"/login"})]})})]})},ht=n(69),mt=n(106),Tt=Object(ht.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(d.a)(Object(d.a)({},t),{},Object(L.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(d.a)(Object(d.a)({},t),{},Object(L.a)({},e.task.todoListId,[e.task].concat(Object(u.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(d.a)(Object(d.a)({},t),{},Object(L.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(d.a)(Object(d.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(d.a)(Object(d.a)({},t),{},Object(L.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(d.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(d.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(d.a)(Object(d.a)({},t),{},Object(L.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(d.a)(Object(d.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(u.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(d.a)(Object(d.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(d.a)(Object(d.a)({},t),{},{error:e.error});default:return Object(d.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(d.a)(Object(d.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),pt=Object(ht.c)(Tt,Object(ht.a)(mt.a));window.store=pt;var vt=n(54);s.a.render(Object(U.jsx)(o.a.StrictMode,{children:Object(U.jsx)(vt.a,{children:Object(U.jsx)(l.a,{store:pt,children:Object(U.jsx)(ft,{})})})}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.30175f46.chunk.js.map