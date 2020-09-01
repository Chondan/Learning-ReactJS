import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './mystyle.module.css';
import Car from './car';
import './mysass.scss';

// ----- React CSS
// There are many ways to style React with CSS, this tutorial will take a closer look at inline styling and CSS stylesheet
// --- Inline Styling
// To style an element with the inline style attribute, the value must be a JavaScript object
// Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript object also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}
// --- camelCased Property Names
// Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax
// --- JavaScript Object
// You can also create an object with styling information, and refer to in in the style attribute
const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
}
// --- CSS Stylesheet
// You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application
// --- CSS Module
// Another way of adding styles to your application is to use CSS Module
// CSS Module are convenient for components that are placed in separate files
// The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts


class App extends React.Component {
    render() {
        return(
            <div>
                <h1 style={{ color: "red", backgroundColor: "yellow", }}>Hello world</h1>
                <h2 style={myStyle}>How are you?</h2>
                <h2 id={styles.pink}>PINK</h2>
                <Car />
                <div className="box">BOX</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);