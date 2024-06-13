"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[216],{986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(4848),o=t(8453);const s={sidebar_position:1},r="Refactoring",a={id:"advanced/refactoring",title:"Refactoring",description:"Refactoring code is the process of restructuring existing computer code without changing its external behavior. The main goal of code refactoring is to improve the code's internal structure, making it more readable, maintainable, and efficient while preserving its functionality.",source:"@site/docs/advanced/refactoring.md",sourceDirName:"advanced",slug:"/advanced/refactoring",permalink:"/geekout-2024/docs/advanced/refactoring",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/refactoring.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Backend Advanced",permalink:"/geekout-2024/docs/advanced/"},next:{title:"Testing",permalink:"/geekout-2024/docs/advanced/testing"}},d={},c=[{value:"Why refactor",id:"why-refactor",level:2},{value:"Putting it to practice",id:"putting-it-to-practice",level:2},{value:"1. Consolidating all configuration related code to the top",id:"1-consolidating-all-configuration-related-code-to-the-top",level:3},{value:"2. Extracting out duplicated code into re-usable functions",id:"2-extracting-out-duplicated-code-into-re-usable-functions",level:3},{value:"2.1 Function to read all existing todos",id:"21-function-to-read-all-existing-todos",level:4},{value:"Previously",id:"previously",level:5},{value:"Now",id:"now",level:5},{value:"Previously",id:"previously-1",level:5},{value:"Refactored",id:"refactored",level:5},{value:"2.2 Function to get a specific Todo Task using an <code>id</code>",id:"22-function-to-get-a-specific-todo-task-using-an-id",level:4},{value:"Previously",id:"previously-2",level:5},{value:"Now",id:"now-1",level:5},{value:"Previously",id:"previously-3",level:5},{value:"Refactored",id:"refactored-1",level:5},{value:"2.3 You get the gist",id:"23-you-get-the-gist",level:4},{value:"3. Separating into different files",id:"3-separating-into-different-files",level:3},{value:"Final Code",id:"final-code",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"refactoring",children:"Refactoring"}),"\n",(0,i.jsx)(n.p,{children:"Refactoring code is the process of restructuring existing computer code without changing its external behavior. The main goal of code refactoring is to improve the code's internal structure, making it more readable, maintainable, and efficient while preserving its functionality."}),"\n",(0,i.jsx)(n.h2,{id:"why-refactor",children:"Why refactor"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Improving code readability"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Renaming variables, functions, and classes to be more descriptive"}),"\n",(0,i.jsx)(n.li,{children:"Adding comments and documentation to explain complex code segments"}),"\n",(0,i.jsx)(n.li,{children:"Formatting the code consistently (indentation, line breaks, etc.)"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Eliminating code duplication"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identifying and extracting duplicate code into reusable functions or methods"}),"\n",(0,i.jsx)(n.li,{children:"Applying the DRY (Don't Repeat Yourself) principle"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Simplifying complex logic"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Breaking down large functions or methods into smaller, more focused ones"}),"\n",(0,i.jsx)(n.li,{children:"Reducing the complexity of conditional statements and loops"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Improving code organization"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Grouping related code together into modules, classes, or packages"}),"\n",(0,i.jsx)(n.li,{children:"Separating concerns and responsibilities into distinct components"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Optimizing performance"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Identifying and removing unnecessary or inefficient code"}),"\n",(0,i.jsx)(n.li,{children:"Applying performance-enhancing techniques like caching or lazy loading"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"putting-it-to-practice",children:"Putting it to practice"}),"\n",(0,i.jsxs)(n.p,{children:["Ya'll probably realised that there is a lot of duplicated code in ",(0,i.jsx)(n.code,{children:"app.js"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Generally, if we see something being copy pasted around more than twice, it gives enough reason to extract that out into a reusable function."}),"\n",(0,i.jsx)(n.h3,{id:"1-consolidating-all-configuration-related-code-to-the-top",children:"1. Consolidating all configuration related code to the top"}),"\n",(0,i.jsx)(n.p,{children:"Why? It makes it easier to keep track of what configurations are being used in your application."}),"\n",(0,i.jsxs)(n.p,{children:["e.g. all the ",(0,i.jsx)(n.code,{children:"app.use"})]}),"\n",(0,i.jsxs)(n.p,{children:["The top of your ",(0,i.jsx)(n.code,{children:"app.js"})," should look like this"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'const { randomInt } = require("crypto");\nconst express = require("express");\nconst cors = require("cors");\nconst fs = require("fs");\n\nconst app = express();\n\napp.use(cors());\napp.use(express.json());\n\n// Rest of your code here\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-extracting-out-duplicated-code-into-re-usable-functions",children:"2. Extracting out duplicated code into re-usable functions"}),"\n",(0,i.jsx)(n.p,{children:"Why? Why repeat yourself many times, extract the logic to a function an re-use that function."}),"\n",(0,i.jsx)(n.p,{children:"That way, whenever that logic changes, you only have to modify this re-usable function once instead of having to dig around the code to change it one by one."}),"\n",(0,i.jsx)(n.h4,{id:"21-function-to-read-all-existing-todos",children:"2.1 Function to read all existing todos"}),"\n",(0,i.jsx)(n.p,{children:"This piece of code is scattered everywhere. Let's make it a re-usable function."}),"\n",(0,i.jsx)(n.h5,{id:"previously",children:"Previously"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'// Read our existing todos\nconst existingTodos = fs.readFileSync("./todos.json", "utf-8");\n\nconst formattedData = JSON.parse(existingTodos);\n'})}),"\n",(0,i.jsx)(n.h5,{id:"now",children:"Now"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'function readExistingTodos() {\n  const existingTodos = fs.readFileSync("./todos.json", "utf-8");\n\n  const formattedTodos = JSON.parse(existingTodos);\n\n  return formattedTodos;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now replace all the repeated dirty code with the function."}),"\n",(0,i.jsx)(n.p,{children:"For e.g."}),"\n",(0,i.jsx)(n.h5,{id:"previously-1",children:"Previously"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'app.get("/todos", (req, res) => {\n  const data = fs.readFileSync("./todos.json", "utf-8");\n\n  const formattedData = JSON.parse(data);\n\n  res.status(200).json(formattedData);\n});\n'})}),"\n",(0,i.jsx)(n.h5,{id:"refactored",children:"Refactored"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'app.get("/todos", (req, res) => {\n  const existingTodos = readExistingTodos();\n\n  res.status(200).json(existingTodos);\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Now test your app to verify that there's no behaviour change or weird bugs that arose from this refactor."})})}),"\n",(0,i.jsx)(n.p,{children:"We always want to make small changes incrementally and immediately test them. We don't wanna get a big surprise when we only test after making multiple big changes. Ain't nobody got the headspace to deal with that in this economy."}),"\n",(0,i.jsxs)(n.h4,{id:"22-function-to-get-a-specific-todo-task-using-an-id",children:["2.2 Function to get a specific Todo Task using an ",(0,i.jsx)(n.code,{children:"id"})]}),"\n",(0,i.jsx)(n.p,{children:"Same thing. This piece of code is scattered everywhere. Let's make it a re-usable function."}),"\n",(0,i.jsx)(n.h5,{id:"previously-2",children:"Previously"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const existingTodos = readExistingTodos();\n\n// Check that the todo we want to delete exists\nconst theTodoIwant = existingTodos.find((todo) => todo.id === todoId);\n"})}),"\n",(0,i.jsx)(n.h5,{id:"now-1",children:"Now"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"function getSpecificTodo(id) {\n  const existingTodos = readExistingTodos();\n  const theTodoIwant = existingTodos.find((todo) => todo.id === todoId);\n\n  return theTodoIwant;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now replace all the repeated dirty code with the function."}),"\n",(0,i.jsx)(n.p,{children:"For e.g."}),"\n",(0,i.jsx)(n.h5,{id:"previously-3",children:"Previously"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'app.get("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n\n  const existingTodos = readExistingTodos();\n\n  const theTodoIwant = existingTodos.find((todo) => todo.id === todoId);\n\n  // rest of the code\n});\n'})}),"\n",(0,i.jsx)(n.h5,{id:"refactored-1",children:"Refactored"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'app.get("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n\n  const theTodoIwant = getSpecificTodo(todoId);\n  // rest of the code\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now call the endpoint to verify that it still works and repeat for the other endpoints."}),"\n",(0,i.jsx)(n.h4,{id:"23-you-get-the-gist",children:"2.3 You get the gist"}),"\n",(0,i.jsx)(n.p,{children:"What else can be extracted into a re-usable function? Figure it out i ain't got time for dat."}),"\n",(0,i.jsx)(n.h3,{id:"3-separating-into-different-files",children:"3. Separating into different files"}),"\n",(0,i.jsxs)(n.p,{children:["After extracting out the re-usable functions, you'll probably find that you have a bunch of functions sitting around in ",(0,i.jsx)(n.code,{children:"app.js"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It's cluttering space up. no nice. Why not separate it into a separate file and import it into ",(0,i.jsx)(n.code,{children:"app.js"})]}),"\n",(0,i.jsxs)(n.p,{children:["Let's create a ",(0,i.jsx)(n.code,{children:"utils.js"})," and dump all those re-usable functions there, don't forget to export the functions and import whatever dependency necessary."]}),"\n",(0,i.jsx)(n.p,{children:"Debug any errors on your own, chatgpt it or sum."}),"\n",(0,i.jsx)(n.h2,{id:"final-code",children:"Final Code"}),"\n",(0,i.jsxs)(n.p,{children:["After refactoring, you should end up with something like ",(0,i.jsx)(n.a,{href:"https://github.com/seanjin97/geekout-2024/tree/master/backend/refactoring",children:"this"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);