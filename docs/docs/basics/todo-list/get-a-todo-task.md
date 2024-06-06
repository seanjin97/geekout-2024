---
sidebar_position: 2
---

# 1.2. Get a specific Todo Task
 
## Designing the API:
| Given               | When                                    | Then                                                                                            |
|---------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------|
| As a todo list user | I want to retrieve a specific todo item | I call this endpoint and I should retrieve the details of the specific todo item if it is found |

It's a `GET` request because we are retrieving data.

The endpoint we should create is `GET /todos/:id` where `id` is the todo task `id`.

## Diving into the code
```javascript

app.get("/todos/:id", (req, res) => {
  const todoId = Number(req.params.id);
  // Logic to retrieve a specific todo item by its ID
  const data = fs.readFileSync("./todos.json", "utf-8");

  const formattedData = JSON.parse(data);

  const theTodoIwant = formattedData.find((todo) => todo.id === todoId);

  // What if I can't find the todo item? I need to handle it with grace just like how I should handle myself.
  if (!theTodoIwant) {
    res.status(400).json({ error: "cannot find the todo bro" });
  }

  res.status(200).json(theTodoIwant);
});
```

- The `GET /todos/:id` endpoint is used to retrieve a specific todo item by its ID.
- The todo ID is passed as a parameter in the URL (e.g., `/todos/1`).
- It responds with the requested todo item in the response body.
- If we cannot find that todo item, tell the caller you cant find it.
