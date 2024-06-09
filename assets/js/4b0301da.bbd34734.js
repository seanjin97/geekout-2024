"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[302],{7324:(o,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=e(4848),s=e(8453);const d={sidebar_position:11},r="Full Code",i={id:"basics/todo-list/full-code",title:"Full Code",description:"You can find the full code repository here//github.com/seanjin97/geekout-2024/tree/master/backend",source:"@site/docs/basics/todo-list/full-code.md",sourceDirName:"basics/todo-list",slug:"/basics/todo-list/full-code",permalink:"/geekout-2024/docs/basics/todo-list/full-code",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/todo-list/full-code.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Wrapping up",permalink:"/geekout-2024/docs/basics/todo-list/wrap-up"},next:{title:"Advanced",permalink:"/geekout-2024/docs/advanced/"}},a={},c=[];function u(o){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"full-code",children:"Full Code"}),"\n",(0,n.jsxs)(t.p,{children:["You can find the full code repository here: ",(0,n.jsx)(t.a,{href:"https://github.com/seanjin97/geekout-2024/tree/master/backend",children:"https://github.com/seanjin97/geekout-2024/tree/master/backend"})]}),"\n",(0,n.jsxs)(t.p,{children:["Here's the full ",(0,n.jsx)(t.code,{children:"app.js"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'const { randomInt } = require("crypto");\nconst express = require("express");\nconst cors = require("cors");\n\nconst fs = require("fs");\n\nconst app = express();\n\napp.use(cors());\n\napp.get("/hello", (req, res) => {\n  res.send("Hello, World!");\n});\n\napp.get("/todos", (req, res) => {\n  const data = fs.readFileSync("./todos.json", "utf-8");\n\n  const formattedData = JSON.parse(data);\n\n  res.status(200).json(formattedData);\n});\n\napp.get("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n\n  // Read our existing todos\n  const existingTodos = fs.readFileSync("./todos.json", "utf-8");\n\n  const formattedData = JSON.parse(existingTodos);\n\n  const theTodoIwant = formattedData.find((todo) => todo.id === todoId);\n\n  // What if I can\'t find the todo item? I need to handle it with grace\n  if (!theTodoIwant) {\n    res.status(400).json({ error: "cannot find the todo bro" });\n  }\n\n  res.status(200).json(theTodoIwant);\n});\n\n// Automatically read request body as JSON\napp.use(express.json());\n\napp.post("/todos", (req, res) => {\n  // Logic to create a new todo item\n  const requestBody = req.body;\n\n  const newTodoItemDescription = requestBody.description;\n\n  // What if there\'s no description field given?\n  if (!newTodoItemDescription) {\n    res.status(400).json({ error: "no description bro" });\n  }\n  // Read our existing todos\n  const existingTodos = fs.readFileSync("todos.json", "utf-8");\n  const formattedExistingTodos = JSON.parse(existingTodos);\n\n  // Create a new todo\n  const newTodoItem = {\n    id: randomInt(0, 999999999),\n    description: newTodoItemDescription,\n    completed: false,\n  };\n\n  // Merge the new todo into the existing todos\n  const updatedListOfTodos = [...formattedExistingTodos, newTodoItem];\n\n  fs.writeFileSync("todos.json", JSON.stringify(updatedListOfTodos));\n\n  res.status(201).json(newTodoItem);\n});\n\napp.put("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n  const requestBody = req.body;\n\n  // What if there\'s no request body\n  if (!requestBody) {\n    res.status(400).json({ error: "no request body" });\n  }\n  const description = requestBody.description;\n  const completed = requestBody.completed;\n\n  // Read our existing todos\n  const existingTodos = fs.readFileSync("todos.json", "utf-8");\n  const formattedTodos = JSON.parse(existingTodos);\n\n  let updatedTodo;\n  // Loop through all todos and update the one we\'re interested in\n  for (let index = 0; index < formattedTodos.length; index++) {\n    const todoTask = formattedTodos[index];\n    if (todoTask.id === todoId) {\n      todoTask.description = description;\n      todoTask.completed = completed;\n      updatedTodo = todoTask;\n    }\n  }\n\n  if (!updatedTodo) {\n    res.status(400).json("todo not found");\n  }\n  // Save the updated list of todos\n  fs.writeFileSync("todos.json", JSON.stringify(formattedTodos));\n\n  res.status(200).json(updatedTodo);\n});\n\napp.delete("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n\n  // Read our existing todos\n  const existingTodos = fs.readFileSync("todos.json", "utf-8");\n  const formattedExistingTodos = JSON.parse(existingTodos);\n\n  // Check that the todo we want to delete exists\n  const theTodoIwant = formattedExistingTodos.find(\n    (todo) => todo.id === todoId\n  );\n\n  if (!theTodoIwant) {\n    res.status(400).json({ error: "no such todo" });\n  }\n\n  const updatedListOfTodos = formattedExistingTodos.filter(\n    (todo) => todo.id !== todoId\n  );\n\n  // Save the updated list of todos\n  fs.writeFileSync("todos.json", JSON.stringify(updatedListOfTodos));\n  res.status(204).json();\n});\n\napp.listen(8000, () => {\n  console.log("Server is running on port 8000");\n});\n'})})]})}function p(o={}){const{wrapper:t}={...(0,s.R)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(u,{...o})}):u(o)}},8453:(o,t,e)=>{e.d(t,{R:()=>r,x:()=>i});var n=e(6540);const s={},d=n.createContext(s);function r(o){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof o?o(t):{...t,...o}}),[t,o])}function i(o){let t;return t=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:r(o.components),n.createElement(d.Provider,{value:t},o.children)}}}]);