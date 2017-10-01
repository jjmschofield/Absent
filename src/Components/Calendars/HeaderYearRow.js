import React, {Component} from 'react';
import {isFirstDayOfYear} from '../../Store/Helpers/DateHelpers'

export class HeaderYearRow extends Component {

    render() {
        return (
            <tr className="year-headers">
                {this.getYearHeaders()}
            </tr>
        )
    }

    getYearHeaders() {
        let columns = [];
        columns.push(this.getYearHeaderSpacer(-1)); //We assume that the first column is always blank

        for (let i = 0; i < this.props.dates.length; i++) {
            let date = this.props.dates[i];

            if (i === 0 || isFirstDayOfYear(date)) {
                columns.push(this.getYearHeaderLabel(date, i));
            }

            else {
                columns.push(this.getYearHeaderSpacer(i))
            }

        }

        return columns;
    }


    getYearHeaderLabel(date, key) {
        return (
            <th key={key} className="span-multiple-columns mdl-data-table__cell--non-numeric">
                <label>
                    {date.getFullYear()}
                </label>
            </th>
        )
    }

    getYearHeaderSpacer(key) {
        return <th key={key} className="mdl-data-table__cell--non-numeric"></th>;
    }

}

export default HeaderYearRow;


