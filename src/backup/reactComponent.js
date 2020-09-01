import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// ----- React Components
// Components are like functions that return HTML elements
// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function

// --- Create a Class Component
// When creating a React component, the component's name must start with an upper case letter
// The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's function
// The component also requires a render() method, this method returns HTML

// --- Component Constructor
// If there is a constructor() function in your component, this function will be called when the component gets initiated
// The constructor function is where you initiate the component's properties
// In React, component properties should be kept in an object called state
// The constructor function is also where you honor the inheritance of the parent component by including the super() statement, 
// which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component)

// --- Props
// Another way of handling component properties is by using props
// Props are like function arguments, and you send them into the component as attributes

// --- Components in Components
// We can refer to components inside other components

// --- Components in Files
// React is all about re-using code, and it can be smart to insert some of your components in seperate files
import Clock from './backup/clock';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
        }
    }

    render() {
        const ownerName = this.props.yourName;
        return(
            <div>
                <h1>Hello {this.props.yourName}, How are you?</h1>
                <Car carColor={this.state.color} owner={ownerName} />
                <Clock />
                {myBlueCar}
                <Camera />
            </div>
        );
    }
}
// --- Creat a Function Component
// A Function component also returns HTML, and behaves pretty much the same way as a Class component, 
// but Class components have some additions, and will be preferred in this tutorial
class Car extends Component {
    haveOwner(owner) {
        if (owner) {
            return(
                <div>
                    <h2>I am Car component. I am in {this.props.carColor}</h2>
                    <h3>{this.props.owner} own me</h3>
                </div>
            );
        }
        return(
            <div>
                <h2>I am Car component. I am in {this.props.carColor}</h2>
                <h3>Buy me please!!!!</h3>
            </div>
        );
        
    }
    render() {
        return(
            <div>
                {this.haveOwner(this.props.owner)}
            </div>
            
        );
    }
}

// ----- React Props
// Props are arguments passed into React components, Props are passed to components via HTML attributes
const myBlueCar = <Car carColor="blue" />;

// --- Pass Data
// Props are also how you pass data from one component to another, as parameter

// --- Props in the Constructor
// If your component has a constructor function, the props should always be passed to the constructor and also the React.Component via the super() method
// Note: React props are read-only! you will get an error if you try to change their value

// ----- React State
// React components has a built-in state object
// The state object is where you store property values that belongs to the component
// When the state object changes, the component re-renders

// --- Creating the state Object
// The state object is initialized in the constructor
// The state object can contain as many properties as you like

// --- Using the state Object
// Refer to the state object anywhere in the component by using the this.state.propertyname syntax

// --- Changing the state object 
// To change a value in the state object, use the this.setState() method.abs
// When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s)

// Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods)

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cameras: [
                {
                    brand: "Olympus", model: "omd em10 mark ii",
                },
                {
                    brand: "Minolta", model: "srt super",
                },
            ],
        }
    }

    showAllOfCameras() {
        let cameraList = [];
        this.state.cameras.forEach((camera, index) => {
            const list = <li key={index}>{camera.brand + " " + camera.model}</li>;
            cameraList = [...cameraList, list];
        })
        return cameraList;
    }
    updateCamera = () => {
        const newState = { cameras: [ { brand: "Minolta", model: "srt 100x" } ] };
        this.setState(newState);
    }
    BackToTheFirstCamera() {
        const newState = { cameras: [{brand: "Olympus", model: "omd em10 mark ii"},{brand: "Minolta", model: "srt super",},], };
        this.setState(newState);
    }
    render() {
        return(
            <div>
                <h2>These are my cameras</h2>
                <ul>
                    {this.showAllOfCameras()}
                </ul>
                <button onClick={this.updateCamera}>Change my camera list</button>
                <button onClick={this.BackToTheFirstCamera.bind(this)}>Change back</button>
            </div>
        );
    }
}



ReactDOM.render(
    <App yourName="Chondan" />,
    document.getElementById("root")
);