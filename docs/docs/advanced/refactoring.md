---
sidebar_position: 1
---

# Refactoring

Refactoring code is the process of restructuring existing computer code without changing its external behavior. The main goal of code refactoring is to improve the code's internal structure, making it more readable, maintainable, and efficient while preserving its functionality.

## Why refactor

1. **Improving code readability**

- Renaming variables, functions, and classes to be more descriptive
- Adding comments and documentation to explain complex code segments
- Formatting the code consistently (indentation, line breaks, etc.)

2. **Eliminating code duplication**

- Identifying and extracting duplicate code into reusable functions or methods
- Applying the DRY (Don't Repeat Yourself) principle

3. **Simplifying complex logic**

- Breaking down large functions or methods into smaller, more focused ones
- Reducing the complexity of conditional statements and loops

4. **Improving code organization**

- Grouping related code together into modules, classes, or packages
- Separating concerns and responsibilities into distinct components

5. **Optimizing performance**

- Identifying and removing unnecessary or inefficient code
- Applying performance-enhancing techniques like caching or lazy loading

## Putting it to practice

Ya'll probably realised that there is a lot of duplicated code in `app.js`.

Generally, if we see something being copy pasted around more than twice, it gives enough reason to extract that out into a reusable function.

### 1. Consolidating all configuration related code to the top

Why? It makes it easier to keep track of what configurations are being used in your application.

e.g. all the `app.use`

The top of your `app.js` should look like this

```javascript
const { randomInt } = require("crypto");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// Rest of your code here
```

### 2. Extracting out duplicated code into re-usable functions

Why? Why repeat yourself many times, extract the logic to a function an re-use that function.

That way, whenever that logic changes, you only have to modify this re-usable function once instead of having to dig around the code to change it one by one.

#### 2.1 Function to read all existing todos

This piece of code is scattered everywhere. Let's make it a re-usable function.

##### Previously

```javascript
// Read our existing todos
const existingTodos = fs.readFileSync("./todos.json", "utf-8");

const formattedData = JSON.parse(existingTodos);
```

##### Now

```javascript
function readExistingTodos() {
  const existingTodos = fs.readFileSync("./todos.json", "utf-8");

  const formattedTodos = JSON.parse(existingTodos);

  return formattedTodos;
}
```

Now replace all the repeated dirty code with the function.

For e.g.

##### Previously

```javascript
app.get("/todos", (req, res) => {
  const data = fs.readFileSync("./todos.json", "utf-8");

  const formattedData = JSON.parse(data);

  res.status(200).json(formattedData);
});
```

##### Refactored

```javascript
app.get("/todos", (req, res) => {
  const existingTodos = readExistingTodos();

  res.status(200).json(existingTodos);
});
```

**_Now test your app to verify that there's no behaviour change or weird bugs that arose from this refactor._**

We always want to make small changes incrementally and immediately test them. We don't wanna get a big surprise when we only test after making multiple big changes. Ain't nobody got the headspace to deal with that in this economy.

#### 2.2 Function to get a specific Todo Task using an `id`

Same thing. This piece of code is scattered everywhere. Let's make it a re-usable function.

##### Previously

```javascript
const existingTodos = readExistingTodos();

// Check that the todo we want to delete exists
const theTodoIwant = existingTodos.find((todo) => todo.id === todoId);
```

##### Now

```javascript
function getSpecificTodo(id) {
  const existingTodos = readExistingTodos();
  const theTodoIwant = existingTodos.find((todo) => todo.id === todoId);

  return theTodoIwant;
}
```

Now replace all the repeated dirty code with the function.

For e.g.

##### Previously

```javascript
app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const existingTodos = readExistingTodos();

  const theTodoIwant = existingTodos.find((todo) => todo.id === todoId);

  // rest of the code
});
```

##### Refactored

```javascript
app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const theTodoIwant = getSpecificTodo(todoId);
  // rest of the code
});
```

Now call the endpoint to verify that it still works and repeat for the other endpoints.

#### 2.3 You get the gist

What else can be extracted into a re-usable function? Figure it out i ain't got time for dat.

### 3. Separating into different files

After extracting out the re-usable functions, you'll probably find that you have a bunch of functions sitting around in `app.js`.

It's cluttering space up. no nice. Why not separate it into a separate file and import it into `app.js`

Let's create a `utils.js` and dump all those re-usable functions there, don't forget to export the functions and import whatever dependency necessary.

Debug any errors on your own, chatgpt it or sum.

## Final Code

After refactoring, you should end up with something like this

### `app.js`

```javascript
const { randomInt } = require("crypto");
const express = require("express");
const cors = require("cors");
const { readExistingTodos, getSpecificTodo, saveTodos } = require("./utils");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/todos", (req, res) => {
  const existingTodos = readExistingTodos();

  res.status(200).json(existingTodos);
});

app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const theTodoIwant = getSpecificTodo(todoId);

  // What if I can't find the todo item? I need to handle it with grace
  if (!theTodoIwant) {
    res.status(400).json({ error: "cannot find the todo bro" });
  }

  res.status(200).json(theTodoIwant);
});

app.post("/todos", (req, res) => {
  // Logic to create a new todo item
  const requestBody = req.body;

  const newTodoItemDescription = requestBody.description;

  // What if there's no description field given?
  if (!newTodoItemDescription) {
    res.status(400).json({ error: "no description bro" });
  }

  const existingTodos = readExistingTodos();

  // Create a new todo
  const newTodoItem = {
    id: randomInt(0, 999999999),
    description: newTodoItemDescription,
    completed: false,
  };

  // Merge the new todo into the existing todos
  const updatedListOfTodos = [...existingTodos, newTodoItem];

  saveTodos(updatedListOfTodos);

  res.status(201).json(newTodoItem);
});

app.put("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  const requestBody = req.body;

  // What if there's no request body
  if (!requestBody) {
    res.status(400).json({ error: "no request body" });
  }
  const description = requestBody.description;
  const completed = requestBody.completed;

  const existingTodos = readExistingTodos();

  let updatedTodo;
  // Loop through all todos and update the one we're interested in
  for (let index = 0; index < existingTodos.length; index++) {
    const todoTask = existingTodos[index];
    if (todoTask.id === todoId) {
      todoTask.description = description;
      todoTask.completed = completed;
      updatedTodo = todoTask;
    }
  }

  if (!updatedTodo) {
    res.status(400).json("todo not found");
  }
  // Save the updated list of todos
  saveTodos(existingTodos);

  res.status(200).json(updatedTodo);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const existingTodos = readExistingTodos();

  const theTodoIwant = getSpecificTodo(todoId);

  if (!theTodoIwant) {
    res.status(400).json({ error: "no such todo" });
  }

  const updatedListOfTodos = existingTodos.filter((todo) => todo.id !== todoId);

  saveTodos(updatedListOfTodos);
  res.status(204).json();
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
const { randomInt } = require("crypto");
const express = require("express");
const cors = require("cors");
const { readExistingTodos, getSpecificTodo, saveTodos } = require("./utils");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/todos", (req, res) => {
  const existingTodos = readExistingTodos();

  res.status(200).json(existingTodos);
});

app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const theTodoIwant = getSpecificTodo(todoId);

  // What if I can't find the todo item? I need to handle it with grace
  if (!theTodoIwant) {
    res.status(400).json({ error: "cannot find the todo bro" });
  }

  res.status(200).json(theTodoIwant);
});

app.post("/todos", (req, res) => {
  // Logic to create a new todo item
  const requestBody = req.body;

  const newTodoItemDescription = requestBody.description;

  // What if there's no description field given?
  if (!newTodoItemDescription) {
    res.status(400).json({ error: "no description bro" });
  }

  const existingTodos = readExistingTodos();

  // Create a new todo
  const newTodoItem = {
    id: randomInt(0, 999999999),
    description: newTodoItemDescription,
    completed: false,
  };

  // Merge the new todo into the existing todos
  const updatedListOfTodos = [...existingTodos, newTodoItem];

  saveTodos(updatedListOfTodos);

  res.status(201).json(newTodoItem);
});

app.put("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  const requestBody = req.body;

  // What if there's no request body
  if (!requestBody) {
    res.status(400).json({ error: "no request body" });
  }
  const description = requestBody.description;
  const completed = requestBody.completed;

  const existingTodos = readExistingTodos();

  let updatedTodo;
  // Loop through all todos and update the one we're interested in
  for (let index = 0; index < existingTodos.length; index++) {
    const todoTask = existingTodos[index];
    if (todoTask.id === todoId) {
      todoTask.description = description;
      todoTask.completed = completed;
      updatedTodo = todoTask;
    }
  }

  if (!updatedTodo) {
    res.status(400).json("todo not found");
  }
  // Save the updated list of todos
  saveTodos(existingTodos);

  res.status(200).json(updatedTodo);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  const existingTodos = readExistingTodos();

  const theTodoIwant = getSpecificTodo(todoId);

  if (!theTodoIwant) {
    res.status(400).json({ error: "no such todo" });
  }

  const updatedListOfTodos = existingTodos.filter((todo) => todo.id !== todoId);

  saveTodos(updatedListOfTodos);
  res.status(204).json();
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
```

### `utils.js`

```javascript
const fs = require("fs");

function readExistingTodos() {
  const existingTodos = fs.readFileSync("./todos.json", "utf-8");

  const formattedTodos = JSON.parse(existingTodos);

  return formattedTodos;
}

function getSpecificTodo(id) {
  const existingTodos = readExistingTodos();
  const theTodoIwant = existingTodos.find((todo) => todo.id === id);

  return theTodoIwant;
}

function saveTodos(todos) {
  fs.writeFileSync("todos.json", JSON.stringify(todos));
}
module.exports = { readExistingTodos, getSpecificTodo, saveTodos };
```
