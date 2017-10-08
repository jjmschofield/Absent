import {Store} from '../../index'

export const ADD_ABSENCE_TO_USER = 'ADD_ABSENCE_TO_USER';
export function addAbsenceToUser(absence) {

    return {type: ADD_ABSENCE_TO_USER, absence}
}

export const REMOVE_ABSENCE_FROM_USER = 'REMOVE_ABSENCE_FROM_USER';
export function removeAbsenceFromUser(absence) {
    return {type: REMOVE_ABSENCE_FROM_USER, absence}
}