import {ApiRequest} from '../../Helpers/ApiHelpers';
import {Store} from '../../index';


export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export function fetchUsersRequest() {
    return {type: FETCH_USERS_REQUEST}
}

export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export function fetchUsersFailure(error) {
    console.error('An error occured.', error);
    return {type: FETCH_USERS_FAILURE}
}

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export function fetchUsersSuccess(apiJsonResponse) {
    return {type: FETCH_USERS_SUCCESS, apiJsonResponse}
}

export function fetchUsers() {

    Store.dispatch(fetchUsersRequest());

    return function () {
        ApiRequest(Store.getState().config.apiConfig.usersEndpoint)
            .then(
                (json) => Store.dispatch(fetchUsersSuccess(json))
            )
            .catch(
                (error) => Store.dispatch(fetchUsersFailure(error))
            );
    };
}