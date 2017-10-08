import {ApiDataState} from '../ApiDataStateModel';

export class AbsencesState extends ApiDataState{
    constructor(){
        super();
        this.absencesById = {};

        this.getAbsencesForUserByTimestamp = getAbsencesForUserByTimestamp;
    }
}

function getAbsencesForUserByTimestamp(user){
    let absences = {};

    for(let i = 0; i < user.absences.length; i++){
        let absence = this.absencesById[user.absences[i]];

        if(!absences[absence.timestamp]) absences[absence.timestamp] = [];

        absences[absence.timestamp].push(absence)
    }

    return absences;
}

export default AbsencesState;
