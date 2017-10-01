import React, {Component} from 'react';
import {getShortMonth, isFirstDayOfMonth} from '../../../Store/Helpers/DateHelpers'

export class MonthHeaderRow extends Component {

    render() {
        return (
            <tr className="month-headers">
                {this.getMonthHeaders()}
            </tr>
        )
    }

    getMonthHeaders() {
        let columns = [];
        columns.push(this.getMonthHeaderSpacer(-1)); //We assume that the first column is always blank

        for (let i = 0; i < this.props.dates.length; i++) {
            let date = this.props.dates[i];

            if (i === 0 || isFirstDayOfMonth(date)) { //We show month names for the first column and first day of the month
                columns.push(this.getMonthHeaderLabel(date));
            }

            else {
                columns.push(this.getMonthHeaderSpacer(date.timestamp))
            }

        }

        return columns;
    }



    getMonthHeaderLabel(date) {
        let monthName = getShortMonth(date);

        return (
            <th className="span-multiple-columns mdl-data-table__cell--non-numeric">
                <label key={date.timestamp}>
                    {monthName}
                </label>
            </th>
        )
    }

    getMonthHeaderSpacer(key) {
        return <th key={key} className="mdl-data-table__cell--non-numeric"></th>;
    }

}

export default MonthHeaderRow;


