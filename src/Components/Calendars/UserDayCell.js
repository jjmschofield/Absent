import React, {Component} from 'react';
import {isWeekend} from '../../Store/Helpers/DateHelpers';
import AbsenceUnitCell from './AbsenceUnitCellContainer';

export class UserDayCell extends Component {

    render() {
        return (
            <td className={this.getUserDayConditionalClasses()}>
                {this.props.date.getDate()}
                {this.renderAbsenceUnitCell("AM")}
                {this.renderAbsenceUnitCell("PM")}
            </td>
        )
    }

    renderAbsenceUnitCell(unit){
        return(
            <AbsenceUnitCell
                unit={unit}
                absence={this.getAbsenceByUnit(unit)}
                date={this.props.date}
                user={this.props.user}
            />
        );
    }

    getAbsenceByUnit(unit){
        if(this.props.absences){
            for(let i = 0; i <this.props.absences.length; i++){
                let absence = this.props.absences[i];
                if(absence.unit === unit) return absence;
            }
        }
        return null;
    }

    getUserDayConditionalClasses() {
        if (isWeekend(this.props.date)) return "weekend";
        else return "";
    }


}

export default UserDayCell;


