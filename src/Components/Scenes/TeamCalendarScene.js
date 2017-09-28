import React, {Component} from 'react';
import './TeamCalendarScene.css';

export class TeamCalendarScene extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visibleDays: this.getVisibleDays(31)
        }
    }

    render() {
        return (
            <div className="team-calendar-scene">
                <table className="absences-calendar mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                    {this.getDayHeaderRow()}
                    </thead>
                    <tbody>
                    {this.getUserRows()}
                    </tbody>
                </table>
            </div>
        )
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

        for (let i = 0; i < this.state.visibleDays.length; i++) {
            columns.push(
                <th key={i} className="mdl-data-table__cell--non-numeric">
                    {this.state.visibleDays[i].toString().split(' ')[0]}
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
                    <tr key={user.id} className="user-days mdl-data-table__cell--non-numeric">
                        <td>
                            <label>{user.name}</label>
                        </td>
                        {this.getUserDays()}
                    </tr>
                )
            }
        }
        return (
            rows
        )
    }

    getUserDays() {
        let columns = [];

        for (let i = 0; i < this.state.visibleDays.length; i++) {
            let day = this.state.visibleDays[i];

            columns.push(
                <td className={"mdl-data-table__cell--non-numeric" + this.getUserDayConditionalClasses(day)}>
                    {day.getDate()}
                </td>
            )
        }

        return (
            columns
        )
    }

    getUserDayConditionalClasses(date) {
        let conditionalClasses = "";
        if (this.isWeekend(date)) {
            conditionalClasses += " weekend";
        }

        return conditionalClasses;
    }

    isWeekend(date) {
        if (date.getDay() === 0 || date.getDay() === 6) {
            return true;
        }
    }

    getVisibleDays(numberOfDaysToShow, startDate = new Date()) {
        let days = [];


        for (let i = 0; i < numberOfDaysToShow; i++) {
            days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i)); //Date is in browser time
        }

        return days;
    }

}

export default TeamCalendarScene;


