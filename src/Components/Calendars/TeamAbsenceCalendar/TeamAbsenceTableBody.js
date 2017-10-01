import React, {Component} from 'react';
import {UserDayRow} from '../UserDayRow';

export class TeamAbsenceTableBody extends Component {

    render() {
        return (
            <tbody>
            {this.getUserRows()}
            </tbody>
        );
    }

    getUserRows() {
        let rows = [];

        for (let id in this.props.users.usersById) {
            if (this.props.users.usersById.hasOwnProperty(id)) {
                let user = this.props.users.usersById[id];

                rows.push(
                    <UserDayRow
                        key={user.id}
                        user={user}
                        dates={this.props.dates}
                        absences={this.getAbsences(user)}
                    />
                )
            }
        }

        return rows;
    }

    getAbsences(user){
        let absences = this.props.absences.absencesByUserId[user.id];

        if(absences) return absences;
        else return [];
    }

}

export default TeamAbsenceTableBody;


