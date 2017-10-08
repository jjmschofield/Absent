import React, {Component} from 'react';
import {AbsenceTypes, getReadableTypeName} from '../../Store/Models/Absences/AbsenceTypes';
import {RadioButton} from './RadioButton';
import './AbsenceTypeSelector.css';

export class AbsenceTypeSelector extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedAbsenceType: AbsenceTypes.VACATION
        }
    }

    render() {
        return (
            <ul className="absence-type-selectors">
                {this.renderAbsenceTypeOptions()}
            </ul>
        )
    }

    renderAbsenceTypeOptions(){
        let absenceTypeOptions = [];
        absenceTypeOptions.push(this.getAbsenceTypeOption(AbsenceTypes.VACATION));
        absenceTypeOptions.push(this.getAbsenceTypeOption(AbsenceTypes.TRAINING));
        absenceTypeOptions.push(this.getAbsenceTypeOption(AbsenceTypes.PRESENT,"Remove"));
        return absenceTypeOptions;
    }

    getAbsenceTypeOption(absenceType, label){
        let controlId = "absence-type-selector-" + absenceType;
        if(!label) label = getReadableTypeName(absenceType);

        return(
            <li key={absenceType}>
                <RadioButton
                    id={controlId}
                    value={absenceType}
                    label={label}
                    toggleHandler={()=>this.optionSelectedHandler(absenceType)}
                    name="absence-type-selector"
                    checked={this.optionIsCurrentlySelected(absenceType)}
                />
            </li>
        );
    }

    optionIsCurrentlySelected(absenceType){
        return absenceType === this.state.selectedAbsenceType;
    }

    optionSelectedHandler(absenceType){
        this.setState({
           selectedAbsenceType: absenceType
        });
    }

}

export default AbsenceTypeSelector;



