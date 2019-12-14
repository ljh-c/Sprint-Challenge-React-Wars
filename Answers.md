# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library designed to build user interfaces from reusable components that can change based on data. Complex user interfaces are difficult to build when users have many interactions with them, and React solves that problem by updating only the components that have changed based on state. 

1. What does it mean to think in react?

To think of web applications in the React way means to break down user interfaces into modular components and single-responsibility functions, and to consider how data will flow through a tree of components. 

1. Describe state.

State refers to any data that can change. More specifically, it is an actual object where components can store their own property values. 

1. Describe props.

Props is a keyword in React that refers to an object of properties possessed by a component - it can be passed to a child component. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect in React is anything that affects something outside the scope of the function it is executed in. The useEffect hook in React executes a function if a given value changes (dependency).