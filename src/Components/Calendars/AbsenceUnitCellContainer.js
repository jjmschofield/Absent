import { connect } from 'react-redux';
import {AbsenceUnitCell} from './AbsenceUnitCell';
import {addAbsence, updateAbsences} from '../../Store/Actions/Absences';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.auth.currentUserId,
        editMode: state.interaction.absenceEditEnabled,
        selectedAbsenceEditType: state.interaction.absenceEditSelectedType
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAbsence: (absence) => dispatch(updateAbsences(absence)),
        addAbsence: (absence) => dispatch(addAbsence(absence))
    }
};

const AbsenceUnitCellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AbsenceUnitCell);

export default AbsenceUnitCellContainer

