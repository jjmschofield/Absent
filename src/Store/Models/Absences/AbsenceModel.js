import {getIsoDateFromString, getDateFromIsoDate} from '../../Helpers/DateHelpers';


export class Absence{
    constructor(userId, date, unit, type){
        this.userId = userId;
        this.isoDate = getIsoDateFromString(date); //TODO - ideally this should be returned from the API in a standard, timestamp, ISO or RFC2822 format
        this.date = getDateFromIsoDate(this.isoDate);
        this.timestamp = this.date.getTime();
        this.unit = unit;
        this.type = type;
    }
}

export default Absence;