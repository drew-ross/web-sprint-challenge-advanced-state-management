1. What problem does the context API help solve?

A: Context API helps solve the issue of having to pass props through intermediate components. In some cases, there can be more intermediate components that don't need access to the data than components that do. Context helps by providing access to data to an entire component tree, then child components can consume the data directly without the need for prop-drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: The store is the place where state is held. When the store recieves a new state, it compares changes and updates the UI accordingly. Reducers create and update the data in the store by defining how the application should update through actions. Actions are dispatched to the reducer to update state. Each action has a type and an optional payload.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Application state is global and can be accessed anywhere in the application. Component state is local to a component and can only be accessed by the component and its descendants. Application state is useful to hold data important to large parts of the application. Component state is useful for smaller, discrete functionality, such as holding form values.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: redux-thunk is a middleware that allows action-creators to dispatch action-creator functions rather than actions. redux-thunk can intercept the function and run it, which will asynchronously dispatch more actions. This allows for things like axios calls to dispatch actions based on an API response.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

A: I prefer Redux over Context because I feel that Redux helps to solve the issues of keeping and updating global state, prevents unneeded prop-drilling, and allows for component reusability. Context prevents prop-drilling, but seems to come with other issues that can make an app harder to scale.