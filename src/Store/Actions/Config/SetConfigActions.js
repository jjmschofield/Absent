import {Config} from '../../Models/Config/ConifgModel';

export const SET_CONFIG = 'SET_CONFIG';
export function setConfig(env) {
    let config = new Config(env);
    return {type: SET_CONFIG, config};
}