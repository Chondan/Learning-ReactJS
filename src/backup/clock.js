import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    name = "Chondan Susuwan";
    element = [<h1 key={0}>Hello World</h1>, <h1 key={1}>How are you?</h1>];
    state = { check: 0 };

    tick() {
        setInterval(() => {
            this.setState({ check: this.state.check + 1 });
        }, 1000)
    }

    toggle() {
        if (this.state.check % 2 === 1) {
            return(
                <div>
                    <Welcome name={this.name} />
                    <AnotherWelcome name={this.name} />
                    <Clock />
                </div>
            );
        }
        return(
            <div>
                {this.element}
                <Welcome name={this.name} />
                <AnotherWelcome name={this.name} />
            </div>
        );
    }
    
    render() {
        return(
            <div>
                {this.toggle()}
            </div>
        );
    }
}

class AnotherWelcome extends React.Component {
    render() {
        return(
            <h1>Hi, {this.props.name}</h1>
        );
    }
}

function Welcome(props) {
    return(
        <h1>Hello, {props.name}</h1>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dateTime: new Date().toTimeString()};
        this.name = "Chondan";
        console.log("Constructor");
    }
    name = "";

    tick() {
        setInterval(() => {
            this.setState({
                dateTime: new Date().toTimeString(),
            });
            console.log("tick");
        }, 1000);
    }

    componentDidMount() {
        // The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
        this.timerID = this.tick();
        console.log(this.name);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    render() {
        return(
            <h1>This time is {this.state.dateTime}</h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

console.log("hell0");

export {Clock as default};