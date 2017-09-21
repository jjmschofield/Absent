export class Absence{
    constructor(userId, timestamp, period, type){
        this.userId = userId;
        this.timestamp = timestamp;
        this.period = period;
        this.type = type;
    }
}

export default Absence;