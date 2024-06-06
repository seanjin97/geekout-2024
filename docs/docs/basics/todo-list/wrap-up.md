---
sidebar_position: 9
---
# Wrapping up
In this section, you learned how to create CRUD endpoints for your Todo List API using Express. We defined routes for creating, retrieving, updating, and deleting todo items directly in the `app.js` file, following REST principles.

With these CRUD endpoints in place, your Todo List API is now capable of performing basic operations on todo items. 

<small>*yippie.*</small>

## What good practices did we do in this workshop?
- Used meaningful and descriptive names for our routes and endpoints to enhance readability and maintainability.
- Used appropriate HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) for different operations.
- Used appropriate HTTP status codes to indicate the success or failure of an operation. For example, use 201 for successful resource creation, 200 for successful retrieval, 204 for successful deletion, etc.
- Validated and sanitized user input to ensure data integrity and prevent security vulnerabilities.
- Handled errors gracefully and provide meaningful error responses to the client.

## Next Steps
You can further enhance your API by adding more features. We'll cover these in the further sections. Self study it (like every other thing in software engineering) when u wanna. 

For example:
1. Documenting our API endpoints, including the request and response formats, to make it easier for other developers to understand and use our API.
2. Hosting it on the cloud (How are you gonna show off your cool new API if it's not hosted? ? ?)
3. Authentication to secure your API endpoints (Protect it against unauthorised users)
4. Storing data in a database (This is the proper, robust way to store data)


