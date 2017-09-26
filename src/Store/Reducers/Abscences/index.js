import {AbsencesState} from '../../Models/Absences/AbsenceStateModel';
import {
    FETCH_ABSENCES_REQUEST, FETCH_ABSENCES_SUCCESS, FETCH_ABSENCES_FAILURE
} from '../../Actions/Absences';
import {fetchAbsencesRequest, fetchAbsencesSuccess, fetchAbsencesFailure} from './FetchAbsencesReducers';

export default function absences(absenceState = new AbsencesState(), action) {
    switch (action.type) {
        case FETCH_ABSENCES_REQUEST:
            return fetchAbsencesRequest(absenceState, action);
        case FETCH_ABSENCES_SUCCESS:
            return fetchAbsencesSuccess(absenceState, action);
        case FETCH_ABSENCES_FAILURE:
            return fetchAbsencesFailure(absenceState, action);
        default:
            return absenceState
    }
}