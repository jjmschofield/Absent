export function addAbsenceRequest(absencesState, action){
    return Object.assign({}, absencesState, {
        isUpdating: true,
        updateError: false
    });
}

export function addAbsenceSuccess(absencesState, action){
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

export function addAbsenceFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        isUpdating: false,
        updateError: true
    });
}

function getAbsenceFromApiResponse(apiAbsenceObject){
    return apiAbsenceObject;
}