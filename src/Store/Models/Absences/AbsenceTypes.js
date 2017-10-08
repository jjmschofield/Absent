export const AbsenceTypes = {
    PUBLIC_HOLIDAY: "P",
    TRAINING: "T",
    VACATION: "V",
    PRESENT: null, //If the absence is of the PRESENT type it is not an absence! This can be used as an intermediary before deletion.
};

export function getTypeReadableName(type){

    if(type === AbsenceTypes.PUBLIC_HOLIDAY){
        return "Public Holiday";
    }
    else if (type === AbsenceTypes.TRAINING){
        return "Training";
    }
    else if (type === AbsenceTypes.VACATION){
        return "Vacation";
    }
    else if (type === AbsenceTypes.PRESENT){
        return "Present";
    }

    console.warn("Attempted to get a name for an invalid Absence type", type);

    return "Invalid";
}


export default AbsenceTypes;