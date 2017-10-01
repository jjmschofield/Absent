import React, {Component} from 'react';
import {isWeekend} from '../../../Store/Helpers/DateHelpers';

export class UserAbsenceRow extends Component {

    render() {
        return this.renderUserRow();
    }

    renderUserRow() {
        return (
            <tr key={this.props.user.id} className="user-days">
                <td className="mdl-data-table__cell--non-numeric">
                    <label>{this.props.user.name}</label>
                </td>
                {this.getUserDays(this.props.user)}
            </tr>
        )
    }

    getUserDays() {
        let columns = [];

        for (let i = 0; i < this.props.dates.length; i++) {
            let date = this.props.dates[i];
            let absenceClasses = this.getAbsenceClasses(date);

            columns.push(
                <td key={i} className={this.getUserDayConditionalClasses(date)}>
                    {date.getDate()}
                    <div className={"AM " + absenceClasses.am}></div>
                    <div className={"PM " + absenceClasses.pm}></div>
                </td>
            )
        }

        return columns;

    }

    getAbsenceClasses(date) {
        let classes = {
            am: "",
            pm: "",

        };

        let userAbsences = this.props.absences[date.getTime()];

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

export default UserAbsenceRow;


