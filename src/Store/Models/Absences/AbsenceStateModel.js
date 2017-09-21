export class AbsencesState{
    constructor(){
        this.absencesByTimestamp = {};
        this.isFetching = false;
        this.lastUpdated = null;
    }
}

export default AbsencesState;
