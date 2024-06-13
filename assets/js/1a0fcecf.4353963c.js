"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2e3],{4537:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=s(4848),n=s(8453);const i={sidebar_position:5},d="1.3. Create a New Todo Task v2",r={id:"basics/todo-list/create-a-todo-task-v2",title:"1.3. Create a New Todo Task v2",description:"Designing the API:",source:"@site/docs/basics/todo-list/create-a-todo-task-v2.md",sourceDirName:"basics/todo-list",slug:"/basics/todo-list/create-a-todo-task-v2",permalink:"/geekout-2024/docs/basics/todo-list/create-a-todo-task-v2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/todo-list/create-a-todo-task-v2.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"1.3. Create a New Todo Task v1",permalink:"/geekout-2024/docs/basics/todo-list/create-a-todo-task-v1"},next:{title:"1.3. Create a New Todo Task v3",permalink:"/geekout-2024/docs/basics/todo-list/create-a-todo-task-v3"}},a={},c=[{value:"Designing the API:",id:"designing-the-api",level:2},{value:"Diving into the code",id:"diving-into-the-code",level:2}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"13-create-a-new-todo-task-v2",children:"1.3. Create a New Todo Task v2"}),"\n",(0,o.jsx)(t.h2,{id:"designing-the-api",children:"Designing the API:"}),"\n",(0,o.jsx)(t.p,{children:"It works, but can we make it better? Let's iterate on our feature."}),"\n",(0,o.jsxs)(t.p,{children:["Let's consider how the user would use our API and build some empathy for them. ",(0,o.jsx)(t.strong,{children:"How can we improve the user's experience?"})]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["A new request item shouldn't have the ",(0,o.jsx)(t.code,{children:"id"})," field. The ",(0,o.jsx)(t.code,{children:"id"})," field is for us to identify a todo task, that burden shouldn't be placed on the user. (",(0,o.jsxs)(t.em,{children:["Like bro you want add a todo item still need think of what ",(0,o.jsx)(t.code,{children:"id"})," to put meh."]}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["It also doesn't make sense for a newly added todo task to be marked as completed either. Let's automatically set the completed field as ",(0,o.jsx)(t.code,{children:"false"})," for them."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Let's revise the user story."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Given"}),(0,o.jsx)(t.th,{children:"When"}),(0,o.jsx)(t.th,{children:"Then"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"As a todo list user"}),(0,o.jsx)(t.td,{children:"I want to add a new todo task with just the task's description"}),(0,o.jsx)(t.td,{children:"I call this API with the todo task's description and the server should tell me that it's been created successfully or not"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"diving-into-the-code",children:"Diving into the code"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'// Automatically read request body as JSON\napp.use(express.json());\n\napp.post("/todos", (req, res) => {\n  // Logic to create a new todo item\n  const requestBody = req.body;\n\n  const newTodoItemDescription = requestBody.description;\n\n  // What if there\'s no description field given?\n  if (!newTodoItemDescription) {\n    res.status(400).json({ error: "no todo description bro" });\n  }\n\n  const newTodoItem = {\n    id: randomInt(0, 999999999),\n    description: newTodoItemDescription,\n    completed: false,\n  };\n  res.status(201).json(newTodoItem);\n});\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>r});var o=s(6540);const n={},i=o.createContext(n);function d(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);