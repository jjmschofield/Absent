import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import absences from './Reducers/Abscences'

export function CreateStore() {
    let logger = createLogger();

    const providerEditors = combineReducers({absences});

    let store = createStore(
        providerEditors,
        applyMiddleware(
            thunk,
            logger
        )
    );

    return store;
}

export default CreateStore;