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
        absencesByDate: getAbsencesByDateFromApiResponse(action.apiJsonResponse),
        isFetching: false,
        fetchError: false,
        lastUpdated: new Date()
    });
}

function getAbsencesByDateFromApiResponse(apiJsonResponse){
    let absencesByDate = {};

    for(let i = 0; i < apiJsonResponse.length; i++){ //TODO - this should be revised once required data structure is better understood

        let absence = new Absence(
            apiJsonResponse[i].userid,
            apiJsonResponse[i].date,
            apiJsonResponse[i].unit,
            apiJsonResponse[i].value
        );

        if(!absencesByDate[absence.dateString]) absencesByDate[absence.dateString] = [];

        absencesByDate[absence.dateString].push(absence);
    }

    return absencesByDate;
}

export function fetchAbsencesFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        ...absencesState,
        isFetching: false,
        fetchError: true
    });
}