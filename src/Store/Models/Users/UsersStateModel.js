import {State} from '../StateModel';

export class UsersState extends State{
    constructor(){
        super();
        this.usersById = {};
    }
}

export default UsersState;
