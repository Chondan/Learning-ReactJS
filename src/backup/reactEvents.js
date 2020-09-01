import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello world</h1>
                <Football />
                <div className="football-field">
                    <div id="football">O</div>
                </div>
            </div>
            
        );
    }
}

// ----- React Events
// Just like HTML, React can perform actions based on user events.
// React has the same events as HTML: click, chnage, mouseover etc
// --- Adding Events
// React events are written in camelCase syntax
// onClick instead of onclick
// React event handlers are written inside curly brances
// onClikc={shoot} instead of onclick="shoot()"
// --- Event Handlers
// A good practice is to put the event handler as a method in the component class
// --- Bind this 
// For methods in React, the this keyword should represent the component that owns the method
// That is why you should use arrow functions. With arrow functions, this will always represent the object that defined the arrow function
// --- Why Arrow Functions?
// In class components, the this keyword is not defined by default, so with regular functions the this keyword represents the object that called the method, 
// which can be the global window object, a HTML button, or whatever
// If you must use regular functions instead of arrow functions you have to bind this to the component instance using the bind() method
// Make this available in the function by binding it in the constructor functino
// Without the binding, the this keyword would return undefined
// --- Passing Arguments
// If you want to send parameters into an event handler, you have two options
// 1. Make an anonymous arrow function
// 2. Bind the event handler to this (Note that the first argument has to be this if there is keyword this inside that function)
// Note on the second example: If you send arguments without using the bind method, 
// the function will be executed when the page is loaded insted of waiting for the button to be clickec
// --- React Event Object
// Event handlers have access to the React event that triggered the function
// In our example the event is the 'click' event. 
// With the arrow function you have to send the event argument manually
// Without arrow function, the React event object is sent automatically as the last argument when using the bind() method

class Football extends React.Component {
    constructor(props) {
        super(props);
        this.showMyClass = this.showMyClass.bind(this);
    }
    shoot() {
        const ball = document.getElementById("football");
        ball.style = {};
        setTimeout(() => {
            ball.style.position = "absolute";
            ball.style.animation = "3s shooting ease-in-out";
        }, 0);
    }
    showMyClass() {
        console.log(this);
    }
    showMyName(name, event) {
        console.log(name);
        console.log(event, event.type);
    }
    showMyAge = (age, event) => {
        console.log(age);
        console.log(event, event.type);
    }
    render() {
        return(
            <div>
                {/* No need to bind this because, I am not gonna do things with this class. But it will be a good idea to use arrow function which will always represent the object that defined the arrow function */}
                <button onClick={this.shoot}>Take the shot!</button>
                <button onClick={this.showMyClass}>Show my class</button>
                <button onClick={this.showMyName.bind(null, "Chondan")}>Show my name</button>
                <button onClick={(event) => this.showMyAge(22, event)}>Show my age</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);