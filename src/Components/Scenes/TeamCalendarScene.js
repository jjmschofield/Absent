import React, {Component} from 'react';
import {getShortMonth, isWeekend} from '../../Store/Helpers/DateHelpers'
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
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">

                            <table className="absences-calendar mdl-data-table mdl-js-data-table">
                                <thead>
                                {this.getMonthHeaderRow()}
                                {this.getDayHeaderRow()}
                                </thead>
                                <tbody>
                                {this.getUserRows()}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        )
    }

    getMonthHeaderRow() {
        return (
            <tr className="month-headers">
                {this.getMonthHeaders()}
            </tr>
        )
    }

    getMonthHeaders() {
        let columns = [];
        columns.push(<th></th>);

        for (let i = 0; i < this.state.visibleDays.length; i++) {
            if (i === 0 || this.state.visibleDays[i].getDate() === 1) {
                columns.push(
                    <th className="span-multiple-columns mdl-data-table__cell--non-numeric">
                        <label key={i}>{getShortMonth(this.state.visibleDays[i])}</label>
                    </th>
                )
            }
            else{
                columns.push(<th key={i} className="mdl-data-table__cell--non-numeric"></th>)
            }

        }

        return (
            columns
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
                <th key={i} className={"mdl-data-table__cell--non-numeric"  + this.getDayHeaderConditionalClasses(this.state.visibleDays[i])}>
                    {this.state.visibleDays[i].toString().split(' ')[0][0]}
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
                <td className={this.getUserDayConditionalClasses(day)}>
                    {day.getDate()}
                    <div className="AM"></div>
                    <div className="PM"></div>
                </td>
            )
        }

        return (
            columns
        )
    }

    getDayHeaderConditionalClasses(date){
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

    getVisibleDays(numberOfDaysToShow, startDate = new Date()) {
        let days = [];


        for (let i = 0; i < numberOfDaysToShow; i++) {
            days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i)); //Date is in browser time
        }

        return days;
    }

}

export default TeamCalendarScene;


