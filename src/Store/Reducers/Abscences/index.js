import {AbsencesState} from '../../Models/Absences/AbsenceStateModel';
import {
    FETCH_ABSENCES_REQUEST, FETCH_ABSENCES_SUCCESS, FETCH_ABSENCES_FAILURE,
    UPDATE_ABSENCES_REQUEST, UPDATE_ABSENCES_SUCCESS, UPDATE_ABSENCES_FAILURE
} from '../../Actions/Absences';

import {fetchAbsencesRequest, fetchAbsencesSuccess, fetchAbsencesFailure} from './FetchAbsencesReducers';
import {updateAbsencesRequest, updateAbsencesSuccess, updateAbsencesFailure} from './UpdateAbsencesReducers';

export default function absences(absenceState = new AbsencesState(), action) {
    switch (action.type) {
        //FETCH
        case FETCH_ABSENCES_REQUEST:
            return fetchAbsencesRequest(absenceState, action);
        case FETCH_ABSENCES_SUCCESS:
            return fetchAbsencesSuccess(absenceState, action);
        case FETCH_ABSENCES_FAILURE:
            return fetchAbsencesFailure(absenceState, action);

        //UPDATE
        case UPDATE_ABSENCES_REQUEST:
            return updateAbsencesRequest(absenceState, action);
        case UPDATE_ABSENCES_SUCCESS:
            return updateAbsencesSuccess(absenceState, action);
        case UPDATE_ABSENCES_FAILURE:
            return updateAbsencesFailure(absenceState, action);

        //DEFAULT
        default:
            return absenceState
    }
}