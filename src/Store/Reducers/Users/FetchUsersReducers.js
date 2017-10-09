import {User} from '../../Models/Users/UserModel';

export function fetchUsersRequest(usersState, action){
    return Object.assign({}, usersState, {
        ...usersState,
        isFetching: true,
        fetchError: false
    });
}

export function fetchUsersSuccess(usersState, action){
    return Object.assign({}, usersState, {
        ...usersState,
        usersById: getUsersByIdFromApiResponse(action.apiJsonResponse),
        isFetching: false,
        fetchError: false,
        lastUpdated: new Date()
    });
}

function getUsersByIdFromApiResponse(apiJsonResponse){
    let usersById = {};

    for(let i = 0; i < apiJsonResponse.length; i++){
        let absence = apiJsonResponse[i]; //TODO - we are currently assuming users from a single CSV response which represents absences

        if(!usersById[absence.userid]) usersById[absence.userid] = new User(absence.userid, absence.name);
        usersById[absence.userid].absences.push(absence.id)
    }

    return usersById;
}

export function fetchUsersFailure(usersState, action){
    return Object.assign({}, usersState, {
        ...usersState,
        isFetching: false,
        fetchError: true
    });
}