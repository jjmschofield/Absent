export function GetStandardDateString(nonStandardDateString){
    let dateStringRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/; //ISO 8601 Regex
    return nonStandardDateString.match(dateStringRegex)[0];
}

