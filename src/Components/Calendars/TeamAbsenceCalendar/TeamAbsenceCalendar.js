import React, {Component} from 'react';
import {} from '../../../Store'
import {TeamAbsenceTableBody} from './TeamAbsenceTableBody';
import {TeamAbsenceTableHeader} from './TeamAbsenceTableHeader';
import './TeamAbsenceCalendar.css';

export class TeamAbsenceCalendar extends Component {

    render() {
        if (!this.props.users.isFetching && !this.props.absences.isFetching) {
            return (
                <table className="absences-calendar mdl-data-table mdl-js-data-table">
                    <TeamAbsenceTableHeader dates={this.props.dates}/>

                    <TeamAbsenceTableBody dates={this.props.dates}
                                          users={this.props.users}
                                          absences={this.props.absences}
                    />
                </table>
            )
        }
        else {
            return null;
        }
    }
}

export default TeamAbsenceCalendar;


