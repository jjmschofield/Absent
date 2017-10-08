export function removeAbsenceRequest(absencesState, action){
    return Object.assign({}, absencesState, {
        isUpdating: true,
        updateError: false
    });
}

export function removeAbsenceSuccess(absencesState, action){
    let absencesStateCopy = Object.assign({}, absencesState, {
        isUpdating: false,
        updateError: false,
        lastUpdated: new Date()
    });

    delete absencesStateCopy.absencesById[action.apiJsonResponse.id];

    return absencesStateCopy;
}

export function removeAbsenceFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        isUpdating: false,
        updateError: true
    });
}

function getAbsenceFromApiResponse(apiAbsenceObject){
    return apiAbsenceObject;
}