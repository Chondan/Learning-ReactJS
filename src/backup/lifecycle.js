import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { name: "" };
    setName(yourname) {
        const newname = { name: yourname };
        this.setState(newname);
    }   
    // ----- Component Lifecycle
    // --- componentWillMount -> Immediately before initial rendering
    UNSAFE_componentWillMount() {
        console.log("componentWillMount");
        this.setState({ name: "Initial Name" });
    }
    // --- componentDidMount -> Immediately after initial rendering
    componentDidMount() {
        console.log("componentDidmount");
        console.log("The initial name was set");
    }
    // --- componentWillReceiveProps -> When component receives new props
    UNSAFE_componentWillReceiveProps() {

    }
    render() {
        console.log("rendered", this.state.name);
        return(
            <div>
                <SetName handleChange={this.setName.bind(this)} />
                <DisplayName name={this.state.name} />
            </div>
        );
    }
}

class SetName extends React.Component {
    initialName = "";
    state = { name: "" };
    setNameFromInput(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }
    handleClick() {
        this.props.handleChange(this.state.name);
        this.setState({
            name: this.initialName,
        })
    }
    render() {
        const { name } = this.state;
        return(
            <div>
                <input name="name" onChange={(event) => this.setNameFromInput(event)} value={name}></input>
                <button onClick={() => this.handleClick()}>Click me to change the name</button>
            </div>
        );
    }
}

class DisplayName extends React.Component {
    
    UNSAFE_componentWillReceiveProps() {
        console.log("componentWillReceiveProps", this.props.name);
    }

    shouldComponentUpdate() {
        if (!this.props.name) {
            console.log(this.props.name, false);
            return false;
        }
        console.log(this.props.name, true);
        return true;
    }

    render() {
        return(
            <h1>Hello {this.props.name}</h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);