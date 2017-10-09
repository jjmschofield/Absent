export const SET_ABSENCE_EDIT_SELECTED_TYPE = 'SET_ABSENCE_EDIT_SELECTED_TYPE';
export function setAbsenceEditSelectedType(absenceType) {
    return {type: SET_ABSENCE_EDIT_SELECTED_TYPE, absenceType};
}

export const TOGGLE_ABSENCE_EDIT_ENABLED = 'TOGGLE_ABSENCE_EDIT_ENABLED';
export function toggleAbsenceEditEnabled() {
    return {type: TOGGLE_ABSENCE_EDIT_ENABLED};
}