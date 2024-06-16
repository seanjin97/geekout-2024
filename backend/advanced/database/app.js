const express = require("express");
const cors = require("cors");
const {
  readExistingTodos,
  getSpecificTodo,
  saveTodo,
  deleteTodo,
} = require("./utils");
const { dataSource } = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.get("/todos", async (req, res) => {
  const existingTodos = await readExistingTodos();

  return res.status(200).json(existingTodos);
});

app.get("/todos/:id", async (req, res) => {
  const todoId = Number(req.params.id);

  const theTodoIwant = await getSpecificTodo(todoId);

  // What if I can't find the todo item? I need to handle it with grace
  if (!theTodoIwant) {
    return res.status(400).json({ error: "cannot find the todo bro" });
  }
  return res.status(200).json(theTodoIwant);
});

app.post("/todos", async (req, res) => {
  // Logic to create a new todo item
  const requestBody = req.body;

  const newTodoItemDescription = requestBody.description;

  // What if there's no description field given?
  if (!newTodoItemDescription) {
    return res.status(400).json({ error: "no description bro" });
  }

  const newTodoItem = {
    description: newTodoItemDescription,
  };

  const createdTodoItem = await saveTodo(newTodoItem);

  return res.status(201).json(createdTodoItem);
});

app.put("/todos/:id", async (req, res) => {
  const todoId = Number(req.params.id);
  const requestBody = req.body;

  // What if there's no request body
  if (!requestBody) {
    res.status(400).json({ error: "no request body" });
  }
  const description = requestBody.description;
  const completed = requestBody.completed;

  const checkIfTodoExists = await getSpecificTodo(todoId);

  const todoToUpdate = {
    id: todoId,
    description,
    completed,
  };

  if (!checkIfTodoExists) {
    return res.status(400).json("todo not found");
  }

  const updatedTodoItem = await saveTodo(todoToUpdate);

  return res.status(200).json(updatedTodoItem);
});

app.delete("/todos/:id", async (req, res) => {
  const todoId = Number(req.params.id);

  await deleteTodo(todoId);

  return res.status(204).json();
});

dataSource.initialize().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
});
