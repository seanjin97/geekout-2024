---
sidebar_position: 5
---

# 1.3. Create a New Todo Task v2

## Designing the API:

Let's consider a bit more from the user's perspective and build some empathy for them. **How can we improve the user's experience?**
1. A new request item shouldn't have the `id` field. The `id` field is for us to identify a todo task, that burden shouldn't be placed on the user. (*Like bro you want add a todo item still need think of what `id` to put meh.*)
2. It also doesn't make sense for a newly added todo task to be marked as completed either. Let's automatically set the completed field as `false` for them.

Let's revise the user story.

| Given               | When                                                     | Then                                                                                                               |
|---------------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| As a todo list user | I want to add a new todo task with just the task's title | I call this API with the todo task's name and the server should tell me that it's been created successfully or not |

## Diving into the code

```javascript
// Automatically read request body as JSON
app.use(express.json());

app.post("/todos", (req, res) => {
  // Logic to create a new todo item
  const requestBody = req.body;

  const newTodoItemTitle = requestBody.title;

  // What if there's no title field given?
  if (!newTodoItemTitle) {
    res.status(400).json({ error: "no title bro" });
  }

  const newTodoItem = {
    id: randomInt(0, 99999), // let's be real we're not ever gonna create 100k todo items in our lives
    title: newTodoItemTitle,
    completed: false,
  };
  res.status(201).json(newTodoItem);
});
```
