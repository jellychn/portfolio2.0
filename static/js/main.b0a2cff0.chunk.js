(this["webpackJsonpportfolio2.0"]=this["webpackJsonpportfolio2.0"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(5),s=a.n(i),o=(a(14),a(15),a(2)),r=a(3),l="portfolio2.0/app/setFooterText",d="portfolio2.0/app/setDarkMode",u="protfolio2.0/app/setView",j="portfolio2.0/app/setPrompt",m="portfolio2.0/app/setPromptItem",p="portfolio2.0/app/setPromptType",b="portfolio2.0/app/setHomePositions",h="portfolio2.0/app/setSkillsPositions",f="portfolio2.0/app/setProjectPositions",O={footerText:"",prompt:!1,type:null,item:null,darkMode:!1,colorConfig:{primary:"#F8F9FB",secondary:"#FFFFFF",teriary:"#CCCCCC",highlight:"#333333",shadow:"#EEEEEE",project:"aquamarine",navigation:"#FFCC67"},view:"HI, THERE \u3002",homeRef:null,homeStartPosition:null,homeEndPosition:null,homeHeight:null,homeWidth:null,skillsRef:null,skillsStartPosition:null,skillsEndPosition:null,projectRef:null,projectStartPosition:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(r.a)(Object(r.a)({},e),{},{footerText:t.payload});case d:return t.payload?Object(r.a)(Object(r.a)({},e),{},{darkMode:t.payload,colorConfig:{primary:"#263238",secondary:"#3A4A52",teriary:"#3A4A52",highlight:"#FFFFFF",shadow:"rgba(0,0,0,0.3)",project:"#3A4A52",navigation:"#FF5850"}}):Object(r.a)(Object(r.a)({},e),{},{darkMode:t.payload,colorConfig:{primary:"#F8F9FB",secondary:"#FFFFFF",teriary:"#CCCCCC",highlight:"#333333",shadow:"#EEEEEE",project:"aquamarine",navigation:"#FFCC67"}});case u:return Object(r.a)(Object(r.a)({},e),{},{view:t.payload});case j:return Object(r.a)(Object(r.a)({},e),{},{prompt:t.payload});case m:return Object(r.a)(Object(r.a)({},e),{},{item:t.payload});case p:return Object(r.a)(Object(r.a)({},e),{},{type:t.payload});case b:return Object(r.a)(Object(r.a)({},e),{},{homeRef:t.payload.ref,homeStartPosition:t.payload.startPosition,homeEndPosition:t.payload.endPosition});case h:return Object(r.a)(Object(r.a)({},e),{},{skillsRef:t.payload.ref,skillsStartPosition:t.payload.startPosition,skillsEndPosition:t.payload.endPosition});case f:return Object(r.a)(Object(r.a)({},e),{},{projectRef:t.payload.ref,projectStartPosition:t.payload.startPosition});default:return e}},v=function(e){return{type:l,payload:e}},x=function(e){return{type:u,payload:e}},y=function(e){return{type:j,payload:e}},N=function(e){return{type:p,payload:e}},C=a.p+"static/media/avatar.097a0966.svg",L=a.p+"static/media/contact.fde0414d.svg",S=a.p+"static/media/phone.34faee4b.svg",E=a(0),k=function(){var e=Object(o.c)((function(e){return e.app.prompt})),t=Object(c.useRef)(null);return t.current&&(e?(t.current.classList.add("animate-fade-in"),t.current.classList.remove("animate-fade-out")):(t.current.classList.remove("animate-fade-in"),t.current.classList.add("animate-fade-out"))),Object(E.jsxs)("div",{ref:t,className:"contact-card",children:[Object(E.jsx)("div",{className:"contact-card-LHS",children:Object(E.jsx)("div",{className:"avatar",children:Object(E.jsx)("img",{src:C,alt:C})})}),Object(E.jsxs)("div",{className:"contact-card-RHS",children:[Object(E.jsx)("div",{className:"contact-header",children:Object(E.jsx)("h4",{children:"CONTACT CARD"})}),Object(E.jsx)("div",{className:"contact-main",children:Object(E.jsxs)("div",{className:"content-main-content",children:[Object(E.jsx)("h1",{children:"JERRY CHEN"}),Object(E.jsx)("h2",{children:"DEVELOPER"})]})}),Object(E.jsxs)("div",{className:"contact-footer",children:[Object(E.jsx)("div",{className:"content-fill"}),Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("a",{href:"mailto:jchen123.862@gmail.com",children:Object(E.jsx)("img",{src:L,alt:L})})}),Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("a",{href:"tel:+640210620879",children:Object(E.jsx)("img",{src:S,alt:S})})})]})]})]})},R=a(4),w=a.p+"static/media/left.20a5f757.svg",T=a.p+"static/media/right.1918b9b1.svg",P=a.p+"static/media/light-display.e7877f38.png",F=a.p+"static/media/light-view.38192faf.png",H=a.p+"static/media/dark-display.a435ea35.png",I=a.p+"static/media/dark-view.b9d54a66.png",M=function(){var e=Object(c.useState)(0),t=Object(R.a)(e,2),a=t[0],n=t[1],i=Object(o.c)((function(e){return e.app.item})),s={sylo:[P,F,H,I]},r=s[i].length;return Object(E.jsxs)("div",{className:"project-showcase",children:[Object(E.jsxs)("h2",{children:[i.toUpperCase()," PROJECT"]}),Object(E.jsxs)("div",{className:"carousel",children:[Object(E.jsx)("div",{className:"arrow",onClick:function(){n(0===a?r-1:a-=1)},children:Object(E.jsx)("img",{src:w,alt:w})}),Object(E.jsx)("div",{className:"content-fill"}),Object(E.jsx)("div",{className:"arrow",onClick:function(){n(a===r-1?0:a+=1)},children:Object(E.jsx)("img",{src:T,alt:T})})]}),Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:s[i][a],alt:s[i][a]})})]})},A=a.p+"static/media/resume.ebcac113.pdf",J=function(){return Object(E.jsx)("div",{className:"cv",children:Object(E.jsx)("embed",{src:A,width:"100%",height:"100%"})})},D=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app.prompt})),a=Object(o.c)((function(e){return e.app.type})),n=Object(c.useRef)(null);n.current&&(t?(n.current.classList.add("animate-fade-in"),n.current.classList.remove("animate-fade-out")):(n.current.classList.add("animate-fade-out"),n.current.classList.remove("animate-fade-in")));return Object(E.jsxs)("div",{ref:n,className:"prompt",style:{display:t?"block":"none"},children:["contact"===a?Object(E.jsx)(k,{}):"cv"===a?Object(E.jsx)(J,{}):"projectShowCase"===a?Object(E.jsx)(M,{}):void 0,Object(E.jsx)("div",{className:"prompt-tint",onClick:function(){return e(y(!1))}})]})},V=a.p+"static/media/logo.8907de13.svg",q=a.p+"static/media/logo-dark.de8c2add.svg",B=function(){var e,t=Object(o.c)((function(e){return e.app.darkMode})),a=Object(o.c)((function(e){return e.app.colorConfig})),c=Object(o.c)((function(e){return e.app.view}));return Object(E.jsx)("div",{children:Object(E.jsx)("header",{className:"App-header",style:{backgroundColor:(e=a.primary,"#F8F9FB"===e?"rgba(248,249,251,0.8)":"rgba(38,50,56,0.8)")},children:Object(E.jsxs)("div",{className:"flex",children:[Object(E.jsx)("img",{className:"logo",src:t?q:V,alt:"logo"}),Object(E.jsx)("span",{className:"space"}),Object(E.jsx)("h2",{style:{color:a.navigation},children:c})]})})})},G=a.p+"static/media/github.d3379e43.svg",Y=a.p+"static/media/cv.e665d91e.svg",K=a.p+"static/media/moon-light.b1602c77.svg",W=a.p+"static/media/sun-light.6d3bd4fc.svg",U=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app.darkMode})),a=Object(o.c)((function(e){return e.app.colorConfig})),n=Object(o.c)((function(e){return e.app.footerText})),i=Object(c.useRef)(null),s=function(){i.current&&(i.current.classList.add("animate-in-bottom-to-top-footer"),i.current.classList.remove("animate-out-top-to-bottom-footer"))},r=function(){i.current&&(i.current.classList.remove("animate-in-bottom-to-top-footer"),i.current.classList.add("animate-out-top-to-bottom-footer"))};return Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{ref:i,className:"hover-text",style:{color:a.highlight,textShadow:"2px 2px "+a.secondary},children:n}),Object(E.jsx)("div",{className:"App-footer-shadow",children:Object(E.jsx)("div",{className:"shadow-content",style:{boxShadow:"0px -20px 50px 80px "+a.shadow}})}),Object(E.jsx)("div",{className:"App-footer",children:Object(E.jsx)("div",{className:"content",style:{backgroundColor:a.primary,borderTop:"2px solid "+a.secondary,borderBottom:"2px solid "+a.secondary},children:Object(E.jsxs)("div",{className:"content-items",children:[Object(E.jsx)("div",{className:"content-item",onMouseEnter:function(){e(v("GITHUB")),s()},onMouseOut:function(){e(v("")),r()},children:Object(E.jsx)("a",{href:"https://github.com/jellychn",target:"_blank",rel:"noreferrer",children:Object(E.jsx)("img",{className:"icon",src:G,alt:G})})}),Object(E.jsx)("div",{className:"content-item",onClick:function(){e(y(!0)),e(N("contact"))},onMouseEnter:function(){e(v("CONTACT")),s()},onMouseOut:function(){e(v("")),r()},children:Object(E.jsx)("img",{className:"icon",src:L,alt:L})}),Object(E.jsx)("div",{className:"content-item",onClick:function(){e(y(!0)),e(N("cv"))},onMouseEnter:function(){e(v("CV")),s()},onMouseOut:function(){e(v("")),r()},children:Object(E.jsx)("img",{className:"icon",src:Y,alt:Y})}),Object(E.jsx)("div",{className:"content-item",onClick:function(){return e({type:d,payload:!t})},onMouseEnter:function(){e(v("CLICK ME!")),s()},onMouseOut:function(){e(v("")),r()},children:Object(E.jsx)("img",{className:"icon",src:t?W:K,alt:t?W:K})})]})})})]})},z=a.p+"static/media/home.12fdb3b1.svg",X=a.p+"static/media/skills.4a1f0de2.svg",_=a.p+"static/media/projects.188150a1.svg",Q=function(){var e=Object(o.c)((function(e){return e.app.colorConfig})),t=Object(o.c)((function(e){return e.app.view})),a=Object(o.c)((function(e){return e.app.homeRef})),n=Object(o.c)((function(e){return e.app.skillsRef})),i=Object(o.c)((function(e){return e.app.projectRef})),s=Object(c.useRef)(null),r=Object(c.useRef)(null),l=Object(c.useRef)(null),d=function(e){e.current&&(e.current.classList.add("animate-fade-in"),e.current.classList.remove("animate-fade-out"))},u=function(e){e.current&&(e.current.classList.remove("animate-fade-in"),e.current.classList.add("animate-fade-out"))},j=function(e,t){e.current&&("HOME"===t?window.scrollTo(0,0):window.scrollTo(0,e.current.offsetTop+1))};return Object(E.jsxs)("div",{className:"navigation",children:[Object(E.jsxs)("div",{className:"navigation-item-container",children:[Object(E.jsxs)("div",{ref:s,className:"nav-info",style:{backgroundColor:e.navigation},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:z,alt:z})}),Object(E.jsx)("h5",{children:"HOME"})]}),Object(E.jsx)("div",{className:"navigation-item",style:{backgroundColor:"HI, THERE \u3002"===t?e.navigation:e.teriary},onMouseEnter:function(){return d(s)},onMouseLeave:function(){return u(s)},onClick:function(){return j(a,"HOME")}})]}),Object(E.jsxs)("div",{className:"navigation-item-container",children:[Object(E.jsxs)("div",{ref:r,className:"nav-info",style:{backgroundColor:e.navigation},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:X,alt:X})}),Object(E.jsx)("h5",{children:"SKILLS"})]}),Object(E.jsx)("div",{className:"navigation-item",style:{backgroundColor:"SKILLS \u3002"===t?e.navigation:e.teriary},onMouseEnter:function(){return d(r)},onMouseLeave:function(){return u(r)},onClick:function(){return j(n,"SKILLS")}})]}),Object(E.jsxs)("div",{className:"navigation-item-container",children:[Object(E.jsxs)("div",{ref:l,className:"nav-info",style:{backgroundColor:e.navigation},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:_,alt:_})}),Object(E.jsx)("h5",{children:"PROJECTS"})]}),Object(E.jsx)("div",{className:"navigation-item",style:{backgroundColor:"PROJECTS \u3002"===t?e.navigation:e.teriary},onMouseEnter:function(){return d(l)},onMouseLeave:function(){return u(l)},onClick:function(){return j(i,"PROJECTS")}})]})]})},Z=a.p+"static/media/sun.6d3bd4fc.svg",$=a.p+"static/media/moon.27c17ca4.svg",ee=a.p+"static/media/star.5cf67a03.svg",te=a.p+"static/media/cloud.03b17b39.svg",ae=Object(c.forwardRef)((function(e,t){var a,n=Object(c.useState)(0),i=Object(R.a)(n,2),s=i[0],r=i[1],l=Object(c.useState)(0),d=Object(R.a)(l,2),u=d[0],j=d[1],m=Object(o.c)((function(e){return e.app.darkMode})),p=Object(o.c)((function(e){return e.app.colorConfig})),b=Object(c.useRef)(null),h=Object(c.useRef)(null),f=Object(c.useRef)(null),O=!1;b.current&&h.current&&f.current&&(b.current.classList.add("animate-in-left-to-right"),h.current.classList.add("animate-in-right-to-left"),f.current.classList.add("animate-in-bottom-to-top")),document.addEventListener("scroll",(function(e){a=window.scrollY,b.current&&h.current&&f.current&&(a<500?(O=!0,b.current.classList.add("animate-in-left-to-right"),b.current.classList.remove("animate-out-right-to-left"),h.current.classList.add("animate-in-right-to-left"),h.current.classList.remove("animate-out-left-to-right"),f.current.classList.add("animate-in-bottom-to-top"),f.current.classList.remove("animate-out-top-to-bottom")):O&&(b.current.classList.add("animate-out-right-to-left"),b.current.classList.remove("animate-in-left-to-right"),h.current.classList.remove("animate-in-right-to-left"),h.current.classList.add("animate-out-left-to-right"),f.current.classList.remove("animate-in-bottom-to-top"),f.current.classList.add("animate-out-top-to-bottom"),O=!1))}));var g,v=Object(o.c)((function(e){return e.app.homeRef}));if(v){var x=v.current.scrollWidth/2||0,y=v.current.scrollHeight/2||0;document.onmousemove=function(e){var t=Math.abs(e.screenX-x),a=Math.abs(e.screenY-y);e.screenX>x?r(t/100*-1):r(t/100),e.screenY>y?j(a/100*-1):j(a/100)}}return g=m?Object(E.jsxs)("div",{className:"moon",children:[Object(E.jsx)("img",{src:$,alt:$}),Object(E.jsx)("img",{src:ee,className:"star App-logo",alt:ee})]}):Object(E.jsxs)("div",{className:"sun",children:[Object(E.jsx)("img",{src:Z,className:"App-logo",alt:Z}),Object(E.jsx)("img",{src:te,className:"cloud",alt:te})]}),Object(E.jsx)("div",{ref:t,children:Object(E.jsx)("div",{className:"home-content",children:Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("div",{style:{transform:"translate(".concat(s,"px, ").concat(u,"px)")},children:Object(E.jsx)("div",{ref:b,className:"logo-container",children:g})}),Object(E.jsxs)("div",{ref:h,className:"name-container",children:[Object(E.jsx)("p",{className:"hello",style:{color:p.highlight},children:"HELLO, I'M"}),Object(E.jsx)("h1",{className:"name",children:"JERRY,"}),Object(E.jsx)("h1",{className:"description",children:"AND I'M A DEVELOPER\u3002"})]}),Object(E.jsxs)("p",{ref:f,className:"sub-description",children:[Object(E.jsx)("span",{className:"sub-description-1",style:{color:p.highlight},children:"FULLSTACK DEVELOPER\u3002"}),Object(E.jsx)("br",{}),Object(E.jsx)("span",{className:"sub-description-2",style:{color:p.highlight},children:"PASSION FOR DESIGN\u3002"})]})]})})})})),ce=a.p+"static/media/aws.1baaa078.svg",ne=a.p+"static/media/graphql.c0d2b1e1.svg",ie=a.p+"static/media/node.615ffbea.svg",se=a.p+"static/media/figma.753c0742.svg",oe=a.p+"static/media/photoshop.20d9ef58.svg",re=a.p+"static/media/dart.e6ce834f.svg",le=a.p+"static/media/java.4d03e066.svg",de=a.p+"static/media/javascript.00f3e5cf.svg",ue=a.p+"static/media/python.e6d7dc73.svg",je=a.p+"static/media/flutter.9a496ae2.svg",me=a.p+"static/media/react.e68b35f4.svg",pe=a.p+"static/media/redux.0e4fb1c8.svg",be=a.p+"static/media/sass.8aa78a83.svg",he=a.p+"static/media/typescript.a6305a73.svg",fe=a.p+"static/media/vue.4921ee76.svg",Oe=a.p+"static/media/vuetify.c3ac4b61.svg",ge=Object(c.forwardRef)((function(e,t){var a,n=Object(o.c)((function(e){return e.app.colorConfig})),i=Object(o.c)((function(e){return e.app.homeRef})),s=Object(o.c)((function(e){return e.app.skillsStartPosition})),r=Object(o.c)((function(e){return e.app.skillsEndPosition})),l=[{logo:me,name:"ReactJS"},{logo:pe,name:"Redux"},{logo:fe,name:"VueJS"},{logo:Oe,name:"Vuetify"},{logo:je,name:"Flutter"},{logo:be,name:"SASS"},{logo:se,name:"Figma"},{logo:oe,name:"PhotoShop"}],d=[{logo:ce,name:"AWS"},{logo:ne,name:"GraphQL"},{logo:ie,name:"NodeJS"}],u=[{logo:de,name:"JavaScript"},{logo:ue,name:"Python"},{logo:le,name:"Java"},{logo:re,name:"Dart"},{logo:he,name:"TypeScript"}],j=Object(c.useRef)(null),m=Object(c.useRef)(null),p=Object(c.useRef)(null),b=Object(c.useRef)(null),h=!1;return document.addEventListener("scroll",(function(e){a=window.scrollY,j.current&&m.current&&p.current&&b.current&&s&&r&&i&&(a>=s-.8*i.current.clientHeight&&a<=r?(h=!0,j.current.classList.add("animate-fade-in"),j.current.classList.remove("animate-fade-out"),m.current.classList.add("animate-in-right-to-left"),m.current.classList.remove("animate-out-left-to-right"),p.current.classList.add("animate-in-right-to-left"),p.current.classList.remove("animate-out-left-to-right"),b.current.classList.add("animate-in-right-to-left"),b.current.classList.remove("animate-out-left-to-right")):h&&(j.current.classList.add("animate-fade-out"),j.current.classList.remove("animate-fade-in"),m.current.classList.add("animate-out-left-to-right"),m.current.classList.remove("animate-in-right-to-left"),p.current.classList.add("animate-out-left-to-right"),p.current.classList.remove("animate-in-right-to-left"),b.current.classList.add("animate-out-left-to-right"),b.current.classList.remove("animate-in-right-to-left"),h=!1))})),Object(E.jsxs)("div",{ref:t,className:"skills-container",children:[Object(E.jsx)("h1",{ref:j,className:"section-title",children:"SKILLS\u3002"}),Object(E.jsx)("div",{className:"skills-content-container",ref:m,children:l.map((function(e){return Object(E.jsx)("div",{className:"skills-content",children:Object(E.jsxs)("div",{className:"skills-item",style:{backgroundColor:n.secondary},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.logo,alt:e.logo})}),Object(E.jsx)("h4",{children:e.name})]})},e.name)}))}),Object(E.jsx)("div",{className:"skills-content-container",ref:p,children:d.map((function(e){return Object(E.jsx)("div",{className:"skills-content",children:Object(E.jsxs)("div",{className:"skills-item",style:{backgroundColor:n.secondary},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.logo,alt:e.logo})}),Object(E.jsx)("h4",{children:e.name})]})},e.logo)}))}),Object(E.jsx)("div",{className:"skills-content-container",ref:b,children:u.map((function(e){return Object(E.jsx)("div",{className:"skills-content",children:Object(E.jsxs)("div",{className:"skills-item",style:{backgroundColor:n.secondary},children:[Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.logo,alt:e.logo})}),Object(E.jsx)("h4",{children:e.name})]})},e.logo)}))})]})})),ve=a.p+"static/media/hardware.f88efd5b.svg",xe=a.p+"static/media/plant.de606886.svg",ye=a.p+"static/media/hotel.f158b1c5.svg",Ne=a.p+"static/media/e-commerce.9e576c6b.svg",Ce=a.p+"static/media/chess.b5109433.svg",Le=a.p+"static/media/book.257485e1.svg",Se=a.p+"static/media/cryptocurrency.27bee9ed.svg",Ee=Object(c.forwardRef)((function(e,t){var a,n=Object(o.b)(),i=Object(o.c)((function(e){return e.app.skillsRef})),s=Object(o.c)((function(e){return e.app.projectStartPosition})),r=Object(c.useRef)(null),l=Object(c.useRef)(null),d=!1;document.addEventListener("scroll",(function(e){a=window.scrollY,r.current&&l.current&&s&&i&&(a>=s-.8*i.current.clientHeight?(d=!0,r.current.classList.add("animate-fade-in"),r.current.classList.remove("animate-fade-out"),l.current.classList.add("animate-in-left-to-right"),l.current.classList.remove("animate-out-right-to-left")):d&&(r.current.classList.add("animate-fade-out"),r.current.classList.remove("animate-fade-in"),l.current.classList.add("animate-out-right-to-left"),l.current.classList.remove("animate-in-left-to-right"),d=!1))}));var u=[{project:"",icon:Ne,name:"E-COMMERCE",description:"Currently as a side project I am building an e-commerce website using React and aws services such as: DynamoBD, Route 53, Amplify, Cognito, API Gateway and Lambda.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://www.yoominii.com/",title:"PERSONAL PROJECT",subTitle:"IN-PROGRESS",git:"",stack:"ReactJS . AWS",date:"PRESENT",techStack:[me]},{project:"",icon:ve,name:"CANIT LIMITED",description:"This project included designing and building a landing page for CanIT Limited, the website was built using VueJS.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://www.canit.co.nz/",title:"CanIT Limited.",subTitle:"INFORMATION",git:"",stack:"VueJS . Vuetify",date:"2019",techStack:[me]},{project:"",icon:xe,name:"MAO PRODUCE",description:"During this project I was tasked to design and implement a landing page for a local veggie farm. The technologies used were VueJS and Vuetify.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://www.maoproduce.co.nz/",title:"CanIT Limited.",subTitle:"LANDING PAGE",git:"",stack:"VueJS . Vuetify",date:"2019",techStack:[me]},{project:"",icon:ye,name:"RICCARTON MALL MOTELS",description:"I was the lead designer and front-end developer for this project. The technology stack used was Vue and Vuetify. During this project I had to link the web app to the booking system as well as implementing emailing and Google reCaptcha for security.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://rmm.co.nz/",title:"CanIT Limited.",subTitle:"HOTEL BOOKINGS",git:"",stack:"VueJS . Vuetify",date:"2019",techStack:[me]},{project:"",icon:Ce,name:"CHESS",description:"During one afternoon decided to built a working chess game using ReactJS.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://jellychn.github.io/chess/",title:"PERSONAL PROJECT",subTitle:"COMPLETED",git:"https://github.com/jellychn/chess",stack:"ReactJS",date:"2019",techStack:[me]},{project:"",icon:Le,name:"QUOTES",description:"Web app and companion app that displays quotes from the book 366 days with Wisdom by Master Hsing Yun, the web app cycles between 366 quotes changing everyday automatically based on the date and the quote according to the book. ReactJS was used for the web app and flutter for the app.",LHSColor:"aquamarine",RHSColor:"white",demo:"https://jellychn.github.io/quotes/",title:"PERSONAL PROJECT",subTitle:"COMPLETED",git:"https://github.com/jellychn/quotes",stack:"ReactJS . SCSS . Flutter . Dart",date:"2019",techStack:[me,be,je,re]},{project:"sylo",icon:Se,name:"SYLO TEST",description:"Front-end Cryptocurrency app tracker I made when applying for an internship back in 2019 using React Native. I was tasked to replicate a design produced by the company's UX developers. Requesting data from a backend API and enabling light and dark themes.",LHSColor:"aquamarine",RHSColor:"white",demo:"",title:"PERSONAL PROJECT",subTitle:"COMPLETED",git:"https://github.com/jellychn/sylo-test",stack:"ReactJS . TypeScript",date:"2019",techStack:[me,he]}],j=function(e,t){return e.length>0?Object(E.jsxs)("a",{href:e,target:"_blank",rel:"noreferrer",children:[" ",Object(E.jsx)("button",{className:"project-button",children:Object(E.jsx)("h3",{children:"VIEW PROJECT"})})]}):t.length>0?Object(E.jsxs)("button",{onClick:function(){n(y(!0)),n(N("projectShowCase")),n({type:m,payload:t})},className:"project-button",children:[" ",Object(E.jsx)("h3",{children:"VIEW PROJECT"})]}):void 0},p=function(e){if(e.length>0)return Object(E.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:Object(E.jsx)("h5",{className:"git",children:"GITHUB"})})};return Object(E.jsxs)("div",{ref:t,className:"projects-container",children:[Object(E.jsx)("h1",{ref:r,className:"section-title",children:"PROJECTS\u3002"}),Object(E.jsx)("div",{ref:l,className:"project-items-container",children:u.map((function(e){return Object(E.jsxs)("div",{className:"project",children:[Object(E.jsxs)("div",{className:"project-LHS",style:{backgroundColor:e.LHSColor},children:[Object(E.jsx)("h5",{children:e.title}),Object(E.jsx)("h6",{children:e.subTitle}),Object(E.jsx)("h3",{children:e.date}),p(e.git),Object(E.jsx)("div",{className:"project-logo-container",children:Object(E.jsx)("div",{className:"img-container",children:Object(E.jsx)("img",{src:e.icon,alt:e.icon})})}),Object(E.jsx)("h5",{className:"stack",children:e.stack})]}),Object(E.jsx)("div",{className:"project-RHS",style:{backgroundColor:e.RHSColor},children:Object(E.jsxs)("div",{className:"project-info",children:[Object(E.jsx)("h2",{className:"project-name",children:e.name}),Object(E.jsx)("p",{className:"project-description",children:e.description}),Object(E.jsx)("div",{className:"content-fill"}),j(e.demo,e.project)]})})]})}))})]})}));var ke=function(){window.scrollTo(0,0);var e=Object(o.c)((function(e){return e.app.colorConfig})),t=Object(o.b)(),a=Object(c.useRef)(null),n=Object(c.useRef)(null),i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,c,s=(null===(e=a.current)||void 0===e?void 0:e.scrollHeight)||0,o=(null===(c=n.current)||void 0===c?void 0:c.scrollHeight)||0;document.addEventListener("scroll",(function(e){var a=window.scrollY;a>=0&&a<=s?t(x("HI, THERE \u3002")):a>=s&&a<=s+o?t(x("SKILLS \u3002")):a>s+o&&t(x("PROJECTS \u3002"))})),t({type:b,payload:{ref:a,startPosition:0,endPosition:s}}),t(function(e){return{type:h,payload:e}}({ref:n,startPosition:s,endPosition:s+o})),t(function(e){return{type:f,payload:e}}({ref:i,startPosition:s+o}))}),[a,n,i,t]),Object(E.jsxs)("div",{className:"App",style:{backgroundColor:e.primary},children:[Object(E.jsx)(D,{}),Object(E.jsx)(B,{}),Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)(Q,{}),Object(E.jsx)(ae,{ref:a}),Object(E.jsx)(ge,{ref:n}),Object(E.jsx)(Ee,{ref:i})]}),Object(E.jsx)(U,{})]})},Re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))},we=a(6),Te=Object(we.b)({app:g}),Pe=Object(we.c)(Te,{},we.a.apply(void 0,[]));s.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(o.a,{store:Pe,children:Object(E.jsx)(ke,{})})}),document.getElementById("root")),Re()}},[[21,1,2]]]);
//# sourceMappingURL=main.b0a2cff0.chunk.js.map