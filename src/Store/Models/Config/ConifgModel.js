import {ApiConfig} from './ApiConfigModel'

export class Config{
    constructor(env){
        this.apiConfig = new ApiConfig(env);
    }
}

export default Config;
