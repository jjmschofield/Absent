export function fetchAbsencesRequest(absencesState, action){
    return Object.assign({}, absencesState, {
        isFetching: true,
        fetchError: false
    });
}

export function fetchAbsencesSuccess(absencesState, action){
    return Object.assign({}, absencesState, {
        isFetching: false,
        fetchError: false
    });
}

export function fetchAbsencesFailure(absencesState, action){
    return Object.assign({}, absencesState, {
        isFetching: false,
        fetchError: true
    });
}