(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={SideDrawer:"SdieDrawer__SideDrawer___3oJf4",Open:"SdieDrawer__Open___2JZOc",Close:"SdieDrawer__Close___1DVmq",Logo:"SdieDrawer__Logo___2Td-k"}},12:function(e,t,n){e.exports={Content:"Layout__Content___LhJtv",Open:"Layout__Open___34Fhq",Close:"Layout__Close___25QoH"}},15:function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem___CHzf9",active:"NavigationItem__active___1nV_7"}},26:function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar___2JJW-",Logo:"Toolbar__Logo___1efBD",DesktopOnly:"Toolbar__DesktopOnly___WADUd"}},27:function(e,t,n){e.exports={Logo:"Logo__Logo___19WaN"}},28:function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems____yd_d"}},30:function(e,t,n){e.exports={Hamburger:"DrawerToggle__Hamburger___2f5gW"}},31:function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop___efy1y"}},32:function(e,t,n){e.exports=n(59)},37:function(e,t,n){},41:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),i=(n(37),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),d=n(61),_=function(e){return e.children},f=n(12),h=n.n(f),p=n(26),g=n.n(p),v=(n(41),n(27)),b=n.n(v),w=function(e){return r.a.createElement("div",{className:b.a.Logo},r.a.createElement("h2",null,"LOGO"))},E=n(28),O=n.n(E),k=n(15),j=n.n(k),y=n(62),C=function(e){return r.a.createElement("li",{className:j.a.NavigationItem},e.exact?r.a.createElement(y.a,{to:e.link,exact:!0,activeClassName:j.a.active},e.children):r.a.createElement(y.a,{to:e.link,activeClassName:j.a.active},e.children))},x=function(){return r.a.createElement("ul",{className:O.a.NavigationItems},r.a.createElement(C,{link:"/",exact:!0},"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"),r.a.createElement(C,{link:"/statistics"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),r.a.createElement(C,{link:"/cources"},"\u041c\u043e\u0438 \u043a\u0443\u0440\u0441\u044b"),r.a.createElement(C,{link:"/instructions"},"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"),r.a.createElement(C,{link:"/training_room"},"\u0417\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f"))},N=n(10),D=n(30),L=n.n(D),S=function(e){return r.a.createElement("div",{className:L.a.Hamburger,onClick:e.clicked},r.a.createElement("svg",{viewBox:"0 0 96 96",height:"1em",onClick:e.handleClick,style:{overflow:"visible",cursor:"pointer",WebkitTapHighlightColor:"rgba(0,0,0,0)"}},r.a.createElement(N.Motion,{style:{x:Object(N.spring)(e.menuOpened?1:0,N.presets.wobbly),y:Object(N.spring)(e.menuOpened?0:1,N.presets.wobbly)}},function(e){var t=e.x,n=e.y;return r.a.createElement("g",{id:"navicon",fill:"none",stroke:"currentColor",strokeWidth:"14",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("line",{transform:"translate(".concat(12*t,", ").concat(-7*t,") rotate(").concat(45*t,", 7, 26)"),x1:"7",y1:"26",x2:"89",y2:"26"}),r.a.createElement("line",{transform:"translate(".concat(12*t,", ").concat(7*t,") rotate(").concat(-45*t,", 7, 70)"),x1:"7",y1:"70",x2:"89",y2:"70"}),r.a.createElement("line",{transform:"translate(".concat(-96*t,")"),opacity:n,x1:"7",y1:"48",x2:"89",y2:"48"}))})))},T=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(S,{clicked:e.drawerToggleClicked}))},H=n(31),I=n.n(H),W=function(e){return e.show?r.a.createElement("div",{className:I.a.Backdrop,onClick:e.clicked}):null},B=n(11),J=n.n(B),A=function(e){var t=[J.a.SideDrawer,J.a.Close];return e.open&&(t=[J.a.SideDrawer,J.a.Open]),r.a.createElement(_,null,r.a.createElement(W,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:J.a.Logo},r.a.createElement(w,null)),r.a.createElement("nav",null,r.a.createElement(x,null))))},q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.drawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[h.a.Content,h.a.Close];return this.state.showSideDrawer&&(e=[h.a.Content,h.a.Open]),r.a.createElement(d.a,{basename:"/polyglot_ui"},r.a.createElement(_,null,r.a.createElement(T,{drawerToggleClicked:this.drawerToggleHandler}),r.a.createElement(A,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:e.join(" ")},this.props.children)))}}]),t}(a.Component),U=n(60),V=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0422\u0443\u0442 \u041b\u0438\u0447\u043d\u044b\u0439 \u041a\u0430\u0431\u0438\u043d\u0435\u0442"))}}]),t}(a.Component),z=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u043c\u043e\u0442\u0435\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443"))}}]),t}(a.Component),F=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u043a\u0443\u0440\u0441\u043e\u0432"))}}]),t}(a.Component),G=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0422\u0443\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c\u0438"))}}]),t}(a.Component),M=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440"))}}]),t}(a.Component),Q=function(){return r.a.createElement(_,null,r.a.createElement(U.a,{path:"/",exact:!0,component:V}),r.a.createElement(U.a,{path:"/statistics",component:z}),r.a.createElement(U.a,{path:"/cources",component:F}),r.a.createElement(U.a,{path:"/instructions",component:G}),r.a.createElement(U.a,{path:"/training_room",component:M}))},R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(Q,null)))}}]),t}(a.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/polyglot_ui",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/polyglot_ui","/service-worker.js");Z?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):$(e)})}}()}},[[32,2,1]]]);
//# sourceMappingURL=main.d24d92f3.chunk.js.map