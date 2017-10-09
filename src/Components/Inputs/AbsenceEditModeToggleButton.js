import React, {Component} from 'react';
import {Button} from './Button';

export class AbsenceEditModeToggleButton extends Component{
    render() {
        return (
            <Button clickHandler={this.props.toggleAbsenceEditEnabled}>
                <i className="material-icons">{this.getIcon()}</i>
            </Button>
        )
    }

    getIcon(){
        if(this.props.editMode) return "done";
        else return "mode_edit";
    }
}

export default AbsenceEditModeToggleButton;