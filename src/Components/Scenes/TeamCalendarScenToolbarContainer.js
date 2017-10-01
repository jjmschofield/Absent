import { connect } from 'react-redux';
import {TeamCalendarSceneToolbar} from './TeamCalendarSceneToolbar';
import { setVisibleDates } from '../../Store/Actions/TeamCalendar';

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

const TeamCalendarSceneToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamCalendarSceneToolbar);

export default TeamCalendarSceneToolbarContainer

