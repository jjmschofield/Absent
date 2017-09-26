import {State} from '../StateModel';

export class AbsencesState extends State{
    constructor(){
        super();
        this.absencesByTimestamp = {};
    }
}

export default AbsencesState;
