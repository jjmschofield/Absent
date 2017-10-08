import {AuthStateModel} from '../../Models/Auth/AuthStateModel';

export default function auth(interactionState = new AuthStateModel(), action) {
    switch (action.type) {
        default:
            return interactionState
    }
}