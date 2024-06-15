"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1298],{6728:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>a});var i=o(4848),s=o(8453);const n={sidebar_position:2},d="1.2. Get a specific Todo Task",r={id:"basics/todo-list/get-a-todo-task",title:"1.2. Get a specific Todo Task",description:"Designing the API:",source:"@site/docs/basics/todo-list/get-a-todo-task.md",sourceDirName:"basics/todo-list",slug:"/basics/todo-list/get-a-todo-task",permalink:"/geekout-2024/docs/basics/todo-list/get-a-todo-task",draft:!1,unlisted:!1,editUrl:"https://github.com/seanjin97/geekout-2024/tree/master/docs/docs/basics/todo-list/get-a-todo-task.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1.1. Get All Todo Items",permalink:"/geekout-2024/docs/basics/todo-list/get-todo-list"},next:{title:"Improving developer productivity",permalink:"/geekout-2024/docs/basics/todo-list/making-our-lives-better"}},c={},a=[{value:"Designing the API:",id:"designing-the-api",level:2},{value:"Diving into the code",id:"diving-into-the-code",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"12-get-a-specific-todo-task",children:"1.2. Get a specific Todo Task"}),"\n",(0,i.jsx)(t.h2,{id:"designing-the-api",children:"Designing the API:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Given"}),(0,i.jsx)(t.th,{children:"When"}),(0,i.jsx)(t.th,{children:"Then"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"As a todo list user"}),(0,i.jsx)(t.td,{children:"I want to retrieve a specific todo item"}),(0,i.jsx)(t.td,{children:"I call this endpoint and I should retrieve the details of the specific todo item if it is found"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["It's a ",(0,i.jsx)(t.code,{children:"GET"})," request because we are retrieving data."]}),"\n",(0,i.jsxs)(t.p,{children:["The endpoint we should create is ",(0,i.jsx)(t.code,{children:"GET /todos/:id"})," where ",(0,i.jsx)(t.code,{children:"id"})," is the todo task ",(0,i.jsx)(t.code,{children:"id"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"diving-into-the-code",children:"Diving into the code"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'app.get("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n\n  // Read our existing todos\n  const existingTodos = fs.readFileSync("./todos.json", "utf-8");\n\n  const formattedData = JSON.parse(existingTodos);\n\n  const theTodoIwant = formattedData.find((todo) => todo.id === todoId);\n\n  // What if I can\'t find the todo item? I need to handle it with grace\n  if (!theTodoIwant) {\n    res.status(400).json({ error: "cannot find the todo bro" });\n  }\n\n  res.status(200).json(theTodoIwant);\n});\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"GET /todos/:id"})," endpoint is used to retrieve a specific todo item by its ID."]}),"\n",(0,i.jsxs)(t.li,{children:["The todo ID is passed as a parameter in the URL (e.g., ",(0,i.jsx)(t.code,{children:"/todos/1"}),")."]}),"\n",(0,i.jsx)(t.li,{children:"It responds with the requested todo item in the response body."}),"\n",(0,i.jsx)(t.li,{children:"If we cannot find that todo item, tell the caller you cant find it."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>r});var i=o(6540);const s={},n=i.createContext(s);function d(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);