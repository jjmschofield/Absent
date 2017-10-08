import {FakeApiRequest} from '../../Helpers/ApiHelpers'
import {Store} from '../../index'


export const UPDATE_ABSENCES_REQUEST = 'UPDATE_ABSENCES_REQUEST';
export function updateAbsencesRequest() {
    return {type: UPDATE_ABSENCES_REQUEST}
}

export const UPDATE_ABSENCES_FAILURE = 'UPDATE_ABSENCES_FAILURE';
export function updateAbsencesFailure(error) {
    console.error('An error occured.', error);
    return {type: UPDATE_ABSENCES_FAILURE}
}

export const UPDATE_ABSENCES_SUCCESS = 'UPDATE_ABSENCES_SUCCESS';
export function updateAbsencesSuccess(apiJsonResponse) {
    return {type: UPDATE_ABSENCES_SUCCESS, apiJsonResponse}
}

export function updateAbsences(updatedAbsence) {

    Store.dispatch(updateAbsencesRequest());

    return function () {
        FakeApiRequest()
            .then(
                (json) => Store.dispatch(updateAbsencesSuccess(updatedAbsence))
            )
            .catch(
                (error) => Store.dispatch(updateAbsencesFailure(error))
            );
    };
}
