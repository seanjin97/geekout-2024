---
sidebar_position: 6
---

# Installing Dependencies

## Understanding Dependencies

Dependencies are external packages or modules that your project relies on to function properly. They provide additional functionality and simplify the development process by reusing existing code.

There are two types of dependencies in a Node.js project:

1. **Production Dependencies**: These are the dependencies required for your application to run in a production environment. They are essential for your application to function properly.
2. **Development Dependencies**: These are the dependencies used only during the development process. They include tools and utilities that assist in development, testing, and debugging.

Dependencies are listed in the `package.json` file under the `"dependencies"` and `"devDependencies"` sections, respectively.

## Installing Dependencies

To install dependencies in your Node.js project, you can use the `npm install` command followed by the package names. Let's install the necessary dependencies for our project.

1. Open your terminal or command prompt in VSCode by pressing `ctrl + ~`.
2. Run the following command to install Express as a production dependency:

   ```bash
   npm install express
   ```

   This command will download and install the latest version of Express and its dependencies. It will also update the `package.json` file to include Express as a dependency.

## Installing Development Dependencies

In addition to production dependencies, you may also need development dependencies like reloading the server during development for your convenience.

1. Run the following command to install any package as a development dependency:

   ```bash
   npm install --save-dev <package-name>
   ```

   The `--save-dev` flag ensures that the package is added to the `"devDependencies"` section of the `package.json` file.

2. You can install other development dependencies in a similar manner by specifying the `--save-dev` flag.

## (Extra) What is `package-lock.json` & `node_modules`?
After installing your dependencies, you'll observe that 2 new files (`package-lock.json` and `node_modules`) were created.

### package-lock.json

The `package-lock.json` file is automatically generated when you run `npm install` in a Node.js project. It serves several important purposes:

#### Dependency Resolution

- **Locks Versions**: Locks down the versions of each installed package and its dependencies, ensuring consistency across all environments.
- **Avoids Version Mismatch**: Prevents discrepancies and bugs from version mismatches by ensuring everyone uses the same package versions.

#### Consistency

- **Same Dependencies**: Ensures that every developer or environment running the project will have the same dependencies installed, despite new package versions being available.

#### Speed

- **Faster Installs**: Improves installation speed by allowing npm to skip repeated metadata resolutions.

#### Dependency Tree

- **Detailed Tree Structure**: Provides a detailed tree structure of the node modules, including dependencies and their exact versions, ensuring that the exact structure is replicated every time.

### node_modules

The `node_modules` directory is where npm stores the packages it installs. This directory is crucial for the following reasons:

#### Local Storage for Packages

- **Stores Installed Packages**: When you install a package (e.g., `npm install express`), npm places it in the `node_modules` directory, making it accessible to your application.

#### Hierarchy of Dependencies

- **Nested Structure**: The directory can have a nested structure with dependencies of dependencies stored in their own `node_modules` subdirectories.

#### Access for Execution

- **Runtime Resolution**: Node.js resolves modules from this directory during runtime, essential for accessing external libraries and tools needed by the application.


## Conclusion

Congratulations! You have successfully set up a new Node.js project and installed the necessary dependencies, including Express.

Here's a summary of what you learned:

- What dependencies are and the difference between production and development dependencies.
- How to install dependencies using `npm install <package-name>`.
- How to install development dependencies using `npm install --save-dev <package-name>`.

With your project set up and dependencies installed, you're ready to start building your application using Express. In the next section, we'll dive into creating the Todo List API.
