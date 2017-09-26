import {Absence} from '../../Models/Absences/AbsenceModel';

export function fetchAbsencesRequest(absencesState, action){
    return Object.assign({}, absencesState, {
        ...absencesState,
        isFetching: true,
        fetchError: false
    });
}

export function fetchAbsencesSuccess(absencesState, action){
    return Object.assign({}, absencesState, {
        ...absencesState,
        absencesByTimestamp: getAbsencesByTimestampFromApiResponse(action.apiJsonResponse),
        isFetching: false,
        fetchError: false,
        lastUpdated: new Date()
    });
}

function getAbsencesByTimestampFromApiResponse(apiJsonResponse){
    let absencesByTimestamp = {};

    for(let i = 0; i < apiJsonResponse.length; i++){ //TODO - this should be revised once required data structure is better understood

        let absence = new Absence(apiJsonResponse[i].userid, apiJsonResponse[i].date, apiJsonResponse[i].unit, apiJsonResponse[i].type);
        if(!absencesByTimestamp[absence.timestamp]) absencesByTimestamp[absence.timestamp] = [];
        absencesByTimestamp[absence.timestamp].push(absence);
    }

    return absencesByTimestamp;
}

export function fetchAbsencesFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        ...absencesState,
        isFetching: false,
        fetchError: true
    });
}