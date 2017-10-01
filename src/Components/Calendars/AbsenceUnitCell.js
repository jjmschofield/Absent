import React, {Component} from 'react';

export class AbsenceUnitCell extends Component {

    render() {
        return <div className={this.getAbsenceClasses()} title={this.getTitle()}></div>;
    }

    getAbsenceClasses() {

        let classes = [];

        if(this.props.unit === "AM"){
            classes.push("AM");
        }
        else if (this.props.unit === "PM"){
            classes.push("PM");
        }

        if(this.props.absence){
            classes.push("booked");
            classes.push("absence-type-" + this.props.absence.type)
        }

        return classes.join(" ");
    }

    getTitle(){
        let title = this.props.unit;

        if(this.props.absence){
            title += ": Absent for " + this.props.absence.type;
        }
        else{
            title += ": Present";
        }

        return title;
    }
}

export default AbsenceUnitCell;



