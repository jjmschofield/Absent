import {UsersState} from '../../Models/Users/UsersStateModel';
import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
    ADD_ABSENCE_TO_USER, REMOVE_ABSENCE_FROM_USER
} from '../../Actions/Users';
import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} from './FetchUsersReducers';
import {addAbsenceToUser, removeAbsenceFromUSer} from './RelateUserToAbsenceReducers';

export default function users(usersState = new UsersState(), action) {
    switch (action.type) {

        //FETCH
        case FETCH_USERS_REQUEST:
            return fetchUsersRequest(usersState, action);
        case FETCH_USERS_SUCCESS:
            return fetchUsersSuccess(usersState, action);
        case FETCH_USERS_FAILURE:
            return fetchUsersFailure(usersState, action);

        //RELATE TODO - these only exist as there is no database tracking the relationships between entities - typically we might refresh the whole user object for consistency
        case ADD_ABSENCE_TO_USER:
            return addAbsenceToUser(usersState, action);

        case REMOVE_ABSENCE_FROM_USER:
            return removeAbsenceFromUSer(usersState, action);


        default:
            return usersState
    }
}