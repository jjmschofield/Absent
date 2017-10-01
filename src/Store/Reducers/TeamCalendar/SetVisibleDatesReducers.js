export function setVisibleDatesReducer(teamCalendarState, action) {
    return Object.assign({}, teamCalendarState, {
        visibleDates: action.dates
    });
}