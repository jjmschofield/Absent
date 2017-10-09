import {getIsoDateFromString, getDateFromIsoDate} from '../../Helpers/DateHelpers';
import {AbsenceTypes, getReadableTypeName} from './AbsenceTypes';


export class Absence{
    constructor(id = null, userId, date, unit, type = AbsenceTypes.PRESENT){ //If the type is not specified we set the absence to being present as per the API data spec
        this.id = id;
        this.userId = userId;
        this.date = getDateFromArg(date);
        this.timestamp = this.date.getTime();
        this.unit = unit;
        this.type = type;
        this.typeName = getReadableTypeName(this.type);
    }
}

function getDateFromArg(dateArg){
    if(dateArg instanceof Date){
        return dateArg;
    }
    else if(typeof dateArg === "string"){
        let isoDateString = getIsoDateFromString(dateArg);
        if(isoDateString.length > 0) return getDateFromIsoDate(isoDateString);
    }

    return null;
}

export default Absence;