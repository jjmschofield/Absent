export class State{
    constructor(){
        this.isFetching = false;
        this.fetchError = false;
        this.lastUpdated = new Date();
    }
}

export default State;
