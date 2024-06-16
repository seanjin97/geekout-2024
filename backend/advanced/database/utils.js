const { dataSource } = require("./database");

const todoRepository = dataSource.getRepository("todo");

async function readExistingTodos() {
  const existingTodos = await todoRepository.find();
  return existingTodos;
}

async function getSpecificTodo(id) {
  const theTodoIWant = await todoRepository.findOneBy({ id }); // shortcut for {id: id}
  return theTodoIWant;
}

async function saveTodo(todo) {
  return await todoRepository.save(todo);
}

async function deleteTodo(todoId) {
  return await todoRepository.delete(todoId);
}

module.exports = { readExistingTodos, getSpecificTodo, saveTodo, deleteTodo };
