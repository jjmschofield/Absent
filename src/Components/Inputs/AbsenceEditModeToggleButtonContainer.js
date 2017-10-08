import {connect} from 'react-redux';
import {AbsenceEditModeToggleButton} from './AbsenceEditModeToggleButton';
import {toggleAbsenceEditEnabled} from '../../Store/Actions/Interaction';

const mapStateToProps = (state) => {
    return {
        editMode: state.interaction.absenceEditEnabled
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAbsenceEditEnabled: () => {
            dispatch(toggleAbsenceEditEnabled());
        }
    }
};

const AbsenceEditModeToggleButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AbsenceEditModeToggleButton);

export default AbsenceEditModeToggleButtonContainer

