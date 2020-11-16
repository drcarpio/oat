(this["webpackJsonpoat-frontend"]=this["webpackJsonpoat-frontend"]||[]).push([[0],{30:function(e,t,n){e.exports=n(59)},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(28),l=n.n(i),u=n(2),o=n.n(u),c=n(9),s=n(4),d=n(1),f=n(12),m=function(e){var t=e.loginEvent,n=Object(r.useState)(""),i=Object(s.a)(n,2),l=i[0],u=i[1],o=Object(r.useState)(""),c=Object(s.a)(o,2),d=c[0],f=c[1];return a.a.createElement("div",null,a.a.createElement("h2",null,"login"),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({username:l||"lotad",password:d||"button"}),u(""),f("")}},a.a.createElement("div",null,"username",a.a.createElement("input",{id:"username",type:"username",value:l,onChange:function(e){var t=e.target;return u(t.value)}})),a.a.createElement("div",null,"password",a.a.createElement("input",{id:"password",type:"password",value:d,onChange:function(e){var t=e.target;return f(t.value)}})),a.a.createElement("button",{id:"login-button",type:"submit"},"login"),a.a.createElement("button",{id:"example-login",type:"submit"},"use sample login")))},p=function(e){var t=e.nutrition;return a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"nutrition info"))),a.a.createElement("tbody",null,Object.keys(t).map((function(e){return a.a.createElement("tr",{key:e},a.a.createElement("td",null,e),a.a.createElement("td",null,t[e]))})))))},E=function(e){var t=e.bowl,n=e.ingredients,r=e.removeIngredient,i=e.addBowl;return a.a.createElement("div",null,a.a.createElement("p",null,"total price: ",t.map((function(e){return n.filter((function(t){return t.id===e}))[0]})).reduce((function(e,t){return e+t.pricePerUnit}),0)),a.a.createElement("button",{onClick:i},"add bowl"),a.a.createElement("div",null,"bowl contents:"," ",t.map((function(e,t){return a.a.createElement("div",{key:t},function(e){return n.filter((function(t){return t.id===e}))[0].name.replace(/_/g," ").toLowerCase()}(e),a.a.createElement("button",{onClick:function(){return r(e)}},"remove"))}))),a.a.createElement("div",null,"bowl nutrition:"," ",a.a.createElement(p,{nutrition:t.map((function(e){return n.filter((function(t){return t.id===e}))[0].nutritionInfo})).reduce((function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=(e[n]||0)+t[n]);return e}),{})})))},b=function(e){var t=e.nutrition;return a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"nutrition info"))),a.a.createElement("tbody",null,Object.keys(t).map((function(e){return a.a.createElement("tr",{key:e},a.a.createElement("td",null,e),a.a.createElement("td",null,t[e]))})))))},v=function(e){var t=e.addIngredient,n=e.ingredient;return a.a.createElement("div",null,a.a.createElement("p",null,n.name.replace(/_/g," ").toLowerCase()),a.a.createElement("p",null,"price: $",n.pricePerUnit),a.a.createElement(b,{nutrition:n.nutritionInfo}),a.a.createElement("button",{onClick:t},"add to bowl"))},g=function(e){var t=e.name,n=e.ingredients,i=e.addIngredient,l=Object(r.useState)(!1),u=Object(s.a)(l,2),o=u[0],c=u[1],d={display:o?"none":""},f={display:o?"":"none"},m=function(){c(!o)};return a.a.createElement("div",null,a.a.createElement("div",{style:d},a.a.createElement("h3",null,t),a.a.createElement("button",{onClick:m},"show ",t," options")),a.a.createElement("div",{style:f},a.a.createElement("h3",null,t),a.a.createElement("button",{onClick:m},"hide ",t," options"),n.map((function(e){return a.a.createElement(v,{key:e.id,addIngredient:function(){return i(e.id)},ingredient:e})}))))},w=function(e){var t=e.ingredients,n=e.addIngredient;return a.a.createElement("div",null,a.a.createElement(g,{addIngredient:n,name:"oat",ingredients:t.filter((function(e){return"oat"===e.type}))}),a.a.createElement(g,{addIngredient:n,name:"milk",ingredients:t.filter((function(e){return"milk"===e.type}))}),a.a.createElement(g,{addIngredient:n,name:"nut",ingredients:t.filter((function(e){return"nut"===e.type}))}),a.a.createElement(g,{addIngredient:n,name:"nut butter",ingredients:t.filter((function(e){return"nut_butter"===e.type}))}),a.a.createElement(g,{addIngredient:n,name:"fresh fruit",ingredients:t.filter((function(e){return"fresh_fruit"===e.type}))}),a.a.createElement(g,{addIngredient:n,name:"dried fruit",ingredients:t.filter((function(e){return"dried_fruit"===e.type}))}),a.a.createElement(g,{addIngredient:n,name:"sweetener",ingredients:t.filter((function(e){return"sweetener"===e.type}))}),a.a.createElement(g,{addIngredient:n,name:"spice",ingredients:t.filter((function(e){return"spice"===e.type}))}))},h=n(5),y=n.n(h),O=null,j={getAll:function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/bowls");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/bowls",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return y.a.put("".concat("/api/bowls","/").concat(e),t).then((function(e){return e.data}))},deleteBowl:function(){var e=Object(c.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,y.a.delete("".concat("/api/bowls","/").concat(t),n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){O="bearer ".concat(e)}},k=function(e){var t=e.setNotification,n=e.setIsGoodNotification,i=e.ingredients,l=Object(r.useState)([]),u=Object(s.a)(l,2),o=u[0],c=u[1],d=Object(r.useState)(null),f=Object(s.a)(d,2),m=f[0],p=f[1],b=Object(r.useState)(null),v=Object(s.a)(b,2),g=v[0],h=v[1];return a.a.createElement("div",null,a.a.createElement("h2",null,"bowl contents"),a.a.createElement(E,{bowl:o,ingredients:i,removeIngredient:function(e){var t=o.filter((function(t){return t!==e}));c(t)},addBowl:function(){if(console.log(o),m&&g)try{var e={oatType:m,milkType:g,toppings:o.filter((function(e){return e!==m&&e!==g})),featured:!1,onMenu:!0};j.create(e),p(null),h(null),c([])}catch(r){t("problem adding bowl"),n(!1),setTimeout((function(){t(null)}),3e3)}else t("need to select oat and milk types"),n(!1),setTimeout((function(){t(null)}),3e3)}}),a.a.createElement("h2",null,"ingredients"),a.a.createElement(w,{addIngredient:function(e){if("oat"===i.filter((function(t){return t.id===e}))[0].type){var t=m?o.filter((function(e){return e!==m})):o;p(e),c(t.concat(e))}else if("milk"===i.filter((function(t){return t.id===e}))[0].type){var n=g?o.filter((function(e){return e!==g})):o;h(e),c(n.concat(e))}else c(o.concat(e))},ingredients:i}))},I=n(14),B=function(e,t){return y.a.put("".concat("/api/users","/").concat(e),t).then((function(e){return e.data}))},S=function(e){"bearer ".concat(e)},C=function(e){var t=e.bowl,n=e.ingredients,r=e.id,i=e.toggleSaveBowl,l=e.removeBowl,u=(e.bowlsAfterDelete,e.user);return a.a.createElement("div",null,a.a.createElement("p",null,"total price: ",t.map((function(e){return n.filter((function(t){return t.id===e}))[0]})).reduce((function(e,t){return e+t.pricePerUnit}),0)),a.a.createElement("div",null,"bowl contents:"," ",t.map((function(e,t){return a.a.createElement("div",{key:t},function(e){return n.filter((function(t){return t.id===e}))[0].name.replace(/_/g," ").toLowerCase()}(e))}))),a.a.createElement("div",null,"bowl nutrition:"," ",a.a.createElement(p,{nutrition:t.map((function(e){return n.filter((function(t){return t.id===e}))[0].nutritionInfo})).reduce((function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=(e[n]||0)+t[n]);return e}),{})})),a.a.createElement("button",{onClick:function(){return l(r)}},"delete bowl"),u?u.savedBowls.includes(r)?a.a.createElement("button",{onClick:function(){return i(r)}},"removed from saved bowls"):a.a.createElement("button",{onClick:function(){return i(r)}},"add to saved bowls"):null)},x=function(e){var t=e.ingredients,n=e.user,i=e.setUser,l=e.setNotification,u=e.setIsGoodNotification,o=Object(r.useState)([]),c=Object(s.a)(o,2),d=c[0],f=c[1];Object(r.useEffect)((function(){j.getAll().then((function(e){return f(e)}))}),[]);var m=function(e){window.confirm("Remove bowl?")&&j.deleteBowl(e).then((function(){E(e)})).catch((function(e){console.log(e)}))},p=function(e){var t=null;t=n.savedBowls.includes(e)?Object(I.a)(Object(I.a)({},n),{},{savedBowls:n.savedBowls.filter((function(t){return t!==e}))}):Object(I.a)(Object(I.a)({},n),{},{savedBowls:n.savedBowls.concat(e)}),B(n.id,t).then((function(e){l("saved bowls updated successfully"),u(!0),setTimeout((function(){l(null)}),3e3),i(t)})).catch((function(e){console.log(e)}))},E=function(e){var t=d.filter((function(t){return t.id!==e}));f(t)};return a.a.createElement("div",null,a.a.createElement("h2",null,"presaved bowls"),d.map((function(e){return a.a.createElement(C,{bowl:e.toppings.concat(e.oatType).concat(e.milkType).map((function(e){return e.id})),ingredients:t,key:e.id,id:e.id,toggleSaveBowl:p,removeBowl:m,bowlsAfterDelete:E,onMenu:e.onMenu,featured:e.featured,user:n})})))},N=function(e){var t=e.message,n=e.isGood;return null===t?null:n?a.a.createElement("div",{className:"good"},t):a.a.createElement("div",{className:"error"},t)},T=function(e){e.targetBowls;var t=Object(r.useState)([]),n=Object(s.a)(t,2),i=(n[0],n[1]);return Object(r.useEffect)((function(){j.getAll().then((function(e){return i(e)}))}),[]),a.a.createElement("div",null,"the component that displays the user's saved bowls is in progress")},G=function(e){var t=e.user;return a.a.createElement("div",null,a.a.createElement("p",null,t.username," logged in"),a.a.createElement("h3",null,"saved bowls"),a.a.createElement(T,{targetBowls:t.savedBowls}))},U={login:function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){return y.a.get("/api/ingredients").then((function(e){return e.data}))},_=function(e){var t=e.notification,n=e.isGoodNotification;return a.a.createElement("div",null,a.a.createElement(N,{message:t,isGood:n}),a.a.createElement("h2",null,"Oat"),a.a.createElement("p",null,"This is an app for building bowls of oatmeal and saving them to the database"))},P=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],l=Object(r.useState)(!1),u=Object(s.a)(l,2),p=u[0],E=u[1],b=Object(r.useState)(null),v=Object(s.a)(b,2),g=v[0],w=v[1],h=Object(r.useState)([]),y=Object(s.a)(h,2),O=y[0],I=y[1],B=(Object(d.f)(),{padding:5});Object(r.useEffect)((function(){A().then((function(e){return I(e)}))}),[]);var C=function(){var e=Object(c.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.login(t);case 3:n=e.sent,window.localStorage.setItem("loggedOatUser",JSON.stringify(n)),j.setToken(n.token),S(n.token),w(n),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),i("wrong credentials"),E(!1),setTimeout((function(){i(null)}),3e3);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(f.a,null,a.a.createElement("div",null,a.a.createElement(N,{message:n,isGood:p}),a.a.createElement(f.b,{style:B,to:"/"},"home"),a.a.createElement(f.b,{style:B,to:"/build"},"build"),a.a.createElement(f.b,{style:B,to:"/menu"},"menu"),a.a.createElement(f.b,{style:B,to:"/profile"},"profile")),a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/build"},a.a.createElement(k,{setNotification:i,setIsGoodNotification:E,ingredients:O})),a.a.createElement(d.a,{path:"/menu"},a.a.createElement(x,{ingredients:O,user:g,setUser:w,setNotification:i,setIsGoodNotification:E})),a.a.createElement(d.a,{path:"/profile"},g?a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{user:g})," ",a.a.createElement("button",{onClick:function(e){window.localStorage.removeItem("loggedOatUser"),w(null)}},"log out")):a.a.createElement(m,{loginEvent:C})),a.a.createElement(d.a,{path:"/"},a.a.createElement(_,{notification:n,isGoodNotification:p}))))};n(58);l.a.render(a.a.createElement(P,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c0001f6a.chunk.js.map