import {Absence} from '../../Models/Absences/AbsenceModel';

export function updateAbsencesRequest(absencesState, action){
    return Object.assign({}, absencesState, {
        isUpdating: true,
        updateError: false
    });
}

export function updateAbsencesSuccess(absencesState, action){
    return Object.assign({}, absencesState, {
        absencesById: {
            ...absencesState.absencesById,
            [action.apiJsonResponse.id]: getAbsenceFromApiResponse(action.apiJsonResponse)
        },
        isUpdating: false,
        updateError: false,
        lastUpdated: new Date()
    });
}

export function updateAbsencesFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        isUpdating: false,
        updateError: true
    });
}

function getAbsenceFromApiResponse(apiAbsenceObject){
    return apiAbsenceObject;
}