(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{31:function(e,t,s){"use strict";s.r(t);var n=s(3),c=s(1),r=s(18),o=s.n(r),i=s(2),a=s(4),j=s(0),l=function(){return Object(j.jsx)("div",{id:"StrangersThings",className:"top-left",children:Object(j.jsx)("h1",{children:"Stranger's Things"})})},b=s(6),u=s.n(b),h=s(10),d=function(e){var t=e.username,s=e.password,n=e.confirmedPassword,c=e.registerToken,r=e.setRegisterToken,o=e.setUsername,i=e.setPassword,l=e.setConfirmedPassword,b=function(){var e=Object(h.a)(u.a.mark((function e(t,s){var n,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:s}})});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,o=c.data.token,console.log(o),r(o),localStorage.setItem("registerToken",JSON.stringify(o));case 10:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();if(c)return Object(j.jsx)(a.a,{to:"/"});return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b(t,s).then((function(e){}))},children:[Object(j.jsx)("h2",{className:"intro",children:"Registration"}),Object(j.jsx)("label",{className:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",value:t,min:"8",max:"20",required:!0,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("label",{className:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",value:s,min:"8",max:"20",required:!0,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("label",{className:"rePassword",children:"Re-enter Password"}),Object(j.jsx)("input",{type:"password",value:n,min:"8",max:"20",required:!0,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Register"})]}),Object(j.jsx)("a",{className:"existingUser",href:"/",children:"Existing user? Log in"})]})};function O(){return JSON.parse(localStorage.getItem("token"))}function p(){localStorage.removeItem("token")}var x=function(){var e=Object(h.a)(u.a.mark((function e(){var t,s,n,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch("https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts",{headers:{Authorization:"Bearer ".concat(t)}});case 3:return s=e.sent,e.next=6,s.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(u.a.mark((function e(){var t,s,n,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch("https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/me",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return s=e.sent,e.next=6,s.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=e.username,s=e.setUsername,n=e.password,c=e.setPassword,r=Object(a.g)(),o=function(){var e=Object(h.a)(u.a.mark((function e(t,s){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:t,password:s}})});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();return O()?Object(j.jsx)(a.a,{to:"/home"}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(t,n).then((function(e){console.log(e);var t=e.data.token;!function(e){localStorage.setItem("token",JSON.stringify(e))}(t),console.log(t),r.push("/home")}))},children:[Object(j.jsx)("h2",{className:"intro",children:"Login"}),Object(j.jsx)("label",{className:"fields",children:"Username"}),Object(j.jsx)("input",{type:"text",value:t,placeholder:"Username",min:"8",max:"20",required:!0,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{className:"fields",children:"Password"}),Object(j.jsx)("input",{type:"password",value:n,placeholder:"Password",min:"8",max:"20",required:!0,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("input",{type:"submit"})]}),Object(j.jsx)("a",{className:"newUser",href:"/register",children:"Not registered? Sign up"})]})};function m(e){var t=e.post;console.log(t);var s=t._id,n=Object(a.g)();return t&&!0===t.active?Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"PostList",children:t.title}),Object(j.jsx)("h3",{className:"PostList",children:t.description}),Object(j.jsxs)("h3",{className:"PostList",children:["Price: ",t.price]}),Object(j.jsxs)("h3",{className:"PostList",children:["Seller: ",t.author.username]}),Object(j.jsxs)("h3",{className:"PostList",children:["Location: ",t.location]}),Object(j.jsxs)("h3",{className:"PostList",children:["Will Deliver: ",t.willDeliver]}),t.isAuthor?Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/".concat(s),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(O())}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.error),alert("Successfully deleted, please refresh the page.")},children:"Delete"})}):Object(j.jsx)("button",{onClick:function(){return n.push("/messages/".concat(s))},children:"Send Message"})]}):Object(j.jsx)("div",{})}function v(e){var t=e.message,s=e.currentUser;console.log(t);var n=Object(a.g)();return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"profileMessage",children:t.post.title}),Object(j.jsx)("p",{className:"profileMessageContent",children:t.content}),t.fromUser.username===s?Object(j.jsx)("button",{onClick:function(){return n.push("/messages/".concat(t.post._id))},children:"Send Another Message"}):Object(j.jsx)("button",{onClick:function(){return n.push("/messages/".concat(t.post._id))},children:"Reply"})]})})}var P=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),s=t[0],r=t[1],o=Object(c.useState)([]),i=Object(n.a)(o,2),a=i[0],l=i[1],b=Object(c.useState)(""),u=Object(n.a)(b,2),h=u[0],d=u[1];return Object(c.useEffect)((function(){O()&&f(O()).then((function(e){var t=e.data;return r(t.messages)}))}),[]),Object(c.useEffect)((function(){O()&&f(O()).then((function(e){var t=e.data;return l(t.posts)}))}),[]),Object(c.useEffect)((function(){O()&&f(O()).then((function(e){var t=e.data;return d(t.username)}))}),[]),console.log(a),console.log(s),h?Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{className:"profileName",children:[h,"'s Profile"]}),Object(j.jsx)("h2",{className:"profileMessages",children:"Sent and Recieved Messages"}),s?s.map((function(e,t){return Object(j.jsx)(v,{currentUser:h,message:e,className:"profileMessage"},t)})):null,Object(j.jsx)("h2",{classname:"profilePosts",children:"Posts"}),a?a.map((function(e,t){return Object(j.jsx)(m,{post:e,className:"profilePost"},t)})):null]}):Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"profileLogin",children:"Log in to access information."})})},N=function(e){var t=e.searchPosts,s=Object(c.useState)(""),r=Object(n.a)(s,2),o=r[0],i=r[1];return Object(j.jsxs)("form",{action:"/",method:"get",onSubmit:function(e){e.preventDefault(),t(o)},children:[Object(j.jsx)("label",{htmlFor:"header-search",children:Object(j.jsx)("span",{children:"Search posts"})}),Object(j.jsx)("input",{type:"text",id:"header-search",value:o,placeholder:"Search posts",onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("input",{type:"submit",className:"submit"})]})},S=function(e){var t=e.setPosts,s=e.posts,r=Object(c.useState)([]),o=Object(n.a)(r,2),a=o[0],l=o[1];Object(c.useEffect)((function(){x(O()).then((function(e){var s=e.data;t(s.posts),l(s.posts)}))}),[]),console.log(s);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"intro",children:"Posts"}),Object(j.jsx)(N,{searchPosts:function(e){l(s.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})))}}),Object(j.jsx)(i.b,{to:"/createpost",children:Object(j.jsx)("button",{className:"button",children:"New Post"})}),a.map((function(e,t){return Object(j.jsx)(m,{post:e},t)}))]})},w=function(){var e=Object(h.a)(u.a.mark((function e(t){var s,n,c,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.postTitle,n=t.postDescription,c=t.postPrice,r=t.postLocation,o=t.willDeliver,e.next=3,fetch("https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(O())},body:JSON.stringify({post:{title:s,description:n,price:c,location:r,willDeliver:o}})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.error);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.token,s=e.postId,n=e.postTitle,c=e.setTitle,r=e.postDescription,o=e.setDescription,i=e.postPrice,a=e.setPrice,l=e.postLocation,b=e.setLocation,u=e.willDeliver,h=e.setDelivery;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"Posts",children:"New Post:"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n,t),localStorage.getItem("".concat(t)),w({token:t,postTitle:n,postDescription:r,postPrice:i,postLocation:l,willDeliver:u,postId:s})},children:[Object(j.jsx)("label",{className:"titles",children:"Title: "}),Object(j.jsx)("input",{type:"text",required:!0,onChange:function(e){return c(e.target.value)},value:n}),Object(j.jsx)("label",{className:"description",children:"Description: "}),Object(j.jsx)("input",{type:"text",required:!0,onChange:function(e){return o(e.target.value)},value:r}),Object(j.jsx)("label",{className:"price",children:"Price: "}),Object(j.jsx)("input",{type:"text",required:!0,onChange:function(e){return a(e.target.value)},value:i}),Object(j.jsx)("label",{className:"location",children:"Location: "}),Object(j.jsx)("input",{type:"text",required:!0,onChange:function(e){return b(e.target.value)},value:l}),Object(j.jsx)("label",{className:"deliver",children:"Will Deliver? "}),Object(j.jsx)("input",{type:"checkbox",value:u,onClick:function(e){return h(e.target.checked)}}),Object(j.jsx)("button",{type:"submit",className:"submit",children:"Create Post"})]})]})},y=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),s=t[0],r=t[1],o=Object(a.h)().postId;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=e.messageContent,s=e.postId;fetch("https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/".concat(s,"/messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(O())},body:JSON.stringify({message:{content:t}})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}({messageContent:s,postId:o})},children:[Object(j.jsx)("h2",{children:"Send Message"}),Object(j.jsx)("input",{type:"text",value:s,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("input",{type:"submit"})]})})},C=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),s=t[0],r=t[1],o=Object(c.useState)(""),b=Object(n.a)(o,2),u=b[0],h=b[1],O=Object(c.useState)(""),x=Object(n.a)(O,2),f=x[0],m=x[1],v=Object(c.useState)(""),N=Object(n.a)(v,2),w=N[0],C=N[1],L=Object(c.useState)(""),T=Object(n.a)(L,2),D=T[0],R=T[1],U=Object(c.useState)(""),E=Object(n.a)(U,2),M=E[0],B=E[1],I=Object(c.useState)(""),q=Object(n.a)(I,2),J=q[0],W=q[1],F=Object(c.useState)(""),A=Object(n.a)(F,2),H=A[0],z=A[1],_=Object(c.useState)(""),G=Object(n.a)(_,2),K=G[0],Q=G[1],V=Object(c.useState)(""),X=Object(n.a)(V,2),Y=X[0],Z=X[1],$=Object(c.useState)(""),ee=Object(n.a)($,2),te=ee[0],se=ee[1],ne=Object(c.useState)(!1),ce=Object(n.a)(ne,2),re=ce[0],oe=ce[1],ie=Object(c.useState)([]),ae=Object(n.a)(ie,2),je=ae[0],le=ae[1];return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)(a.b,{exact:!0,path:"/home",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Home"})}),Object(j.jsx)(i.b,{to:"/posts",children:Object(j.jsx)("button",{children:"Posts"})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("button",{children:"Profile"})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{children:"Login"})}),Object(j.jsx)(i.b,{to:"/register",children:Object(j.jsx)("button",{children:"Register"})}),Object(j.jsx)(i.b,{to:"/",onClick:function(){p()},children:Object(j.jsx)("button",{children:"Logout"})})]}),Object(j.jsx)("h1",{className:"intro",children:"Buy a strangers things, or sell even stranger things."})]}),Object(j.jsx)("main",{children:Object(j.jsxs)(a.d,{children:[Object(j.jsxs)(a.b,{exact:!0,path:"/",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Home"})}),Object(j.jsx)(i.b,{to:"/posts",children:Object(j.jsx)("button",{children:"Posts"})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("button",{children:"Profile"})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{children:"Login"})}),Object(j.jsx)(i.b,{to:"/register",children:Object(j.jsx)("button",{children:"Register"})}),Object(j.jsx)(i.b,{to:"/",onClick:function(){p()},children:Object(j.jsx)("button",{children:"Logout"})})]}),Object(j.jsx)(g,{username:s,password:f,setUsername:r,setPassword:m,token:M,setLoginToken:B})]}),Object(j.jsxs)(a.b,{exact:!0,path:"/posts",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Home"})}),Object(j.jsx)(i.b,{to:"/posts",children:Object(j.jsx)("button",{children:"Posts"})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("button",{children:"Profile"})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{children:"Login"})}),Object(j.jsx)(i.b,{to:"/register",children:Object(j.jsx)("button",{children:"Register"})}),Object(j.jsx)(i.b,{to:"/",onClick:function(){p()},children:Object(j.jsx)("button",{children:"Logout"})})]}),Object(j.jsx)(S,{posts:je,setPosts:le,setPost:h,post:u,token:M})]}),Object(j.jsxs)(a.b,{exact:!0,path:"/createpost",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Home"})}),Object(j.jsx)(i.b,{to:"/posts",children:Object(j.jsx)("button",{children:"Posts"})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("button",{children:"Profile"})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{children:"Login"})}),Object(j.jsx)(i.b,{to:"/register",children:Object(j.jsx)("button",{children:"Register"})}),Object(j.jsx)(i.b,{to:"/",onClick:function(){p()},children:Object(j.jsx)("button",{children:"Logout"})})]}),Object(j.jsx)(k,{token:M,postId:J,setPostId:W,postTitle:H,setTitle:z,postDescription:K,setDescription:Q,postPrice:Y,setPrice:Z,postLocation:te,setLocation:se,willDeliver:re,setDelivery:oe})]}),Object(j.jsxs)(a.b,{exact:!0,path:"/profile",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Home"})}),Object(j.jsx)(i.b,{to:"/posts",children:Object(j.jsx)("button",{children:"Posts"})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("button",{children:"Profile"})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{children:"Login"})}),Object(j.jsx)(i.b,{to:"/register",children:Object(j.jsx)("button",{children:"Register"})}),Object(j.jsx)(i.b,{to:"/",onClick:function(){p()},children:Object(j.jsx)("button",{children:"Logout"})})]}),Object(j.jsx)(P,{})]}),Object(j.jsxs)(a.b,{exact:!0,path:"/register",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Home"})}),Object(j.jsx)(i.b,{to:"/posts",children:Object(j.jsx)("button",{children:"Posts"})}),Object(j.jsx)(i.b,{to:"/profile",children:Object(j.jsx)("button",{children:"Profile"})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{children:"Login"})}),Object(j.jsx)(i.b,{to:"/",onClick:function(){p()},children:Object(j.jsx)("button",{children:"Logout"})})]}),Object(j.jsx)(d,{username:s,password:f,confirmedPassword:w,registerToken:D,setUsername:r,setPassword:m,setConfirmedPassword:C,setRegisterToken:R})]}),Object(j.jsxs)(a.b,{exact:!0,path:"/messages/:postId",children:[Object(j.jsx)(l,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/home",children:Object(j.jsx)("button",{children:"Home"})}),Object(j.jsx)(i.b,{to:"/posts",children:Object(j.jsx)("button",{children:"Posts"})}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{children:"Login"})}),Object(j.jsx)(i.b,{to:"/register",children:Object(j.jsx)("button",{children:"Register"})}),Object(j.jsx)(i.b,{to:"/",onClick:function(){p()},children:Object(j.jsx)("button",{children:"Logout"})})]}),Object(j.jsx)(y,{token:M})]})]})})]})})};o.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(C,{})}),document.getElementById("app"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ff490772.chunk.js.map