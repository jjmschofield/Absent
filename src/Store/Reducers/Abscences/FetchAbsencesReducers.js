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
        isFetching: false,
        fetchError: false,
        lastUpdated: new Date()
    });
}

export function fetchAbsencesFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        ...absencesState,
        isFetching: false,
        fetchError: true
    });
}