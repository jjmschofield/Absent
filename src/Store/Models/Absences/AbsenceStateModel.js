import {State} from '../StateModel';

export class AbsencesState extends State{
    constructor(){
        super();
        this.absencesByTimestamp = {}; //TODO - the storage structure here needs more thought
    }
}

export default AbsencesState;
