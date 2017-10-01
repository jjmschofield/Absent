import React, {Component} from 'react';
import TeamAbsenceCalendar from '../Calendars/TeamAbsenceCalendar/TeamAbsenceCalendarContainer'
import './TeamCalendarScene.css';

export class TeamCalendarScene extends Component {

    render() {
        return (
            <div className="team-calendar-scene">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <TeamAbsenceCalendar />
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamCalendarScene;


