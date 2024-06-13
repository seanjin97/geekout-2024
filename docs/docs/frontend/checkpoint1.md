---
sidebar_position: 1
---

# 1.1 Components

In ReactJS, a web application is like a puzzle made up of many pieces, and each piece is called a "component". These components can be as simple as a button or as complex as an entire section of a webpage. Here's an example of a component.

React "props" stands for "properties": a way to pass data from one part/component of your app to another. Props are passed from parent component to child component.

Parent component
``` jsx
const ParentComponent = () => {
  const greeting = "Hello";
  const name = "Alice";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent greeting={greeting} name={name} />
    </div>
  );
};
```

Child component
``` jsx
const ChildComponent = (props: { greeting, name }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.greeting}, {props.name}!</p>
    </div>
  );
};
```

### Exercise 1A

In our application, identify which are the parent component(s) and which are the child component(s) and what props are being passed from component to component.

Hint: What are `Todo` and `TodoItem`? Also use the browser developer tools to understand the structure of the site further.

### Exercise 1B

Let's try to refactor the existing code and create a new component for the header of the todo app. In other words, we want to take the following portion 

``` jsx
<div className="todo-box">
    <div className="todo-div">
        <h1 style={{ padding: '10px 0px' }}>{formatDate(today)}</h1>
        <h2 style={{ paddingBottom: '5px' }}>
            Hey there! What's the plan for today?
        </h2>
    </div>
</div>
```

and replace it with this, and create a new component in a file `components/TodoHeader.jsx`:

``` jsx
<TodoHeader />
```

After you've done that, try to convert the header text "Hey there! ..." to a prop and modify it from outside your new component.