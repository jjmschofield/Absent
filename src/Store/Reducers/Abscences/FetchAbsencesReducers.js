import {Absence} from '../../Models/Absences/AbsenceModel';

export function fetchAbsencesRequest(absencesState, action){
    return Object.assign({}, absencesState, {
        isFetching: true,
        fetchError: false
    });
}

export function fetchAbsencesSuccess(absencesState, action){
    return Object.assign({}, absencesState, {
        absencesByTimestamp: getAbsencesByDateFromApiResponse(action.apiJsonResponse),
        absencesByUserId: getAbsencesByUserIdFromApiResponse(action.apiJsonResponse), //TODO - this is nasty nesting (and duplication), if absences had a unique ID this could be simplified
        isFetching: false,
        fetchError: false,
        lastUpdated: new Date()
    });
}

function getAbsencesByDateFromApiResponse(apiJsonResponse){
    let absencesByTimestamp = {};

    for(let i = 0; i < apiJsonResponse.length; i++){

        let absence = getAbsenceFromApiResponse(apiJsonResponse[i]);

        if(!absencesByTimestamp[absence.timestamp]) absencesByTimestamp[absence.timestamp] = [];

        absencesByTimestamp[absence.timestamp].push(absence);
    }

    return absencesByTimestamp;
}

function getAbsenceFromApiResponse(apiAbsenceObject){
   return  new Absence(
       apiAbsenceObject.userid,
       apiAbsenceObject.date,
       apiAbsenceObject.unit,
       apiAbsenceObject.value
    );
}

function getAbsencesByUserIdFromApiResponse(apiJsonResponse){
    let absencesByUserId = {};

    for(let i = 0; i < apiJsonResponse.length; i++){

        let absence = getAbsenceFromApiResponse(apiJsonResponse[i]);

        if(!absencesByUserId[absence.userId]) absencesByUserId[absence.userId] = {};

        if(!absencesByUserId[absence.userId][absence.timestamp]) absencesByUserId[absence.userId][absence.timestamp] = [];

        absencesByUserId[absence.userId][absence.timestamp].push(absence);
    }

    return absencesByUserId;
}

export function fetchAbsencesFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        isFetching: false,
        fetchError: true
    });
}