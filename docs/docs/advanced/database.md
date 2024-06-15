---
sidebar_position: 5
---

# Database

Eh abit useless la api but restart server cannot rmb anything alr. Let's now make our Todo app's data persistent.

When building a REST API server, choosing the right database is crucial to efficiently store and retrieve data. There are two main types of databases: relational and non-relational (NoSQL).

## Relational Databases

Relational databases organize data into tables with predefined schemas, where each table consists of rows (records) and columns (fields). Tables are related to each other using primary and foreign keys. Examples of relational databases include:

- PostgreSQL (i luv)
- MySQL
- Oracle Database
- Microsoft SQL Server

## Non-Relational (NoSQL) Databases

Non-relational databases, also known as NoSQL databases, provide a flexible schema and scale horizontally. They are designed to handle large amounts of unstructured or semi-structured data. Examples of non-relational databases include:

- MongoDB
- Cassandra
- Redis (more for caching)
- Couchbase
- Firebase Realtime Database

## Comparison between Relational and Non-Relational Databases

### Similarities

- Both store and retrieve data
- Both support CRUD (Create, Read, Update, Delete) operations
- Both can be used for various applications

### Differences

| Relational Databases                                                                      | Non-Relational Databases                 |
| ----------------------------------------------------------------------------------------- | ---------------------------------------- |
| Fixed schema                                                                              | Flexible schema                          |
| Structured data                                                                           | Unstructured or semi-structured data     |
| SQL query language                                                                        | NoSQL query languages                    |
| Vertical scaling                                                                          | Horizontal scaling                       |
| [ACID](https://www.mongodb.com/resources/basics/databases/acid-transactions) transactions | Eventual consistency                     |
| Strong consistency                                                                        | Weak consistency                         |
| Suitable for complex queries                                                              | Suitable for large-scale, simple queries |

## Object-Relational Mapping (ORM)

When integrating an Express.js server with a relational database, you often need to map the JSON data received from the client to the corresponding schema in the database. This process is known as Object-Relational Mapping (ORM).

## Integrating Express.js with a Relational Database (using TypeORM)

Okay, let's just use a relational database for this example. Relational databases are used pretty much everywhere and it's probably preferred in most cases. You really can't go wrong going with a relational database.

We wanna skill up ourselves to get hired easily, so let's focus on relational databases.

Let's use the [TypeORM library](https://typeorm.io/) as the ORM for our app. Why?
<small>_idk, i just feel like it. it's p robust and popular. The syntax for TypeORM feels quite similar to the way Spring Boot does it. i luv spring boot so let's leave it as that. there's like 1 million other ORMs you can use so feel free to use any of them instead. but for this example, i'll stick to TypeORM._</small>

TypeORM supports various relational databases and provides a convenient way to define entities and interact with the database.

Let's start by reading the docs @ https://typeorm.io/ and specifically https://typeorm.io/usage-with-javascript

### ok need to install dependencies

```bash
npm install typeorm pg
```

### Configure datasource

Let's write this into a new file called `database.js` that contains all configuration related to our database.

```javascript
const typeorm = require("typeorm");

const Todo = new typeorm.EntitySchema({
  name: "Todo",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    description: {
      type: "varchar",
    },
    completed: {
      type: "boolean",
      default: false,
    },
  },
});

const dataSource = new typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Todo],
});

module.exports = { dataSource };
```

and in `app.js`

```javascript
const { dataSource } = require("./database");

// ...rest of your code

dataSource.initialize().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
});
```

## But wait, where is our database??

### Let's spin it up using Docker.

Why? It's just so much more convenient, and if anything goes wrong, just delete the container and re-initialise another.

We'll need the [postgreSQL image](https://hub.docker.com/_/postgres) to run. In our case, let's use the version tag `16.3-alpine3.20`.

```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=password -d postgres:16.3-alpine3.20
```

### Breaking it down

`docker run`: This command is used to start a new container from a Docker image.

`--name postgres-db`: This option sets the name of the container to "postgres-db". You can choose any name you prefer for your PostgreSQL container.

`-e POSTGRES_PASSWORD=password`: This option sets an environment variable inside the container. In this case, it sets the POSTGRES_PASSWORD environment variable to "password". This environment variable is used by the PostgreSQL image to set the password for the default "postgres" user. You should replace "password" with a strong and secure password of your choice.

`-d`: This option runs the container in detached mode. It means that the container will run in the background, and you can continue using the terminal for other tasks.

`postgres:16.3-alpine3.20`: This specifies the Docker image to be used for creating the container. In this case, it uses the "postgres" image with the tag "16.3-alpine3.20". This particular image is based on Alpine Linux version 3.20 and includes PostgreSQL version 16.3.

### To verify that our database is running:

```bash
docker ps
```

You should see that a container called `postgres-db` is running.
