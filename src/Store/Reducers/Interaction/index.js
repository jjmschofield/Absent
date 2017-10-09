import {InteractionStateModel} from '../../Models/Interaction/InteractionStateModel';
import {SET_ABSENCE_EDIT_SELECTED_TYPE, TOGGLE_ABSENCE_EDIT_ENABLED} from '../../Actions/Interaction';
import {setAbsenceEditSelectedTypeReducer, toggleAbsenceEditEnabledReducer} from './SetInteractionReducers';

export default function interaction(interactionState = new InteractionStateModel(), action) {
    switch (action.type) {
        case SET_ABSENCE_EDIT_SELECTED_TYPE:
            return setAbsenceEditSelectedTypeReducer(interactionState, action);
        case TOGGLE_ABSENCE_EDIT_ENABLED:
            return toggleAbsenceEditEnabledReducer(interactionState, action);
        default:
            return interactionState
    }
}