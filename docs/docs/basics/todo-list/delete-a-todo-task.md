---
sidebar_position: 7
---

# 1.5. Delete a Todo Task

## Designing the API:

| Given               | When                                  | Then                                                                 |
| ------------------- | ------------------------------------- | -------------------------------------------------------------------- |
| As a todo list user | I want to delete a specific todo item | I call this endpoint and I should see that the todo task is deleted. |

It's a `DELETE` request because we are deleting data.

The endpoint we should create is `DELETE /todos/:id` where `id` is the todo task `id`.

## Diving into the code

```javascript
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
    res.status(400).json({ error: "no such todo" });
  }

  const updatedListOfTodos = formattedExistingTodos.filter(
    (todo) => todo.id !== todoId
  );

  // Save the updated list of todos
  fs.writeFileSync("todos.json", JSON.stringify(updatedListOfTodos));
  res.sendStatus(204);
});
```

- The `DELETE /todos/:id` endpoint is used to delete a specific todo item by its ID.
- The todo ID is passed as a parameter in the URL.
- Upon successful deletion, it responds with a status code of 204 (No Content) to indicate that the resource was successfully deleted.
