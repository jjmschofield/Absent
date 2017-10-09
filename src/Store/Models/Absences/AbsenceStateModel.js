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

        if(absence){
            if(!absences[absence.timestamp]) absences[absence.timestamp] = [];
            absences[absence.timestamp].push(absence);
        }
        else{
            console.warn("Invalid relationship with absence Id of " + user.absences[i], user)
        }
    }

    return absences;
}

export default AbsencesState;
