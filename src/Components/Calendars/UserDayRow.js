import React, {Component} from 'react';
import {UserDayCell} from './UserDayCell';

export class UserDayRow extends Component {

    render() {
        return this.renderUserRow();
    }

    renderUserRow() {
        return (
            <tr key={this.props.user.id} className={this.getRowClassNames()}>
                <td className="mdl-data-table__cell--non-numeric">
                    <label>{this.props.user.name}</label>
                </td>
                {this.getUserDayCells()}
            </tr>
        )
    }

    getRowClassNames(){
        let classNames = [];
        classNames.push("user-days");

        if(this.props.ownedByCurrentUser){
            classNames.push("owned-by-current-user")
        }

        return classNames.join(" ");
    }

    getUserDayCells() {
        let columns = [];

        for (let i = 0; i < this.props.dates.length; i++) {
            let date = this.props.dates[i];
            columns.push(
                <UserDayCell user={this.props.user} date={date} absences={this.getAbsencesByDate(date)}/>
            )
        }

        return columns;
    }

    getAbsencesByDate(date){
        return this.props.absences[date.getTime()];
    }
}

export default UserDayRow;


