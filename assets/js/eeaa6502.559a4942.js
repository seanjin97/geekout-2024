"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[266],{571:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>r});var o=s(4848),d=s(8453);const n={sidebar_position:7},i="1.5. Delete a Todo Task",a={id:"basics/todo-list/delete-a-todo-task",title:"1.5. Delete a Todo Task",description:"Designing the API:",source:"@site/docs/basics/todo-list/delete-a-todo-task.md",sourceDirName:"basics/todo-list",slug:"/basics/todo-list/delete-a-todo-task",permalink:"/geekout-2024/docs/basics/todo-list/delete-a-todo-task",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/todo-list/delete-a-todo-task.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"1.4. Update a Todo Task",permalink:"/geekout-2024/docs/basics/todo-list/update-a-todo-task"},next:{title:"Finishing Touches",permalink:"/geekout-2024/docs/basics/todo-list/finishing-touches"}},c={},r=[{value:"Designing the API:",id:"designing-the-api",level:2},{value:"Diving into the code",id:"diving-into-the-code",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"15-delete-a-todo-task",children:"1.5. Delete a Todo Task"}),"\n",(0,o.jsx)(t.h2,{id:"designing-the-api",children:"Designing the API:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Given"}),(0,o.jsx)(t.th,{children:"When"}),(0,o.jsx)(t.th,{children:"Then"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"As a todo list user"}),(0,o.jsx)(t.td,{children:"I want to delete a specific todo item"}),(0,o.jsx)(t.td,{children:"I call this endpoint and I should see that the todo task is deleted."})]})})]}),"\n",(0,o.jsxs)(t.p,{children:["It's a ",(0,o.jsx)(t.code,{children:"DELETE"})," request because we are deleting data."]}),"\n",(0,o.jsxs)(t.p,{children:["The endpoint we should create is ",(0,o.jsx)(t.code,{children:"DELETE /todos/:id"})," where ",(0,o.jsx)(t.code,{children:"id"})," is the todo task ",(0,o.jsx)(t.code,{children:"id"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"diving-into-the-code",children:"Diving into the code"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'app.delete("/todos/:id", (req, res) => {\n  const todoId = Number(req.params.id);\n\n  // Read our existing todos\n  const existingTodos = fs.readFileSync("todos.json", "utf-8");\n  const formattedExistingTodos = JSON.parse(existingTodos);\n\n  // Check that the todo we want to delete exists\n  const theTodoIwant = formattedExistingTodos.find(\n    (todo) => todo.id === todoId\n  );\n\n  if (!theTodoIwant) {\n    res.status(400).json({ error: "no such todo" });\n  }\n\n  const updatedListOfTodos = formattedExistingTodos.filter(\n    (todo) => todo.id !== todoId\n  );\n\n  // Save the updated list of todos\n  fs.writeFileSync("todos.json", JSON.stringify(updatedListOfTodos));\n  res.sendStatus(204);\n});\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"DELETE /todos/:id"})," endpoint is used to delete a specific todo item by its ID."]}),"\n",(0,o.jsx)(t.li,{children:"The todo ID is passed as a parameter in the URL."}),"\n",(0,o.jsx)(t.li,{children:"Upon successful deletion, it responds with a status code of 204 (No Content) to indicate that the resource was successfully deleted."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var o=s(6540);const d={},n=o.createContext(d);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);