import React from 'react';
import ReactDOM from 'react-dom';

const elem = <h1>Hello world</h1>;
ReactDOM.render(
    elem,
    document.getElementById("root")
);
// ----- The Root Node 
// The root node is the HTML element where you want to display the result. It is like a container for content managed by React.
// It does NOT have to be a <div> element and it does NOT have to have the id='root'
ReactDOM.render(
    elem,
    document.getElementById("root2")
);

// ----- React JSX
// What is JSX? 
// JSX stands for JavaScript XML, JSX allow us to write HTML in React, JSX make it easier to write and add HTML in React
// --- Coding JSX
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods
// JSX converts HTML tags into react elements
// --- With JSX
const myelement = <h1>I Love JSX!</h1>
ReactDOM.render(
    myelement, 
    document.querySelector("div#root3")
);
// --- Without JSX
const myelementWithOutJSX = React.createElement(
    'h1', {}, ['I do not use JSX!', 'I do not use JSX!']
);
ReactDOM.render(
    myelementWithOutJSX, 
    document.querySelector("div#root4")
);
// As you can see in the first example, JSX allows us to write HTML directly withing the JavaScript code.
// JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime
// --- Expressions in JSX
// With JSX you can write expressions inside curly braces {}.
const a = 5, b = 6;
const sumOfFiveAndFive = <p>The sum of 5 and 6 is { a + b }</p>;
// --- Inserting a Large block of HTML
const listOfFruits = (
    <div>
        {sumOfFiveAndFive}
        <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Cherries</li>
        </ul>
    </div>
);
ReactDOM.render(
    listOfFruits,
    document.getElementById("test")
);
// --- One Top Level Element
// The HTML code must be wrapped in ONE top level element
// So if you like to write two headers, you must put them inside a parent element, like a div element

// --- Elements Must be Closed
// JSX follows XML rules, and therefore HTML elements must be properly closed
const inputElem = <input type="text" />;

// ----------------- PUT ELEMENTS HERE -------------------
const myElement = (
    <div>
        <h1>I am a Header</h1>
        <h1>I am a Header too</h1>
        {inputElem}

    </div>
);
ReactDOM.render(
    myElement,
    document.getElementById("myelem")
);