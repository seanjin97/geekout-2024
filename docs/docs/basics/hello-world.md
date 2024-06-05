---
sidebar_position: 7
---

# Hello, World!

In this section, we'll walk you through the process of creating a simple "Hello World" endpoint using the Express framework in your Node.js project.

## Step 1: Create a New File

1. In your project directory, create a new file called `app.js` (or any other name you prefer).
2. Open the `app.js` file in your code editor.

## Step 2: Import Express

At the top of the `app.js` file, import the Express module using the `require` function:

```javascript
const express = require('express');
```

## Step 3: Create an Express Application

Next, create a new instance of an Express application:

```javascript
const app = express();
```

This `app` object will be used to define routes and middleware for your application.

## Step 4: Define the Hello World Endpoint

Now, let's define the "Hello World" endpoint using the `app.get()` method:

```javascript
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});
```

Let's break down this code:
- `app.get()` is a method provided by Express to handle GET requests to a specific route.
- The first argument, `'/hello'`, represents the route or path for the endpoint. In this case, the endpoint will be accessible at `http://localhost:8000/hello`.
- The second argument is a callback function that takes two parameters: `req` (request) and `res` (response).
- Inside the callback function, we use `res.send()` to send the response back to the client. In this case, we're sending the string `'Hello, World!'`.

## Step 5: Start the Server

Finally, let's start the Express server and listen for incoming requests:

```javascript
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
```

The `app.listen()` method starts the server and listens for incoming requests on the specified port (in this case, port 8000). The second argument is a callback function that is executed when the server starts running.

## Complete Code

Here's the complete code for the `app.js` file:

```javascript
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
```

## Running the Server

To run the server and test the "Hello World" endpoint:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command:

   ```bash
   node app.js
   ```

   This command will start the server, and you should see the message "Server is running on port 8000" in the console.

4. Open a web browser and visit `http://localhost:8000/hello`. You should see the message "Hello, World!" displayed in the browser.

Congratulations! You have successfully created a "Hello World" endpoint using Express in your Node.js project.

## Conclusion

In this section, you learned how to:
- Import the Express module and create an Express application.
- Define a simple "Hello World" endpoint using `app.get()`.
- Start the Express server and listen for incoming requests.

With this basic understanding of creating endpoints in Express, you're ready to move on to building more complex routes and functionality for your Todo List API.
