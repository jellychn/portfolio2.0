(this["webpackJsonpportfolio2.0"]=this["webpackJsonpportfolio2.0"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(5),s=a.n(i),r=(a(14),a(15),a(2)),o=a(3),l="portfolio2.0/app/setFooterText",d="portfolio2.0/app/setDarkMode",u="protfolio2.0/app/setView",j="portfolio2.0/app/setPrompt",m="portfolio2.0/app/setPromptItem",p="portfolio2.0/app/setPromptType",b="portfolio2.0/app/setHomePositions",h="portfolio2.0/app/setSkillsPositions",f="portfolio2.0/app/setProjectPositions",O={footerText:"",prompt:!1,type:null,item:null,darkMode:!1,colorConfig:{primary:"#F8F9FB",secondary:"#FFFFFF",teriary:"#CCCCCC",highlight:"#333333",shadow:"#EEEEEE",project:"aquamarine",navigation:"#FFCC67"},view:"HI, THERE \u3002",homeRef:null,homeStartPosition:null,homeEndPosition:null,homeHeight:null,homeWidth:null,skillsRef:null,skillsStartPosition:null,skillsEndPosition:null,projectRef:null,projectStartPosition:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{footerText:t.payload});case d:return t.payload?Object(o.a)(Object(o.a)({},e),{},{darkMode:t.payload,colorConfig:{primary:"#263238",secondary:"#3A4A52",teriary:"#3A4A52",highlight:"#FFFFFF",shadow:"rgba(0,0,0,0.3)",project:"#3A4A52",navigation:"#FF5850"}}):Object(o.a)(Object(o.a)({},e),{},{darkMode:t.payload,colorConfig:{primary:"#F8F9FB",secondary:"#FFFFFF",teriary:"#CCCCCC",highlight:"#333333",shadow:"#EEEEEE",project:"aquamarine",navigation:"#FFCC67"}});case u:return Object(o.a)(Object(o.a)({},e),{},{view:t.payload});case j:return Object(o.a)(Object(o.a)({},e),{},{prompt:t.payload});case m:return Object(o.a)(Object(o.a)({},e),{},{item:t.payload});case p:return Object(o.a)(Object(o.a)({},e),{},{type:t.payload});case b:return Object(o.a)(Object(o.a)({},e),{},{homeRef:t.payload.ref,homeStartPosition:t.payload.startPosition,homeEndPosition:t.payload.endPosition});case h:return Object(o.a)(Object(o.a)({},e),{},{skillsRef:t.payload.ref,skillsStartPosition:t.payload.startPosition,skillsEndPosition:t.payload.endPosition});case f:return Object(o.a)(Object(o.a)({},e),{},{projectRef:t.payload.ref,projectStartPosition:t.payload.startPosition});default:return e}},v=function(e){return{type:l,payload:e}},x=function(e){return{type:u,payload:e}},y=function(e){return{type:j,payload:e}},N=function(e){return{type:p,payload:e}},L=a.p+"static/media/avatar.097a0966.svg",C=a.p+"static/media/contact.fde0414d.svg",S=a.p+"static/media/phone.34faee4b.svg",E=a(0),k=function(){var e=Object(r.c)((function(e){return e.app.prompt})),t=Object(c.useRef)(null);return t.current&&(e?(t.current.classList.add("animate-fade-in"),t.current.classList.remove("animate-fade-out")):(t.current.classList.remove("animate-fade-in"),t.current.classList.add("animate-fade-out"))),Object(E.jsxs)("div",{ref:t,className:"contact-card",children:[Object(E.jsx)("div",{className:"contact-card-LHS",children:Object(E.jsx)("div",{className:"avatar",children:Object(E.jsx)("img",{src:L,alt:L})})}),Object(E.jsxs)("div",{className:"contact-card-RHS",children:[Object(E.jsx)("div",{className:"contact-header",children:Object(E.jsx)("h4",{children:"CONTACT CARD"})}),Object(E.jsx)("div",{className:"contact-main",children:Object(E.jsxs)("div",{className:"content-main-content",children:[Object(E.jsx)("h1",{children:"JERRY CHEN"}),Object(E.jsx)("h2",{children:"DEVELOPER"})]})}),Object(E.jsxs)("div",{className:"contact-footer",children:[Object(E.jsx)("div",{className:"content-fill"}),Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("a",{href:"mailto:jchen123.862@gmail.com",children:Object(E.jsx)("img",{src:C,alt:C})})}),Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("a",{href:"tel:+640210620879",children:Object(E.jsx)("img",{src:S,alt:S})})})]})]})]})},R=a(4),w=a.p+"static/media/left.20a5f757.svg",T=a.p+"static/media/right.1918b9b1.svg",P=a.p+"static/media/light-display.e7877f38.png",F=a.p+"static/media/light-view.38192faf.png",H=a.p+"static/media/dark-display.a435ea35.png",M=a.p+"static/media/dark-view.b9d54a66.png",A=function(){var e=Object(c.useState)(0),t=Object(R.a)(e,2),a=t[0],n=t[1],i=Object(r.c)((function(e){return e.app.item})),s={sylo:[P,F,H,M]},o=s[i].length;return Object(E.jsxs)("div",{className:"project-showcase",children:[Object(E.jsxs)("h2",{children:[i.toUpperCase()," PROJECT"]}),Object(E.jsxs)("div",{className:"carousel",children:[Object(E.jsx)("div",{className:"arrow",onClick:function(){n(0===a?o-1:a-=1)},children:Object(E.jsx)("img",{src:w,alt:w})}),Object(E.jsx)("div",{className:"content-fill"}),Object(E.jsx)("div",{className:"arrow",onClick:function(){n(a===o-1?0:a+=1)},children:Object(E.jsx)("img",{src:T,alt:T})})]}),Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:s[i][a],alt:s[i][a]})})]})},I=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.app.prompt})),a=Object(r.c)((function(e){return e.app.type})),n=Object(c.useRef)(null);n.current&&(t?(n.current.classList.add("animate-fade-in"),n.current.classList.remove("animate-fade-out")):(n.current.classList.add("animate-fade-out"),n.current.classList.remove("animate-fade-in")));return Object(E.jsxs)("div",{ref:n,className:"prompt",style:{display:t?"block":"none"},children:["contact"===a?Object(E.jsx)(k,{}):"projectShowCase"===a?Object(E.jsx)(A,{}):void 0,Object(E.jsx)("div",{className:"prompt-tint",onClick:function(){return e(y(!1))}})]})},J=a.p+"static/media/logo.8907de13.svg",D=a.p+"static/media/logo-dark.de8c2add.svg",q=function(){var e,t=Object(r.c)((function(e){return e.app.darkMode})),a=Object(r.c)((function(e){return e.app.colorConfig})),c=Object(r.c)((function(e){return e.app.view}));return Object(E.jsx)("div",{children:Object(E.jsx)("header",{className:"App-header",style:{backgroundColor:(e=a.primary,"#F8F9FB"===e?"rgba(248,249,251,0.8)":"rgba(38,50,56,0.8)")},children:Object(E.jsxs)("div",{className:"flex",children:[Object(E.jsx)("img",{className:"logo",src:t?D:J,alt:"logo"}),Object(E.jsx)("span",{className:"space"}),Object(E.jsx)("h2",{style:{color:a.navigation},children:c})]})})})},V=a.p+"static/media/linkedin.64d52f80.svg",B=a.p+"static/media/github.d3379e43.svg",Y=a.p+"static/media/moon-light.b1602c77.svg",K=a.p+"static/media/sun-light.6d3bd4fc.svg",W=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.app.darkMode})),a=Object(r.c)((function(e){return e.app.colorConfig})),n=Object(r.c)((function(e){return e.app.footerText})),i=Object(c.useRef)(null),s=function(){i.current&&(i.current.classList.add("animate-in-bottom-to-top-footer"),i.current.classList.remove("animate-out-top-to-bottom-footer"))},o=function(){i.current&&(i.current.classList.remove("animate-in-bottom-to-top-footer"),i.current.classList.add("animate-out-top-to-bottom-footer"))};return Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{ref:i,className:"hover-text",style:{color:a.highlight,textShadow:"2px 2px "+a.secondary},children:n}),Object(E.jsx)("div",{className:"App-footer-shadow",children:Object(E.jsx)("div",{className:"shadow-content",style:{boxShadow:"0px -20px 50px 80px "+a.shadow}})}),Object(E.jsx)("div",{className:"App-footer",children:Object(E.jsx)("div",{className:"content",style:{backgroundColor:a.primary,borderTop:"2px solid "+a.secondary,borderBottom:"2px solid "+a.secondary},children:Object(E.jsxs)("div",{className:"content-items",children:[Object(E.jsx)("div",{className:"content-item",onMouseEnter:function(){e(v("LINKED IN")),s()},onMouseOut:function(){e(v("")),o()},children:Object(E.jsx)("a",{href:"https://www.linkedin.com/in/jerry-chen-3235171b4",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("img",{className:"icon",src:V,alt:V})})}),Object(E.jsx)("div",{className:"content-item",onMouseEnter:function(){e(v("GITHUB")),s()},onMouseOut:function(){e(v("")),o()},children:Object(E.jsx)("a",{href:"https://github.com/jellychn",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("img",{className:"icon",src:B,alt:B})})}),Object(E.jsx)("div",{className:"content-item",onClick:function(){e(y(!0)),e(N("contact"))},onMouseEnter:function(){e(v("CONTACT")),s()},onMouseOut:function(){e(v("")),o()},children:Object(E.jsx)("img",{className:"icon",src:C,alt:C})}),Object(E.jsx)("div",{className:"content-item",onClick:function(){return e({type:d,payload:!t})},onMouseEnter:function(){e(v("CLICK ME!")),s()},onMouseOut:function(){e(v("")),o()},children:Object(E.jsx)("img",{className:"icon",src:t?K:Y,alt:t?K:Y})})]})})})]})},z=a.p+"static/media/home.12fdb3b1.svg",G=a.p+"static/media/skills.4a1f0de2.svg",U=a.p+"static/media/projects.188150a1.svg",_=function(){var e=Object(r.c)((function(e){return e.app.colorConfig})),t=Object(r.c)((function(e){return e.app.view})),a=Object(r.c)((function(e){return e.app.homeRef})),n=Object(r.c)((function(e){return e.app.skillsRef})),i=Object(r.c)((function(e){return e.app.projectRef})),s=Object(c.useRef)(null),o=Object(c.useRef)(null),l=Object(c.useRef)(null),d=function(e){e.current&&(e.current.classList.add("animate-fade-in"),e.current.classList.remove("animate-fade-out"))},u=function(e){e.current&&(e.current.classList.remove("animate-fade-in"),e.current.classList.add("animate-fade-out"))},j=function(e,t){e.current&&("HOME"===t?window.scrollTo(0,0):window.scrollTo(0,e.current.offsetTop+1))};return Object(E.jsxs)("div",{className:"navigation",children:[Object(E.jsxs)("div",{className:"navigation-item-container",children:[Object(E.jsxs)("div",{ref:s,className:"nav-info",style:{backgroundColor:e.navigation},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:z,alt:z})}),Object(E.jsx)("h5",{children:"HOME"})]}),Object(E.jsx)("div",{className:"navigation-item",style:{backgroundColor:"HI, THERE \u3002"===t?e.navigation:e.teriary},onMouseEnter:function(){return d(s)},onMouseLeave:function(){return u(s)},onClick:function(){return j(a,"HOME")}})]}),Object(E.jsxs)("div",{className:"navigation-item-container",children:[Object(E.jsxs)("div",{ref:o,className:"nav-info",style:{backgroundColor:e.navigation},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:G,alt:G})}),Object(E.jsx)("h5",{children:"SKILLS"})]}),Object(E.jsx)("div",{className:"navigation-item",style:{backgroundColor:"SKILLS \u3002"===t?e.navigation:e.teriary},onMouseEnter:function(){return d(o)},onMouseLeave:function(){return u(o)},onClick:function(){return j(n,"SKILLS")}})]}),Object(E.jsxs)("div",{className:"navigation-item-container",children:[Object(E.jsxs)("div",{ref:l,className:"nav-info",style:{backgroundColor:e.navigation},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:U,alt:U})}),Object(E.jsx)("h5",{children:"PROJECTS"})]}),Object(E.jsx)("div",{className:"navigation-item",style:{backgroundColor:"PROJECTS \u3002"===t?e.navigation:e.teriary},onMouseEnter:function(){return d(l)},onMouseLeave:function(){return u(l)},onClick:function(){return j(i,"PROJECTS")}})]})]})},X=a.p+"static/media/sun.6d3bd4fc.svg",Q=a.p+"static/media/moon.27c17ca4.svg",Z=a.p+"static/media/star.5cf67a03.svg",$=a.p+"static/media/cloud.03b17b39.svg",ee=Object(c.forwardRef)((function(e,t){var a,n=Object(c.useState)(0),i=Object(R.a)(n,2),s=i[0],o=i[1],l=Object(c.useState)(0),d=Object(R.a)(l,2),u=d[0],j=d[1],m=Object(r.c)((function(e){return e.app.darkMode})),p=Object(r.c)((function(e){return e.app.colorConfig})),b=Object(c.useRef)(null),h=Object(c.useRef)(null),f=Object(c.useRef)(null),O=!1;b.current&&h.current&&f.current&&(b.current.classList.add("animate-in-left-to-right"),h.current.classList.add("animate-in-right-to-left"),f.current.classList.add("animate-in-bottom-to-top")),document.addEventListener("scroll",(function(e){a=window.scrollY,b.current&&h.current&&f.current&&(a<500?(O=!0,b.current.classList.add("animate-in-left-to-right"),b.current.classList.remove("animate-out-right-to-left"),h.current.classList.add("animate-in-right-to-left"),h.current.classList.remove("animate-out-left-to-right"),f.current.classList.add("animate-in-bottom-to-top"),f.current.classList.remove("animate-out-top-to-bottom")):O&&(b.current.classList.add("animate-out-right-to-left"),b.current.classList.remove("animate-in-left-to-right"),h.current.classList.remove("animate-in-right-to-left"),h.current.classList.add("animate-out-left-to-right"),f.current.classList.remove("animate-in-bottom-to-top"),f.current.classList.add("animate-out-top-to-bottom"),O=!1))}));var g,v=Object(r.c)((function(e){return e.app.homeRef}));if(v){var x=v.current.scrollWidth/2||0,y=v.current.scrollHeight/2||0;document.onmousemove=function(e){var t=Math.abs(e.screenX-x),a=Math.abs(e.screenY-y);e.screenX>x?o(t/100*-1):o(t/100),e.screenY>y?j(a/100*-1):j(a/100)}}return g=m?Object(E.jsxs)("div",{className:"moon",children:[Object(E.jsx)("img",{src:Q,alt:Q}),Object(E.jsx)("img",{src:Z,className:"star App-logo",alt:Z})]}):Object(E.jsxs)("div",{className:"sun",children:[Object(E.jsx)("img",{src:X,className:"App-logo",alt:X}),Object(E.jsx)("img",{src:$,className:"cloud",alt:$})]}),Object(E.jsx)("div",{ref:t,children:Object(E.jsx)("div",{className:"home-content",children:Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("div",{style:{transform:"translate(".concat(s,"px, ").concat(u,"px)")},children:Object(E.jsx)("div",{ref:b,className:"logo-container",children:g})}),Object(E.jsxs)("div",{ref:h,className:"name-container",children:[Object(E.jsx)("p",{className:"hello",style:{color:p.highlight},children:"HELLO, I'M"}),Object(E.jsx)("h1",{className:"name",children:"JERRY,"}),Object(E.jsx)("h1",{className:"description",children:"AND I'M A DEVELOPER\u3002"})]}),Object(E.jsxs)("p",{ref:f,className:"sub-description",children:[Object(E.jsx)("span",{className:"sub-description-1",style:{color:p.highlight},children:"FULLSTACK DEVELOPER\u3002"}),Object(E.jsx)("br",{}),Object(E.jsx)("span",{className:"sub-description-2",style:{color:p.highlight},children:"PASSION FOR DESIGN\u3002"})]})]})})})})),te=a.p+"static/media/aws.1baaa078.svg",ae=a.p+"static/media/graphql.c0d2b1e1.svg",ce=a.p+"static/media/node.615ffbea.svg",ne=a.p+"static/media/azure.e88b515d.svg",ie=a.p+"static/media/figma.753c0742.svg",se=a.p+"static/media/photoshop.20d9ef58.svg",re=a.p+"static/media/dart.e6ce834f.svg",oe=a.p+"static/media/java.4d03e066.svg",le=a.p+"static/media/javascript.00f3e5cf.svg",de=a.p+"static/media/python.e6d7dc73.svg",ue=a.p+"static/media/flutter.9a496ae2.svg",je=a.p+"static/media/react.e68b35f4.svg",me=a.p+"static/media/redux.0e4fb1c8.svg",pe=a.p+"static/media/sass.8aa78a83.svg",be=a.p+"static/media/typescript.a6305a73.svg",he=a.p+"static/media/vue.4921ee76.svg",fe=a.p+"static/media/vuetify.c3ac4b61.svg",Oe=a.p+"static/media/angular.28ae4f3c.svg",ge=a.p+"static/media/tailwind.315d0ac2.svg",ve=a.p+"static/media/storybook.04c37ff9.svg",xe=Object(c.forwardRef)((function(e,t){var a,n=Object(r.c)((function(e){return e.app.colorConfig})),i=Object(r.c)((function(e){return e.app.homeRef})),s=Object(r.c)((function(e){return e.app.skillsStartPosition})),o=Object(r.c)((function(e){return e.app.skillsEndPosition})),l=[{logo:je,name:"ReactJS"},{logo:me,name:"Redux"},{logo:he,name:"VueJS"},{logo:fe,name:"Vuetify"},{logo:ue,name:"Flutter"},{logo:Oe,name:"Angular"},{logo:pe,name:"SASS"},{logo:ge,name:"Tailwind"},{logo:ve,name:"Storybook"},{logo:ie,name:"Figma"},{logo:se,name:"PhotoShop"}],d=[{logo:te,name:"AWS"},{logo:ae,name:"GraphQL"},{logo:ce,name:"NodeJS"},{logo:ne,name:"MS Azure"}],u=[{logo:le,name:"JavaScript"},{logo:de,name:"Python"},{logo:oe,name:"Java"},{logo:re,name:"Dart"},{logo:be,name:"TypeScript"}],j=Object(c.useRef)(null),m=Object(c.useRef)(null),p=Object(c.useRef)(null),b=Object(c.useRef)(null),h=!1;return document.addEventListener("scroll",(function(e){a=window.scrollY,j.current&&m.current&&p.current&&b.current&&s&&o&&i&&(a>=s-.8*i.current.clientHeight&&a<=o?(h=!0,j.current.classList.add("animate-fade-in"),j.current.classList.remove("animate-fade-out"),m.current.classList.add("animate-in-right-to-left"),m.current.classList.remove("animate-out-left-to-right"),p.current.classList.add("animate-in-right-to-left"),p.current.classList.remove("animate-out-left-to-right"),b.current.classList.add("animate-in-right-to-left"),b.current.classList.remove("animate-out-left-to-right")):h&&(j.current.classList.add("animate-fade-out"),j.current.classList.remove("animate-fade-in"),m.current.classList.add("animate-out-left-to-right"),m.current.classList.remove("animate-in-right-to-left"),p.current.classList.add("animate-out-left-to-right"),p.current.classList.remove("animate-in-right-to-left"),b.current.classList.add("animate-out-left-to-right"),b.current.classList.remove("animate-in-right-to-left"),h=!1))})),Object(E.jsxs)("div",{ref:t,className:"skills-container",children:[Object(E.jsx)("h1",{ref:j,className:"section-title",children:"SKILLS\u3002"}),Object(E.jsx)("div",{className:"skills-content-container",ref:m,children:l.map((function(e){return Object(E.jsx)("div",{className:"skills-content",children:Object(E.jsxs)("div",{className:"skills-item",style:{backgroundColor:n.secondary},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.logo,alt:e.logo})}),Object(E.jsx)("h4",{children:e.name})]})},e.name)}))}),Object(E.jsx)("div",{className:"skills-content-container",ref:p,children:d.map((function(e){return Object(E.jsx)("div",{className:"skills-content",children:Object(E.jsxs)("div",{className:"skills-item",style:{backgroundColor:n.secondary},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.logo,alt:e.logo})}),Object(E.jsx)("h4",{children:e.name})]})},e.logo)}))}),Object(E.jsx)("div",{className:"skills-content-container",ref:b,children:u.map((function(e){return Object(E.jsx)("div",{className:"skills-content",children:Object(E.jsxs)("div",{className:"skills-item",style:{backgroundColor:n.secondary},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.logo,alt:e.logo})}),Object(E.jsx)("h4",{children:e.name})]})},e.logo)}))})]})})),ye=a.p+"static/media/hardware.f88efd5b.svg",Ne=a.p+"static/media/hotel.f158b1c5.svg",Le=a.p+"static/media/tricor.476c147e.png",Ce=a.p+"static/media/law.a4165b10.png",Se=a.p+"static/media/e-commerce.9e576c6b.svg",Ee=a.p+"static/media/chess.b5109433.svg",ke=a.p+"static/media/book.257485e1.svg",Re=a.p+"static/media/cryptocurrency.27bee9ed.svg",we=Object(c.forwardRef)((function(e,t){var a,n=Object(r.b)(),i=Object(r.c)((function(e){return e.app.skillsRef})),s=Object(r.c)((function(e){return e.app.projectStartPosition})),o=Object(c.useRef)(null),l=Object(c.useRef)(null),d=!1;document.addEventListener("scroll",(function(e){a=window.scrollY,o.current&&l.current&&s&&i&&(a>=s-.8*i.current.clientHeight?(d=!0,o.current.classList.add("animate-fade-in"),o.current.classList.remove("animate-fade-out"),l.current.classList.add("animate-in-left-to-right"),l.current.classList.remove("animate-out-right-to-left")):d&&(o.current.classList.add("animate-fade-out"),o.current.classList.remove("animate-fade-in"),l.current.classList.add("animate-out-right-to-left"),l.current.classList.remove("animate-in-left-to-right"),d=!1))}));var u=[{project:"",icon:Le,name:"Dave Clark",description:"Software engineer at Dave Clark. Working on the Tricor project.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://www.tricorglobal.com/",title:"CAREER",subTitle:"PRESENT",git:"",stack:"ReactJS . ExpressJS . Azure",date:"2023",techStack:[je]},{project:"",icon:Ce,name:"LawVu",description:"Software engineer at LawVu working on SASS application.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://lawvu.com/",title:"CAREER",subTitle:"COMPLETED",git:"",stack:"Angular . .NET . Azure",date:"2022",techStack:[je]},{project:"",icon:Se,name:"E-COMMERCE",description:"DynamoBD, Route 53, Amplify, Cognito, API Gateway and Lambda.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://www.yoominii.com/",title:"PERSONAL PROJECT",subTitle:"COMPLETED",git:"",stack:"ReactJS . AWS",date:"2022",techStack:[je]},{project:"",icon:ye,name:"CANIT LIMITED",description:"Software engineer at CanIT Limited, Working on multiple client software solutions.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://www.canit.co.nz/",title:"CanIT Limited.",subTitle:"INFORMATION",git:"",stack:"VueJS . Vuetify",date:"2019",techStack:[je]},{project:"",icon:Ne,name:"RICCARTON MALL MOTELS",description:"Lead designer and developer for this project.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://rmm.co.nz/",title:"CanIT Limited.",subTitle:"HOTEL BOOKINGS",git:"",stack:"VueJS . Vuetify",date:"2019",techStack:[je]},{project:"",icon:Ee,name:"CHESS",description:"ReactJS chess game.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://jellychn.github.io/chess/",title:"PERSONAL PROJECT",subTitle:"COMPLETED",git:"https://github.com/jellychn/chess",stack:"ReactJS",date:"2019",techStack:[je]},{project:"",icon:ke,name:"QUOTES",description:"Inspired by the book 366 days with Wisdom by Master Hsing Yun, created a web app that cycles between 366 quotes changing everyday based on the date and the quote according to the book.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://jellychn.github.io/quotes/",title:"PERSONAL PROJECT",subTitle:"COMPLETED",git:"https://github.com/jellychn/quotes",stack:"ReactJS . SCSS . Flutter . Dart",date:"2019",techStack:[je,pe,ue,re]},{project:"sylo",icon:Re,name:"SYLO TEST",description:"Front-end Cryptocurrency app tracker for an internship back in 2019 using React Native. I was tasked to replicate a design produced by the company's UX developers. Requesting data from a backend API and enabling light and dark themes.",LHSColor:"aquamarine",RHSColor:"white",demo:"",title:"PERSONAL PROJECT",subTitle:"COMPLETED",git:"https://github.com/jellychn/sylo-test",stack:"ReactJS . TypeScript",date:"2019",techStack:[je,be]}],j=function(e,t){return e.length>0?Object(E.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",children:[" ",Object(E.jsx)("button",{className:"project-button",children:Object(E.jsx)("h3",{children:"VIEW PROJECT"})})]}):t.length>0?Object(E.jsxs)("button",{onClick:function(){n(y(!0)),n(N("projectShowCase")),n({type:m,payload:t})},className:"project-button",children:[" ",Object(E.jsx)("h3",{children:"VIEW PROJECT"})]}):void 0},p=function(e){if(e.length>0)return Object(E.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(E.jsx)("h5",{className:"git",children:"GITHUB"})})};return Object(E.jsxs)("div",{ref:t,className:"projects-container",children:[Object(E.jsx)("h1",{ref:o,className:"section-title",children:"PROJECTS\u3002"}),Object(E.jsx)("div",{ref:l,className:"project-items-container",children:u.map((function(e){return Object(E.jsxs)("div",{className:"project",children:[Object(E.jsxs)("div",{className:"project-LHS",style:{backgroundColor:e.LHSColor},children:[Object(E.jsx)("h5",{children:e.title}),Object(E.jsx)("h6",{children:e.subTitle}),Object(E.jsx)("h3",{children:e.date}),p(e.git),Object(E.jsx)("div",{className:"project-logo-container",children:Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.icon,alt:e.icon})})}),Object(E.jsx)("h5",{className:"stack",children:e.stack})]}),Object(E.jsx)("div",{className:"project-RHS",style:{backgroundColor:e.RHSColor},children:Object(E.jsxs)("div",{className:"project-info",children:[Object(E.jsx)("h2",{className:"project-name",children:e.name}),Object(E.jsx)("p",{className:"project-description",children:e.description}),Object(E.jsx)("div",{className:"content-fill"}),j(e.demo,e.project)]})})]})}))})]})}));var Te=function(){window.scrollTo(0,0);var e=Object(r.c)((function(e){return e.app.colorConfig})),t=Object(r.b)(),a=Object(c.useRef)(null),n=Object(c.useRef)(null),i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,c,s=(null===(e=a.current)||void 0===e?void 0:e.scrollHeight)||0,r=(null===(c=n.current)||void 0===c?void 0:c.scrollHeight)||0;document.addEventListener("scroll",(function(e){var a=window.scrollY;a>=0&&a<=s?t(x("HI, THERE \u3002")):a>=s&&a<=s+r?t(x("SKILLS \u3002")):a>s+r&&t(x("PROJECTS \u3002"))})),t({type:b,payload:{ref:a,startPosition:0,endPosition:s}}),t(function(e){return{type:h,payload:e}}({ref:n,startPosition:s,endPosition:s+r})),t(function(e){return{type:f,payload:e}}({ref:i,startPosition:s+r}))}),[a,n,i,t]),Object(E.jsxs)("div",{className:"App",style:{backgroundColor:e.primary},children:[Object(E.jsx)(I,{}),Object(E.jsx)(q,{}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)(_,{}),Object(E.jsx)(ee,{ref:a}),Object(E.jsx)(xe,{ref:n}),Object(E.jsx)(we,{ref:i})]}),Object(E.jsx)(W,{})]})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))},Fe=a(6),He=Object(Fe.b)({app:g}),Me=Object(Fe.c)(He,{},Fe.a.apply(void 0,[]));s.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(r.a,{store:Me,children:Object(E.jsx)(Te,{})})}),document.getElementById("root")),Pe()}},[[21,1,2]]]);
//# sourceMappingURL=main.05dbaea5.chunk.js.map