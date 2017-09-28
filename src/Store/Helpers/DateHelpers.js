export function GetStandardDateString(nonStandardDateString){
    let dateStringRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/; //ISO 8601 Regex
    return nonStandardDateString.match(dateStringRegex)[0];
}


export function getFullMonth(date){
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[date.getMonth()];
}

export function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}