import React, {Component} from 'react';
import {isWeekend} from '../../../Store/Helpers/DateHelpers';

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
                    <tr key={user.id} className="user-days">
                        <td className="mdl-data-table__cell--non-numeric">
                            <label>{user.name}</label>
                        </td>
                        {this.getUserDays(user)}
                    </tr>
                )
            }
        }
        return (
            rows
        )
    }

    getUserDays(user) {
        let columns = [];

        for (let i = 0; i < this.props.dates.length; i++) {
            let day = this.props.dates[i];
            let absenceClasses = this.getAbsenceClasses(user, day);

            columns.push(
                <td className={this.getUserDayConditionalClasses(day)}>
                    {day.getDate()}
                    <div className={"AM " + absenceClasses.am}></div>
                    <div className={"PM " + absenceClasses.pm}></div>
                </td>
            )
        }

        return (
            columns
        )
    }

    getAbsenceClasses(user, date) {
        let classes = {
            am: "",
            pm: "",

        };

        let userAbsences = this.props.absences.absencesByUserId[user.id][date.getTime()];

        if (userAbsences) {
            userAbsences.forEach((absence) => {
                if (absence.unit === "AM") {
                    classes.am = "booked " + absence.type;
                }
                else if (absence.unit === "PM") {
                    classes.pm = "booked " + absence.type;
                }
                classes.isoDate = absence.isoDate;
            })
        }

        return classes;
    }

    getUserDayConditionalClasses(date) {
        let conditionalClasses = "";
        if (isWeekend(date)) {
            conditionalClasses += " weekend";
        }

        return conditionalClasses;
    }


}

export default TeamAbsenceTableBody;


