import React, {Component} from 'react';
import {ViewHeader, ViewContent, ViewFooter} from './Components/View/index';

export class App extends Component {
    constructor(props){
        super(props);
        this.props.fetchUsers();
        this.props.fetchAbsences();
    }

    render() {
        return (
            <div className="app mdl-layout mdl-js-layout">
                <ViewHeader/>
                <ViewContent/>
                <ViewFooter/>
            </div>
        );
    }
}

export default App;
