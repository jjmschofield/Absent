import {Absence} from '../../Models/Absences/AbsenceModel';

export function fetchAbsencesRequest(absencesState, action){
    return Object.assign({}, absencesState, {
        isFetching: true,
        fetchError: false
    });
}

export function fetchAbsencesSuccess(absencesState, action){
    return Object.assign({}, absencesState, {
        absencesById: getAbsencesByIdFromApiResponse(action.apiJsonResponse),
        isFetching: false,
        fetchError: false,
        lastUpdated: new Date()
    });
}

export function fetchAbsencesFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        isFetching: false,
        fetchError: true
    });
}

function getAbsencesByIdFromApiResponse(apiJsonResponse){
    let absencesById = {};

    for(let i = 0; i < apiJsonResponse.length; i++){
        let absence = getAbsenceFromApiResponse(apiJsonResponse[i]);
        absencesById[absence.id] = absence;
    }

    return absencesById;
}

function getAbsenceFromApiResponse(apiAbsenceObject){
    return  new Absence(
        apiAbsenceObject.id,
        apiAbsenceObject.userid,
        apiAbsenceObject.date,
        apiAbsenceObject.unit,
        apiAbsenceObject.value
    );
}