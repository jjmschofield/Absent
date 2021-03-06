import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import absences from './Reducers/Abscences';
import config from './Reducers/Config';
import users from './Reducers/Users';
import teamCalendar from './Reducers/TeamCalendar';
import interaction from './Reducers/Interaction';
import auth from './Reducers/Auth';

export function CreateStore() {
    let logger = createLogger();

    const providerEditors = combineReducers({
        config,
        users,
        absences,
        teamCalendar,
        interaction,
        auth
    });

    Store = createStore(
        providerEditors,
        applyMiddleware(
            thunk,
            logger
        )
    );

    return Store;
}

export let Store;

export default Store;