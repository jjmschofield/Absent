import React, {Component} from 'react';
import {Button} from './Button';

export class AbsenceEditModeToggleButton extends Component{
    render() {
        return (
            <Button clickHandler={this.props.toggleAbsenceEditEnabled}>
                <i className="material-icons">mode_edit</i>
            </Button>
        )
    }
}

export default AbsenceEditModeToggleButton;