(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1Z8D":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgotPassword",function(){return n("Anay")}])},Anay:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=(n("YU33"),n("q4sD"),n("3Mv1")),o=n("cWnB"),s=n("T7VE"),l=n("/MKj"),u=n("8ihE"),c=r.a.createElement,d={requestRecoveryPassword:u.b};t.default=Object(l.b)(null,d)(function(e){var t=Object(a.useState)(""),n=t[0],r=t[1];return c("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}},c(i.a,{customStyle:{display:"flex",justifyContent:"center",alignItems:"center",minWidth:"600px",padding:"42px 42px",backgroundColor:"white",borderRadius:"20px"}},c("h3",{style:{marginBottom:"1.2em"}},"Forgot your password?"),c(s.a,{title:"Email Address",value:n,onChange:function(e){var t=e.target.value;return r(t)},customStyle:{width:"80%",marginBottom:"1.5em",fontSize:"14px"}}),c("div",{style:{display:"flex",justifyContent:"flex-end",width:"80%"}},c(o.a,{variant:n?"primary":"secondary",onClick:function(){e.requestRecoveryPassword({email:n})},disabled:!n},"Send Me Instructions"))))})},T7VE:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("q1tI"),r=n.n(a).a.createElement,i=function(e){var t=e.secure?"password":"text";return r("div",{className:"TitleInput-container",style:e.customStyle},r("label",null,e.title),r("input",{type:t,value:e.value,placeholder:e.placeholder,onChange:e.onChange}))}}},[["1Z8D",1,0]]]);