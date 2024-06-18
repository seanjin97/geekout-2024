---
sidebar_position: 1
---

# 1.1 Components
In ReactJS, a web application is like a puzzle made up of many pieces, and each piece is called a "component". These components can be as simple as a button or as complex as an entire section of a webpage. Each component is a reusable piece of the user interface.

- **Building Blocks**: Think of ReactJS components like Lego pieces. Each piece represents a part of a webpage—like a button, a form, or a section with photos and text. Just as you build different things with Lego by putting pieces together, you can build webpages by combining these components.
- **Independence**: Each component is like a mini-factory that works on its own. It has everything it needs to function, and it doesn't mess with other components. This makes it easier to fix problems since you only need to look at one piece at a time.
- **Nesting**: Components can be put inside each other, like putting a smaller lego item into a bigger lego house. This helps organize the pieces better and build more complex sections of the webpage without getting overwhelmed.

To illustrate this, let's look at an example. Suppose we have a parent component that passes data to a child component. In React, this data is passed using "props", which stands for "properties". Props allow one component to send data to another, enabling components to communicate with each other.
- **Props as Instructions/Information**: Props (short for properties) are like specific instructions or information that the parent gives to its child components to use.

Here's an example demonstrating how to pass props from a parent component to a child component:

**Parent component**
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

**Child component**
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

In the `ChildComponent`, we receive the props as an argument (here, named `props`). We can then access the `greeting` and `name` props using `props.greeting` and `props.name` and use them within the component’s JSX.

When rendered, the `ParentComponent` will display its own heading, and the `ChildComponent` will use the props passed to it to display a personalised greeting.

Breaking up our webpage into components in React makes it easier to build and manage complex UIs by breaking them down into smaller, reusable pieces.

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