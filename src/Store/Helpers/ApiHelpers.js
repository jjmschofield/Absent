import fetch from 'isomorphic-fetch';
import csvjson from 'csvjson';

export function ApiRequest(endpoint){
    return fetch(endpoint)
        .then(
            response => {
                if(response.status === 200) {
                    return GetJsonFromCsvResponse(response); //TODO we always assume a content type of CSV - for a real API we would expect JSON or XML
                }
                else {
                    return Promise.reject(new Error(endpoint + " responded with HTTP status " + response.status))
                }
            }
        )
}

function GetJsonFromCsvResponse(response){
    return response.text().then(
        csv => csvjson.toObject(csv,{})
    );
}