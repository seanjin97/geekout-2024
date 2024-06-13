---
sidebar_position: 3
---

# 1.3 Hooks and state

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks help you in keeping track of data that changes, adding interactivity to your website, and managing the way your components work.

Some hooks that are commonly used: 
- State hook (useState). **State** is an object that holds information that may change over the lifetime of a component. It's a way to keep track of dynamic data in your application. When the state of a component changes, React re-renders the component to reflect the new state.
- Effect hook (useEffect). We'll explore this in the next checkpoint.

### UseState hook

The useState() hook allows you to create, track and update a state in functional components. It takes in the initial value of the state variable as an argument. This value could be of any data type, such as string, number, object, array, etc.

For instance, in the following, `count` is the state, `setCount` is the function to update the state, and `0` is the initial state value.

``` jsx
const [count, setCount] = useState(0) 
```

### Example of `useState` Hook

The `useState` hook lets you add state to a functional component:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named "count", initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
```

In this example, `useState` is used to declare a state variable `count` and a function `setCount` to update it. The state is initialised to 0. Each time the button is clicked, `setCount` updates the state, causing the component to re-render and display the new count.

### Exercise 3A

Identify the useState() hooks being used in our application in the Todo component. What are information are these states storing? Observe how the states are being displayed and updated. 

Todo component:
``` jsx
 const [todoItems, setTodoItems] = useState({});
 const [newTodoDescription, setNewTodoDescription] = useState("");
 const [isLoading, setIsLoading] = useState(false);
```

### Exercise 3B

Let's now try to modify our app so that the checkbox works by adding a `done` state using the `useState` hook.

TodoItem component
``` jsx
 const [completed, setCompleted] = useState(props.completed);
```
