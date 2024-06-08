---
sidebar_position: 1
---

# 1.1. Get All Todo Items

## Designing the API:

Before writing the code, let's think what value we are trying to deliver with this to guide us.

We can write a user story in the **Given, When, Then** format to help us stay focused on the business value.

| Given               | When                                                    | Then                                                    |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| As a todo list user | I want to retrieve all the todo tasks from my todo list | I call this endpoint and I should get the list of todos |

It's a `GET` request because we are retrieving data.

The endpoint we should create is `GET /todos`.

## Diving into the code

```javascript
const fs = require("fs");

app.get("/todos", (req, res) => {
  const data = fs.readFileSync("./todos.json", "utf-8");

  const formattedData = JSON.parse(data);

  res.status(200).json(formattedData);
});
```

- The `GET /todos` endpoint is used to retrieve all todo items.
- It responds with an array of all todo items in the response body.
- We read the previously created `todos.json` file and serve it.
