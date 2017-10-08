import {FakeApiRequest} from '../../Helpers/ApiHelpers'
import {Store} from '../../index'
import {addAbsenceToUser} from '../Users/RelateUserToAbsenceActions';


export const ADD_ABSENCE_REQUEST = 'ADD_ABSENCE_REQUEST';
export function addAbsenceRequest() {
    return {type: ADD_ABSENCE_REQUEST}
}

export const ADD_ABSENCE_FAILURE = 'ADD_ABSENCE_FAILURE';
export function addAbsenceFailure(error) {
    console.error('An error occured.', error);
    return {type: ADD_ABSENCE_FAILURE}
}

export const ADD_ABSENCE_SUCCESS = 'ADD_ABSENCE_SUCCESS';
export function addAbsenceSuccess(apiJsonResponse) {
    return {type: ADD_ABSENCE_SUCCESS, apiJsonResponse}
}

export function addAbsence(newAbsence) {

    Store.dispatch(addAbsenceRequest());

    return function () {
        FakeApiRequest(newAbsence)
            .then(
                (json) => {
                    let absence = giveAbsenceMockAbsenceId(json);
                    Store.dispatch(addAbsenceSuccess(absence));
                    Store.dispatch(addAbsenceToUser(absence)); //TODO - we might want to instead refresh the user object here to ensure everything ties up with the database
                }
            )
            .catch(
                (error) => Store.dispatch(addAbsenceFailure(error))
            );
    };
}

function giveAbsenceMockAbsenceId(absence){ //TODO - this should not be used in production - it is a work around for not having an API providing a unique key for new absences
    absence.id = Object.keys(Store.getState().absences.absencesById).length + 1;
    return absence;
}