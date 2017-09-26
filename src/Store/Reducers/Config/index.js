import {SET_CONFIG} from '../../Actions/Config';
import {setConfigReducer} from './SetConfigReducers';

export default function config(configState = {}, action) {
    switch (action.type) {
        case SET_CONFIG:
            return setConfigReducer(configState, action);
        default:
            return configState
    }
}