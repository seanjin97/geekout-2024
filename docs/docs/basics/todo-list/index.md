---
sidebar_position: 7
---

# Todo List API

In this section, we'll guide you through the process of creating CRUD (Create, Read, Update, Delete) endpoints for your Todo List API using Express. We'll define the necessary routes directly in the existing `app.js` file, explain the purpose of each endpoint, and highlight some best practices along the way.

## Step 1: Define how a Todo List item should look like

When designing the JSON data structure for todo list items, it's important to consider the necessary information you want to store for each todo item.

For a start,

```json
{
  "id": 1,
  "description": "Buy groceries",
  "completed": false
}
```

Let's break down each field:

- `id` (`number`): A unique identifier for the todo item. It can be an auto-incrementing integer.

- `description` (`string`): A concise description or summary of the todo item.

- `completed` (`boolean`): Indicates whether the todo item has been completed or not. It can be true or false.

## Step 2: Define the CRUD Endpoints

What you'll be creating:

1. `GET /todos` - Get all todo items
2. `GET /todos/:id` - Get a specific todo item
3. `POST /todos` - Create a new todo item
4. `PUT /todos/:id` - Update an existing todo item
5. `DELETE /todos/:id` - Delete an existing todo item

Let's first create a JSON file called `todos.json` that contains dummy JSON data.

```json
[
  {
    "id": 1,
    "description": "buy groceries 😃🍎",
    "completed": false
  },
  {
    "id": 2,
    "description": "drink water 🥤",
    "completed": false
  },
  {
    "id": 3,
    "description": "help papa water plants 😛🥦",
    "completed": true
  }
]
```

## Recap: Status codes

- `1xx` informational response – the request was received, continuing process
- `2xx` successful – the request was successfully received, understood, and accepted
- `3xx` redirection – further action needs to be taken in order to complete the request
- `4xx` client error – the request contains bad syntax or cannot be fulfilled
- `5xx` server error – the server failed to fulfil an apparently valid request

### Commonly used status codes

| Status Code | Description                 |
| ----------- | --------------------------- |
| `200`       | Ok                          |
| `201`       | Created                     |
| `204`       | No content to respond with. |
| `400`       | Bad Request                 |
| `401`       | Unauthorized                |
| `404`       | Not Found                   |
