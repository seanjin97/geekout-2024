---
sidebar_position: 4
---

# 1.4 UseEffect hook

The `useEffect` hook is an example of a **lifecycle** method which can get called at different stages of a component's existence. Lifecycle methods allow you to run code at specific times, such as when a component is first mounted, updated, or unmounted.

The `useEffect` hook is a function that lets you perform **side effects** in your React components. Side effects are operations or tasks that occur in your component that are not directly related to rendering the UI. We perform a side effect when we need to reach outside of our React component to do something. Examples of side effects: data fetching, setting timers, interacting with the DOM, logging to console, etc.

### useEffect syntax

In the function `() => { ... }` that is the first argument to `useEffect`, we define the code that will run when the side-effect is triggered. In the array `[]`, we declare dependencies and which will decide when useEffect() should execute.

```jsx
useEffect(( ) => { … }, []);
```

1. Empty dependency array: runs only once when the component is first mounted (i.e., when it appears on the screen). Use this pattern for side effects that should only happen once, such as fetching initial data from an API.

```jsx
useEffect(( ) => { … }, []);
```

2. Non-empty dependency array: runs when the component mounts and also whenever any of the dependencies listed in the array change. In this example, `done` is the dependency. Use this pattern when your side effect depends on specific state or props. For instance, you might want to fetch data or perform an action whenever the `done` state changes.

```jsx
useEffect(( ) => { … }, [done]);
```

### Examples

This logs "Component mounted" to the console only once when the component is first rendered.

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

This logs the current value of `done` to the console whenever `done` changes. If `done` is updated (e.g., `setDone(true)`), the effect runs again.

```jsx
const [done, setDone] = useState(false);

useEffect(() => {
  console.log('Effect triggered because "done" changed:', done);
}, [done]);
```

### Why use useEffect?

Avoiding Infinite Loops:

- Without useEffect, side effects could be triggered on every render, which can lead to infinite loops or excessive resource consumption.
- useEffect() allows you to specify dependencies, and the effect will only run when those dependencies change, helping you control when and how often a side effect occurs.

Handling Asynchronous Operations:

- Many side effects involve asynchronous operations, such as fetching data from an API.
- You can use async/await within useEffect() to handle asynchronous code more cleanly.

### Setup

Run `git checkout checkpoint-4`

### Exercise 4A

Let's try to understand how `useEffect` is used in our Todo application.

### Exercise 4B

Let's add a second `useEffect` hook to ensure that the `Save Task` button gets disabled when the task description it exceeds 30 characters.
