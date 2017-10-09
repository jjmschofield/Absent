export function setAbsenceEditSelectedTypeReducer(interactionState, action) {
    return Object.assign({}, interactionState, {
        ...interactionState,
        absenceEditSelectedType: action.absenceType
    });
}

export function toggleAbsenceEditEnabledReducer(interactionState, action) {
    return Object.assign({}, interactionState, {
        ...interactionState,
        absenceEditEnabled: !interactionState.absenceEditEnabled
    });
}