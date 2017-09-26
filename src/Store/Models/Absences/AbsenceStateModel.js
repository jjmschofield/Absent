import {State} from '../StateModel';

export class AbsencesState extends State{
    constructor(){
        super();
        this.absencesByDate = {}; //TODO - the storage structure here needs more thought
    }
}

export default AbsencesState;
