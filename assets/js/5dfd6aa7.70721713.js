"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[785],{3362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(4848),i=n(8453);const r={sidebar_position:3},s="Hosting",l={id:"advanced/hosting",title:"Hosting",description:"Code checkpoint",source:"@site/docs/advanced/hosting.md",sourceDirName:"advanced",slug:"/advanced/hosting",permalink:"/geekout-2024/docs/advanced/hosting",draft:!1,unlisted:!1,editUrl:"https://github.com/seanjin97/geekout-2024/tree/master/docs/docs/advanced/hosting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/geekout-2024/docs/advanced/testing"},next:{title:"Security",permalink:"/geekout-2024/docs/advanced/auth"}},a={},d=[{value:"Code checkpoint",id:"code-checkpoint",level:2},{value:"Why host??",id:"why-host",level:2},{value:"Hosting with Render",id:"hosting-with-render",level:2},{value:"Hol&#39;up, isn&#39;t that a little too easy?",id:"holup-isnt-that-a-little-too-easy",level:2},{value:"Optional Challenge: Deploying on Amazon Web Services (AWS)",id:"optional-challenge-deploying-on-amazon-web-services-aws",level:2},{value:"Steps at a high level",id:"steps-at-a-high-level",level:3}];function c(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"hosting",children:"Hosting"}),"\n",(0,o.jsx)(t.h2,{id:"code-checkpoint",children:"Code checkpoint"}),"\n",(0,o.jsxs)(t.p,{children:["Before getting started with this exercise, ensure that your code looks like ",(0,o.jsx)(t.a,{href:"https://github.com/seanjin97/geekout-2024/tree/master/backend/advanced/refactoring",children:"this"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"why-host",children:"Why host??"}),"\n",(0,o.jsx)("small",{children:(0,o.jsx)(t.em,{children:"U got ur api alr then now what, ownself call on localhost where got fun. Need to let people use ma, so we host it. Hosting options for backend servers. There's like 1 million of them."})}),"\n",(0,o.jsx)(t.p,{children:"Some require you to put your card details before using.\nSome setup a free database for you.\nSome allow you to deploy docker images.\nSome are easier to use than others."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"It depends on what you're looking for!!"})}),"\n",(0,o.jsx)(t.p,{children:"Here are some examples of cloud service providers in no particular order."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Easy to use (more for hobby apps)"}),(0,o.jsx)(t.th,{children:"Harder to use, but you get more control (more for enterprise)"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Render"}),(0,o.jsx)(t.td,{children:"AWS"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Firebase"}),(0,o.jsx)(t.td,{children:"Google Cloud"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Railway"}),(0,o.jsx)(t.td,{children:"Microsoft Azure"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Fly.io"}),(0,o.jsx)(t.td,{children:"Cloudflare"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Heroku"}),(0,o.jsx)(t.td,{children:"Oracle"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Firebase"}),(0,o.jsx)(t.td,{children:"DigitalOcean"})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["For this exercise I'll just pick ",(0,o.jsx)(t.a,{href:"https://render.com/",children:"Render"})," randomly cuz it looks pretty easy to use and their ",(0,o.jsx)(t.a,{href:"https://dashboard.render.com/billing#free-usage",children:"free tier"})," looks pretty generous."]}),"\n",(0,o.jsx)(t.h2,{id:"hosting-with-render",children:"Hosting with Render"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Create an account with Render or login if you already have an existing account."}),"\n",(0,o.jsx)(t.li,{children:"Create a new Web Service."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"create new web service",src:n(8034).A+"",width:"1150",height:"483"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Create a new GitHub repository (google it if you dk how) and push your Express.js server code there. It should look something like ",(0,o.jsx)(t.a,{href:"https://github.com/seanjin97/geekout-2024/tree/master/backend/advanced/hosting",children:"this"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Connect that GitHub code repository to Render."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"connect to a repo",src:n(6751).A+"",width:"848",height:"698"})}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsx)(t.li,{children:"Fill in the launch details for your application as such."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"launch detail",src:n(1068).A+"",width:"1483",height:"709"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsx)(t.li,{children:"Now wait for your server to be deployed. Once done, try hitting the endpoint that they provisioned for you."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"hosted",src:n(9117).A+"",width:"470",height:"90"})}),"\n",(0,o.jsx)(t.p,{children:"and we now have a live API server. nice."}),"\n",(0,o.jsx)(t.h2,{id:"holup-isnt-that-a-little-too-easy",children:"Hol'up, isn't that a little too easy?"}),"\n",(0,o.jsx)(t.p,{children:"Ya it is, what these tools like Render do for you is that they make it super easy for you\nto deploy your stuff."}),"\n",(0,o.jsxs)(t.p,{children:["Behind the scenes, they'll handle ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=IXifQ8mX8DE",children:"containerisation"}),", networking, running your containers for you, and ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=scEDHsr3APg",children:"CI/CD"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"This gives you a good developer experience for getting your stuff live. But then you don't learn anything from it."}),"\n",(0,o.jsx)(t.h2,{id:"optional-challenge-deploying-on-amazon-web-services-aws",children:"Optional Challenge: Deploying on Amazon Web Services (AWS)"}),"\n",(0,o.jsx)(t.p,{children:"Here's a little challenge for you."}),"\n",(0,o.jsxs)(t.p,{children:["Let's deploy our application on Google Cloud Run. It's a serverless service so you'd only need to pay for what you use. ",(0,o.jsx)("small",{children:(0,o.jsx)(t.em,{children:"if no one use then don't need pay"})})]}),"\n",(0,o.jsx)(t.h3,{id:"steps-at-a-high-level",children:"Steps at a high level"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Using ",(0,o.jsx)(t.a,{href:"https://www.docker.com/get-started/",children:"Docker"}),", containerise your application into a Docker image. Ownself go learn this if you dk. ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Gjnup-PuquQ",children:"This"})," is a good place to start"]}),"\n",(0,o.jsx)(t.li,{children:"Try running your docker container locally to test if it works. If it works, then it should work anywhere else. Take note of the ports you expose!"}),"\n",(0,o.jsx)(t.li,{children:"Create a Google Cloud account. You should also create a project within your Google Cloud account."}),"\n",(0,o.jsx)(t.li,{children:"Push your previously created docker image to Docker Hub or whichever docker repository of choice."}),"\n",(0,o.jsx)(t.li,{children:'Create a Google Cloud Run Service and select "Deploy one revision from an existing container image".'}),"\n",(0,o.jsx)(t.li,{children:"Call the auto generated URL to check if your application works!! If you've made it this far, you did it."}),"\n"]}),"\n",(0,o.jsx)("small",{children:(0,o.jsxs)(t.em,{children:["hint hint: ",(0,o.jsx)(t.a,{href:"https://codelabs.developers.google.com/cloud-run-starter-app",children:"https://codelabs.developers.google.com/cloud-run-starter-app"}),". In this tutorial example, they use the Google Cloud CLI to deploy the application, but you can do it entirely through the Google Cloud web UI (except the Docker build steps)."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},6751:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/connect-repo-753492954d07100cdba3880efcdee93a.png"},9117:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/png;base64,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"},1068:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/launch-details-6ca54f2a0d81df9f906c87501bec03c3.png"},8034:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/web-service-6f258eb197de8e0d3e152ec6cbe41033.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);