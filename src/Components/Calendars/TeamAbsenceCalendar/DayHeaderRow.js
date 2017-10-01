import React, {Component} from 'react';
import {isWeekend, getFirstLetterDayName} from '../../../Store/Helpers/DateHelpers'

export class DayHeaderRow extends Component {

    render() {
        return (
            <tr className="day-headers">
                {this.getDayHeaders()}
            </tr>
        )
    }
    
    getDayHeaders() {
        let headers = [];

        headers.push(
            <th key={-1} className="mdl-data-table__cell--non-numeric"></th> //We always assume that the first column is blank
        );

        for (let i = 0; i < this.props.dates.length; i++) {
            headers.push(
                this.getDayHeader(this.props.dates[i],i)
            );
        }

        return headers;
    }

    getDayHeader(date, key){
        return (
            <th key={key}
                className={"mdl-data-table__cell--non-numeric " + this.getDayHeaderConditionalClasses(date)}>
                {getFirstLetterDayName(date)}
            </th>
        )
    }

    getDayHeaderConditionalClasses(date) {
        if (isWeekend(date)) return "weekend";
        else return "";
    }

}

export default DayHeaderRow;



