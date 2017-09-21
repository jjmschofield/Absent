import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';


export function CreateStore() {
    let logger = createLogger();

    const providerEditors = combineReducers({});

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