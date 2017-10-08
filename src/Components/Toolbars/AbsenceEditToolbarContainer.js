import {connect} from 'react-redux';
import {AbsenceEditToolBar} from './AbsenceEditToolbar';
import {setAbsenceEditSelectedType} from '../../Store/Actions/Interaction';

const mapStateToProps = (state) => {
    return {
        selectedAbsenceType: state.interaction.absenceEditSelectedType
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAbsenceEditSelectedType: (absenceType) => {
            dispatch(setAbsenceEditSelectedType(absenceType));
        }
    }
};

const AbsenceEditToolBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AbsenceEditToolBar);

export default AbsenceEditToolBarContainer

