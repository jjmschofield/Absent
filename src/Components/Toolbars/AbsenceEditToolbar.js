import React, {Component} from 'react';
import {AbsenceTypeSelector} from '../Inputs/AbsenceTypeSelector';
import './AbsenceEditToolbar.css';

export class AbsenceEditToolBar extends Component {
    render() {
        return (
            <div className="absence-edit-toolbar mdl-layout__header-row">
                <div className="mdl-layout-spacer"></div>
                <AbsenceTypeSelector
                    selectedAbsenceType={this.props.selectedAbsenceType}
                    absenceTypeSelectedHandler={(absenceType)=>this.setAbsenceEditSelectedType(absenceType)} />
            </div>
        )
    }

    setAbsenceEditSelectedType(absenceType){
        if(absenceType !== this.props.selectedAbsenceType){ //We wrap this to prevent multiple duplicate updates to state due to the MDL double click event bug in Checkbox
            this.props.setAbsenceEditSelectedType(absenceType);
        }
    }
}

export default AbsenceEditToolBar;