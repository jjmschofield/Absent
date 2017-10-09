import {AbsenceTypes} from '../Absences/AbsenceTypes';

export class InteractionStateModel{
    constructor(){
        this.absenceEditEnabled = false;
        this.absenceEditSelectedType = AbsenceTypes.VACATION;
    }
}

export default InteractionStateModel;
