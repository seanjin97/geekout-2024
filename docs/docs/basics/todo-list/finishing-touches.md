---
sidebar_position: 9
---

# Finishing Touches

Now we have a working Todo list API! But we're not done just yet.

So far, we've only been calling our API from an API client, but what about a website that's running on your browser?

That website wouldn't be able to call your API because of CORS. That's a lil gotcha for u.

CORS is a concept that'll take some time to understand. I know ain't nobody gonna read allat, feel free to jump straight to [Adding CORS to Your Express.js Server](#adding-cors-to-your-expressjs-server).

## Cross-Origin Resource Sharing (CORS) (beninging of yap)

### What is it?

When building web applications, you often need to make requests from one domain to another. For example, if you have a frontend application hosted on https://example.com and an API server hosted on https://api.example.com, the frontend will make requests to the API server. However, web browsers have a security feature called the Same-Origin Policy, which restricts web pages from making requests to a different domain, protocol, or port than the one from which the page was served.

Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

### Why we need CORS?

When you're building an API and you want to allow other domains to access your API, you need to enable CORS. Without CORS, web browsers will block requests from other domains, considering them as potential security risks. By enabling CORS, you explicitly allow specific domains or all domains to make requests to your API.

#### But why still

1. Separate Frontend and Backend: If your frontend application is hosted on a different domain than your API server, you need to enable CORS on the API server to allow the frontend to make requests.

2. Third-Party API Integrations: If you're building an application that consumes third-party APIs, those APIs might have CORS restrictions. To make requests to those APIs from your frontend application, you need to configure CORS on your backend server to handle the preflight requests and add the necessary CORS headers.

3. Multiple Subdomains: Even if your frontend and backend are hosted on the same main domain but on different subdomains (e.g., `app.example.com` and `api.example.com`), you still need to enable CORS to allow communication between them.

**(end of yap)**

## Adding CORS to Your Express.js Server

To add CORS support to your Express.js server, you can use the `cors` middleware. Here's how you can install and configure it:

1. Install the `cors` package:

   ```bash
   npm install cors
   ```

2. Import and use the `cors` middleware in your Express.js server:

   ```javascript
   const express = require("express");
   const cors = require("cors");

   const app = express();

   // Enable CORS for all routes
   app.use(cors());

   // Rest of your server code...

   app.listen(3000, () => {
     console.log("Server is running on port 3000");
   });
   ```

   In this example, we enable CORS for all routes by using `app.use(cors())`. This allows requests from any origin to access your API.

3. Configure CORS options (optional):

   If you want to restrict CORS to specific origins or configure other CORS options, you can pass an options object to the `cors` middleware:

   ```javascript
   app.use(
     cors({
       origin: "https://example.com",
       methods: ["GET", "POST", "PUT", "DELETE"],
       allowedHeaders: ["Content-Type", "Authorization"],
     })
   );
   ```

   In this example, we restrict CORS to only allow requests from `https://example.com`, specify the allowed HTTP methods, and define the allowed headers.

By enabling CORS on your Express.js server, you allow other domains to make requests to your API, overcoming the Same-Origin Policy restriction imposed by web browsers.

Remember to carefully configure CORS based on your application's requirements, ensuring that you allow only the necessary origins and methods to access your API while maintaining security.
