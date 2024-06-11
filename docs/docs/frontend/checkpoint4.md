---
sidebar_position: 4
---

# 1.4 UseEffect hook

Side effects are operations or tasks that occur in your component that are not directly related to rendering the UI. We perform a side effect when we need to reach outside of our React component to do something. Examples of side effects: data fetching, setting timers, interacting with the DOM, logging to console, etc.

### Why use useEffect?

Avoiding Infinite Loops: 
- Without useEffect, side effects could be triggered on every render, which can lead to infinite loops or excessive resource consumption. 
- useEffect() allows you to specify dependencies, and the effect will only run when those dependencies change, helping you control when and how often a side effect occurs.

Handling Asynchronous Operations: 
- Many side effects involve asynchronous operations, such as fetching data from an API. 
- You can use async/await within useEffect() to handle asynchronous code more cleanly.

### UseEffect syntax

In the function definition within `{ ... }`, we define the code that will run when the side-effect is triggered. In the array `[]`, we declare dependencies and which will decide when useEffect() should execute.

``` jsx
useEffect(( ) => { … }, []);
```

1. Empty dependency array: will run only once at the initial mount of the component

``` jsx
useEffect(( ) => { … }, []);
```

2. Non-empty dependency array: will run at the initial mount of the component and when the state ‘done’ changes

``` jsx
useEffect(( ) => { … }, [done]);
```

### Exercise 4A

Let's try to understand how `useEffect` is used in our Todo application.

### Exercise 4B

Let's add a second `useEffect` hook to ensure that the Todo description turns red when it exceeds 30 characters.