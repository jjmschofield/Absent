import {FakeApiRequest} from '../../Helpers/ApiHelpers'
import {Store} from '../../index'


export const UPDATE_ABSENCE_REQUEST = 'UPDATE_ABSENCE_REQUEST';
export function updateAbsenceRequest() {
    return {type: UPDATE_ABSENCE_REQUEST}
}

export const UPDATE_ABSENCE_FAILURE = 'UPDATE_ABSENCE_FAILURE';
export function updateAbsenceFailure(error) {
    console.error('An error occured.', error);
    return {type: UPDATE_ABSENCE_FAILURE}
}

export const UPDATE_ABSENCE_SUCCESS = 'UPDATE_ABSENCE_SUCCESS';
export function updateAbsenceSuccess(apiJsonResponse) {
    return {type: UPDATE_ABSENCE_SUCCESS, apiJsonResponse}
}

export function updateAbsence(updatedAbsence) {

    Store.dispatch(updateAbsenceRequest());

    return function () {
        FakeApiRequest()
            .then(
                (json) => Store.dispatch(updateAbsenceSuccess(updatedAbsence))
            )
            .catch(
                (error) => Store.dispatch(updateAbsenceFailure(error))
            );
    };
}
