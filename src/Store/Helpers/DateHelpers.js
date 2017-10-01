export function getIsoDateFromString(nonStandardDateString){
    let dateStringRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/; //ISO 8601 Regex
    return nonStandardDateString.match(dateStringRegex)[0];
}

export function getDateFromIsoDate(isoString){
    return new Date(isoString);
}

export function getFullMonth(date){
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[date.getMonth()];
}

export function getShortMonth(date){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    return monthNames[date.getMonth()];
}

export function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}
