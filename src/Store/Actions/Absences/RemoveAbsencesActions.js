import {FakeApiRequest} from '../../Helpers/ApiHelpers'
import {Store} from '../../index'
import {removeAbsenceFromUser} from '../Users/RelateAbsenceToUserActions';


export const REMOVE_ABSENCE_REQUEST = 'REMOVE_ABSENCE_REQUEST';
export function removeAbsenceRequest() {
    return {type: REMOVE_ABSENCE_REQUEST}
}

export const REMOVE_ABSENCE_FAILURE = 'REMOVE_ABSENCE_FAILURE';
export function removeAbsenceFailure(error) {
    console.error('An error occured.', error);
    return {type: REMOVE_ABSENCE_FAILURE}
}

export const REMOVE_ABSENCE_SUCCESS = 'REMOVE_ABSENCE_SUCCESS';
export function removeAbsenceSuccess(apiJsonResponse) {
    return {type: REMOVE_ABSENCE_SUCCESS, apiJsonResponse}
}

export function removeAbsence(newAbsence) {

    Store.dispatch(removeAbsenceRequest());

    return function () {
        FakeApiRequest(newAbsence)
            .then(
                (json) => {
                    Store.dispatch(removeAbsenceFromUser(json)); //TODO - we might want to instead refresh the user object here to ensure everything ties up with the database
                    Store.dispatch(removeAbsenceSuccess(json));
                }
            )
            .catch(
                (error) => Store.dispatch(removeAbsenceFailure(error))
            );
    };
}