import React, {Component} from 'react';
import {LogoIcon, GitHubIcon, LinkedInIcon} from '../Icons/index';

export class ViewFooter extends Component {
    render() {
        return (
            <footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">
                        <LogoIcon />
                        &nbsp;Absent Leave Planner Demo
                    </div>
                    <ul className="mdl-mini-footer__link-list">
                        <li>
                            <a href="http://github.com/jjmschofield/Absent">
                                <GitHubIcon />&nbsp;Source Code
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jackschofield85/">
                                <LinkedInIcon /> Get In Touch
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mdl-mini-footer__right-section">
                    <ul className="mdl-mini-footer__link-list">
                    <li>
                        <a href="https://www.linkedin.com/in/jackschofield85/">Copyright &copy; {new Date().getFullYear()} Jack Schofield</a>
                    </li>
                    </ul>
                </div>
            </footer>

        )
    }

}

export default ViewFooter;

