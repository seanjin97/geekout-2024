---
sidebar_position: 4
---

# 1.3. Create a New Todo Task v1

## Designing the API:

| Given               | When                          | Then                                                                                                         |
| ------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| As a todo list user | I want to add a new todo task | I call this API with all the fields and the server should tell me that it's been created successfully or not |

It's a `POST` request because we are creating data.

The endpoint we should create is `POST /todos` where we take in a request body with the necessary todo info.

## Diving into the code

```javascript
// Automatically read request body as JSON
app.use(express.json());

app.post("/todos", (req, res) => {
  // Logic to create a new todo item
  const requestBody = req.body;

  const todosJson = fs.readFileSync("./todos.json");
  const existingTodos = JSON.parse(todosJson);

  // What if there's no request body?
  if (!requestBody) {
    res.status(400).json({ error: "no request body provided" });
  }

  const updatedListOfTodos = [...existingTodos, newTodo];

  fs.writeFileSync("./todos.json", JSON.stringify(updatedListOfTodos));

  res.status(201).json(newTodoItem);
});
```

**Previously, we only created `GET` APIs that can be hit from the browser since every browser page visit is a GET request.**

What about `POST` requests then? How can we test this `POST` API endpoint? We'll use an API Client. It could be any API Client, but let's stick with Postman.

- The `POST /todos` endpoint is used to create a new todo item.
- It accepts the todo data in the request body and creates a new todo item based on that data.
- Upon successful creation, it responds with a status code of 201 (Created) and returns the newly created todo item in the response body.
