"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{1605:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=o(4848),d=o(8453);const n={sidebar_position:6},i="1.4. Update a Todo Task",a={id:"basics/todo-list/update-a-todo-task",title:"1.4. Update a Todo Task",description:"Designing the API:",source:"@site/docs/basics/todo-list/update-a-todo-task.md",sourceDirName:"basics/todo-list",slug:"/basics/todo-list/update-a-todo-task",permalink:"/geekout-2024/docs/basics/todo-list/update-a-todo-task",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/todo-list/update-a-todo-task.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"1.3. Create a New Todo Task v3",permalink:"/geekout-2024/docs/basics/todo-list/create-a-todo-task-v3"},next:{title:"todo",permalink:"/geekout-2024/docs/basics/todo-list/todo"}},r={},c=[{value:"Designing the API:",id:"designing-the-api",level:2},{value:"Diving into the code",id:"diving-into-the-code",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"14-update-a-todo-task",children:"1.4. Update a Todo Task"}),"\n",(0,s.jsx)(e.h2,{id:"designing-the-api",children:"Designing the API:"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Given"}),(0,s.jsx)(e.th,{children:"When"}),(0,s.jsx)(e.th,{children:"Then"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"As a todo list user"}),(0,s.jsx)(e.td,{children:"I want to update a todo task's title or completion status"}),(0,s.jsx)(e.td,{children:"I call this API with the id and the task title and/ or completion status and the server should tell me that it's been updated successfully or not"})]})})]}),"\n",(0,s.jsxs)(e.p,{children:["It's a ",(0,s.jsx)(e.code,{children:"PUT"})," request because we are updating data."]}),"\n",(0,s.jsxs)(e.p,{children:["The endpoint we should create is ",(0,s.jsx)(e.code,{children:"PUT /todos/:id"})," where send the task ",(0,s.jsx)(e.code,{children:"id"})," to be updated and pass the updated name and/ or completed status in the request body."]}),"\n",(0,s.jsx)(e.h2,{id:"diving-into-the-code",children:"Diving into the code"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'app.put("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n  const requestBody = req.body;\n\n  // What if there\'s no request body\n  if (!requestBody) {\n    res.status(400).json({ error: "no request body" });\n  }\n  const title = requestBody.title;\n  const completed = requestBody.completed;\n\n  // Retrieve all our existing todos\n  const existingTodos = fs.readFileSync("todos.json", "utf-8");\n  const formattedTodos = JSON.parse(existingTodos);\n\n  let updatedTodo = undefined;\n  // Loop through all todos and update the one we\'re interested in\n  for (let index = 0; index < formattedTodos.length; index++) {\n    const todoTask = formattedTodos[index];\n    if (todoTask.id === todoId) {\n      todoTask.title = title;\n      todoTask.completed = completed;\n      updatedTodo = todoTask;\n    }\n  }\n\n  if (!updatedTodo) {\n    res.status(400).json("todo not found");\n  }\n  // Save the updated list of todos\n  fs.writeFileSync("todos.json", JSON.stringify(formattedTodos));\n\n  res.status(200).json(updatedTodo);\n});\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["The ",(0,s.jsx)(e.code,{children:"PUT /todos/:id"})," endpoint is used to update a specific todo item by its ID."]}),"\n",(0,s.jsx)(e.li,{children:"The todo ID is passed as a parameter in the URL, and the updated todo data is sent in the request body."}),"\n",(0,s.jsx)(e.li,{children:"It responds with the updated todo item in the response body."}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>i,x:()=>a});var s=o(6540);const d={},n=s.createContext(d);function i(t){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:i(t.components),s.createElement(n.Provider,{value:e},t.children)}}}]);