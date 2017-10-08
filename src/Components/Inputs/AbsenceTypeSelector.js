import React, {Component} from 'react';
import {AbsenceTypes, getReadableTypeName} from '../../Store/Models/Absences/AbsenceTypes';
import './AbsenceTypeSelector.css';

export class AbsenceTypeSelector extends Component {
    
    render() {
        return (
            <ul className="absence-type-selectors">
                {this.renderAbsenceTypes()}
            </ul>
        )
    }

    renderAbsenceTypes(){

        let absenceTypeListItems = [];
        absenceTypeListItems.push(this.getAbsenceTypeListItem(AbsenceTypes.VACATION));
        absenceTypeListItems.push(this.getAbsenceTypeListItem(AbsenceTypes.TRAINING));
        absenceTypeListItems.push(this.getAbsenceTypeListItem(AbsenceTypes.PRESENT,"Remove"));

        return absenceTypeListItems;
    }

    getAbsenceTypeListItem(absenceType, label){
        let controlId = "absence-type-selector-" + absenceType;

        return(
            <li key={absenceType}
                onClick={() => this.typeSelectedHandler(absenceType)}
            >
                <label className={controlId + " mdl-radio mdl-js-radio mdl-js-ripple-effect"} for={controlId}>
                    <input type="radio" id={controlId} className="mdl-radio__button" name="options" value="1" checked />
                        <span className="mdl-radio__label">{label || getReadableTypeName(absenceType)}</span>
                </label>
            </li>
        );
    }

    typeSelectedHandler(absenceType){
        console.log(absenceType);
    }

}

export default AbsenceTypeSelector;



