import { connect } from 'react-redux';
import {TeamCalendarScene} from './TeamCalendarScene';

const mapStateToProps = (state) => {
    return {
        absences: state.absences,
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const TeamCalendarSceneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamCalendarScene);

export default TeamCalendarSceneContainer

