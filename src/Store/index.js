import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import absences from './Reducers/Abscences'
import config from './Reducers/Config'
import users from './Reducers/Users'

export function CreateStore() {
    let logger = createLogger();

    const providerEditors = combineReducers({
        config,
        users,
        absences
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