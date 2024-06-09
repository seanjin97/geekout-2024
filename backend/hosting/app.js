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
