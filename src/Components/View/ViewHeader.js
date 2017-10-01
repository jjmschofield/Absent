import React, {Component} from 'react';
import {LogoIcon, GitHubIcon, LinkedInIcon} from '../Icons/index';
import TeamCalendarSceneToolbar from '../Calendars/TeamAbsenceCalendar/TeamAbsenceCalendarDateControlContainer'

export class ViewHeader extends Component {

    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <div className="mdl-layout-title">
                        <LogoIcon />
                        &nbsp;Absent - Plan your leave
                    </div>
                    <div className="mdl-layout-spacer"></div>
                    <TeamCalendarSceneToolbar />
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="http://github.com/jjmschofield/Absent">
                            <GitHubIcon />&nbsp;Source Code
                        </a>

                        <a className="mdl-navigation__link" href="https://www.linkedin.com/in/jackschofield85/">
                            <LinkedInIcon /> Get In Touch
                        </a>
                    </nav>
                </div>
            </header>
        )
    }

}

export default ViewHeader;
