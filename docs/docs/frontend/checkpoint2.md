---
sidebar_position: 2
---

# 1.2 API

Many projects on the web need to interface with a REST API at some stage in their development. Recall POST, GET, PUT and DELETE endpoints from the backend workshop. 

Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints, helps to streamline the communication with the backend. You can use Axios to interact with APIs, fetch data, and perform various HTTP operations.

Here's a function which calls the update (PUT) endpoint.

``` jsx
const updateTodoItem = async (newDone) => {
    try {
      await axios.put(`${CONFIG.API_ENDPOINT}/todos/${props.id}`, {
        id: props.id,
        title: props.description,
        done: newDone,
      });
    } catch (error) {
      console.error('Error updating todo item:', error);
    }
  };
```

This function `updateTodoItem`:

1. Uses `axios.put` to send a PUT request: This request updates an existing todo item. The URL for the request is constructed using the API endpoint and the ID of the todo item (`props.id`).
2. Sends a payload with the updated data: This payload includes the `id`, `title` (from `props.description`), and the new `done` status (`newDone`).
3. Handles errors with a try-catch block: If the request fails, it logs an error message to the console.

### Exercise 2A

Can you find where in the code the GET and POST endpoints are being called? Let's focus on the `submitNewTodo` function. What causes it to be triggered? What does it do?

### Exercise 2B

Let's now try to fill in the code for the `deleteTodoItem` function. After filling this in, the delete todo function should work. 

``` jsx
  const deleteTodoItem = async () => {
    // fill in code
  }
```
