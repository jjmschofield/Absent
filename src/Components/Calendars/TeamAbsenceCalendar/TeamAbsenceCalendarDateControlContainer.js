import { connect } from 'react-redux';
import {TeamAbsenceCalendarDateControl} from './TeamAbsenceCalendarDateControl';
import { setVisibleDates } from '../../../Store/Actions/TeamCalendar';

const mapStateToProps = (state) => {
    return {
        visibleDates: state.teamCalendar.visibleDates
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setVisibleDates: (dates) =>{
            dispatch(setVisibleDates(dates));
        }
    }
};

const TeamAbsenceCalendarDateControlContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamAbsenceCalendarDateControl);

export default TeamAbsenceCalendarDateControlContainer

