export class ApiConfig{
    constructor(env){
        this.apiRoot = getApiRootByEnv(env);
        this.absencesEndpoint = this.apiRoot + "sampledata.csv" ;
        this.usersEndpoint = this.apiRoot + "sampledata.csv";
    }
}

function getApiRootByEnv(env){

    switch(env){
        case("development"):
            return "/";
        case("production"):
            return "/";
        default:
            return "/"
    }

}