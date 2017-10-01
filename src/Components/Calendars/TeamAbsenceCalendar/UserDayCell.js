import React, {Component} from 'react';
import {isWeekend} from '../../../Store/Helpers/DateHelpers';
import {AbsenceUnitCell} from './AbsenceUnitCell';

export class UserDayCell extends Component {

    render() {
        return (
            <td className={this.getUserDayConditionalClasses()}>
                {this.props.date.getDate()}
                <AbsenceUnitCell unit="AM" absence={this.getAbsenceByUnit("AM")}/>
                <AbsenceUnitCell unit="PM" absence={this.getAbsenceByUnit("PM")}/>
            </td>
        )
    }

    getAbsenceByUnit(unit){
        if(this.props.absences){
            for(let i = 0; i <this.props.absences.length; i++){
                let absence = this.props.absences[i];
                if(absence.unit === unit) return absence;
            }
        }
        return null
    }

    getUserDayConditionalClasses() {
        if (isWeekend(this.props.date)) return "weekend";
        else return "";
    }


}

export default UserDayCell;


