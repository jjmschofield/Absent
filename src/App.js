import React, {Component} from 'react';

class App extends Component {
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
