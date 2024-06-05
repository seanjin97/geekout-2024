---
sidebar_position: 7
---






### 2.5. Delete a Todo Item (DELETE /todos/:id)

```javascript
app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  // Logic to delete a specific todo item by its ID
  // ...
  res.sendStatus(204);
});
```

- The `DELETE /todos/:id` endpoint is used to delete a specific todo item by its ID.
- The todo ID is passed as a parameter in the URL.
- Upon successful deletion, it responds with a status code of 204 (No Content) to indicate that the resource was successfully deleted.

## Best Practices and Considerations

- Use meaningful and descriptive names for your routes and endpoints to enhance readability and maintainability.
- Follow REST (Representational State Transfer) principles when designing your API endpoints. Use appropriate HTTP methods (GET, POST, PUT, DELETE) for different operations.
- Use appropriate HTTP status codes to indicate the success or failure of an operation. For example, use 201 for successful resource creation, 200 for successful retrieval, 204 for successful deletion, etc.
- Validate and sanitize user input to ensure data integrity and prevent security vulnerabilities.
- Handle errors gracefully and provide meaningful error responses to the client.
- Document your API endpoints, including the request and response formats, to make it easier for other developers to understand and use your API.

## Conclusion

In this section, you learned how to create CRUD endpoints for your Todo List API using Express. We defined routes for creating, retrieving, updating, and deleting todo items directly in the `app.js` file, following REST principles and best practices.

With these CRUD endpoints in place, your Todo List API is now capable of performing basic operations on todo items. You can further enhance your API by adding more features, such as filtering, sorting, pagination, etc.
