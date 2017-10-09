import React, {Component} from 'react';
import {} from '../../../Store'
import {TeamAbsenceTableBody} from './TeamAbsenceTableBody';
import {TeamAbsenceTableHeader} from './TeamAbsenceTableHeader';
import './TeamAbsenceCalendar.css';

export class TeamAbsenceCalendar extends Component {

    render() {
        if (!this.props.users.isFetching && !this.props.absences.isFetching) {
            return (
                <table className={this.getClassNames()}>
                    <TeamAbsenceTableHeader dates={this.props.dates}/>

                    <TeamAbsenceTableBody dates={this.props.dates}
                                          users={this.props.users}
                                          absences={this.props.absences}
                                          currentUserId={this.props.currentUserId}
                    />
                </table>
            )
        }
        else {
            return null;
        }
    }

    getClassNames() {
        let classNames = ["absences-calendar mdl-data-table mdl-js-data-table"];
        if (this.props.editMode) {
            classNames.push("edit-mode");
        }
        return classNames.join(" ");
    }
}

export default TeamAbsenceCalendar;


