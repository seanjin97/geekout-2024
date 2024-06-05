"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[926],{1001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(4848),i=n(8453);const s={sidebar_position:7},d="Todo List API",l={id:"basics/todo-list/index",title:"Todo List API",description:"In this section, we'll guide you through the process of creating CRUD (Create, Read, Update, Delete) endpoints for your Todo List API using Express. We'll define the necessary routes directly in the existing app.js file, explain the purpose of each endpoint, and highlight some best practices along the way.",source:"@site/docs/basics/todo-list/index.md",sourceDirName:"basics/todo-list",slug:"/basics/todo-list/",permalink:"/geekout-2024/docs/basics/todo-list/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/todo-list/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Hello, World!",permalink:"/geekout-2024/docs/basics/hello-world"},next:{title:"1.1. Get All Todo Items",permalink:"/geekout-2024/docs/basics/todo-list/get-todo-list"}},r={},c=[{value:"Step 1: Define how a Todo List item should look like",id:"step-1-define-how-a-todo-list-item-should-look-like",level:2},{value:"Step 2: Define the CRUD Endpoints",id:"step-2-define-the-crud-endpoints",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"todo-list-api",children:"Todo List API"}),"\n",(0,o.jsxs)(t.p,{children:["In this section, we'll guide you through the process of creating CRUD (Create, Read, Update, Delete) endpoints for your Todo List API using Express. We'll define the necessary routes directly in the existing ",(0,o.jsx)(t.code,{children:"app.js"})," file, explain the purpose of each endpoint, and highlight some best practices along the way."]}),"\n",(0,o.jsx)(t.h2,{id:"step-1-define-how-a-todo-list-item-should-look-like",children:"Step 1: Define how a Todo List item should look like"}),"\n",(0,o.jsx)(t.p,{children:"When designing the JSON data structure for todo list items, it's important to consider the necessary information you want to store for each todo item."}),"\n",(0,o.jsx)(t.p,{children:"For a start,"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "id": 1,\n  "title": "Buy groceries",\n  "completed": false\n\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Let's break down each field:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"id"})," (",(0,o.jsx)(t.code,{children:"number"}),"): A unique identifier for the todo item. It can be an auto-incrementing integer."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"title"})," (",(0,o.jsx)(t.code,{children:"string"}),"): A concise title or summary of the todo item."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"completed"})," (",(0,o.jsx)(t.code,{children:"boolean"}),"): Indicates whether the todo item has been completed or not. It can be true or false."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"step-2-define-the-crud-endpoints",children:"Step 2: Define the CRUD Endpoints"}),"\n",(0,o.jsx)(t.p,{children:"What you'll be creating:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"GET /todos"})," - Get all todo items"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"GET /todos/:id"})," - Get a specific todo item"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"POST /todos"})," - Create a new todo item"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"PUT /todos/:id"})," - Update an existing todo item"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"DELETE /todos/:id"})," - Delete an existing todo item"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Let's first create a JSON file called ",(0,o.jsx)(t.code,{children:"todos.json"})," that contains dummy JSON data."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "title": "buy groceries \ud83d\ude03\ud83c\udf4e",\n    "completed": false\n  },\n  {\n    "id": 2,\n    "title": "drink water \ud83e\udd64",\n    "completed": false\n  },\n  {\n    "id": 3,\n    "title": "help papa water plants \ud83d\ude1b\ud83e\udd66",\n    "completed": true\n  }\n]\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var o=n(6540);const i={},s=o.createContext(i);function d(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);