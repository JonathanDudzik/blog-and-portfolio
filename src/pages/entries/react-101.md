---
title: 'React Cliff Notes'
---

## Spinning up a basic React and Typescript App
Using Vite with Yarn: `yarn create @vitejs/app`
Install dependencies: `yarn`
Fire up dev server: `yarn dev`

## Clean up default app
**The summary:**
1. Remove specific css
1. Remove logo
1. Add *MVP.css*

**Note**  
Some time will need to be spent getting your newly created App to ground zero. Removing the logo and css caused errors and require you to surgically remove references to those files from the various components.

## Getting some data to work with
**The Summary:**
1. Had to brush up on hooks knowledge
1. Had to brush up on useEffect knowledge
1. Had to setup a Google API key 
1. Had to enable Google Fonts API for my project

**Details**  
You decided to use the Fetch api because there are no dependencies to download.  
You were trying to figure out how to get data for your app, but most tutorials were using lifecycle methods (for class components).  
You did learn that functional components use Hooks and particularly, the useEffect hook is used to get data within a functional component.  
You also needed an easy API that was cross origin enabled. It seems that Google APIs are cross origin enabled.  

## Failed attempts to work with your data
**Summary**
1. Async functions ALWAYS return a promise
1. Updating useState to the return value of an async function sets the state to the promise (not the promise’s value).
1. Updating useState inside of an async function allows the actual values contained within the promise to be assigned to the state of useState

**Details**  
If the return value of an async function is not explicitly a promise (for example, `return 1`), it will be implicitly wrapped in a promise.  
When useState is set to the returned promise, it seems to automatically unwrap the value of the promise.  
useState is out of scope when putting the function for fetching data outside of your React component. This greatly complicates using the value from the promise in your component. Update: use a custom Hook.  

This updates useState to the value you want, not the promise containing the value:
``` 
 function App() {
 // this will be an array of font families
  const [fonts, setFonts] = useState({});
 
  // This call must go inside the function and it will get access to props
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBRqbPidmPw9hENJlnUSYXGPOMDMvMacio');
      const newData = await response.json();
      setFonts(newData);
    }
    
    fetchData();
  }, []);
 
  if (fonts) {
    console.log(fonts.items);
  } else {
    console.log("nothing");
  }
 
// Return some jsx…
}
```

This will update useState to a promise
```
const fetchData = async () => {
  const response = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBRqbPidmPw9hENJlnUSYXGPOMDMvMacio');
  const newData = await response.json();
  return newData;
}
 
function App() {
  // this will be an array of font families
  const [fonts, setFonts] = useState({});
 
  // This call must go inside the function and it will get access to props
  useEffect(() => {
    setFonts(fetchData());
  }, []);
 
// Return some jsx…
}
```
**Note:**   
You also learned that React rerenders the entire component function (not just the render method) every time that setState() is called. This is how the reactivity works.

## Filtering the Data
**Summary**
1. Provide the long syntax for map() to clear up what is happening
1. You used async await, a normal synchronous function, and promise syntax to keep your heavy lifting functions outside of the component and more pure (not 100% pure because the return may be different even with the same inputs)
1. Returning a value from an async function allows you to use it’s return value as a regular promise

**Note**  
useMemo: If the watched variables don’t change, it doesn’t matter if our entire component re-renders, the function won’t re-run but instead return the stored result.

## React hooks
Hooks allow us to use state in a functional component.
Three common hooks:
useState() allows us to use state within a functional component
useEffect() will run code when a component renders or re-renders
useContext() will consume context in a functional component

React hooks are the replacement for object based lifecycle methods and allow you to use state and do things inside of components. Will any changes to the DOM rerun useEffect?

### useEffect
https://reactjs.org/docs/hooks-effect.html

useEffect will run on initial render as well as each time the DOM updates. WILL AN UPDATE BE TRIGGERED IF IT IS ONLY A CHILD OR PARENT RE-RENDERING OR UPDATING?

The useEffect hook performs data fetching, subscriptions, or manually changing the DOM from React components. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering (they happen after render).

Effects are declared inside the component so they have access to its props and state.

## React Context
Functional components can access context through the useContext hook. This is the way that Josiah is doing it. 

The Net Ninja has a great tutorial on changing class based components to functional components when those components consume or provide context. The video on creating context with functional components starts of #15 of the React Context and Hooks series.

Steps to creating context with a functional component:
Import createContext and useState in addition to React
Create your context object
Create your functional component that will be the context provider. The provider component uses its value property to provide context changes to children components
Make sure you take the props component into the functional component’s params (so you can render the children
Create state that will be injected into the provider’s value prop. This state often takes the form of useState so that it can be changed
Return the provider jsx that will also include the prop.children
Add your provider component around the components that will need access to the context
Grab the context from within a consuming component with useContext() and do something with it!

## Further React Reading
https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often 
https://reactjs.org/docs/hooks-rules.html
https://reactjs.org/docs/hooks-state.html 
https://reactjs.org/docs/hooks-custom.html 
https://betterprogramming.pub/understanding-the-useeffect-dependency-array-2913da504c44
https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
https://reactjs.org/docs/context.html
