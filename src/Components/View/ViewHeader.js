import React, {Component} from 'react';
import {LogoIcon} from '../Icons/index';
import {Button} from '../Inputs/Button';
import TeamCalendarSceneToolbar from '../Calendars/TeamAbsenceCalendar/TeamAbsenceCalendarDateControlContainer';
import {AbsenceTypeSelector} from '../Inputs/AbsenceTypeSelector';
import './ViewHeader.css';

export class ViewHeader extends Component {

    render() {
        return (
            <header className="page-header mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <div className="mdl-layout-title">
                        <LogoIcon />
                        &nbsp;Absent - Plan your leave
                    </div>
                    <div className="mdl-layout-spacer"></div>
                    <TeamCalendarSceneToolbar />
                    <div className="mdl-layout-spacer"></div>
                    <Button><i className="material-icons">mode_edit</i></Button>
                </div>
                <div className="toolbar mdl-layout__header-row">
                    <div className="mdl-layout-spacer"></div>
                    <AbsenceTypeSelector />
                </div>
            </header>
        )
    }

}

export default ViewHeader;
