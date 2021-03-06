	REACT.JS

React.JS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.

* CodeSandbox.io is one of the best tool or online React editor.
* Every react app have a <div> tab with an id="root" so everything that we create using React is going to be inserted inside this div

* Babeljs.io is a JavaScipt compiler. It is used to convert the JavaScript code of ES6, 7, 8 and higher vesions and compile it down to ES5 version.

* By using import and export keyword we can modularise the dependencies.
* We can add any JavaScript expression inside the curly braces {} inside the HTML code.

* Any unit of code that can be evaluated to a value is an expression.
* A statement is an instruction to perform a specific action.

* HTML attributes should be changed to camel case version for JSX
* If we add "?grayscale" to our img url then it will chnage all the images to grayscale.

* React components allow us to split up a large file or a complex web structure into smaller components.

* To dont get confuse between opening and closing of tags always use self closing tags <Heading />
 
* When we make another JSX file then we have to add line:
export default functionName;

If we add paranthesis after functionName then it will return the output immediately.
 
* We have two choices on which module system we can use:

1. Importing modules using require, and exporting using module.exports and exports.foo.
2. Importing modules using ES6 import, and exporting using ES6 export

* If we use this syntax:-
import * from "fileName"  
then this basically imports everything but you have to give it a name so that you can use it in your file.

#Installing React in Local Environment:-
For installing React in you local environment[Mac] fulfill these requirements:-

1. Check Node is Up to Date
2. Install VSCode
3. Create React App (npx create-react-app my-app)
4. Run App  (run my-app)

* react-scripts is a module that's going to help us run our React app locally and serve it up in our browser.

#PROPS in React.JS

“Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

* As we have our custom components and we can create as many of these properties or props as we wish, we can name them as we like , nobody has defined them ahead of time.

React DevTools:-

React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools. You will get two new tabs in your Chrome DevTools: "⚛️ Components" and "⚛️ Profiler".

* map() function:-

* For every item in the array, it gives us the item itself in person and the position of the item in index.

*It creates a new anonymous function (that's the => part) that receives those two things as a parameter and will return a value of the modified data.

*It uses the input element to create some JSX based on the person.

If you save the file and look in your browser, you'll probably see ten greeting messages in there so it looks like everything is working. But if you open your browser's error console you'll see a large warning: Each child in an array or iterator should have a unique "key" prop.

That error is pretty clear, but just in case you're not sure what it means here goes: if you use a loop like we're doing here (with map()) you need to give every top-level item printed by that loop a key attribute that identifies it uniquely. The reason for this is called reconciliation and it becomes very important when you make more advanced apps – and can cause some really weird bugs if you don't understand it fully!

* We can't use key property in usage to show the property of key in our React App.

#ARROW FUNCTIONS:-
Arrow functions – also called “fat arrow” functions, from CoffeeScript (a transcompiled language) — are a more concise syntax for writing function expressions. 

Before:
hello = function() {
  return "Hello World!";
}

With Arrow Function:
hello = () => {
  return "Hello World!";
}


* Ternary Operator:-

CONDITION ? DO IF TRUE : DO IF FALSE

* && in JS

(EXPRESSION && EXPRESSION)

#Declarative Programming:-
Declarative programming is a programming paradigm — a style of building the structure and elements of computer programs—that expresses the logic of a computation without describing its control flow.

#Imperative programming:-
Imperative programming is a programming paradigm that uses statements that change a program's state.

#Hooks:-

Hooks are the functions that allow us to hook into the state of our app and read or modify it.

* One of the rules for using hooks is that you must use a hook inside a functional component.

useState() :- useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

A Hook is a special function that lets you “hook into” React features.

* Destructuring of array:-
const [] = value;

* Destructuring of Object:-
const {} = value;

The names inside the destructuring of object should match with the properties of the object.

Alternative way for destructuring of object
Eg:- const {name: catName, sound:catSound} = cat;

* For event handling in React we have to look for HTML events but in camelCasing

Forms in React:-

Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth.
With a controlled component, the input’s value is always driven by the React state.
A controlled component is a react component that controls the values of input elements in a form using setState().

* Form component quickly refreshes the app. This is the default behavior of form components in HTML. They refresh in order to submit, make a post request or make a get request and refreshes the page.

* If the button is of type="submit" in the form component then it actually triggers a method on the form called onSubmit.

* event.preventDefault() is a method that basically prevents the default next behavior of the event.

# Difference between Class and Hooks:-

//Class
class App extends React.Component {
	render(){
		return <h1>Hello</h1>
	}
}

export default App;

//Hooks
function App(){
	return <h1>Hello</h1>
}

export default App;

* Uncontrolled Components:-
Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, you use a ref to retrieve values from the DOM.




