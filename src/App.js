import React, {Component} from 'react';
import {ViewHeader, ViewContent, ViewFooter} from './Components/View/index';
import {getDatesAfter} from './Store/Helpers/DateHelpers'
import './App.css';

export class App extends Component {
    constructor(props){
        super(props);
        this.props.setVisibleDates(getDatesAfter(new Date(2016, 9, 20), 31));
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
