---
sidebar_position: 5
---

# 1.3. Create a New Todo Task v2

## Designing the API:

It works, but can we make it better? Let's iterate on our feature.

Let's consider how the user would use our API and build some empathy for them. **How can we improve the user's experience?**

1. A new request item shouldn't have the `id` field. The `id` field is for us to identify a todo task, that burden shouldn't be placed on the user. (_Like bro you want add a todo item still need think of what `id` to put meh._)
2. It also doesn't make sense for a newly added todo task to be marked as completed either. Let's automatically set the completed field as `false` for them.

Let's revise the user story.

| Given               | When                                                           | Then                                                                                                                      |
| ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| As a todo list user | I want to add a new todo task with just the task's description | I call this API with the todo task's description and the server should tell me that it's been created successfully or not |

## Diving into the code

```javascript
// Automatically read request body as JSON
app.use(express.json());

app.post("/todos", (req, res) => {
  const requestBody = req.body;

  const todoDescription = requestBody.description;

  if (!todoDescription) {
    return res.status(400).json({ error: "you did not provide a description" });
  }

  const todosJson = fs.readFileSync("./todos.json");
  const existingTodos = JSON.parse(todosJson);

  const newTodo = {
    id: randomInt(9999999999),
    description: todoDescription,
    completed: false,
  };

  const updatedListOfTodos = [...existingTodos, newTodo];

  fs.writeFileSync("./todos.json", JSON.stringify(updatedListOfTodos));

  res.status(201).json(newTodo);
});
```
