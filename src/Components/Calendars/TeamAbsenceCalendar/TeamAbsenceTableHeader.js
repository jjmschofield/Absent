import React, {Component} from 'react';
import {HeaderMonthRow} from '../HeaderMonthRow';
import {HeaderDayRow} from '../HeaderDayRow';

export class TeamAbsenceTableHeader extends Component {

    render() {
        return (
            <thead>
            <HeaderMonthRow dates={this.props.dates}/>
            <HeaderDayRow dates={this.props.dates}/>
            </thead>
        )
    }
}

export default TeamAbsenceTableHeader;


