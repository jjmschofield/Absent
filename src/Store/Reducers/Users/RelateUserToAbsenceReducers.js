export function addAbsenceToUser(usersState, action){
    let userStateCopy = Object.assign({}, usersState, {});
    console.log(action.absence.userId);
    userStateCopy.usersById[action.absence.userId].absences.push(action.absence.id);
    return userStateCopy;
}