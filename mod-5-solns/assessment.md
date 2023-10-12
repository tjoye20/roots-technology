# Module 5 Assessment

## How does React work?
React is a JavaScript library for building user interfaces. It works by creating a virtual DOM, which is a lightweight representation of the real DOM. When a component changes state, React creates a new virtual DOM and compares it to the previous one. It then updates the real DOM only with the changes that are necessary. This makes React apps very fast and efficient.

## How does the Virtual DOM work in React?
The Virtual DOM is a lightweight representation of the real DOM. It is a JavaScript object that describes the structure of your UI. When a component changes state, React creates a new virtual DOM and compares it to the previous one. It then updates the real DOM only with the changes that are necessary.


## What is JSX?
JSX stands for JavaScript XML. It is a syntax extension to JavaScript that allows you to write HTML in your React code. JSX makes it easier to read and write React components, and it can help you to write more efficient code.

## What is the difference between ReactDOM and React?
React is a JavaScript library for building user interfaces. ReactDOM is a library that allows React to interact with the DOM.

React is responsible for creating and managing the component hierarchy. It also provides features such as state management, reconciliation, and lifecycle hooks.

ReactDOM is responsible for rendering React components to the DOM. It also provides features such as event handling and server-side rendering.

In other words, React is the core of the library, while ReactDOM is the glue that holds everything together.


## What’s the difference between a Class component and a Functional component?
Class components are defined using a JavaScript class, while functional components are defined using a JavaScript function. Both class components and functional components can use state management, but only class components can use lifecycle hooks such as componentDidMount and componentWillMount. Class components are generally slower than functional components when it comes to performance.

## What are props?
Props in React are immutable inputs to components. They are used to pass data from a parent component to a child component.

## What is state in React and how is it used?
State in React is a data structure that is used to store data that is specific to a component. State can be changed over time, and when it changes, the component re-renders.

## What is the difference between State and Props?
State is data that is specific to a component and can be changed over time. When state changes, the component re-renders.

Props are data that is passed to a component from its parent component. Props are immutable, which means that they cannot be changed by the child component.

## What is Redux?
Redux is a state management library for JavaScript applications. Redux works by storing the state of your application in a single, global store. This makes it easy to track changes to state and to ensure that all parts of your application are always using the same state.

## What are the three components needed for Redux to work?
The three components needed for Redux to work are:

Actions: Actions are plain JavaScript objects that describe what happened. They are the only way to change the state of the Redux store.

Reducer: The reducer is a pure function that takes the current state and an action as input and returns a new state.

Store: The store is a global object that holds the current state of the application. It provides methods to get, set, and subscribe to the state.


## What are the three principles that Redux follows?
Redux follows three principles in React.js:

Single source of truth

The global state of the application is stored in a single object tree within a single store. This makes it easy to track changes to state and to ensure that all parts of the application are always using the same state.

State is read-only

The only way to change the state is to emit an action, an object describing what happened. This prevents unexpected changes to the state and makes the code more predictable.

Changes are made with pure functions

Reducers are pure functions that take the current state and an action as input and return a new state. This makes the code more predictable and easier to test.

## What are the different phases of a React component’s lifecycle?

The React component lifecycle has three phases:

Mounting: This is the phase where the component is created and inserted into the DOM.
Updating: This is the phase where the component is updated due to changes in its state or props.
Unmounting: This is the phase where the component is removed from the DOM.


## What are stateless components?
Stateless components are React components that do not have state. They are also known as functional components, because they are defined as JavaScript functions.

## What is the purpose of the render() in React?
The purpose of the render() method in React is to render the component's UI. It is called when the component is first created, when it receives new props, and when it is updated.


## How can you update the state of a component?

There are two ways to update the state of a component in React:

Use the setState() method. The setState() method is the most common way to update the state of a component. It takes an object as input and merges it with the current state.

Use a reducer function. A reducer function is a function that takes the current state and an action as input and returns a new state. Reducers are typically used in conjunction with Redux, but they can also be used to update the state of a component without Redux.


## What’s the difference between stateful and stateless components?
The main difference between stateful and stateless components in React is that stateful components can have state, while stateless components cannot.

State is data that is specific to a component and can change over time. Stateless components, also known as functional components, are simply functions that take props as input and return a React element as output.

Stateful components are used to implement interactive features in React applications. For example, a button component might use state to store the number of times it has been clicked. A counter component might use state to store the current count value.

Stateless components are typically used for components that only render data, such as lists, tables, and forms. They can also be used for components that wrap other 


## Explain the lifecycle methods of React components in detail.

constructor(): This method is called when the component is first created. It is used to initialize the component's state and props.

getDerivedStateFromProps(): This method is called when the component receives new props. It can be used to update the component's state based on the new props.


render(): This method is called to render the component's UI. It is called every time the component receives new props or state.

componentDidMount(): This method is called after the component has been inserted into the DOM. It can be used to perform side effects, such as fetching data from an API.

shouldComponentUpdate(): This method is called before a component is updated. It can be used to prevent unnecessary updates.

componentDidUpdate(): This method is called after a component has been updated. It can be used to perform side effects, such as updating the DOM.

componentWillUnmount(): This method is called before a component is removed from the DOM. It can be used to clean up resources, such as removing event listeners.


## What is a controlled component?

A controlled component in React is a component that manages its own state and updates the DOM based on its state. This is in contrast to an uncontrolled component, which relies on the DOM to manage its state.

Controlled components are typically used for forms, because they allow you to validate the user's input and prevent them from submitting invalid data.

## What is an uncontrolled component?

An uncontrolled component in React is a component that does not manage its own state. Instead, it relies on the DOM to manage its state. This means that the value of the uncontrolled component is stored in the DOM, and the component is updated whenever the DOM changes.

Uncontrolled components are typically used for simple input elements, such as text inputs, checkboxes, and radio buttons. They are also used for components that need to access the DOM directly, such as file inputs and ref-based components.

## What is the significance of keys in React?
Keys are unique identifiers for React elements. They are used to help React determine which elements have changed, been added, or been removed. This allows React to update the DOM efficiently and avoid unnecessary re-renders.

Keys are especially important for lists and other dynamic components. For example, if you have a list of items and you remove one of the items, React needs to know which item to remove from the DOM. Keys allow React to identify the item to remove and avoid re-rendering the entire list.

## What are higher order components?
Higher-order components (HOCs) in React are functions that take a component as input and return a new component as output. They are a powerful way to reuse functionality across different components.

HOCs can be used to add new features to components, such as authentication, routing, or logging. They can also be used to simplify the code for complex components by encapsulating common functionality in a reusable HOC.


## What is Flux architecture?
Flux is a unidirectional data flow architecture for building client-side web applications. It is designed to make applications more responsive, scalable, and testable. The four key principles of Flux are:

Unidirectional data flow: Data flows in one direction, from the view to the dispatcher to the stores and back to the view.

Centralized control: The dispatcher is the centralized controller for all data changes.

Immutable data: Data is immutable, meaning that it cannot be changed directly. Instead, new states are created when data is updated.

Pure functions: Pure functions are functions that take inputs and return outputs without modifying any external state. Flux stores are implemented as pure functions.

