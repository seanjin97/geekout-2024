---
sidebar_position: 9
---

# API Documentation

## Code checkpoint

Before getting started with this exercise, ensure that your code looks like [this](https://github.com/seanjin97/geekout-2024/tree/master/backend/advanced/refactoring).

## Why have API docs??

As a developer, it's important to document your APIs so that:

1. **Clarity and Understanding**: API documentation provides a clear explanation of what your API does, how it works, and how to use it effectively. It serves as a guide for both your team members and external developers who may integrate with your API.

2. **Easier Adoption and Integration**: Well-documented APIs are easier for developers to understand and integrate into their own applications. Clear documentation reduces the learning curve and helps developers get started quickly, increasing the likelihood of adoption and usage of your API.

3. **Improved Collaboration**: API documentation facilitates collaboration among team members. It acts as a central reference point, ensuring that everyone has a shared understanding of the API's functionality, endpoints, request/response formats, and any specific requirements or constraints.

4. **Maintainability and Future Development**: As your API evolves over time, having comprehensive documentation makes it easier to maintain and update. New team members can quickly grasp the API's structure and functionality, reducing the time needed for onboarding and knowledge transfer.

5. **Better API Discoverability**: Documenting your APIs makes them more discoverable. Developers can easily find and explore the available endpoints, understand the functionality offered, and determine if your API meets their requirements. This increases the visibility of your API and attracts potential users.

## Documenting Your Express APIs

honestly, just chatgpt it. aint nobody got time for allat.

## Understanding OpenAPI Specification and Swagger

### What is OpenAPI Specification?

The OpenAPI Specification (OAS) is a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.

### What is Swagger?

Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs. The major Swagger tools include:

- Swagger Editor – browser-based editor where you can write OpenAPI specs.
- Swagger UI – renders OpenAPI specs as interactive API documentation.
- Swagger Codegen – generates server stubs and client libraries from an OpenAPI spec.

## Writing an OpenAPI Spec for REST APIs

When writing an OpenAPI spec for your REST APIs, you should include the following information:

1. **Basic Information**: Specify the OpenAPI version, info (title, version, description), servers (base URL for the API).

2. **Paths**: Define the available endpoints (paths) and operations for each endpoint (e.g., GET /users, POST /users). For each operation, specify:

   - Operation description
   - Operation parameters
   - Request body (if any)
   - Response body for different status codes

3. **Components**: Define the reusable components such as schemas (data models), parameters, responses, etc.

4. **Security**: Specify the security schemes (e.g., JWT, OAuth2) and security requirements for each operation.

## Example: Documenting an Express.js API Route

Here's an example of how we can document an our `GET /todos` API route using the OpenAPI spec:

```yaml
openapi: 3.0.3
info:
  title: Todo List API
  description: |-
    some description
  version: 1.0.0
paths:
  /todos:
    get:
      summary: Get all todos
      description: Retrieve a list of all todos
      responses:
        "200":
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Todo"
components:
  schemas:
    Todo:
      type: object
      required:
        - id
        - title
        - completed
      properties:
        id:
          type: integer
          description: The unique ID of the todo.
        description:
          type: string
          description: The title of the todo.
        completed:
          type: boolean
          description: Indicates if the todo is completed or not.
```

In this example:

- We define a `GET /todos` endpoint under the paths section.
- The `summary` provides a short description of the endpoint.
- The `description` gives a more detailed explanation of what the endpoint does.
- Under `responses`, we specify the 200 status code for a successful response.
- The `content` section describes the response body format, which is `application/json` in this case.
- The `schema` defines the structure of the response data, which is an array of Todo objects.
- The `Todo` schema is defined in the components/schemas section, specifying the required properties (`id`, `title`, `completed`) and their types.

Paste the above yaml text to https://editor.swagger.io/ and see how it looks like.

## Library for Express.js

For Express.js, we can use the package `swagger-ui-express` to serve the generated OpenAPI specs as interactive documentation.

### First install the dependencies

```bash
npm install express yaml swagger-ui-express
```

### Create a file called `swagger.yaml`

First create a `swagger.yaml` file that will contain the Open API spec formatted API documentation.

### Write your API docs in `swagger.yaml`

<small>god bless chatgpt this is what it's good for, else we'd have to manually write it all out.</small>

Prompt: `write me a yaml file that contains the api documenation of this express.js todo list api in open api specification.` and add `app.js` to the chatgpt context.

### Configure our Expres.js app to serve the swagger

Update `app.js` to include the following.

```js
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yaml");

const app = express();

const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// rest of your code
```

With this setup, you can write OpenAPI specs in your code comments and access the interactive API documentation at `http://localhost:8000/docs`.

## Conclusion

Observe how the `/docs` endpoint serves a similar Swagger UI as the online [Swagger Editor](https://editor.swagger.io/).

The next time someone asks you "eh how to use your APIs?", they can self help themselves at the `/docs` endpoint.

## Final Code

Full code here: https://github.com/seanjin97/geekout-2024/tree/master/backend/advanced/documentation
