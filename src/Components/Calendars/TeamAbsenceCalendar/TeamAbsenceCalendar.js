import React, {Component} from 'react';
import {isWeekend, getDatesAfter} from '../../../Store/Helpers/DateHelpers';
import {MonthHeaderRow} from './MonthHeaderRow';

export class TeamAbsenceCalendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dates: getDatesAfter(new Date(2016, 10, 15), 31)
        }
    }

    render() {
        if (!this.props.users.isFetching && !this.props.absences.isFetching) {
            return (
                <table className="absences-calendar mdl-data-table mdl-js-data-table">
                    <thead>
                    <MonthHeaderRow dates={this.state.dates}/>
                    {this.getDayHeaderRow()}
                    </thead>
                    <tbody>
                    {this.getUserRows()}
                    </tbody>
                </table>
            )
        }
        else {
            return null;
        }
    }

    getDayHeaderRow() {
        return (
            <tr className="day-headers">
                {this.getDayHeaders()}
            </tr>
        )
    }

    getDayHeaders() {
        let columns = [];

        columns.push(
            <th key={-1} className="mdl-data-table__cell--non-numeric"></th>
        );

        for (let i = 0; i < this.state.dates.length; i++) {
            columns.push(
                <th key={i}
                    className={"mdl-data-table__cell--non-numeric" + this.getDayHeaderConditionalClasses(this.state.dates[i])}>
                    {this.state.dates[i].toString().split(' ')[0][0]}
                </th>
            )
        }

        return (
            columns
        )
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

        for (let i = 0; i < this.state.dates.length; i++) {
            let day = this.state.dates[i];
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

    getDayHeaderConditionalClasses(date) {
        let conditionalClasses = "";
        if (isWeekend(date)) {
            conditionalClasses += " weekend";
        }

        return conditionalClasses;
    }

    getUserDayConditionalClasses(date) {
        let conditionalClasses = "";
        if (isWeekend(date)) {
            conditionalClasses += " weekend";
        }

        return conditionalClasses;
    }


}

export default TeamAbsenceCalendar;


