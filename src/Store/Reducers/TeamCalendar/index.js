import {SET_VISIBLE_DATES} from '../../Actions/TeamCalendar';
import {setVisibleDatesReducer} from './SetVisibleDatesReducers';
import {TeamCalendarState} from '../../Models/TeamCalendar/TeamCalendarStateModel';

export default function teamCalendar(configState = new TeamCalendarState(), action) {
    switch (action.type) {
        case SET_VISIBLE_DATES:
            return setVisibleDatesReducer(configState, action);
        default:
            return configState
    }
}