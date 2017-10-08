export class ApiDataState{
    constructor(){
        this.isFetching = false;
        this.fetchError = false;
        this.lastUpdated = new Date();
    }
}

export default ApiDataState;
