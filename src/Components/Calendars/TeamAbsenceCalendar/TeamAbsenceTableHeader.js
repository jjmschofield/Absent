import React, {Component} from 'react';
import {MonthHeaderRow} from './MonthHeaderRow';
import {DayHeaderRow} from './DayHeaderRow';

export class TeamAbsenceTableHeader extends Component {

    render() {
        return (
            <thead>
            <MonthHeaderRow dates={this.props.dates}/>
            <DayHeaderRow dates={this.props.dates}/>
            </thead>
        )
    }
}

export default TeamAbsenceTableHeader;


