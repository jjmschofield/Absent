import {Absence} from '../../Models/Absences/AbsenceModel';
import {ApiRequest} from '../../Helpers/ApiHelpers'
import {Store} from '../../index'


export const FETCH_ABSENCES_REQUEST = 'FETCH_ABSENCES_REQUEST';
export function fetchAbsencesRequest() {
    return {type: FETCH_ABSENCES_REQUEST}
}

export const FETCH_ABSENCES_FAILURE = 'FETCH_ABSENCES_FAILURE';
export function fetchAbsencesFailure(error) {
    console.error('An error occured.', error);
    return {type: FETCH_ABSENCES_FAILURE}
}

export const FETCH_ABSENCES_SUCCESS = 'FETCH_ABSENCES_SUCCESS';
export function fetchAbsencesSuccess(absences) {
    return {type: FETCH_ABSENCES_SUCCESS, absences}
}

export function fetchAbsences() {

    Store.dispatch(fetchAbsencesRequest());

    return function () {
        ApiRequest('/sampledata.csv')
            .then(
                (json) => Store.dispatch(fetchAbsencesSuccess(json))
            )
            .catch(
                (error) => Store.dispatch(fetchAbsencesFailure(error))
            );
    };
}