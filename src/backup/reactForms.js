import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// ----- React Forms 
// Just like in HTML, React uses forms to allow users to interact with the web page
// --- Adding Forms in React
// You can add a form with React like any other element
// --- Handling Forms 
// Handling forms is about how you handle the data when it changes value or gets submitted
// In HTML, form data is usually handled by the DOM
// In React, form data is usually handled by the components
// When the data is handled by the components, all the data is stored in the component state
// You can control changes by adding event handlers in the onChange attribute
// --- Conditional Rendering 
// If you do not want to display the h1 element until the user has done any input, you can add an if statement
// --- Submitting Forms
// You can control the submit action by adding an event handler in the onSubmit attribute
// --- Multiple Input Fields
// You can control the values of more than one input field by adding a name attribute to each element
// When you initialize the state in the constructor, use the field names
// Note: We use the same event handler function for both input fields, we could write one event handler for each, 
// but this gives us much cleaner code and is the preferred way in React
// --- Validating Form Input
// You can validate form input when the user is typing or you can wait until the form gets submitted
// --- Textare
// The textarea element in React is slightly different from ordinary HTML
// In HTML the value of textarea was the text between the start tag <textarea> and the end tag </textarea>, 
// In React the value of a textarea is placed in a value attribute
// --- Select 
// A drop down list, or a select box, in React is also a bit different from HTML
// In HTML, the selected value in the drop down list was defined with the selected attribute
// In React, the selected value is defined with a value attirbution on the select tag


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }
    handleChange = (inputName) => {
        this.setState({ name: inputName});
    }
    render() {
        let greeting = null;
        if (this.state.name) {
            greeting = <h2>Hello {this.state.name}, How are you doing?</h2>;
        } else {
            greeting = <h2>What is your Name?</h2>;
        }
        return(
            <div>
                <h1>Hello world</h1>
                {greeting}
                <MyForm onInputChange={this.handleChange} yourName={this.state.name} />
            </div>
        );
    }
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { age: null, errorMessage: "", description: "The content of a textarea goes in the value attribute",
        mycar: "Aston Martin" };
    }
    handleChange(event) {
        const { name, value } = event.target;
        let validateValue = value;
        if (name === "age") {
            if (!Number(value) && value !== "") {
                this.setState({ errorMessage: "Your age must be number" });
                validateValue = value.substring(0, event.target.value.length - 1);
                event.target.value = validateValue;
            } else {
                this.setState( {errorMessage: ""} );
            }
        }
        if (name === "name") {
            this.props.onInputChange(value);
        }
        this.setState({
            [name]: validateValue,
        });
    }
    submitHandler(event) {
        event.preventDefault(); // Note that we use event.preventDefault() to prevent the form from actually being submitted
        if (this.props.yourName && this.state.age) {
            alert(`You are ${this.props.yourName} and You are ${this.state.age} years old. Nice to meet you.`);
            return;
        }
        alert("Enter your name! or your age! or both");
    }
    render() {
        let errorElement = "";
        if (this.state.errorMessage) {
            errorElement = <strong className="errorMsg">{this.state.errorMessage}</strong>
        }
        return(
            <form onSubmit={this.submitHandler.bind(this)}>
                <label>Enter your name: </label>
                <input onChange={this.handleChange.bind(this)} type="text" name="name"></input><br/>
                <label>Enter your age: </label>
                <input onChange={this.handleChange.bind(this)} type="text" name="age"></input><br/>
                <input type="submit" /><br />
                {errorElement}
                <textarea name="description" onChange={this.handleChange.bind(this)} value={this.state.description} /><br />
                <label>Select your dream car: </label>
                <select value={this.state.mycar} onChange={this.handleChange.bind(this)} name="mycar" >
                    <option value="Volvo">Volvo</option>
                    <option value="Aston Martin">Aston Martin</option>
                    <option value="BMW">BMW</option>
                </select>
                
            </form>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);