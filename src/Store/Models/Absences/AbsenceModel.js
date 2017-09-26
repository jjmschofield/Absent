import {GetStandardDateString} from '../../Helpers/DateHelpers';


export class Absence{
    constructor(userId, date, unit, type){
        this.userId = userId;
        this.dateString = GetStandardDateString(date); //TODO - ideally this should be returned from the API in a standard, timestamp, ISO or RFC2822 format
        this.unit = unit;
        this.type = type;
    }
}

export default Absence;