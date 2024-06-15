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
