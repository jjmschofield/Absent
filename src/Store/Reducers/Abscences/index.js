import {AbsencesState} from '../../Models/Absences/AbsenceStateModel';
import {
    FETCH_ABSENCES_REQUEST, FETCH_ABSENCES_SUCCESS, FETCH_ABSENCES_FAILURE,
    UPDATE_ABSENCE_REQUEST, UPDATE_ABSENCE_SUCCESS, UPDATE_ABSENCE_FAILURE,
    ADD_ABSENCE_REQUEST, ADD_ABSENCE_SUCCESS, ADD_ABSENCE_FAILURE,
    REMOVE_ABSENCE_REQUEST, REMOVE_ABSENCE_SUCCESS, REMOVE_ABSENCE_FAILURE
} from '../../Actions/Absences';

import {fetchAbsencesRequest, fetchAbsencesSuccess, fetchAbsencesFailure} from './FetchAbsencesReducers';
import {updateAbsenceRequest, updateAbsenceSuccess, updateAbsenceFailure} from './UpdateAbsenceReducers';
import {addAbsenceRequest, addAbsenceSuccess, addAbsenceFailure} from './AddAbsenceReducers';
import {removeAbsenceRequest, removeAbsenceSuccess, removeAbsenceFailure} from './RemoveAbsenceReducers';

export default function absences(absenceState = new AbsencesState(), action) {
    switch (action.type) {
        //FETCH
        case FETCH_ABSENCES_REQUEST:
            return fetchAbsencesRequest(absenceState, action);
        case FETCH_ABSENCES_SUCCESS:
            return fetchAbsencesSuccess(absenceState, action);
        case FETCH_ABSENCES_FAILURE:
            return fetchAbsencesFailure(absenceState, action);

        //ADD
        case ADD_ABSENCE_REQUEST:
            return addAbsenceRequest(absenceState, action);
        case ADD_ABSENCE_SUCCESS:
            return addAbsenceSuccess(absenceState, action);
        case ADD_ABSENCE_FAILURE:
            return addAbsenceFailure(absenceState, action);

        //UPDATE
        case UPDATE_ABSENCE_REQUEST:
            return updateAbsenceRequest(absenceState, action);
        case UPDATE_ABSENCE_SUCCESS:
            return updateAbsenceSuccess(absenceState, action);
        case UPDATE_ABSENCE_FAILURE:
            return updateAbsenceFailure(absenceState, action);

        //REMOVE
        case REMOVE_ABSENCE_REQUEST:
            return removeAbsenceRequest(absenceState, action);
        case REMOVE_ABSENCE_SUCCESS:
            return removeAbsenceSuccess(absenceState, action);
        case REMOVE_ABSENCE_FAILURE:
            return removeAbsenceFailure(absenceState, action);

        //DEFAULT
        default:
            return absenceState
    }
}