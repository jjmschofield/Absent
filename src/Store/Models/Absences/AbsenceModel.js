export class Absence{
    constructor(userId, date, unit, type){
        this.userId = userId;
        this.date = date;
        this.timestamp = + new Date(this.date); //TODO - confirm cross browser support - + forces the date object to an int value / true unix timestamp
        this.unit = unit;
        this.type = type;
    }
}

export default Absence;