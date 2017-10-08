import React, {Component} from 'react';
import {LogoIcon} from '../Icons/index';
import AbsenceEditModeToggleButton from '../Inputs/AbsenceEditModeToggleButtonContainer';
import TeamCalendarSceneToolbar from '../Calendars/TeamAbsenceCalendar/TeamAbsenceCalendarDateControlContainer';
import AbsenceEditToolBar from '../Toolbars/AbsenceEditToolbarContainer';
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
                    <AbsenceEditModeToggleButton />
                </div>
                <AbsenceEditToolBar />
            </header>
        )
    }

}

export default ViewHeader;
