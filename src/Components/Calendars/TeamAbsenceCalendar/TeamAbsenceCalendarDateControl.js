import React, {Component} from 'react';
import {getDatesAfter, getFullMonthName} from '../../../Store/Helpers/DateHelpers';
import {Button} from '../../Inputs/Button';

export class TeamAbsenceCalendarDateControl extends Component {

    constructor(props) {
        super(props);
        this.gotoNextMonth = this.gotoNextMonth.bind(this);
        this.gotoPreviousMonth = this.gotoPreviousMonth.bind(this);
    }

    render() {
        return (
            <div className="team-calendar-date-control mdl-navigation">
                <Button clickHandler={()=>this.gotoPreviousMonth()}>
                    <i className="material-icons">keyboard_arrow_left</i>
                </Button>
                <Button clickHandler={()=>{}}>
                    {this.getLabel()}
                </Button>
                <Button clickHandler={()=>this.gotoNextMonth()}>
                    <i className="material-icons">keyboard_arrow_right</i>
                </Button>
            </div>
        )
    }

    getLabel() {
        let earliestDate = this.props.visibleDates[0];
        let latestDate = this.props.visibleDates[this.props.visibleDates.length - 1];

        let label = getFullMonthName(earliestDate) + " " + earliestDate.getFullYear();

        if (earliestDate.getMonth() !== latestDate.getMonth()) {
            label += " - " + getFullMonthName(latestDate) + " " + latestDate.getFullYear();
        }

        return label;

    }

    gotoNextMonth() {
        this.props.setVisibleDates(
            getDatesAfter(
                this.getNextMonth(),
                31
            )
        )
    }

    getNextMonth() {

        let latestDate = this.props.visibleDates[this.props.visibleDates.length - 1];
        let earliestDate = this.props.visibleDates[0];

        let nextMonth = new Date(latestDate.getFullYear(), latestDate.getMonth(), latestDate.getDate());

        if (nextMonth.getMonth() === earliestDate.getMonth()) {
            nextMonth.setMonth(+1);
        }

        return nextMonth;
    }

    gotoPreviousMonth() {
        this.props.setVisibleDates(
            getDatesAfter(
                this.getPreviousMonth(),
                31
            )
        )
    }

    getPreviousMonth() {
        let earliestDate = this.props.visibleDates[0];

        return new Date(earliestDate.getFullYear(), earliestDate.getMonth() - 1, earliestDate.getDate());

    }


}

export default TeamAbsenceCalendarDateControl;


