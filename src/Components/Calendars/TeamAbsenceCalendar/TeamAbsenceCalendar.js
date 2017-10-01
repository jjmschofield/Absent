import React, {Component} from 'react';
import {MonthHeaderRow} from './MonthHeaderRow';
import {DayHeaderRow} from './DayHeaderRow';
import {TeamAbsenceTableBody} from './TeamAbsenceTableBody';

export class TeamAbsenceCalendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dates: getDatesAfter(new Date(2016, 9, 20), 31)
        };
    }

    render() {
        if (!this.props.users.isFetching && !this.props.absences.isFetching) {
            return (
                <table className="absences-calendar mdl-data-table mdl-js-data-table">
                    <thead>
                    <MonthHeaderRow dates={this.state.dates}/>
                    <DayHeaderRow dates={this.state.dates}/>
                    </thead>
                    <TeamAbsenceTableBody dates={this.state.dates} users={this.props.users} absences={this.props.absences} />
                </table>
            )
        }
        else {
            return null;
        }
    }
}

export default TeamAbsenceCalendar;


