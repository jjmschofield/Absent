import React, {Component} from 'react';
import {AbsenceTypes} from '../../Store/Models/Absences/AbsenceTypes';
import {Absence} from '../../Store/Models/Absences/AbsenceModel';
import {HttpMethodTypes} from '../../Store/Helpers/ApiHelpers';

export class AbsenceUnitCell extends Component {

    render() {
        return (
            <div
                className={this.getAbsenceClasses()}
                title={this.getTitle()}
                onClick={() => this.clickHandler()}
            >
            </div>
        )
    }

    getAbsenceClasses() {

        let classes = [];

        if (this.props.unit === "AM") {
            classes.push("AM");
        }
        else if (this.props.unit === "PM") {
            classes.push("PM");
        }

        if (this.props.absence) {
            classes.push("booked");
            classes.push("absence-type-" + this.props.absence.type)
        }

        return classes.join(" ");
    }

    getTitle() {
        let title = this.props.unit;

        if (this.props.absence) {
            title += ": Absent for " + this.props.absence.typeName;
        }
        else {
            title += ": Present";
        }

        return title;
    }

    clickHandler() {
        if (this.canInteract()) {
            if (this.isNewAbsence()) this.addNewAbsence();
            else if (this.isRemoveAbsence()) this.removeAbsence();
            else if (this.isUpdatedAbsence()) this.updateAbsence();
        }
    }

    canInteract() {
        return this.props.editMode && this.props.user.id === this.props.currentUserId;
    }

    isNewAbsence(){
        return (
            !this.props.absence
            && this.props.selectedAbsenceEditType !== AbsenceTypes.PRESENT
        )
    }

    isRemoveAbsence(){
        return (
            this.props.absence
            && (
                this.props.selectedAbsenceEditType === AbsenceTypes.PRESENT
                || this.props.absence.type === this.props.selectedAbsenceEditType
            )
        );
    }

    isUpdatedAbsence(){
        return (
            this.props.absence
            && this.props.selectedAbsenceEditType !== AbsenceTypes.PRESENT
            && this.props.absence.type !== this.props.selectedAbsenceEditType
        )
    }

    addNewAbsence(){
        this.props.addAbsence(
            new Absence(
                null,
                this.props.user.id,
                this.props.date,
                this.props.unit,
                this.props.selectedAbsenceEditType
            )
        );
    }

    removeAbsence(){
        if(this.props.absence.type !== AbsenceTypes.PUBLIC_HOLIDAY){ //TODO - we do not allow public holidays to be edited at the moement (as they cannot be re-added)
            this.props.removeAbsence(this.props.absence);
        }
    }

    updateAbsence(){
        if(this.props.absence.type !== AbsenceTypes.PUBLIC_HOLIDAY) { //TODO - we do not allow public holidays to be edited at the moement (as they cannot be re-added)

            let absence = Object.assign({}, this.props.absence,{
                type: this.props.selectedAbsenceEditType
            });

            this.props.updateAbsence(absence);
        }
    }
}

export default AbsenceUnitCell;



