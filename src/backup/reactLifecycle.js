import React from 'react';
import ReactDOM from 'react-dom';

// ----- React Lifecycle
// Each component in React has a lifecycle which you can monitor and manipulate during its three main phrases
// The three phrease are: Mounting, Updating, and Unmounting

// --- Mounting 
// Mounting means putting elements into the DOM
// React has four built-in methods that gets called, in this order, when mounting a component:
// 1. constructor()
// 2. getDerivedStateFromProps()
// 3. render()
// 4. componentDidmount()
// The render() method is required and will always be called, the others are optional and will be called if you define them
// -- constructor
// The constructor() method is called before anthing else, when the component is initiated, 
// and it is the natural palce to set up the initial state and other initial values
// The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything eles,
// this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component)
// -- getDerivedStateFromProps
// The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM
// This is the natural place to set the state object based on the initial props
// -- render
// The render() method is required, and is the method that actually outputs the HTML to the DOM
// -- ComponentDidMount 
// The componentDidMount() method is called after the component is rendered
// This is where you run statements that requires that the component is already placed in the DOM

// --- Updating
// The next phrase in the lifecycle is when a component is updated
// A component is updated whenever there is a change in the component's state or props 
// React has five built-in methods that gets called, in this order, when a component is updated
// 1. getDerivedStateFromProps()
// 2. shouldComponentUpdate()
// 3. render()
// 4. getSnapshotBeforeUpdate()
// 5. componentDidUpdate()
// -- shouldComponentUpdate()
// In the shouldComponentUpdate() method you can return a Boolean value that specifies wheter React should continue with the rendering or not 
// The default value is true
// -- getSnapshotBeforeUpdate
// In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update
// If the getSnapshotBeforeUpdate() method is present, you should also include the componenDidUpdate() method, otherwise you will get an error
// -- componentDidUpdate
// The componentDidUpdate method is called after the component is updated in the DOM

// --- Unmounting
// The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it
// React has only one built-in method that gets called when a component is unmounted
// -- componentWillUnmount()
// The componentWillUnmount() method is called when the component is about to be removed from the DOM

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Chondan",
            count: 0,
            showHobbies: true,
        }
        console.log("constructor");
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    hobbyToggle = () => {
        console.log("clicked");
        if (this.state.showHobbies) {
            this.setState({ showHobbies: false });
            return;
        }
        this.setState({ showHobbies: true });
    }
    // ComponentDidMount
    componentDidMount() {
        console.log("componentDidMount", window, document);
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 3000);
    }
    // ----- Update Phase
    // shouldComponentUpdate()
    shouldComponentUpdate() {

        if ((this.state.count + 1) % 2 === 0) {
            console.log("shouldComponentUpdate", false);
            return false;
        }
        console.log("shouldComponentUpdate", true);
        return true;
    }
    // componentWillUpdate -> error while using along with getSnapshotBeforeUpdate() and componentDidUpdate()
    // componentWillUpdate() {
    //     console.log("componentWillUpdate", this.state.count + 1);
    // }

    // getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", "Before the update, the value was " + prevState.count);
        return null;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate", "The update value is " + this.state.count);
    }
    render() {
        console.log("App rendered");
        let myHobbies = null, msg = null;
        if (this.state.showHobbies) {
            myHobbies = <Hobby />;
            msg = "Click me to hide my hobbies";
        } else {
            myHobbies = <p>My hobbies are hidden.</p>
            msg = "Click me to show my hobbies";
        }
        return(
            <div>
                <h1>Hello {this.state.name}, How are you?</h1>
                <label>Click button to plus 1 (wait 3 second to let the auto increase complete): </label><button onClick={this.increment}>{this.state.count}</button>
                <CurrentlyNumber currentNum={this.state.count} />
                <p>In the above example, I set the return of shouldComponentUpdate() method to false to show only odd number</p>
                {myHobbies}
                <button onClick={this.hobbyToggle}>{msg}</button>
            </div>
        );
    }
}

function CurrentlyNumber(props) {
    console.log("CurrentlyNumber rendered");
    // A component is updated whenever there is a change in the component's state or props
    return(
        <div>
            <p>Currently number is {props.currentNum}</p>
        </div>
    );
}

class Hobby extends React.Component {
    componentWillUnmount() {
        console.log("My hobbies are about to be unmounted");
    }
    render() {
        return(
            <div>
                <h3>My hobbies are playing football, taking photos, playing guitar and listening to music.</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
