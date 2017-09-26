import React, {Component} from 'react';

export class App extends Component {
    constructor(props){
        super(props);
        this.props.fetchUsers();
        this.props.fetchAbsences();
    }

    render() {
        return (
            <div className="app">
                <h1>Hello World</h1>
                <div>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Button
                </button>
                </div>
                <div>
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                    <i className="material-icons">add</i>
                </button>
                </div>
            </div>
        );
    }
}

export default App;
