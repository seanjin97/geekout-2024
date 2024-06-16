"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[854],{9980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(4848),i=n(8453);const o={sidebar_position:2},d="Testing",r={id:"advanced/testing",title:"Testing",description:"Code checkpoint",source:"@site/docs/advanced/testing.md",sourceDirName:"advanced",slug:"/advanced/testing",permalink:"/geekout-2024/docs/advanced/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/seanjin97/geekout-2024/tree/master/docs/docs/advanced/testing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Refactoring",permalink:"/geekout-2024/docs/advanced/refactoring"},next:{title:"Hosting",permalink:"/geekout-2024/docs/advanced/hosting"}},a={},l=[{value:"Code checkpoint",id:"code-checkpoint",level:2},{value:"Why Test?",id:"why-test",level:2},{value:"Types of Testing",id:"types-of-testing",level:2},{value:"Tips to Writing Tests",id:"tips-to-writing-tests",level:2},{value:"Writing Unit Tests",id:"writing-unit-tests",level:2},{value:"Mental Model of Unit Testing",id:"mental-model-of-unit-testing",level:3},{value:"Let&#39;s get started",id:"lets-get-started",level:4},{value:"Test <code>readExistingTodos()</code>",id:"test-readexistingtodos",level:3},{value:"Repeat for the rest of the functions.",id:"repeat-for-the-rest-of-the-functions",level:3},{value:"Final Code",id:"final-code",level:2},{value:"Optional Challenge: Integration Testing",id:"optional-challenge-integration-testing",level:2},{value:"Steps at a high level:",id:"steps-at-a-high-level",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(t.h2,{id:"code-checkpoint",children:"Code checkpoint"}),"\n",(0,s.jsxs)(t.p,{children:["Before getting started with this exercise, ensure that your code looks like ",(0,s.jsx)(t.a,{href:"https://github.com/seanjin97/geekout-2024/tree/master/backend/advanced/refactoring",children:"this"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"why-test",children:"Why Test?"}),"\n",(0,s.jsxs)(t.p,{children:["As you saw in the ",(0,s.jsx)(t.a,{href:"/geekout-2024/docs/advanced/refactoring",children:"Refactoring"})," section, after making modifications to your code, you'll always want to verify that it\nstill works as expected."]}),"\n",(0,s.jsx)(t.p,{children:"How did we test previously? We opened Postman and manually called all our APIs to verify that it still works. That's kinda tedious."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How can we make our lives easier?"})," We can write automated tests that do all that for us."]}),"\n",(0,s.jsx)(t.h2,{id:"types-of-testing",children:"Types of Testing"}),"\n",(0,s.jsx)(t.p,{children:"The most common 2 that you'll hear about in backend development are:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Unit Testing"}),": This involves testing individual units or components of the software to ensure they function as expected. It is usually performed by developers during the development phase. They are supposed to be fast."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Integration Testing"}),": This type of testing involves combining individual units and testing them as a group to verify that they work together correctly. It ensures that different modules or components of the software interact and integrate properly. They're expected to be slower as it would test the database integration with your API server."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"tips-to-writing-tests",children:"Tips to Writing Tests"}),"\n",(0,s.jsx)(t.p,{children:"don't ever spend more time writing tests than writing actual business logic."}),"\n",(0,s.jsxs)(t.p,{children:["always test the code behaviour. for e.g. ",(0,s.jsx)(t.code,{children:"readExistingTodos()"})," should ",(0,s.jsx)(t.code,{children:"read and parse the existing todos from the file"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"writing-unit-tests",children:"Writing Unit Tests"}),"\n",(0,s.jsx)(t.p,{children:"To start, we'll need to add a unit testing library so that we can do unit tests."}),"\n",(0,s.jsxs)(t.p,{children:["The staple unit testing library for backend is ",(0,s.jsx)(t.code,{children:"jest"}),". It's rlly popular and many backend projects use it for testing. So we too will use it."]}),"\n",(0,s.jsxs)(t.p,{children:["Read more about ",(0,s.jsx)(t.code,{children:"jest"})," ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/getting-started",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"mental-model-of-unit-testing",children:"Mental Model of Unit Testing"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Call a function that you want to test"}),"\n",(0,s.jsx)(t.li,{children:"Compare the output of that function with a value you decide"}),"\n",(0,s.jsx)(t.li,{children:'For e.g. function A should give me "a". The test passes if functionA does indeed give you "a".'}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"lets-get-started",children:"Let's get started"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.code,{children:"jest"})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Let's test the functions in the ",(0,s.jsx)(t.code,{children:"utils.js"})," file called. Create a file called ",(0,s.jsx)(t.code,{children:"utils.test.js"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Let's then import ",(0,s.jsx)(t.code,{children:"jest"})," and the functions we want to test in ",(0,s.jsx)(t.code,{children:"utils.test.js"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'require("jest");\nconst { readExistingTodos, getSpecificTodo, saveTodos } = require("./utils");\n'})}),"\n",(0,s.jsxs)(t.h3,{id:"test-readexistingtodos",children:["Test ",(0,s.jsx)(t.code,{children:"readExistingTodos()"})]}),"\n",(0,s.jsxs)(t.p,{children:["By reading the ",(0,s.jsx)(t.code,{children:"jest"})," ",(0,s.jsx)(t.a,{href:"https://jestjs.io/docs/getting-started",children:"docs"}),", we can figure out to do this to write our first test."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'test("readExistingTodos should return a list of todo tasks", () => {\n  expect(readExistingTodos()).toEqual([\n    {\n      id: 1,\n      description: "buy groceries \ud83d\ude03\ud83c\udf4e",\n      completed: false,\n    },\n    {\n      id: 2,\n      description: "drink water \ud83e\udd64",\n      completed: false,\n    },\n    {\n      id: 3,\n      description: "help papa water plants \ud83d\ude1b\ud83e\udd66",\n      completed: true,\n    },\n  ]);\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Let's run the tests ",(0,s.jsx)(t.code,{children:"npm run test"})," and we should see this."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"test results",src:n(8566).A+"",width:"538",height:"146"})}),"\n",(0,s.jsx)(t.h3,{id:"repeat-for-the-rest-of-the-functions",children:"Repeat for the rest of the functions."}),"\n",(0,s.jsxs)(t.p,{children:["You can copy the whole ",(0,s.jsx)(t.code,{children:"utils.js"})," into chatgpt and ask it to generate you the tests to save time."]}),"\n",(0,s.jsx)(t.p,{children:"As a dev, writing the tests are a time sink, but having robust tests is extremely desirable."}),"\n",(0,s.jsx)("small",{children:(0,s.jsx)(t.em,{children:"writing tests are a chore, aint nobody got time for allat."})}),"\n",(0,s.jsx)(t.p,{children:"Let's use chatgpt to our advantage to save us time so that we can focus on other important things."}),"\n",(0,s.jsxs)(t.p,{children:["Prompt: ",(0,s.jsx)(t.code,{children:"given this utils.js file generate me jest tests for each function."})]}),"\n",(0,s.jsx)(t.p,{children:"Result:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const fs = require("fs");\nconst { readExistingTodos, getSpecificTodo, saveTodos } = require("./utils");\n\njest.mock("fs");\n\ndescribe("readExistingTodos", () => {\n  it("should read and parse the existing todos from the file", () => {\n    const mockTodos = [\n      { id: 1, text: "Todo 1" },\n      { id: 2, text: "Todo 2" },\n    ];\n    fs.readFileSync.mockReturnValue(JSON.stringify(mockTodos));\n\n    const todos = readExistingTodos();\n\n    expect(fs.readFileSync).toHaveBeenCalledWith("./todos.json", "utf-8");\n    expect(todos).toEqual(mockTodos);\n  });\n});\n\ndescribe("getSpecificTodo", () => {\n  it("should return the todo with the specified id", () => {\n    const mockTodos = [\n      { id: 1, text: "Todo 1" },\n      { id: 2, text: "Todo 2" },\n      { id: 3, text: "Todo 3" },\n    ];\n    fs.readFileSync.mockReturnValue(JSON.stringify(mockTodos));\n\n    const todo = getSpecificTodo(2);\n\n    expect(fs.readFileSync).toHaveBeenCalledWith("./todos.json", "utf-8");\n    expect(todo).toEqual({ id: 2, text: "Todo 2" });\n  });\n\n  it("should return undefined if the todo with the specified id is not found", () => {\n    const mockTodos = [\n      { id: 1, text: "Todo 1" },\n      { id: 2, text: "Todo 2" },\n    ];\n    fs.readFileSync.mockReturnValue(JSON.stringify(mockTodos));\n\n    const todo = getSpecificTodo(3);\n\n    expect(fs.readFileSync).toHaveBeenCalledWith("./todos.json", "utf-8");\n    expect(todo).toBeUndefined();\n  });\n});\n\ndescribe("saveTodos", () => {\n  it("should save the todos to the file", () => {\n    const mockTodos = [\n      { id: 1, text: "Todo 1" },\n      { id: 2, text: "Todo 2" },\n    ];\n\n    saveTodos(mockTodos);\n\n    expect(fs.writeFileSync).toHaveBeenCalledWith(\n      "todos.json",\n      JSON.stringify(mockTodos)\n    );\n  });\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We use ",(0,s.jsx)(t.code,{children:'jest.mock("fs")'})," to mock the ",(0,s.jsx)(t.code,{children:"fs"})," module, allowing us to control its behavior in the tests. ",(0,s.jsx)(t.a,{href:"https://www.codium.ai/blog/mock-testing/",children:"why mock?"})]}),"\n",(0,s.jsx)(t.p,{children:"nice, now we have unit tests. refactoring our code will be much easier in the future. Why? if we mistakenly change something, the test would break, making sure we either update the tests if the change in behaviour is intended, or fix the code if the behaviour change was not intended."}),"\n",(0,s.jsx)(t.h2,{id:"final-code",children:"Final Code"}),"\n",(0,s.jsxs)(t.p,{children:["After adding tests, you should end up with something like ",(0,s.jsx)(t.a,{href:"https://github.com/seanjin97/geekout-2024/tree/master/backend/advanced/testing",children:"this"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"optional-challenge-integration-testing",children:"Optional Challenge: Integration Testing"}),"\n",(0,s.jsx)(t.p,{children:"lil challenge for ya."}),"\n",(0,s.jsx)(t.p,{children:"We have unit tests now, but we don't have integration tests."}),"\n",(0,s.jsx)(t.h3,{id:"steps-at-a-high-level",children:"Steps at a high level:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Determine which integration testing library to use"}),"\n",(0,s.jsxs)(t.li,{children:["Write the test cases to call all your APIs and verify if you get the expected responses. We don't need to do integration testing for all edge cases, just the ",(0,s.jsx)(t.a,{href:"https://userpilot.com/blog/happy-path/",children:"happy flow"})," would do."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8566:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/test-results-f3bf56c1e32d789fb33a284a48398c6f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);