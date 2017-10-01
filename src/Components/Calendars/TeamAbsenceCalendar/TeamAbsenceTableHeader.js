import React, {Component} from 'react';
import {HeaderYearRow} from'../HeaderYearRow';
import {HeaderMonthRow} from '../HeaderMonthRow';
import {HeaderDayRow} from '../HeaderDayRow';

export class TeamAbsenceTableHeader extends Component {

    render() {
        return (
            <thead>
            <HeaderYearRow dates={this.props.dates}/>
            <HeaderMonthRow dates={this.props.dates}/>
            <HeaderDayRow dates={this.props.dates}/>
            </thead>
        )
    }
}

export default TeamAbsenceTableHeader;


