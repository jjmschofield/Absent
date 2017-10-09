import {ApiDataState} from '../ApiDataStateModel';

export class UsersState extends ApiDataState{
    constructor(){
        super();
        this.usersById = {};
    }
}

export default UsersState;
