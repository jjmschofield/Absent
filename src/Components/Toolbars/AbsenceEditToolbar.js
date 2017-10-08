import React, {Component} from 'react';
import {AbsenceTypeSelector} from '../Inputs/AbsenceTypeSelector';
import './AbsenceEditToolbar.css';

export class AbsenceEditToolBar extends Component {
    render() {
        return (
            <div className="absence-edit-toolbar mdl-layout__header-row">
                <div className="mdl-layout-spacer"></div>
                <AbsenceTypeSelector />
            </div>
        )
    }
}

export default AbsenceEditToolBar;