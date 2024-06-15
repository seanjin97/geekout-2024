"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[591],{1900:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(4848),t=s(8453);const o={sidebar_position:7},l="Hello, World!",i={id:"basics/hello-world",title:"Hello, World!",description:'In this section, we\'ll walk you through the process of creating a simple "Hello World" endpoint using the Express framework in your Node.js project.',source:"@site/docs/basics/hello-world.md",sourceDirName:"basics",slug:"/basics/hello-world",permalink:"/geekout-2024/docs/basics/hello-world",draft:!1,unlisted:!1,editUrl:"https://github.com/seanjin97/geekout-2024/tree/master/docs/docs/basics/hello-world.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Installing Dependencies",permalink:"/geekout-2024/docs/basics/install-dependencies"},next:{title:"Todo List API",permalink:"/geekout-2024/docs/basics/todo-list/"}},c={},d=[{value:"Step 1: Create a New File",id:"step-1-create-a-new-file",level:2},{value:"Step 2: Import Express",id:"step-2-import-express",level:2},{value:"Step 3: Create an Express Application",id:"step-3-create-an-express-application",level:2},{value:"Step 4: Define the Hello World Endpoint",id:"step-4-define-the-hello-world-endpoint",level:2},{value:"Step 5: Start the Server",id:"step-5-start-the-server",level:2},{value:"Complete Code",id:"complete-code",level:2},{value:"Running the Server",id:"running-the-server",level:2},{value:"Conclusion",id:"conclusion",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hello-world",children:"Hello, World!"}),"\n",(0,r.jsx)(n.p,{children:'In this section, we\'ll walk you through the process of creating a simple "Hello World" endpoint using the Express framework in your Node.js project.'}),"\n",(0,r.jsx)(n.h2,{id:"step-1-create-a-new-file",children:"Step 1: Create a New File"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In your project directory, create a new file called ",(0,r.jsx)(n.code,{children:"app.js"})," (or any other name you prefer)."]}),"\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.code,{children:"app.js"})," file in your code editor."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-import-express",children:"Step 2: Import Express"}),"\n",(0,r.jsxs)(n.p,{children:["At the top of the ",(0,r.jsx)(n.code,{children:"app.js"})," file, import the Express module using the ",(0,r.jsx)(n.code,{children:"require"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const express = require('express');\n"})}),"\n",(0,r.jsx)(n.h2,{id:"step-3-create-an-express-application",children:"Step 3: Create an Express Application"}),"\n",(0,r.jsx)(n.p,{children:"Next, create a new instance of an Express application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const app = express();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"app"})," object will be used to define routes and middleware for your application."]}),"\n",(0,r.jsx)(n.h2,{id:"step-4-define-the-hello-world-endpoint",children:"Step 4: Define the Hello World Endpoint"}),"\n",(0,r.jsxs)(n.p,{children:['Now, let\'s define the "Hello World" endpoint using the ',(0,r.jsx)(n.code,{children:"app.get()"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"app.get('/hello', (req, res) => {\n  res.send('Hello, World!');\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's break down this code:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"app.get()"})," is a method provided by Express to handle GET requests to a specific route."]}),"\n",(0,r.jsxs)(n.li,{children:["The first argument, ",(0,r.jsx)(n.code,{children:"'/hello'"}),", represents the route or path for the endpoint. In this case, the endpoint will be accessible at ",(0,r.jsx)(n.code,{children:"http://localhost:8000/hello"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The second argument is a callback function that takes two parameters: ",(0,r.jsx)(n.code,{children:"req"})," (request) and ",(0,r.jsx)(n.code,{children:"res"})," (response)."]}),"\n",(0,r.jsxs)(n.li,{children:["Inside the callback function, we use ",(0,r.jsx)(n.code,{children:"res.send()"})," to send the response back to the client. In this case, we're sending the string ",(0,r.jsx)(n.code,{children:"'Hello, World!'"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-5-start-the-server",children:"Step 5: Start the Server"}),"\n",(0,r.jsx)(n.p,{children:"Finally, let's start the Express server and listen for incoming requests:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"app.listen(8000, () => {\n  console.log('Server is running on port 8000');\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"app.listen()"})," method starts the server and listens for incoming requests on the specified port (in this case, port 8000). The second argument is a callback function that is executed when the server starts running."]}),"\n",(0,r.jsx)(n.h2,{id:"complete-code",children:"Complete Code"}),"\n",(0,r.jsxs)(n.p,{children:["Here's the complete code for the ",(0,r.jsx)(n.code,{children:"app.js"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const express = require('express');\nconst app = express();\n\napp.get('/hello', (req, res) => {\n  res.send('Hello, World!');\n});\n\napp.listen(8000, () => {\n  console.log('Server is running on port 8000');\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-server",children:"Running the Server"}),"\n",(0,r.jsx)(n.p,{children:'To run the server and test the "Hello World" endpoint:'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open your terminal or command prompt."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to your project directory."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"node app.js\n"})}),"\n",(0,r.jsx)(n.p,{children:'This command will start the server, and you should see the message "Server is running on port 8000" in the console.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open a web browser and visit ",(0,r.jsx)(n.code,{children:"http://localhost:8000/hello"}),'. You should see the message "Hello, World!" displayed in the browser.']}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Congratulations! You have successfully created a "Hello World" endpoint using Express in your Node.js project.'}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"In this section, you learned how to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Import the Express module and create an Express application."}),"\n",(0,r.jsxs)(n.li,{children:['Define a simple "Hello World" endpoint using ',(0,r.jsx)(n.code,{children:"app.get()"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Start the Express server and listen for incoming requests."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"With this basic understanding of creating endpoints in Express, you're ready to move on to building more complex routes and functionality for your Todo List API."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(6540);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);