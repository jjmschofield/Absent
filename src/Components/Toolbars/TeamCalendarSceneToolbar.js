import React, {Component} from 'react';
import AbsenceEditModeToggleButton from '../Inputs/AbsenceEditModeToggleButtonContainer';
import TeamAbsenceCalendarDateControl from '../Calendars/TeamAbsenceCalendar/TeamAbsenceCalendarDateControlContainer';

export class TeamCalendarSceneToolbar extends Component {

    render() {
        return (
            <div className="team-calendar-scene-toolbar mdl-navigation">
                <TeamAbsenceCalendarDateControl />
                <AbsenceEditModeToggleButton />
            </div>
        )
    }

}

export default TeamCalendarSceneToolbar;
