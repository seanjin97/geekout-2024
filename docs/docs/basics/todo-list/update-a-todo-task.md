---
sidebar_position: 6
---

# 1.4. Update a Todo Task
## Designing the API:

| Given               | When                                                      | Then                                                                                                                                              |
|---------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| As a todo list user | I want to update a todo task's title or completion status | I call this API with the id and the task title and/ or completion status and the server should tell me that it's been updated successfully or not |

It's a `PUT` request because we are updating data.

The endpoint we should create is `PUT /todos/:id` where send the task `id` to be updated and pass the updated name and/ or completed status in the request body.

## Diving into the code
```javascript
app.put("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  const requestBody = req.body;

  // What if there's no request body
  if (!requestBody) {
    res.status(400).json({ error: "no request body" });
  }
  const title = requestBody.title;
  const completed = requestBody.completed;

  // Retrieve all our existing todos
  const existingTodos = fs.readFileSync("todos.json", "utf-8");
  const formattedTodos = JSON.parse(existingTodos);

  let updatedTodo = undefined;
  // Loop through all todos and update the one we're interested in
  for (let index = 0; index < formattedTodos.length; index++) {
    const todoTask = formattedTodos[index];
    if (todoTask.id === todoId) {
      todoTask.title = title;
      todoTask.completed = completed;
      updatedTodo = todoTask;
    }
  }

  if (!updatedTodo) {
    res.status(400).json("todo not found");
  }
  // Save the updated list of todos
  fs.writeFileSync("todos.json", JSON.stringify(formattedTodos));

  res.status(200).json(updatedTodo);
});
```

- The `PUT /todos/:id` endpoint is used to update a specific todo item by its ID.
- The todo ID is passed as a parameter in the URL, and the updated todo data is sent in the request body.
- It responds with the updated todo item in the response body.
