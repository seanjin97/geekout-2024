const { randomInt } = require("crypto");
const express = require("express");
const cors = require("cors");

const fs = require("fs");

const app = express();

app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/todos", (req, res) => {
  const data = fs.readFileSync("./todos.json", "utf-8");

  const formattedData = JSON.parse(data);

  return res.status(200).json(formattedData);
});

app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  // Read our existing todos
  const existingTodos = fs.readFileSync("./todos.json", "utf-8");

  const formattedData = JSON.parse(existingTodos);

  const theTodoIwant = formattedData.find((todo) => todo.id === todoId);

  // What if I can't find the todo item? I need to handle it with grace
  if (!theTodoIwant) {
    return res.status(400).json({ error: "cannot find the todo bro" });
  }

  return res.status(200).json(theTodoIwant);
});

// Automatically read request body as JSON
app.use(express.json());

app.post("/todos", (req, res) => {
  // Logic to create a new todo item
  const requestBody = req.body;

  const newTodoItemDescription = requestBody.description;

  // What if there's no description field given?
  if (!newTodoItemDescription) {
    return res.status(400).json({ error: "no description bro" });
  }
  // Read our existing todos
  const existingTodos = fs.readFileSync("todos.json", "utf-8");
  const formattedExistingTodos = JSON.parse(existingTodos);

  // Create a new todo
  const newTodoItem = {
    id: randomInt(0, 999999999),
    description: newTodoItemDescription,
    completed: false,
  };

  // Merge the new todo into the existing todos
  const updatedListOfTodos = [...formattedExistingTodos, newTodoItem];

  fs.writeFileSync("todos.json", JSON.stringify(updatedListOfTodos));

  return res.status(201).json(newTodoItem);
});

app.put("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  const requestBody = req.body;

  // What if there's no request body
  if (!requestBody) {
    return res.status(400).json({ error: "no request body" });
  }
  const description = requestBody.description;
  const completed = requestBody.completed;

  // Read our existing todos
  const existingTodos = fs.readFileSync("todos.json", "utf-8");
  const formattedTodos = JSON.parse(existingTodos);

  let updatedTodo;
  // Loop through all todos and update the one we're interested in
  for (let index = 0; index < formattedTodos.length; index++) {
    const todoTask = formattedTodos[index];
    if (todoTask.id === todoId) {
      todoTask.description = description;
      todoTask.completed = completed;
      updatedTodo = todoTask;
    }
  }

  if (!updatedTodo) {
    return res.status(400).json("todo not found");
  }
  // Save the updated list of todos
  fs.writeFileSync("todos.json", JSON.stringify(formattedTodos));

  return res.status(200).json(updatedTodo);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);

  // Read our existing todos
  const existingTodos = fs.readFileSync("todos.json", "utf-8");
  const formattedExistingTodos = JSON.parse(existingTodos);

  // Check that the todo we want to delete exists
  const theTodoIwant = formattedExistingTodos.find(
    (todo) => todo.id === todoId
  );

  if (!theTodoIwant) {
    return res.status(400).json({ error: "no such todo" });
  }

  const updatedListOfTodos = formattedExistingTodos.filter(
    (todo) => todo.id !== todoId
  );

  // Save the updated list of todos
  fs.writeFileSync("todos.json", JSON.stringify(updatedListOfTodos));
  return res.status(204).json();
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
