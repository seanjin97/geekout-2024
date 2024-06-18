---
sidebar_position: 0
---

# Setup
## Clone the frontend code repository
Assuming you already have `git` installed from the backend workshop:
- Open your terminal / VSCode terminal
- Run `git clone https://github.com/wk-repo/gt-geekout-2024.git` 
- Open the folder on your IDE (e.g. VSCode)

## Set up the project
- Navigate to the **frontend** on your terminal from the repository: `cd frontend` 
- Run `npm install` and wait for the packages to be installed
- Finally, run `npm run start` to run the project 
- You should see the todo app on `http://localhost:3000/` on your browser

## Commonly Encountered Problems

**1. I tried to `git checkout <branch-name>` but encountered this error:**
```
Please commit your changes or stash them before you switch branches. 
```
- Do `git stash` 
- Then try `git checkout <branch-name>` again

**2. I encountered issues with using `git clone ...`**
- Request the zip file of the code from your mentor or any of the committee members

**2. I encountered issues with using `npm ...` commands**
- Feel free to ask your mentors to take a look at the error and help you debug 
