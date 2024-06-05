---
sidebar_position: 3
---

# Improving developer productivity

## Pause - Isn't super tedious to keep having to start and restart the server?

**How can we make our lives better?** (why settle? ??  ?)

1. Let's run a quick google search to see how people solved this problem before. A great artist knows how to draw inspiration from other great artists. **Why think how to solve a problem that's been solved many times.**
2. Let's install a development dependency called `nodemon`, which automatically restarts the server whenever changes are made to the code. Run the following command to install `nodemon` as a development dependency:

   ```bash
   npm install --save-dev nodemon
   ```

   The `--save-dev` flag ensures that `nodemon` is added to the `"devDependencies"` section of the `package.json` file.
3. Run command `npx nodemon app.js`. Now we observe that on every code change, the server is automatically reloaded for us with the latest changes. nice.
