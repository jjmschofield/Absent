export class ApiDataState{
    constructor(){
        this.isFetching = false;
        this.fetchError = false;
        this.isUpdating = false;
        this.updateError = false;
        this.lastUpdated = new Date();
    }
}

export default ApiDataState;
