import {UsersState} from '../../Models/Users/UsersStateModel';
import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE
} from '../../Actions/Users';
import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} from './FetchUsersReducers';

export default function users(usersState = new UsersState(), action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return fetchUsersRequest(usersState, action);
        case FETCH_USERS_SUCCESS:
            return fetchUsersSuccess(usersState, action);
        case FETCH_USERS_FAILURE:
            return fetchUsersFailure(usersState, action);
        default:
            return usersState
    }
}