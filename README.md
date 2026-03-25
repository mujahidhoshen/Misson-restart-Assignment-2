1. What is JSX, and why is it used?

JSX is a way to write HTML code inside JavaScript. It makes React code easier to understand and helps you build user interfaces faster.

2. What’s the difference between State and Props?

State is like a component’s own memory — it holds data that can change while the app is running.
Props, on the other hand, are like messages or information you send from one component to another. They come from the parent and can’t be changed by the child.

3. What is the useState hook, and how does it work?

The useState hook in React is used to store and manage data inside a functional component. It allows your component to remember information.

For example:

const [count, setCount] = useState(0);

Here:
count is the variable that holds the current value (in this case, 0).
setCount is the function you use to update that value.

4. How can you share state between components in React?

You can keep the state in a common parent component and pass it down to children using props.

5. How is event handling done in React?

In React, you handle events using functions. Event names are written in camelCase.
Example:

<button onClick={handleClick}>Click Me</button>


Here, handleClick runs when the button is clicked.