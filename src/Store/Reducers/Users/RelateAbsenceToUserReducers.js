export function addAbsenceToUser(usersState, action){
    let userStateCopy = Object.assign({}, usersState, {});
    userStateCopy.usersById[action.absence.userId].absences.push(action.absence.id);
    return userStateCopy;
}

export function removeAbsenceFromUSer(usersState, action){
    let userStateCopy = Object.assign({}, usersState, {});

    let absenceIndex = userStateCopy.usersById[action.absence.userId].absences.indexOf(action.absence.id);

    userStateCopy.usersById[action.absence.userId].absences.splice(absenceIndex, 1);

    return userStateCopy;
}