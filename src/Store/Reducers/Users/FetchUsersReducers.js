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
        let user = apiJsonResponse[i];
        usersById[user.userid] = new User(user.userid, user.name); //TODO - note that we are not de-duping the CSV data set, it's expected that an API would only return one object per user, as users are keyed by ID the resultant object will be (implicitly) de-duped
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