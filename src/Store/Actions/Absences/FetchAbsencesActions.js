import fetch from 'isomorphic-fetch';
import csvjson from 'csvjson';
import {Absence} from '../../Models/Absences/AbsenceModel';


export const FETCH_ABSENCES_REQUEST = 'FETCH_ABSENCES_REQUEST';
export function fetchAbsencesRequest() {
    return {type: FETCH_ABSENCES_REQUEST}
}

export const FETCH_ABSENCES_FAILURE = 'FETCH_ABSENCES_FAILURE';
export function fetchAbsencesFailure(error) {
    console.error('An error occured.', error);
    return {type: FETCH_ABSENCES_FAILURE}
}

export const FETCH_ABSENCES_SUCCESS = 'FETCH_ABSENCES_SUCCESS';
export function fetchAbsencesSuccess(absences) {
    return {type: FETCH_ABSENCES_SUCCESS, absences}
}

export function fetchAbsences(dispatch, callback = ()=>{}) {

    dispatch(fetchAbsencesRequest());

    return function () {
        fetch('/sampledata.csv')
            .then(
                response => {
                    GetJsonFromCsvResponse(response).then(
                        json => {
                            let absences = json;
                            dispatch(fetchAbsencesSuccess(absences));
                            callback(absences);
                        }
                    );
                },
                error => dispatch(fetchAbsencesFailure(error))
            );
    };
}



function GetJsonFromCsvResponse(response){
    return response.text().then(
        (result) => csvjson.toObject(result,{})
    );
}