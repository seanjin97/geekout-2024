---
sidebar_position: 5
---

# 1.3. Create a New Todo Task v3

_What about persisting the data?_

## Designing the API:

It's quite useless that this endpoint doesn't persist the data la, are we really "creating" something when nothing is stored in our JSON file?

Let's revise the user story.

| Given               | When                                                           | Then                                                                                                                                      |
| ------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| As a todo list user | I want to add a new todo task with just the task's description | I call this API with the todo task's name and the server should store it in a file and tell me that it's been created successfully or not |

## Diving into the code:

```javascript
app.post("/todos", (req, res) => {
  // Logic to create a new todo item
  const requestBody = req.body;

  const newTodoItemDescription = requestBody.description;

  // What if there's no description field given?
  if (!newTodoItemDescription) {
    res.status(400).json({ error: "no description bro" });
  }
  // Read our existing todos
  const existingTodos = fs.readFileSync("todos.json", "utf-8");
  const formattedExistingTodos = JSON.parse(existingTodos);

  // Create a new todo
  const newTodoItem = {
    id: randomInt(0, 999999999),
    description: newTodoItemDescription,
    completed: false,
  };

  // Merge the new todo into the existing todos
  const updatedListOfTodos = [...formattedExistingTodos, newTodoItem];

  fs.writeFileSync("todos.json", JSON.stringify(updatedListOfTodos));

  res.status(201).json(newTodoItem);
});
```
